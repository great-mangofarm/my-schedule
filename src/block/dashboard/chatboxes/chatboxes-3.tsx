import { Avatar } from '@/components/core/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/core/dropdown';
import {
  EmojiSmile,
  MenuMeatballs1,
  Microphone3,
  Paperclip2,
  Send3,
  Telephone1,
  Video,
} from '@tailgrids/icons';

interface Message {
  id: number;
  content: string;
  sender: string;
  time: string;
  isOwn: boolean;
  avatar?: string;
  image?: string;
}

const messages: Message[] = [
  {
    id: 1,
    content: "Hi, I'm looking for some advice on upgrading my laptop.",
    sender: 'Lindsey Curtis',
    time: '2 hours ago',
    isOwn: false,
    avatar:
      ' https://cdn-tailgrids.b-cdn.net/3.0/dashboard/chat-box/chat-box-03/avatar.png',
  },
  {
    id: 2,
    content: 'Sure! What kind of work do you usually do on it?',
    sender: 'Me',
    time: '2 hours ago',
    isOwn: true,
  },
  {
    id: 3,
    content:
      'Mostly graphic design, some light video editing, and of course… Netflix.',
    sender: 'Lindsey Curtis',
    time: '2 hours ago',
    isOwn: false,
    avatar:
      ' https://cdn-tailgrids.b-cdn.net/3.0/dashboard/chat-box/chat-box-03/avatar.png',
  },
  {
    id: 4,
    content:
      "Got it! You'll want a good processor, at least 16GB RAM, and maybe an SSD for faster performance.",
    sender: 'Me',
    time: '2 hours ago',
    isOwn: true,
  },
  {
    id: 5,
    content: 'Do you have any other requirement?',
    sender: 'Me',
    time: '2 hours ago',
    isOwn: true,
  },
  {
    id: 6,
    content: 'Do you have this?',
    sender: 'Lindsey Curtis',
    time: '2 hours ago',
    isOwn: false,
    avatar:
      'https://cdn-tailgrids.b-cdn.net/3.0/dashboard/chat-box/chat-box-03/avatar.png',
    image:
      'https://cdn-tailgrids.b-cdn.net/3.0/dashboard/chat-box/chat-box-03/Image.jpg',
  },
];

function ReceivedMessage({ message }: { message: Message }) {
  return (
    <div className="flex items-start gap-3">
      <Avatar
        src={message.avatar}
        alt={message.sender}
        fallback={message.sender.charAt(0)}
        size="md"
      />
      <div>
        <div className="bg-chat-list-background-primary max-w-[429px] rounded-2xl rounded-bl-none p-1">
          {message.image && (
            <img src={message.image} className="rounded-xl" alt="" />
          )}
          <p
            className={`text-white-100 text-base leading-6 ${message.image ? 'mt-2 px-3 pb-2' : 'px-3 py-2'}`}
          >
            {message.content}
          </p>
        </div>
        <div className="mt-2">
          <p className="text-text-100 text-sm font-normal">{message.time}</p>
        </div>
      </div>
    </div>
  );
}

function SentMessage({
  message,
  isLastInGroup,
}: {
  message: Message;
  isLastInGroup: boolean;
}) {
  return (
    <div className="flex flex-col items-end">
      <div className="flex items-center gap-3">
        <div>
          <div
            className={`bg-primary-500 text-white-100 max-w-[480px] rounded-2xl rounded-br-none px-4 py-3 ${!isLastInGroup ? 'mb-2' : ''}`}
          >
            <p>{message.content}</p>
          </div>
          {isLastInGroup && (
            <div className="mt-2 flex items-start gap-1.5">
              <p className="text-text-100 text-xs font-normal">
                {message.time}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function ChatMessage({
  message,
  isLastInGroup,
}: {
  message: Message;
  isLastInGroup: boolean;
}) {
  return message.isOwn ? (
    <SentMessage message={message} isLastInGroup={isLastInGroup} />
  ) : (
    <ReceivedMessage message={message} />
  );
}

function ChatHeader() {
  return (
    <div className="border-base-100 flex items-center justify-between border-b px-6 py-5">
      <div className="flex items-center gap-3">
        <Avatar
          src="https://cdn-tailgrids.b-cdn.net/3.0/dashboard/chat-box/chat-box-03/avatar.png"
          alt="Lindsey Curtis"
          fallback="LC"
          size="lg"
          status="online"
        />
        <div>
          <h4 className="text-title-50 font-medium">Lindsey Curtis</h4>
        </div>
      </div>
      <div className="flex gap-3">
        <button>
          <Telephone1 />
        </button>
        <button>
          <Video />
        </button>
        <DropdownMenu>
          <DropdownMenuTrigger className="text-text-100 hover:text-text-50 relative inline-flex h-10 w-10 cursor-pointer items-center justify-center outline-hidden transition-colors data-focus-visible:outline-hidden">
            <MenuMeatballs1 />
          </DropdownMenuTrigger>
          <DropdownMenuContent
            placement="bottom end"
            className="bg-dropdown-background border-base-50 min-w-[180px] rounded-lg border p-1.5 shadow-lg"
          >
            <DropdownMenuItem className="text-text-100 hover:bg-dropdown-hover-background hover:text-title-50 cursor-pointer rounded-md px-3 py-2 text-sm font-medium outline-hidden transition-colors">
              View Profile
            </DropdownMenuItem>
            <DropdownMenuItem className="text-text-100 hover:bg-dropdown-hover-background hover:text-title-50 cursor-pointer rounded-md px-3 py-2 text-sm font-medium outline-hidden transition-colors">
              Mute Notifications
            </DropdownMenuItem>
            <DropdownMenuItem className="text-error-500 cursor-pointer rounded-md px-3 py-2 text-sm font-medium outline-hidden transition-colors hover:bg-red-50 hover:text-red-600">
              Block User
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}

function ChatInput() {
  return (
    <div className="border-base-100 border-t px-6 py-3">
      <div className="flex items-center justify-between">
        <div className="flex grow items-center">
          <button className="text-text-100">
            <EmojiSmile />
          </button>
          <input
            placeholder="Type your message..."
            type="text"
            className="text-title-50 w-full grow border-0 bg-transparent ring-0 focus:ring-0"
          />
        </div>
        <div className="flex gap-2">
          <button className="text-text-100">
            <Paperclip2 />
          </button>
          <button className="text-text-100">
            <Microphone3 />
          </button>
          <button className="bg-primary-500 text-white-100 ml-3 inline-flex h-11 w-11 items-center justify-center rounded-full">
            <Send3 />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Chatboxes3() {
  // Group consecutive sent messages to show timestamp only on the last one
  const processedMessages = messages.map((message, index) => {
    const nextMessage = messages[index + 1];
    const isLastInGroup = !nextMessage || !nextMessage.isOwn || !message.isOwn;
    return { message, isLastInGroup };
  });

  return (
    <div className="bg-background-soft-100 py-10">
      <div className="bordr bg-background-50 border-base-50 mx-auto max-w-[900px] rounded-2xl">
        <ChatHeader />
        <div className="flex-1 space-y-8 overflow-y-auto p-6">
          {processedMessages.map(({ message, isLastInGroup }) => (
            <ChatMessage
              key={message.id}
              message={message}
              isLastInGroup={isLastInGroup}
            />
          ))}
        </div>
        <ChatInput />
      </div>
    </div>
  );
}
