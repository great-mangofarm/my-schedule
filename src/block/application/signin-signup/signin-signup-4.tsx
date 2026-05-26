import { Button } from '@/components/core/button';
import { Input } from '@/components/core/input';

export default function SignInSignup4() {
  return (
    <section className="bg-background-soft-50 flex min-h-screen items-center justify-center p-4">
      <div className="relative w-full max-w-md rounded-lg p-8">
        {/* <!-- Logo --> */}
        <div className="mb-16 flex justify-center">
          <a href="javascript:void(0)" className="">
            <img
              src="https://cdn-tailgrids.b-cdn.net/3.0/logo/tailgrids-logo.svg"
              alt="logo"
            />
          </a>
        </div>

        {/* <!-- Heading --> */}
        <div className="mb-10 text-center">
          <h1 className="text-title-50 mb-2 text-3xl font-semibold">
            Login to your account
          </h1>
          <p className="text-text-100 text-sm">
            Login to get started and enjoy full access
            <br />
            to all features & functions.
          </p>
        </div>

        {/* <!-- Email Form --> */}
        <div className="mb-4">
          <Input type="email" placeholder="Enter your email" />
        </div>

        <Button variant="primary" appearance="fill" className="w-full">
          Continue with email
        </Button>

        {/* <!-- Divider --> */}
        <div className="my-6 flex items-center">
          <div className="bg-background-soft-200 h-px flex-grow"></div>
          <p className="text-text-100 mx-4 text-sm font-medium">OR</p>
          <div className="bg-background-soft-200 h-px flex-grow"></div>
        </div>

        {/* <!-- Social Login Buttons --> */}
        <div className="space-y-3">
          {/* Google */}
          <Button
            variant="primary"
            appearance="outline"
            className="h-12 w-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M22.5015 12.2331C22.5015 11.3698 22.43 10.7398 22.2753 10.0864H12.2158V13.983H18.1205C18.0015 14.9514 17.3587 16.4097 15.9301 17.3897L15.91 17.5202L19.0907 19.9349L19.311 19.9564C21.3348 18.1247 22.5015 15.4297 22.5015 12.2331Z"
                fill="#4285F4"
              />
              <path
                d="M12.215 22.5001C15.1078 22.5001 17.5363 21.5667 19.3102 19.9567L15.9292 17.39C15.0245 18.0083 13.8102 18.44 12.215 18.44C9.38167 18.44 6.97693 16.6083 6.11971 14.0767L5.99406 14.0871L2.68681 16.5955L2.64355 16.7133C4.40543 20.1433 8.02448 22.5001 12.215 22.5001Z"
                fill="#34A853"
              />
              <path
                d="M6.11997 14.0767C5.89379 13.4234 5.76289 12.7233 5.76289 12C5.76289 11.2767 5.89379 10.5767 6.10807 9.92337L6.10208 9.78423L2.75337 7.2356L2.64381 7.28667C1.91765 8.71002 1.50098 10.3084 1.50098 12C1.50098 13.6917 1.91765 15.29 2.64381 16.7133L6.11997 14.0767Z"
                fill="#FBBC05"
              />
              <path
                d="M12.215 5.55997C14.2269 5.55997 15.584 6.41163 16.3579 7.12335L19.3817 4.23C17.5246 2.53834 15.1078 1.5 12.215 1.5C8.02451 1.5 4.40544 3.85665 2.64355 7.28662L6.10783 9.92332C6.97696 7.39166 9.38171 5.55997 12.215 5.55997Z"
                fill="#EB4335"
              />
            </svg>
            Sign up with Google
          </Button>

          {/* <!-- Facebook --> */}
          <Button
            variant="primary"
            appearance="outline"
            className="h-12 w-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 22.5C17.799 22.5 22.5 17.799 22.5 12C22.5 6.20101 17.799 1.5 12 1.5C6.20101 1.5 1.5 6.20101 1.5 12C1.5 17.1752 5.24405 21.4759 10.1712 22.3413V15.2112H7.5V12.2476H10.1712V9.98883C10.1712 7.4197 11.7411 6 14.1452 6C15.2959 6 16.5 6.20024 16.5 6.20024V8.7233H15.1726C13.8657 8.7233 13.4589 9.51428 13.4589 10.3252V12.2476H16.3767L15.9103 15.2112H13.4589V22.3759C12.9525 22.4534 12.4351 22.4952 11.9084 22.4996C11.9389 22.4999 11.9694 22.5 12 22.5Z"
                fill="#0866FF"
              />
            </svg>
            Sign up with Facebook
          </Button>

          {/* <!-- X (Twitter) --> */}
          <Button
            variant="primary"
            appearance="outline"
            className="h-12 w-full"
          >
            <svg
              className="hidden"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.9445 23L10.3951 15.0901L3.44789 23H0.508789L9.09111 13.2311L0.508789 1H8.05474L13.285 8.45502L19.8383 1H22.7774L14.5933 10.3165L23.4904 23H15.9445ZM19.2175 20.77H17.2388L4.71714 3.23H6.69613L11.7111 10.2532L12.5784 11.4719L19.2175 20.77Z"
                fill="#9CA3AF"
              />
            </svg>
            <svg
              className="block"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.9445 23L10.3951 15.0901L3.44789 23H0.508789L9.09111 13.2311L0.508789 1H8.05474L13.285 8.45502L19.8383 1H22.7774L14.5933 10.3165L23.4904 23H15.9445ZM19.2175 20.77H17.2388L4.71714 3.23H6.69613L11.7111 10.2532L12.5784 11.4719L19.2175 20.77Z"
                fill="#374151"
              />
            </svg>
            Sign up with X
          </Button>
        </div>

        {/* <!-- Footer Links --> */}
        <div className="mt-6 text-center">
          <p className="text-text-100 mb-1.5 text-base">
            Don't Have an account?
            <a
              href="javascript:void(0)"
              className="text-primary-500 hover:underline"
            >
              Sign Up
            </a>
          </p>

          <a
            href="javascript:void(0)"
            className="text-primary-500 text-base hover:underline"
          >
            Forgot password?
          </a>
        </div>
      </div>
    </section>
  );
}
