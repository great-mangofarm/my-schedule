import { useState } from 'react';
import { Button } from '@/components/core/button';
import { RadioInput } from '@/components/core/radio-input';
import { Xmark2x } from '@tailgrids/icons';

export default function Cookies5() {
  const [show, setShow] = useState(true);
  const [selectedNotification, setSelectedNotification] = useState('none');

  const handleClose = () => {
    setShow(false);
  };

  const handleAccept = () => {
    console.log('Selected notification preference:', selectedNotification);
    setShow(false);
  };

  const handleCancel = () => {
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="bg-background-soft-50 flex h-screen items-center justify-center">
      <div className="bg-background-50 mx-auto max-w-[400px] rounded-xl shadow-md">
        <div className="p-7">
          <div className="mb-5 flex items-start justify-between gap-7">
            <h3 className="text-title-50 text-xl font-semibold">
              Notification Settings
            </h3>
            <button
              onClick={handleClose}
              className="hover:text-title-50 text-text-100 hover:bg-background-soft-100 inline-flex size-8 shrink-0 cursor-pointer items-center justify-center rounded-md bg-transparent"
            >
              <Xmark2x className="size-5" />
            </button>
          </div>
          <div className="mb-10 flex items-start gap-3">
            <RadioInput
              name="notifications"
              value="all"
              checked={selectedNotification === 'all'}
              onChange={(e) => setSelectedNotification(e.target.value)}
              size="md"
              className="w-fit"
            />
            <div>
              <h3 className="text-text-50 font-medium">All Notifications</h3>
              <p className="text-text-100 text-sm">
                Get notified about all activity related to this request.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <RadioInput
              name="notifications"
              value="none"
              checked={selectedNotification === 'none'}
              onChange={(e) => setSelectedNotification(e.target.value)}
              size="md"
              className="w-fit"
            />
            <div>
              <h3 className="text-text-50 font-medium">No Notifications</h3>
              <p className="text-text-100 text-sm">
                You'll only be contacted when absolutely necessary.
              </p>
            </div>
          </div>
        </div>
        <div className="border-base-100 flex gap-3 border-t p-5">
          <Button
            variant="ghost"
            appearance="outline"
            className="w-full"
            onClick={handleCancel}
          >
            Cancel
          </Button>
          <Button
            variant="primary"
            appearance="fill"
            className="w-full"
            onClick={handleAccept}
          >
            Accept
          </Button>
        </div>
      </div>
    </div>
  );
}
