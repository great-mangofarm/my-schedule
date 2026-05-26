import { Button } from '@/components/core/button';
import { Input } from '@/components/core/input';
import { Search1 as SearchIcon, Xmark2x } from '@tailgrids/icons';

const recentSearches = [
  { id: 1, text: 'Dashboard UI' },
  { id: 2, text: 'TailGrids Components' },
  { id: 3, text: 'Analytics Report' },
];

const popularSearches = [
  { id: 1, text: 'Tailwind Components' },
  { id: 2, text: 'E-commerce Template' },
  { id: 3, text: 'Landing Page Templates' },
];

import { Modal } from '@/components/core/modal';
import { useState } from 'react';

export default function Search1() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="bg-background-50 flex min-h-screen items-center justify-center">
      <Button onClick={() => setIsOpen(true)}>Open Search 1</Button>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <div className="bg-background-soft-100 mx-auto w-full max-w-[500px] rounded-3xl p-2">
          <div className="space-y-2">
            <div className="bg-background-50 rounded-2xl p-4 sm:p-5">
              <div className="mb-5 flex items-center justify-between">
                <h2 className="text-title-50 text-base font-medium">
                  Search at Tailgrids
                </h2>
                <Button variant="ghost" iconOnly size="xs">
                  <Xmark2x className="size-5" />
                </Button>
              </div>
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search anything"
                  className="h-11 pl-11 text-base placeholder:text-base"
                />
                <span className="text-text-100 pointer-events-none absolute top-1/2 left-4 -translate-y-1/2">
                  <SearchIcon className="size-5" />
                </span>
              </div>
            </div>
            <div>
              <div className="bg-background-50 rounded-t-2xl px-3 py-5">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-title-50 mb-3 px-3 text-sm font-medium">
                      Recent searches
                    </h3>
                    <ul>
                      {recentSearches.map((item) => (
                        <li
                          key={item.id}
                          className="hover:bg-background-soft-50 text-text-50 cursor-pointer rounded-lg bg-transparent px-3 py-2 text-sm"
                        >
                          {item.text}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-title-50 mb-3 px-3 text-sm font-medium">
                      Popular searches
                    </h3>
                    <ul>
                      {popularSearches.map((item) => (
                        <li
                          key={item.id}
                          className="hover:bg-background-soft-50 text-text-50 cursor-pointer rounded-lg bg-transparent px-3 py-2 text-sm"
                        >
                          {item.text}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="border-base-50 bg-background-soft-50 rounded-b-2xl border-t px-5 py-2.5 text-center">
                <p className="text-text-100 text-xs">
                  Press
                  <kbd className="bg-background-soft-100 text-text-50 mx-1 inline-flex h-6 w-10 items-center justify-center rounded-md px-2.5 py-1 font-medium">
                    esc
                  </kbd>
                  to close
                </p>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
