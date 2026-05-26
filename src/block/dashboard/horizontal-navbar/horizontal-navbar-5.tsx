import {
  Bell1,
  ChevronDown,
  MenuHamburger1,
  MoonHalfLeft5,
  Search1,
  Sun1,
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

export default function HorizontalNavbar5() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(false);

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
              <h2 className="text-title-50 text-base font-normal">
                Welcome, back!
              </h2>
              <p className="text-text-100 text-sm">
                Your personal dashboard overview
              </p>
            </div>

            {/* <!-- Mobile Toggle Button --> */}
            <div className="sm:hidden">
              <button
                onClick={() => setOpen(!open)}
                className="bg-background-soft-100 text-text-50 inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg"
              >
                {/* <!-- Menu Icon --> */}
                {!open && <MenuHamburger1 className="size-5" />}

                {/* <!-- Close Icon --> */}
                {open && <Xmark2x className="size-5" />}
              </button>
            </div>
          </div>

          {/* <!-- Right Section (Search, Notification, Profile) --> */}
          <div
            className={`bg-background-50 border-base-50 absolute top-full left-0 w-full items-center gap-3 border-t px-6 py-4 sm:static sm:w-auto sm:border-0 sm:p-0 ${
              open ? 'flex' : 'hidden sm:flex'
            }`}
          >
            {/* <!-- Theme --> */}
            <div>
              <button
                onClick={() => setActive(!active)}
                className="text-text-50 bg-background-soft-100 relative inline-flex h-11.5 cursor-pointer items-center justify-center gap-2 rounded-full p-1"
              >
                {/* Sliding Background */}
                <span
                  className={`bg-background-50 absolute left-1 h-9.5 w-9.5 rounded-full shadow-sm transition-all duration-300 ${
                    active ? 'translate-x-0' : 'translate-x-[calc(100%+8px)]'
                  }`}
                />

                {/* <!-- Active Icon (Sun) -->   */}
                <div
                  className={`relative z-10 inline-flex h-9.5 w-9.5 items-center justify-center rounded-full transition-colors duration-300`}
                >
                  <Sun1 className="size-5" />
                </div>

                {/* <!-- Inactive Icon (Moon) --> */}
                <div
                  className={`relative z-10 inline-flex h-9.5 w-9.5 items-center justify-center rounded-full transition-colors duration-300`}
                >
                  <MoonHalfLeft5 className="size-5" />
                </div>
              </button>
            </div>

            {/* <!-- Message --> */}
            <div>
              <button className="text-text-100 bg-background-soft-100 relative inline-flex h-12 w-12 cursor-pointer items-center justify-center rounded-full">
                <Search1 className="size-6" />
              </button>
            </div>

            {/* <!-- Notification --> */}
            <div>
              <button className="text-text-100 bg-background-soft-100 relative inline-flex h-12 w-12 cursor-pointer items-center justify-center rounded-full">
                <span className="relative">
                  <Bell1 className="size-6" />
                  <span className="ring-background-50 bg-error-500 absolute top-0 -right-0.5 h-2 w-2 rounded-full ring-2"></span>
                </span>
              </button>
            </div>

            {/* <!-- Profile --> */}
            <div className="ml-auto">
              <DropdownMenu>
                <DropdownMenuTrigger className="text-text-50 group flex cursor-pointer items-center gap-3 text-sm font-medium">
                  <img
                    src="https://cdn-tailgrids.b-cdn.net/3.0/dashboard/horizontal-navbar/navbar-04/avatar.png"
                    className="h-12 w-12 rounded-full"
                    alt=""
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
}
