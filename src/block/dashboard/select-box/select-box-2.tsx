import { useState } from 'react';
import { RadioInput } from '@/components/core/radio-input';
import { Pencil1 } from '@tailgrids/icons';

export default function SelectBox2() {
  const [selected, setSelected] = useState('express');

  const handleSelect = () => {
    setSelected(selected === 'express' ? '' : 'express');
  };

  return (
    <div className="bg-background-soft-50 flex h-screen items-center justify-center px-4 py-10">
      <div
        onClick={handleSelect}
        className={`bg-background-50 relative flex w-full max-w-[350px] cursor-pointer items-center rounded-xl border-[1.5px] px-5 py-3.5 transition-all duration-200 ${
          selected === 'express' ? 'border-primary-500' : 'border-transparent'
        }`}
      >
        <div className="flex">
          <div className="border-base-100 flex h-8 w-8 shrink-0 items-center justify-center rounded-md border">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="20"
              viewBox="0 0 18 20"
              fill="none"
            >
              <path
                d="M15.6364 5.21293C15.8701 3.68888 15.6364 2.67285 14.8182 1.73497C13.9222 0.67986 12.2859 0.25 10.1822 0.25H4.14363C3.71509 0.25 3.36446 0.562625 3.28654 0.992485L0.754248 17.0145C0.71529 17.3272 0.94904 17.6007 1.26071 17.6007H5.00072L4.72801 19.242C4.68905 19.5155 4.88384 19.75 5.19551 19.75H8.35114C8.74072 19.75 9.05239 19.4765 9.09135 19.1247L9.75364 14.9825C9.7926 14.6308 10.1432 14.3572 10.4939 14.3572H10.9614C14.0001 14.3572 16.4155 13.1067 17.1168 9.51152C17.3895 8.02655 17.2726 6.73697 16.4934 5.87725C16.2597 5.60371 15.987 5.40832 15.6364 5.21293"
                fill="#009CDE"
              />
              <path
                d="M15.6364 5.21293C15.8701 3.68888 15.6364 2.67285 14.8182 1.73497C13.9222 0.67986 12.2859 0.25 10.1822 0.25H4.14363C3.71509 0.25 3.36446 0.562625 3.28654 0.992485L0.754248 17.0145C0.71529 17.3272 0.94904 17.6007 1.26071 17.6007H5.00071L5.89676 11.8171C5.97468 11.3873 6.3253 11.0746 6.75384 11.0746H8.54593C12.0522 11.0746 14.7793 9.66783 15.5584 5.52555C15.5974 5.44739 15.5974 5.33016 15.6364 5.21293Z"
                fill="#012169"
              />
              <path
                d="M6.94864 5.252C6.98759 4.97846 7.33822 4.62675 7.68884 4.62675H12.4418C12.9872 4.62675 13.5326 4.66583 14.0001 4.74399C14.4286 4.82214 15.2078 5.01753 15.5974 5.252C15.8312 3.72796 15.5974 2.71192 14.7793 1.77405C13.9222 0.67986 12.2859 0.25 10.1822 0.25H4.14363C3.71509 0.25 3.36446 0.562625 3.28654 0.992485L0.754248 17.0145C0.71529 17.3272 0.94904 17.6007 1.26071 17.6007H5.00071L6.94864 5.252V5.252Z"
                fill="#003087"
              />
            </svg>
          </div>
          <div className="ml-4 flex-1">
            <h3 className="text-title-50 mb-1 text-base">Paypal last 4566</h3>
            <p className="text-text-100 text-xs">Expire 05/2028</p>
            <div className="mt-6 flex gap-2">
              <span className="bg-badge-primary-background text-badge-primary-text inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium">
                <span className="bg-badge-primary-icon-color h-1.5 w-1.5 rounded-full"></span>
                Primary
              </span>
              <button className="hover:bg-background-soft-100 border-base-100 text-text-50 flex cursor-pointer items-center gap-1 rounded-full border py-1 pr-3 pl-2 text-xs font-medium">
                <Pencil1 className="size-4" />
                Edit
              </button>
            </div>
          </div>
        </div>
        <div className="absolute top-3.5 right-3.5">
          <RadioInput
            size="md"
            name="payment-method"
            checked={selected === 'express'}
            onChange={() => {}}
          />
        </div>
      </div>
    </div>
  );
}
