import { Button } from '@/components/core/button';
import { Cart2 } from '@tailgrids/icons';

export default function Cards7() {
  return (
    <div className="bg-background-soft-50 flex h-screen items-center justify-center px-4 py-10">
      <div className="bg-background-50 w-full max-w-xs overflow-hidden rounded-2xl shadow-sm">
        {/* <!-- Product Image --> */}
        <div className="rounded-lg p-2.5">
          <img
            src="https://cdn-tailgrids.b-cdn.net/3.0/application/cards/card-07/image.jpg"
            alt="Nike Air Pro"
            className="h-auto w-full rounded-lg"
          />
        </div>

        {/* <!-- Product Details --> */}
        <div>
          <div className="px-5 py-2.5">
            <h2 className="text-title-50 mb-2 text-xl font-bold">
              Nike Air Pro
            </h2>

            <p className="text-text-100 text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>

            {/* <!-- Color Options --> */}
            <div className="my-5">
              <p className="text-title-50 mb-2 text-sm font-medium">Color</p>
              <div className="flex space-x-2">
                <div className="h-3.5 w-3.5 cursor-pointer rounded-full bg-black ring-1 ring-black ring-offset-2"></div>
                <div className="h-3.5 w-3.5 cursor-pointer rounded-full bg-indigo-500"></div>
                <div className="h-3.5 w-3.5 cursor-pointer rounded-full bg-green-700"></div>
              </div>
            </div>
          </div>
          {/* <!-- Price and Add to Cart --> */}
          <div className="border-base-100 flex items-center justify-between border-t px-5 py-4">
            <span className="text-title-50 text-xl font-bold">$29.99</span>
            <Button variant="primary" appearance="fill">
              Add To Cart
              <Cart2 className="size-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
