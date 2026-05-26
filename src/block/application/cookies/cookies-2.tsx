import { useState } from 'react';
import { Button } from '@/components/core/button';
import { Xmark2x } from '@tailgrids/icons';

export default function Cookies2() {
  const [show, setShow] = useState(true);

  const handleAccept = () => {
    setShow(false);
  };

  const handleCancel = () => {
    setShow(false);
  };

  const handleClose = () => {
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="bg-background-soft-50 flex h-screen items-center justify-center p-5">
      <div className="mx-auto max-w-[830px]">
        <div className="bg-background-50 rounded-xl px-5 py-4 shadow-md">
          <div className="flex items-start justify-between gap-7">
            <p className="text-text-50 flex-1 text-center text-base font-normal lg:text-start">
              We use cookies to improve functionality and personalize your
              experience. You can manage your settings anytime. Read Our cookies
              policy
              <a href="javascript:void(0)" className="text-primary-500">
                {' '}
                Cookies Policy{' '}
              </a>
            </p>

            <div className="hidden items-center gap-3 lg:flex">
              <Button
                variant="primary"
                appearance="fill"
                onClick={handleAccept}
              >
                Okay
              </Button>
              <button
                onClick={handleClose}
                className="hover:text-title-50 text-text-100 hover:bg-background-soft-100 hidden h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-md bg-transparent sm:inline-flex"
              >
                <Xmark2x className="size-5" />
              </button>
            </div>
          </div>
          <div className="mt-7 block space-y-3 lg:hidden">
            <Button
              variant="primary"
              appearance="fill"
              className="w-full"
              onClick={handleAccept}
            >
              Okay
            </Button>
            <Button
              variant="ghost"
              appearance="outline"
              className="w-full"
              onClick={handleCancel}
            >
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
