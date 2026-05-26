import { Button } from '@/components/core/button';
import { Link } from '@/components/core/link';
import { Xmark2x } from '@tailgrids/icons';

const notifications = [
  {
    id: 1,
    title: 'New user registered',
    message: 'John Doe joined your platform',
    time: '10 min ago',
    dotColor: 'bg-green-500',
  },
  {
    id: 2,
    title: 'Payment processed',
    message: 'Invoice #1234 has been paid successfully',
    time: '15 min ago',
    dotColor: 'bg-primary-500',
  },
  {
    id: 3,
    title: 'Report generated',
    message: 'Monthly analytics report is ready',
    time: '1 hour ago',
    dotColor: 'bg-cyan-500',
  },
  {
    id: 4,
    title: 'System maintenance',
    message: 'Scheduled for tonight at 2 AM',
    time: '3 hour ago',
    dotColor: 'bg-background-soft-300',
  },
  {
    id: 5,
    title: 'Failed backup',
    message: 'Daily backup could not be completed',
    time: '1 day ago',
    dotColor: 'bg-red-500',
  },
];

export default function Notifications2() {
  return (
    <div className="bg-background-soft-50 flex h-screen items-center justify-center">
      <div className="bg-background-50 mx-auto w-[500px] rounded-2xl px-3">
        <div className="flex items-center justify-between px-3 py-4">
          <h3>Notifications</h3>
          <Button variant="ghost" iconOnly size="xs">
            <Xmark2x className="size-5" />
          </Button>
        </div>
        <div className="bg-background-soft-100 flex items-center justify-between rounded-lg px-6 py-3">
          <h3 className="text-text-100 text-base">Today</h3>
          <Link href="javascript:void(0)" variant="primary" size="sm">
            View All
          </Link>
        </div>
        <ul className="divide-base-50 divide-y px-3 py-6">
          {notifications.map((notification) => (
            <li
              key={notification.id}
              className="flex gap-3 py-4 first:pt-0 last:pb-0"
            >
              <div>
                <span
                  className={`inline-block h-2.5 w-2.5 rounded-full ${notification.dotColor}`}
                ></span>
              </div>
              <div>
                <h4 className="text-title-50 text-base font-medium">
                  {notification.title}
                </h4>
                <p className="text-text-100 mb-3 text-sm">
                  {notification.message}
                </p>
                <span className="text-text-200 text-xs">
                  {notification.time}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
