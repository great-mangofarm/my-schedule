import { Button } from '@/components/core/button';
import {
  BadgeDecagramPercent,
  BagShopping2,
  Filter,
  InfoTriangle,
  StarFatFalling,
  ThreeDCube1,
} from '@tailgrids/icons';

const notifications = [
  {
    id: 1,
    title: 'Order #98420 has shipped',
    message: 'Expected delivery: Sep 20',
    time: '5m ago',
    icon: ThreeDCube1,
    iconBg: 'bg-orange-500/10',
    iconColor: 'text-orange-500',
    isUnread: true,
  },
  {
    id: 2,
    title: 'Product running low',
    message: '"Wireless Earbuds" – only 5 left in stock',
    time: '10m ago',
    icon: InfoTriangle,
    iconBg: 'bg-red-600/10',
    iconColor: 'text-red-600',
    isUnread: false,
  },
  {
    id: 3,
    title: 'New order received',
    message: '#98423 – Running Sneakers (2 items)',
    time: '25m ago',
    icon: BagShopping2,
    iconBg: 'bg-green-600/10',
    iconColor: 'text-green-600',
    isUnread: false,
  },
  {
    id: 4,
    title: 'Emma left a review',
    message: '"Love the fabric, super comfortable!"',
    time: '1h ago',
    icon: StarFatFalling,
    iconBg: 'bg-purple-600/10',
    iconColor: 'text-purple-600',
    isUnread: true,
  },
  {
    id: 5,
    title: 'New discount applied',
    message: '20% off on "Summer Collection"',
    time: '3h ago',
    icon: BadgeDecagramPercent,
    iconBg: 'bg-pink-600/10',
    iconColor: 'text-pink-600',
    isUnread: false,
  },
];

export default function Notifications3() {
  return (
    <div className="bg-background-soft-50 flex h-screen items-center justify-center">
      <div className="bg-background-50 mx-auto w-[500px] rounded-2xl">
        <header className="border-base-50 flex items-center justify-between border-b p-6">
          <h3 className="text-title-50 text-lg font-semibold">Notifications</h3>
          <Button variant="ghost" iconOnly size="xs">
            <Filter className="size-5" />
          </Button>
        </header>
        <div className="px-5 pt-4">
          <div className="border-base-100 flex items-center justify-between border-b">
            <nav className="text-text-100 flex gap-2 text-sm">
              <button className="text-primary-500 border-primary-500 border-b-2 p-3 text-sm font-medium">
                All
              </button>
              <button className="text-text-100 p-3 font-medium">Unread</button>
            </nav>
            <div>
              <button className="text-text-100 font-medium">
                Mark all as read
              </button>
            </div>
          </div>
        </div>
        <div className="p-3">
          <ul>
            {notifications.map((notification) => {
              const IconComponent = notification.icon;
              return (
                <li
                  key={notification.id}
                  className="hover:bg-background-soft-100 relative flex cursor-pointer gap-3 rounded-xl bg-transparent px-4 py-3.5"
                >
                  <div
                    className={`flex size-12 items-center justify-center rounded-full ${notification.iconBg} ${notification.iconColor}`}
                  >
                    <IconComponent className="size-6" />
                  </div>
                  <div>
                    <p className="text-title-50 font-medium">
                      {notification.title}
                    </p>
                    <span className="text-text-100 mb-3 inline-block text-sm">
                      {notification.message}
                    </span>
                    <p>{notification.time}</p>
                  </div>
                  {notification.isUnread && (
                    <span className="bg-primary-500 absolute top-4 right-4 inline-block size-2 rounded-full"></span>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
