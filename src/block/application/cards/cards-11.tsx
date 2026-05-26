import { Button } from '@/components/core/button';
import { CheckCircle1, StarFatFalling } from '@tailgrids/icons';

export default function Cards11() {
  return (
    <div className="bg-background-soft-50 flex h-screen items-center justify-center px-4 py-10">
      <div className="bg-background-50 w-full max-w-[388px] rounded-2xl px-9 py-10">
        {/* <!-- Star Icon --> */}
        <div className="mb-4 flex justify-center">
          <StarFatFalling className="size-12 text-yellow-500" />
        </div>

        {/* <!-- Heading --> */}
        <h2 className="text-title-50 mb-6 text-center text-xl font-bold">
          What Is the Importance of Social Media in Today's World?
        </h2>

        {/* <!-- Social Media List --> */}
        <div className="mb-6 space-y-4">
          {/* <!-- Facebook --> */}
          <div className="flex items-start">
            <div className="mt-1 shrink-0">
              <CheckCircle1 className="text-success-500 size-5" />
            </div>
            <div className="ml-3">
              <h3 className="text-title-50 text-sm font-semibold">Facebook</h3>
              <p className="text-text-100 mt-1 text-xs">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>

          {/* <!-- Instagram --> */}
          <div className="flex items-start">
            <div className="mt-1 shrink-0">
              <CheckCircle1 className="text-success-500 size-5" />
            </div>
            <div className="ml-3">
              <h3 className="text-title-50 text-sm font-semibold">Instagram</h3>
              <p className="text-text-100 mt-1 text-xs">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
        </div>

        {/* <!-- Button --> */}
        <Button variant="primary" appearance="fill" className="w-full">
          Got it
        </Button>
      </div>
    </div>
  );
}
