import { Avatar } from '@/components/core/avatar';
import { Badge } from '@/components/core/badge';
import { Input } from '@/components/core/input';
import {
  ChevronDown,
  MenuMeatballs1,
  Search1,
  SlidersDoubleHorizontal,
} from '@tailgrids/icons';
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

interface ChatSection {
  title: string;
  chats: ChatItem[];
}

export default function ChatLists3() {
  const pinnedChats: ChatItem[] = [
    {
      id: '1',
      name: 'Devon Lane',
      avatar:
        ' https://cdn-tailgrids.b-cdn.net/3.0/dashboard/chat-list/chat-03/avatar.png',
      message: 'Interested in this loads?',
      time: '15 mins',
      isOnline: true,
      statusColor: 'online',
      isUnread: false,
    },
    {
      id: '2',
      name: 'Devon Lane',
      avatar:
        ' https://cdn-tailgrids.b-cdn.net/3.0/dashboard/chat-list/chat-03/avatar-1.png',
      message: 'Interested in this loads?',
      time: '15 mins',
      isOnline: true,
      statusColor: 'online',
      isUnread: false,
    },
    {
      id: '3',
      name: 'Darrell Steward',
      avatar:
        ' https://cdn-tailgrids.b-cdn.net/3.0/dashboard/chat-list/chat-03/avatar-3.png',
      message: 'Okay...Do we have a deal?',
      time: '12:00 pm',
      isOnline: true,
      statusColor: 'online',
      unreadCount: 5,
      isUnread: true,
    },
  ];

  const allMessagesChats: ChatItem[] = [
    {
      id: '4',
      name: 'Ralph Edwards',
      avatar:
        ' https://cdn-tailgrids.b-cdn.net/3.0/dashboard/chat-list/chat-03/avatar-4.png',
      message: 'When will the contract be sent?',
      time: '15 mins',
      isOnline: true,
      statusColor: 'busy',
      isUnread: false,
    },
    {
      id: '5',
      name: 'Marvin McKinney',
      avatar:
        ' https://cdn-tailgrids.b-cdn.net/3.0/dashboard/chat-list/chat-03/avatar-5.png',
      message: 'Interested in this loads?',
      time: '2d ago',
      isOnline: false,
      statusColor: 'offline',
      isUnread: false,
    },
    {
      id: '6',
      name: 'Brooklyn Simmons',
      avatar:
        ' https://cdn-tailgrids.b-cdn.net/3.0/dashboard/chat-list/chat-03/avatar-6.png',
      message: 'Hello? interested in this loads?',
      time: '10:30 pm',
      isOnline: true,
      statusColor: 'online',
      unreadCount: 5,
      isUnread: true,
    },
    {
      id: '7',
      name: 'Ralph Edwards',
      avatar:
        ' https://cdn-tailgrids.b-cdn.net/3.0/dashboard/chat-list/chat-03/avatar-7.png',
      message: 'When will the contract be sent?',
      time: '15 mins',
      isOnline: true,
      statusColor: 'online',
      isUnread: false,
    },
    {
      id: '8',
      name: 'Jacob Jones',
      avatar:
        ' https://cdn-tailgrids.b-cdn.net/3.0/dashboard/chat-list/chat-03/avatar-8.png',
      message:
        "Hi, I received an email about a charge that I don't recognize. Can you help me investigate this furt",
      time: '6 days',
      isOnline: true,
      statusColor: 'online',
      isUnread: false,
    },
  ];

  const chatSections: ChatSection[] = [
    { title: 'Pinned', chats: pinnedChats },
    { title: 'All Messages', chats: allMessagesChats },
  ];

  return (
    <div className="bg-background-soft-100 py-20">
      <div className="bg-background-50 border-base-50 mx-auto flex max-w-[360px] flex-col overflow-hidden rounded-2xl border p-5">
        <div>
          <div className="mb-5 flex justify-between">
            <h2 className="text-title-50 inline-flex items-center gap-2 text-xl font-semibold">
              Messages
              <span className="bg-primary-50 text-primary-500 rounded-2xl px-2.5 py-1 text-xs font-medium">
                05
              </span>
            </h2>
            <button className="text-text-100 hover:text-text-50 inline-flex cursor-pointer items-center gap-1 text-sm font-medium transition-colors">
              New chat
              <ChevronDown />
            </button>
          </div>
          <div className="relative">
            <span className="text-text-100 pointer-events-none absolute top-1/2 left-4 z-10 -translate-y-1/2">
              <Search1 />
            </span>
            <Input
              type="text"
              className="h-11 w-full px-10 pl-11"
              placeholder="Search..."
            />
            <span className="text-text-200 pointer-events-none absolute top-1/2 right-4 -translate-y-1/2">
              <SlidersDoubleHorizontal />
            </span>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto pt-5">
          <div className="space-y-6">
            {chatSections.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-text-100 text-sm">{section.title}</p>
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <button className="text-text-200 hover:text-text-50 cursor-pointer">
                        <MenuMeatballs1 />
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
                <ul>
                  {section.chats.map((chat) => (
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
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
