import { Badge } from '@/components/core/badge';

export default function DataStats8() {
  return (
    <div className="bg-background-soft-50 flex h-screen items-center justify-center px-4 py-10">
      <div className="bg-background-50 w-full max-w-[350px] rounded-2xl p-5">
        <p className="text-text-50 mb-3 text-sm font-normal">Unique Visitors</p>
        <div className="flex items-center justify-between">
          <h2 className="text-title-50 text-3xl font-bold">24.7K</h2>
          <div className="flex items-center gap-1">
            <Badge color="success" size="sm">
              +20%
            </Badge>
            <p className="text-text-100 text-xs font-normal">Vs last month</p>
          </div>
        </div>
      </div>
    </div>
  );
}
