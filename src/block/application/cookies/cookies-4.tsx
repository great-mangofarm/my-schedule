import { useState } from 'react';
import { Button } from '@/components/core/button';
import { Cookies } from '@tailgrids/icons';

export default function Cookies4() {
  const [show, setShow] = useState(true);

  const handleAccept = () => {
    setShow(false);
  };

  const handleReject = () => {
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="bg-background-soft-50 flex h-screen items-center justify-center">
      <div className="bg-background-50 mx-auto max-w-[830px] rounded-xl shadow-md">
        <div className="px-5 py-4">
          <div className="flex items-center justify-between gap-7">
            <div className="flex flex-col items-center gap-6 sm:flex-row">
              <span className="bg-primary-500/10 inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-xl">
                <Cookies className="text-primary-500 size-12" />
              </span>
              <p className="text-text-50 flex-1 text-center text-base font-normal lg:text-start">
                We use cookies to enhance your browsing experience. Allow or
                decline as per your preference
              </p>
            </div>
            <div className="hidden items-center gap-3 lg:flex">
              <Button
                variant="ghost"
                appearance="outline"
                onClick={handleReject}
              >
                Reject
              </Button>
              <Button
                variant="primary"
                appearance="fill"
                onClick={handleAccept}
              >
                Accept
              </Button>
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
              onClick={handleReject}
            >
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
