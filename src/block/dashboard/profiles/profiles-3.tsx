import { ClockThree, Globe2, MapMarker5 } from '@tailgrids/icons';

export default function Profiles3() {
  return (
    <section className="bg-background-soft-100 flex h-screen items-center justify-center px-4 py-10">
      {/* <!-- Profile Card --> */}
      <div className="bg-background-50 mx-auto max-w-[507px] overflow-hidden rounded-3xl p-2.5">
        {/* <!-- Header with Abstract Background --> */}
        <div className="relative h-47">
          {/* <!-- Abstract Blue Swirl Pattern --> */}
          <div className="absolute inset-0">
            <img
              src="https://cdn-tailgrids.b-cdn.net/3.0/dashboard/profiles/profile-03/cover.png"
              className="rounded-2xl"
              alt=""
            />
          </div>

          {/* <!-- Profile Image --> */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 transform">
            <div className="bg-background-50 h-30 w-30 rounded-full p-1 shadow-xs">
              <img
                className="h-full w-full rounded-full object-cover"
                src="https://cdn-tailgrids.b-cdn.net/3.0/dashboard/profiles/profile-03/photo.png"
                alt="Mark Wilson"
              />
            </div>
          </div>
        </div>

        {/* <!-- Profile Content --> */}
        <div className="px-8 pt-20 text-center">
          {/* <!-- Name and Username --> */}
          <h2 className="text-title-50 mb-1 text-xl font-semibold">
            Mark Wilson
          </h2>
          <p className="text-text-100 mb-3 text-sm">@markwil</p>

          {/* <!-- Bio --> */}
          <p className="text-text-100 mx-auto mb-6 max-w-xs text-sm leading-5">
            Passionate about creating intuitive, aesthetic digital products that
            solve real problems.
          </p>

          {/* <!-- Info Items --> */}
          <div className="flex justify-center gap-2">
            {/* <!-- Location --> */}
            <div className="text-primary-500 bg-primary-50 flex items-center justify-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium">
              <MapMarker5 className="size-4" />
              <span>San Fransisco, USA</span>
            </div>

            {/* <!-- Website --> */}
            <div className="flex items-center justify-center gap-1 rounded-full bg-cyan-50 px-2 py-0.5 text-xs font-medium text-cyan-700">
              <Globe2 className="size-4" />
              <span className="text-teal-600">pimjo.com</span>
            </div>

            {/* <!-- Join Date --> */}
            <div className="flex items-center justify-center gap-1 rounded-full bg-purple-50 px-2 py-0.5 text-xs font-medium text-purple-700">
              <ClockThree className="size-4" />
              <span className="text-purple-600">Joined 25 Jun 2025</span>
            </div>
          </div>
        </div>

        {/* <!-- Stats Grid --> */}
        <div className="divide-base-100 bg-background-soft-50 mt-9 flex justify-center divide-x rounded-t rounded-b-2xl px-5 py-2.5">
          <div className="px-6">
            <p className="text-text-100 text-sm">Experience</p>
            <h4 className="text-title-50 text-lg font-semibold">5 years</h4>
          </div>
          <div className="px-6">
            <p className="text-text-100 text-sm">Projects</p>
            <h4 className="text-title-50 text-lg font-semibold">400+</h4>
          </div>
          <div className="px-6">
            <p className="text-text-100 text-sm">Followers</p>
            <h4 className="text-title-50 text-lg font-semibold">1.9k</h4>
          </div>
        </div>
      </div>
    </section>
  );
}
