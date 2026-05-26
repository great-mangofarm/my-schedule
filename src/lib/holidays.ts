const API_KEY = import.meta.env.VITE_HOLIDAY_API_KEY;
const ENDPOINT = 'https://apis.data.go.kr/B090041/openapi/service/SpcdeInfoService/getHoliDeInfo';
const CACHE_PREFIX = 'holidays_';

interface HolidayItem {
  dateKind: string;
  dateName: string;
  isHoliday: string;
  locdate: number;
  seq: number;
}

async function fetchHolidaysFromApi(year: number): Promise<Record<string, string>> {
  const result: Record<string, string> = {};

  for (let month = 1; month <= 12; month++) {
    const params = new URLSearchParams({
      ServiceKey: API_KEY,
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

      const list: HolidayItem[] = Array.isArray(items) ? items : [items];
      for (const item of list) {
        if (item.isHoliday === 'Y') {
          const d = String(item.locdate);
          const dateStr = `${d.slice(0, 4)}-${d.slice(4, 6)}-${d.slice(6, 8)}`;
          result[dateStr] = item.dateName;
        }
      }
    } catch {
      // 월별 실패 시 스킵
    }
  }

  return result;
}

async function getHolidaysForYear(year: number): Promise<Record<string, string>> {
  const cacheKey = `${CACHE_PREFIX}${year}`;
  const cached = localStorage.getItem(cacheKey);

  if (cached) {
    return JSON.parse(cached) as Record<string, string>;
  }

  const data = await fetchHolidaysFromApi(year);
  localStorage.setItem(cacheKey, JSON.stringify(data));
  return data;
}

// 캐시된 데이터 (메모리)
let holidayCache: Record<string, string> = {};
let initialized = false;

export async function initHolidays(): Promise<void> {
  if (initialized) return;
  const now = new Date();
  const thisYear = now.getFullYear();
  const nextYear = thisYear + 1;

  const [cur, next] = await Promise.all([
    getHolidaysForYear(thisYear),
    getHolidaysForYear(nextYear),
  ]);

  holidayCache = { ...cur, ...next };
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

export function clearHolidayCache(year?: number) {
  if (year) {
    localStorage.removeItem(`${CACHE_PREFIX}${year}`);
  } else {
    Object.keys(localStorage)
      .filter((k) => k.startsWith(CACHE_PREFIX))
      .forEach((k) => localStorage.removeItem(k));
  }
  initialized = false;
  holidayCache = {};
}
