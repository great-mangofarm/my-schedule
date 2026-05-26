import { Badge } from '@/components/core/badge';
import { ArrowUpward, StarFatFalling } from '@tailgrids/icons';

export default function DataStats6() {
  return (
    <div className="bg-background-soft-50 flex h-screen items-center justify-center px-4 py-10">
      <div className="bg-background-50 w-full max-w-[345px] rounded-2xl p-5">
        <div className="text-title-50 bg-background-soft-100 mb-6 flex h-13 w-13 items-center justify-center rounded-xl">
          <StarFatFalling />
        </div>
        <div className="flex items-end justify-between">
          <div>
            <p className="text-text-100 mb-3 text-sm font-normal">
              Avg. Client Rating
            </p>
            <div className="text-title-50 text-3xl font-bold">7.8/10</div>
          </div>

          <div className="flex items-center gap-1">
            <Badge color="success" prefixIcon={<ArrowUpward />}>
              +20%
            </Badge>
            <p className="text-text-100 text-sm font-normal">Vs last month</p>
          </div>
        </div>
      </div>
    </div>
  );
}
