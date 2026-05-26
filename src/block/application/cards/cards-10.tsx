import { Avatar } from '@/components/core/avatar';

export default function Cards10() {
  return (
    <div className="bg-background-soft-50 flex h-screen items-center justify-center px-4 py-10">
      <div className="bg-background-50 w-full max-w-[400px] overflow-hidden rounded-2xl p-5">
        {/* <!-- User Profile Section --> */}
        <div className="flex items-center">
          <Avatar
            src="https://cdn-tailgrids.b-cdn.net/3.0/application/cards/card-10/author.png"
            alt="Brooklyn Simmons"
            size="lg"
            fallback="BS"
          />
          <div className="pl-3">
            <h3 className="text-title-50 text-base font-semibold">
              Brooklyn Simmons
            </h3>
            <p className="text-text-100 text-sm">Entrepreneur</p>
          </div>
        </div>

        {/* <!-- Main Image --> */}
        <div className="my-5 rounded-lg">
          <img
            src="https://cdn-tailgrids.b-cdn.net/3.0/application/cards/card-10/image.jpg"
            alt="Conceptual image for The Sun Also Rises"
            className="w-full rounded-lg object-cover"
          />
        </div>

        {/* <!-- Content Section --> */}
        <div className="mt-5">
          {/* <!-- Title --> */}
          <h2 className="text-title-50 mb-3 text-xl font-semibold">
            The Sun Also Rises by Ernest Hemingway
          </h2>
          {/* <!-- Description --> */}
          <p className="text-text-100">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            Ipsum has been the
          </p>
        </div>
      </div>
    </div>
  );
}
