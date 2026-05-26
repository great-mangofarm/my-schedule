import {
  Bell1,
  ChevronDown,
  Envelope1,
  MenuHamburger1,
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

export default function HorizontalNavbar3() {
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
                Welcome, Karlin 👋
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
              <button className="text-text-100 border-base-100 relative inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border">
                <Sun1 className="size-5" />
              </button>
            </div>

            {/* <!-- Notification --> */}
            <div>
              <button className="text-text-100 border-base-100 relative inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border">
                <Bell1 className="size-5" />
                <span className="ring-background-50 bg-error-500 absolute top-0.5 right-0 h-2 w-2 rounded-full ring"></span>
              </button>
            </div>

            {/* <!-- Message --> */}
            <div>
              <button className="text-text-100 border-base-100 relative inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border">
                <Envelope1 className="size-5" />
              </button>
            </div>

            {/* <!-- Profile --> */}
            <div className="ml-auto">
              <DropdownMenu>
                <DropdownMenuTrigger className="border-base-100 text-text-50 group flex h-11 cursor-pointer items-center gap-2.5 rounded-full border pr-3 text-sm font-medium">
                  <img
                    src="https://cdn-tailgrids.b-cdn.net/3.0/dashboard/horizontal-navbar/navbar-03/avatar.png"
                    alt=""
                    className="h-11 w-11 rounded-full"
                  />
                  <ChevronDown className="text-text-100 size-4.5 transition-transform duration-200 group-aria-expanded:rotate-180 lg:block" />
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
