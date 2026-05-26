import { Modal } from '@/components/core/modal';
import { Button } from '@/components/core/button';
import { Input } from '@/components/core/input';
import { RadioInput } from '@/components/core/radio-input';
import { Xmark2x } from '@tailgrids/icons';
import { useState } from 'react';

const Modals6 = () => {
  const [openSettings, setOpenSettings] = useState(false);

  return (
    <div className="bg-background-50 flex h-screen items-center justify-center px-4 py-10">
      {/* Button to reopen modal after closing */}
      {!openSettings && (
        <Button
          onClick={() => setOpenSettings(true)}
          variant="success"
          appearance="fill"
        >
          Show Settings Modal
        </Button>
      )}

      <Modal
        open={openSettings}
        onClose={() => setOpenSettings(false)}
        className="bg-background-50 mx-4 w-full max-w-md rounded-xl p-6 shadow-lg"
      >
        {/* <!-- Header with Close Button --> */}
        <div className="mb-6 flex items-start justify-between">
          <div>
            <h2 className="text-title-50 text-lg font-semibold">
              Choose Your Settings
            </h2>
            <p className="text-text-100 text-sm">
              Choose the settings that work best for you.
            </p>
          </div>
          <Button
            onClick={() => setOpenSettings(false)}
            variant="ghost"
            iconOnly
          >
            <Xmark2x />
          </Button>
        </div>

        {/* <!-- Form Fields --> */}
        <div className="mb-6 space-y-4">
          <Input
            type="email"
            label="Email"
            placeholder="Enter your email address"
          />

          {/* <!-- Region Dropdown --> */}
          <div>
            <label
              htmlFor="region"
              className="text-text-50 mb-2 block text-sm font-medium"
            >
              Select Region
            </label>
            <div className="relative">
              <select
                id="region"
                className="focus:border-primary-300 bg-input-background focus:ring-primary-500/30 text-title-50 hover:placeholder:text-title-50 border-base-200 placeholder:text-text-200 h-11 w-full rounded-lg border px-4 py-2.5 text-base ring-3 ring-transparent placeholder:text-base focus:outline-0"
              >
                <option>Country</option>
                <option>United States</option>
                <option>United Kingdom</option>
              </select>
            </div>
          </div>

          {/* <!-- Mode Toggle --> */}
          <div className="mt-6 flex space-x-4">
            <RadioInput
              name="mode"
              label="Light Mode"
              size="md"
              className="w-fit font-medium"
              defaultChecked
            />
            <RadioInput
              name="mode"
              label="Dark Mode"
              size="md"
              className="w-fit font-medium"
            />
          </div>
        </div>

        {/* <!-- Action Buttons --> */}
        <div className="flex space-x-3">
          <Button
            onClick={() => setOpenSettings(false)}
            variant="primary"
            appearance="outline"
            className="flex-1"
          >
            Cancel
          </Button>
          <Button
            onClick={() => setOpenSettings(false)}
            variant="primary"
            appearance="fill"
            className="flex-1"
          >
            Save changes
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default Modals6;
