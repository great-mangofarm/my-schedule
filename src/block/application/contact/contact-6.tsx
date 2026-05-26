import { Button } from '@/components/core/button';
import { Checkbox } from '@/components/core/checkbox';
import { Input } from '@/components/core/input';
import { TextArea } from '@/components/core/text-area';
import {
  Dribbble,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from '@tailgrids/icons';

export default function Contact6() {
  return (
    <section className="bg-background-50 py-14 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 xl:px-0">
        <div className="mx-auto flex max-w-[1008px] flex-col gap-8 lg:flex-row">
          <div className="from-primary-500 to-primary-200 relative overflow-hidden rounded-2xl bg-gradient-to-b p-12">
            <div className="absolute top-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="384"
                height="120"
                viewBox="0 0 384 120"
                fill="none"
              >
                <path
                  opacity="0.2"
                  d="M-93.5933 -31.0763L473.805 -31.0762M116.294 119L116.294 -63M86.2796 119L86.2796 -63M56.2656 119L56.2656 -63M26.2515 119L26.2515 -63M-3.76253 119L-3.76252 -63M-33.7766 119L-33.7766 -63M-63.7906 119L-63.7906 -63M-93.8047 119L-93.8047 -63M-93.5933 -1.10329L473.805 -1.10324M146.267 119L146.267 -63M-93.5933 28.8697L473.805 28.8697M176.24 119L176.24 -63M-93.5933 58.8427L473.805 58.8427M206.213 119L206.213 -63M-93.5933 88.8156L473.805 88.8157M236.186 119L236.186 -63M-93.5933 118.789L473.805 118.789M266.159 119L266.159 -63M296.011 119L296.011 -63M325.608 119L325.608 -63M355.205 119V-63M384.802 119V-63M414.399 119V-63M443.996 119V-63M473.594 119V-63"
                  stroke="url(#paint0_radial_7910_10865)"
                />
                <defs>
                  <radialGradient
                    id="paint0_radial_7910_10865"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(368.766 -48.1939) rotate(120.155) scale(193.363 313.194)"
                  >
                    <stop stop-color="white" />
                    <stop offset="1" stop-color="white" stop-opacity="0" />
                  </radialGradient>
                </defs>
              </svg>
            </div>
            <div className="">
              <h2 className="text-white-100 mb-9 text-xl font-semibold">
                Get in touch
              </h2>

              <ul className="space-y-8">
                <li>
                  <span className="text-white-100 mb-1 block text-base font-medium">
                    Visit us
                  </span>
                  <p className="text-white-100 text-base font-normal">
                    230 Norman Street New York, QC <br />
                    (USA) H8R 1A1
                  </p>
                </li>
                <li>
                  <span className="text-white-100 mb-1 block text-base font-medium">
                    Phone
                  </span>
                  <p className="text-white-100 text-base font-normal">
                    +(555) 534-093-762
                  </p>
                </li>
                <li>
                  <span className="text-white-100 mb-1 block text-base font-medium">
                    Email
                  </span>
                  <p className="text-white-100 text-base font-normal">
                    hello@company.com
                  </p>
                </li>
                <li>
                  <span className="text-white-100 mb-4 block text-base font-medium">
                    Social media
                  </span>
                  <div className="flex items-center gap-4">
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                      <Facebook className="text-white-100 size-4" />
                    </a>
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                      <Twitter className="text-white-100 size-4" />
                    </a>
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="text-white-100 size-4" />
                    </a>
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                      <Instagram className="text-white-100 size-5" />
                    </a>
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                      <Dribbble className="text-white-100 size-4" />
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex-1 lg:px-10">
            {/* <!-- Contact Form --> */}
            <form>
              {/* <!-- Name Fields --> */}
              <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <Input
                    placeholder="John"
                    type="text"
                    label="First Name"
                    id="firstName-6"
                  />
                </div>

                <div>
                  <Input
                    placeholder="Smith"
                    type="text"
                    label="Last Name"
                    id="lastName-6"
                  />
                </div>
              </div>

              {/* <!-- Email --> */}
              <div className="mb-4">
                <Input
                  placeholder="yourname@company.com"
                  type="email"
                  label="Email"
                  id="email-6"
                />
              </div>

              {/* <!-- Phone --> */}
              <div className="mb-4">
                <Input
                  placeholder="+1 (555) 444-0000"
                  type="tel"
                  label="Phone number"
                  id="phone-6"
                />
              </div>

              {/* <!-- Message --> */}
              <div className="mb-6">
                <TextArea
                  label="Message"
                  placeholder="Type your message here"
                  id="message-6"
                />
              </div>

              {/* <!-- Terms Checkbox --> */}
              <div className="mb-6 flex items-start">
                <Checkbox
                  id="terms-6"
                  name="terms-6"
                  label="You agree to our friendly privacy policy."
                />
              </div>

              {/* <!-- Submit Button --> */}
              <Button className="w-full">Send Message</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
