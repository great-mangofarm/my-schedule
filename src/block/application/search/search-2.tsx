import { Button } from '@/components/core/button';
import { Input } from '@/components/core/input';
import { Search1, Xmark2x, ClockThree, BarChart2 } from '@tailgrids/icons';

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

export default function Search2() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-background-50 flex min-h-screen items-center justify-center">
      <Button onClick={() => setIsOpen(true)}>Open Search 2</Button>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <div className="mx-auto w-full max-w-[500px]">
          <div className="bg-background-50 border-base-100 flex items-center rounded-t-2xl border-b px-5 py-4">
            <div className="relative flex grow items-center">
              <span className="text-text-200 mr-2.5">
                <Search1 className="size-5" />
              </span>
              <Input
                type="text"
                className="placeholder:text-text-200 w-full rounded-md border-0 bg-transparent p-0 focus:ring-0"
                placeholder="Search anything"
              />
            </div>
            <Button variant="ghost" iconOnly size="xs">
              <Xmark2x className="size-5" />
            </Button>
          </div>
          <div className="bg-background-50 max-h-116 overflow-y-auto p-5">
            <div className="space-y-6">
              <div>
                <h3 className="text-text-100 mb-3 flex items-center gap-2.5 px-3 text-sm font-medium">
                  <ClockThree className="size-5" />
                  <span className="italic">Recent searches</span>
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
                <h3 className="text-text-100 mb-3 flex items-center gap-2.5 px-3 text-sm font-medium">
                  <BarChart2 className="size-5" />
                  <span className="italic">Popular searches</span>
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
      </Modal>
    </div>
  );
}
