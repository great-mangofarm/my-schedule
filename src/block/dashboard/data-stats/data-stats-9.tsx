import { Button } from '@/components/core/button';
import { ArrowUpward } from '@tailgrids/icons';

const TeslaIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="20" cy="20" r="20" fill="#E31937" />
    <path
      d="M20.0005 31.4285L22.9444 14.8726C25.7502 14.8726 26.6353 15.1803 26.7632 16.4362C26.7632 16.4362 28.6456 15.7343 29.5948 14.3089C25.8901 12.5922 22.1678 12.5148 22.1678 12.5148L19.9957 15.1604L20.0006 15.16L17.8285 12.5144C17.8285 12.5144 14.106 12.5919 10.4019 14.3086C11.3504 15.734 13.2334 16.4358 13.2334 16.4358C13.362 15.1799 14.2459 14.8722 17.033 14.8702L20.0005 31.4285Z"
      fill="white"
    />
    <path
      d="M19.9996 11.7509C22.9943 11.728 26.422 12.2141 29.9311 13.7435C30.4001 12.8994 30.5207 12.5263 30.5207 12.5263C26.6847 11.0087 23.0925 10.4893 19.9992 10.4763C16.906 10.4893 13.3139 11.0088 9.47852 12.5263C9.47852 12.5263 9.64962 12.9859 10.0677 13.7435C13.576 12.2141 17.0045 11.728 19.9993 11.7509H19.9996Z"
      fill="white"
    />
  </svg>
);

export default function DataStats9() {
  return (
    <div className="bg-background-soft-50 flex h-screen items-center justify-center px-4 py-10">
      <div className="bg-background-50 w-full max-w-68 rounded-2xl p-5">
        <div className="border-base-50 flex justify-between border-b pb-5">
          <div className="flex">
            <TeslaIcon />
            <div className="ml-3">
              <h4 className="text-title-50 text-base font-semibold">TSLA</h4>
              <p className="text-text-100 text-xs">Tesla, Inc</p>
            </div>
          </div>
          <div>
            <p className="text-text-50 text-sm font-medium">$192.53</p>
            <span className="text-success-500 inline-flex items-center gap-1 text-xs">
              <ArrowUpward className="size-4" /> <span>1.01%</span>
            </span>
          </div>
        </div>
        <div className="flex gap-3 pt-5">
          <Button
            variant="primary"
            appearance="outline"
            size="sm"
            className="flex-1"
          >
            Short Stock
          </Button>
          <Button variant="primary" size="sm" className="flex-1">
            Buy Stock
          </Button>
        </div>
      </div>
    </div>
  );
}
