import { Button } from '@/components/core/button';
import { Checkbox } from '@/components/core/checkbox';
import { Input } from '@/components/core/input';
import { TextArea } from '@/components/core/text-area';

export default function Contact7() {
  return (
    <section className="bg-background-50 py-14 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 xl:px-0">
        <div className="flex flex-col gap-8 lg:flex-row">
          <div className="lg:w-1/2 lg:px-10">
            {/* <!-- Contact Form --> */}
            <form>
              {/* <!-- Name Fields --> */}
              <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <Input
                    placeholder="Kane"
                    type="text"
                    label="First Name"
                    id="firstName-7"
                  />
                </div>

                <div>
                  <Input
                    placeholder="Williamson"
                    type="text"
                    label="Last Name"
                    id="lastName-7"
                  />
                </div>
              </div>

              {/* <!-- Email --> */}
              <div className="mb-4">
                <Input
                  placeholder="yourname@company.com"
                  type="email"
                  label="Email"
                  id="email-7"
                />
              </div>

              {/* <!-- Phone --> */}
              <div className="mb-4">
                <Input
                  placeholder="+1 (555) 444-0000"
                  type="tel"
                  label="Phone number"
                  id="phone-7"
                />
              </div>

              {/* <!-- Message --> */}
              <div className="mb-6">
                <TextArea
                  placeholder="Type your message here"
                  label="Message"
                  id="message-7"
                />
              </div>

              {/* <!-- Terms Checkbox --> */}
              <div className="mb-6 flex items-start">
                <Checkbox
                  id="terms-7"
                  name="terms-7"
                  label="You agree to our friendly privacy policy."
                />
              </div>

              {/* <!-- Submit Button --> */}
              <Button className="w-full" type="submit">
                Send Message
              </Button>
            </form>
          </div>
          <div className="lg:w-1/2 lg:px-10">
            <iframe
              className="border-base-200 h-full w-full! rounded-xl! border! grayscale-100!"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.5106804765933!2d90.42106937582746!3d23.800432886852832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7e9f37a5a3d%3A0x41d7d1d02e1ed0e4!2sPimjo!5e0!3m2!1sen!2sbd!4v1746610891678!5m2!1sen!2sbd"
              width="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
