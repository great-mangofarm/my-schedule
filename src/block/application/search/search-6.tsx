import { Button } from '@/components/core/button';
import { Input } from '@/components/core/input';
import { Search1, Xmark2x } from '@tailgrids/icons';

const keyboardShortcuts = [
  {
    id: 1,
    label: 'Navigate',
    keys: ['↓', '↑'],
    labelPosition: 'before',
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
    keyWidth: 'w-10',
    labelPosition: 'after',
  },
];

import { Modal } from '@/components/core/modal';
import { useState } from 'react';

export default function Search6() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-background-50 flex min-h-screen items-center justify-center">
      <Button onClick={() => setIsOpen(true)}>Open Search 6</Button>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <div className="mx-auto max-w-[500px]">
          <div className="bg-background-soft-100 rounded-3xl p-3 pb-0">
            <div className="bg-background-50 border-base-100 flex h-12.5 items-center justify-between rounded-xl border py-2.5 pr-2.5 pl-5">
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
            <div className="flex flex-col items-center px-5 py-16 sm:pt-5 sm:pb-3">
              <span className="text-text-200 mb-2 inline-block text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="44"
                  height="44"
                  viewBox="0 0 44 44"
                  fill="none"
                  className="size-11"
                >
                  <path
                    d="M15.5833 15.5835V11.4585C15.5833 9.18032 13.7364 7.3335 11.4583 7.3335C9.18008 7.3335 7.33325 9.18032 7.33325 11.4585C7.33325 13.7367 9.18008 15.5835 11.4583 15.5835H15.5833ZM15.5833 15.5835H28.4166M15.5833 15.5835V28.4168M15.5833 28.4168H11.4583C9.18008 28.4168 7.33325 30.2637 7.33325 32.5418C7.33325 34.82 9.18008 36.6668 11.4583 36.6668C13.7364 36.6668 15.5833 34.82 15.5833 32.5418V28.4168ZM15.5833 28.4168H28.4166M28.4166 15.5835H32.5416C34.8198 15.5835 36.6666 13.7367 36.6666 11.4585C36.6666 9.18032 34.8198 7.3335 32.5416 7.3335C30.2634 7.3335 28.4166 9.18032 28.4166 11.4585V15.5835ZM28.4166 15.5835V28.4168M28.4166 28.4168H32.5416C34.8198 28.4168 36.6666 30.2637 36.6666 32.5418C36.6666 34.82 34.8198 36.6668 32.5416 36.6668C30.2634 36.6668 28.4166 34.82 28.4166 32.5418V28.4168Z"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <p className="text-text-200 text-sm">Start typing to search...</p>
            </div>
            <div className="hidden items-center justify-center gap-8 rounded-b-2xl px-5 py-3 text-center sm:flex">
              {keyboardShortcuts.map((shortcut) => (
                <div key={shortcut.id} className="flex items-center gap-1.5">
                  {shortcut.labelPosition === 'before' && (
                    <span className="text-text-100 text-xs">
                      {shortcut.label}
                    </span>
                  )}
                  {shortcut.keys?.map((key, index) => (
                    <kbd
                      key={index}
                      className={`inline-flex h-6 ${shortcut.keyWidth || 'w-6'} bg-background-50 text-text-100 items-center justify-center rounded-md py-1 font-medium ${shortcut.keyWidth ? 'px-2.5 text-xs' : ''}`}
                    >
                      {key}
                    </kbd>
                  ))}
                  {shortcut.icon && (
                    <kbd className="bg-background-50 text-text-100 inline-flex h-6 w-6 items-center justify-center rounded-md py-1 font-medium">
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
            <div className="border-base-100 hidden border-t px-5 py-4 text-center sm:block">
              <div className="text-text-100 text-sm">
                Press
                <kbd className="bg-background-50 text-text-100 mx-1 inline-flex h-6 items-center justify-center rounded-md px-2 py-1 font-medium">
                  Ctrl+K
                </kbd>
                to open search anytime
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
