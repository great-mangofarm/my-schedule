const admin = require('firebase-admin');

const ENDPOINT = 'https://apis.data.go.kr/B090041/openapi/service/SpcdeInfoService/getHoliDeInfo';

async function fetchHolidaysForYear(year, apiKey) {
  const result = {};

  for (let month = 1; month <= 12; month++) {
    const params = new URLSearchParams({
      ServiceKey: apiKey,
      solYear: String(year),
      solMonth: String(month).padStart(2, '0'),
      _type: 'json',
      numOfRows: '20',
    });

    try {
      const res = await fetch(`${ENDPOINT}?${params}`);
      const json = await res.json();
      const items = json?.response?.body?.items?.item;
      if (!items) continue;

      const list = Array.isArray(items) ? items : [items];
      for (const item of list) {
        if (item.isHoliday === 'Y') {
          const d = String(item.locdate);
          const dateStr = `${d.slice(0, 4)}-${d.slice(4, 6)}-${d.slice(6, 8)}`;
          result[dateStr] = item.dateName;
        }
      }
    } catch (e) {
      console.warn(`Failed to fetch ${year}-${month}:`, e.message);
    }
  }

  return result;
}

async function main() {
  const apiKey = process.env.HOLIDAY_API_KEY;
  const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);

  if (!apiKey || !serviceAccount) {
    console.error('Missing HOLIDAY_API_KEY or FIREBASE_SERVICE_ACCOUNT');
    process.exit(1);
  }

  admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });
  const db = admin.firestore();

  const now = new Date();
  const years = [now.getFullYear(), now.getFullYear() + 1];

  for (const year of years) {
    console.log(`Fetching holidays for ${year}...`);
    const data = await fetchHolidaysForYear(year, apiKey);
    const count = Object.keys(data).length;
    console.log(`  → ${count} holidays found`);

    await db.collection('holidays').doc(String(year)).set({ dates: data, updatedAt: new Date().toISOString() });
    console.log(`  → Saved to Firestore`);
  }

  console.log('Done!');
  process.exit(0);
}

main().catch((e) => { console.error(e); process.exit(1); });
