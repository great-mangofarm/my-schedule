import { AvatarGroup } from '@/components/core/avatar';
import { Button } from '@/components/core/button';

export default function Cards13() {
  const attendees = [
    {
      src: 'https://cdn-tailgrids.b-cdn.net/3.0/application/cards/card-13/ga-1.png',
      alt: 'Attendee 1',
    },
    {
      src: 'https://cdn-tailgrids.b-cdn.net/3.0/application/cards/card-13/ga-2.png',
      alt: 'Attendee 2',
    },
    {
      src: 'https://cdn-tailgrids.b-cdn.net/3.0/application/cards/card-13/ga-3.png',
      alt: 'Attendee 3',
    },
    {
      src: 'https://cdn-tailgrids.b-cdn.net/3.0/application/cards/card-13/ga-4.png',
      alt: 'Attendee 4',
    },
  ];

  return (
    <div className="bg-background-soft-50 flex h-screen items-center justify-center px-4 py-10">
      <div className="bg-background-50 w-full max-w-[400px] rounded-2xl p-6 shadow-sm">
        {/* <!-- Event Details --> */}
        <div className="mb-4">
          <h2 className="text-title-50 mb-3 text-xl font-bold">
            The Sun Also Rises by Ernest Hemingway
          </h2>
          <p className="text-text-100 text-base">March 17, 2:00 Pm</p>
        </div>

        {/* <!-- Divider --> */}
        <div className="border-base-100 my-6 border-t"></div>

        {/* <!-- Attendees and Join Button --> */}
        <div className="flex items-center justify-between">
          <AvatarGroup data={attendees} size="sm" />

          <Button variant="primary" appearance="fill" size="sm">
            Join Now
          </Button>
        </div>
      </div>
    </div>
  );
}
