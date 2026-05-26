import AppLayout from '../../components/layout/AppLayout';
import { useEvents, useCheckIns } from '../../hooks/useEvents';
import { format, startOfWeek, endOfWeek, startOfMonth, endOfMonth, startOfYear, endOfYear, eachDayOfInterval } from 'date-fns';
import ReactApexChart from 'react-apexcharts';
import type { ScheduleEvent } from '../../types/schedule';

function getExpectedDates(event: ScheduleEvent, start: Date, end: Date): string[] {
  const days = eachDayOfInterval({ start, end });
  const DAY_CHECKERS = [
    (d: Date) => d.getDay() === 0,
    (d: Date) => d.getDay() === 1,
    (d: Date) => d.getDay() === 2,
    (d: Date) => d.getDay() === 3,
    (d: Date) => d.getDay() === 4,
    (d: Date) => d.getDay() === 5,
    (d: Date) => d.getDay() === 6,
  ];
  return days
    .filter((d) => {
      switch (event.repeatPattern) {
        case 'daily': return true;
        case 'weekdays': return d.getDay() >= 1 && d.getDay() <= 5;
        case 'weekends': return d.getDay() === 0 || d.getDay() === 6;
        case 'custom': return event.repeatDays?.some((day) => DAY_CHECKERS[day](d)) ?? false;
        default: return false;
      }
    })
    .map((d) => format(d, 'yyyy-MM-dd'));
}

function getRate(event: ScheduleEvent, checkIns: { eventId: string; date: string }[], start: Date, end: Date) {
  const now = new Date();
  const effectiveEnd = end > now ? now : end;
  if (effectiveEnd < start) return 0;
  const expected = getExpectedDates(event, start, effectiveEnd);
  if (!expected.length) return 0;
  const done = expected.filter((d) => checkIns.some((c) => c.eventId === event.id && c.date === d)).length;
  return Math.round((done / expected.length) * 100);
}

export default function DashboardPage() {
  const { events } = useEvents();
  const { checkIns } = useCheckIns();
  const now = new Date();
  const recurringEvents = events.filter((e) => e.type === 'recurring');

  const periods = [
    { label: '주간', start: startOfWeek(now, { weekStartsOn: 1 }), end: endOfWeek(now, { weekStartsOn: 1 }) },
    { label: '월간', start: startOfMonth(now), end: endOfMonth(now) },
    { label: '연간', start: startOfYear(now), end: endOfYear(now) },
  ];

  return (
    <AppLayout>
      <div className="p-4 md:p-6 space-y-6">
        <h1 className="text-xl font-bold text-gray-900">성취율 대시보드</h1>

        {recurringEvents.length === 0 ? (
          <div className="rounded-2xl border border-gray-100 bg-white p-12 text-center text-gray-400">
            <p>반복 일정을 추가하면 성취율이 여기에 표시돼요.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {recurringEvents.map((event) => {
              const rates = periods.map((p) => getRate(event, checkIns, p.start, p.end));
              const streakDates = getExpectedDates(event, startOfYear(now), now);
              let streak = 0;
              for (let i = streakDates.length - 1; i >= 0; i--) {
                if (checkIns.some((c) => c.eventId === event.id && c.date === streakDates[i])) {
                  streak++;
                } else break;
              }

              return (
                <div key={event.id} className="rounded-2xl border border-gray-100 bg-white p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <h2 className="font-semibold text-gray-900">{event.title}</h2>
                    <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-primary-600">
                      🔥 {streak}일 연속
                    </span>
                  </div>
                  <ReactApexChart
                    type="bar"
                    height={160}
                    options={{
                      chart: { toolbar: { show: false }, sparkline: { enabled: false } },
                      plotOptions: { bar: { borderRadius: 6, columnWidth: '40%' } },
                      colors: ['#19d4a9'],
                      xaxis: { categories: periods.map((p) => p.label) },
                      yaxis: { max: 100, labels: { formatter: (v) => `${v}%` } },
                      dataLabels: { enabled: true, formatter: (v) => `${v}%` },
                      grid: { borderColor: '#f3f4f6' },
                      tooltip: { y: { formatter: (v) => `${v}%` } },
                    }}
                    series={[{ name: '달성률', data: rates }]}
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </AppLayout>
  );
}
