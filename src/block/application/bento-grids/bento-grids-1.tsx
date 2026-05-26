export default function BentoGrids1() {
  return (
    <section className="bg-background-50 py-14 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 xl:px-0">
        {/* <!-- Main Grid Container --> */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {/* <!-- Visual-first Design Tools - Left Card (Spans full height) --> */}
          <div className="border-base-100 bg-background-soft-50 relative flex flex-col justify-between overflow-hidden rounded-3xl border">
            <div className="p-5 sm:p-14">
              <div className="max-w-md">
                <h2 className="text-title-50 mb-4 text-3xl font-medium sm:text-4xl">
                  Visual-first Design Tools
                </h2>
                <p className="text-text-100 pr-10 text-base">
                  Drag-drop and reuse components without writing a single line
                  of code.
                </p>
              </div>
            </div>

            {/* <!-- Placeholder Image Area --> */}
            <div className="flex justify-center px-5 sm:ml-20 sm:justify-end sm:px-0">
              <img
                src="https://cdn-tailgrids.b-cdn.net/3.0/application/bento-grids/bento-grids-01/image-1.jpg"
                alt="Investing 101 "
                className="block w-full rounded-t-3xl sm:rounded-tl-3xl sm:rounded-tr-none sm:rounded-br-3xl"
              />
              <img
                src="https://cdn-tailgrids.b-cdn.net/3.0/application/bento-grids/bento-grids-01/image-1-dark.jpg"
                alt="Investing 101 "
                className="hidden w-full rounded-t-3xl sm:rounded-tl-3xl sm:rounded-tr-none sm:rounded-br-3xl"
              />
            </div>
          </div>

          {/* Right Column - Contains two cards stacked vertically */}
          <div className="grid grid-rows-2 gap-5">
            {/* <!-- Real-time Collaboration - Top Right Card --> */}
            <div className="border-base-100 bg-background-soft-50 relative flex flex-col justify-between overflow-hidden rounded-3xl border">
              <div className="p-5 sm:p-14">
                <div className="max-w-md">
                  <h2 className="text-title-50 mb-4 text-3xl font-medium sm:text-4xl">
                    Real-time Collaboration
                  </h2>
                  <p className="text-text-100 pr-10 text-base">
                    Work with your team live — just like Figma, but for
                    code-ready components.
                  </p>
                </div>
              </div>

              {/* <!-- Placeholder Image Area --> */}
              <div className="mx-auto rounded-t-3xl px-5 sm:px-14">
                <img
                  src="https://cdn-tailgrids.b-cdn.net/3.0/application/bento-grids/bento-grids-01/image-2.jpg"
                  alt="Investing 101"
                  className="block w-full rounded-t-3xl"
                />
                <img
                  src="https://cdn-tailgrids.b-cdn.net/3.0/application/bento-grids/bento-grids-01/image-2-dark.jpg"
                  alt="Investing 101"
                  className="hidden w-full rounded-t-3xl"
                />
              </div>
            </div>

            {/* <!-- Pre-built Layout Presets - Bottom Right Card --> */}
            <div className="border-base-100 bg-background-soft-50 relative flex flex-col justify-between overflow-hidden rounded-3xl border">
              <div className="p-5 sm:p-14">
                <div className="max-w-md">
                  <h2 className="text-title-50 mb-4 text-3xl font-medium sm:text-4xl">
                    Pre-built Layout Presets
                  </h2>
                  <p className="text-text-100 pr-10 text-base">
                    Choose from professionally designed sections to speed up
                    your flow.
                  </p>
                </div>
              </div>
              {/* <!-- Placeholder Image Area --> */}
              <div className="mx-auto rounded-t-3xl px-5 sm:px-14">
                <img
                  src="https://cdn-tailgrids.b-cdn.net/3.0/application/bento-grids/bento-grids-01/image-3.jpg"
                  alt="Investing 101"
                  className="block w-full rounded-t-3xl"
                />
                <img
                  src="https://cdn-tailgrids.b-cdn.net/3.0/application/bento-grids/bento-grids-01/image-3-dark.jpg"
                  alt="Investing 101"
                  className="hidden w-full rounded-t-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
