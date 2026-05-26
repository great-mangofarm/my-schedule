import { Button } from '@/components/core/button';
import { Checkbox } from '@/components/core/checkbox';
import { Input } from '@/components/core/input';
import { TextArea } from '@/components/core/text-area';

export default function Contact5() {
  return (
    <section className="bg-background-50">
      <div className="mx-auto max-w-7xl px-4 xl:px-0">
        <div className="overflow-hidden p-3">
          {/* <!-- Blue Gradient Header --> */}
          <div className="from-primary-500 to-primary-200 text-white-100 relative rounded-2xl bg-gradient-to-b px-6 pt-20 pb-44 text-center lg:pt-28">
            <div className="absolute top-0 left-1/2 -translate-x-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="974"
                height="312"
                viewBox="0 0 974 312"
                fill="none"
              >
                <path
                  opacity="0.1"
                  d="M1.32299 54.6722L973.042 54.6723M360.773 311.691L360.773 0M309.371 311.691L309.371 0M257.969 311.691L257.969 0M206.568 311.691L206.568 0M155.166 311.691L155.166 0M103.764 311.691L103.764 0M52.3626 311.691L52.3627 0M0.960938 311.691L0.960961 0M1.32299 106.004L973.042 106.004M412.104 311.691L412.104 0M1.32299 157.335L973.042 157.335M463.435 311.691L463.436 0M1.32299 208.666L973.042 208.666M514.767 311.691L514.767 0M1.32299 259.998L973.042 259.998M566.098 311.691L566.098 0M1.32299 311.329L973.042 311.329M617.429 311.691L617.43 0M668.555 311.691L668.555 0M719.243 311.691L719.243 0M769.93 311.691V0M820.617 311.691V0M871.305 311.691V0M921.992 311.691V0M972.68 311.691V0"
                  stroke="url(#paint0_radial_7895_3761)"
                />
                <defs>
                  <radialGradient
                    id="paint0_radial_7895_3761"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(487.002) rotate(90) scale(297.175 481.342)"
                  >
                    <stop stop-color="white" />
                    <stop offset="1" stop-color="white" stop-opacity="0" />
                  </radialGradient>
                </defs>
              </svg>
            </div>
            <p className="mb-2 text-base opacity-90">Reach out anytime</p>
            <h2 className="mb-4 text-4xl font-semibold sm:text-5xl">
              Let's Stay Connected
            </h2>
            <p className="mx-auto max-w-lg text-base opacity-90">
              Got questions or want to collaborate? Feel free to reach out - I'm
              open to new projects or just a casual chat.
            </p>
          </div>

          {/* <!-- Contact Form --> */}
          <div className="relative z-40 mx-auto -mt-36 max-w-[632px] p-4">
            <div className="bg-background-50 rounded-2xl p-4 shadow-sm sm:p-8">
              <form>
                {/* <!-- Name Fields --> */}
                <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <Input
                      placeholder="Kane"
                      type="text"
                      label="First Name"
                      id="firstName-5"
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="Williamson"
                      type="text"
                      tabIndex={0}
                      label="Last Name"
                      id="lastName-5"
                    />
                  </div>
                </div>

                {/* <!-- Email --> */}
                <div className="mb-4">
                  <Input
                    placeholder="yourname@company.com"
                    type="email"
                    label="Email"
                    id="email-5"
                  />
                </div>

                {/* <!-- Subject --> */}
                <div className="mb-4">
                  <label
                    htmlFor="subject-5"
                    className="text-text-50 mb-2 block text-sm font-medium"
                  >
                    Subject
                  </label>
                  <div className="relative">
                    <select
                      id="subject-5"
                      className="focus:border-primary-300 focus:ring-primary-500/30 text-title-50 hover:placeholder:text-title-50 border-base-200 placeholder:text-text-200 bg-input-background h-11 w-full rounded-lg border px-4 py-2.5 text-base ring-3 ring-transparent placeholder:text-base focus:outline-0"
                    >
                      <option defaultValue="">Select subject</option>
                      <option defaultValue="general">General Inquiry</option>
                      <option defaultValue="support">Support</option>
                      <option defaultValue="feedback">Feedback</option>
                      <option defaultValue="other">Other</option>
                    </select>
                  </div>
                </div>

                {/* <!-- Message --> */}
                <div className="mb-6">
                  <TextArea
                    rows={4}
                    label="Message"
                    placeholder="Type your message here"
                    id="message-5"
                  />
                </div>

                {/* <!-- Terms Checkbox --> */}
                <div className="mb-6">
                  <Checkbox
                    id="terms-5"
                    name="terms-5"
                    label="You agree to our friendly privacy policy."
                  />
                </div>

                {/* <!-- Submit Button --> */}

                <Button className="w-full">Send Message</Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
