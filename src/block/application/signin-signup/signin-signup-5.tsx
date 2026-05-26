import { Button } from '@/components/core/button';
import { Input } from '@/components/core/input';

export default function SignInSignup5() {
  return (
    <section className="bg-background-50">
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="mx-auto flex w-full max-w-7xl flex-col overflow-hidden px-4 lg:flex-row xl:px-0">
          {/* <!-- Left Side - Branding and Testimonial --> */}
          <div className="border-base-100 bg-background-soft-100 relative flex w-full flex-col justify-center overflow-hidden border-r p-4 lg:w-1/2 lg:p-10 xl:p-0">
            <svg
              className="absolute top-0 right-0"
              xmlns="http://www.w3.org/2000/svg"
              width="320"
              height="181"
              viewBox="0 0 320 181"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.633603 32.0529L320 32.053L320 31.6935L0.633603 31.6935L0.633603 32.0529Z"
                fill="url(#paint0_linear_8526_5622)"
                fill-opacity="0.3"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M146.315 180.132L146.315 -1.5184e-05L145.956 -1.5199e-05L145.956 180.132L146.315 180.132Z"
                fill="url(#paint1_linear_8526_5622)"
                fill-opacity="0.3"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.6336 69.0724L320 69.0724L320 68.713L0.6336 68.713L0.6336 69.0724Z"
                fill="url(#paint2_linear_8526_5622)"
                fill-opacity="0.3"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M182.736 180.132L182.736 -1.2e-05L182.376 -1.2015e-05L182.376 180.132L182.736 180.132Z"
                fill="url(#paint3_linear_8526_5622)"
                fill-opacity="0.3"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.633804 180.132L0.63382 -2.79199e-05L0.274414 -2.79349e-05L0.274398 180.132L0.633804 180.132Z"
                fill="url(#paint4_linear_8526_5622)"
                fill-opacity="0.3"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.633597 106.093L320 106.093L320 105.733L0.633597 105.733L0.633597 106.093Z"
                fill="url(#paint5_linear_8526_5622)"
                fill-opacity="0.3"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M219.156 180.132L219.156 -8.8161e-06L218.796 -8.83109e-06L218.796 180.132L219.156 180.132Z"
                fill="url(#paint6_linear_8526_5622)"
                fill-opacity="0.3"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M37.0544 180.132L37.0544 -2.47359e-05L36.6949 -2.47509e-05L36.6949 180.132L37.0544 180.132Z"
                fill="url(#paint7_linear_8526_5622)"
                fill-opacity="0.3"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.633593 143.112L320 143.112L320 142.753L0.633593 142.753L0.633593 143.112Z"
                fill="url(#paint8_linear_8526_5622)"
                fill-opacity="0.3"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M255.576 180.132L255.576 -5.63211e-06L255.217 -5.64711e-06L255.217 180.132L255.576 180.132Z"
                fill="url(#paint9_linear_8526_5622)"
                fill-opacity="0.3"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M73.4744 180.132L73.4744 -2.1552e-05L73.115 -2.15669e-05L73.115 180.132L73.4744 180.132Z"
                fill="url(#paint10_linear_8526_5622)"
                fill-opacity="0.3"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M291.996 180.132L291.996 -2.44817e-06L291.637 -2.46316e-06L291.637 180.132L291.996 180.132Z"
                fill="url(#paint11_linear_8526_5622)"
                fill-opacity="0.3"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M109.895 180.132L109.895 -1.8368e-05L109.536 -1.8383e-05L109.536 180.132L109.895 180.132Z"
                fill="url(#paint12_linear_8526_5622)"
                fill-opacity="0.3"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_8526_5622"
                  x1="197.703"
                  y1="-7.06655e-06"
                  x2="138.73"
                  y2="167.583"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#B2B2B2" />
                  <stop offset="1" stop-color="#B2B2B2" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_8526_5622"
                  x1="197.703"
                  y1="-7.06655e-06"
                  x2="138.73"
                  y2="167.583"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#B2B2B2" />
                  <stop offset="1" stop-color="#B2B2B2" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_8526_5622"
                  x1="197.703"
                  y1="-7.06655e-06"
                  x2="138.73"
                  y2="167.583"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#B2B2B2" />
                  <stop offset="1" stop-color="#B2B2B2" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint3_linear_8526_5622"
                  x1="197.703"
                  y1="-7.06655e-06"
                  x2="138.73"
                  y2="167.583"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#B2B2B2" />
                  <stop offset="1" stop-color="#B2B2B2" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint4_linear_8526_5622"
                  x1="197.703"
                  y1="-7.06655e-06"
                  x2="138.73"
                  y2="167.583"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#B2B2B2" />
                  <stop offset="1" stop-color="#B2B2B2" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint5_linear_8526_5622"
                  x1="197.703"
                  y1="-7.06655e-06"
                  x2="138.73"
                  y2="167.583"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#B2B2B2" />
                  <stop offset="1" stop-color="#B2B2B2" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint6_linear_8526_5622"
                  x1="197.703"
                  y1="-7.06655e-06"
                  x2="138.73"
                  y2="167.583"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#B2B2B2" />
                  <stop offset="1" stop-color="#B2B2B2" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint7_linear_8526_5622"
                  x1="197.703"
                  y1="-7.06655e-06"
                  x2="138.73"
                  y2="167.583"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#B2B2B2" />
                  <stop offset="1" stop-color="#B2B2B2" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint8_linear_8526_5622"
                  x1="197.703"
                  y1="-7.06655e-06"
                  x2="138.73"
                  y2="167.583"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#B2B2B2" />
                  <stop offset="1" stop-color="#B2B2B2" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint9_linear_8526_5622"
                  x1="197.703"
                  y1="-7.06655e-06"
                  x2="138.73"
                  y2="167.583"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#B2B2B2" />
                  <stop offset="1" stop-color="#B2B2B2" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint10_linear_8526_5622"
                  x1="197.703"
                  y1="-7.06655e-06"
                  x2="138.73"
                  y2="167.583"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#B2B2B2" />
                  <stop offset="1" stop-color="#B2B2B2" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint11_linear_8526_5622"
                  x1="197.703"
                  y1="-7.06655e-06"
                  x2="138.73"
                  y2="167.583"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#B2B2B2" />
                  <stop offset="1" stop-color="#B2B2B2" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint12_linear_8526_5622"
                  x1="197.703"
                  y1="-7.06655e-06"
                  x2="138.73"
                  y2="167.583"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#B2B2B2" />
                  <stop offset="1" stop-color="#B2B2B2" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <div className="mx-auto max-w-[440px]">
              {/* <!-- Logo and Description --> */}
              <div>
                <div className="mb-6">
                  <a href="javascript:void(0)">
                    <img
                      src="https://cdn-tailgrids.b-cdn.net/3.0/logo/tailgrids-logo.svg"
                      alt="logo"
                    />
                  </a>
                </div>
                <p className="text-text-50 mb-12">
                  Beautifully crafted Tailwind CSS UI Components, Blocks and
                  Templates
                </p>
              </div>

              {/* <!-- Testimonial --> */}
              <div>
                <blockquote className="text-text-50 mb-6 italic">
                  "Working with this team has been a game-changer — their
                  attention to detail, creativity, and commitment to deadlines
                  exceeded every expectation I had."
                </blockquote>
                <div className="flex items-center">
                  <div className="mr-3 h-10 w-10 overflow-hidden rounded-full">
                    <img
                      src="https://cdn-tailgrids.b-cdn.net/3.0/application/signinup/author.png"
                      alt="Kathryn Murphy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-text-50 font-medium">Kathryn Murphy</p>
                    <p className="text-text-100 text-sm">Co-founder</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Right Side - Sign Up Form --> */}
          <div className="w-full p-8 lg:w-1/2 lg:p-10">
            <div className="mx-auto max-w-[400px]">
              <h1 className="text-title-50 mb-3 text-3xl font-semibold sm:text-4xl">
                Sign up
              </h1>
              <p className="text-text-100 mb-8 text-base">
                Create an account and verify your details to start using. Have
                an account already?
                <a
                  href="javascript:void(0)"
                  className="text-primary-500 hover:underline"
                >
                  Log in here
                </a>
              </p>

              {/* <!-- Google Sign Up --> */}
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
                Continue with Google
              </Button>

              {/* <!-- Divider --> */}
              <div className="my-6 flex items-center">
                <div className="bg-background-soft-200 h-px flex-grow"></div>
                <p className="text-text-100 mx-4 text-sm">OR</p>
                <div className="bg-background-soft-200 h-px flex-grow"></div>
              </div>

              {/* <!-- Email Form --> */}
              <div>
                <div className="mb-3">
                  <Input
                    type="email"
                    label="Email address"
                    placeholder="Enter your email address"
                  />
                </div>
                <Button variant="primary" appearance="fill" className="w-full">
                  Continue with email
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
