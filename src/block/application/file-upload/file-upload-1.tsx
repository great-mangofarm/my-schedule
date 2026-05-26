import { Button } from '@/components/core/button';
import { QuestionMarkCircle, UploadCloud, Xmark2x } from '@tailgrids/icons';

export default function FileUpload1() {
  return (
    <div className="bg-background-soft-100 flex min-h-screen items-center justify-center p-4">
      <div className="bg-background-50 w-[500px] overflow-hidden rounded-2xl p-1">
        {/* <!-- Header --> */}
        <div className="border-base-100 flex items-center justify-between border-b p-5">
          <h1 className="text-title-50 text-xl font-semibold">Upload Files</h1>
          {/* <!-- Close Button (X icon) --> */}
          <Button variant="ghost" size="sm" iconOnly>
            <Xmark2x />
          </Button>
        </div>

        {/* <!-- File Upload Body --> */}
        <div className="p-8">
          {/* <!-- Drag & Drop Area --> */}
          <label
            htmlFor="file-upload"
            className="border-base-200 hover:bg-background-soft-100 flex cursor-pointer flex-col items-center rounded-lg border border-dashed p-12 transition duration-300"
          >
            {/* <!-- Upload Icon (Cloud) --> */}
            <div className="text-text-50 mb-4 flex justify-center">
              <UploadCloud className="size-6" />
            </div>

            <p className="text-title-50 mb-1 text-sm font-medium">
              Drag & drop or click to upload
            </p>
            <p className="text-text-100 mb-6 text-xs">
              JPEG, PNG, PDG, and MP4 formats, up to 50MB
            </p>
            <input id="file-upload" type="file" className="hidden" />
            {/* <!-- Browse File Button --> */}
            <Button variant="primary" appearance="outline" size="sm">
              Browse File
            </Button>
          </label>
        </div>

        {/* <!-- Footer / Action Buttons --> */}
        <div className="bg-background-soft-50 flex items-center justify-between rounded-t rounded-b-xl p-5">
          {/* <!-- Help Center Link --> */}
          <div className="text-text-100 flex items-center gap-1 text-sm font-medium">
            <QuestionMarkCircle className="size-5" />
            Help Center
          </div>

          {/* <!-- Action Buttons --> */}
          <div className="flex space-x-3">
            <Button variant="primary" appearance="outline" size="sm">
              Cancel
            </Button>
            <Button variant="primary" size="sm">
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
