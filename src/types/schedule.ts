export type EventType = 'recurring' | 'single' | 'deadline';

export type RepeatPattern = 'daily' | 'weekdays' | 'weekends' | 'custom';

export interface ScheduleEvent {
  id: string;
  title: string;
  type: EventType;
  repeatPattern?: RepeatPattern;
  repeatDays?: number[]; // 0=일 1=월 ... 6=토 (custom일 때)
  date?: string; // YYYY-MM-DD (single/deadline)
  time?: string; // HH:mm (선택)
  hasAlarm: boolean;
  createdAt: number;
}

export interface CheckIn {
  id: string;
  eventId: string;
  date: string; // YYYY-MM-DD
  checkedAt: number;
}
