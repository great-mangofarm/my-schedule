import { Avatar } from '@/components/core/avatar';

export default function Cards1() {
  return (
    <div className="bg-background-soft-50 flex h-screen items-center justify-center px-4 py-10">
      <div className="bg-background-50 max-w-100 overflow-hidden rounded-2xl">
        <div className="overflow-hidden">
          <img
            src="https://cdn-tailgrids.b-cdn.net/3.0/application/cards/card-01/card-1.jpg"
            alt="Modern Building"
            className="h-full w-full rounded-t-2xl object-cover"
          />
        </div>
        <div className="p-5">
          <div className="mb-6 flex items-center">
            <Avatar
              src="https://cdn-tailgrids.b-cdn.net/3.0/application/cards/card-01/author.png"
              alt="Leo Septimus"
              size="lg"
              fallback="LS"
            />
            <div className="pl-3">
              <h4 className="text-title-50 text-base font-medium">
                Leo Septimus
              </h4>
              <p className="text-text-100 text-sm">Entrepreneur</p>
            </div>
          </div>

          <p className="text-text-100 text-base">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the
          </p>
        </div>
      </div>
    </div>
  );
}
