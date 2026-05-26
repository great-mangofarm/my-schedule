import { Button } from '@/components/core/button';
import { Download1 } from '@tailgrids/icons';

export default function PageTitles3() {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="bg-background-50 border-base-50 flex flex-col justify-between gap-5 border-b px-6 py-4 sm:flex-row sm:items-center">
        <div>
          <h3 className="text-title-50 text-base font-semibold">
            Marketing Performance
          </h3>
          <p className="text-text-100 text-xs">Q1 2024 – Updated Weekly</p>
        </div>
        <div className="flex gap-3">
          <Button
            variant="primary"
            appearance="outline"
            className="w-full sm:w-auto"
          >
            <Download1 />
            Download
          </Button>
        </div>
      </div>
    </div>
  );
}
