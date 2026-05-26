import { Modal } from '@/components/core/modal';
import { Button } from '@/components/core/button';
import { Xmark2x } from '@tailgrids/icons';
import { useState } from 'react';

const Modals4 = () => {
  const [openError, setOpenError] = useState(false);

  return (
    <div className="bg-background-50 flex min-h-screen items-center justify-center px-4 py-10">
      {/* Button to reopen modal after closing */}
      {!openError && (
        <Button
          onClick={() => setOpenError(true)}
          variant="danger"
          appearance="fill"
        >
          Show Error Modal
        </Button>
      )}

      <Modal
        open={openError}
        onClose={() => setOpenError(false)}
        className="bg-background-50 mx-4 w-full max-w-[400px] rounded-xl p-6 shadow-lg"
      >
        {/* Close Button */}
        <div className="flex justify-end">
          <Button onClick={() => setOpenError(false)} variant="ghost" iconOnly>
            <Xmark2x />
          </Button>
        </div>

        {/* <!-- Error Icon --> */}
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
              fill="#FEF2F2"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M31.5516 33.6731C30.9659 33.0874 30.9659 32.1376 31.5516 31.5518C32.1374 30.966 33.0872 30.966 33.673 31.5518L39.9998 37.8787L46.3265 31.552C46.9123 30.9662 47.862 30.9662 48.4478 31.552C49.0336 32.1378 49.0336 33.0875 48.4478 33.6733L42.1211 40L48.4478 46.3267C49.0336 46.9125 49.0336 47.8622 48.4478 48.448C47.862 49.0338 46.9123 49.0338 46.3265 48.448L39.9998 42.1213L33.673 48.4482C33.0872 49.034 32.1374 49.034 31.5516 48.4482C30.9659 47.8624 30.9659 46.9126 31.5516 46.3269L37.8785 40L31.5516 33.6731Z"
              fill="#B91C1C"
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
              fill="#F04438"
              fill-opacity="0.15"
            />
            <path
              d="M31.5516 31.5515C32.1374 30.966 33.087 30.966 33.6727 31.5515L39.9989 37.8787L46.3261 31.5525L46.4403 31.449C47.0295 30.9685 47.898 31.0034 48.4472 31.5525C48.9963 32.1017 49.0312 32.9702 48.5507 33.5593L48.4472 33.6736L42.12 39.9998L48.4472 46.3269L48.5507 46.4402C49.0314 47.0294 48.9964 47.8988 48.4472 48.448C47.8979 48.997 47.0294 49.0312 46.4403 48.5506L46.3261 48.448L39.9989 42.1209L33.6727 48.448C33.087 49.0338 32.1374 49.0338 31.5516 48.448C30.9659 47.8622 30.9659 46.9127 31.5516 46.3269L37.8778 39.9998L31.5516 33.6736C30.9659 33.0878 30.9659 32.1373 31.5516 31.5515Z"
              fill="#EF4444"
            />
          </svg>
        </div>
        {/* 
      <!-- Content --> */}
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
            onClick={() => setOpenError(false)}
            variant="primary"
            appearance="outline"
            className="flex-1"
          >
            Cancel
          </Button>
          <Button
            onClick={() => setOpenError(false)}
            variant="danger"
            appearance="fill"
            className="flex-1"
          >
            Take action
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default Modals4;
