import { Modal } from '@/components/core/modal';
import { Button } from '@/components/core/button';
import { Xmark2x } from '@tailgrids/icons';
import { useState } from 'react';

const Modals1 = () => {
  const [openSuccess, setOpenSuccess] = useState(false);

  return (
    <div className="bg-background-50 flex min-h-screen items-center justify-center px-4 py-10">
      {/* Button to reopen modal after closing */}
      {!openSuccess && (
        <Button
          onClick={() => setOpenSuccess(true)}
          variant="success"
          appearance="fill"
        >
          Show Success Modal
        </Button>
      )}

      <Modal
        open={openSuccess}
        onClose={() => setOpenSuccess(false)}
        className="bg-background-50 mx-4 w-full max-w-100 rounded-xl p-6 shadow-lg"
      >
        {/* Close Button */}
        <div className="flex justify-end">
          <Button
            onClick={() => setOpenSuccess(false)}
            variant="ghost"
            iconOnly
          >
            <Xmark2x />
          </Button>
        </div>

        {/* <!-- Success Icon --> */}
        <div className="mb-4 flex justify-center">
          <svg
            className="block"
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M30.5458 6.08936C34.3293 -2.02979 45.6707 -2.02979 49.4542 6.08936C51.567 10.6231 56.4973 13.042 61.2939 11.8981C69.8837 9.84951 76.9549 18.883 73.0831 26.9588C70.9211 31.4684 72.1387 36.9036 76.0072 40.0109C82.9351 45.5755 80.4114 56.8401 71.7997 58.7913C66.991 59.8809 63.5791 64.2396 63.6064 69.2583C63.6554 78.2458 53.4372 83.259 46.5705 77.6164C42.7361 74.4655 37.2639 74.4655 33.4295 77.6164C26.5628 83.259 16.3446 78.2458 16.3936 69.2583C16.4209 64.2396 13.009 59.8809 8.20028 58.7913C-0.411367 56.8401 -2.93505 45.5755 3.99275 40.0109C7.86126 36.9036 9.07894 31.4684 6.9169 26.9588C3.04508 18.883 10.1163 9.84951 18.7061 11.8981C23.5027 13.042 28.433 10.6231 30.5458 6.08936Z"
              fill="#F0FDF4"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M28.5553 40C28.5553 33.6787 33.6797 28.5543 40.001 28.5543C46.3223 28.5543 51.4467 33.6787 51.4467 40C51.4467 46.3213 46.3223 51.4457 40.001 51.4457C33.6797 51.4457 28.5553 46.3213 28.5553 40ZM40.001 25.5543C32.0229 25.5543 25.5553 32.0218 25.5553 40C25.5553 47.9781 32.0229 54.4457 40.001 54.4457C47.9791 54.4457 54.4467 47.9781 54.4467 40C54.4467 32.0218 47.9791 25.5543 40.001 25.5543ZM45.2603 38.3908C45.8461 37.805 45.8461 36.8553 45.2603 36.2695C44.6745 35.6837 43.7247 35.6837 43.139 36.2695L38.8599 40.5485L36.8631 38.5517C36.2773 37.9659 35.3275 37.9659 34.7417 38.5517C34.156 39.1375 34.156 40.0872 34.7417 40.673L37.7993 43.7305C38.0806 44.0118 38.4621 44.1698 38.8599 44.1698C39.2577 44.1698 39.6393 44.0118 39.9206 43.7305L45.2603 38.3908Z"
              fill="#16A34A"
            />
          </svg>

          <svg
            className="hidden"
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M30.5458 6.08936C34.3293 -2.02979 45.6707 -2.02979 49.4542 6.08936C51.567 10.6231 56.4973 13.042 61.2939 11.8981C69.8837 9.84951 76.9549 18.883 73.0831 26.9588C70.9211 31.4684 72.1387 36.9036 76.0072 40.0109C82.9351 45.5755 80.4114 56.8401 71.7997 58.7913C66.991 59.8809 63.5791 64.2396 63.6064 69.2583C63.6554 78.2458 53.4372 83.259 46.5705 77.6164C42.7361 74.4655 37.2639 74.4655 33.4295 77.6164C26.5628 83.259 16.3446 78.2458 16.3936 69.2583C16.4209 64.2396 13.009 59.8809 8.20028 58.7913C-0.411367 56.8401 -2.93505 45.5755 3.99275 40.0109C7.86126 36.9036 9.07894 31.4684 6.9169 26.9588C3.04508 18.883 10.1163 9.84951 18.7061 11.8981C23.5027 13.042 28.433 10.6231 30.5458 6.08936Z"
              fill="#12B76A"
              fill-opacity="0.15"
            />
            <path
              d="M40.0007 25.5544C47.9787 25.5545 54.4468 32.0218 54.447 39.9998C54.4469 47.9778 47.9788 54.446 40.0007 54.446C32.0228 54.4458 25.5555 47.9777 25.5554 39.9998C25.5556 32.0219 32.0229 25.5547 40.0007 25.5544ZM40.0007 28.5544C33.6798 28.5547 28.5556 33.6788 28.5554 39.9998C28.5555 46.3208 33.6797 51.4458 40.0007 51.446C46.3219 51.446 51.4469 46.3209 51.447 39.9998C51.4468 33.6787 46.3218 28.5545 40.0007 28.5544ZM43.2527 36.1658C43.8418 35.6855 44.7114 35.7203 45.2605 36.2693C45.8094 36.8184 45.8432 37.687 45.363 38.2761L45.2605 38.3904L39.9207 43.7302C39.6394 44.0115 39.2578 44.1696 38.8601 44.1697C38.5119 44.1697 38.1759 44.0487 37.9089 43.8298L37.7996 43.7302L34.7419 40.6726L34.6384 40.5583C34.1584 39.9692 34.193 39.1005 34.7419 38.5515C35.291 38.0027 36.1597 37.968 36.7488 38.448L36.863 38.5515L38.8601 40.5486L43.1394 36.2693L43.2527 36.1658Z"
              fill="#22C55E"
            />
          </svg>
        </div>

        {/* <!-- Content --> */}
        <div className="mb-6 text-center">
          <h2 className="text-title-50 mb-2 text-3xl font-semibold">
            Well Done!
          </h2>
          <p className="text-text-100 sm:text-text-200">
            Lorem ipsum dolor sit amet consectetur libero tempor felis risus
            nisi non.
          </p>
        </div>

        {/* <!-- Action Buttons --> */}
        <div className="flex space-x-3">
          <Button
            onClick={() => setOpenSuccess(false)}
            variant="primary"
            appearance="outline"
            className="flex-1"
          >
            Cancel
          </Button>
          <Button
            onClick={() => setOpenSuccess(false)}
            variant="success"
            appearance="fill"
            className="flex-1"
          >
            Okay, got it
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default Modals1;
