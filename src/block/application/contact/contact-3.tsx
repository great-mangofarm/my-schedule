import { Button } from '@/components/core/button';
import { Checkbox } from '@/components/core/checkbox';
import { Input } from '@/components/core/input';
import { TextArea } from '@/components/core/text-area';

export default function Contact3() {
  return (
    <section className="bg-background-50 py-16">
      <div className="mx-auto max-w-7xl px-4 xl:px-0">
        <div className="overflow-hidden">
          <div className="flex flex-col items-center lg:flex-row">
            {/* <!-- Left Column - Contact Form --> */}
            <div className="p-3 sm:p-8 lg:w-1/2 lg:p-28">
              <h2 className="text-title-50 mb-3 text-4xl font-semibold sm:text-5xl">
                Get in Touch
              </h2>
              <p className="text-text-100 mb-8">
                Whether it's a question or a collaboration, we'd love to hear
                from you.
              </p>

              <form>
                <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                  {/* <!-- First Name --> */}
                  <Input
                    label="First Name"
                    type="text"
                    id="firstName-3"
                    placeholder="Cameron"
                  />

                  {/* <!-- Last Name --> */}
                  <Input
                    label="Last Name"
                    type="text"
                    id="lastName-3"
                    placeholder="Williamson"
                  />
                </div>

                {/* <!-- Email --> */}
                <div className="mb-4">
                  <Input
                    label="Email"
                    type="email"
                    id="email-3"
                    placeholder="yourname@company.com"
                  />
                </div>

                {/* <!-- Message --> */}
                <div className="mb-6">
                  <TextArea
                    rows={4}
                    label="Message"
                    placeholder="Type your message here"
                    id="message-3"
                  />
                </div>

                {/* <!-- Terms Checkbox --> */}
                <div className="mb-6">
                  <Checkbox
                    id="terms-3"
                    name="terms-3"
                    label="You agree to our friendly privacy policy."
                  />
                </div>

                {/* <!-- Submit Button --> */}
                <Button className="w-full">Send Message</Button>
              </form>
            </div>

            {/* <!-- Right Column - Blue Abstract Image --> */}
            <div className="hidden lg:block lg:w-1/2">
              <div className="h-full rounded-2xl p-3">
                <img
                  src="https://cdn-tailgrids.b-cdn.net/3.0/application/contacts/contact-03/image.jpg"
                  alt="Abstract blue curves"
                  className="h-full w-full rounded-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
