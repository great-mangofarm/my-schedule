import { Button } from '@/components/core/button';

export default function Profiles1() {
  return (
    <div className="bg-background-soft-100 flex h-screen items-center justify-center px-4 py-10">
      <div className="bg-background-50 mx-auto w-[390px] rounded-3xl p-2">
        <div className="space-y-7">
          <div className="relative h-[268px] overflow-hidden">
            <img
              src="https://cdn-tailgrids.b-cdn.net/3.0/dashboard/profiles/profile-01/cover.jpg"
              className="h-full w-full rounded-[20px] object-cover"
              alt=""
            />

            {/* <!-- fixed gradient --> */}
            <div className="to-backgound-100 absolute inset-0 rounded-b-[18px] bg-linear-to-b from-transparent"></div>
            <div className="absolute bottom-0 left-1/2 flex -translate-x-1/2 flex-col items-center">
              <div className="relative h-25 w-25 shrink-0">
                <img
                  src="https://cdn-tailgrids.b-cdn.net/3.0/dashboard/profiles/profile-01/avatar.png"
                  className="ring-background-50 h-25 w-25 rounded-full object-cover ring-4"
                  alt=""
                />
                <span className="ring-background-50 bg-success-500 absolute right-0 bottom-3 block h-3 w-3 rounded-full ring-2"></span>
              </div>
              <h3 className="text-title-50 mt-4 text-xl font-semibold">
                Emily Johnson
              </h3>
              <p className="text-text-100 text-sm">Senior Product Designer</p>
            </div>
          </div>

          <div className="space-y-7 px-5 pb-5">
            <div className="bg-background-soft-50 flex justify-between gap-10 rounded-lg px-5 py-2.5">
              <div>
                <p className="text-text-100 text-sm">Experience</p>
                <h4 className="text-title-50 text-lg font-semibold">5 years</h4>
              </div>
              <div>
                <p className="text-text-100 text-sm">Projects</p>
                <h4 className="text-title-50 text-lg font-semibold">400+</h4>
              </div>
              <div>
                <p className="text-text-100 text-sm">Followers</p>
                <h4 className="text-title-50 text-lg font-semibold">1.9k</h4>
              </div>
            </div>
            <div className="flex gap-3">
              <Button className="h-11 flex-1">Hire Now</Button>
              <Button appearance="outline" className="h-11 flex-1">
                View Details
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
