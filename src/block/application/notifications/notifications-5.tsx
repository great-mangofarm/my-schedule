import { Button } from '@/components/core/button';
import { Badge } from '@/components/core/badge';
import { Xmark2x } from '@tailgrids/icons';

interface Notification {
  id: number;
  title: string;
  description: string;
  time: string;
  avatar: string;
  isUnread: boolean;
}

interface NotificationGroup {
  label: string;
  items: Notification[];
}

const notificationGroups: NotificationGroup[] = [
  {
    label: 'Today',
    items: [
      {
        id: 1,
        title: 'Emma completed',
        description: 'Landing Page Design',
        time: '33m ago',
        avatar:
          'https://cdn-tailgrids.b-cdn.net/3.0/dashboard/notifications/avatar-10.png',
        isUnread: true,
      },
      {
        id: 2,
        title: 'Noah updated status',
        description: 'Checkout Flow – In Review',
        time: '33m ago',
        avatar:
          'https://cdn-tailgrids.b-cdn.net/3.0/dashboard/notifications/avatar-11.png',
        isUnread: true,
      },
      {
        id: 3,
        title: 'Daniel created a new milestone',
        description: 'UI Kit Delivery',
        time: '33m ago',
        avatar:
          'https://cdn-tailgrids.b-cdn.net/3.0/dashboard/notifications/avatar-12.png',
        isUnread: true,
      },
    ],
  },
  {
    label: 'Yesterday',
    items: [
      {
        id: 4,
        title: 'Maria uploaded new assets',
        description: 'Logo pack + style guide PDF',
        time: '33m ago',
        avatar:
          'https://cdn-tailgrids.b-cdn.net/3.0/dashboard/notifications/avatar-12.png',
        isUnread: true,
      },
      {
        id: 5,
        title: 'Liam shared a Figma file',
        description: 'Landing Page Concept v2',
        time: '33m ago',
        avatar:
          'https://cdn-tailgrids.b-cdn.net/3.0/dashboard/notifications/avatar-11.png',
        isUnread: true,
      },
    ],
  },
];

export default function Notifications5() {
  return (
    <div className="bg-background-soft-50 flex h-screen items-center justify-center p-5">
      <div className="bg-background-soft-100 mx-auto w-[500px] rounded-2xl p-4">
        <div>
          <div className="flex items-center justify-between px-3.5 py-4">
            <h3 className="text-title-50 flex items-center gap-1 text-lg font-semibold">
              Notifications
              <Badge color="primary" size="sm">
                12+
              </Badge>
            </h3>
            <Button variant="ghost" iconOnly size="sm">
              <Xmark2x className="size-5" />
            </Button>
          </div>
          <div className="space-y-4">
            {notificationGroups.map((group) => (
              <div
                key={group.label}
                className="bg-background-50 rounded-2xl p-6"
              >
                <span className="text-text-200 uppercase">{group.label}</span>
                <ul className="divide-base-50 divide-y">
                  {group.items.map((notification) => (
                    <li
                      key={notification.id}
                      className="flex justify-between py-4"
                    >
                      <div className="flex items-start gap-3">
                        <div>
                          <img src={notification.avatar} alt="" />
                        </div>
                        <div>
                          <h4 className="text-title-50 mb-1 text-base font-medium">
                            {notification.title}
                          </h4>
                          <p className="text-text-100 text-sm">
                            {notification.description}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-4">
                        {notification.isUnread && (
                          <span className="bg-primary-500 inline-block h-2.5 w-2.5 rounded-full"></span>
                        )}
                        <p className="text-text-200 text-xs font-medium">
                          {notification.time}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
