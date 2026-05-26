import { Dribbble, Facebook, Instagram } from '@tailgrids/icons';

export default function Profiles2() {
  return (
    <div className="bg-background-soft-100 flex h-screen items-center justify-center px-4 py-10">
      <div className="bg-background-50 mx-auto w-[382px] rounded-2xl p-2.5">
        <img
          src="https://cdn-tailgrids.b-cdn.net/3.0/dashboard/profiles/profile-02/photo.jpg"
          className="w-full rounded-xl"
          alt=""
        />
        <div className="px-4 py-4">
          <h4 className="text-title-50 text-xl font-semibold">Mark Wilson</h4>
          <span className="text-text-100 text-base">@markwil</span>
          <p className="text-text-100 mt-3 text-sm">
            Passionate about creating intuitive, aesthetic digital products that
            solve real problems.
          </p>
          <div className="flex justify-between pt-5">
            <div className="flex gap-3.5">
              <div className="flex items-center gap-2">
                <h4 className="text-title-50 text-base font-semibold">5.6k</h4>
                <p className="text-text-100 text-sm">Follower</p>
              </div>
              <div className="flex items-center gap-2">
                <h4 className="text-title-50 text-base font-semibold">2</h4>
                <p className="text-text-100 text-sm">Following</p>
              </div>
            </div>
            <div className="flex items-center gap-3.5">
              <a
                href="javascript:void(0)"
                className="text-text-100 hover:text-text-50 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="size-4" />
              </a>
              <a
                href="javascript:void(0)"
                className="text-text-100 hover:text-text-50 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Dribbble className="size-4" />
              </a>
              <a
                href="javascript:void(0)"
                className="text-text-100 hover:text-text-50 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
