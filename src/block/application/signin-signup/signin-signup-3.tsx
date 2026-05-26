import { Button } from '@/components/core/button';
import { Input } from '@/components/core/input';

export default function SignInSignup3() {
  return (
    <section className="bg-background-soft-100 flex h-screen items-center justify-center p-4">
      <div className="relative w-full max-w-7xl overflow-hidden rounded-3xl bg-[#081213] p-2.5">
        <svg
          className="absolute top-0 right-0"
          width="500"
          height="511"
          viewBox="0 0 500 511"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_8494_39496)">
            <circle cx="494.834" cy="16.1157" r="244.602" fill="#1D4ED8" />
          </g>
          <defs>
            <filter
              id="filter0_f_8494_39496"
              x="0.231934"
              y="-478.486"
              width="989.204"
              height="989.204"
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
                stdDeviation="125"
                result="effect1_foregroundBlur_8494_39496"
              />
            </filter>
          </defs>
        </svg>
        <svg
          className="absolute bottom-0 left-0"
          width="711"
          height="768"
          viewBox="0 0 711 768"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.5" filter="url(#filter0_f_11063_1271)">
            <circle cx="131.178" cy="579.953" r="279.329" fill="#1D4ED8" />
          </g>
          <defs>
            <filter
              id="filter0_f_11063_1271"
              x="-448.151"
              y="0.623535"
              width="1158.66"
              height="1158.66"
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
                stdDeviation="150"
                result="effect1_foregroundBlur_11063_1271"
              />
            </filter>
          </defs>
        </svg>
        <div className="relative z-20 flex flex-col lg:flex-row">
          {/* <!-- Left Side - Sign Up Form --> */}
          <div className="bg-background-50 w-full rounded-2xl p-4 md:p-10 lg:w-1/2 xl:px-24 xl:py-36">
            <div className="mx-auto max-w-md">
              <div className="mb-9">
                <h1 className="text-title-50 mb-2 text-3xl font-semibold sm:text-4xl">
                  Sign up
                </h1>
                <p className="text-text-100 mb-1 text-base">
                  Create an account and verify your details to start using.{' '}
                  <br />
                  Have an account already?
                  <a
                    href="javascript:void(0)"
                    className="text-primary-500 hover:underline"
                  >
                    Log in here
                  </a>
                </p>
              </div>

              {/* <!-- Email Form --> */}
              <div className="mb-4">
                <Input
                  type="email"
                  label="Email address"
                  placeholder="Enter your email address"
                />
              </div>

              <Button
                variant="primary"
                appearance="fill"
                className="mb-4 h-12 w-full"
              >
                Sign Up
              </Button>

              {/* <!-- Divider --> */}
              <div className="my-4 flex items-center">
                <div className="bg-background-soft-200 h-px flex-grow"></div>
                <p className="text-text-100 mx-4 text-sm">
                  Or sign in with email
                </p>
                <div className="bg-background-soft-200 h-px flex-grow"></div>
              </div>

              {/* <!-- Social Sign Up Buttons --> */}
              <div className="space-y-3">
                {/* <!-- Google --> */}
                <Button
                  variant="primary"
                  appearance="outline"
                  className="h-12 w-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                  >
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  <span>Continue with Google</span>
                </Button>

                {/* <!-- Apple --> */}
                <Button
                  variant="primary"
                  appearance="outline"
                  className="h-12 w-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M14.94 5.19A4.38 4.38 0 0 0 16 2a4.44 4.44 0 0 0-3 1.52 4.17 4.17 0 0 0-1 3.09 3.69 3.69 0 0 0 2.94-1.42zm2.52 7.44A4.51 4.51 0 0 1 19 16.5a10.88 10.88 0 0 1-1.36 2.74c-.8 1.15-1.64 2.31-3 2.33s-1.65-.77-3.09-.77-1.87.74-3.05.79-2.19-1.16-3-2.33a11.38 11.38 0 0 1-2.12-5.87c0-3.45 2.24-5.27 4.44-5.27 1.17 0 2.14.77 2.86.77s1.8-.85 3.17-.85a4.28 4.28 0 0 1 3.61 1.84 4.19 4.19 0 0 0-2 3.52z" />
                  </svg>
                  <span>Continue with Apple</span>
                </Button>
              </div>
            </div>
          </div>

          {/* <!-- Right Side - Branding --> */}
          <div className="text-white-100 flex w-full flex-col justify-between p-6 py-10 md:p-10 lg:w-1/2 xl:p-24">
            <div className="mb-10">
              {/* <!-- Logo --> */}
              <div className="mb-6 flex items-center justify-center md:justify-start">
                <a href="javascript:void(0)">
                  <img
                    src="https://cdn-tailgrids.b-cdn.net/3.0/logo/tailgrids-logo.svg"
                    alt="logo"
                  />
                </a>
              </div>

              {/* <!-- Description --> */}
              <p className="text-white-100/70 mb-4 text-center md:text-start">
                Beautifully crafted Tailwind CSS UI ,
                <i className="text-white-100/90">
                  Components <br />
                  Blocks and Templates
                </i>
              </p>
            </div>

            {/* <!-- Contact Info --> */}
            <div className="mt-auto">
              <p className="text-white-100/70 text-center text-sm md:text-start">
                You can also contact us via <br />
                <a
                  href="mailto:support@tailgrids.com"
                  className="text-white-100 hover:underline"
                >
                  support@tailgrids.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
