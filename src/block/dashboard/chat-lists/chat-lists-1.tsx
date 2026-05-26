import { Avatar } from '@/components/core/avatar';
import { Badge } from '@/components/core/badge';
import { Input } from '@/components/core/input';
import { Search1 } from '@tailgrids/icons';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/core/dropdown';

interface ChatItem {
  id: string;
  name: string;
  avatar: string;
  message: string;
  time: string;
  isOnline: boolean;
  statusColor: 'online' | 'busy' | 'offline';
  unreadCount?: number;
  isUnread: boolean;
}

export default function ChatLists1() {
  const chatData: ChatItem[] = [
    {
      id: '1',
      name: 'Devon Lane',
      avatar:
        ' https://cdn-tailgrids.b-cdn.net/3.0/dashboard/chat-list/chat-01/Avatar.png',
      message: 'Interested in this loads?',
      time: '15 mins',
      isOnline: true,
      statusColor: 'online',
      isUnread: false,
    },
    {
      id: '2',
      name: 'Ronald Richards',
      avatar:
        ' https://cdn-tailgrids.b-cdn.net/3.0/dashboard/chat-list/chat-01/Avatar-1.png',
      message: 'Okay...Do we have a deal?',
      time: '30 mins',
      isOnline: true,
      statusColor: 'online',
      isUnread: false,
    },
    {
      id: '3',
      name: 'Robert Fox',
      avatar:
        ' https://cdn-tailgrids.b-cdn.net/3.0/dashboard/chat-list/chat-01/Avatar-3.png',
      message: 'Hello?',
      time: '45 mins',
      isOnline: true,
      statusColor: 'online',
      isUnread: false,
    },
    {
      id: '4',
      name: 'Darrell Steward',
      avatar:
        ' https://cdn-tailgrids.b-cdn.net/3.0/dashboard/chat-list/chat-01/Avatar-4.png',
      message: 'Okay...Do we have a deal?',
      time: '50 mins',
      isOnline: true,
      statusColor: 'online',
      isUnread: false,
    },
    {
      id: '5',
      name: 'Ralph Edwards',
      avatar:
        ' https://cdn-tailgrids.b-cdn.net/3.0/dashboard/chat-list/chat-01/Avatar-5.png',
      message: 'When will the contract be sent?',
      time: '12:00 pm',
      isOnline: true,
      statusColor: 'busy',
      unreadCount: 5,
      isUnread: true,
    },
    {
      id: '6',
      name: 'Marvin McKinney',
      avatar:
        ' https://cdn-tailgrids.b-cdn.net/3.0/dashboard/chat-list/chat-01/Avatar-6.png',
      message: 'Interested in this loads?',
      time: '11.00 pm',
      isOnline: false,
      statusColor: 'offline',
      unreadCount: 5,
      isUnread: true,
    },
    {
      id: '7',
      name: 'Wade Warren',
      avatar:
        ' https://cdn-tailgrids.b-cdn.net/3.0/dashboard/chat-list/chat-01/Avatar-7.png',
      message: "Are you There? I'm busy yesterday.",
      time: '3 Days',
      isOnline: true,
      statusColor: 'online',
      isUnread: false,
    },
    {
      id: '8',
      name: 'Brooklyn Simmons',
      avatar:
        ' https://cdn-tailgrids.b-cdn.net/3.0/dashboard/chat-list/chat-01/Avatar-8.png',
      message: 'Hello? interested in this loads?',
      time: '10:30 pm',
      isOnline: true,
      statusColor: 'busy',
      unreadCount: 5,
      isUnread: true,
    },
    {
      id: '9',
      name: 'Jacob Jones',
      avatar:
        ' https://cdn-tailgrids.b-cdn.net/3.0/dashboard/chat-list/chat-01/Avatar-9.png',
      message:
        "Hi, I received an email about a charge that I don't recognize. Can you help me investigate this furt",
      time: '6 days',
      isOnline: true,
      statusColor: 'online',
      isUnread: false,
    },
  ];

  return (
    <div className="bg-background-soft-100 py-20">
      <div className="bg-background-50 border-base-50 mx-auto flex max-w-[360px] flex-col overflow-hidden rounded-2xl border p-5">
        <div>
          <div className="mb-5 flex justify-between">
            <h2 className="text-title-50 text-2xl font-semibold">Chats</h2>
            <div className="relative inline-block">
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <button className="text-text-100 hover:bg-background-soft-100 inline-flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg bg-transparent">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.0039 4.25L12.1826 4.25879C13.0653 4.34819 13.7539 5.09375 13.7539 6C13.7539 6.90625 13.0653 7.65181 12.1826 7.74121L12.0039 7.75H11.9941C11.0276 7.75 10.2441 6.9665 10.2441 6C10.2441 5.0335 11.0276 4.25 11.9941 4.25H12.0039ZM12.0039 16.25L12.1826 16.2588C13.0653 16.3482 13.7539 17.0937 13.7539 18C13.7539 18.9063 13.0653 19.6518 12.1826 19.7412L12.0039 19.75H11.9941C11.0276 19.75 10.2441 18.9665 10.2441 18C10.2441 17.0335 11.0276 16.25 11.9941 16.25H12.0039ZM12.1826 10.2588L12.0039 10.25H11.9941C11.0276 10.25 10.2441 11.0335 10.2441 12C10.2441 12.9665 11.0276 13.75 11.9941 13.75H12.0039L12.1826 13.7412C13.0653 13.6518 13.7539 12.9063 13.7539 12C13.7539 11.0937 13.0653 10.3482 12.1826 10.2588Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  placement="bottom end"
                  className="bg-background-50 border-base-100 w-40 rounded-xl border p-1"
                >
                  <DropdownMenuItem className="text-text-100 hover:bg-background-soft-100 hover:text-text-50 flex w-full cursor-pointer rounded-lg text-left text-sm font-normal">
                    View More
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-text-100 hover:bg-background-soft-100 hover:text-text-50 flex w-full cursor-pointer rounded-lg text-left text-sm font-normal">
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <div className="relative">
            <span className="text-text-100 pointer-events-none absolute top-1/2 left-4 z-10 -translate-y-1/2">
              <Search1 />
            </span>
            <Input
              type="text"
              className="h-11 w-full pl-10"
              placeholder="Search..."
            />
          </div>
        </div>
        <div className="flex-1 pt-5">
          <ul>
            {chatData.map((chat) => (
              <li
                key={chat.id}
                className="hover:bg-background-soft-100 flex cursor-pointer items-center justify-between rounded-lg bg-transparent p-3 transition-colors"
              >
                <Avatar
                  src={chat.avatar}
                  alt={chat.name}
                  fallback={chat.name.charAt(0)}
                  size="lg"
                  status={chat.statusColor}
                  className="shrink-0"
                />
                <div className="ml-3 grow">
                  <div className="flex items-start justify-between">
                    <h4 className="text-title-50 text-sm font-medium">
                      {chat.name}
                    </h4>
                    <span
                      className={`text-[10px] leading-4 font-medium ${
                        chat.isUnread ? 'text-title-50' : 'text-text-200'
                      }`}
                    >
                      {chat.time}
                    </span>
                  </div>
                  {chat.unreadCount ? (
                    <div className="mt-1 flex items-center justify-between">
                      <p className="text-title-50 line-clamp-1 text-xs font-medium">
                        {chat.message}
                      </p>
                      <Badge size="sm" color="primary">
                        {chat.unreadCount < 10
                          ? `0${chat.unreadCount}`
                          : chat.unreadCount}
                      </Badge>
                    </div>
                  ) : (
                    <p
                      className={`mt-0.5 line-clamp-1 text-xs ${
                        chat.isUnread
                          ? 'text-title-50 font-medium'
                          : 'text-text-100'
                      }`}
                    >
                      {chat.message}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
