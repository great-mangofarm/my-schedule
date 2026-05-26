import { Button } from '@/components/core/button';
import { Avatar } from '@/components/core/avatar';
import { Xmark2x } from '@tailgrids/icons';

const notifications = [
  {
    id: 1,
    name: 'Terry Franci',
    fallback: 'TF',
    avatar:
      'https://cdn-tailgrids.b-cdn.net/3.0/application/notifications/avatar-1.png',
    action: 'requests permission to change',
    target: 'Project - Nganter App',
    category: 'Project',
    time: '5 min ago',
    status: 'online' as const,
  },
  {
    id: 2,
    name: 'Jocelyn Kenter',
    fallback: 'JK',
    avatar:
      'https://cdn-tailgrids.b-cdn.net/3.0/application/notifications/avatar-2.png',
    action: 'requests permission to change',
    target: 'Project - Nganter App',
    category: 'Project',
    time: '15 min ago',
    status: 'online' as const,
  },
  {
    id: 3,
    name: 'Terry Franci',
    fallback: 'TF',
    avatar:
      'https://cdn-tailgrids.b-cdn.net/3.0/application/notifications/avatar-3.png',
    action: 'requests permission to change',
    target: 'Project - Nganter App',
    category: 'Project',
    time: '5 min ago',
    status: 'online' as const,
  },
  {
    id: 4,
    name: 'Terry Franci',
    fallback: 'TF',
    avatar:
      'https://cdn-tailgrids.b-cdn.net/3.0/application/notifications/avatar-1.png',
    action: 'requests permission to change',
    target: 'Project - Nganter App',
    category: 'Project',
    time: '5 min ago',
    status: 'online' as const,
  },
  {
    id: 5,
    name: 'Brandon Philips',
    fallback: 'BP',
    avatar:
      'https://cdn-tailgrids.b-cdn.net/3.0/application/notifications/avatar-4.png',
    action: 'requests permission to change',
    target: 'Project - Nganter App',
    category: 'Project',
    time: '5 min ago',
    status: 'busy' as const,
    hasDivider: true,
  },
];

export default function Notifications1() {
  return (
    <div className="bg-background-50 flex min-h-screen items-center justify-center">
      <div className="bg-background-50 border-base-100 mx-auto flex h-[480px] w-[350px] flex-col rounded-2xl border p-3 sm:w-[360px] lg:right-0">
        <div className="border-base-50 mb-3 flex items-center justify-between border-b pb-3">
          <h5 className="text-title-50 text-lg font-semibold">Notification</h5>

          <Button variant="ghost" iconOnly size="xs">
            <Xmark2x className="size-5" />
          </Button>
        </div>

        <ul className="custom-scrollbar [&::-webkit-scrollbar-thumb]:bg-background-soft-300 flex h-auto flex-col overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-lg [&::-webkit-scrollbar-track]:bg-transparent">
          {notifications.map((notification) => (
            <>
              {notification.hasDivider && (
                <hr className="border-base-100 w-full border-t" />
              )}
              <li key={notification.id}>
                <a
                  className="hover:bg-background-soft-50 flex gap-3 rounded-lg p-3"
                  href="javascript:void(0)"
                >
                  <Avatar
                    src={notification.avatar}
                    alt={notification.name}
                    fallback={notification.fallback}
                    size="md"
                    status={notification.status}
                  />
                  <div>
                    <p className="text-text-100 mb-1.5 block text-sm">
                      <span className="text-title-50 font-medium">
                        {notification.name}
                      </span>
                      {notification.action}
                      <span className="text-title-50 font-medium">
                        {notification.target}
                      </span>
                    </p>

                    <div className="text-text-100 flex items-center gap-2 text-xs">
                      <span>{notification.category}</span>
                      <span className="bg-background-soft-500 h-1 w-1 rounded-full"></span>
                      <span>{notification.time}</span>
                    </div>
                  </div>
                </a>
              </li>
            </>
          ))}
        </ul>

        <div className="mt-3">
          <Button variant="primary" appearance="outline" className="w-full">
            View All Notification
          </Button>
        </div>
      </div>
    </div>
  );
}
