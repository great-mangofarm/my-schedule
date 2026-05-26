import { Checkbox } from '@/components/core/checkbox';

export default function SelectBox1() {
  return (
    <div className="bg-background-soft-50 flex h-screen items-center justify-center px-4 py-10">
      <div className="bg-background-50 flex max-w-[300px] items-center gap-3 rounded-xl px-4 py-2">
        <Checkbox size="md" className="w-fit" />
        <div className="flex-1">
          <div className="flex">
            <div className="shrink-0">
              <img
                src="https://cdn-tailgrids.b-cdn.net/3.0/dashboard/select-box/select-box-01/Avatar.png"
                alt=""
                className="h-12 w-12 rounded-full"
              />
            </div>
            <div className="ml-3">
              <h3 className="text-text-50 text-base font-medium">
                Kathryn Murphy
              </h3>
              <p className="text-text-100 text-sm">murphy.mitc@example.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
