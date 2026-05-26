import { Button } from '@/components/core/button';
import { ChevronRight } from '@tailgrids/icons';

export default function Cards5() {
  return (
    <div className="bg-background-soft-50 flex h-screen items-center justify-center px-4 py-10">
      <div className="bg-background-50 w-full max-w-4xl overflow-hidden rounded-2xl shadow-sm">
        <div className="flex flex-col md:flex-row">
          {/* <!-- Text Content (Left) --> */}
          <div className="order-2 flex flex-col justify-between p-5 pt-2 sm:order-1 sm:p-9 sm:pr-6 md:w-1/2">
            <div>
              <h2 className="text-title-50 mb-4 text-2xl font-semibold">
                Barry Geraghty's blog Vango runs unchained up in trip.
              </h2>

              <p className="text-text-100">
                William Hill ambassador Barry Geraghty previews Saturday's races
                at Uttoxeter, Kempton, and Thurles.
              </p>
            </div>

            <div className="mt-8">
              <Button variant="primary" appearance="fill">
                Learn More
                <ChevronRight className="size-5" />
              </Button>
            </div>
          </div>

          {/* <!-- Image (Right) --> */}
          <div className="order-1 p-3 sm:order-2 md:w-1/2">
            <img
              src="https://cdn-tailgrids.b-cdn.net/3.0/application/cards/card-05/image.jpg"
              alt="Snowy Landscape"
              className="h-full w-full rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
