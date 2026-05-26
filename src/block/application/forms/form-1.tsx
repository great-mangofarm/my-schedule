import { Button } from '@/components/core/button';
import { Checkbox } from '@/components/core/checkbox';
import { Input } from '@/components/core/input';
import { TextArea } from '@/components/core/text-area';

export default function Form1() {
  return (
    <div className="bg-background-soft-50 flex h-screen items-center justify-center px-4 py-10">
      <div className="relative mx-auto max-w-150">
        <div className="bg-background-50 rounded-2xl p-4 shadow-sm sm:p-12">
          <div className="mb-12">
            <h2 className="text-title-50 mb-4 text-3xl font-semibold sm:text-4xl">
              Get in Touch
            </h2>
            <p className="text-text-100 text-base">
              Whether it’s a question or a collaboration, we’d love to hear from
              you.
            </p>
          </div>
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
                  className="focus:border-primary-300 bg-input-background focus:ring-primary-500/30 text-title-50 hover:placeholder:text-title-50 border-base-200 placeholder:text-text-200 h-11 w-full rounded-lg border px-4 py-2.5 text-base ring-3 ring-transparent placeholder:text-base focus:outline-0"
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
  );
}
