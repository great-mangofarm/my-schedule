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
  Microphone1,
  Paperclip2,
  Send3,
} from '@tailgrids/icons';

interface Message {
  id: number;
  content: string;
  sender: string;
  time: string;
  isOwn: boolean;
  avatar?: string;
}

const messages: Message[] = [
  {
    id: 1,
    content:
      "Hi there, I think there's a problem with my billing. I just checked my bank statement and it looks like I've been charged twice for this month's subscription.",
    sender: 'Lindsey Curtis',
    time: '45 min ago',
    isOwn: false,
    avatar:
      ' https://cdn-tailgrids.b-cdn.net/3.0/dashboard/chat-box/chat-box-01/avatar.png',
  },
  {
    id: 2,
    content:
      "Oh no, I'm really sorry to hear that. Let's get this sorted out for you right away. Could you please share your invoice ID?",
    sender: 'Me',
    time: '2 Hours ago',
    isOwn: true,
    avatar:
      ' https://cdn-tailgrids.b-cdn.net/3.0/dashboard/chat-box/chat-box-04/avatar-2.png',
  },
  {
    id: 3,
    content: 'Sure, the invoice ID is INV-4729 and the last 4 digits are 4327.',
    sender: 'Lindsey Curtis',
    time: '45 min ago',
    isOwn: false,
    avatar:
      ' https://cdn-tailgrids.b-cdn.net/3.0/dashboard/chat-box/chat-box-01/avatar.png',
  },
  {
    id: 4,
    content:
      "Thank you. I've reviewed your account and, yes, I can confirm there was a duplicate charge on our end.",
    sender: 'Me',
    time: '2 Hours ago',
    isOwn: true,
    avatar:
      ' https://cdn-tailgrids.b-cdn.net/3.0/dashboard/chat-box/chat-box-04/avatar-2.png',
  },
  {
    id: 5,
    content:
      'Perfect. Thanks so much for the quick help and for making it easy!',
    sender: 'Lindsey Curtis',
    time: '45 min ago',
    isOwn: false,
    avatar:
      ' https://cdn-tailgrids.b-cdn.net/3.0/dashboard/chat-box/chat-box-01/avatar.png',
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
        <div className="bg-background-soft-100 max-w-[424px] rounded-2xl rounded-tl-none px-4 py-3">
          <p className="text-title-50 text-base leading-6">{message.content}</p>
        </div>
        <div className="mt-2">
          <p className="text-text-100 text-xs">{message.time}</p>
        </div>
      </div>
    </div>
  );
}

function SentMessage({ message }: { message: Message }) {
  return (
    <div className="flex flex-col items-end">
      <div className="flex items-start gap-3">
        <div>
          <div className="bg-primary-500 text-white-100 max-w-[448px] rounded-2xl rounded-tr-none px-4 py-3">
            <p className="text-base leading-6">{message.content}</p>
          </div>
          <div className="mt-2 flex items-center justify-end gap-1.5">
            <p className="text-text-100 text-xs">{message.time}</p>
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
    <div className="border-base-100 flex items-center justify-between border-b px-6 py-5">
      <div className="flex items-center gap-3">
        <Avatar
          src="https://cdn-tailgrids.b-cdn.net/3.0/dashboard/chat-box/chat-box-04/avatar.png"
          alt="Lindsey Curtis"
          fallback="LC"
          size="lg"
          status="online"
        />
        <div>
          <h4 className="text-title-50 font-medium">Lindsey Curtis</h4>
        </div>
      </div>
      <div>
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

function InputButton({ children }: { children: React.ReactNode }) {
  return (
    <button className="text-text-100 hover:bg-background-soft-100 hover:text-text-50 inline-flex h-8 w-8 cursor-pointer items-center justify-center rounded-xl transition-colors">
      {children}
    </button>
  );
}

function ChatInput() {
  return (
    <div className="bg-background-50 border-base-100 flex flex-col justify-between rounded-xl border px-6 pt-6 pb-4">
      <textarea
        placeholder="Write your message here..."
        className="placeholder:text-text-200 text-title-50 h-18 w-full resize-none border-0 bg-transparent p-0 focus:ring-0 focus:outline-0"
      ></textarea>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <InputButton>
            <EmojiSmile />
          </InputButton>
          <InputButton>
            <Paperclip2 />
          </InputButton>
          <InputButton>
            <Microphone1 />
          </InputButton>
        </div>
        <div>
          <button className="text-white-100 bg-foreground-soft-500 hover:bg-foreground-soft-200 inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full transition-colors">
            <Send3 />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Chatboxes4() {
  return (
    <section className="py-14 lg:py-28">
      <div className="bg-background-soft-100 border-base-50 mx-auto max-w-[876px] space-y-3 rounded-2xl border p-3">
        <div className="bg-background-50 rounded-xl">
          <ChatHeader />
          <div className="flex-1 space-y-8 overflow-y-auto px-6 py-8">
            {messages.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))}
          </div>
        </div>
        <ChatInput />
      </div>
    </section>
  );
}
