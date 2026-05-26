import { ChevronRight } from '@tailgrids/icons';

export default function Blog2() {
  return (
    <section className="bg-background-50 py-14 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 xl:px-0">
        {/* <!-- AI Cards Section --> */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* <!-- Announcement Card --> */}
          <div className="text-white-100 bg-primary-600 flex flex-col justify-center rounded-2xl p-10">
            <div>
              <span className="bg-background-50/15 rounded-lg px-2 py-1.5 text-xs font-medium tracking-wider uppercase">
                Announcement
              </span>
              <h3 className="mt-6 mb-4 text-xl font-semibold sm:text-2xl">
                <a href="javascript:void(0)">
                  {' '}
                  The Impact of AI on Job Markets and Employment{' '}
                </a>
              </h3>
              <p className="text-white-100/70 mb-6 text-base">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum ....
              </p>
            </div>
            <div>
              <a
                href="javascript:void(0)"
                className="hover:bg-primary-600 bg-background-50 hover:text-white-100 inline-flex items-center justify-center gap-1 rounded-lg px-4 py-2.5 text-base font-medium text-blue-600 transition-colors"
              >
                Read More
                <ChevronRight />
              </a>
            </div>
          </div>

          {/* <!-- News Card 1 --> */}
          <div className="bg-background-50 border-base-100 overflow-hidden rounded-xl border shadow-sm">
            <div className="p-4">
              <div className="mb-6 flex items-center">
                <div className="pr-3">
                  <span className="text-text-50 text-sm font-medium">News</span>
                </div>
                <div className="bg-background-soft-300 h-1.5 w-1.5 rounded-full"></div>
                <div className="pl-3">
                  <span className="text-text-100 text-xs">10 Feb 2023</span>
                </div>
              </div>
              <div className="mb-4 overflow-hidden rounded-xl">
                <img
                  src="https://cdn-tailgrids.b-cdn.net/3.0/application/blogs/blog-02/image-1.jpg"
                  alt="AI Smart Devices"
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="text-title-50 mb-2 text-lg font-semibold">
                <a href="javascript:void(0)">
                  The Rise of AI in Smart Devices and Automation
                </a>
              </h3>
              <p className="text-text-100 text-base">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                ...
              </p>
            </div>
          </div>

          {/* <!-- News Card 2 --> */}
          <div className="bg-background-50 border-base-100 overflow-hidden rounded-xl border shadow-sm">
            <div className="p-4">
              <div className="mb-6 flex items-center">
                <div className="pr-3">
                  <span className="text-text-50 text-sm font-medium">News</span>
                </div>
                <div className="bg-background-soft-300 h-1.5 w-1.5 rounded-full"></div>
                <div className="pl-3">
                  <span className="text-text-100 text-xs">05 Mar 2025</span>
                </div>
              </div>
              <div className="mb-4 overflow-hidden rounded-xl">
                <img
                  src="https://cdn-tailgrids.b-cdn.net/3.0/application/blogs/blog-02/image-2.jpg"
                  alt="AI Smart Devices"
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="text-title-50 mb-2 text-lg font-semibold">
                <a href="javascript:void(0)">
                  Exploring the Future of Artificial Intelligence
                </a>
              </h3>
              <p className="text-text-100 text-base">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                ...
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
