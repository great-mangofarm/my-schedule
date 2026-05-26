import { Badge } from '@/components/core/badge';

export default function Cards8() {
  return (
    <div className="bg-background-soft-50 flex h-screen items-center justify-center px-4 py-10">
      <div className="relative w-full max-w-[400px] overflow-hidden rounded-2xl">
        {/* <!-- Main Image --> */}
        <img
          src="https://cdn-tailgrids.b-cdn.net/3.0/application/cards/card-08/image.png"
          alt="Mobile Payment"
          className="h-full w-full object-cover"
        />

        {/* <!-- Overlay Content --> */}
        <div className="bg-foreground-50/30 absolute right-2 bottom-2 left-2 rounded-xl p-6 backdrop-blur-lg">
          {/* <!-- Tag --> */}
          <Badge
            color="primary"
            size="md"
            className="bg-primary-500 text-white-100"
          >
            Design
          </Badge>

          {/* <!-- Title --> */}
          <h3 className="text-white-100 mt-3 text-2xl leading-tight font-semibold">
            Everything you need to know
            <br />
            About UI/UX Design.
          </h3>
        </div>
      </div>
    </div>
  );
}
