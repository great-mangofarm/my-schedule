import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/core/button';
import { Badge } from '@/components/core/badge';
import { Input } from '@/components/core/input';
import { Search1, Xmark2x } from '@tailgrids/icons';
import { Link } from '@/components/core/link';

const tabs = [
  { id: 1, label: 'All' },
  { id: 2, label: 'Dashboard' },
  { id: 3, label: 'Report' },
  { id: 4, label: 'Users' },
  { id: 5, label: 'Metrics' },
];

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

const keyboardShortcuts = [
  {
    id: 1,
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
  },
  {
    id: 2,
    label: 'Close',
    key: 'esc',
    keyWidth: 'w-10',
  },
];

import { Modal } from '@/components/core/modal';

export default function Search5() {
  const [activeTab, setActiveTab] = useState('All');
  const [isOpen, setIsOpen] = useState(true);

  const getTabClasses = (isActive: boolean) =>
    isActive
      ? 'relative cursor-pointer rounded-md px-3 py-2.5 text-sm font-medium text-title-50'
      : 'relative cursor-pointer rounded-md bg-transparent px-3 py-2.5 text-sm font-medium text-title-50 hover:bg-background-50';
  return (
    <div className="bg-background-50 flex min-h-screen items-center justify-center">
      <Button onClick={() => setIsOpen(true)}>Open Search 5</Button>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <div className="mx-auto max-w-[500px]">
          <div className="bg-background-50 rounded-3xl p-3">
            {/* <!-- Input --> */}
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
            {/* <!-- Tab --> */}
            <nav className="bg-background-soft-100 mt-3 overscroll-x-auto rounded-lg p-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={getTabClasses(activeTab === tab.label)}
                  onClick={() => setActiveTab(tab.label)}
                >
                  {activeTab === tab.label && (
                    <motion.div
                      layoutId="activeTab"
                      className="bg-background-50 absolute inset-0 rounded-md shadow-xs"
                      transition={{
                        type: 'spring',
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </button>
              ))}
            </nav>

            {/* <!-- Info --> */}
            <div className="px-5 pt-6 pb-7">
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
            <div className="px-2 pb-7">
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
            <div className="border-base-50 rounded-b-2xl border-t px-4 pt-5 pb-2.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {keyboardShortcuts.map((shortcut) => (
                    <div
                      key={shortcut.id}
                      className="flex items-center gap-1.5"
                    >
                      {shortcut.icon && (
                        <kbd className="text-text-100 bg-background-soft-100 inline-flex h-6 w-6 items-center justify-center rounded-md py-1 font-medium">
                          {shortcut.icon}
                        </kbd>
                      )}
                      {shortcut.key && (
                        <kbd
                          className={`inline-flex h-6 ${shortcut.keyWidth || 'w-6'} text-text-100 bg-background-soft-100 items-center justify-center rounded-md px-2.5 py-1 text-xs font-medium`}
                        >
                          {shortcut.key}
                        </kbd>
                      )}
                      <span className="text-text-100 text-xs">
                        {shortcut.label}
                      </span>
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-text-100 text-xs">
                    Powered by{' '}
                    <Link
                      href="javascript:void(0)"
                      className="text-primary-500"
                    >
                      Tailgrids
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
