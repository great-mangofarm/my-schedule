import { Avatar } from '@/components/core/avatar';
import { AvatarGroup } from '@/components/core/avatar';
import { Badge } from '@/components/core/badge';
import { Button } from '@/components/core/button';
import {
  Book4,
  Camera1,
  Envelope1,
  GamePad,
  Gear1,
  Headphone1Mic,
  Heart,
  Home,
  Layout22,
  Muscles,
  Music,
  UserMultiple1,
} from '@tailgrids/icons';
import { useState } from 'react';

const SidebarV5 = () => {
  const [open, setOpen] = useState(true);

  // Three dots icon component for collapsed sections
  const ThreeDotsIcon = () => (
    <svg
      onClick={() => setOpen(!open)}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className="cursor-pointer"
    >
      <path
        d="M5.99902 10.2451C6.96552 10.2451 7.74902 11.0286 7.74902 11.9951V12.0049L7.74023 12.1836C7.65083 13.0663 6.90528 13.7549 5.99902 13.7549C5.09277 13.7549 4.34721 13.0663 4.25781 12.1836L4.24902 12.0049V11.9951C4.24902 11.0286 5.03253 10.2451 5.99902 10.2451ZM11.999 10.2451C12.9655 10.2451 13.749 11.0286 13.749 11.9951V12.0049L13.7402 12.1836C13.6508 13.0663 12.9053 13.7549 11.999 13.7549C11.0928 13.7549 10.3472 13.0663 10.2578 12.1836L10.249 12.0049V11.9951C10.249 11.0286 11.0325 10.2451 11.999 10.2451ZM17.999 10.2451C18.9655 10.2451 19.749 11.0286 19.749 11.9951V12.0049L19.7402 12.1836C19.6508 13.0663 18.9053 13.7549 17.999 13.7549C17.0928 13.7549 16.3472 13.0663 16.2578 12.1836L16.249 12.0049V11.9951C16.249 11.0286 17.0325 10.2451 17.999 10.2451Z"
        fill="currentColor"
      />
    </svg>
  );

  // Menu data arrays
  const menuItems = [
    { icon: <Home />, label: 'Feed', href: 'javascript:void(0)' },
    {
      icon: <UserMultiple1 />,
      label: 'My Groups',
      href: 'javascript:void(0)',
      avatars: [
        ' https://cdn-tailgrids.b-cdn.net/3.0/dashboard/sidebar/gr-1.png',
        ' https://cdn-tailgrids.b-cdn.net/3.0/dashboard/sidebar/gr-2.png',
        ' https://cdn-tailgrids.b-cdn.net/3.0/dashboard/sidebar/gr-3.png',
      ],
    },
    {
      icon: <Envelope1 />,
      label: 'Messages',
      href: 'javascript:void(0)',
      badge: '24+',
    },
    { icon: <Camera1 />, label: 'Media', href: 'javascript:void(0)' },
  ];

  const communityItems = [
    { icon: <GamePad />, label: 'Gaming Hub', href: 'javascript:void(0)' },
    { icon: <Book4 />, label: 'Book Club', href: 'javascript:void(0)' },
    { icon: <Music />, label: 'Music Lovers', href: 'javascript:void(0)' },
    { icon: <Muscles />, label: 'Fitness Group', href: 'javascript:void(0)' },
  ];

  const bottomItems = [
    { icon: <Heart />, label: 'Favorites', href: 'javascript:void(0)' },
    { icon: <Gear1 />, label: 'Settings', href: 'javascript:void(0)' },
  ];

  // Reusable menu item component
  const MenuItem = ({
    icon,
    label,
    href,
    badge,
    avatars,
  }: {
    icon: React.ReactNode;
    label: string;
    href: string;
    badge?: string;
    avatars?: string[];
  }) => (
    <li className="group relative">
      <a
        href={href}
        className={`hover:bg-background-50 text-text-50 hover:text-title-50 flex h-10 w-full cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-normal transition ${
          open ? 'justify-start' : 'justify-center'
        }`}
      >
        {icon}
        {open && <span>{label}</span>}
        {open && badge && (
          <Badge color="error" size="sm" className="ml-auto">
            {badge}
          </Badge>
        )}
        {open && avatars && (
          <span className="ml-auto">
            <AvatarGroup
              size="xs"
              data={avatars.map((avatar, index) => ({
                src: avatar,
                alt: `Group member ${index + 1}`,
              }))}
            />
          </span>
        )}
      </a>

      {/* Hover tooltip for collapsed state */}
      {!open && (
        <div className="bg-background-50 border-base-100 text-title-50 pointer-events-none absolute top-0 left-full z-50 ml-2 rounded-lg border px-3 py-2 text-sm whitespace-nowrap opacity-0 shadow-xs transition-opacity duration-200 group-hover:opacity-100">
          {label}
          <div className="bg-background-50 border-base-100 absolute top-1/2 left-0 h-2 w-2 -translate-x-1 -translate-y-1/2 rotate-45 transform border-b border-l"></div>
        </div>
      )}
    </li>
  );

  // Menu section component
  const MenuSection = ({
    title,
    items,
  }: {
    title: string;
    items: Array<{
      icon: React.ReactNode;
      label: string;
      href: string;
      badge?: string;
      avatars?: string[];
    }>;
  }) => (
    <div>
      <span
        className={`text-text-200 mb-3 flex text-xs ${
          open ? 'justify-start' : 'justify-center'
        }`}
      >
        {open ? <span>{title}</span> : <ThreeDotsIcon />}
      </span>
      <ul className="space-y-1">
        {items.map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}
      </ul>
    </div>
  );

  return (
    <div className="flex min-h-screen">
      <aside
        className={`bg-background-soft-100 p-5 ${open ? 'w-75' : 'w-22.5'}`}
      >
        <div className="flex h-full flex-col justify-between">
          <div className="flex-1">
            {/* Header */}
            <div className="mb-6">
              <div
                className={`bg-background-soft-50 flex items-center rounded-lg p-2 ${
                  open ? 'justify-between' : 'justify-center'
                }`}
              >
                <div className="flex items-center justify-center gap-3">
                  <div className="shrink-0">
                    <Avatar
                      src="https://cdn-tailgrids.b-cdn.net/3.0/dashboard/sidebar/avatar-5.png"
                      alt="Kathryn Murphy"
                      fallback="KM"
                      size={open ? 'md' : 'sm'}
                    />
                  </div>
                  <div className={open ? 'block' : 'hidden'}>
                    <h3 className="text-title-50 text-sm font-medium">
                      Kathryn Murphy
                    </h3>
                    <p className="text-text-100 text-xs">
                      murphy.mitc@example.com
                    </p>
                  </div>
                </div>
                <div className={open ? 'block' : 'hidden'}>
                  <button
                    onClick={() => setOpen(!open)}
                    className="text-text-100 hover:text-text-50 cursor-pointer"
                  >
                    <Layout22 />
                  </button>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              {/* Menu Sections */}
              <MenuSection title="Menu" items={menuItems} />
              <MenuSection title="Communities" items={communityItems} />
            </div>
          </div>
          <div className="mt-20">
            <ul className="mb-4 space-y-1">
              {bottomItems.map((item, index) => (
                <MenuItem key={index} {...item} />
              ))}
            </ul>
            {/* Widget */}
            {open && (
              <div className="bg-background-50 border-base-50 relative mt-auto w-full rounded-xl border p-2.5">
                <div className="flex gap-3">
                  <div className="bg-background-soft-100 text-text-50 inline-flex h-11 w-11 items-center justify-center rounded-lg">
                    <Headphone1Mic />
                  </div>
                  <div>
                    {/* content */}
                    <h3 className="text-title-50 mb-2.5 text-base font-semibold">
                      Need help ?
                    </h3>
                    <p className="text-text-100 mb-4 text-sm">
                      Go to help center
                    </p>
                  </div>
                </div>
                <Button className="w-full" appearance="outline" size="sm">
                  Contact Us
                </Button>
              </div>
            )}
          </div>
        </div>
      </aside>
      <div className="bg-background-50 h-auto w-full flex-1 p-5">
        <div className="border-base-100 flex h-full flex-col items-center justify-center rounded-lg border border-dashed text-center">
          Hello
        </div>
      </div>
    </div>
  );
};

export default SidebarV5;
