import { Badge } from '@/components/core/badge';

export default function Cards9() {
  return (
    <div className="bg-background-soft-50 flex h-screen items-center justify-center px-4 py-10">
      <div className="bg-background-50 w-full max-w-[400px] overflow-hidden rounded-2xl">
        {/* <!-- Image Section with Date --> */}
        <div className="relative">
          <img
            src="https://cdn-tailgrids.b-cdn.net/3.0/application/cards/card-09/image.jpg"
            alt="Pink Balloon Characters"
            className="h-64 w-full object-cover"
          />
          {/* <!-- Date Badge --> */}
          <div className="bg-background-50 absolute top-4 right-4 h-14 w-14 rounded-lg p-2 text-center shadow-sm">
            <span className="text-title-50 block text-xl font-bold">17</span>
            <span className="text-text-100 block text-xs">Mar</span>
          </div>
        </div>

        {/* <!-- Content Section --> */}
        <div className="p-5">
          {/* <!-- Category --> */}
          <Badge color="gray" size="sm">
            Cartoon
          </Badge>

          {/* <!-- Title --> */}
          <h3 className="text-title-50 mt-2 text-2xl font-semibold">
            Behind the Scenes of Popular Cartoons
          </h3>
        </div>
      </div>
    </div>
  );
}
