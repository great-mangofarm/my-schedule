import {
  Microphone1,
  Paperclip2,
  Send3,
  Link1AngularRight,
} from '@tailgrids/icons';
import { Avatar } from '@/components/core/avatar';

interface Message {
  id: number;
  content: string;
  sender: string;
  time: string;
  isOwn: boolean;
  avatar?: string;
  link?: {
    title: string;
    description: string;
    url: string;
  };
}

const messages: Message[] = [
  {
    id: 1,
    content:
      "Hi there, I think there's a problem with my billing. I just checked my bank statement and it looks like I've been charged twice for this month's subscription.",
    sender: 'Leslie Alexander',
    time: '12:38 pm',
    isOwn: false,
    avatar:
      ' https://cdn-tailgrids.b-cdn.net/3.0/dashboard/chat-box/chat-box-01/avatar.png',
  },
  {
    id: 2,
    content:
      "Oh no, I'm really sorry to hear that. Let's get this sorted out for you right away. Could you please share your invoice ID?",
    sender: 'Robert',
    time: '12:40 pm',
    isOwn: true,
  },
  {
    id: 3,
    content: 'Sure, the invoice ID is INV-4729 and the last 4 digits are 4327.',
    sender: 'Leslie Alexander',
    time: '12:44 pm',
    isOwn: false,
    avatar:
      ' https://cdn-tailgrids.b-cdn.net/3.0/dashboard/chat-box/chat-box-01/avatar.png',
  },
  {
    id: 4,
    content:
      "Thank you. I've reviewed your account and, yes, I can confirm there was a duplicate charge on our end. You can view the full transaction details",
    sender: 'Robert',
    time: '12:40 pm',
    isOwn: true,
    link: {
      title: 'Enternal Link Title',
      description: 'Link description',
      url: 'https://www.externallink.com',
    },
  },
  {
    id: 5,
    content:
      'Perfect. Thanks so much for the quick help and for making it easy!',
    sender: 'Leslie Alexander',
    time: '12:48 pm',
    isOwn: false,
    avatar:
      ' https://cdn-tailgrids.b-cdn.net/3.0/dashboard/chat-box/chat-box-01/avatar.png',
  },
];

function DotSeparator() {
  return (
    <svg
      className="text-text-200"
      xmlns="http://www.w3.org/2000/svg"
      width="4"
      height="4"
      viewBox="0 0 4 4"
      fill="none"
    >
      <circle cx="2" cy="2" r="2" fill="currentColor" />
    </svg>
  );
}

function MessageLink({ link }: { link: Message['link'] }) {
  if (!link) return null;

  return (
    <div className="max-w-[284px]">
      <div className="bg-primary-500 text-white-100 max-w-[480px] rounded-2xl rounded-br-none p-1">
        <div className="bg-primary-600 flex items-start justify-between rounded-xl p-2.5">
          <div>
            <h3 className="text-base font-normal">{link.title}</h3>
            <span className="text-xs">{link.description}</span>
          </div>
          <div>
            <a href={link.url}>
              <Link1AngularRight className="text-white-100" />
            </a>
          </div>
        </div>
        <p className="mt-2 px-2 pb-1 text-sm">{link.url}</p>
      </div>
    </div>
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
        <div className="bg-chat-list-background-primary-alt max-w-[424px] rounded-2xl rounded-bl-none px-4 py-3">
          <p className="text-title-50 text-base leading-6">{message.content}</p>
        </div>
        <div className="mt-2 flex items-center gap-1.5">
          <p className="text-text-50 text-sm font-medium">{message.sender}</p>
          <DotSeparator />
          <p className="text-text-100 text-xs">{message.time}</p>
        </div>
      </div>
    </div>
  );
}

function SentMessage({ message }: { message: Message }) {
  return (
    <div className="flex flex-col items-end">
      <div className="flex items-center gap-3">
        <div>
          <div className="bg-primary-500 text-white-100 max-w-[480px] rounded-2xl rounded-br-none px-4 py-3">
            <p>{message.content}</p>
          </div>
          {!message.link && (
            <div className="mt-2 flex items-center gap-1.5">
              <p className="text-text-100 text-xs">{message.time}</p>
              <DotSeparator />
              <p className="text-text-50 text-sm font-medium">
                {message.sender}
              </p>
            </div>
          )}
        </div>
      </div>
      {message.link && (
        <>
          <div className="mt-2">
            <MessageLink link={message.link} />
          </div>
          <div className="mt-2 flex w-full max-w-[284px] items-center gap-1.5">
            <p className="text-text-100 text-xs">{message.time}</p>
            <DotSeparator />
            <p className="text-text-50 text-sm font-medium">{message.sender}</p>
          </div>
        </>
      )}
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

function ChatInput() {
  return (
    <div className="flex gap-2 p-3">
      <div className="flex gap-2">
        <button className="bg-background-soft-200 text-text-50 inline-flex h-13 w-13 shrink-0 cursor-pointer items-center justify-center rounded-full">
          <Paperclip2 />
        </button>
        <button className="bg-background-soft-200 text-text-50 inline-flex h-13 w-13 shrink-0 cursor-pointer items-center justify-center rounded-full">
          <Microphone1 />
        </button>
      </div>
      <div className="relative flex-1">
        <input
          type="text"
          placeholder="Type your message..."
          className="bg-background-50 text-title-50 placeholder:text-text-200 h-13 w-full rounded-full border-0 pr-13 pl-6 shadow-[0_8px_30px_0_rgba(12,11,25,0.04)] ring-0"
        />
        <button className="text-white-100 bg-foreground-soft-400 absolute inset-y-1 right-1 z-20 inline-flex h-11 w-11 items-center justify-center rounded-full">
          <Send3 />
        </button>
      </div>
    </div>
  );
}

export default function Chatboxes1() {
  return (
    <section className="mx-auto max-w-[888px] py-10 lg:py-20">
      <div className="bg-background-soft-100 flex flex-col rounded-3xl p-1.5">
        <div className="bg-background-50 flex-1 space-y-8 overflow-y-auto rounded-[20px] p-5 sm:p-8">
          {messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}
        </div>
        <ChatInput />
      </div>
    </section>
  );
}
