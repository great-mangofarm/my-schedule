import { Button } from '@/components/core/button';
import { Avatar } from '@/components/core/avatar';
import { Link } from '@/components/core/link';
import { Xmark2x, Download1, DoubleCheckMark } from '@tailgrids/icons';

const PdfIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="26"
    viewBox="0 0 24 26"
    fill="none"
  >
    <path
      d="M5.5 0C4.60625 0 3.875 0.73125 3.875 1.625V24.375C3.875 25.2687 4.60625 26 5.5 26H21.75C22.6437 26 23.375 25.2687 23.375 24.375V6.5L16.875 0H5.5Z"
      fill="#E2E5E7"
    />
    <path
      d="M18.5 6.5H23.375L16.875 0V4.875C16.875 5.76875 17.6062 6.5 18.5 6.5Z"
      fill="#B0B7BD"
    />
    <path d="M23.375 11.375L18.5 6.5H23.375V11.375Z" fill="#CAD1D8" />
    <path
      d="M20.125 21.125C20.125 21.5719 19.7594 21.9375 19.3125 21.9375H1.4375C0.990625 21.9375 0.625 21.5719 0.625 21.125V13C0.625 12.5531 0.990625 12.1875 1.4375 12.1875H19.3125C19.7594 12.1875 20.125 12.5531 20.125 13V21.125Z"
      fill="#F15642"
    />
    <path
      d="M4.16663 15.3943C4.16663 15.1798 4.33563 14.9458 4.60781 14.9458H6.1085C6.9535 14.9458 7.714 15.5113 7.714 16.5952C7.714 17.6222 6.9535 18.1942 6.1085 18.1942H5.02381V19.0522C5.02381 19.3382 4.84181 19.4999 4.60781 19.4999C4.39331 19.4999 4.16663 19.3382 4.16663 19.0522V15.3943ZM5.02381 15.764V17.3825H6.1085C6.544 17.3825 6.8885 16.9982 6.8885 16.5952C6.8885 16.141 6.544 15.764 6.1085 15.764H5.02381Z"
      fill="white"
    />
    <path
      d="M8.98646 19.5C8.77196 19.5 8.53796 19.383 8.53796 19.0978V15.4074C8.53796 15.1742 8.77196 15.0044 8.98646 15.0044H10.4742C13.443 15.0044 13.378 19.5 10.5327 19.5H8.98646ZM9.39596 15.7974V18.7078H10.4742C12.2283 18.7078 12.3063 15.7974 10.4742 15.7974H9.39596Z"
      fill="white"
    />
    <path
      d="M14.4311 15.8492V16.8819H16.0877C16.3217 16.8819 16.5557 17.1159 16.5557 17.3426C16.5557 17.5571 16.3217 17.7326 16.0877 17.7326H14.4311V19.0968C14.4311 19.3243 14.2694 19.499 14.0419 19.499C13.7559 19.499 13.5812 19.3243 13.5812 19.0968V15.4064C13.5812 15.1732 13.7567 15.0034 14.0419 15.0034H16.3226C16.6086 15.0034 16.7776 15.1732 16.7776 15.4064C16.7776 15.6144 16.6086 15.8484 16.3226 15.8484H14.4311V15.8492Z"
      fill="white"
    />
    <path
      d="M19.3125 21.9375H3.875V22.75H19.3125C19.7594 22.75 20.125 22.3844 20.125 21.9375V21.125C20.125 21.5719 19.7594 21.9375 19.3125 21.9375Z"
      fill="#CAD1D8"
    />
  </svg>
);

type NotificationType =
  | 'like'
  | 'join'
  | 'access-request'
  | 'task-assignment'
  | 'file-upload';

interface Notification {
  id: number;
  name: string;
  fallback: string;
  avatar: string;
  type: NotificationType;
  message: string;
  time: string;
  status?: 'online' | 'offline' | 'busy' | 'none';
  isUnread?: boolean;
  file?: {
    name: string;
    size: string;
    icon: React.FC;
  };
}

const notifications: Notification[] = [
  {
    id: 1,
    name: 'Marcus Johnson',
    fallback: 'MJ',
    avatar:
      'https://cdn-tailgrids.b-cdn.net/3.0/application/notifications/avatar-5.png',
    type: 'like',
    message: 'liked your comment on Product Roadmap 2025',
    time: '5m ago',
    isUnread: true,
  },
  {
    id: 2,
    name: 'Jhon',
    fallback: 'JH',
    avatar:
      'https://cdn-tailgrids.b-cdn.net/3.0/application/notifications/avatar-6.png',
    type: 'join',
    message: 'has joined your workspace',
    time: '5m ago',
    isUnread: true,
  },
  {
    id: 3,
    name: 'Alex Johnson',
    fallback: 'AJ',
    avatar:
      'https://cdn-tailgrids.b-cdn.net/3.0/application/notifications/avatar-1.png',
    type: 'access-request',
    message: 'requests access to Design file of your recent project.',
    time: '5m ago',
    status: 'online',
  },
  {
    id: 4,
    name: 'David',
    fallback: 'DV',
    avatar:
      'https://cdn-tailgrids.b-cdn.net/3.0/application/notifications/avatar-5.png',
    type: 'task-assignment',
    message: 'Redesign Checkout Page',
    time: '45m ago',
    isUnread: true,
  },
  {
    id: 5,
    name: 'Maria',
    fallback: 'MA',
    avatar:
      'https://cdn-tailgrids.b-cdn.net/3.0/application/notifications/avatar-9.png',
    type: 'file-upload',
    message: 'uploaded a new file',
    time: '2h ago',
    status: 'online',
    file: {
      name: 'Brand Guidelines.pdf',
      size: '78 kb.',
      icon: PdfIcon,
    },
  },
];

export default function Notifications4() {
  return (
    <div className="bg-background-soft-50 flex h-screen items-center justify-center p-5">
      <div className="bg-background-50 mx-auto w-[500px] rounded-2xl p-1">
        <div className="flex justify-between px-6 py-2">
          <h3 className="text-title-50 font-semibold">Notifications</h3>
          <Button variant="ghost" iconOnly size="xs">
            <Xmark2x className="size-5" />
          </Button>
        </div>

        <div className="px-5 py-3">
          <nav className="bg-background-soft-100 flex items-center gap-2 rounded-lg p-1 text-sm">
            <button className="bg-background-50 text-title-50 rounded-md px-4 py-2.5 text-sm font-medium shadow-xs">
              All
            </button>
            <button className="text-text-100 cursor-pointer rounded-md bg-transparent px-4 py-2.5 text-sm font-medium">
              Unread
            </button>
            <button className="text-text-100 cursor-pointer rounded-md bg-transparent px-4 py-2.5 text-sm font-medium">
              Mentions
            </button>
            <button className="text-text-100 cursor-pointer rounded-md bg-transparent px-4 py-2.5 text-sm font-medium">
              Task
            </button>
          </nav>
        </div>

        <div>
          <ul className="divide-base-50 divide-y">
            {notifications.map((notification) => (
              <li
                key={notification.id}
                className="relative flex cursor-pointer gap-3 bg-transparent px-4 py-3.5"
              >
                <Avatar
                  src={notification.avatar}
                  alt={notification.name}
                  fallback={notification.fallback}
                  size="lg"
                  status={notification.status}
                />
                <div>
                  {notification.type === 'task-assignment' ? (
                    <p className="text-title-50 font-medium">
                      {notification.name} assigned you a task:
                      <span className="text-text-100 font-normal">
                        {notification.message}
                      </span>
                    </p>
                  ) : notification.type === 'file-upload' ? (
                    <p className="text-title-50 font-medium">
                      {notification.name} {notification.message}
                    </p>
                  ) : (
                    <p className="text-title-50 font-medium">
                      {notification.name}
                      <span className="text-text-100 font-normal">
                        {notification.message}
                      </span>
                    </p>
                  )}
                  <p className="text-text-200 text-sm">{notification.time}</p>

                  {notification.type === 'access-request' && (
                    <div className="mt-4 flex gap-1.5">
                      <Button size="xs">Approve</Button>
                      <Button size="xs" appearance="outline">
                        Deny
                      </Button>
                    </div>
                  )}

                  {notification.type === 'file-upload' && notification.file && (
                    <div className="bg-background-soft-100 mt-4 flex items-center gap-1.5 rounded-md p-3">
                      <div className="flex gap-2">
                        <div>
                          <notification.file.icon />
                        </div>
                        <div>
                          <h4 className="text-title-50 text-sm font-medium">
                            {notification.file.name}
                          </h4>
                          <p className="text-text-200 text-xs">
                            {notification.file.size}
                          </p>
                        </div>
                      </div>
                      <Button variant="ghost" iconOnly size="xs">
                        <Download1 className="size-5" />
                      </Button>
                    </div>
                  )}
                </div>
                {notification.isUnread && (
                  <span className="bg-primary-500 absolute top-4 right-4 inline-block size-2 rounded-full"></span>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-background-soft-50 flex items-center justify-between rounded-b px-6 py-5">
          <button className="text-text-100 flex items-center gap-1 text-base">
            <DoubleCheckMark className="size-5" />
            Mark all as read
          </button>
          <Link href="javascript:void(0)" variant="primary" size="md">
            View All
          </Link>
        </div>
      </div>
    </div>
  );
}
