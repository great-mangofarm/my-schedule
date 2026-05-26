import { useState } from 'react';
import { Button } from '@/components/core/button';
import { Xmark2x } from '@tailgrids/icons';

export default function Cookies3() {
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
  };

  const handleAcceptCookies = () => {
    setShow(false);
  };

  const handleManagePreferences = () => {
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="bg-background-soft-50 flex h-screen items-center justify-center">
      <div className="bg-background-50 mx-auto max-w-[870px] rounded-xl shadow-md">
        <div className="px-5 py-4">
          <div className="mb-5 flex items-start justify-between gap-7">
            <h3 className="text-title-50 text-xl font-semibold">
              Cookies Settings
            </h3>

            <button
              onClick={handleClose}
              className="hover:text-title-50 text-text-100 hover:bg-background-soft-100 inline-flex size-8 shrink-0 cursor-pointer items-center justify-center rounded-md bg-transparent"
            >
              <Xmark2x className="size-5" />
            </button>
          </div>
          <p className="text-text-50 flex-1 text-start text-base font-normal">
            We use cookies to improve functionality and personalize your
            experience. You can manage your settings anytime. Read Our cookies
            policy
            <a href="javascript:void(0)" className="text-primary-500">
              {' '}
              Cookies Policy{' '}
            </a>
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:max-w-sm sm:flex-row">
            <Button
              variant="primary"
              appearance="fill"
              className="w-full"
              onClick={handleAcceptCookies}
            >
              Accept Cookies
            </Button>
            <Button
              variant="ghost"
              appearance="outline"
              className="w-full"
              onClick={handleManagePreferences}
            >
              Manage Preferences
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
