import { doc, getDoc } from 'firebase/firestore';
import { db } from './firebase';

const CACHE_PREFIX = 'holidays_';

let holidayCache: Record<string, string> = {};
let initialized = false;

async function fetchFromFirestore(year: number): Promise<Record<string, string>> {
  const cacheKey = `${CACHE_PREFIX}${year}`;
  const cached = localStorage.getItem(cacheKey);
  if (cached) return JSON.parse(cached) as Record<string, string>;

  const snap = await getDoc(doc(db, 'holidays', String(year)));
  if (!snap.exists()) return {};

  const data = (snap.data().dates ?? {}) as Record<string, string>;
  localStorage.setItem(cacheKey, JSON.stringify(data));
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

export function getHolidayEvents() {
  return Object.entries(holidayCache).map(([date, title]) => ({
    title,
    start: date,
    allDay: true,
    display: 'background' as const,
    classNames: ['fc-holiday'],
    extendedProps: { isHoliday: true },
  }));
}

export function clearHolidayCache() {
  Object.keys(localStorage)
    .filter((k) => k.startsWith(CACHE_PREFIX))
    .forEach((k) => localStorage.removeItem(k));
  initialized = false;
  holidayCache = {};
}
