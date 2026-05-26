import { Button } from '@/components/core/button';
import { Checkbox } from '@/components/core/checkbox';
import { Input } from '@/components/core/input';
import { TextArea } from '@/components/core/text-area';

export default function Contact4() {
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
            {/* <!-- Form Header --> */}
            <div className="mx-auto mb-8 max-w-xs text-center">
              <h2 className="text-title-50 mb-2 text-4xl font-bold sm:text-5xl">
                Get in Touch
              </h2>
              <p className="text-text-100 text-sm">
                Whether it's a question or a collaboration, we'd love to hear
                from you.
              </p>
            </div>

            {/* <!-- Contact Form --> */}
            <form>
              {/* <!-- Name Fields --> */}
              <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <Input
                    placeholder="Kane"
                    type="text"
                    label="First Name"
                    id="firstName-4"
                  />
                </div>

                <div>
                  <Input
                    placeholder="Williamson"
                    type="text"
                    label="Last Name"
                    id="lastName-4"
                  />
                </div>
              </div>

              {/* <!-- Email --> */}
              <div className="mb-4">
                <Input
                  placeholder="yourname@company.com"
                  type="email"
                  label="Email"
                  id="email-4"
                />
              </div>

              {/* <!-- Phone --> */}
              <div className="mb-4">
                <Input
                  placeholder="+1 (555) 000-0000"
                  type="tel"
                  label="Phone number"
                  id="phone-4"
                />
              </div>

              {/* <!-- Message --> */}
              <div className="mb-6">
                <TextArea
                  rows={4}
                  label="Message"
                  placeholder="Type your message here"
                  id="message-4"
                />
              </div>

              {/* <!-- Terms Checkbox --> */}
              <div className="mb-6 flex items-start">
                <Checkbox
                  id="terms-4"
                  name="terms-4"
                  label="You agree to our friendly privacy policy."
                />
              </div>

              {/* <!-- Submit Button --> */}
              <Button className="w-full" type="submit">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
