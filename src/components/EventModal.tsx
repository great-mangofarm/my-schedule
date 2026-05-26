import { useState } from 'react';
import type { ScheduleEvent, EventType, RepeatPattern } from '../types/schedule';

interface EventModalProps {
  open: boolean;
  onClose: () => void;
  onSave: (data: Omit<ScheduleEvent, 'id' | 'createdAt'>) => void;
  initialDate?: string;
  editEvent?: ScheduleEvent;
}

const REPEAT_OPTIONS: { value: RepeatPattern; label: string }[] = [
  { value: 'daily', label: '매일' },
  { value: 'weekdays', label: '주중 (월~금)' },
  { value: 'weekends', label: '주말 (토~일)' },
  { value: 'custom', label: '직접 선택' },
];

const DAYS = ['일', '월', '화', '수', '목', '금', '토'];

export default function EventModal({ open, onClose, onSave, initialDate, editEvent }: EventModalProps) {
  const [type, setType] = useState<EventType>(editEvent?.type ?? 'single');
  const [title, setTitle] = useState(editEvent?.title ?? '');
  const [date, setDate] = useState(editEvent?.date ?? initialDate ?? '');
  const [time, setTime] = useState(editEvent?.time ?? '');
  const [hasAlarm, setHasAlarm] = useState(editEvent?.hasAlarm ?? false);
  const [repeatPattern, setRepeatPattern] = useState<RepeatPattern>(editEvent?.repeatPattern ?? 'daily');
  const [repeatDays, setRepeatDays] = useState<number[]>(editEvent?.repeatDays ?? []);

  if (!open) return null;

  const toggleDay = (day: number) =>
    setRepeatDays((prev) => prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]);

  const handleSave = () => {
    if (!title.trim()) return;
    if (type !== 'recurring' && !date) return;

    const base = { title: title.trim(), type, time: time || undefined, hasAlarm };

    if (type === 'recurring') {
      onSave({ ...base, repeatPattern, repeatDays: repeatPattern === 'custom' ? repeatDays : undefined });
    } else {
      onSave({ ...base, date });
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative w-full sm:max-w-md bg-white rounded-t-2xl sm:rounded-2xl shadow-xl p-6 space-y-5">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">일정 추가</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* 일정 타입 */}
        <div className="grid grid-cols-3 gap-2">
          {([
            { value: 'recurring', label: '반복', emoji: '🔁' },
            { value: 'single', label: '단발', emoji: '📅' },
            { value: 'deadline', label: '기한', emoji: '⏰' },
          ] as { value: EventType; label: string; emoji: string }[]).map(({ value, label, emoji }) => (
            <button
              key={value}
              onClick={() => setType(value)}
              className={`rounded-xl border py-2.5 text-sm font-medium transition-colors ${
                type === value
                  ? 'border-primary-500 bg-primary-50 text-primary-600'
                  : 'border-gray-200 text-gray-500 hover:border-gray-300'
              }`}
            >
              {emoji} {label}
            </button>
          ))}
        </div>

        {/* 제목 */}
        <div>
          <label className="mb-1.5 block text-sm font-medium text-gray-700">제목</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="일정 제목"
            className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100"
          />
        </div>

        {/* 반복 패턴 */}
        {type === 'recurring' && (
          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-700">반복</label>
            <div className="grid grid-cols-2 gap-2">
              {REPEAT_OPTIONS.map(({ value, label }) => (
                <button
                  key={value}
                  onClick={() => setRepeatPattern(value)}
                  className={`rounded-xl border py-2 text-sm transition-colors ${
                    repeatPattern === value
                      ? 'border-primary-500 bg-primary-50 text-primary-600'
                      : 'border-gray-200 text-gray-500 hover:border-gray-300'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
            {repeatPattern === 'custom' && (
              <div className="mt-2 flex gap-1.5">
                {DAYS.map((day, i) => (
                  <button
                    key={i}
                    onClick={() => toggleDay(i)}
                    className={`flex-1 rounded-lg py-1.5 text-xs font-medium transition-colors ${
                      repeatDays.includes(i)
                        ? 'bg-primary-500 text-white'
                        : 'bg-gray-100 text-gray-500'
                    }`}
                  >
                    {day}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {/* 날짜 (단발/기한) */}
        {type !== 'recurring' && (
          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-700">날짜</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100"
            />
          </div>
        )}

        {/* 시간 (선택) */}
        <div>
          <label className="mb-1.5 block text-sm font-medium text-gray-700">
            시간 <span className="text-gray-400">(선택)</span>
          </label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100"
          />
        </div>

        {/* 알림 */}
        <label className="flex cursor-pointer items-center gap-3">
          <div
            onClick={() => setHasAlarm(!hasAlarm)}
            className={`relative h-6 w-11 rounded-full transition-colors ${hasAlarm ? 'bg-primary-500' : 'bg-gray-200'}`}
          >
            <span className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform ${hasAlarm ? 'translate-x-5' : 'translate-x-0.5'}`} />
          </div>
          <span className="text-sm font-medium text-gray-700">알림 받기</span>
        </label>

        {/* 저장 */}
        <button
          onClick={handleSave}
          disabled={!title.trim() || (type !== 'recurring' && !date)}
          className="w-full rounded-xl bg-primary-500 py-3 text-sm font-semibold text-white transition hover:bg-primary-600 disabled:opacity-40"
        >
          저장
        </button>
      </div>
    </div>
  );
}
