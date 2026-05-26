import { ClockThree, MapMarker5 } from '@tailgrids/icons';

export default function Cards4() {
  return (
    <div className="bg-background-soft-50 flex h-screen items-center justify-center px-4 py-10">
      <div className="text-white-100 w-full max-w-md rounded-2xl bg-gradient-to-r from-[#3758F9] to-[#4895ef] p-6 shadow-sm">
        {/* <!-- Date --> */}
        <div className="mb-8">
          <div className="text-4xl font-bold">12</div>
          <div className="text-sm opacity-90">March, 2025</div>
        </div>

        {/* <!-- Event Details --> */}
        <div>
          <h2 className="mb-4 text-xl font-semibold">
            World Day Against Cyber Censorship
          </h2>

          <div className="mb-2 flex items-center">
            <ClockThree className="mr-2 size-5 opacity-90" />
            <span className="opacity-90">8pm -10pm</span>
          </div>

          <div className="flex items-center">
            <MapMarker5 className="mr-2 size-5 opacity-90" />
            <span className="opacity-90">Bridge Park Florida, USA</span>
          </div>
        </div>
      </div>
    </div>
  );
}
