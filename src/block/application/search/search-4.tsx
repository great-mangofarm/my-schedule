import { Button } from '@/components/core/button';
import { Input } from '@/components/core/input';
import { Search1, Xmark2x } from '@tailgrids/icons';

const recentSearches = [
  { id: 1, text: 'Image Generator', showReturnIcon: false },
  { id: 2, text: 'Chatbot UI', showReturnIcon: true },
  { id: 3, text: 'Text Summarizer', showReturnIcon: false },
];

const popularSearches = [
  { id: 1, text: 'Prompt Templates' },
  { id: 2, text: 'AI Dashboards' },
  { id: 3, text: 'Voice-to-Text' },
];

const keyboardShortcuts = [
  {
    id: 1,
    label: 'Navigate',
    keys: ['↓', '↑'],
  },
  {
    id: 2,
    label: 'Enter',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        className="size-3"
      >
        <path
          d="M1.625 6.89371L9.625 6.89371C10.0392 6.89371 10.375 6.55793 10.375 6.14371V2.30908M1.625 6.89371L4.42078 9.69127M1.625 6.89371L4.42078 4.09598"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    labelPosition: 'after',
  },
  {
    id: 3,
    label: 'Close',
    keys: ['esc'],
    labelPosition: 'after',
    keyWidth: 'w-10',
  },
];

import { Modal } from '@/components/core/modal';
import { useState } from 'react';

export default function Search4() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="bg-background-50 flex min-h-screen items-center justify-center">
      <Button onClick={() => setIsOpen(true)}>Open Search 4</Button>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <div className="mx-auto w-full max-w-[500px]">
          <div className="bg-background-50 rounded-3xl p-3">
            <div className="border-base-100 bg-background-soft-50 flex h-12.5 items-center justify-between rounded-xl border py-2.5 pr-2.5 pl-5">
              <div className="relative flex grow items-center gap-3">
                <span className="text-text-200 pointer-events-none">
                  <Search1 className="size-5" />
                </span>
                <Input
                  type="text"
                  placeholder="Search AI models, prompts, or tools..."
                  className="placeholder:text-text-200 w-full border-0 bg-transparent p-0 focus:border-0 focus:ring-0"
                />
              </div>
              <div>
                <Button variant="ghost" iconOnly size="xs">
                  <Xmark2x className="size-5" />
                </Button>
              </div>
            </div>
            <div className="divide-base-50 divide-y">
              <div className="py-5">
                <h3 className="text-text-100 mb-4 px-3 text-sm">
                  Recent Search
                </h3>
                <ul>
                  {recentSearches.map((item) => (
                    <li
                      key={item.id}
                      className={`text-title-50 hover:bg-background-soft-100 cursor-pointer rounded-lg px-3 py-2 text-sm ${item.showReturnIcon ? 'group flex items-center justify-between' : ''}`}
                    >
                      {item.text}
                      {item.showReturnIcon && (
                        <span className="text-text-200 invisible group-hover:visible">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            className="size-4"
                          >
                            <path
                              d="M2.16699 9.19145L12.8337 9.19145C13.3859 9.19145 13.8337 8.74374 13.8337 8.19146V3.07861M2.16699 9.19145L5.8947 12.9215M2.16699 9.19145L5.8947 5.46115"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="py-5">
                <h3 className="text-text-100 mb-4 px-3 text-sm">
                  Popular Searches
                </h3>
                <ul>
                  {popularSearches.map((item) => (
                    <li
                      key={item.id}
                      className="text-title-50 hover:bg-background-soft-100 cursor-pointer rounded-lg px-3 py-2 text-sm"
                    >
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="border-base-50 flex items-center justify-center gap-8 rounded-b-2xl border-t px-5 pt-5 pb-2 text-center">
              {keyboardShortcuts.map((shortcut) => (
                <div key={shortcut.id} className="flex items-center gap-1.5">
                  {shortcut.labelPosition !== 'after' && (
                    <span className="text-text-100 text-xs">
                      {shortcut.label}
                    </span>
                  )}
                  {shortcut.keys?.map((key, index) => (
                    <kbd
                      key={index}
                      className={`inline-flex h-6 ${shortcut.keyWidth || 'w-6'} text-text-100 bg-background-soft-100 items-center justify-center rounded-md py-1 font-medium ${shortcut.keyWidth ? 'px-2.5 text-xs' : ''}`}
                    >
                      {key}
                    </kbd>
                  ))}
                  {shortcut.icon && (
                    <kbd className="text-text-100 bg-background-soft-100 inline-flex h-6 w-6 items-center justify-center rounded-md py-1 font-medium">
                      {shortcut.icon}
                    </kbd>
                  )}
                  {shortcut.labelPosition === 'after' && (
                    <span className="text-text-100 text-xs">
                      {shortcut.label}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
