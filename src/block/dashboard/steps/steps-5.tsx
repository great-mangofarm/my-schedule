import {
  CheckCircle1,
  SlidersDoubleHorizontal,
  Telephone1,
  User2,
} from '@tailgrids/icons';

export default function Steps5() {
  return (
    <div className="bg-background-50 flex h-screen items-center justify-center px-4 py-10">
      <div className="mx-auto max-w-md">
        <ul className="relative m-0 list-none p-0">
          {/* <!-- Step 1: Personal Info (Active) --> */}
          <li className="before:bg-primary-500 relative flex items-center pb-8 pl-8 before:absolute before:top-6 before:left-4 before:h-14 before:w-0.5 before:-translate-x-0.5 before:transform">
            <div className="bg-primary-500 text-white-100 absolute left-0 z-10 flex h-7 w-7 items-center justify-center rounded-full font-medium">
              <User2 className="size-4" />
            </div>
            <div className="ml-3 text-left">
              <span className="text-text-50 text-sm font-medium">
                Personal Info
              </span>
              <p className="text-text-100 text-xs">
                Tell us a little about yourself.
              </p>
            </div>
          </li>
          {/* <!-- Step 2: Personal Info (Active) --> */}
          <li className="before:bg-primary-500 relative flex items-center pb-8 pl-8 before:absolute before:top-6 before:left-4 before:h-14 before:w-0.5 before:-translate-x-0.5 before:transform">
            <div className="bg-primary-500 text-white-100 absolute left-0 z-10 flex h-7 w-7 items-center justify-center rounded-full font-medium">
              <Telephone1 className="size-4" />
            </div>
            <div className="ml-3 text-left">
              <span className="text-text-50 text-sm font-medium">
                Contact Details
              </span>
              <p className="text-text-100 text-xs">
                Add your email and phone number.
              </p>
            </div>
          </li>
          {/* <!-- Step 3: Preferences (Active) --> */}
          <li className="before:bg-background-soft-200 relative flex items-center pb-8 pl-8 before:absolute before:top-6 before:left-4 before:h-14 before:w-0.5 before:-translate-x-0.5 before:transform">
            <div className="text-title-50 bg-background-soft-100 absolute left-0 z-10 flex h-7 w-7 items-center justify-center rounded-full font-medium">
              <SlidersDoubleHorizontal className="size-4" />
            </div>
            <div className="ml-3 text-left">
              <span className="text-text-50 text-sm font-medium">
                Preferences
              </span>
              <p className="text-text-100 text-xs">
                Add your email and phone number.
              </p>
            </div>
          </li>
          {/* <!-- Step 4: Personal Info (Active) --> */}
          <li className="before:bg-background-soft-200 relative flex items-center pb-8 pl-8 before:absolute before:top-6 before:left-4 before:h-14 before:w-0.5 before:-translate-x-0.5 before:transform">
            <div className="text-title-50 bg-background-soft-100 absolute left-0 z-10 flex h-7 w-7 items-center justify-center rounded-full font-medium">
              <User2 className="size-4" />
            </div>
            <div className="ml-3 text-left">
              <span className="text-text-50 text-sm font-medium">
                Verification
              </span>
              <p className="text-text-100 text-xs">
                Secure your account with a quick check.
              </p>
            </div>
          </li>
          {/* <!-- Step 5: Personal Info (Active) --> */}
          <li className="relative flex items-center pb-8 pl-8">
            <div className="text-title-50 bg-background-soft-100 absolute left-0 z-10 flex h-7 w-7 items-center justify-center rounded-full font-medium">
              <CheckCircle1 className="size-4" />
            </div>
            <div className="ml-3 text-left">
              <span className="text-text-50 text-sm font-medium">Complete</span>
              <p className="text-text-100 text-xs">
                You’re ready to get started!
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
