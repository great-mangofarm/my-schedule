import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/core/dropdown';
import { Button } from '@/components/core/button';
import {
  ArrowAngularTopRight,
  Camera1,
  ClockThree,
  Globe2,
  MapMarker5,
  MenuKebab1,
  Pencil1,
} from '@tailgrids/icons';

export default function Profiles5() {
  return (
    <section className="bg-background-soft-100 flex h-screen min-h-screen items-center justify-center px-4 py-10">
      <div className="bg-background-50 w-full max-w-5xl overflow-hidden rounded-3xl">
        {/* <!-- Cover Image --> */}
        <div className="relative h-50">
          <img
            src="https://cdn-tailgrids.b-cdn.net/3.0/dashboard/profiles/profile-05/Image.jpg"
            alt="Cover"
            className="h-full w-full object-cover"
          />

          {/* <!-- Edit/Link Buttons --> */}
          <div className="absolute top-4 right-6 flex gap-3">
            <button className="text-white-100 flex h-8 w-8 items-center justify-center rounded-full bg-[#101010]/20">
              <Pencil1 className="size-5" />
            </button>
            <DropdownMenu>
              <DropdownMenuTrigger className="text-white-100 flex h-8 w-8 items-center justify-center rounded-full bg-[#101010]/20">
                <MenuKebab1 className="size-5" />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                placement="bottom end"
                className="bg-background-50 border-base-100 w-40 rounded-xl border p-1"
              >
                <DropdownMenuItem className="text-text-100 hover:bg-background-soft-100 hover:text-text-50 flex w-full cursor-pointer rounded-lg text-left text-sm font-normal">
                  View More
                </DropdownMenuItem>
                <DropdownMenuItem className="text-text-100 hover:bg-background-soft-100 hover:text-text-50 flex w-full cursor-pointer rounded-lg text-left text-sm font-normal">
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        {/* <!-- Profile Content --> */}
        <div className="flex flex-col pl-10 lg:flex-row lg:pl-17.5">
          {/* <!-- Profile Image --> */}
          <div className="-mt-20 shrink-0">
            <div className="relative h-40 w-40">
              <img
                src="https://cdn-tailgrids.b-cdn.net/3.0/dashboard/profiles/profile-05/profile.png"
                alt="Profile"
                className="ring-background-50 h-40 w-40 rounded-full object-cover ring-8"
              />
              <button className="bg-primary-600 hover:bg-primary-700 text-white-100 absolute right-1 bottom-3 inline-flex h-8 w-8 items-center justify-center rounded-full transition">
                <Camera1 className="size-5" />
              </button>
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
              <div className="flex gap-3">
                <Button appearance="outline" className="h-11">
                  <Pencil1 className="size-5" />
                  Edit Profile
                </Button>
                <Button appearance="outline" className="h-11">
                  <ArrowAngularTopRight className="size-5" />
                  Copy link
                </Button>
              </div>
            </div>
            <div className="mt-5 flex flex-wrap gap-2 lg:mt-0">
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
            <div className="mt-6">
              <h3 className="text-text-50 mb-2 text-base font-semibold">
                About
              </h3>
              <p className="text-text-100 text-sm">
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
