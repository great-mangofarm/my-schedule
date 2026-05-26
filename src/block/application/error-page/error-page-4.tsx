import { Button } from '@/components/core/button';
import { ChevronLeft } from '@tailgrids/icons';

export default function ErrorPage4() {
  return (
    <section className="bg-background-50 relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="hidden lg:block">
        <svg
          className="absolute top-0 right-30 block"
          width="50"
          height="400"
          viewBox="0 0 50 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.5"
            d="M0.000976562 0H50.0002V400H0.000976562V0Z"
            fill="url(#paint0_linear_8058_1376)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_8058_1376"
              x1="25.0006"
              y1="0"
              x2="25.0006"
              y2="400"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#E5E7EB" stop-opacity="0" />
              <stop offset="0.485577" stop-color="#E5E7EB" />
              <stop offset="1" stop-color="#E5E7EB" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
        <svg
          className="absolute top-0 right-30 hidden"
          width="50"
          height="400"
          viewBox="0 0 50 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.5"
            d="M0.000976562 0H50.0002V400H0.000976562V0Z"
            fill="url(#paint0_linear_10980_9604)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_10980_9604"
              x1="25.0006"
              y1="0"
              x2="25.0006"
              y2="400"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#E5E7EB" stop-opacity="0" />
              <stop offset="0.485577" stop-color="white" stop-opacity="0.15" />
              <stop offset="1" stop-color="#E5E7EB" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
        <svg
          className="absolute bottom-0 left-30 block"
          width="50"
          height="400"
          viewBox="0 0 50 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.5"
            d="M0 0H49.9993V400H0V0Z"
            fill="url(#paint0_linear_8058_1377)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_8058_1377"
              x1="24.9996"
              y1="0"
              x2="24.9996"
              y2="400"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#E5E7EB" stop-opacity="0" />
              <stop offset="0.745192" stop-color="#E5E7EB" />
              <stop offset="1" stop-color="#E5E7EB" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>

        <svg
          className="absolute bottom-0 left-30 hidden"
          width="50"
          height="400"
          viewBox="0 0 50 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.5"
            d="M0 0H49.9993V400H0V0Z"
            fill="url(#paint0_linear_10980_9603)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_10980_9603"
              x1="24.9996"
              y1="0"
              x2="24.9996"
              y2="400"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#E5E7EB" stop-opacity="0" />
              <stop offset="0.745192" stop-color="white" stop-opacity="0.15" />
              <stop offset="1" stop-color="#E5E7EB" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative z-20 mx-auto max-w-md">
        <div className="flex justify-center">
          <svg
            width="366"
            height="120"
            viewBox="0 0 366 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M243 0H123V120H243V0ZM183 100.852C205.562 100.852 223.852 82.5618 223.852 60C223.852 37.4382 205.562 19.1482 183 19.1482C160.438 19.1482 142.148 37.4382 142.148 60C142.148 82.5618 160.438 100.852 183 100.852Z"
              fill="#3758F9"
            />
            <path
              d="M73.538 120V98.7429H0.719305L70.4523 0H97.538V77.8286H112.795V98.7429H97.538V120H73.538ZM40.2809 77.8286H75.0809V26.4L40.2809 77.8286Z"
              fill="#3758F9"
            />
            <path
              d="M326.024 120V98.7429H253.205L322.938 0H350.024V77.8286H365.281V98.7429H350.024V120H326.024ZM292.767 77.8286H327.567V26.4L292.767 77.8286Z"
              fill="#3758F9"
            />
          </svg>
        </div>
        <h2 className="text-title-50 mt-12 mb-4 text-center text-4xl font-normal sm:text-[60px]">
          Page Not Found
        </h2>
        <p className="text-text-100 mb-4">
          The page you're looking for doesn't exist or has been moved. check the
          URL or go back to the homepage.
        </p>
        <div className="mt-8 flex justify-center text-center">
          <Button variant="primary" appearance="outline">
            <ChevronLeft />
            Back to homepage
          </Button>
        </div>
      </div>
    </section>
  );
}
