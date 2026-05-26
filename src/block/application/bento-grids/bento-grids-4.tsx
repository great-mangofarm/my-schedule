import { Button } from '@/components/core/button';
import { ArrowRight } from '@tailgrids/icons';

export default function BentoGrids4() {
  return (
    <section className="bg-background-soft-100 py-14 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 xl:px-0">
        {/* <!-- Main Grid Container --> */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* <!-- First Testimonial Card --> */}
          <div className="bg-background-50 rounded-3xl p-6">
            {/* <!-- Placeholder Image Area --> */}
            <div className="mb-6 h-48 w-full">
              <img
                src="https://cdn-tailgrids.b-cdn.net/3.0/application/bento-grids/bento-grids-04/image-1.jpg"
                alt="Investing 101"
                className="block h-full w-full rounded-2xl object-cover"
              />
              <img
                src="https://cdn-tailgrids.b-cdn.net/3.0/application/bento-grids/bento-grids-04/image-1-dark.jpg"
                alt="Investing 101"
                className="hidden h-full w-full rounded-2xl object-cover"
              />
            </div>

            <h3 className="text-title-50 text-lg font-semibold">
              Client Testimonials
            </h3>
            <p className="text-text-100 mt-2 text-base">
              Working with them felt like adding a powerhouse to our team.
            </p>
          </div>

          {/* <!-- Second Testimonial Card --> */}
          <div className="bg-background-50 rounded-3xl p-6">
            {/* <!-- Placeholder Image Area --> */}
            <div className="mb-6 h-48 w-full">
              <img
                src="https://cdn-tailgrids.b-cdn.net/3.0/application/bento-grids/bento-grids-04/image-1.jpg"
                alt="Investing 101"
                className="block h-full w-full rounded-2xl object-cover"
              />
              <img
                src="https://cdn-tailgrids.b-cdn.net/3.0/application/bento-grids/bento-grids-04/image-1-dark.jpg"
                alt="Investing 101"
                className="hidden h-full w-full rounded-2xl object-cover"
              />
            </div>

            <h3 className="text-title-50 text-lg font-semibold">
              Client Testimonials
            </h3>
            <p className="text-text-100 mt-2 text-base">
              Working with them felt like adding a powerhouse to our team.
            </p>
          </div>

          {/* <!-- Third Testimonial Card --> */}
          <div className="bg-background-50 rounded-xl p-6 shadow-sm">
            {/* <!-- Placeholder Image Area --> */}
            <div className="mb-6 h-48 w-full">
              <img
                src="https://cdn-tailgrids.b-cdn.net/3.0/application/bento-grids/bento-grids-04/image-1.jpg"
                alt="Investing 101"
                className="block h-full w-full rounded-2xl object-cover"
              />
              <img
                src="https://cdn-tailgrids.b-cdn.net/3.0/application/bento-grids/bento-grids-04/image-1-dark.jpg"
                alt="Investing 101"
                className="hidden h-full w-full rounded-2xl object-cover"
              />
            </div>
            <h3 className="text-title-50 text-lg font-semibold">
              Client Testimonials
            </h3>
            <p className="text-text-100 mt-2 text-base">
              Working with them felt like adding a powerhouse to our team.
            </p>
          </div>

          {/* <!-- Fourth Testimonial Card --> */}
          <div className="bg-background-50 rounded-xl p-6 shadow-sm">
            {/* <!-- Placeholder Image Area --> */}
            <div className="mb-6 h-48 w-full">
              <img
                src="https://cdn-tailgrids.b-cdn.net/3.0/application/bento-grids/bento-grids-04/image-1.jpg"
                alt="Investing 101"
                className="block h-full w-full rounded-2xl object-cover"
              />
              <img
                src="https://cdn-tailgrids.b-cdn.net/3.0/application/bento-grids/bento-grids-04/image-1-dark.jpg"
                alt="Investing 101"
                className="hidden h-full w-full rounded-2xl object-cover"
              />
            </div>
            <h3 className="text-title-50 text-lg font-semibold">
              Client Testimonials
            </h3>
            <p className="text-text-100 mt-2 text-base">
              Working with them felt like adding a powerhouse to our team.
            </p>
          </div>

          {/* <!-- Featured Project Card (spans 2 columns on larger screens) --> */}
          <div className="bg-background-50 rounded-xl p-6 shadow-sm md:col-span-1 lg:col-span-2">
            <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2">
              <div className="col-span-1">
                <div className="mb-5 h-78 sm:mb-0">
                  <img
                    src="https://cdn-tailgrids.b-cdn.net/3.0/application/bento-grids/bento-grids-04/image-2.jpg"
                    alt="Investing 101"
                    className="block h-full w-full rounded-2xl object-cover"
                  />
                  <img
                    src="https://cdn-tailgrids.b-cdn.net/3.0/application/bento-grids/bento-grids-04/image-2-dark.jpg"
                    alt="Investing 101"
                    className="hidden h-full w-full rounded-2xl object-cover"
                  />
                </div>
              </div>
              <div className="col-span-1 sm:p-5 lg:p-10">
                <h3 className="text-title-50 text-lg font-semibold">
                  Featured Project
                </h3>
                <p className="text-text-100 mt-2 mb-8 text-base">
                  E-commerce Transformation for LuxeSkin
                  <br />A full digital revamp that increased conversion by 37%
                  in just 3 months.
                </p>
                <Button>
                  <a>Explore All</a>
                  <ArrowRight />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
