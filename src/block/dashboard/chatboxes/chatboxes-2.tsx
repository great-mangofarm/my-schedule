import { Avatar } from '@/components/core/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/core/dropdown';
import {
  BellDisabled2,
  DoubleCheckMark,
  EmojiSmile,
  MenuMeatballs1,
  Microphone1,
  Paperclip2,
  Send3,
  StarFat,
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
  status?: 'seen' | 'sent';
  showReactionButton?: boolean;
}

const messages: Message[] = [
  {
    id: 1,
    content:
      "Hi there, I think there's a problem with my billing. I just checked my bank statement and it looks like I've been charged twice for this month's subscription.",
    sender: 'Jack Connor',
    time: '1 hours ago',
    isOwn: false,
    avatar:
      ' https://cdn-tailgrids.b-cdn.net/3.0/dashboard/chat-box/chat-box-02/avatar.png',
    status: 'seen',
  },
  {
    id: 2,
    content:
      "Oh no, I'm really sorry to hear that. Let's get this sorted out for you right away. Could you please share your invoice ID?",
    sender: 'Me',
    time: '2 Hours ago',
    isOwn: true,
    avatar:
      ' https://cdn-tailgrids.b-cdn.net/3.0/dashboard/chat-box/chat-box-02/avatar-2.png',
    status: 'sent',
  },
  {
    id: 3,
    content: 'Sure, the invoice ID is INV-4729 and the last 4 digits are 4327.',
    sender: 'Jack Connor',
    time: '1 hours ago',
    isOwn: false,
    avatar:
      ' https://cdn-tailgrids.b-cdn.net/3.0/dashboard/chat-box/chat-box-02/avatar.png',
    status: 'seen',
    showReactionButton: true,
  },
  {
    id: 4,
    content:
      "Thank you. I've reviewed your account and, yes, I can confirm there was a duplicate charge on our end.",
    sender: 'Me',
    time: '2 Hours ago',
    isOwn: true,
    avatar:
      ' https://cdn-tailgrids.b-cdn.net/3.0/dashboard/chat-box/chat-box-02/avatar-2.png',
    status: 'sent',
  },
  {
    id: 5,
    content:
      'Perfect. Thanks so much for the quick help and for making it easy!',
    sender: 'Jack Connor',
    time: '1 hours ago',
    isOwn: false,
    avatar:
      ' https://cdn-tailgrids.b-cdn.net/3.0/dashboard/chat-box/chat-box-02/avatar.png',
  },
];

function ReactionButton() {
  return (
    <button className="text-text-100 bg-background-soft-100 inline-flex h-8 w-8 items-center justify-center rounded-full">
      <EmojiSmile />
    </button>
  );
}

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
        <div className="bg-background-soft-100 max-w-[448px] rounded-2xl px-4 py-3">
          <p className="text-title-50 text-base leading-6">{message.content}</p>
        </div>
        <div className="mt-2 flex items-center gap-1.5">
          {message.status === 'seen' && (
            <>
              <p className="text-text-50 text-sm font-medium">Seen</p>
              <DoubleCheckMark className="text-success-500 size-4" />
            </>
          )}
          <p className="text-text-100 text-xs">{message.time}</p>
        </div>
      </div>
      {message.showReactionButton && <ReactionButton />}
    </div>
  );
}

function SentMessage({ message }: { message: Message }) {
  return (
    <div className="flex flex-col items-end">
      <div className="flex items-start gap-3">
        <div>
          <div className="bg-chat-list-background-secondary-alt max-w-[448px] rounded-2xl px-4 py-3">
            <p className="text-title-50 text-base leading-6">
              {message.content}
            </p>
          </div>
          <div className="mt-2 flex items-center justify-end gap-1.5">
            <p className="text-text-100 text-xs">{message.time}</p>
            {message.status === 'sent' && (
              <>
                <p className="text-text-50 text-sm font-medium">Sent</p>
                <DoubleCheckMark className="text-success-500 size-4" />
              </>
            )}
          </div>
        </div>
        <Avatar
          src={message.avatar}
          alt={message.sender}
          fallback={message.sender.charAt(0)}
          size="md"
        />
      </div>
    </div>
  );
}

function ChatMessage({ message }: { message: Message }) {
  return message.isOwn ? (
    <SentMessage message={message} />
  ) : (
    <ReceivedMessage message={message} />
  );
}

function ChatHeader() {
  return (
    <div className="bg-background-soft-100 border-base-100 flex items-center justify-between border-b p-6">
      <div className="flex items-center gap-3">
        <Avatar
          src="https://cdn-tailgrids.b-cdn.net/3.0/dashboard/chat-box/chat-box-02/avatar.png"
          alt="Jack Connor"
          fallback="JC"
          size="lg"
          status="busy"
        />
        <div>
          <h3 className="text-title-50 font-medium">Jack Connor</h3>
          <p className="text-text-100 text-xs">Active 24m ago</p>
        </div>
      </div>
      <div className="flex">
        <HeaderButton>
          <Video />
        </HeaderButton>
        <HeaderButton>
          <Telephone1 />
        </HeaderButton>
        <HeaderButton>
          <StarFat />
        </HeaderButton>
        <HeaderButton>
          <BellDisabled2 />
        </HeaderButton>
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

function HeaderButton({ children }: { children: React.ReactNode }) {
  return (
    <button className="text-text-100 hover:text-text-50 inline-flex h-10 w-10 cursor-pointer items-center justify-center transition-colors">
      {children}
    </button>
  );
}

function ChatInput() {
  return (
    <div className="p-3">
      <div className="border-base-100 flex flex-col justify-between rounded-3xl border p-6">
        <textarea
          placeholder="Write your message here..."
          className="placeholder:text-text-200 text-title-50 h-22.5 w-full resize-none border-0 bg-transparent p-0 focus:ring-0 focus:outline-0"
        ></textarea>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <InputButton>
              <EmojiSmile className="size-5" />
            </InputButton>
            <InputButton>
              <Paperclip2 className="size-5" />
            </InputButton>
            <InputButton>
              <Microphone1 className="size-5" />
            </InputButton>
          </div>
          <div>
            <button className="text-white-100 bg-foreground-soft-400 hover:bg-foreground-soft-500 inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full">
              <Send3 />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function InputButton({ children }: { children: React.ReactNode }) {
  return (
    <button className="text-text-100 hover:bg-background-soft-100 hover:text-text-50 inline-flex h-8 w-8 cursor-pointer items-center justify-center rounded-xl transition-colors">
      {children}
    </button>
  );
}

export default function Chatboxes2() {
  return (
    <div className="bg-background-50 py-20">
      <section className="mx-auto max-w-[900px]">
        <div className="bg-background-50 flex flex-col overflow-hidden rounded-3xl">
          <ChatHeader />
          <div className="flex-1 space-y-6 overflow-y-auto px-6 py-8">
            {messages.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))}
          </div>
          <ChatInput />
        </div>
      </section>
    </div>
  );
}
