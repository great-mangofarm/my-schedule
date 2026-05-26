import { Button } from '@/components/core/button';
import { Toggle } from '@/components/core/toggle';
import { useState } from 'react';

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.0094 15.0102C14.6579 15.3617 14.0882 15.3623 13.7367 15.0109L9.99919 11.2734L6.26167 15.0109C5.9102 15.3624 5.3398 15.3624 4.98833 15.0109C4.63686 14.6594 4.63686 14.089 4.98833 13.7376L8.72584 10L4.98833 6.26253C4.63686 5.91106 4.63686 5.34066 4.98833 4.98919C5.3398 4.63772 5.9102 4.63772 6.26167 4.98919L9.99919 8.7267L13.7367 4.98919C14.0882 4.63783 14.6579 4.63844 15.0094 4.98988C15.3608 5.34131 15.3614 5.91105 15.01 6.26253L11.2725 10L15.01 13.7376C15.3614 14.089 15.3608 14.6588 15.0094 15.0102Z"
      fill="currentColor"
    />
  </svg>
);

const MoonIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="13"
    height="13"
    viewBox="0 0 13 13"
    fill="none"
  >
    <path
      d="M4.29773 3.90114C4.29773 6.55275 6.44729 8.70231 9.0989 8.70231C10.3614 8.70231 11.5102 8.21498 12.3672 7.41817C11.7405 9.79633 9.57508 11.55 7.00007 11.55C3.93489 11.55 1.45007 9.06515 1.45007 5.99997C1.45007 3.42496 3.20371 1.25953 5.58187 0.632812C4.78506 1.48987 4.29773 2.63859 4.29773 3.90114Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SunIcon = () => (
  <svg
    width="14"
    height="13"
    viewBox="0 0 14 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.00007 0.949707V1.84971M10.9247 2.57627L10.2883 3.21267M12.5501 6.49971H11.6501M10.9247 10.4231L10.2883 9.78675M7.00007 11.1497V12.0497M3.71179 9.79033L3.0754 10.4267M2.35007 6.49971H1.45007M3.71179 3.20908L3.0754 2.57269M4.15007 6.49971C4.15007 8.07372 5.42606 9.34971 7.00007 9.34971C8.57409 9.34971 9.85007 8.07372 9.85007 6.49971C9.85007 4.9257 8.57409 3.64971 7.00007 3.64971C5.42606 3.64971 4.15007 4.9257 4.15007 6.49971Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Drawers2() {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="relative flex h-screen items-center justify-center">
      {/* Trigger Button */}
      <Button onClick={() => setOpen(true)}>Open Drawer</Button>

      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      />

      {/* Drawer */}
      <div
        className={`bg-background-soft-100 fixed top-2 right-2 bottom-2 z-50 flex w-90 transform flex-col rounded-2xl shadow-sm transition-transform duration-300 ease-in-out ${
          open ? 'translate-x-0' : 'translate-x-[calc(100%+20px)]'
        }`}
      >
        {/* <!-- Header --> */}
        <div className="border-base-50 flex items-center justify-between border-b p-5">
          <div>
            <h2 className="text-title-50 text-lg font-medium">Settings</h2>
            <p className="text-text-100 mt-1 text-sm">
              Control everything from one place
            </p>
          </div>
          <Button
            iconOnly
            variant="ghost"
            size="sm"
            onClick={() => setOpen(false)}
          >
            <CloseIcon />
          </Button>
        </div>

        {/* <!-- Content --> */}
        <div className="flex-1 space-y-5 overflow-y-auto px-5 py-5">
          {/* <!-- Appearance --> */}
          <div className="">
            <h3 className="text-text-100 mb-3 text-base">Appearance</h3>
            <div className="bg-background-50 flex items-start justify-between rounded-xl p-5">
              <div>
                <p className="text-title-50 text-base font-medium">Dark Mode</p>
                <p className="text-text-100 text-sm">Switch to dark theme</p>
              </div>

              <button
                onClick={() => setDarkMode(!darkMode)}
                className="bg-background-soft-200 relative inline-flex h-7 w-13 cursor-pointer items-center rounded-full p-0.5 transition-colors duration-300 focus:outline-none"
                aria-label="Toggle dark mode"
              >
                <span
                  className={`bg-background-50 absolute left-0.5 h-6 w-6 rounded-full shadow-sm transition-transform duration-300 ${
                    darkMode ? 'translate-x-6' : 'translate-x-0'
                  }`}
                />
                <span
                  className={`text-text-50 relative z-10 flex h-6 w-6 items-center justify-center transition-opacity duration-300 ${
                    darkMode ? 'opacity-0' : 'opacity-100'
                  }`}
                >
                  <MoonIcon />
                </span>
                <span
                  className={`text-text-50 relative z-10 flex h-6 w-6 items-center justify-center transition-opacity duration-300 ${
                    darkMode ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <SunIcon />
                </span>
              </button>
            </div>
          </div>

          {/* <!-- Account Info --> */}
          <div>
            <h3 className="text-text-100 mb-3 text-sm">Notifications</h3>
            <div className="space-y-3">
              {/* Push Notifications */}
              <div className="bg-background-50 flex items-start justify-between rounded-xl p-5">
                <div>
                  <p className="text-title-50 text-base font-medium">
                    Push Notifications
                  </p>
                  <p className="text-text-100 text-sm">
                    Receive push notifications
                  </p>
                </div>
                <Toggle size="md" />
              </div>
              {/* Email Notifications */}
              <div className="bg-background-50 flex items-start justify-between rounded-xl p-5">
                <div>
                  <p className="text-title-50 text-base font-medium">
                    Email Notifications
                  </p>
                  <p className="text-text-100 text-sm">Receive email updates</p>
                </div>
                <Toggle size="md" />
              </div>
            </div>
          </div>

          {/* <!-- Security Settings --> */}
          <div className="mb-6">
            <h3 className="text-text-100 mb-3 text-sm">Data & Privacy</h3>
            <div className="space-y-3">
              {/* Auto-save */}
              <div className="bg-background-50 flex items-start justify-between rounded-xl p-5">
                <div>
                  <p className="text-title-50 text-base font-medium">
                    Auto-save
                  </p>
                  <p className="text-text-100 text-sm">
                    Automatically save changes
                  </p>
                </div>
                <Toggle size="md" />
              </div>
              {/* Data Export */}
              <div className="bg-background-50 flex items-start justify-between rounded-xl p-5">
                <div>
                  <p className="text-title-50 text-base font-medium">
                    Data Export
                  </p>
                  <p className="text-text-100 text-sm">Download your data</p>
                </div>
                <div>
                  <Button variant="primary" appearance="outline" size="xs">
                    Export
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
