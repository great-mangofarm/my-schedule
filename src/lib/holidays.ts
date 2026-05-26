import { doc, getDoc } from 'firebase/firestore';
import { db } from './firebase';

const CACHE_PREFIX = 'holidays_';
const CACHE_TTL = 24 * 60 * 60 * 1000;

let holidayCache: Record<string, string> = {};
let initialized = false;

interface CachedData {
  data: Record<string, string>;
  ts: number;
}

async function fetchFromFirestore(year: number): Promise<Record<string, string>> {
  const cacheKey = `${CACHE_PREFIX}${year}`;
  const raw = localStorage.getItem(cacheKey);
  if (raw) {
    const cached: CachedData = JSON.parse(raw);
    if (Date.now() - cached.ts < CACHE_TTL) return cached.data;
  }

  const snap = await getDoc(doc(db, 'holidays', String(year)));
  if (!snap.exists()) return {};

  const data = (snap.data().dates ?? {}) as Record<string, string>;
  localStorage.setItem(cacheKey, JSON.stringify({ data, ts: Date.now() } satisfies CachedData));
  return data;
}

export async function initHolidays(): Promise<void> {
  if (initialized) return;
  const now = new Date();
  const thisYear = now.getFullYear();
  const nextYear = thisYear + 1;

  try {
    const [cur, next] = await Promise.all([
      fetchFromFirestore(thisYear),
      fetchFromFirestore(nextYear),
    ]);
    holidayCache = { ...cur, ...next };
  } catch {
    // Firestore 읽기 실패 시 빈 캐시로 진행
  }

  initialized = true;
}

export function isHoliday(dateStr: string): boolean {
  return dateStr in holidayCache;
}

export function getHolidayName(dateStr: string): string | null {
  return holidayCache[dateStr] ?? null;
}
