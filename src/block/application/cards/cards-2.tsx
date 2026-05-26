import { Button } from '@/components/core/button';
import { Phone } from '@tailgrids/icons';

export default function Cards2() {
  return (
    <div className="bg-background-soft-50 flex h-screen items-center justify-center px-4 py-10">
      <div className="bg-background-50 w-full max-w-[400px] rounded-2xl p-8 text-center">
        {/* <!-- Icon --> */}
        <div className="bg-primary-500/10 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full">
          <Phone className="text-primary-500 size-7" />
        </div>

        {/* <!-- Content --> */}
        <h3 className="text-title-50 mb-3 text-2xl font-semibold">
          Fully Responsive
        </h3>

        <p className="text-text-100 mb-8 text-base">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the
        </p>

        {/* <!-- Button --> */}
        <Button variant="primary" appearance="fill" className="w-full">
          Visit Now
        </Button>
      </div>
    </div>
  );
}
