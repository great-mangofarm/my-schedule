import {
  BadgeDecagramPercent,
  BagShopping2,
  Bell1,
  Gear1,
  Headphone1Mic,
  Home,
  Layout22,
  Megaphone1,
  MenuMeatballs1,
  SackDollar,
  Shop,
  ThreeDCube1,
  UserMultiple1,
} from '@tailgrids/icons';
import { useState } from 'react';

const Sidebar3 = () => {
  const [open, setOpen] = useState(true);

  const mainMenuItems = [
    { icon: <Home />, label: 'Dashboard', href: 'javascript:void(0)' },
    { icon: <ThreeDCube1 />, label: 'Products', href: 'javascript:void(0)' },
    { icon: <BagShopping2 />, label: 'Orders', href: 'javascript:void(0)' },
    { icon: <UserMultiple1 />, label: 'Customers', href: 'javascript:void(0)' },
    { icon: <SackDollar />, label: 'Payments', href: 'javascript:void(0)' },
  ];

  const othersMenuItems = [
    { icon: <Megaphone1 />, label: 'Marketing', href: 'javascript:void(0)' },
    { icon: <Bell1 />, label: 'Notification', href: 'javascript:void(0)' },
    { icon: <Shop />, label: 'Store', href: 'javascript:void(0)' },
    {
      icon: <BadgeDecagramPercent />,
      label: 'Cashback',
      href: 'javascript:void(0)',
    },
  ];

  const bottomMenuItems = [
    { icon: <Headphone1Mic />, label: 'Support', href: 'javascript:void(0)' },
    { icon: <Gear1 />, label: 'Settings', href: 'javascript:void(0)' },
  ];

  const MenuItem = ({
    icon,
    label,
    href,
  }: {
    icon: React.ReactNode;
    label: string;
    href: string;
  }) => (
    <li className="group relative">
      <a
        href={href}
        className={`hover:text-primary-500 hover:bg-sidebar-nav-active-background text-text-50 flex h-10 w-full cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition ${
          open ? 'justify-start' : 'justify-center'
        }`}
      >
        {/* Icon */}
        {icon}
        {open && <span>{label}</span>}
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

  const MenuSection = ({
    title,
    items,
  }: {
    title: string;
    items: Array<{ icon: React.ReactNode; label: string; href: string }>;
  }) => (
    <div>
      <span
        className={`text-text-100 mb-3 flex text-xs ${
          open ? 'justify-start' : 'justify-center'
        }`}
      >
        {open ? (
          <span>{title}</span>
        ) : (
          <span onClick={() => setOpen(!open)}>
            <MenuMeatballs1 />
          </span>
        )}
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
      <aside className={`bg-background-50 p-5 ${open ? 'w-70' : 'w-22.5'}`}>
        <div className="flex h-full flex-col justify-between">
          <div className="flex-1">
            {/* Header */}
            <div className="mb-6">
              <div
                className={`flex items-center ${
                  open ? 'justify-between' : 'justify-center'
                }`}
              >
                <div className="flex items-center justify-center gap-3">
                  <div className="shrink-0">
                    <img
                      src="https://cdn-tailgrids.b-cdn.net/3.0/dashboard/sidebar/logo-3.svg"
                      className="h-10 w-10 rounded-full"
                      alt=""
                    />
                  </div>
                  <div className={open ? 'block' : 'hidden'}>
                    <h3 className="text-title-50 text-sm font-medium">
                      Nextjstemplates
                    </h3>
                    <p className="text-text-100 text-xs">200 Employee</p>
                  </div>
                </div>
                <div className={open ? 'block' : 'hidden'}>
                  <button
                    onClick={() => setOpen(!open)}
                    className="text-text-100 border-base-100 hover:text-text-50 inline-flex h-6 w-6 cursor-pointer items-center justify-center rounded-md border"
                  >
                    <Layout22 />
                  </button>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              {/* Main Menu */}
              <MenuSection title="Main menu" items={mainMenuItems} />

              {/* Secondary Menu */}
              <MenuSection title="Others" items={othersMenuItems} />
            </div>
          </div>
          <div className="mt-20">
            <ul className="mb-4 space-y-1">
              {bottomMenuItems.map((item, index) => (
                <MenuItem key={index} {...item} />
              ))}
            </ul>
            {/* Widget */}
            <div className="border-base-100 border-t py-5">
              <div className="flex items-center justify-center gap-3">
                <div className="shrink-0">
                  <img
                    src="https://cdn-tailgrids.b-cdn.net/3.0/dashboard/sidebar/avatar-3.png"
                    className="h-12 w-12 rounded-full"
                    alt=""
                  />
                </div>
                <div className={open ? 'block' : 'hidden'}>
                  <h3 className="text-title-50 text-base font-medium">
                    Kathryn Murphy
                  </h3>
                  <p className="text-text-100 text-sm">
                    murphy.mitc@example.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
      <div className="bg-background-50 h-auto w-full flex-1 py-5">
        <div className="border-base-100 flex h-full flex-col items-center justify-center rounded-lg border border-dashed text-center">
          Hello
        </div>
      </div>
    </div>
  );
};

export default Sidebar3;
