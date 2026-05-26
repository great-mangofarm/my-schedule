import { Button } from '@/components/core/button';
import { Input } from '@/components/core/input';
import { TextArea } from '@/components/core/text-area';
import { Toggle } from '@/components/core/toggle';
import { InfoCircle, Shield1Check, Xmark2x } from '@tailgrids/icons';
import { useState } from 'react';

const UserPlaceholderIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="64"
    height="64"
    viewBox="0 0 64 64"
    fill="none"
  >
    <g clipPath="url(#clip0_11322_5085)">
      <path
        d="M0 32C0 14.3269 14.3269 0 32 0C49.6731 0 64 14.3269 64 32C64 49.6731 49.6731 64 32 64C14.3269 64 0 49.6731 0 32Z"
        fill="#F3F4F6"
      />
      <path
        d="M38.3691 43.9873C50.485 43.9873 60.3074 53.809 60.3076 65.9248C60.3076 66.63 59.7354 67.2021 59.0303 67.2021H5.27637C4.57141 67.2019 4 66.6298 4 65.9248C4.00024 53.8092 13.8219 43.9875 25.9375 43.9873H38.3691ZM32.1514 10C39.6034 10.0001 45.6443 16.0412 45.6445 23.4932C45.6445 30.9453 39.6035 36.9872 32.1514 36.9873C24.6991 36.9873 18.6582 30.9454 18.6582 23.4932C18.6584 16.0411 24.6993 10 32.1514 10Z"
        fill="#9CA3AF"
      />
    </g>
    <defs>
      <clipPath id="clip0_11322_5085">
        <path
          d="M0 32C0 14.3269 14.3269 0 32 0C49.6731 0 64 14.3269 64 32C64 49.6731 49.6731 64 32 64C14.3269 64 0 49.6731 0 32Z"
          fill="white"
        />
      </clipPath>
    </defs>
  </svg>
);

export default function Drawers1() {
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
          className={`bg-background-50 fixed top-2 right-2 bottom-2 z-50 flex w-90 transform flex-col rounded-2xl shadow-sm transition-transform duration-300 ease-in-out ${
            open ? 'translate-x-0' : 'translate-x-[calc(100%+20px)]'
          }`}
        >
          {/* <!-- Header --> */}
          <div className="border-base-50 flex items-center justify-between border-b p-5">
            <div>
              <h2 className="text-title-50 text-lg font-medium">Profile</h2>
              <p className="text-text-100 mt-1 text-sm">
                Update your profile information
              </p>
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

          {/* <!-- Content --> */}
          <div className="flex-1 overflow-y-auto px-5 py-6">
            {/* Profile Image Upload */}
            <div className="mb-6">
              <div className="border-base-100 flex items-center justify-between rounded-xl border p-4">
                <div className="flex items-start gap-4">
                  <div className="bg-background-soft-200 flex h-16 w-16 shrink-0 items-center justify-center rounded-full">
                    <UserPlaceholderIcon />
                  </div>
                  <div>
                    <h4 className="text-title-50 block text-base font-medium">
                      Upload Image
                    </h4>
                    <p className="text-text-100 mt-1 text-sm">
                      Min 180x180 pixels Png or Jpeg
                    </p>
                    <div className="mt-4">
                      <input
                        id="image-upload"
                        type="file"
                        accept="image/png, image/jpeg"
                        className="hidden"
                      />
                      <Button
                        variant="primary"
                        appearance="outline"
                        size="sm"
                        className="h-7 text-xs"
                      >
                        <label
                          htmlFor="image-upload"
                          className="cursor-pointer"
                        >
                          Upload
                        </label>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Account Info --> */}
            <div className="mb-6">
              <h3 className="text-text-100 mb-3.5 text-sm">Account Info</h3>

              <div className="space-y-4">
                {/* <!-- Name Field --> */}
                <Input label="Name" placeholder="Kathryn Murphy" />

                {/* <!-- Title Field --> */}
                <Input label="Title" placeholder="Product Manager" />

                {/* <!-- Biography Field --> */}
                <TextArea
                  label="Biography"
                  placeholder="Enter your message here..."
                  rows={4}
                />
              </div>
            </div>

            {/* <!-- Security Settings --> */}
            <div className="mb-6">
              <h3 className="text-text-100 mb-3 text-sm">Security</h3>

              <div className="space-y-3">
                {/* <!-- Control 2FA --> */}
                <div className="border-base-100 flex items-start justify-between rounded-xl border p-4">
                  <div className="flex grow items-start">
                    <div className="text-text-100 mr-3">
                      <Shield1Check />
                    </div>
                    <div>
                      <p className="text-title-50 text-base font-medium">
                        Control 2FA
                      </p>
                      <p className="text-text-100 text-sm">
                        Enable two factor authentication
                      </p>
                    </div>
                  </div>
                  <Toggle size="md" />
                </div>
                {/* <!-- Login Alert --> */}
                <div className="border-base-100 flex items-start justify-between rounded-xl border p-4">
                  <div className="flex grow items-start">
                    <div className="text-text-100 mr-3">
                      <InfoCircle />
                    </div>
                    <div>
                      <p className="text-title-50 text-base font-medium">
                        Login Alert
                      </p>
                      <p className="text-text-100 text-sm">
                        Enable account login alert
                      </p>
                    </div>
                  </div>
                  <Toggle size="md" />
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Footer Actions --> */}
          <div className="border-base-100 flex justify-between space-x-4 border-t p-5">
            <Button
              variant="primary"
              appearance="outline"
              className="w-full"
              onClick={() => setOpen(false)}
            >
              Discard
            </Button>
            <Button variant="primary" className="w-full">
              Apply Changes
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
