import { useState } from 'react';
import { Xmark2x } from '@tailgrids/icons';

export default function Cookies1() {
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="bg-background-soft-50 flex h-screen items-center justify-center p-5">
      <div className="mx-auto max-w-2xl">
        <div className="bg-background-50 rounded-xl px-5 py-4 shadow-md">
          <div className="flex items-start justify-between gap-7">
            <p className="text-text-50 flex-1 text-base font-normal">
              To Continue website uses cookies to ensure you get the best
              experience
              <a href="javascript:void(0)" className="underline">
                {' '}
                Cookies Policy{' '}
              </a>
            </p>
            <button
              onClick={handleClose}
              className="hover:text-title-50 text-text-100 hover:bg-background-soft-100 inline-flex size-8 cursor-pointer items-center justify-center rounded-md bg-transparent"
            >
              <Xmark2x className="size-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
