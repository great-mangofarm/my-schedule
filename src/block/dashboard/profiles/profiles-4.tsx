import { Button } from '@/components/core/button';
import { Plus } from '@tailgrids/icons';

export default function Profiles4() {
  return (
    <div className="bg-background-soft-100 flex h-screen items-center justify-center px-4 py-10">
      <div className="bg-background-50 mx-auto w-[530px] overflow-hidden rounded-3xl">
        <div className="relative h-[365px]">
          {/* <!-- fixed gradient --> */}
          <div className="to-background-50 absolute inset-0 bg-linear-to-b from-transparent"></div>
          <img
            src="https://cdn-tailgrids.b-cdn.net/3.0/dashboard/profiles/profile-04/cover.png"
            width="529"
            alt=""
          />
          <div className="absolute inset-x-8 bottom-0 flex justify-between pb-10">
            <div>
              <img
                src="https://cdn-tailgrids.b-cdn.net/3.0/dashboard/profiles/profile-04/photo.png"
                className="ring-background-50 h-30 w-30 rounded-full ring-4"
                alt=""
              />
            </div>
            <div className="divide-base-100 flex items-end divide-x leading-6">
              <div className="flex gap-2 pr-2">
                <h4 className="text-title-50 text-base font-semibold">5.6k</h4>
                <p className="text-text-100 text-base font-normal">Follower</p>
              </div>
              <div className="flex gap-2 pl-2">
                <h4 className="text-title-50 text-base font-semibold">2</h4>
                <p className="text-text-100 text-base font-normal">Following</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative z-20 px-8 pb-10">
          <div className="mb-6 flex justify-between">
            <div>
              <h3 className="text-title-50 text-xl font-semibold">
                Mark Wilson
              </h3>
              <div className="divide-base-100 flex divide-x">
                <p className="text-text-100 pr-2 text-base">Product Designer</p>
                <p className="text-text-100 pl-2 text-base">Pimjo</p>
              </div>
            </div>
            <Button appearance="outline" size="sm" className="h-11 shrink-0">
              <Plus />
              Follow
            </Button>
          </div>
          <h3 className="text-title-50 font-semibold">About</h3>
          <p className="text-text-100 text-sm leading-5">
            I'm a product designer passionate about creating intuitive and
            user-friendly digital experiences. With a strong eye for detail and
            a focus on functionality, I transform ideas into elegant solutions
            that drive engagement.
          </p>
        </div>
      </div>
    </div>
  );
}
