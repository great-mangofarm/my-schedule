import { Badge } from '@/components/core/badge';
import { ArrowUpward, UserMultiple4 } from '@tailgrids/icons';

export default function DataStats5() {
  return (
    <div className="bg-background-soft-50 flex h-screen items-center justify-center px-4 py-10">
      <div className="bg-background-50 w-full max-w-[345px] rounded-2xl p-5">
        <div className="text-primary-500 bg-primary-500/10 mb-5 flex h-12 w-12 items-center justify-center rounded-xl">
          <UserMultiple4 className="size-6" />
        </div>
        <div className="flex items-end justify-between">
          <div>
            <div className="text-text-100 mb-1 text-sm font-normal">
              Customers
            </div>
            <div className="text-title-50 text-3xl font-bold">3,782</div>
          </div>
          <Badge
            color="success"
            size="md"
            prefixIcon={<ArrowUpward className="shrink-0" />}
          >
            11.01%
          </Badge>
        </div>
      </div>
    </div>
  );
}
