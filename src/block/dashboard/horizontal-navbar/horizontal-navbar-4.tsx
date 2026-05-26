import { Input } from '@/components/core/input';
import {
  Bell1,
  ChevronDown,
  MenuFriesLeft1,
  MenuHamburger1,
  Message1,
  Search1,
  User2,
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

export default function HorizontalNavbar4() {
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
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          {/* <!-- Left Section (Welcome + Toggle Button) --> */}
          <div className="flex items-center justify-between gap-4">
            <div className="flex grow items-center gap-4">
              <button className="text-text-100 border-base-100 inline-flex h-11 w-11 items-center justify-center rounded-lg border">
                <MenuFriesLeft1 className="size-5" />
              </button>
              <h2 className="text-title-50 text-base font-medium">
                Welcome, back!
              </h2>
            </div>

            {/* <!-- Mobile Toggle Button --> */}
            <div className="lg:hidden">
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
            className={`bg-background-50 border-base-50 absolute top-full left-0 w-full items-center justify-between gap-3 border-t px-6 py-4 lg:static lg:w-auto lg:border-0 lg:p-0 ${
              open ? 'flex' : 'hidden lg:flex'
            }`}
          >
            {/* <!-- Search  --> */}
            <div className="relative sm:block">
              <Input
                type="text"
                className="border-base-100 h-11 w-full rounded-lg border pr-4 pl-12 sm:w-[350px] sm:px-12"
                placeholder="Search or type command..."
              />
              <span className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2">
                <Search1 className="text-text-100 size-5" />
              </span>

              <span className="text-text-100 bg-background-50 border-base-100 absolute top-1/2 right-3 hidden -translate-y-1/2 items-center gap-0.5 rounded-lg border px-2 py-1 text-xs -tracking-[0.2px] sm:inline-flex">
                <span> ⌘ </span>
                <span> K </span>
              </span>
            </div>

            <div className="flex gap-3">
              {/* <!-- Notification --> */}
              <div>
                <button className="text-text-100 border-base-100 relative inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-lg border">
                  <span className="relative">
                    <Bell1 className="size-5" />
                    <span className="ring-background-50 bg-error-500 absolute top-0 -right-0.5 h-2 w-2 rounded-full ring-2"></span>
                  </span>
                </button>
              </div>

              {/* <!-- Message --> */}
              <div>
                <button className="text-text-100 border-base-100 relative inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-lg border">
                  <Message1 className="size-5" />
                </button>
              </div>
              {/* <!-- Message --> */}
              <div className="block lg:hidden">
                <button className="text-text-100 border-base-100 relative inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-lg border">
                  <User2 className="size-5" />
                </button>
              </div>

              {/* <!-- Profile --> */}
              <div className="ml-auto hidden lg:block">
                <DropdownMenu>
                  <DropdownMenuTrigger className="text-title-50 border-base-100 group flex h-11 cursor-pointer items-center gap-2.5 rounded-lg border px-4 py-2.5 text-sm font-medium">
                    Account
                    <ChevronDown className="size-5 transition-transform duration-200 group-aria-expanded:rotate-180 lg:block" />
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
      </div>
    </nav>
  );
}
