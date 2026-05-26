import { Modal } from '@/components/core/modal';
import { Button } from '@/components/core/button';
import { Input } from '@/components/core/input';
import { Xmark2x } from '@tailgrids/icons';
import { useState } from 'react';

const Modals5 = () => {
  const [openSubscribe, setOpenSubscribe] = useState(false);

  return (
    <div className="bg-background-50 flex min-h-screen items-center justify-center px-4 py-10">
      {/* Button to reopen modal after closing */}
      {!openSubscribe && (
        <Button
          onClick={() => setOpenSubscribe(true)}
          variant="primary"
          appearance="fill"
        >
          Show Subscribe Modal
        </Button>
      )}

      <Modal
        open={openSubscribe}
        onClose={() => setOpenSubscribe(false)}
        className="bg-background-50 mx-4 w-full max-w-md rounded-xl p-6 shadow-lg"
      >
        {/* <!-- Header with Close Button --> */}
        <div className="mb-6 flex items-start justify-between">
          <div>
            <h2 className="text-title-50 text-lg font-semibold">
              Wait! Don’t Miss Out
            </h2>
            <p className="text-text-100 text-sm">
              Get the latest updates straight to your inbox
            </p>
          </div>

          <Button
            onClick={() => setOpenSubscribe(false)}
            variant="ghost"
            iconOnly
          >
            <Xmark2x />
          </Button>
        </div>

        {/* <!-- Form Fields --> */}
        <div className="mb-4 space-y-4">
          <Input
            type="email"
            label="Email"
            placeholder="Enter your email address"
          />
        </div>

        {/* <!-- Action Buttons --> */}
        <div>
          <Button
            onClick={() => setOpenSubscribe(false)}
            variant="primary"
            appearance="fill"
            className="w-full"
          >
            Subscribe
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default Modals5;
