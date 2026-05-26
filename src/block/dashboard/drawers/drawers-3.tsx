import { Button } from '@/components/core/button';
import { Xmark2x } from '@tailgrids/icons';
import { useState } from 'react';

const notifications = [
  {
    id: 1,
    title: 'New user registered',
    description: 'John Doe joined your platform',
    time: '10 min ago',
    color: 'bg-success-500',
  },
  {
    id: 2,
    title: 'Payment processed',
    description: 'Invoice #1234 has been paid successfully',
    time: '15 min ago',
    color: 'bg-primary-500',
  },
  {
    id: 3,
    title: 'Report generated',
    description: 'Monthly analytics report is ready',
    time: '1 hour ago',
    color: 'bg-cyan-500',
  },
  {
    id: 4,
    title: 'System maintenance',
    description: 'Scheduled for tonight at 2 AM',
    time: '3 hour ago',
    color: 'bg-background-soft-300',
  },
  {
    id: 5,
    title: 'Failed backup',
    description: 'Daily backup could not be completed',
    time: '1 day ago',
    color: 'bg-error-500',
  },
];

export default function Drawers3() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-background-soft-50 flex h-screen items-center justify-center px-4 py-10">
      <div className="relative">
        {/* Trigger Button */}
        <Button onClick={() => setOpen(true)}>Open Drawer</Button>

        {/* Overlay */}
        <div
          onClick={() => setOpen(false)}
          className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ${
            open ? 'opacity-100' : 'pointer-events-none opacity-0'
          }`}
        />

        {/* Drawer */}
        <div
          className={`bg-background-soft-100 fixed top-2 right-2 bottom-2 z-50 flex w-90 transform flex-col rounded-2xl shadow-sm transition-transform duration-300 ease-in-out ${
            open ? 'translate-x-0' : 'translate-x-[calc(100%+20px)]'
          }`}
        >
          {/* Header */}
          <div className="border-base-50 flex items-center justify-between border-b p-5">
            <h2 className="text-title-50 text-lg font-medium">Notifications</h2>
            <Button
              iconOnly
              variant="ghost"
              size="sm"
              onClick={() => setOpen(false)}
            >
              <Xmark2x />
            </Button>
          </div>

          {/* Content */}
          <div className="flex-1 space-y-5 overflow-y-auto px-5 py-5">
            {/* Recent Notifications */}
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-text-100 text-sm">Recent Notifications</h3>
              <button className="text-primary-500 cursor-pointer text-sm">
                Mark all read
              </button>
            </div>
            <div className="bg-background-50 rounded-xl p-5">
              <ul className="divide-base-50 divide-y">
                {notifications.map((notification) => (
                  <li
                    key={notification.id}
                    className="flex items-start gap-3 py-4 first:pt-0 last:pb-0"
                  >
                    <div
                      className={`mt-2 inline-block h-2.5 w-2.5 rounded-full ${notification.color}`}
                    ></div>
                    <div className="grow">
                      <h4 className="text-title-50 font-medium">
                        {notification.title}
                      </h4>
                      <p className="text-text-100 mb-1 text-sm">
                        {notification.description}
                      </p>
                      <span className="text-text-200 inline-block text-xs leading-4">
                        {notification.time}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
