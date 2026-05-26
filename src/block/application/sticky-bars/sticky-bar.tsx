import { ChevronRight, Xmark2x } from '@tailgrids/icons';
import { useState } from 'react';

export default function StickyBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-background-50 min-h-screen px-4 py-10">
      {/* Desktop Sticky Bar */}
      <div className="bg-background-soft-200 relative mx-auto max-w-7xl rounded-lg px-4 py-3">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-2.5 sm:flex-row">
          <p className="text-title-50 text-center text-sm font-medium">
            We just raised our biggest updates – Tailgrids V3.0 🎉
          </p>
          <a
            href="javascript:void(0)"
            className="bg-background-50 text-title-50 border-base-100 inline-flex h-6 items-center gap-1 rounded-full border-2 py-1 pr-2 pl-2.5 text-xs font-medium shadow-md hover:underline"
          >
            Check it out
            <ChevronRight className="h-4 w-4" />
          </a>
          <button
            onClick={() => setIsVisible(false)}
            className="hover:text-title-50 hover:bg-background-soft-300 text-text-100 absolute top-2 right-2 rounded p-1 transition-colors"
            aria-label="Close banner"
          >
            <Xmark2x className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
