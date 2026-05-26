import { Button } from '@/components/core/button';
import { Clouds, Xmark2x } from '@tailgrids/icons';

export default function FileUpload4() {
  return (
    <div className="bg-background-soft-100 flex min-h-screen items-center justify-center p-4">
      <div className="bg-background-50 w-[500px] overflow-hidden rounded-2xl">
        {/* Header */}
        <div className="relative p-5">
          <div className="text-center">
            <h1 className="text-title-50 text-lg font-semibold">
              Upload Files
            </h1>
            <p className="text-text-100 text-sm">
              Drag and drop your files here, or click to browse
            </p>
          </div>
          {/* <!-- Close Button (X icon) --> */}
          <Button
            variant="ghost"
            size="sm"
            iconOnly
            className="absolute top-4 right-4"
          >
            <Xmark2x />
          </Button>
        </div>

        {/* File Upload Body */}
        <div className="space-y-5 px-8">
          {/* <!-- Drag & Drop Area --> */}
          <label
            htmlFor="file-upload"
            className="border-base-200 hover:bg-background-soft-100 flex cursor-pointer flex-col items-center rounded-lg border border-dashed p-12 transition duration-300"
          >
            {/* Upload Icon (Cloud) */}
            <div className="text-text-50 mb-4 flex justify-center">
              <Clouds className="size-6" />
            </div>

            <p className="text-title-50 mb-1 text-sm font-medium">
              Drag & drop or click to upload
            </p>
            <p className="text-text-100 mb-6 text-xs">
              JPEG, PNG, PDG, and MP4 formats, up to 50MB
            </p>
            <input id="file-upload" type="file" className="hidden" />
            {/* Browse File Button */}
            <Button variant="primary" appearance="outline" size="sm">
              Browse File
            </Button>
          </label>

          {/* 1. File Upload IN-PROGRESS (30%) with Trash Icon */}
          <div className="">
            <span className="text-text-100 mb-3 block text-base">
              2 file uploading...
            </span>
            <ul className="space-y-3">
              <li className="bg-background-50 border-base-100 relative flex items-start rounded-xl border p-3.5">
                {/* Document Icon Shape */}
                <div className="z-20 flex justify-between">
                  <div className="inline-flex h-10 w-10 items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="34"
                      viewBox="0 0 30 34"
                      fill="none"
                    >
                      <path
                        d="M6.875 0.75C5.75781 0.75 4.84375 1.66406 4.84375 2.78125V31.2188C4.84375 32.3359 5.75781 33.25 6.875 33.25H27.1875C28.3047 33.25 29.2188 32.3359 29.2188 31.2188V8.875L21.0938 0.75H6.875Z"
                        fill="#E2E5E7"
                      />
                      <path
                        d="M23.125 8.875H29.2188L21.0938 0.75V6.84375C21.0938 7.96094 22.0078 8.875 23.125 8.875Z"
                        fill="#B0B7BD"
                      />
                      <path
                        d="M29.2188 14.9688L23.125 8.875H29.2188V14.9688Z"
                        fill="#CAD1D8"
                      />
                      <path
                        d="M25.1562 27.1562C25.1562 27.7148 24.6992 28.1719 24.1406 28.1719H1.79688C1.23828 28.1719 0.78125 27.7148 0.78125 27.1562V17C0.78125 16.4414 1.23828 15.9844 1.79688 15.9844H24.1406C24.6992 15.9844 25.1562 16.4414 25.1562 17V27.1562Z"
                        fill="#F15642"
                      />
                      <path
                        d="M5.20898 19.9931C5.20898 19.7249 5.42023 19.4324 5.76047 19.4324H7.63633C8.69258 19.4324 9.6432 20.1393 9.6432 21.4942C9.6432 22.7779 8.69258 23.4929 7.63633 23.4929H6.28047V24.5654C6.28047 24.9229 6.05297 25.125 5.76047 25.125C5.49234 25.125 5.20898 24.9229 5.20898 24.5654V19.9931ZM6.28047 20.4552V22.4783H7.63633C8.1807 22.4783 8.61133 21.9979 8.61133 21.4942C8.61133 20.9264 8.1807 20.4552 7.63633 20.4552H6.28047Z"
                        fill="white"
                      />
                      <path
                        d="M11.2345 25.1251C10.9663 25.1251 10.6738 24.9788 10.6738 24.6223V20.0094C10.6738 19.7179 10.9663 19.5056 11.2345 19.5056H13.0941C16.8052 19.5056 16.7239 25.1251 13.1672 25.1251H11.2345ZM11.7463 20.4969V24.1348H13.0941C15.2868 24.1348 15.3843 20.4969 13.0941 20.4969H11.7463Z"
                        fill="white"
                      />
                      <path
                        d="M18.0389 20.5618V21.8527H20.1098C20.4023 21.8527 20.6948 22.1452 20.6948 22.4286C20.6948 22.6967 20.4023 22.9161 20.1098 22.9161H18.0389V24.6213C18.0389 24.9057 17.8368 25.124 17.5524 25.124C17.1949 25.124 16.9766 24.9057 16.9766 24.6213V20.0083C16.9766 19.7168 17.1959 19.5046 17.5524 19.5046H20.4033C20.7608 19.5046 20.972 19.7168 20.972 20.0083C20.972 20.2683 20.7608 20.5608 20.4033 20.5608H18.0389V20.5618Z"
                        fill="white"
                      />
                      <path
                        d="M24.1406 28.1719H4.84375V29.1875H24.1406C24.6992 29.1875 25.1562 28.7305 25.1562 28.1719V27.1562C25.1562 27.7148 24.6992 28.1719 24.1406 28.1719Z"
                        fill="#CAD1D8"
                      />
                    </svg>
                  </div>
                </div>
                <div className="z-20 ml-2.5 min-w-0 flex-grow">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-text-50 mb-1 truncate text-base font-semibold">
                        Brand Guidelines.pdf
                      </p>
                      <p className="text-text-100 mb-2 text-sm">452 kb.</p>
                    </div>
                    <div className="flex items-center">
                      <span className="text-text-50 text-xs">75%</span>
                      <span className="bg-background-soft-500 mx-2 h-1 w-1 rounded-full text-xs"></span>
                      <span className="text-text-50 text-xs">15 sec left</span>
                      <Button
                        variant="ghost"
                        size="xs"
                        iconOnly
                        className="ml-3 hover:text-red-500"
                      >
                        <Xmark2x />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="bg-background-soft-100 absolute top-0 left-0 z-10 h-full w-[80%] rounded-l-xl"></div>
              </li>
              <li className="bg-background-50 border-base-100 relative flex items-start rounded-xl border p-3.5">
                {/* Document Icon Shape */}
                <div className="z-20 flex justify-between">
                  <div className="inline-flex h-10 w-10 items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="34"
                      viewBox="0 0 30 34"
                      fill="none"
                    >
                      <path
                        d="M6.875 0.75C5.75781 0.75 4.84375 1.66406 4.84375 2.78125V31.2188C4.84375 32.3359 5.75781 33.25 6.875 33.25H27.1875C28.3047 33.25 29.2188 32.3359 29.2188 31.2188V8.875L21.0938 0.75H6.875Z"
                        fill="#E2E5E7"
                      />
                      <path
                        d="M23.125 8.875H29.2188L21.0938 0.75V6.84375C21.0938 7.96094 22.0078 8.875 23.125 8.875Z"
                        fill="#B0B7BD"
                      />
                      <path
                        d="M29.2188 14.9688L23.125 8.875H29.2188V14.9688Z"
                        fill="#CAD1D8"
                      />
                      <path
                        d="M25.1562 27.1562C25.1562 27.7148 24.6992 28.1719 24.1406 28.1719H1.79688C1.23828 28.1719 0.78125 27.7148 0.78125 27.1562V17C0.78125 16.4414 1.23828 15.9844 1.79688 15.9844H24.1406C24.6992 15.9844 25.1562 16.4414 25.1562 17V27.1562Z"
                        fill="#F15642"
                      />
                      <path
                        d="M5.20898 19.9931C5.20898 19.7249 5.42023 19.4324 5.76047 19.4324H7.63633C8.69258 19.4324 9.6432 20.1393 9.6432 21.4942C9.6432 22.7779 8.69258 23.4929 7.63633 23.4929H6.28047V24.5654C6.28047 24.9229 6.05297 25.125 5.76047 25.125C5.49234 25.125 5.20898 24.9229 5.20898 24.5654V19.9931ZM6.28047 20.4552V22.4783H7.63633C8.1807 22.4783 8.61133 21.9979 8.61133 21.4942C8.61133 20.9264 8.1807 20.4552 7.63633 20.4552H6.28047Z"
                        fill="white"
                      />
                      <path
                        d="M11.2345 25.1251C10.9663 25.1251 10.6738 24.9788 10.6738 24.6223V20.0094C10.6738 19.7179 10.9663 19.5056 11.2345 19.5056H13.0941C16.8052 19.5056 16.7239 25.1251 13.1672 25.1251H11.2345ZM11.7463 20.4969V24.1348H13.0941C15.2868 24.1348 15.3843 20.4969 13.0941 20.4969H11.7463Z"
                        fill="white"
                      />
                      <path
                        d="M18.0389 20.5618V21.8527H20.1098C20.4023 21.8527 20.6948 22.1452 20.6948 22.4286C20.6948 22.6967 20.4023 22.9161 20.1098 22.9161H18.0389V24.6213C18.0389 24.9057 17.8368 25.124 17.5524 25.124C17.1949 25.124 16.9766 24.9057 16.9766 24.6213V20.0083C16.9766 19.7168 17.1959 19.5046 17.5524 19.5046H20.4033C20.7608 19.5046 20.972 19.7168 20.972 20.0083C20.972 20.2683 20.7608 20.5608 20.4033 20.5608H18.0389V20.5618Z"
                        fill="white"
                      />
                      <path
                        d="M24.1406 28.1719H4.84375V29.1875H24.1406C24.6992 29.1875 25.1562 28.7305 25.1562 28.1719V27.1562C25.1562 27.7148 24.6992 28.1719 24.1406 28.1719Z"
                        fill="#CAD1D8"
                      />
                    </svg>
                  </div>
                </div>
                <div className="z-20 ml-2.5 min-w-0 flex-grow">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-text-50 mb-1 truncate text-base font-semibold">
                        Brand Guidelines.pdf
                      </p>
                      <p className="text-text-100 mb-2 text-sm">452 kb.</p>
                    </div>
                    <div className="flex items-center">
                      <span className="text-text-50 text-xs">75%</span>
                      <span className="bg-background-soft-500 mx-2 h-1 w-1 rounded-full text-xs"></span>
                      <span className="text-text-50 text-xs">15 sec left</span>
                      <Button
                        variant="ghost"
                        size="xs"
                        iconOnly
                        className="ml-3 hover:text-red-500"
                      >
                        <Xmark2x />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="bg-background-soft-100 absolute top-0 left-0 z-10 h-full w-[80%] rounded-l-xl"></div>
              </li>
              <li className="bg-background-50 border-base-100 relative flex items-start rounded-xl border p-3.5">
                {/* Document Icon Shape */}
                <div className="z-20 flex justify-between">
                  <div className="inline-flex h-10 w-10 items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="34"
                      viewBox="0 0 30 34"
                      fill="none"
                    >
                      <path
                        d="M6.875 0.75C5.75781 0.75 4.84375 1.66406 4.84375 2.78125V31.2188C4.84375 32.3359 5.75781 33.25 6.875 33.25H27.1875C28.3047 33.25 29.2188 32.3359 29.2188 31.2188V8.875L21.0938 0.75H6.875Z"
                        fill="#E2E5E7"
                      />
                      <path
                        d="M23.125 8.875H29.2188L21.0938 0.75V6.84375C21.0938 7.96094 22.0078 8.875 23.125 8.875Z"
                        fill="#B0B7BD"
                      />
                      <path
                        d="M29.2188 14.9688L23.125 8.875H29.2188V14.9688Z"
                        fill="#CAD1D8"
                      />
                      <path
                        d="M25.1562 27.1562C25.1562 27.7148 24.6992 28.1719 24.1406 28.1719H1.79688C1.23828 28.1719 0.78125 27.7148 0.78125 27.1562V17C0.78125 16.4414 1.23828 15.9844 1.79688 15.9844H24.1406C24.6992 15.9844 25.1562 16.4414 25.1562 17V27.1562Z"
                        fill="#F15642"
                      />
                      <path
                        d="M5.20898 19.9931C5.20898 19.7249 5.42023 19.4324 5.76047 19.4324H7.63633C8.69258 19.4324 9.6432 20.1393 9.6432 21.4942C9.6432 22.7779 8.69258 23.4929 7.63633 23.4929H6.28047V24.5654C6.28047 24.9229 6.05297 25.125 5.76047 25.125C5.49234 25.125 5.20898 24.9229 5.20898 24.5654V19.9931ZM6.28047 20.4552V22.4783H7.63633C8.1807 22.4783 8.61133 21.9979 8.61133 21.4942C8.61133 20.9264 8.1807 20.4552 7.63633 20.4552H6.28047Z"
                        fill="white"
                      />
                      <path
                        d="M11.2345 25.1251C10.9663 25.1251 10.6738 24.9788 10.6738 24.6223V20.0094C10.6738 19.7179 10.9663 19.5056 11.2345 19.5056H13.0941C16.8052 19.5056 16.7239 25.1251 13.1672 25.1251H11.2345ZM11.7463 20.4969V24.1348H13.0941C15.2868 24.1348 15.3843 20.4969 13.0941 20.4969H11.7463Z"
                        fill="white"
                      />
                      <path
                        d="M18.0389 20.5618V21.8527H20.1098C20.4023 21.8527 20.6948 22.1452 20.6948 22.4286C20.6948 22.6967 20.4023 22.9161 20.1098 22.9161H18.0389V24.6213C18.0389 24.9057 17.8368 25.124 17.5524 25.124C17.1949 25.124 16.9766 24.9057 16.9766 24.6213V20.0083C16.9766 19.7168 17.1959 19.5046 17.5524 19.5046H20.4033C20.7608 19.5046 20.972 19.7168 20.972 20.0083C20.972 20.2683 20.7608 20.5608 20.4033 20.5608H18.0389V20.5618Z"
                        fill="white"
                      />
                      <path
                        d="M24.1406 28.1719H4.84375V29.1875H24.1406C24.6992 29.1875 25.1562 28.7305 25.1562 28.1719V27.1562C25.1562 27.7148 24.6992 28.1719 24.1406 28.1719Z"
                        fill="#CAD1D8"
                      />
                    </svg>
                  </div>
                </div>
                <div className="z-20 ml-2.5 min-w-0 flex-grow">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-text-50 mb-1 truncate text-base font-semibold">
                        Brand Guidelines.pdf
                      </p>
                      <p className="text-text-100 mb-2 text-sm">452 kb.</p>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <div className="text-text-100 ml-3 cursor-pointer rounded-full p-1">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10 0.625C15.1777 0.625 19.375 4.82233 19.375 10C19.375 15.1777 15.1777 19.375 10 19.375C4.82233 19.375 0.625 15.1777 0.625 10C0.625 4.82233 4.82233 0.625 10 0.625Z"
                            fill="#16A34A"
                          />
                          <path
                            d="M10 0.625C15.1777 0.625 19.375 4.82233 19.375 10C19.375 15.1777 15.1777 19.375 10 19.375C4.82233 19.375 0.625 15.1777 0.625 10C0.625 4.82233 4.82233 0.625 10 0.625Z"
                            stroke="#16A34A"
                            strokeWidth="1.25"
                          />
                          <path
                            d="M14 7L8.5 12.5L6 10"
                            stroke="white"
                            strokeWidth="1.94437"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="flex items-center">
                        <span className="text-text-50 text-xs">75%</span>
                        <span className="bg-background-soft-500 mx-2 h-1 w-1 rounded-full text-xs"></span>
                        <span className="text-text-50 text-xs">
                          15 sec left
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-background-soft-100 absolute top-0 left-0 z-10 h-full w-full rounded-xl"></div>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex gap-4 px-8 py-6">
          <Button variant="primary" appearance="outline" className="w-full">
            Cancel
          </Button>
          <Button variant="primary" className="w-full">
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
