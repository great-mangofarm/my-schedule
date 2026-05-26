import {
  Bell1,
  Bolt1,
  Calendar,
  DashboardSquare1,
  Folder1,
  Gear1,
  Headphone1Mic,
  Home,
  InfoCircle,
  Page,
  Search1,
  UserMultiple1,
  Xmark2x,
} from '@tailgrids/icons';
import { Input } from '@/components/core/input';
import { useState } from 'react';

const SidebarV4 = () => {
  const [open, setOpen] = useState(true);

  // Icon navigation items
  const iconNavItems = [
    {
      label: 'Home',
      icon: <Home className="size-6" />,
      href: 'javascript:void(0)',
    },
    {
      label: 'Calendar',
      icon: <Calendar className="size-6" />,
      href: 'javascript:void(0)',
    },
    {
      label: 'Documents',
      icon: <Page className="size-6" />,
      href: 'javascript:void(0)',
    },
    {
      label: 'Users',
      icon: <UserMultiple1 className="size-6" />,
      href: 'javascript:void(0)',
    },
    {
      label: 'Flag',
      icon: <Folder1 className="size-6" />,
      href: 'javascript:void(0)',
    },
    {
      label: 'Info',
      icon: <InfoCircle className="size-6" />,
      href: 'javascript:void(0)',
    },
  ];

  // Menu sections data
  const menuItems = [
    {
      icon: <DashboardSquare1 className="size-5" />,
      label: 'Dashboard',
      href: 'javascript:void(0)',
    },
    {
      icon: <Calendar className="size-5" />,
      label: 'My Courses',
      href: 'javascript:void(0)',
    },
    {
      icon: <Page className="size-5" />,
      label: 'Assignments',
      href: 'javascript:void(0)',
      badge: 15,
    },
  ];

  const subjectItems = [
    {
      icon: <Folder1 className="size-5" />,
      label: 'Design',
      href: 'javascript:void(0)',
    },
    {
      icon: <Folder1 className="size-5" />,
      label: 'Development',
      href: 'javascript:void(0)',
    },
    {
      icon: <Folder1 className="size-5" />,
      label: 'Business',
      href: 'javascript:void(0)',
    },
    {
      icon: <Folder1 className="size-5" />,
      label: 'Language',
      href: 'javascript:void(0)',
    },
  ];

  const statusItems = [
    {
      icon: <Bell1 className="size-5" />,
      label: 'Notifications',
      href: 'javascript:void(0)',
    },
    {
      icon: <Headphone1Mic className="size-5" />,
      label: 'Support',
      href: 'javascript:void(0)',
    },
    {
      icon: <Gear1 className="size-5" />,
      label: 'Settings',
      href: 'javascript:void(0)',
    },
  ];

  // Reusable icon nav item component
  const NavIcon = ({
    icon,
    label,
    href,
  }: {
    icon: React.ReactNode;
    label: string;
    href: string;
  }) => (
    <li>
      <a
        href={href}
        className="hover:text-white-100 text-text-50 hover:bg-background-soft-200 flex h-11 w-11 cursor-pointer items-center justify-center rounded-lg bg-transparent transition"
        title={label}
      >
        {icon}
      </a>
    </li>
  );

  // Reusable menu item component
  const MenuItem = ({
    icon,
    label,
    href,
    badge,
  }: {
    icon: React.ReactNode;
    label: string;
    href: string;
    badge?: number;
  }) => (
    <li>
      <a
        href={href}
        className="text-title-50 hover:bg-background-soft-100 hover:text-title-50 flex h-10 w-full cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-normal transition"
      >
        <span className="text-text-50">{icon}</span>
        <span>{label}</span>
        {badge && (
          <span className="text-error-500 ml-auto rounded-full bg-red-50 px-2 py-0.5 text-xs font-medium">
            {badge}
          </span>
        )}
      </a>
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
      badge?: number;
    }>;
  }) => (
    <div>
      <span className="text-text-200 mb-3 block text-xs">{title}</span>
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
        className={`bg-background-50 flex p-2 py-2 ${open ? 'w-86.5' : 'w-20'}`}
      >
        {/* Small Menu */}
        <div className="border-base-50 bg-background-soft-50 flex flex-col items-center rounded-xl border px-4 py-5">
          {/* Logo */}
          <div className="relative">
            <a href="javascript:void(0)" className="mb-5 block">
              <img
                src="https://cdn-tailgrids.b-cdn.net/3.0/logo/taigrids-logo-icon.svg"
                alt="Dashboard Logo"
                className="h-8 w-8"
              />
            </a>
            <div
              className={`absolute left-1/2 -translate-x-1/2 justify-center ${
                open ? 'hidden' : 'flex'
              }`}
            >
              <button
                onClick={() => setOpen(!open)}
                className="text-text-100 hover:text-text-50 cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M7.77743 16.6668L7.77743 3.3335M15.4166 3.3335L4.58325 3.3335C3.8929 3.3335 3.33325 3.89314 3.33325 4.5835L3.33325 15.4168C3.33325 16.1072 3.8929 16.6668 4.58325 16.6668L15.4166 16.6668C16.1069 16.6668 16.6666 16.1072 16.6666 15.4168L16.6666 4.5835C16.6666 3.89314 16.1069 3.3335 15.4166 3.3335Z"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Navigation (vertically centered) */}
          <nav className="flex flex-1 items-center justify-center">
            <ul className="space-y-1">
              {iconNavItems.map((item, index) => (
                <NavIcon key={index} {...item} />
              ))}
            </ul>
          </nav>

          {/* Avatar */}
          <div>
            <img
              src="https://cdn-tailgrids.b-cdn.net/3.0/dashboard/sidebar/avatar-4.png"
              className="border-base-100 h-10 w-10 rounded-full border"
              alt="User Avatar"
            />
          </div>
        </div>

        <div
          className={`p-5 pb-0 ${open ? 'translate-x-0' : '-translate-x-100'}`}
        >
          <div className="flex h-full flex-col justify-between">
            <div className="flex-1">
              {/* Header */}
              <div className="mb-8">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-title-50 text-base font-medium">
                    Overview
                  </h3>
                  <button
                    onClick={() => setOpen(!open)}
                    className="text-text-100 hover:text-text-50 cursor-pointer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M7.77743 16.6668L7.77743 3.3335M15.4166 3.3335L4.58325 3.3335C3.8929 3.3335 3.33325 3.89314 3.33325 4.5835L3.33325 15.4168C3.33325 16.1072 3.8929 16.6668 4.58325 16.6668L15.4166 16.6668C16.1069 16.6668 16.6666 16.1072 16.6666 15.4168L16.6666 4.5835C16.6666 3.89314 16.1069 3.3335 15.4166 3.3335Z"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
                <form action="#">
                  <div className="relative flex items-center">
                    <span className="text-text-100 pointer-events-none absolute top-1/2 left-3 shrink-0 -translate-y-1/2">
                      <Search1 className="size-5" />
                    </span>
                    <Input
                      type="text"
                      placeholder="Search Files"
                      className="border-base-100 bg-background-soft-50 h-10 rounded-lg border px-4 py-2.5 pl-10"
                    />
                  </div>
                </form>
              </div>
              <div className="space-y-6">
                {/* Menu Sections */}
                <MenuSection title="Menu" items={menuItems} />
                <MenuSection title="Subjects" items={subjectItems} />
                <MenuSection title="Status" items={statusItems} />
              </div>
            </div>
            <div className="mt-8">
              {/* Widget */}
              <div className="border-base-50 to-background-50 from-background-soft-100 relative mt-auto rounded-xl border bg-linear-to-b p-4">
                <button className="absolute top-4 right-4">
                  <Xmark2x className="size-5" />
                </button>
                {/* content */}
                <h3 className="text-title-50 mb-2.5 text-base font-semibold">
                  Upgrade to Premium
                </h3>
                <p className="text-text-100 mb-4 text-sm">
                  Access unlimited courses, expert mentorship, and
                  certifications.
                </p>
                <a
                  href="javascript:void(0)"
                  className="text-title-50 hover:bg-background-soft-100 border-base-200 hover:text-title-50 flex items-center gap-2 rounded-lg border px-5 py-2.5 text-sm font-medium"
                >
                  <Bolt1 className="size-5" />
                  Upgrade Plan
                </a>
              </div>
            </div>
          </div>
        </div>
      </aside>
      <div className="h-auto w-full flex-1 px-5 py-2">
        <div className="border-base-100 flex h-full flex-col items-center justify-center rounded-lg border border-dashed text-center">
          Hello
        </div>
      </div>
    </div>
  );
};

export default SidebarV4;
