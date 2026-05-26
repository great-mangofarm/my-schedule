import { Button } from '@/components/core/button';
import { Pencil1 } from '@tailgrids/icons';

export default function Profiles6() {
  return (
    <section className="bg-background-soft-100 flex h-screen min-h-screen items-center justify-center px-4 py-10">
      <div className="bg-background-50 w-full max-w-5xl overflow-hidden rounded-3xl">
        {/* <!-- Cover Image --> */}
        <div className="relative h-50">
          <img
            src="https://cdn-tailgrids.b-cdn.net/3.0/dashboard/profiles/profile-06/cover.jpg"
            alt="Cover"
            className="h-full w-full object-cover"
          />
        </div>
        {/* <!-- Profile Content --> */}
        <div className="flex flex-col pl-10 lg:flex-row lg:pl-17.5">
          {/* <!-- Profile Image --> */}
          <div className="-mt-20 shrink-0">
            <div className="relative h-40 w-40">
              <img
                src="https://cdn-tailgrids.b-cdn.net/3.0/dashboard/profiles/profile-06/photo.png"
                alt="Profile"
                className="ring-background-50 h-40 w-40 rounded-full object-cover ring-8"
              />
            </div>
          </div>
          <div className="pt-8 pr-10 pb-10 lg:px-10">
            <div className="flex flex-col justify-between lg:flex-row">
              <div>
                <h2 className="text-title-50 text-xl font-semibold">
                  Mark Wilson
                </h2>
                <div className="text-text-100 mt-1 mb-4 flex items-center gap-2">
                  <span className="text-text-100 text-base">
                    Product Designer
                  </span>
                  <span className="text-text-200 mx-2">|</span>
                  <span className="text-text-100 text-base">Pimjo</span>
                </div>
              </div>
              <div>
                <Button appearance="outline" size="sm">
                  <Pencil1 />
                  Edit Profile
                </Button>
              </div>
            </div>
            <div className="mt-5 flex flex-wrap items-center gap-6 leading-6 lg:mt-0">
              <div className="flex gap-2">
                <h4 className="text-title-50 text-base font-semibold">156</h4>
                <p className="text-text-100 text-base font-normal">Post</p>
              </div>
              <div className="flex gap-2">
                <h4 className="text-title-50 text-base font-semibold">5.6k</h4>
                <p className="text-text-100 text-base font-normal">Follower</p>
              </div>
              <div className="flex gap-2">
                <h4 className="text-title-50 text-base font-semibold">2</h4>
                <p className="text-text-100 text-base font-normal">Following</p>
              </div>
            </div>
            <div className="mt-6">
              <h3 className="text-text-50 mb-2 text-base font-semibold">
                About
              </h3>
              <p className="text-text-100 max-w-2xl text-sm lg:pr-10">
                I'm a product designer passionate about creating intuitive and
                user-friendly digital experiences. With a strong eye for detail
                and a focus on functionality, I transform ideas into elegant
                solutions that drive engagement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
