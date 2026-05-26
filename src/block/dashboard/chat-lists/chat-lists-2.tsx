import { Avatar } from '@/components/core/avatar';
import { Input } from '@/components/core/input';
import { ClockThree, StarFat } from '@tailgrids/icons';
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
  date: string;
  time: string;
  isFavorite: boolean;
}

export default function ChatLists2() {
  const chatData: ChatItem[] = [
    {
      id: '1',
      name: 'Devon Lane',
      avatar:
        ' https://cdn-tailgrids.b-cdn.net/3.0/dashboard/chat-list/chat-01/Avatar.png',
      message: 'Interested in this loads?',
      date: 'Today',
      time: '05:30 am',
      isFavorite: true,
    },
    {
      id: '2',
      name: 'Ronald Richards',
      avatar:
        ' https://cdn-tailgrids.b-cdn.net/3.0/dashboard/chat-list/chat-02/Avatar-2.png',
      message: 'Okay...Do we have a deal?',
      date: '2 Aug',
      time: '09:30 am',
      isFavorite: true,
    },
    {
      id: '3',
      name: 'Robert Fox',
      avatar:
        ' https://cdn-tailgrids.b-cdn.net/3.0/dashboard/chat-list/chat-02/Avatar-3.png',
      message: 'Hello?',
      date: '28 July',
      time: '10:30 am',
      isFavorite: true,
    },
    {
      id: '4',
      name: 'Darrell Steward',
      avatar:
        ' https://cdn-tailgrids.b-cdn.net/3.0/dashboard/chat-list/chat-02/Avatar-4.png',
      message: 'Okay...Do we have a deal?',
      date: '09 May',
      time: '11:30 am',
      isFavorite: true,
    },
    {
      id: '5',
      name: 'Ralph Edwards',
      avatar:
        ' https://cdn-tailgrids.b-cdn.net/3.0/dashboard/chat-list/chat-02/Avatar-5.png',
      message: 'When will the contract be sent?',
      date: '15 Feb',
      time: '12:30 pm',
      isFavorite: true,
    },
    {
      id: '6',
      name: 'Marvin McKinney',
      avatar:
        ' https://cdn-tailgrids.b-cdn.net/3.0/dashboard/chat-list/chat-02/Avatar-6.png',
      message: 'Interested in this loads?',
      date: '23 Jan',
      time: '12:30 am',
      isFavorite: true,
    },
  ];

  const DotIcon = () => (
    <svg
      className="text-background-soft-500"
      xmlns="http://www.w3.org/2000/svg"
      width="4"
      height="4"
      viewBox="0 0 4 4"
      fill="none"
    >
      <circle cx="2" cy="2" r="2" fill="currentColor" />
    </svg>
  );

  return (
    <div className="bg-background-soft-100 py-20">
      <div className="bg-background-50 border-base-50 mx-auto flex max-w-[360px] flex-col overflow-hidden rounded-2xl border pt-5 pb-3">
        {/* <!-- Header --> */}
        <div className="px-5">
          <div className="mb-5 flex justify-between">
            <h2 className="text-title-50 text-xl font-semibold">
              All Messages
            </h2>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.37476 3.04211C12.8727 3.04211 15.7087 5.87745 15.7087 9.37415C15.7085 12.8707 12.8726 15.7052 9.37476 15.7052C5.87706 15.705 3.04196 12.8706 3.04175 9.37415C3.04175 5.87756 5.87693 3.04229 9.37476 3.04211ZM15.418 14.3575C16.5365 13.0035 17.2086 11.2674 17.2087 9.37415C17.2087 5.04868 13.7008 1.54211 9.37476 1.54211C5.04884 1.54229 1.54175 5.04879 1.54175 9.37415C1.54196 13.6993 5.04898 17.205 9.37476 17.2052C11.267 17.2052 13.0028 16.5344 14.3569 15.4176L17.177 18.2385C17.4698 18.5312 17.9446 18.5311 18.2375 18.2385C18.5304 17.9457 18.5304 17.4699 18.2375 17.177L15.418 14.3575Z"
                  fill="currentColor"
                />
              </svg>
            </span>
            <Input
              type="text"
              className="h-11 w-full pl-10"
              placeholder="Search or start a new chat"
            />
          </div>
        </div>
        {/* <!-- List --> */}
        <div className="flex-1 pt-5">
          <ul className="divide-base-100 divide-y">
            {chatData.map((chat) => (
              <li
                key={chat.id}
                className="hover:bg-background-soft-100 flex cursor-pointer items-center justify-between bg-transparent px-5 py-3 transition-colors"
              >
                <Avatar
                  src={chat.avatar}
                  alt={chat.name}
                  fallback={chat.name.charAt(0)}
                  size="lg"
                  className="shrink-0"
                />
                <div className="ml-3 grow">
                  <div className="flex items-start justify-between">
                    <h4 className="text-title-50 text-sm font-medium">
                      {chat.name}
                    </h4>
                    {chat.isFavorite && (
                      <span>
                        <StarFat className="text-primary-500 siz-4" />
                      </span>
                    )}
                  </div>
                  <p className="text-text-100 mt-0.5 line-clamp-1 text-xs">
                    {chat.message}
                  </p>
                  <div className="text-text-200 mt-1.5 flex items-center space-x-2 text-[10px]">
                    <div className="flex gap-1">
                      <ClockThree className="size-4" />
                      <p>{chat.date}</p>
                    </div>
                    <DotIcon />
                    <div>
                      <p>{chat.time}</p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
