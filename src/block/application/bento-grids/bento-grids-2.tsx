export default function BentoGrids2() {
  return (
    <section className="bg-background-50 py-14 lg:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 xl:px-0">
        {/* <!-- Main Grid Container --> */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-6">
          {/* <!-- Instant Preview Sharing - Top Left Card (Spans 2 columns) --> */}
          <div className="border-base-100 bg-background-soft-50 rounded-3xl border p-5 md:col-span-1 lg:col-span-3">
            {/* <!-- Placeholder Image Area --> */}
            <div>
              <img
                src="https://cdn-tailgrids.b-cdn.net/3.0/application/bento-grids/bento-grids-02/image-1.jpg"
                alt="Investing 101 "
                className="block w-full rounded-2xl"
              />
            </div>

            <div className="px-4 py-5">
              <h3 className="text-title-50 mb-2 text-2xl font-medium">
                Instant Preview Sharing
              </h3>
              <p className="text-text-100 text-base">
                Share your layout live with one link. No deployment needed.
              </p>
            </div>
          </div>

          {/* <!-- One-Click Color Themes - Top Right Card (Spans 2 columns) --> */}
          <div className="border-base-100 bg-background-soft-50 rounded-3xl border p-5 md:col-span-1 lg:col-span-3">
            {/* <!-- Placeholder Image Area --> */}
            <div>
              <img
                src="https://cdn-tailgrids.b-cdn.net/3.0/application/bento-grids/bento-grids-02/image-1.jpg"
                alt="Investing 101 "
                className="block w-full rounded-2xl"
              />
            </div>

            <div className="px-4 py-5">
              <h3 className="text-title-50 mb-2 text-2xl font-medium">
                One-Click Color Themes
              </h3>
              <p className="text-text-100 text-base">
                Instantly switch between modern presets or make your own.
              </p>
            </div>
          </div>

          {/* <!-- AI-Powered Layouts - Bottom Left Card --> */}
          <div className="border-base-100 bg-background-soft-50 rounded-3xl border p-5 lg:col-span-2">
            {/* <!-- Placeholder Image Area --> */}
            <div>
              <img
                src="https://cdn-tailgrids.b-cdn.net/3.0/application/bento-grids/bento-grids-02/image-3.jpg"
                alt="Investing 101 "
                className="block w-full rounded-2xl"
              />
            </div>

            <div className="px-4 py-5">
              <h3 className="text-title-50 mb-2 text-2xl font-medium">
                AI-Powered Layouts
              </h3>
              <p className="text-text-100 text-base">
                Generate responsive UI with smart AI assistance.
              </p>
            </div>
          </div>

          {/* <!-- Seamless Integration - Bottom Middle Card --> */}
          <div className="border-base-100 bg-background-soft-50 rounded-3xl border p-5 lg:col-span-2">
            {/* <!-- Placeholder Image Area --> */}
            <div>
              <img
                src="https://cdn-tailgrids.b-cdn.net/3.0/application/bento-grids/bento-grids-02/image-4.jpg"
                alt="Investing 101 "
                className="block w-full rounded-2xl"
              />
            </div>

            <div className="px-4 py-5">
              <h3 className="text-title-50 mb-2 text-2xl font-medium">
                Seamless Integration
              </h3>
              <p className="text-text-100 text-base">
                Pick-and-drop design that scales beautifully across all devices.
              </p>
            </div>
          </div>

          {/* <!-- Auto-Responsive by Default - Bottom Right Card --> */}
          <div className="border-base-100 bg-background-soft-50 rounded-3xl border p-5 lg:col-span-2">
            {/* <!-- Placeholder Image Area --> */}
            <div>
              <img
                src="https://cdn-tailgrids.b-cdn.net/3.0/application/bento-grids/bento-grids-02/image-5.jpg"
                alt="Investing 101 "
                className="block w-full rounded-2xl"
              />
            </div>

            <div className="px-4 py-5">
              <h3 className="text-title-50 mb-2 text-2xl font-medium">
                Auto-Responsive by Default
              </h3>
              <p className="text-text-100 text-base">
                Mobile-first design that works flawlessly across all devices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
