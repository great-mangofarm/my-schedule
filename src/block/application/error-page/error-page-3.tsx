import { Button } from '@/components/core/button';
import { Input } from '@/components/core/input';
import { Search1 } from '@tailgrids/icons';

export default function ErrorPage3() {
  return (
    <section className="bg-background-50 relative flex h-screen items-center justify-center overflow-hidden">
      <svg
        className="absolute top-0 left-1/2 hidden -translate-x-1/2"
        xmlns="http://www.w3.org/2000/svg"
        width="844"
        height="179"
        viewBox="0 0 844 179"
        fill="none"
      >
        <path
          d="M1.78433 -44.6406L843.529 -44.6405M313.155 178L313.155 -92M268.629 178L268.629 -92M224.102 178L224.102 -92M179.576 178L179.576 -92M135.05 178L135.05 -92M90.5234 178L90.5234 -92M45.997 178L45.9971 -92M1.4707 178L1.47072 -92M1.78433 -0.17521L843.529 -0.175134M357.621 178L357.621 -92M1.78433 44.2902L843.529 44.2903M402.086 178L402.086 -92M1.78433 88.7556L843.529 88.7557M446.551 178L446.551 -92M1.78433 133.221L843.529 133.221M491.017 178L491.017 -92M1.78433 177.686L843.529 177.686M535.482 178L535.482 -92M579.769 178L579.769 -92M623.677 178L623.677 -92M667.585 178V-92M711.492 178V-92M755.4 178V-92M799.308 178V-92M843.216 178V-92"
          stroke="url(#paint0_radial_8045_16030)"
        />
        <defs>
          <radialGradient
            id="paint0_radial_8045_16030"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(422.5 43) scale(421.029 135)"
          >
            <stop stop-color="white" stop-opacity="0.15" />
            <stop offset="1" stop-color="#E5E7EB" stop-opacity="0" />
          </radialGradient>
        </defs>
      </svg>
      <svg
        className="absolute top-0 left-1/2 block -translate-x-1/2"
        xmlns="http://www.w3.org/2000/svg"
        width="844"
        height="179"
        viewBox="0 0 844 179"
        fill="none"
      >
        <path
          d="M1.78433 -44.6406L843.529 -44.6405M313.155 178L313.155 -92M268.629 178L268.629 -92M224.102 178L224.102 -92M179.576 178L179.576 -92M135.05 178L135.05 -92M90.5234 178L90.5234 -92M45.997 178L45.9971 -92M1.4707 178L1.47072 -92M1.78433 -0.17521L843.529 -0.175134M357.621 178L357.621 -92M1.78433 44.2902L843.529 44.2903M402.086 178L402.086 -92M1.78433 88.7556L843.529 88.7557M446.551 178L446.551 -92M1.78433 133.221L843.529 133.221M491.017 178L491.017 -92M1.78433 177.686L843.529 177.686M535.482 178L535.482 -92M579.769 178L579.769 -92M623.677 178L623.677 -92M667.585 178V-92M711.492 178V-92M755.4 178V-92M799.308 178V-92M843.216 178V-92"
          stroke="url(#paint0_radial_8045_16030)"
        />
        <defs>
          <radialGradient
            id="paint0_radial_8045_16030"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(422.5 43) scale(421.029 135)"
          >
            <stop stop-color="#E5E7EB" />
            <stop offset="1" stop-color="#E5E7EB" stop-opacity="0" />
          </radialGradient>
        </defs>
      </svg>
      <div className="relative z-20 mx-auto max-w-7xl px-4 xl:px-0">
        <div className="mx-auto max-w-[550px]">
          <span className="text-primary-500 mb-2 block text-center text-base font-medium uppercase">
            404 ERROR
          </span>
          <h1 className="text-title-50 mb-3 text-center text-4xl font-semibold sm:text-5xl">
            Something Went Wrong
          </h1>
          <p className="text-text-100 text-center text-base">
            Don't worry, you can head back to the homepage or use the navigation
            menu to find what you need
          </p>
          <form action="" className="mt-9">
            <div className="mx-auto flex flex-col gap-3 sm:flex-row lg:w-[450px]">
              <div className="relative w-full flex-1">
                <Input
                  type="text"
                  placeholder="Search here..."
                  className="pl-10"
                />
                <Search1 className="text-text-100 pointer-events-none absolute top-1/2 left-4 size-5 -translate-y-1/2" />
              </div>
              <Button variant="primary" appearance="fill">
                Search
              </Button>
            </div>
          </form>
          <p className="text-text-100 mt-16 text-center">
            Visit these links to find more info.
          </p>
          <ul className="mt-5 flex items-center justify-center gap-4">
            <li>
              <a
                href="javascript:void(0)"
                className="text-text-50 text-sm font-medium"
              >
                Documentation
              </a>
            </li>
            <li>
              <span className="bg-background-soft-500 block h-1 w-1 rounded-full"></span>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                className="text-text-50 text-sm font-medium"
              >
                Blogs
              </a>
            </li>
            <li>
              <span className="bg-background-soft-500 block h-1 w-1 rounded-full"></span>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                className="text-text-50 text-sm font-medium"
              >
                Contact us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
