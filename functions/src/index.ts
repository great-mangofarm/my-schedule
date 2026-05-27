import { onSchedule } from 'firebase-functions/v2/scheduler';
import * as admin from 'firebase-admin';

admin.initializeApp();
const db = admin.firestore();

export const sendAlarms = onSchedule(
  { schedule: 'every 1 minutes', timeZone: 'Asia/Seoul' },
  async () => {
    // KST 현재 시각
    const now = new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Seoul' }));
    const hh = String(now.getHours()).padStart(2, '0');
    const mm = String(now.getMinutes()).padStart(2, '0');
    const currentTime = `${hh}:${mm}`;
    const todayStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
    const dayOfWeek = now.getDay(); // 0=일, 6=토

    // 저장된 FCM 토큰 가져오기
    const tokensSnap = await db.collection('fcmTokens').get();
    const tokens = tokensSnap.docs
      .map((d) => d.data().token as string)
      .filter(Boolean);
    if (tokens.length === 0) return;

    // 알림 설정된 일정 조회
    const eventsSnap = await db
      .collection('events')
      .where('hasAlarm', '==', true)
      .get();

    const titles: string[] = [];

    for (const doc of eventsSnap.docs) {
      const ev = doc.data();
      if (!ev.time || ev.time !== currentTime) continue;

      let fires = false;
      if (ev.type === 'recurring') {
        if (ev.repeatPattern === 'daily') {
          fires = true;
        } else if (ev.repeatPattern === 'weekdays') {
          fires = dayOfWeek >= 1 && dayOfWeek <= 5;
        } else if (ev.repeatPattern === 'weekends') {
          fires = dayOfWeek === 0 || dayOfWeek === 6;
        } else if (ev.repeatPattern === 'custom') {
          fires = ((ev.repeatDays as number[]) ?? []).includes(dayOfWeek);
        }
      } else {
        // single / deadline
        fires = ev.date === todayStr;
      }

      if (fires) titles.push(ev.title as string);
    }

    if (titles.length === 0) return;

    const body =
      titles.length === 1 ? titles[0] : `${titles[0]} 외 ${titles.length - 1}개`;

    const result = await admin.messaging().sendEachForMulticast({
      tokens,
      notification: { title: '📅 일정 알림', body },
      webpush: {
        notification: {
          icon: '/icons/icon-192.png',
          badge: '/icons/icon-192.png',
        },
      },
    });

    // 만료된 토큰 정리
    const expired: Promise<FirebaseFirestore.WriteResult>[] = [];
    result.responses.forEach((resp, i) => {
      if (!resp.success && resp.error?.code === 'messaging/registration-token-not-registered') {
        expired.push(db.collection('fcmTokens').doc(tokens[i]).delete());
      }
    });
    await Promise.all(expired);
  }
);
