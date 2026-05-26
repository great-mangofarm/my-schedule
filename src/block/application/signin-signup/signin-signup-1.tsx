import { Button } from '@/components/core/button';
import { Input } from '@/components/core/input';
import { useState } from 'react';
import { Eye } from '@tailgrids/icons';

export default function SignInSignup1() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <section className="bg-background-50 flex min-h-screen items-center justify-center">
      <div className="mx-auto max-w-7xl px-4 xl:px-0">
        <div className="lg:flex">
          {/* <!-- Left side image --> */}
          <div className="hidden w-full rounded-2xl p-3 lg:block lg:w-1/2">
            <img
              src="https://cdn-tailgrids.b-cdn.net/3.0/application/signinup/image-1.jpg"
              alt="Person with hoodie against blue wall"
              className="h-full w-full rounded-2xl object-cover"
            />
          </div>

          {/* <!-- Right side form --> */}
          <div className="flex w-full items-center justify-center sm:p-8 lg:w-1/2">
            <div className="w-full max-w-md">
              <h1 className="text-title-50 mb-2 text-3xl font-semibold sm:text-4xl">
                Create an account
              </h1>
              <p className="text-text-100 mb-8">
                Sign up to get started and enjoy full access to all features.
              </p>

              {/* <!-- Social sign-up buttons --> */}
              <Button
                variant="primary"
                appearance="outline"
                className="mb-3 h-12 w-full"
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
                    d="M12.2147 22.5001C15.1075 22.5001 17.5361 21.5667 19.3099 19.9567L15.929 17.39C15.0242 18.0083 13.8099 18.44 12.2147 18.44C9.38142 18.44 6.97669 16.6083 6.11947 14.0767L5.99382 14.0871L2.68656 16.5955L2.64331 16.7133C4.40519 20.1433 8.02423 22.5001 12.2147 22.5001Z"
                    fill="#34A853"
                  />
                  <path
                    d="M6.11997 14.0767C5.89379 13.4234 5.76289 12.7233 5.76289 12C5.76289 11.2767 5.89379 10.5767 6.10807 9.92337L6.10208 9.78423L2.75337 7.2356L2.64381 7.28667C1.91765 8.71002 1.50098 10.3084 1.50098 12C1.50098 13.6917 1.91765 15.29 2.64381 16.7133L6.11997 14.0767Z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12.2148 5.55997C14.2267 5.55997 15.5838 6.41163 16.3576 7.12335L19.3814 4.23C17.5243 2.53834 15.1076 1.5 12.2148 1.5C8.02426 1.5 4.4052 3.85665 2.64331 7.28662L6.10759 9.92332C6.97672 7.39166 9.38146 5.55997 12.2148 5.55997Z"
                    fill="#EB4335"
                  />
                </svg>
                Sign up with Google
              </Button>

              <Button
                variant="primary"
                appearance="outline"
                className="mb-6 h-12 w-full"
              >
                <svg
                  className="block"
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="20"
                  viewBox="0 0 17 20"
                  fill="none"
                >
                  <path
                    d="M16.2413 6.81869C16.1235 6.90869 14.0433 8.0628 14.0433 10.6291C14.0433 13.5974 16.6903 14.6475 16.7695 14.6735C16.7573 14.7375 16.349 16.1116 15.3739 17.5118C14.5044 18.7439 13.5964 19.974 12.215 19.974C10.8336 19.974 10.4781 19.1839 8.8834 19.1839C7.3293 19.1839 6.7768 20 5.51321 20C4.24964 20 3.36798 18.8599 2.35429 17.4598C1.18013 15.8156 0.231445 13.2613 0.231445 10.8371C0.231445 6.94872 2.7992 4.88648 5.32631 4.88648C6.6691 4.88648 7.7884 5.75458 8.6315 5.75458C9.4339 5.75458 10.6853 4.83449 12.2129 4.83449C12.7919 4.83449 14.8721 4.88648 16.2413 6.81869ZM11.4877 3.18832C12.1195 2.45025 12.5664 1.42614 12.5664 0.40204C12.5664 0.26003 12.5542 0.11601 12.5278 0C11.4999 0.038 10.277 0.67407 9.5395 1.51615C8.9606 2.16422 8.4202 3.18832 8.4202 4.22642C8.4202 4.38247 8.4466 4.53845 8.4588 4.58844C8.5238 4.60047 8.6294 4.61446 8.7351 4.61446C9.6574 4.61446 10.8173 4.00639 11.4877 3.18832Z"
                    fill="#1F2937"
                  />
                </svg>
                <svg
                  className="hidden"
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.2413 7.81869C20.1235 7.90869 18.0433 9.0628 18.0433 11.6291C18.0433 14.5974 20.6903 15.6475 20.7695 15.6735C20.7573 15.7375 20.349 17.1116 19.3739 18.5118C18.5044 19.7439 17.5964 20.974 16.215 20.974C14.8336 20.974 14.4781 20.1839 12.8834 20.1839C11.3293 20.1839 10.7768 21 9.51321 21C8.24964 21 7.36798 19.8599 6.35429 18.4598C5.18013 16.8156 4.23145 14.2613 4.23145 11.8371C4.23145 7.94872 6.7992 5.88648 9.32631 5.88648C10.6691 5.88648 11.7884 6.75458 12.6315 6.75458C13.4339 6.75458 14.6853 5.83449 16.2129 5.83449C16.7919 5.83449 18.8721 5.88648 20.2413 7.81869ZM15.4877 4.18832C16.1195 3.45025 16.5664 2.42614 16.5664 1.40204C16.5664 1.26003 16.5542 1.11601 16.5278 1C15.4999 1.038 14.277 1.67407 13.5395 2.51615C12.9606 3.16422 12.4202 4.18832 12.4202 5.22642C12.4202 5.38247 12.4466 5.53845 12.4588 5.58844C12.5238 5.60047 12.6294 5.61446 12.7351 5.61446C13.6574 5.61446 14.8173 5.00639 15.4877 4.18832Z"
                    fill="white"
                    fillOpacity="0.9"
                  />
                </svg>
                Sign up with Apple
              </Button>

              <div className="mb-6 flex items-center">
                <div className="bg-background-soft-200 h-px flex-grow"></div>
                <p className="text-text-100 mx-4 text-sm">
                  Or register with email
                </p>
                <div className="bg-background-soft-200 h-px flex-grow"></div>
              </div>

              {/* <!-- Form fields --> */}
              <div className="mb-4 grid grid-cols-2 gap-4">
                <Input type="text" label="First Name" placeholder="Cameron" />
                <Input type="text" label="Last Name" placeholder="Williamson" />
              </div>

              <div className="mb-4">
                <Input
                  type="email"
                  label="Email"
                  placeholder="Enter your email"
                />
              </div>

              <div className="mb-6">
                <div className="relative">
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    label="Password"
                    placeholder="Enter your password"
                    className="pr-10"
                  />
                  <button
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-text-200 hover:text-text-50 absolute inset-y-0 top-7 right-0 flex cursor-pointer items-center pr-3"
                  >
                    <Eye className="size-6" />
                  </button>
                </div>
              </div>

              <Button variant="primary" appearance="fill" className="w-full">
                Create Account
              </Button>

              <p className="text-text-100 mt-6 text-start text-base">
                Already have a account? {''}
                <a
                  href="javascript:void(0)"
                  className="text-text-50 hover:underline"
                >
                  Log in
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
