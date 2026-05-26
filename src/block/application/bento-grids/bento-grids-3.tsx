import { Button } from '@/components/core/button';
import { ArrowRight } from '@tailgrids/icons';

export default function BentoGrids3() {
  return (
    <section className="bg-background-soft-100 py-14 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 xl:px-0">
        {/* <!-- Main Grid Container --> */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12">
          {/* <!-- Team Member Card - Blue --> */}
          <div className="bg-primary-500 relative flex flex-col justify-end overflow-hidden rounded-3xl p-7 lg:col-span-3">
            <h2 className="text-white-100 text-6xl font-normal">12+</h2>
            <p className="text-white-100 mt-1 text-base">Team Member</p>
            <svg
              className="absolute top-0 right-0"
              xmlns="http://www.w3.org/2000/svg"
              width="270"
              height="226"
              viewBox="0 0 270 226"
              fill="none"
            >
              <g filter="url(#filter0_f_8864_1503)">
                <circle cx="264.665" cy="-40.3421" r="123.342" fill="#38BDF8" />
              </g>
              <defs>
                <filter
                  id="filter0_f_8864_1503"
                  x="-64.6522"
                  y="-369.659"
                  width="658.634"
                  height="658.634"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="102.987"
                    result="effect1_foregroundBlur_8864_1503"
                  />
                </filter>
              </defs>
            </svg>
          </div>

          {/* <!-- Our Mission Card 1 --> */}
          <div className="bg-background-50 rounded-3xl p-7 lg:col-span-5">
            <div className="mb-5 h-16">
              <img
                src="https://cdn-tailgrids.b-cdn.net/3.0/application/bento-grids/bento-grids-03/image-1.jpg"
                alt="Investing 101 "
                className="block rounded-xl"
              />
              <img
                src="https://cdn-tailgrids.b-cdn.net/3.0/application/bento-grids/bento-grids-03/image-1-dark.jpg"
                alt="Investing 101 "
                className="hidden rounded-xl"
              />
            </div>
            <h3 className="text-title-50 text-lg font-semibold">Our Mission</h3>
            <p className="text-text-100 mt-2 text-base">
              Building bold brands and digital experiences that matter to our
              users.
            </p>
          </div>

          {/* <!-- Our Mission Card 2 --> */}
          <div className="bg-background-50 rounded-3xl p-7 lg:col-span-4">
            <div className="mb-5 h-16">
              <img
                src="https://cdn-tailgrids.b-cdn.net/3.0/application/bento-grids/bento-grids-03/image-1.jpg"
                alt="Investing 101 "
                className="rounded-xl"
              />
              <img
                src="https://cdn-tailgrids.b-cdn.net/3.0/application/bento-grids/bento-grids-03/image-1-dark.jpg"
                alt="Investing 101 "
                className="hidden rounded-xl"
              />
            </div>
            <h3 className="text-title-50 text-lg font-semibold">Our Mission</h3>
            <p className="text-text-100 mt-2 text-base">
              Building bold brands and digital experiences that matter to our
              users.
            </p>
          </div>

          {/* <!-- Client Testimonials Card --> */}
          <div className="bg-background-50 rounded-xl p-5 lg:col-span-4">
            <div className="mb-5">
              <img
                src="https://cdn-tailgrids.b-cdn.net/3.0/application/bento-grids/bento-grids-03/image-2.jpg"
                alt="Investing 101 "
                className="block w-full rounded-2xl"
              />
              <img
                src="https://cdn-tailgrids.b-cdn.net/3.0/application/bento-grids/bento-grids-03/image-2-dark.jpg"
                alt="Investing 101 "
                className="hidden w-full rounded-2xl"
              />
            </div>
            <div className="px-2">
              <h3 className="text-title-50 text-lg font-semibold">
                Client Testimonials
              </h3>
              <p className="text-text-100 mt-2 text-base">
                Working with them felt like adding a powerhouse to our team.
              </p>
            </div>
          </div>

          {/* <!-- Featured Project Card --> */}
          <div className="bg-background-50 rounded-3xl p-5 lg:col-span-8">
            <div className="grid grid-cols-1 items-center lg:grid-cols-2">
              <div className="col-span-1">
                <div className="mb-5 h-82 sm:mb-0">
                  <img
                    src="https://cdn-tailgrids.b-cdn.net/3.0/application/bento-grids/bento-grids-03/image-3.jpg"
                    alt="Investing 101"
                    className="block h-full w-full rounded-2xl object-cover"
                  />
                  <img
                    src="https://cdn-tailgrids.b-cdn.net/3.0/application/bento-grids/bento-grids-03/image-3-dark.jpg"
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
                  <a href="javascript:void(0)">Explore All</a>
                  <ArrowRight />
                </Button>
              </div>
            </div>
          </div>

          {/* <!-- Services Card --> */}
          <div className="bg-background-50 rounded-3xl p-5 lg:col-span-7">
            <div className="grid grid-cols-1 items-center lg:grid-cols-2">
              <div className="mb-6 h-48 sm:mb-0">
                <img
                  src="https://cdn-tailgrids.b-cdn.net/3.0/application/bento-grids/bento-grids-03/image-4.jpg"
                  alt="Investing 101"
                  className="block h-full w-full rounded-2xl object-cover"
                />
                <img
                  src="https://cdn-tailgrids.b-cdn.net/3.0/application/bento-grids/bento-grids-03/image-4-dark.jpg"
                  alt="Investing 101"
                  className="hidden h-full w-full rounded-2xl object-cover"
                />
              </div>

              <div className="sm:p-7">
                <h3 className="text-title-50 text-lg font-semibold">
                  Services
                </h3>
                <p className="text-text-100 mt-2 text-base">
                  Design. Development. Marketing.
                  <br />
                  From UX/UI to full-stack.
                </p>
              </div>
            </div>
          </div>

          {/* <!-- Auto-Responsive Card - Dark --> */}
          <div className="rounded-3xl bg-gray-800 p-5 lg:col-span-5">
            <div className="mb-5 h-16">
              <img
                src="https://cdn-tailgrids.b-cdn.net/3.0/application/bento-grids/bento-grids-03/image-5.png"
                alt="Investing 101"
                className="rounded-xl"
              />
            </div>
            <h3 className="text-white-100 text-lg font-semibold">
              Auto-Responsive by Default
            </h3>
            <p className="text-text-200 mt-2 text-base">
              Mobile-first design that scales beautifully across all devices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
