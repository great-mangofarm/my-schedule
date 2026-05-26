import { Button } from '@/components/core/button';
import { Checkbox } from '@/components/core/checkbox';
import { Input } from '@/components/core/input';
import { Eye } from '@tailgrids/icons';

export default function SignInSignup2() {
  return (
    <section className="bg-background-50 relative overflow-hidden py-20">
      <div className="absolute top-0 left-1/2 -translate-x-1/2">
        <svg
          width="789"
          height="317"
          viewBox="0 0 789 317"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_7861_4935)">
            <path
              d="M277.539 164.918L550.414 -183.385L668.152 -183.385L277.539 164.918Z"
              fill="#A855F7"
            />
          </g>
          <g filter="url(#filter1_f_7861_4935)">
            <path
              d="M120 196.257L422.609 -190L553.178 -190L120 196.257Z"
              fill="#5E84FC"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_7861_4935"
              x="157.539"
              y="-303.385"
              width="630.613"
              height="588.303"
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
                stdDeviation="60"
                result="effect1_foregroundBlur_7861_4935"
              />
            </filter>
            <filter
              id="filter1_f_7861_4935"
              x="0"
              y="-310"
              width="673.178"
              height="626.257"
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
                stdDeviation="60"
                result="effect1_foregroundBlur_7861_4935"
              />
            </filter>
          </defs>
        </svg>
      </div>
      <div className="mx-auto max-w-7xl px-4 xl:px-0">
        <div className="relative z-30 mx-auto max-w-lg">
          <div className="p-8 md:p-10">
            {/* <!-- Heading --> */}
            <div className="mb-6 text-center">
              <h1 className="text-title-50 mb-2 text-3xl font-bold">
                Welcome back
              </h1>
              <p className="text-text-100 text-sm">
                Login to continue your journey with us.
              </p>
            </div>

            {/* <!-- Social Login Buttons --> */}
            <div className="mb-4 space-y-3">
              {/* <!-- Google --> */}
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
                    d="M22.501 12.2331C22.501 11.3698 22.4296 10.7398 22.2748 10.0864H12.2153V13.983H18.12C18.001 14.9514 17.3582 16.4097 15.9296 17.3897L15.9096 17.5202L19.0902 19.9349L19.3106 19.9564C21.3343 18.1247 22.501 15.4297 22.501 12.2331Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12.2145 22.5001C15.1073 22.5001 17.5358 21.5667 19.3097 19.9567L15.9287 17.39C15.024 18.0083 13.8097 18.44 12.2145 18.44C9.38118 18.44 6.97645 16.6083 6.11922 14.0767L5.99358 14.0871L2.68632 16.5955L2.64307 16.7133C4.40495 20.1433 8.02399 22.5001 12.2145 22.5001Z"
                    fill="#34A853"
                  />
                  <path
                    d="M6.11997 14.0767C5.89379 13.4234 5.76289 12.7233 5.76289 12C5.76289 11.2767 5.89379 10.5767 6.10807 9.92337L6.10208 9.78423L2.75337 7.2356L2.64381 7.28667C1.91765 8.71002 1.50098 10.3084 1.50098 12C1.50098 13.6917 1.91765 15.29 2.64381 16.7133L6.11997 14.0767Z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12.2145 5.55997C14.2264 5.55997 15.5835 6.41163 16.3574 7.12335L19.3812 4.23C17.5241 2.53834 15.1074 1.5 12.2145 1.5C8.02402 1.5 4.40496 3.85665 2.64307 7.28662L6.10734 9.92332C6.97647 7.39166 9.38122 5.55997 12.2145 5.55997Z"
                    fill="#EB4335"
                  />
                </svg>
                <span>Sign up with Google</span>
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
                <span>Sign up with Facebook</span>
              </Button>
            </div>

            {/* <!-- Divider --> */}
            <div className="my-4 flex items-center">
              <div className="bg-background-soft-200 h-px grow"></div>
              <p className="text-text-100 mx-4 text-sm">
                Or sign in with email
              </p>
              <div className="bg-background-soft-200 h-px grow"></div>
            </div>

            {/* <!-- Email Form --> */}
            <form>
              <div className="mb-4">
                <Input
                  type="email"
                  label="Email"
                  placeholder="Enter your email"
                />
              </div>

              <div className="mb-4">
                <div className="relative">
                  <Input
                    type="password"
                    label="Password"
                    placeholder="Enter your password"
                    className="pr-10"
                  />
                  <span className="text-text-200 hover:text-text-50 absolute inset-y-0 top-7 right-0 flex items-center pr-3">
                    <Eye className="size-6" />
                  </span>
                </div>
              </div>

              <div className="mb-6 flex items-center justify-between">
                <Checkbox id="remember" label="Remember me" />
                <div className="shrink-0">
                  <a
                    href="javascript:void(0)"
                    className="text-title-50 text-sm font-medium hover:underline"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>

              <Button
                type="submit"
                variant="primary"
                appearance="fill"
                className="w-full"
              >
                Create Account
              </Button>
            </form>

            {/* <!-- Sign Up Link --> */}
            <div className="mt-6 text-left">
              <p className="text-text-100 text-base">
                Don't have an account?
                <a
                  href="javascript:void(0)"
                  className="text-primary-500 hover:underline"
                >
                  Sign Up
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
