import { Button } from '@/components/core/button';
import { Avatar } from '@/components/core/avatar';
import { Plus } from '@tailgrids/icons';

export default function PageTitles4() {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="bg-background-50 border-base-50 flex flex-col justify-between gap-3 border-b px-6 py-4 sm:flex-row sm:items-center sm:gap-5">
        <div>
          <h3 className="text-title-50 text-xl font-medium">Overview</h3>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
          <div className="flex items-center gap-2">
            <p className="text-text-100 text-sm font-medium">
              Created On: <span className="text-title-50">21 Aug 2025</span>
            </p>
            <div className="flex -space-x-2">
              <Avatar
                src="https://cdn-tailgrids.b-cdn.net/3.0/dashboard/page-titles/page-title-04/avatar-1.png"
                fallback="U1"
                size="sm"
                className="ring-background-50 ring-2"
              />
              <Avatar
                src="https://cdn-tailgrids.b-cdn.net/3.0/dashboard/page-titles/page-title-04/avatar-2.png"
                fallback="U2"
                size="sm"
                className="ring-background-50 ring-2"
              />
              <Avatar
                src="https://cdn-tailgrids.b-cdn.net/3.0/dashboard/page-titles/page-title-04/avatar-3.png"
                fallback="U3"
                size="sm"
                className="ring-background-50 ring-2"
              />
            </div>
          </div>
          <Button
            variant="primary"
            appearance="outline"
            className="w-full sm:w-auto"
          >
            <Plus />
            Add Member
          </Button>
        </div>
      </div>
    </div>
  );
}
