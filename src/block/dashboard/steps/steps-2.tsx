import { ChevronRight } from '@tailgrids/icons';

export default function Steps2() {
  return (
    <div className="bg-background-50 flex h-screen items-center justify-center px-4 py-10">
      <div className="flex flex-wrap items-center gap-4">
        <div className="text-text-50 flex h-6 items-center gap-2 rounded text-sm font-medium">
          <span className="bg-primary-500 text-white-100 inline-flex h-6 w-6 items-center justify-center rounded-full text-sm">
            1
          </span>
          Choose Layout
        </div>
        <ChevronRight className="text-text-200 h-5 w-5 shrink-0" />

        <div className="text-text-50 flex h-6 items-center gap-2 rounded text-sm font-medium">
          <span className="bg-primary-500 text-white-100 inline-flex h-6 w-6 items-center justify-center rounded-full text-sm">
            2
          </span>
          Select Widgets
        </div>
        <ChevronRight className="text-text-200 h-5 w-5 shrink-0" />
        <div className="text-text-50 flex h-6 items-center gap-2 rounded text-sm font-medium">
          <span className="bg-primary-500 text-white-100 inline-flex h-6 w-6 items-center justify-center rounded-full text-sm">
            3
          </span>
          Connect Data
        </div>
        <ChevronRight className="text-text-200 h-5 w-5 shrink-0" />
        <div className="text-text-50 flex h-6 items-center gap-2 rounded text-sm font-medium">
          <span className="bg-primary-500 text-white-100 inline-flex h-6 w-6 items-center justify-center rounded-full text-sm">
            4
          </span>
          Set Permissions
        </div>
        <ChevronRight className="text-text-200 h-5 w-5 shrink-0" />
        <div className="text-text-50 flex h-6 items-center gap-2 rounded text-sm font-medium">
          <span className="bg-primary-500 text-white-100 inline-flex h-6 w-6 items-center justify-center rounded-full text-sm">
            5
          </span>
          Finish Setup
        </div>
      </div>
    </div>
  );
}
