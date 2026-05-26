import { useState } from 'react';
import { RadioInput } from '@/components/core/radio-input';

export default function SelectBox4() {
  const [selected, setSelected] = useState('express');

  const handleSelect = () => {
    setSelected(selected === 'express' ? '' : 'express');
  };

  return (
    <div className="bg-background-soft-50 flex h-screen items-center justify-center px-4 py-10">
      <div
        onClick={handleSelect}
        className={`bg-background-50 relative w-full max-w-[300px] cursor-pointer items-center rounded-xl border-2 px-6 py-4 transition-all duration-200 ${
          selected === 'express' ? 'border-primary-500' : 'border-base-50'
        }`}
      >
        <div className="flex items-center">
          <div className="shrink-0 pr-3">
            <img
              src="https://cdn-tailgrids.b-cdn.net/3.0/dashboard/select-box/select-box-04/avatar.svg"
              alt=""
            />
          </div>
          <div className="border-base-100 flex gap-2 border-l-2 pl-3">
            <h3 className="text-title-50 text-base font-semibold">$5.99</h3>
            <p className="text-text-100 text-xs">
              Delivery time <br /> 3-5 days
            </p>
          </div>
        </div>

        <div className="absolute top-3.5 right-3.5">
          <RadioInput
            size="md"
            name="delivery-option"
            checked={selected === 'express'}
            onChange={() => {}}
          />
        </div>
      </div>
    </div>
  );
}
