import { Button } from '@/components/core/button';
import { Checkbox } from '@/components/core/checkbox';
import { Input } from '@/components/core/input';

export default function Form4() {
  return (
    <div className="bg-background-soft-50 flex h-screen items-center justify-center px-4 py-10">
      <div className="relative mx-auto w-full max-w-125">
        <div className="bg-background-50 rounded-2xl p-8 shadow-sm">
          <div className="mb-8 text-center">
            <h2 className="text-title-50 mb-2 text-2xl font-semibold">
              Welcome back
            </h2>
            <p className="text-text-100 text-sm">
              Login to continue your journey with us.
            </p>
          </div>

          {/* <!-- Social Login Buttons --> */}
          <div className="mb-8 space-y-3">
            <Button
              variant="primary"
              appearance="outline"
              className="h-11 w-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
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
              className="h-11 w-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="18"
                viewBox="0 0 17 20"
                fill="none"
              >
                <path
                  d="M16.2413 6.81869C16.1235 6.90869 14.0433 8.0628 14.0433 10.6291C14.0433 13.5974 16.6903 14.6475 16.7695 14.6735C16.7573 14.7375 16.349 16.1116 15.3739 17.5118C14.5044 18.7439 13.5964 19.974 12.215 19.974C10.8336 19.974 10.4781 19.1839 8.8834 19.1839C7.3293 19.1839 6.7768 20 5.51321 20C4.24964 20 3.36798 18.8599 2.35429 17.4598C1.18013 15.8156 0.231445 13.2613 0.231445 10.8371C0.231445 6.94872 2.7992 4.88648 5.32631 4.88648C6.6691 4.88648 7.7884 5.75458 8.6315 5.75458C9.4339 5.75458 10.6853 4.83449 12.2129 4.83449C12.7919 4.83449 14.8721 4.88648 16.2413 6.81869ZM11.4877 3.18832C12.1195 2.45025 12.5664 1.42614 12.5664 0.40204C12.5664 0.26003 12.5542 0.11601 12.5278 0C11.4999 0.038 10.277 0.67407 9.5395 1.51615C8.9606 2.16422 8.4202 3.18832 8.4202 4.22642C8.4202 4.38247 8.4466 4.53845 8.4588 4.58844C8.5238 4.60047 8.6294 4.61446 8.7351 4.61446C9.6574 4.61446 10.8173 4.00639 11.4877 3.18832Z"
                  fill="#1F2937"
                />
              </svg>
              Sign up with Apple
            </Button>
          </div>

          {/* <!-- Divider --> */}
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="border-base-100 w-full border-t"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-background-50 text-text-100 px-3">
                Or register with email
              </span>
            </div>
          </div>

          <form>
            {/* <!-- Email --> */}
            <div className="mb-4">
              <Input
                placeholder="Enter your email"
                type="email"
                label="Email"
                id="email-4"
              />
            </div>

            {/* <!-- Password --> */}
            <div className="mb-6">
              <Input
                placeholder="Enter your password"
                type="password"
                label="Password"
                id="password-4"
              />
            </div>

            {/* <!-- Remember me and Forgot password --> */}
            <div className="mb-6 flex items-center justify-between">
              <Checkbox id="remember-4" name="remember-4" label="Remember me" />
              <a
                href="javascript:void(0)"
                className="text-title-50 shrink-0 text-sm hover:underline"
              >
                Forgot password?
              </a>
            </div>

            {/* <!-- Submit Button --> */}
            <Button className="w-full">Sign in</Button>

            {/* <!-- Sign up Link --> */}
            <p className="text-text-100 mt-4 text-center text-sm">
              Don't Have an account?{' '}
              <a
                href="javascript:void(0)"
                className="text-title-50 font-medium hover:underline"
              >
                Sign Up
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
