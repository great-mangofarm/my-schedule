import { Button } from '@/components/core/button';
import { SlidersDoubleHorizontal, Upload1 } from '@tailgrids/icons';

export default function PageTitles1() {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="bg-background-50 border-base-50 flex flex-col justify-between gap-5 border-b px-6 py-4 sm:flex-row sm:items-center">
        <div>
          <h3 className="text-title-50 text-xl font-medium">Dashboard</h3>
        </div>
        <div className="flex gap-3">
          <Button
            variant="primary"
            appearance="outline"
            className="w-full sm:w-auto"
          >
            <SlidersDoubleHorizontal />
            Filter
          </Button>
          <Button
            variant="primary"
            appearance="fill"
            className="w-full sm:w-auto"
          >
            <Upload1 />
            Export
          </Button>
        </div>
      </div>
    </div>
  );
}
