import { Input } from '@/components/core/input';
import {
  Bell1,
  ChevronDown,
  MenuFriesLeft1,
  MoonHalfLeft5,
  Search1,
} from '@tailgrids/icons';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from '@/components/core/dropdown';

export default function HorizontalNavbar1() {
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
      <div className="bg-background-50 border-base-50 mx-auto max-w-7xl border-b px-6 py-4">
        <div className="flex justify-between">
          <div className="flex gap-4">
            <button className="text-text-100 border-base-100 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border">
              <MenuFriesLeft1 className="size-5" />
            </button>
            <div className="relative hidden lg:block">
              <Input
                type="text"
                className="border-base-100 h-11 rounded-lg border px-12 lg:w-[430px]"
                placeholder="Search or type command..."
              />
              <span className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2">
                <Search1 className="text-text-100" />
              </span>

              <span className="text-text-100 bg-background-50 border-base-100 absolute top-1/2 right-3 inline-flex -translate-y-1/2 items-center gap-0.5 rounded-lg border px-2 py-1 text-xs -tracking-[0.2px]">
                <span> ⌘ </span>
                <span> K </span>
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="block lg:hidden">
              <button className="text-text-100 border-base-100 inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border">
                <Search1 className="size-5" />
              </button>
            </div>
            <div>
              <button className="text-text-100 border-base-100 inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border">
                <MoonHalfLeft5 className="size-5" />
              </button>
            </div>
            <div>
              <button className="text-text-100 border-base-100 relative inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border">
                <Bell1 className="size-5" />
                <span className="border-base-100 ring-background-50 bg-error-500 absolute top-0.5 right-0 z-1 flex h-2 w-2 rounded-full ring">
                  <span className="bg-error-500 absolute -z-1 inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
                </span>
              </button>
            </div>
            <div className="relative ml-1">
              <DropdownMenu>
                <DropdownMenuTrigger className="text-text-50 group flex items-center gap-3 text-sm font-medium">
                  <img
                    src="https://cdn-tailgrids.b-cdn.net/3.0/dashboard/horizontal-navbar/navbar-01/avatar.png"
                    alt="avatar"
                    className="h-11 w-11 rounded-full object-cover"
                  />
                  <span className="hidden lg:block"> Emirhan Boruch</span>
                  <ChevronDown className="text-text-100 size-5 transition-transform duration-200 group-aria-expanded:rotate-180" />
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
