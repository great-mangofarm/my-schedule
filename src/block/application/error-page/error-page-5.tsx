import { Button } from '@/components/core/button';

export default function ErrorPage5() {
  return (
    <section className="bg-background-50">
      <div className="mx-auto max-w-7xl overflow-hidden px-4 xl:px-0">
        <div className="mx-auto max-w-[696px] py-16 sm:py-24">
          <h1 className="text-title-50 mb-4 text-4xl font-normal sm:text-6xl">
            The page you're looking for is unavailable.
          </h1>
          <p className="text-text-100 mb-7 text-base">
            The page you're looking for doesn't exist or may have been moved.
            Please check the URL for any mistakes, or head back to the homepage
            to continue browsing.
          </p>
          <Button variant="primary" appearance="outline">
            Back to homepage
          </Button>
        </div>
        <div className="rounded-lg">
          <img
            src="https://cdn-tailgrids.b-cdn.net/3.0/application/error/image-2.jpg"
            className="w-full rounded-lg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
