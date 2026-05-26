import { ButtonGroup } from '@/components/core/button-group';

export default function PageTitles2() {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="bg-background-50 border-base-50 flex flex-col justify-between gap-5 border-b px-6 py-4 sm:flex-row sm:items-center">
        <div>
          <h3 className="text-title-50 text-xl font-medium">Overview</h3>
          <p className="text-text-100 text-sm">
            Your personal dashboard overview
          </p>
        </div>
        <div className="flex gap-3">
          <ButtonGroup variant="secondary" size="md">
            <button type="button">Day</button>
            <button type="button">Week</button>
            <button type="button">Month</button>
            <button type="button">Year</button>
          </ButtonGroup>
        </div>
      </div>
    </div>
  );
}
