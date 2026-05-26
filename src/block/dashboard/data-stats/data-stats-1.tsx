export default function DataStats1() {
  return (
    <div className="bg-background-soft-100 flex h-screen items-center justify-center px-4 py-10">
      <div className="bg-background-50 w-full max-w-[346px] rounded-2xl p-5">
        <div className="mb-7 flex items-center">
          <img
            src="https://cdn-tailgrids.b-cdn.net/3.0/dashboard/data-stats/data-stat-01/mailchimp.svg"
            className="h-11 w-11 shrink-0 rounded-full"
            alt="mailchimp"
          />
          <div className="ml-3">
            <h3 className="text-title-50 text-base leading-6 font-semibold">
              MailChimp
            </h3>
            <p className="text-text-100 text-xs leading-4">
              Marketing platform
            </p>
          </div>
        </div>
        <div className="flex items-end justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5">
              <h4 className="text-title-50 text-xl font-semibold">$1,232.00</h4>
              <span className="text-text-success-50 text-xs">+20%</span>
            </div>
            <p className="text-text-100 text-xs">Conversions value</p>
          </div>
          <div>
            <div className="mb-1 flex items-center gap-1.5">
              <span className="shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <circle
                    cx="8"
                    cy="8"
                    r="6.8"
                    stroke="var(--border-color-base-100)"
                    stroke-width="2.4"
                  />
                  <mask id="path-2-inside-1_10613_26666" fill="white">
                    <path d="M14.8138 8C15.4689 8 16.009 7.46601 15.9122 6.81806C15.7179 5.51753 15.205 4.27849 14.4112 3.21494C13.3797 1.83287 11.9291 0.821133 10.2758 0.330533C8.62248 -0.160067 6.85488 -0.103263 5.23646 0.492479C3.99104 0.950923 2.88527 1.70963 2.01308 2.69369C1.57852 3.18398 1.73996 3.92614 2.28907 4.28348C2.83818 4.64083 3.56566 4.47371 4.02999 4.01153C4.60114 3.44304 5.29114 3.00048 6.05603 2.71893C7.19448 2.29986 8.43787 2.2599 9.60088 2.60501C10.7639 2.95011 11.7843 3.66181 12.5099 4.63401C12.9974 5.2872 13.3343 6.03448 13.5029 6.82249C13.64 7.46313 14.1586 8 14.8138 8Z" />
                  </mask>
                  <path
                    d="M14.8138 8C15.4689 8 16.009 7.46601 15.9122 6.81806C15.7179 5.51753 15.205 4.27849 14.4112 3.21494C13.3797 1.83287 11.9291 0.821133 10.2758 0.330533C8.62248 -0.160067 6.85488 -0.103263 5.23646 0.492479C3.99104 0.950923 2.88527 1.70963 2.01308 2.69369C1.57852 3.18398 1.73996 3.92614 2.28907 4.28348C2.83818 4.64083 3.56566 4.47371 4.02999 4.01153C4.60114 3.44304 5.29114 3.00048 6.05603 2.71893C7.19448 2.29986 8.43787 2.2599 9.60088 2.60501C10.7639 2.95011 11.7843 3.66181 12.5099 4.63401C12.9974 5.2872 13.3343 6.03448 13.5029 6.82249C13.64 7.46313 14.1586 8 14.8138 8Z"
                    stroke="var(--color-primary-500)"
                    stroke-width="6.4"
                    mask="url(#path-2-inside-1_10613_26666)"
                  />
                </svg>
              </span>
              <span className="text-text-100 text-xs">35%</span>
            </div>
            <p className="text-text-100 text-xs">Engagement</p>
          </div>
        </div>
      </div>
    </div>
  );
}
