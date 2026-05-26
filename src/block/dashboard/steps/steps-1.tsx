import { Check, ChevronRight } from '@tailgrids/icons';

export default function Steps1() {
  return (
    <div className="bg-background-50 flex h-screen items-center justify-center px-4 py-10">
      <section className="mx-auto max-w-4xl">
        <div className="flex items-center gap-3">
          <div className="text-text-100 border-base-100 flex h-6 items-center gap-1 rounded border px-1.5 py-1 text-sm font-medium">
            <span className="bg-primary-500 text-white-100 inline-flex h-3 w-3 items-center justify-center rounded-full">
              <Check />
            </span>
            Step 1
          </div>
          <ChevronRight className="text-text-200 h-4 w-4 shrink-0" />
          <div className="border-base-100 text-text-50 flex h-6 items-center gap-1 rounded border px-1.5 py-1 text-sm font-medium">
            <span className="bg-primary-500 text-white-100 inline-flex h-3 w-3 items-center justify-center rounded-full">
              <Check />
            </span>
            Step 2
          </div>
          <ChevronRight className="text-text-200 h-4 w-4 shrink-0" />
          <div className="border-base-100 text-text-50 flex h-6 items-center gap-1 rounded border px-1.5 py-1 text-sm font-medium">
            <span className="bg-primary-500 text-white-100 inline-flex h-3 w-3 items-center justify-center rounded-full">
              <Check />
            </span>
            Step 3
          </div>
          <ChevronRight className="text-text-200 h-4 w-4 shrink-0" />
          <div className="border-base-100 text-text-50 flex h-6 items-center gap-1 rounded border px-1.5 py-1 text-sm font-medium">
            <span className="bg-primary-500 text-white-100 inline-flex h-3 w-3 items-center justify-center rounded-full">
              <Check />
            </span>
            Step 4
          </div>
        </div>
      </section>
    </div>
  );
}
