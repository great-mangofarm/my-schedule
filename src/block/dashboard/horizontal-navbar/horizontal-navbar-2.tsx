import { Input } from '@/components/core/input';
import {
  Bell1,
  ChevronDown,
  MenuHamburger1,
  Search1,
  Xmark2x,
} from '@tailgrids/icons';
import { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from '@/components/core/dropdown';

const HorizontalNavTwo = () => {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { label: 'User Profile', href: 'javascript:void(0)' },
    { label: 'Account Settings', href: 'javascript:void(0)' },
    { label: 'Keyboard Shortcuts', href: 'javascript:void(0)', shortcut: '⌘K' },
    { label: 'Support', href: 'javascript:void(0)' },
    { separator: true },
    { label: 'Sign Out', href: 'javascript:void(0)' },
  ];

  return (
    <nav>
      <div className="bg-background-50 border-base-50 relative mx-auto max-w-7xl border-b px-6 py-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          {/* <!-- Left Section (Welcome + Toggle Button) --> */}
          <div className="flex items-center justify-between gap-4">
            <div className="grow">
              <h2 className="text-title-50 text-base font-medium">
                Welcome, Devin 👋
              </h2>
              <p className="text-text-100 text-sm">
                Your personal dashboard overview
              </p>
            </div>

            {/* Mobile Toggle Button */}
            <div className="sm:hidden">
              <button
                onClick={() => setOpen(!open)}
                className="bg-background-soft-100 text-text-50 inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg"
              >
                {/* Menu Icon */}
                {!open && <MenuHamburger1 className="size-5" />}

                {/* Close Icon */}
                {open && <Xmark2x className="size-5" />}
              </button>
            </div>
          </div>

          {/* <!-- Right Section (Search, Notification, Profile) --> */}
          <div
            className={`bg-background-50 absolute top-full left-0 w-full items-center gap-3 px-6 py-4 sm:static sm:w-auto sm:p-0 ${
              open ? 'flex' : 'hidden sm:flex'
            }`}
          >
            {/* <!-- Search --> */}
            <div className="relative w-full sm:block sm:w-auto">
              <Input
                type="text"
                className="border-base-100 h-11 w-full rounded-full border px-12 lg:w-[286px]"
                placeholder="Search..."
              />
              <span className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2">
                <Search1 className="text-text-100 size-5" />
              </span>
            </div>

            {/* <!-- Notification --> */}
            <div>
              <button className="text-text-100 border-base-100 relative inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border">
                <Bell1 className="size-5" />
                <span className="ring-background-50 bg-error-500 absolute top-0.5 right-0 h-2 w-2 rounded-full ring"></span>
              </button>
            </div>

            {/* <!-- Profile --> */}
            <div className="ml-1">
              <DropdownMenu>
                <DropdownMenuTrigger className="text-text-50 group flex cursor-pointer items-center gap-3 text-sm font-medium">
                  <img
                    src="https://cdn-tailgrids.b-cdn.net/3.0/dashboard/horizontal-navbar/navbar-02/avatar.png"
                    alt=""
                    className="h-11 w-11 shrink-0 rounded-full"
                  />
                  <span className="hidden lg:block"> Jerome B.</span>
                  <ChevronDown className="text-text-100 hidden size-5 transition-transform duration-200 group-aria-expanded:rotate-180 lg:block" />
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  placement="bottom end"
                  className="bg-background-50 mt-2 min-w-[240px] rounded-xl p-2 shadow-md"
                >
                  {menuItems.map((item, index) =>
                    item.separator ? (
                      <DropdownMenuSeparator
                        key={index}
                        className="-mx-2 my-1"
                      />
                    ) : (
                      <DropdownMenuItem
                        key={index}
                        className="text-text-100 hover:bg-background-soft-100 hover:text-title-50 flex w-full cursor-pointer items-center justify-between rounded-md px-3 py-2.5 text-sm"
                      >
                        {item.label}
                        {item.shortcut && (
                          <span className="text-text-200 text-xs">
                            {item.shortcut}
                          </span>
                        )}
                      </DropdownMenuItem>
                    ),
                  )}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HorizontalNavTwo;
