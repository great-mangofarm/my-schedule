import { Checkbox } from '@/components/core/checkbox';

export default function SelectBox5() {
  return (
    <div className="bg-background-soft-100 flex h-screen items-center justify-center px-4 py-10">
      <div className="bg-background-50 flex w-full max-w-[400px] items-start rounded-xl px-4 py-4">
        <Checkbox size="md" className="w-fit" />
        <div className="flex flex-1">
          <div className="ml-3 shrink-0">
            <p className="text-text-100 text-sm">Wed, 11 jan</p>
            <h3 className="text-text-50 text-sm font-medium">09:20 AM</h3>
          </div>
          <div className="ml-9">
            <h3 className="text-text-50 mb-1 text-sm font-medium">
              Business Analytics Press
            </h3>
            <p className="text-text-100 text-xs">
              Exploring the Future of Data-Driven +6 more
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
