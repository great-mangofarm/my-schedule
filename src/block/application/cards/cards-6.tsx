import { Button } from '@/components/core/button';
import { Envelope1, Plus } from '@tailgrids/icons';

export default function Cards6() {
  return (
    <div className="bg-background-soft-50 flex h-screen items-center justify-center px-4 py-10">
      <div className="bg-background-50 w-full max-w-[545px] overflow-hidden rounded-2xl shadow-sm">
        <div className="flex flex-col sm:flex-row">
          {/* <!-- Profile Image (Left) --> */}
          <div className="shrink-0 rounded-lg p-2.5">
            <img
              src="https://cdn-tailgrids.b-cdn.net/3.0/application/cards/card-06/image.jpg"
              alt="Kianna Saris"
              className="h-full w-full rounded-lg object-cover"
            />
          </div>

          {/* <!-- Profile Info (Right) --> */}
          <div className="flex flex-grow flex-col justify-between p-6">
            {/* <!-- Name and Title --> */}
            <div>
              <h2 className="text-title-50 mb-1 text-xl font-bold">
                Kianna Saris
              </h2>
              <p className="text-text-100 mb-6 text-sm">Fashion Designer</p>

              {/* <!-- Stats --> */}
              <div className="mb-6 flex space-x-6">
                <div className="text-center">
                  <p className="text-text-100 text-sm">Post</p>
                  <p className="text-title-50 font-bold">156</p>
                </div>
                <div className="text-center">
                  <p className="text-text-100 text-sm">Follower</p>
                  <p className="text-title-50 font-bold">5.6k</p>
                </div>
                <div className="text-center">
                  <p className="text-text-100 text-sm">Following</p>
                  <p className="text-title-50 font-bold">2</p>
                </div>
              </div>
            </div>

            {/* <!-- Action Buttons --> */}
            <div className="flex space-x-3">
              <Button variant="primary" appearance="fill" className="flex-1">
                Follow
                <Plus className="size-5" />
              </Button>
              <Button appearance="outline">
                Message
                <Envelope1 className="size-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
