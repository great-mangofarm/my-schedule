import { Button } from '@/components/core/button';
import { ChevronLeft } from '@tailgrids/icons';

export default function ErrorPage2() {
  return (
    <section className="bg-background-50 min-h-screen">
      <div className="mx-auto max-w-7xl overflow-hidden px-4 xl:px-0">
        <div className="items-center lg:flex">
          <div className="lg:w-1/2">
            <div className="mx-auto flex w-full flex-col justify-between gap-14 p-4 lg:max-w-[496px]">
              <div>
                <span className="text-primary-500 mb-1 block text-base font-medium">
                  Wrong Turn
                </span>
                <h1 className="text-title-50 mb-3 text-5xl font-semibold">
                  Page Not Found
                </h1>
                <p className="text-text-100 mb-8 text-base">
                  Don't worry, you can head back to the homepage or use the
                  navigation menu to find what you need
                </p>
                <Button variant="primary" appearance="outline">
                  <ChevronLeft />
                  Go back
                </Button>
              </div>
              <div>
                <h3 className="text-title-50 text-lg font-semibold">
                  Visit links
                </h3>
                <p className="text-text-100 text-sm">
                  To find more informations you can visit these links.
                </p>
                <ul className="mt-5 flex items-center gap-4">
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
          </div>
          <div className="lg:w-1/2">
            <div className="p-4">
              <img
                src="https://cdn-tailgrids.b-cdn.net/3.0/application/error/image-1.jpg"
                className="rounded-2xl"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
