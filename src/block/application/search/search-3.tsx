import { Button } from '@/components/core/button';
import { Badge } from '@/components/core/badge';
import { Input } from '@/components/core/input';
import { Search1, Xmark2x } from '@tailgrids/icons';

const recentSearchTags = [
  { id: 1, text: 'Q3 revenue report' },
  { id: 2, text: 'Customer retention' },
  { id: 3, text: 'Marketing campaign' },
  { id: 4, text: 'Product inventory' },
  { id: 5, text: 'Sales by region' },
];

const suggestions = [
  { id: 1, text: 'Quarterly Report', avatars: null },
  {
    id: 2,
    text: 'Performance Analytics',
    avatars: [
      'https://cdn-tailgrids.b-cdn.net/3.0/application/search-modal/avatar-1.png',
      'https://cdn-tailgrids.b-cdn.net/3.0/application/search-modal/avatar-2.png',
      'https://cdn-tailgrids.b-cdn.net/3.0/application/search-modal/avatar-3.png',
    ],
    extraCount: 3,
  },
  { id: 3, text: 'Customer Segment', avatars: null },
];

import { Modal } from '@/components/core/modal';
import { useState } from 'react';

export default function Search3() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="bg-background-50 flex min-h-screen items-center justify-center">
      <Button onClick={() => setIsOpen(true)}>Open Search 3</Button>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <div className="mx-auto max-w-[500px]">
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
          <div className="bg-background-50 space-y-7 py-5">
            <div className="px-5">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-text-100 text-sm">Recent search</h3>
                <Button
                  variant="ghost"
                  size="xs"
                  className="text-primary-500 h-auto p-0 hover:bg-transparent"
                >
                  Clear All
                </Button>
              </div>
              <ul className="flex flex-wrap gap-2.5">
                {recentSearchTags.map((item) => (
                  <li key={item.id}>
                    <Badge
                      color="gray"
                      className="border-base-100 text-text-100 bg-background-soft-50 hover:bg-background-soft-100 inline-block cursor-pointer rounded-lg border px-3.5 py-1.5 text-xs leading-4"
                    >
                      {item.text}
                    </Badge>
                  </li>
                ))}
              </ul>
            </div>
            <div className="px-2">
              <h3 className="text-text-100 mb-4 px-3 text-sm">Suggestions</h3>
              <ul>
                {suggestions.map((item) => (
                  <li
                    key={item.id}
                    className={`text-title-50 hover:bg-background-soft-100 cursor-pointer rounded-lg px-3 py-2 text-sm ${item.avatars ? 'flex items-center justify-between' : ''}`}
                  >
                    <span>{item.text}</span>
                    {item.avatars && (
                      <div className="flex -space-x-1">
                        {item.avatars.map((avatar, index) => (
                          <img
                            key={index}
                            src={avatar}
                            className="h-6 w-6 rounded-full ring-1 ring-white"
                            alt=""
                          />
                        ))}
                        {item.extraCount && (
                          <div className="bg-primary-100 text-primary-500 inline-flex h-6 w-6 items-center justify-center rounded-full text-xs font-medium ring-1 ring-white">
                            +{item.extraCount}
                          </div>
                        )}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
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
