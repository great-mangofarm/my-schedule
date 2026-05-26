import { Badge } from '@/components/core/badge';
import { Button } from '@/components/core/button';
import { Bookmark1 } from '@tailgrids/icons';

export default function Cards12() {
  return (
    <div className="bg-background-soft-50 flex h-screen items-center justify-center px-4 py-10">
      <div className="bg-background-50 w-full max-w-[400px] rounded-2xl">
        <div className="p-5">
          {/* <!-- Header with Logo and Bookmark --> */}
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center">
              <img
                src="https://cdn-tailgrids.b-cdn.net/3.0/logo/tailgrids-logo.svg"
                alt="logo"
                width={120}
                height={30}
              />
            </div>
            <button className="text-text-200 hover:text-text-50">
              <Bookmark1 className="size-5" />
            </button>
          </div>

          {/* <!-- Job Details --> */}
          <div className="my-5">
            <div className="text-text-100 mb-1 flex items-center text-sm">
              <span>Tailgrids</span>
              <span className="mx-2">•</span>
              <span>2 days ago</span>
            </div>

            <h2 className="text-title-50 mb-2 text-2xl font-semibold">
              Product Designer
            </h2>

            <div className="flex space-x-2">
              <Badge color="gray" size="sm">
                Full Time
              </Badge>
              <Badge color="gray" size="sm">
                On Site
              </Badge>
            </div>
          </div>
        </div>

        {/* <!-- Salary and Apply Button --> */}
        <div className="bg-background-soft-50 flex items-center justify-between rounded-b-2xl p-5">
          <div>
            <div className="text-title-50 font-bold">$20/hr</div>
            <div className="text-text-100 text-xs">(Dhaka, Bangladesh)</div>
          </div>

          <Button variant="primary" appearance="fill" size="sm">
            Apply Now
          </Button>
        </div>
      </div>
    </div>
  );
}
