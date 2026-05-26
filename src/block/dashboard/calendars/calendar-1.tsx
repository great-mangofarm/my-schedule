import { useEffect, useRef, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import multiMonthPlugin from '@fullcalendar/multimonth';
import interactionPlugin from '@fullcalendar/interaction';
import type {
  EventInput,
  DateSelectArg,
  EventClickArg,
  EventContentArg,
} from '@fullcalendar/core';
import '@/styles/calendars.css';
import { Input } from '@/components/core/input';
import { Checkbox } from '@/components/core/checkbox';
import { RadioInput } from '@/components/core/radio-input';
import { Modal } from '@/components/core/modal';
import { Button } from '@/components/core/button';

export default function Calendar1() {
  const calendarRef = useRef<FullCalendar>(null);

  useEffect(() => {
    // Initialize with some events
    setEvents([
      {
        id: '1',
        title: 'Event Conf.',
        start: new Date().toISOString().split('T')[0],
        extendedProps: { calendar: 'Danger' },
      },
      {
        id: '2',
        title: 'Meeting',
        start: new Date(Date.now() + 86400000).toISOString().split('T')[0],
        extendedProps: { calendar: 'Success' },
      },
      {
        id: '3',
        title: 'Workshop',
        start: new Date(Date.now() + 172800000).toISOString().split('T')[0],
        end: new Date(Date.now() + 259200000).toISOString().split('T')[0],
        extendedProps: { calendar: 'Primary' },
      },
    ]);
  }, []);

  const [events, setEvents] = useState<EventInput[]>([]);
  const [currentView, setCurrentView] = useState('dayGridMonth');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState<{
    title: string;
    calendar: string;
    allDay: boolean;
    start?: string | null;
    end?: string | null;
  }>({ title: '', calendar: 'Primary', allDay: false, start: null, end: null });

  const handleDateSelect = (selectInfo: DateSelectArg) => {
    const calendarApi = selectInfo.view.calendar;
    // clear date selection and open modal with initial date range
    calendarApi.unselect();
    setModalData({
      title: '',
      calendar: 'Primary',
      allDay: !!selectInfo.allDay,
      start: selectInfo.startStr,
      end: selectInfo.endStr,
    });
    setModalOpen(true);
  };

  const handleEventClick = (clickInfo: EventClickArg) => {
    if (
      confirm(
        `Are you sure you want to delete the event '${clickInfo.event.title}'`,
      )
    ) {
      setEvents((prevEvents) =>
        prevEvents.filter((event) => event.id !== clickInfo.event.id),
      );
    }
  };

  // Event rendering is implemented by the file-level `renderEventContent` below
  // which uses `extendedProps.calendar` to map to palette classes (fc-bg-*).

  const openModal = () => {
    setModalData({
      title: '',
      calendar: 'Primary',
      allDay: true,
      start: new Date().toISOString(),
      end: null,
    });
    setModalOpen(true);
  };

  return (
    <div className="custom-calendar mx-auto max-w-7xl overflow-hidden rounded-2xl border border-gray-100 bg-white">
      <FullCalendar
        ref={calendarRef}
        plugins={[
          dayGridPlugin,
          timeGridPlugin,
          multiMonthPlugin,
          interactionPlugin,
        ]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: 'prev,next addEventButton',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay,multiMonthYear',
        }}
        events={currentView === 'multiMonthYear' ? [] : events} // ⬅️ hide events in year view
        selectable={true}
        selectMirror={true}
        editable={true}
        select={handleDateSelect}
        eventClick={handleEventClick}
        eventContent={renderEventContent}
        customButtons={{
          addEventButton: {
            text: 'Add Event +',
            click: openModal,
          },
        }}
        height="auto"
        aspectRatio={1.35}
        datesSet={(arg) => setCurrentView(arg.view.type)} // ⬅️ detect active view
      />

      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        className="ring-0 outline-none"
      >
        {/* Inline modal (lightweight) to create events without external file */}

        <div className="relative rounded-lg bg-white p-10 shadow-lg">
          <h3 className="mb-1 text-xl font-semibold">Add/Edit Event</h3>
          <p className="mb-4 text-sm font-medium text-gray-500">
            Plan your next big moment: schedule or edit an event to stay on
            track
          </p>

          <Input
            className="mt-1"
            label="Event Title"
            value={modalData.title}
            onChange={(e) =>
              setModalData((d) => ({ ...d, title: e.target.value }))
            }
          />

          {/* Start/End are provided by drag selection; no inputs required here */}

          <fieldset className="my-4">
            <legend className="text-sm font-medium">Event Color</legend>

            <div className="mt-2 flex flex-wrap gap-3">
              {['Primary', 'Success', 'Danger', 'Warning'].map((color) => (
                <RadioInput
                  key={color}
                  label={color}
                  name="event-color"
                  className="gap-2"
                  value={color.toLowerCase()}
                  onChange={(e) => {
                    setModalData((d) => ({ ...d, calendar: e.target.value }));
                  }}
                  checked={modalData.calendar === color.toLowerCase()}
                />
              ))}
            </div>
          </fieldset>

          <fieldset className="my-3 space-y-2">
            <legend className="text-sm font-medium">Event Duration</legend>

            <Checkbox
              label="All day"
              checked={modalData.allDay}
              onChange={(e) =>
                setModalData((d) => ({ ...d, allDay: e.target.checked }))
              }
            />
          </fieldset>

          <div className="flex justify-end gap-2">
            <Button
              variant="primary"
              appearance="outline"
              onClick={() => setModalOpen(false)}
            >
              Cancel
            </Button>

            <Button
              variant="primary"
              onClick={() => {
                if (!modalData.title) return alert('Please add a title');

                const newEvent: EventInput = {
                  id: String(Date.now()),
                  title: modalData.title,
                  start: modalData.start || new Date().toISOString(),
                  end: modalData.end || undefined,
                  allDay: modalData.allDay,
                  extendedProps: { calendar: modalData.calendar },
                };

                setEvents((prev) => [...prev, newEvent]);
                setModalOpen(false);
              }}
            >
              Save
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

// Mapping of calendar names to normalized keys (used for CSS class names)
const calendarsEvents: Record<string, string> = {
  Danger: 'danger',
  Success: 'success',
  Primary: 'primary',
  Warning: 'warning',
};

const renderEventContent = (eventInfo: EventContentArg) => {
  const calName = String(eventInfo.event.extendedProps?.calendar || '');
  const normalized = calendarsEvents[calName] || calName || 'primary';
  const colorClass = `fc-bg-${String(normalized).toLowerCase()}`;

  return (
    <div
      className={`event-fc-color fc-event-main flex ${colorClass} rounded-sm px-3 py-1`}
    >
      <div className="fc-daygrid-event-dot"></div>
      <div className="fc-event-time">{eventInfo.timeText}</div>
      <div className="fc-event-title">{eventInfo.event.title}</div>
    </div>
  );
};
