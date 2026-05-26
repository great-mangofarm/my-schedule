import { Button } from '@/components/core/button';
import { Input } from '@/components/core/input';
import { TextArea } from '@/components/core/text-area';
import { Envelope1, MapMarker5, Telephone1 } from '@tailgrids/icons';

export default function Contact2() {
  return (
    <section className="bg-background-50 min-h-screen">
      <div className="mx-auto max-w-7xl px-4 xl:px-0">
        <div className="overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* <!-- Left Column - Contact Info --> */}
            <div className="border-base-100 bg-background-soft-100 relative flex flex-col justify-center border-r px-4 py-16 sm:p-10 lg:w-1/2 xl:p-28">
              <h2 className="text-title-50 mb-4 text-4xl font-semibold sm:text-5xl">
                Get in Touch
              </h2>
              <p className="text-text-100 mb-12 text-base">
                Whether it's a question or a collaboration, we'd love to hear
                from you.
              </p>

              <div className="space-y-6">
                {/* <!-- Phone Number --> */}
                <div className="flex items-start">
                  <div className="bg-background-50 text-text-50 inline-flex h-11 w-11 items-center justify-center rounded-lg">
                    <Telephone1 />
                  </div>
                  <div className="ml-4">
                    <p className="text-text-100 mb-1 text-sm">Number</p>
                    <p className="text-title-50 text-base">+894 022 0232</p>
                  </div>
                </div>

                {/* <!-- Email --> */}
                <div className="flex items-start">
                  <div className="bg-background-50 text-text-50 inline-flex h-11 w-11 items-center justify-center rounded-lg">
                    <Envelope1 />
                  </div>
                  <div className="ml-4">
                    <p className="text-text-100 mb-1 text-sm">Email</p>
                    <p className="text-title-50 text-base">info@gmail.com</p>
                  </div>
                </div>

                {/* <!-- Location --> */}
                <div className="flex items-start">
                  <div className="bg-background-50 text-text-50 inline-flex h-11 w-11 items-center justify-center rounded-lg">
                    <MapMarker5 />
                  </div>
                  <div className="ml-4">
                    <p className="text-text-100 mb-1 text-sm">Location</p>
                    <p className="text-title-50 text-base">
                      1234 Innovation Street, Suite 567
                    </p>
                    <p className="text-title-50 text-base">New York, US</p>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Right Column - Contact Form --> */}
            <div className="p-10 px-4 py-16 lg:w-1/2 xl:p-28">
              <form>
                <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                  {/* <!-- First Name --> */}
                  <div>
                    <Input
                      label="First Name"
                      type="text"
                      id="firstName"
                      placeholder="Jhon"
                    />
                  </div>

                  {/* <!-- Last Name --> */}
                  <div>
                    <Input
                      label="Last Name"
                      type="text"
                      id="lastName"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                {/* <!-- Email --> */}
                <div className="mb-6">
                  <Input
                    label="Email"
                    type="email"
                    id="email"
                    placeholder="info@gmail.com"
                  />
                </div>

                {/* <!-- Phone --> */}
                <div className="mb-6">
                  <Input
                    type="tel"
                    id="phone"
                    label="Phone"
                    placeholder="Enter your phone number"
                  />
                </div>

                {/* <!-- Message --> */}
                <div className="mb-6">
                  <TextArea
                    rows={6}
                    label="Message"
                    placeholder="Type your message here"
                    id="message"
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
