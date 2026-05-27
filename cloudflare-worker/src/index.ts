export interface Env {
  FIREBASE_PROJECT_ID: string;
  FIREBASE_CLIENT_EMAIL: string;
  FIREBASE_PRIVATE_KEY: string; // service account private_key 값
}

// ─── Google OAuth2 액세스 토큰 발급 ───────────────────────────────────────────

function b64url(obj: object): string {
  return btoa(JSON.stringify(obj))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=/g, '');
}

async function getAccessToken(env: Env): Promise<string> {
  const now = Math.floor(Date.now() / 1000);
  const header = { alg: 'RS256', typ: 'JWT' };
  const claim = {
    iss: env.FIREBASE_CLIENT_EMAIL,
    scope: [
      'https://www.googleapis.com/auth/cloud-platform',
      'https://www.googleapis.com/auth/firebase.messaging',
    ].join(' '),
    aud: 'https://oauth2.googleapis.com/token',
    iat: now,
    exp: now + 3600,
  };

  const signingInput = `${b64url(header)}.${b64url(claim)}`;

  // PEM → ArrayBuffer
  const pem = env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n');
  const pemBody = pem
    .replace('-----BEGIN PRIVATE KEY-----', '')
    .replace('-----END PRIVATE KEY-----', '')
    .replace(/\s/g, '');
  const keyBytes = Uint8Array.from(atob(pemBody), (c) => c.charCodeAt(0));

  const cryptoKey = await crypto.subtle.importKey(
    'pkcs8',
    keyBytes,
    { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' },
    false,
    ['sign'],
  );

  const sig = await crypto.subtle.sign(
    'RSASSA-PKCS1-v1_5',
    cryptoKey,
    new TextEncoder().encode(signingInput),
  );

  const b64sig = btoa(String.fromCharCode(...new Uint8Array(sig)))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=/g, '');

  const jwt = `${signingInput}.${b64sig}`;

  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=${jwt}`,
  });

  const data = (await res.json()) as { access_token: string };
  return data.access_token;
}

// ─── 메인 로직 ────────────────────────────────────────────────────────────────

export default {
  async scheduled(_event: ScheduledEvent, env: Env, _ctx: ExecutionContext) {
    // KST 현재 시각
    const kst = new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Seoul' }));
    const hh = String(kst.getHours()).padStart(2, '0');
    const mm = String(kst.getMinutes()).padStart(2, '0');
    const currentTime = `${hh}:${mm}`;
    const today = [
      kst.getFullYear(),
      String(kst.getMonth() + 1).padStart(2, '0'),
      String(kst.getDate()).padStart(2, '0'),
    ].join('-');
    const dow = kst.getDay(); // 0=일, 6=토

    const token = await getAccessToken(env);
    const headers: Record<string, string> = {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    };
    const base = `https://firestore.googleapis.com/v1/projects/${env.FIREBASE_PROJECT_ID}/databases/(default)/documents`;

    // FCM 토큰 목록
    const tokensRes = await fetch(`${base}/fcmTokens`, { headers });
    const tokensJson = (await tokensRes.json()) as { documents?: { fields: { token: { stringValue: string } } }[] };
    const fcmTokens = (tokensJson.documents ?? [])
      .map((d) => d.fields?.token?.stringValue)
      .filter(Boolean) as string[];

    if (fcmTokens.length === 0) return;

    // hasAlarm=true인 이벤트 쿼리
    const queryRes = await fetch(`${base}:runQuery`, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        structuredQuery: {
          from: [{ collectionId: 'events' }],
          where: {
            fieldFilter: {
              field: { fieldPath: 'hasAlarm' },
              op: 'EQUAL',
              value: { booleanValue: true },
            },
          },
        },
      }),
    });

    const queryJson = (await queryRes.json()) as { document?: { fields: Record<string, unknown> } }[];
    const titles: string[] = [];

    for (const item of queryJson) {
      const f = item.document?.fields as Record<string, { stringValue?: string; arrayValue?: { values?: { integerValue?: string }[] } }> | undefined;
      if (!f) continue;

      const time = f.time?.stringValue;
      if (!time || time !== currentTime) continue;

      const type = f.type?.stringValue;
      const pattern = f.repeatPattern?.stringValue;
      const date = f.date?.stringValue;
      const repeatDays = (f.repeatDays?.arrayValue?.values ?? [])
        .map((v) => (v.integerValue != null ? parseInt(v.integerValue) : null))
        .filter((v): v is number => v !== null);

      let fires = false;
      if (type === 'recurring') {
        if (pattern === 'daily') fires = true;
        else if (pattern === 'weekdays') fires = dow >= 1 && dow <= 5;
        else if (pattern === 'weekends') fires = dow === 0 || dow === 6;
        else if (pattern === 'custom') fires = repeatDays.includes(dow);
      } else {
        fires = date === today;
      }

      if (fires) titles.push(f.title?.stringValue ?? '일정');
    }

    if (titles.length === 0) return;

    const body =
      titles.length === 1 ? titles[0] : `${titles[0]} 외 ${titles.length - 1}개`;

    // FCM 발송
    const fcmUrl = `https://fcm.googleapis.com/v1/projects/${env.FIREBASE_PROJECT_ID}/messages:send`;
    const expiredTokens: string[] = [];

    await Promise.all(
      fcmTokens.map(async (fcmToken) => {
        const res = await fetch(fcmUrl, {
          method: 'POST',
          headers,
          body: JSON.stringify({
            message: {
              token: fcmToken,
              notification: { title: '📅 일정 알림', body },
              webpush: {
                notification: {
                  icon: '/icons/icon-192.png',
                  badge: '/icons/icon-192.png',
                },
              },
            },
          }),
        });

        if (!res.ok) {
          const err = (await res.json()) as { error?: { details?: { errorCode?: string }[] } };
          const code = err.error?.details?.[0]?.errorCode;
          if (code === 'UNREGISTERED') expiredTokens.push(fcmToken);
        }
      }),
    );

    // 만료된 토큰 정리
    await Promise.all(
      expiredTokens.map((t) =>
        fetch(`${base}/fcmTokens/${t}`, { method: 'DELETE', headers }),
      ),
    );
  },
};
