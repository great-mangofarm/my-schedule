import {
  Envelope1,
  MapMarker5,
  Message2Reversed,
  Telephone1,
} from '@tailgrids/icons';

export default function Contact1() {
  return (
    <section className="bg-background-soft-100 py-14 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 xl:px-0">
        {/* <!-- Header Section --> */}
        <div className="mb-16 max-w-md">
          <p className="bg-primary-500/5 text-primary-500 mb-3 inline-block rounded-lg px-3.5 py-1 text-base">
            Contact Us
          </p>
          <h2 className="text-title-50 mb-4 text-4xl font-semibold sm:text-5xl">
            We're Here to Help
          </h2>
          <p className="text-text-100 text-base">
            There are many variations of available but the majority have
            suffered alteration in some form.
          </p>
        </div>

        {/* <!-- Contact Cards Grid --> */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {/* <!-- Card 1: Call Us --> */}
          <div className="bg-background-50 rounded-2xl p-6">
            <div className="text-title-50 border-base-100 bg-background-soft-200 mb-6 flex h-11 w-11 items-center justify-center rounded-lg">
              <Telephone1 />
            </div>

            <h3 className="text-title-50 mb-1 text-lg font-semibold">
              Call Us
            </h3>
            <p className="text-text-100 mb-6 text-sm">
              Speak to our friendly team
            </p>
            <a
              href="javascript:void(0)"
              className="hover:text-title-50 border-base-100 hover:bg-background-soft-100 text-text-50 block w-full cursor-pointer rounded-lg rounded-l-lg border px-4 py-2 text-center text-sm font-medium transition"
            >
              +894 022 0232
            </a>
          </div>
          {/* <!-- Card 2: Email --> */}
          <div className="bg-background-50 rounded-2xl p-6">
            <div className="text-title-50 border-base-100 bg-background-soft-200 mb-6 flex h-11 w-11 items-center justify-center rounded-lg">
              <Envelope1 />
            </div>

            <h3 className="text-title-50 mb-1 text-lg font-semibold">Email</h3>
            <p className="text-text-100 mb-6 text-sm">
              Speak to our friendly team
            </p>

            <a
              href="javascript:void(0)"
              className="hover:text-title-50 border-base-100 hover:bg-background-soft-100 text-text-50 block w-full cursor-pointer rounded-lg rounded-l-lg border px-4 py-2 text-center text-sm font-medium transition"
            >
              info@gmail.com
            </a>
          </div>
          {/* <!-- Card 3: Chat --> */}
          <div className="bg-background-50 rounded-2xl p-6">
            <div className="text-title-50 border-base-100 bg-background-soft-200 mb-6 flex h-11 w-11 items-center justify-center rounded-lg">
              <Message2Reversed />
            </div>
            <h3 className="text-title-50 mb-1 text-lg font-semibold">
              Chat With Us
            </h3>
            <p className="text-text-100 mb-6 text-sm">Let’s contact with us</p>

            <a
              href="javascript:void(0)"
              className="hover:text-title-50 border-base-100 hover:bg-background-soft-100 text-text-50 block w-full cursor-pointer rounded-lg rounded-l-lg border px-4 py-2 text-center text-sm font-medium transition"
            >
              Click To Start
            </a>
          </div>
          {/* <!-- Card 4: Our Office --> */}
          <div className="bg-background-50 rounded-2xl p-6">
            <div className="text-title-50 border-base-100 bg-background-soft-200 mb-6 flex h-11 w-11 items-center justify-center rounded-lg">
              <MapMarker5 />
            </div>

            <h3 className="text-title-50 mb-1 text-lg font-semibold">
              Our Office
            </h3>
            <p className="text-text-100 mb-6 text-sm">Visit our office today</p>

            <a
              href="javascript:void(0)"
              className="hover:text-title-50 border-base-100 hover:bg-background-soft-100 text-text-50 block w-full cursor-pointer rounded-lg rounded-l-lg border px-4 py-2 text-center text-sm font-medium transition"
            >
              View on google map
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
