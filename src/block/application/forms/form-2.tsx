import { Button } from '@/components/core/button';
import { Checkbox } from '@/components/core/checkbox';
import { Input } from '@/components/core/input';
import { TextArea } from '@/components/core/text-area';

export default function Form2() {
  return (
    <div className="bg-background-soft-50 flex h-screen items-center justify-center px-4 py-10">
      <div className="relative mx-auto max-w-150">
        <div className="bg-background-50 rounded-2xl p-4 shadow-sm sm:p-12">
          <div className="mb-12">
            <h2 className="text-title-50 mb-4 text-3xl font-semibold sm:text-4xl">
              Contact Us
            </h2>
            <p className="text-text-100 text-base">
              Get in touch with our team for any inquiries or assistance.
            </p>
          </div>
          <form>
            {/* <!-- Name Fields --> */}
            <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <Input
                  placeholder="Cameron"
                  type="text"
                  label="First Name"
                  id="firstName-2"
                />
              </div>
              <div>
                <Input
                  placeholder="Williamson"
                  type="text"
                  label="Last Name"
                  id="lastName-2"
                />
              </div>
            </div>

            {/* <!-- Email --> */}
            <div className="mb-4">
              <Input
                placeholder="yourname@company.com"
                type="email"
                label="Email"
                id="email-2"
              />
            </div>

            {/* <!-- Phone number --> */}
            <div className="mb-4">
              <Input
                placeholder="+1 (555) 444-0000"
                type="tel"
                label="Phone number"
                id="phone-2"
              />
            </div>

            {/* <!-- Message --> */}
            <div className="mb-6">
              <TextArea
                rows={4}
                label="Message"
                placeholder="Type your message here"
                id="message-2"
              />
            </div>

            {/* <!-- Privacy Checkbox --> */}
            <div className="mb-6">
              <label className="group flex w-full cursor-pointer items-start gap-3 select-none">
                <Checkbox
                  id="privacy-2"
                  name="privacy-2"
                  className="mt-0.5 !w-auto"
                />
                <span className="text-text-50 text-sm">
                  I'd like to receive more information about company. I
                  understand and agree to the{' '}
                  <a
                    href="javascript:void(0)"
                    className="text-blue-600 hover:underline"
                  >
                    Privacy Policy
                  </a>
                </span>
              </label>
            </div>

            {/* <!-- Submit Button --> */}

            <Button className="w-full">Send Message</Button>
          </form>
        </div>
      </div>
    </div>
  );
}
