import { Button } from '@/components/core/button';

export default function Cards3() {
  return (
    <div className="bg-background-soft-50 flex h-screen items-center justify-center px-4 py-10">
      <div className="bg-background-50 w-full max-w-[400px] rounded-2xl p-7 shadow-sm">
        {/* <!-- Content --> */}
        <h2 className="text-title-50 mb-2 text-2xl font-bold">
          Ready for Business Website Crafted by TailGrids
        </h2>

        <p className="text-text-100 mb-6 text-base">
          Lorem ipsum is simply dummy text of the end rhynes printing and
          typesetting industry.
        </p>

        {/* <!-- Button --> */}
        <Button size="sm" appearance="outline">
          Learn More
        </Button>
      </div>
    </div>
  );
}
