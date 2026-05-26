import { Badge } from '@/components/core/badge';

export default function DataStats7() {
  return (
    <div className="bg-background-soft-50 flex h-screen items-center justify-center px-4 py-10">
      <div className="bg-background-50 w-full max-w-[350px] rounded-2xl p-5">
        <h2 className="text-title-50 mb-5 text-3xl font-bold">$120,369</h2>
        <div className="flex items-center justify-between">
          <p className="text-text-50 text-sm font-normal">Avg. Client Rating</p>
          <div className="flex items-center gap-1">
            <Badge color="success" size="sm">
              +12.9
            </Badge>
            <p className="text-text-100 text-xs font-normal">From last month</p>
          </div>
        </div>
      </div>
    </div>
  );
}
