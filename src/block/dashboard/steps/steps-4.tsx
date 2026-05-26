export default function Steps4() {
  return (
    <div className="bg-background-50 flex h-screen items-center justify-center px-4 py-10">
      <div className="mx-auto max-w-md">
        <ul className="relative m-0 list-none p-0">
          {/* <!-- Step 1: Personal Info (Active) --> */}
          <li className="before:bg-primary-500 relative flex items-center pb-8 pl-8 before:absolute before:top-6 before:left-3 before:h-10 before:w-0.5 before:-translate-x-0.5 before:transform">
            <div className="bg-primary-500 text-white-100 absolute left-0 z-10 flex h-6 w-6 items-center justify-center rounded-full text-sm font-medium">
              1
            </div>
            <span className="text-text-50 ml-3 text-lg font-normal">
              Personal Info
            </span>
          </li>

          {/* <!-- Step 2: Select Widgets (Active) --> */}
          <li className="before:bg-background-soft-400 relative flex items-center pb-8 pl-8 before:absolute before:top-6 before:left-3 before:h-10 before:w-0.5 before:-translate-x-0.5 before:transform">
            <div className="bg-background-50 border-base-50 text-text-50 absolute left-0 z-10 flex h-6 w-6 items-center justify-center rounded-full border text-sm font-medium">
              2
            </div>
            <span className="text-text-50 ml-3 text-lg font-normal">
              Select Widgets
            </span>
          </li>

          {/* <!-- Step 3: Connect Data (Inactive) --> */}
          <li className="before:bg-background-soft-400 relative flex items-center pb-8 pl-8 before:absolute before:top-6 before:left-3 before:h-10 before:w-0.5 before:-translate-x-0.5 before:transform">
            <div className="bg-background-50 border-base-50 text-text-50 absolute left-0 z-10 flex h-6 w-6 items-center justify-center rounded-full border text-sm font-medium">
              3
            </div>
            <span className="text-text-50 ml-3 text-lg font-normal">
              Connect Data
            </span>
          </li>

          {/* <!-- Step 4: Set Permissions (Inactive) --> */}
          <li className="before:bg-background-soft-400 relative flex items-center pb-8 pl-8 before:absolute before:top-6 before:left-3 before:h-10 before:w-0.5 before:-translate-x-0.5 before:transform">
            <div className="bg-background-50 border-base-50 text-text-50 absolute left-0 z-10 flex h-6 w-6 items-center justify-center rounded-full border text-sm font-medium">
              4
            </div>
            <span className="text-text-50 ml-3 text-lg font-normal">
              Set Permissions
            </span>
          </li>

          {/* <!-- Step 5: Finish Setup (Inactive) --> */}
          <li className="relative flex items-center pl-8">
            <div className="bg-background-50 border-base-50 text-text-50 absolute left-0 z-10 flex h-6 w-6 items-center justify-center rounded-full border text-sm font-medium">
              5
            </div>
            <span className="text-text-50 ml-3 text-lg font-normal">
              Finish Setup
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
