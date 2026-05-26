import { Button } from '@/components/core/button';
import {
  Book4,
  ChevronRight,
  Comment1Dots,
  Envelope1,
  InfoCircle,
  Search1,
  User2,
  Xmark2x,
} from '@tailgrids/icons';
import { useState } from 'react';

export default function Drawers4() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-background-soft-50 flex h-screen items-center justify-center px-4 py-10">
      <div className="relative">
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
          className={`bg-background-soft-100 fixed top-2 right-2 bottom-2 z-50 flex w-100 transform flex-col rounded-2xl shadow-sm transition-transform duration-300 ease-in-out ${
            open ? 'translate-x-0' : 'translate-x-[calc(100%+20px)]'
          }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-5">
            <div>
              <h2 className="text-title-50 text-lg font-medium">
                Help & Support
              </h2>
            </div>
            <Button
              variant="ghost"
              iconOnly
              size="sm"
              onClick={() => setOpen(false)}
            >
              <Xmark2x />
            </Button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto px-5">
            <div className="mb-8">
              <h3 className="text-text-100 mb-3 text-sm">Quick Help</h3>
              <div className="relative">
                <span className="text-text-100 pointer-events-none absolute top-1/2 left-3 -translate-y-1/2">
                  <Search1 />
                </span>
                <input
                  type="text"
                  placeholder="Search Documentation"
                  className="bg-background-50 placeholder:text-text-200 h-11 w-full rounded-lg border-0 py-2.5 pr-10 pl-10 shadow-sm placeholder:text-sm"
                />
              </div>
              <div className="bg-background-50 divide-base-50 mt-3 divide-y rounded-2xl">
                <a
                  href="javascript:void(0)"
                  className="hover:bg-background-soft-50 flex justify-between px-5 py-3 transition first:rounded-t-2xl last:rounded-b-2xl"
                >
                  <div className="flex items-center gap-2">
                    <User2 className="text-text-100 size-6" />
                    <p className="text-title-50 text-sm font-medium">
                      User Guide
                    </p>
                  </div>
                  <div>
                    <ChevronRight />
                  </div>
                </a>
                <a
                  href="javascript:void(0)"
                  className="hover:bg-background-soft-50 flex justify-between px-5 py-3 transition first:rounded-t-2xl last:rounded-b-2xl"
                >
                  <div className="flex items-center gap-2">
                    <InfoCircle className="text-text-100 size-6" />
                    <p className="text-title-50 text-sm font-medium">FAQ's</p>
                  </div>
                  <div>
                    <ChevronRight />
                  </div>
                </a>
                <a
                  href="javascript:void(0)"
                  className="hover:bg-background-soft-50 flex justify-between px-5 py-3 transition first:rounded-t-2xl last:rounded-b-2xl"
                >
                  <div className="flex items-center gap-2">
                    <Book4 className="text-text-100 size-6" />
                    <p className="text-title-50 text-sm font-medium">
                      Recent Articles
                    </p>
                  </div>
                  <div>
                    <ChevronRight />
                  </div>
                </a>
              </div>
            </div>
            <div className="mb-8">
              <h3 className="text-text-100 mb-3 text-sm">Contact Support</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-background-50 rounded-xl p-4 shadow-xs">
                  <Comment1Dots className="text-text-100 mb-5 size-6" />
                  <h4 className="text-title-50 font-medium">Live Chat</h4>
                  <p className="text-text-100 mb-4 text-sm">
                    Get instant help from our support team
                  </p>
                  <a
                    href="javascript:void(0)"
                    className="hover:bg-primary-500 text-text-100 bg-background-soft-100 hover:text-white-100 inline-flex size-10 items-center justify-center rounded-full transition-colors"
                  >
                    <ChevronRight />
                  </a>
                </div>
                <div className="bg-background-50 rounded-xl p-4 shadow-xs">
                  <Envelope1 className="text-text-100 mb-5 inline-block size-6" />
                  <h4 className="text-title-50 font-medium">Email Support</h4>
                  <p className="text-text-100 mb-4 text-sm">
                    Send us a detailed message
                  </p>
                  <a
                    href="javascript:void(0)"
                    className="hover:bg-primary-500 text-text-100 bg-background-soft-100 hover:text-white-100 inline-flex size-10 items-center justify-center rounded-full transition-colors"
                  >
                    <ChevronRight />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="p-3">
            <div className="bg-background-50 flex items-center justify-between rounded-xl px-4 py-3 shadow-sm">
              <div>
                <div className="flex items-center gap-3">
                  <div className="bg-success-500 ring-success-500/10 inline-block h-2.5 w-2.5 rounded-full ring-4" />
                  <p className="text-text-100 text-sm">System Status</p>
                </div>
                <div>
                  <h4 className="text-title-50 text-sm font-medium">
                    All systems operational
                  </h4>
                </div>
              </div>
              <div>
                <button className="text-text-100 hover:bg-background-soft-100 flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg bg-transparent">
                  <ChevronRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
