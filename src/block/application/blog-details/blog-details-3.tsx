import { Link1AngularRight } from '@tailgrids/icons';

export default function BlogDetails3() {
  return (
    <section className="bg-background-50 py-24">
      <div className="mx-auto max-w-7xl px-4 xl:px-0">
        <div className="relative h-[635px]">
          {/* <!-- Background gradient overlay --> */}
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/0 to-black/80"></div>

          {/* <!-- Background image --> */}
          <img
            src="https://cdn-tailgrids.b-cdn.net/3.0/application/blog-details/blog-details-03/image.jpg"
            alt="Scenic mountain view"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* <!-- Content container --> */}
          <div className="text-white-100 relative z-20 flex h-full max-w-[800px] flex-col justify-end p-16">
            {/* <!-- Category tag --> */}
            <span className="mb-3 text-sm font-medium">Travel</span>
            {/* <!-- Main heading --> */}
            <h1 className="mb-6 text-3xl leading-tight font-bold sm:text-5xl">
              The Best Foodie Destinations for Culinary Adventures
            </h1>
            {/* <!-- Article metadata --> */}
            <div className="flex flex-wrap items-center space-x-2 font-normal opacity-90">
              <span className="text-white-100 text-base">15 January 2025</span>
              <span className="text-white-100 text-base">/</span>
              <span className="text-white-100 text-base">Jona Smith</span>
              <span className="text-white-100 text-base">/</span>
              <span className="text-white-100 text-base">25K View</span>
            </div>
          </div>
        </div>
        <div className="mt-16">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <span className="text-text-100 mb-5 block">Table Of Content</span>
              <ul className="space-y-4">
                <li>
                  <a
                    href="javascript:void(0)"
                    className="text-title-50 text-lg font-medium"
                  >
                    Introduction
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    className="text-title-50 text-lg font-medium"
                  >
                    Research About Destination
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    className="text-title-50 text-lg font-medium"
                  >
                    Place Images
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    className="text-title-50 text-lg font-medium"
                  >
                    Final Thoughts
                  </a>
                </li>
              </ul>
            </div>
            <div className="lg:col-span-8">
              <p className="text-text-100 mb-8 text-base">
                Traveling is an exciting way to explore new cultures, meet new
                people, and create unforgettable memories. However, ensuring
                your safety while traveling is crucial for a smooth and
                enjoyable experience. Whether you're traveling solo, with
                family, or in a group, being prepared and aware of potential
                risks can make all the difference. Here are some essential
                travel safety tips to keep in mind for your next adventure.
              </p>

              <div className="space-y-8">
                <div>
                  <h2 className="text-title-50 mb-4 text-2xl font-semibold">
                    1.Research Your Destination
                  </h2>
                  <ul className="list-inside list-disc space-y-1">
                    <li className="text-text-50 text-base">
                      Local laws and customs
                    </li>
                    <li className="text-text-50 text-base">Areas to avoid</li>
                    <li className="text-text-50 text-base">
                      Emergency contact numbers (police, hospital, embassy)
                    </li>
                    <li className="text-text-50 text-base">
                      Weather conditions and potential natural disasters
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="text-title-50 mb-4 text-2xl font-semibold">
                    2. Keep Your Valuables Secure
                  </h2>
                  <ul className="list-inside list-disc space-y-1">
                    <li className="text-text-50 text-base">
                      Avoid carrying large amounts of cash; use a
                      travel-friendly debit or credit card.
                    </li>
                    <li className="text-text-50 text-base">
                      Use anti-theft backpacks and crossbody bags with RFID
                      protection.
                    </li>
                    <li className="text-text-50 text-base">
                      Keep a digital copy of important documents like your
                      passport and IDs.
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="text-title-50 mb-4 text-2xl font-semibold">
                    3. Be Cautious with Public Wi-Fi
                  </h2>
                  <ul className="list-inside list-disc space-y-1">
                    <li className="text-text-50 text-base">
                      Avoid accessing banking or sensitive accounts over public
                      networks.
                    </li>
                    <li className="text-text-50 text-base">
                      Use a VPN (Virtual Private Network) for added security.
                    </li>
                    <li className="text-text-50 text-base">
                      If necessary, connect only to trusted and secured
                      networks.
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="text-title-50 mb-4 text-2xl font-semibold">
                    4. Stay Aware of Your Surroundings
                  </h2>
                  <ul className="list-inside list-disc space-y-1">
                    <li className="text-text-50 text-base">
                      Avoid wearing flashy jewelry or expensive-looking
                      accessories.
                    </li>
                    <li className="text-text-50 text-base">
                      Be mindful of pickpockets in crowded places like tourist
                      attractions and public transport.
                    </li>

                    <li className="text-text-50 text-base">
                      Trust your instincts; if something feels off, remove
                      yourself from the situation.
                    </li>
                  </ul>
                </div>

                <figure className="mt-16 mb-12">
                  <img
                    src="https://cdn-tailgrids.b-cdn.net/3.0/application/blog-details/blog-details-03/image-2.jpg"
                    alt=""
                    className="w-full"
                  />
                  <figcaption className="text-text-100 mt-2 flex items-center gap-2 text-sm font-medium">
                    <Link1AngularRight />
                    image source link
                    <a href="javascript:void(0)">unsplash</a>
                  </figcaption>
                </figure>

                <div className="mb-8 border-l-2 border-black px-7 py-4">
                  <blockquote className="text-title-50 mb-7 text-xl font-semibold italic">
                    Travel makes one modest. You see what a tiny place you
                    occupy in the world.By following these safety tips, you can
                    protect yourself and make. "
                  </blockquote>
                  <p className="text-text-50 font-medium">
                    — Gustave Flaubert, Content creator
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <h2 className="text-title-50 mb-4 text-2xl font-semibold">
                  Final Thoughts
                </h2>
                <p className="text-text-100 mb-8 text-base">
                  Traveling should be an enjoyable and stress-free experience.
                  By following these safety tips, you can protect yourself and
                  make the most of your journey. Stay alert, be prepared, and
                  most importantly—have fun!
                </p>
                <p className="text-text-100 mb-8 text-base">
                  Traveling is an exciting way to explore new cultures, meet new
                  people, and create unforgettable memories. However, ensuring
                  your safety while traveling is crucial for a smooth and
                  enjoyable experience. Whether you're traveling solo, with
                  family, or in a group, being prepared and aware of potential
                  risks can make all the difference. Here are some essential
                  travel safety tips to keep in mind for your next adventure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
