import { useState, useRef, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import type { EventInput, DateSelectArg, EventClickArg, DayCellContentArg } from '@fullcalendar/core';
import { format, isMonday, isTuesday, isWednesday, isThursday, isFriday, isSaturday, isSunday } from 'date-fns';
import AppLayout from '../../components/layout/AppLayout';
import EventModal from '../../components/EventModal';
import { useEvents, useCheckIns } from '../../hooks/useEvents';
import type { ScheduleEvent } from '../../types/schedule';
import { getHolidayEvents, isHoliday, getHolidayName, initHolidays } from '../../lib/holidays';
import '../../styles/calendars.css';

const DAY_CHECKERS = [isSunday, isMonday, isTuesday, isWednesday, isThursday, isFriday, isSaturday];

function eventMatchesDate(event: ScheduleEvent, date: Date): boolean {
  if (event.type !== 'recurring') return false;
  switch (event.repeatPattern) {
    case 'daily': return true;
    case 'weekdays': return !isSaturday(date) && !isSunday(date);
    case 'weekends': return isSaturday(date) || isSunday(date);
    case 'custom': return event.repeatDays?.some((d) => DAY_CHECKERS[d](date)) ?? false;
    default: return false;
  }
}

const EVENT_COLORS: Record<ScheduleEvent['type'], string> = {
  recurring: 'primary',
  single: 'info',
  deadline: 'warning',
};

const FC_BG: Record<string, { bg: string; dot: string; text: string }> = {
  primary: { bg: '#edfdf8', dot: '#19d4a9', text: '#0e876e' },
  info:    { bg: '#f0f9ff', dot: '#0ea5e9', text: '#0369a1' },
  warning: { bg: '#fff7ed', dot: '#f97316', text: '#c2410c' },
};

export default function CalendarPage() {
  const calendarRef = useRef<FullCalendar>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string>();
  const [selectedEvent, setSelectedEvent] = useState<ScheduleEvent | null>(null);
  const [, setHolidaysReady] = useState(false);
  const { events, addEvent, deleteEvent } = useEvents();
  const { checkIns, toggleCheckIn } = useCheckIns();

  useEffect(() => {
    initHolidays().then(() => setHolidaysReady(true));
  }, []);

  const buildFcEvents = (): EventInput[] => {
    const result: EventInput[] = [];
    const today = new Date();
    const start = new Date(today.getFullYear(), today.getMonth() - 1, 1);
    const end = new Date(today.getFullYear(), today.getMonth() + 3, 0);

    for (const ev of events) {
      const color = EVENT_COLORS[ev.type];

      if (ev.type === 'recurring') {
        const cur = new Date(start);
        while (cur <= end) {
          if (eventMatchesDate(ev, cur)) {
            const dateStr = format(cur, 'yyyy-MM-dd');
            const isChecked = checkIns.some((c) => c.eventId === ev.id && c.date === dateStr);
            result.push({
              id: `${ev.id}-${dateStr}`,
              title: ev.title + (isChecked ? ' ✓' : ''),
              start: ev.time ? `${dateStr}T${ev.time}` : dateStr,
              allDay: !ev.time,
              extendedProps: { eventId: ev.id, date: dateStr, type: ev.type, isChecked, color },
            });
          }
          cur.setDate(cur.getDate() + 1);
        }
      } else {
        if (!ev.date) continue;
        result.push({
          id: ev.id,
          title: ev.title,
          start: ev.time ? `${ev.date}T${ev.time}` : ev.date,
          allDay: !ev.time,
          extendedProps: { eventId: ev.id, date: ev.date, type: ev.type, color },
        });
      }
    }
    result.push(...getHolidayEvents());
    return result;
  };

  const getDayCellClass = (arg: DayCellContentArg) => {
    const dateStr = format(arg.date, 'yyyy-MM-dd');
    const day = arg.date.getDay();
    if (isHoliday(dateStr) || day === 0) return ['fc-day-holiday'];
    if (day === 6) return ['fc-day-saturday'];
    return [];
  };

  const renderDayCellContent = (arg: DayCellContentArg) => {
    const dateStr = format(arg.date, 'yyyy-MM-dd');
    const holidayName = getHolidayName(dateStr);
    return (
      <>
        <span className="fc-daygrid-day-number">{arg.dayNumberText}</span>
        {holidayName && <span className="fc-holiday-name">{holidayName}</span>}
      </>
    );
  };

  const handleEventClick = (info: EventClickArg) => {
    const { eventId, date, type } = info.event.extendedProps;
    if (type === 'recurring') {
      const checkIn = checkIns.find((c) => c.eventId === eventId && c.date === date);
      toggleCheckIn(eventId, date, checkIn);
      return;
    }
    const ev = events.find((e) => e.id === eventId);
    if (ev) setSelectedEvent(ev);
  };

  const handleDateSelect = (info: DateSelectArg) => {
    setSelectedDate(info.startStr.split('T')[0]);
    setModalOpen(true);
  };

  return (
    <AppLayout>
      <div className="h-full p-4 md:p-6">
        <div className="custom-calendar overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
          <FullCalendar
            ref={calendarRef}
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            locale="ko"
            headerToolbar={{
              left: 'prev,next addEventButton',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek',
            }}
            customButtons={{
              addEventButton: {
                text: '+ 추가',
                click: () => { setSelectedDate(undefined); setModalOpen(true); },
              },
            }}
            events={buildFcEvents()}
            dayCellClassNames={getDayCellClass}
            dayCellContent={renderDayCellContent}
            selectable
            selectMirror
            select={handleDateSelect}
            eventClick={handleEventClick}
            eventContent={(info) => {
              const color = info.event.extendedProps.color ?? 'primary';
              const { bg, dot, text } = FC_BG[color] ?? FC_BG.primary;
              const isChecked = info.event.extendedProps.isChecked;
              return (
                <div
                  className="flex items-center gap-1.5 rounded px-2 py-0.5 text-xs font-medium"
                  style={{ backgroundColor: bg, color: text, opacity: isChecked ? 0.5 : 1 }}
                >
                  <span className="h-3 w-1 shrink-0 rounded-full" style={{ backgroundColor: dot }} />
                  <span className="truncate">{info.event.title}</span>
                </div>
              );
            }}
            height="auto"
            aspectRatio={1.5}
          />
        </div>
      </div>

      {/* 이벤트 상세/삭제 */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
          <div className="absolute inset-0 bg-black/40" onClick={() => setSelectedEvent(null)} />
          <div className="relative w-full sm:max-w-sm bg-white rounded-t-2xl sm:rounded-2xl shadow-xl p-6 space-y-4">
            <h2 className="text-lg font-semibold">{selectedEvent.title}</h2>
            <p className="text-sm text-gray-500">
              {selectedEvent.date}{selectedEvent.time && ` ${selectedEvent.time}`}
            </p>
            <button
              onClick={() => { deleteEvent(selectedEvent.id); setSelectedEvent(null); }}
              className="w-full rounded-xl border border-red-200 py-2.5 text-sm font-medium text-red-500 hover:bg-red-50"
            >
              삭제
            </button>
          </div>
        </div>
      )}

      <EventModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onSave={addEvent}
        initialDate={selectedDate}
      />
    </AppLayout>
  );
}
