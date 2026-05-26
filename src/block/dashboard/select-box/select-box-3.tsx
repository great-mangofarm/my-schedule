import { useState } from 'react';
import { RadioInput } from '@/components/core/radio-input';

export default function SelectBox3() {
  const [selected, setSelected] = useState('express');

  const handleSelect = () => {
    setSelected(selected === 'express' ? '' : 'express');
  };

  return (
    <div className="bg-background-soft-50 flex h-screen items-center justify-center px-4 py-10">
      <div
        onClick={handleSelect}
        className={`bg-background-50 relative flex w-full max-w-[250px] cursor-pointer items-center rounded-xl border-[1.5px] px-5 py-3.5 transition-all duration-200 ${
          selected === 'express' ? 'border-primary-500' : 'border-transparent'
        }`}
      >
        <div className="flex items-center">
          <RadioInput
            size="md"
            name="plan-select"
            checked={selected === 'express'}
            onChange={() => {}}
            className="w-fit"
          />
          <div className="ml-4 flex-1">
            <h3 className="text-title-50 mb-1 text-base font-semibold">
              Pro Plan
            </h3>
            <p className="text-text-100 text-xs">All features unlocked</p>
          </div>
        </div>
      </div>
    </div>
  );
}
