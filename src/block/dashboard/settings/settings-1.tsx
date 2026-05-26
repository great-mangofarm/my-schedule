import {
  Facebook,
  Instagram1,
  Linkedin,
  Pencil1,
  Twitter,
  Xmark2x,
} from '@tailgrids/icons';
import { useState } from 'react';

export default function Settings1() {
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);

  return (
    <div className="flex min-h-screen">
      <aside className="bg-background-50 border-base-100 hidden w-75 border-r p-5 xl:block"></aside>
      <div className="bg-background-soft-50 h-auto w-full flex-1">
        <header className="bg-background-50 flex h-20 items-center p-5">
          Placeholder Header
        </header>

        {/* <!-- Settings --> */}
        <div className="px-6">
          {/* <!-- Breadcrumb --> */}
          <div className="my-6 flex items-center justify-between">
            <div>
              <h3 className="text-title-50 text-xl font-semibold">
                User Profile
              </h3>
            </div>
            <ul className="flex items-center space-x-1.5">
              <li className="text-text-100 text-sm">Home</li>
              <li className="text-text-100 text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M5.83333 12.6665L10 8.49984L5.83333 4.33317"
                    stroke="currentColor"
                    stroke-width="1.2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </li>
              <li className="text-title-50 text-sm">User Profile</li>
            </ul>
          </div>
          {/* Main */}
          <div className="bg-background-50 border-base-50 space-y-6 rounded-2xl border p-6">
            {/* Info */}
            <div>
              <h3 className="text-title-50 mb-7 text-lg font-semibold">
                My Profile
              </h3>
              <div className="border-base-50 flex flex-col justify-between gap-5 rounded-2xl border p-6 lg:flex-row">
                <div className="flex flex-col items-center justify-center gap-6 lg:flex-row">
                  <div>
                    <img
                      src="https://cdn-tailgrids.b-cdn.net/3.0/dashboard/settings/avatar.png"
                      className="h-20 w-20 rounded-full"
                      alt=""
                    />
                  </div>
                  <div className="text-center lg:text-left">
                    <h3 className="text-title-50 mb-1 text-lg font-semibold">
                      Emirhan Boruch
                    </h3>
                    <div className="text-text-100 flex gap-2 text-sm">
                      <p>Team Manager</p>
                      <span className="text-text-200">|</span>
                      <p>Leeds, United Kingdom</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-5 lg:flex-row">
                  <ul className="flex items-center gap-2">
                    <li>
                      <a
                        href="javascript:void(0)"
                        className="hover:bg-background-soft-100 text-text-50 border-base-200 inline-flex h-11 w-11 items-center justify-center rounded-full border shadow-xs"
                      >
                        <Facebook className="size-5" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0)"
                        className="hover:bg-background-soft-100 text-text-50 border-base-200 inline-flex h-11 w-11 items-center justify-center rounded-full border shadow-xs"
                      >
                        <Twitter className="size-5" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0)"
                        className="hover:bg-background-soft-10 text-text-50 border-base-200 inline-flex h-11 w-11 items-center justify-center rounded-full border shadow-xs"
                      >
                        <Linkedin className="size-5" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0)"
                        className="hover:bg-background-soft-100 text-text-50 border-base-200 inline-flex h-11 w-11 items-center justify-center rounded-full border shadow-xs"
                      >
                        <Instagram1 className="size-5" />
                      </a>
                    </li>
                  </ul>
                  <div className="w-full">
                    <button
                      onClick={() => setModal1(true)}
                      className="text-title-50 hover:bg-background-soft-100 border-base-200 hover:text-title-50 flex w-full cursor-pointer items-center justify-center gap-2 rounded-full border px-4 py-3 text-sm font-medium lg:w-auto"
                    >
                      <Pencil1 className="size-5" />
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Details */}
            <div className="border-base-50 rounded-2xl border p-6">
              <div className="flex flex-col items-start justify-between gap-6 lg:flex-row">
                <div className="max-w-lg flex-1">
                  <h3 className="text-title-50 mb-7 text-lg font-semibold">
                    Personal Information
                  </h3>
                  <dl className="grid justify-between gap-4 sm:grid-cols-2 sm:gap-y-7 lg:gap-x-10">
                    <div>
                      <dt className="text-text-100 mb-2 block text-xs">
                        First Name
                      </dt>
                      <dd className="text-title-50 text-sm font-medium">
                        Emirhan
                      </dd>
                    </div>
                    <div>
                      <dt className="text-text-100 mb-2 block text-xs">
                        Last Name
                      </dt>
                      <dd className="text-title-50 text-sm font-medium">
                        Boruch
                      </dd>
                    </div>
                    <div>
                      <dt className="text-text-100 mb-2 block text-xs">
                        Email address
                      </dt>
                      <dd className="text-title-50 text-sm font-medium">
                        emirhanboruch55@gmail.com
                      </dd>
                    </div>
                    <div>
                      <dt className="text-text-100 mb-2 block text-xs">
                        Phone
                      </dt>
                      <dd className="text-title-50 text-sm font-medium">
                        +09 363 398 46
                      </dd>
                    </div>
                    <div>
                      <dt className="text-text-100 mb-2 block text-xs">Bio</dt>
                      <dd className="text-title-50 text-sm font-medium">
                        Team Manager
                      </dd>
                    </div>
                  </dl>
                </div>
                <div className="w-full lg:w-auto">
                  <button
                    onClick={() => setModal1(true)}
                    className="text-title-50 hover:bg-background-soft-100 border-base-200 hover:text-title-50 flex w-full cursor-pointer items-center justify-center gap-2 rounded-full border px-4 py-3 text-sm font-medium"
                  >
                    <Pencil1 className="size-5" />
                    Edit
                  </button>
                </div>
              </div>
            </div>
            {/* Address */}
            <div className="border-base-50 rounded-2xl border p-6">
              <div className="flex flex-col items-start justify-between gap-6 lg:flex-row">
                <div className="max-w-lg flex-1">
                  <h3 className="text-title-50 mb-7 text-lg font-semibold">
                    Address
                  </h3>
                  <dl className="grid justify-between gap-4 sm:grid-cols-2 sm:gap-y-7 lg:gap-x-10">
                    <div>
                      <dt className="text-text-100 mb-2 block text-xs">
                        Country
                      </dt>
                      <dd className="text-title-50 text-sm font-medium">
                        United Kingdom
                      </dd>
                    </div>
                    <div>
                      <dt className="text-text-100 mb-2 block text-xs">
                        City/State
                      </dt>
                      <dd className="text-title-50 text-sm font-medium">
                        Leeds, East London
                      </dd>
                    </div>
                    <div>
                      <dt className="text-text-100 mb-2 block text-xs">
                        Postal Code
                      </dt>
                      <dd className="text-title-50 text-sm font-medium">
                        ERT 2489
                      </dd>
                    </div>
                    <div>
                      <dt className="text-text-100 mb-2 block text-xs">
                        TAX ID
                      </dt>
                      <dd className="text-title-50 text-sm font-medium">
                        AS4568384
                      </dd>
                    </div>
                  </dl>
                </div>
                <div className="w-full lg:w-auto">
                  <button
                    onClick={() => setModal2(true)}
                    className="text-title-50 hover:bg-background-soft-100 border-base-200 hover:text-title-50 flex w-full cursor-pointer items-center justify-center gap-2 rounded-full border px-4 py-3 text-sm font-medium"
                  >
                    <Pencil1 className="size-5" />
                    Edit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {modal1 && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setModal1(false)}
          ></div>
          {/* Modal Content */}
          <div className="bg-background-50 relative z-10 w-full max-w-[700px] rounded-2xl p-6 sm:p-10">
            <button
              onClick={() => setModal1(false)}
              className="bg-background-soft-200 text-text-200 hover:text-text-50 absolute top-5 right-5 inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full"
            >
              <Xmark2x className="size-5" />
            </button>
            <h2
              id="modal1-title"
              className="text-title-50 mb-2 text-2xl font-semibold"
            >
              Edit Personal Information
            </h2>
            <p className="text-text-100 mb-6">
              Update your details to keep your profile up-to-date.
            </p>
            <div className="max-h-[60vh] overflow-y-auto px-1">
              <form action="#">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="col-span-full">
                    <h3 className="text-title-50 text-lg font-medium">
                      Social Links
                    </h3>
                  </div>
                  <div>
                    <label
                      htmlFor="facebook"
                      className="text-text-50 mb-2 block text-sm font-medium"
                    >
                      Facebook
                    </label>
                    <input
                      type="text"
                      value="https://facebook.com/emirhan55"
                      className="border-base-200 h-11 w-full rounded-lg border p-4 py-2.5 text-sm shadow-xs"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="x.com"
                      className="text-text-50 mb-2 block text-sm font-medium"
                    >
                      X.com
                    </label>
                    <input
                      type="text"
                      value="https://x.com/emirhan55"
                      className="border-base-200 h-11 w-full rounded-lg border p-4 py-2.5 text-sm shadow-xs"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="linkedin"
                      className="text-text-50 mb-2 block text-sm font-medium"
                    >
                      Linkedin
                    </label>
                    <input
                      type="text"
                      value="https://linkedin.com/emirhan55"
                      className="border-base-200 h-11 w-full rounded-lg border p-4 py-2.5 text-sm shadow-xs"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="instagram"
                      className="text-text-50 mb-2 block text-sm font-medium"
                    >
                      Instagram
                    </label>
                    <input
                      type="text"
                      value="https://instagram.com/emirhan55"
                      className="border-base-200 h-11 w-full rounded-lg border p-4 py-2.5 text-sm shadow-xs"
                    />
                  </div>
                  <div className="col-span-full">
                    <h3 className="text-title-50 text-lg font-medium">
                      Personal Information
                    </h3>
                  </div>
                  <div>
                    <label
                      htmlFor="firstname"
                      className="text-text-50 mb-2 block text-sm font-medium"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      value="Emirhan"
                      className="border-base-200 h-11 w-full rounded-lg border p-4 py-2.5 text-sm shadow-xs"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastname"
                      className="text-text-50 mb-2 block text-sm font-medium"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      value="Boruch"
                      className="border-base-200 h-11 w-full rounded-lg border p-4 py-2.5 text-sm shadow-xs"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="text-text-50 mb-2 block text-sm font-medium"
                    >
                      Email Address
                    </label>
                    <input
                      type="text"
                      value="emirhanboruch55@gmail.com"
                      className="border-base-200 h-11 w-full rounded-lg border p-4 py-2.5 text-sm shadow-xs"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="text-text-50 mb-2 block text-sm font-medium"
                    >
                      Phone
                    </label>
                    <input
                      type="text"
                      value="+09 363 398 46"
                      className="border-base-200 h-11 w-full rounded-lg border p-4 py-2.5 text-sm shadow-xs"
                    />
                  </div>
                  <div className="col-span-full">
                    <label
                      htmlFor="bio"
                      className="text-text-50 mb-2 block text-sm font-medium"
                    >
                      Bio
                    </label>
                    <input
                      type="text"
                      value="Team Manager"
                      className="border-base-200 h-11 w-full rounded-lg border p-4 py-2.5 text-sm shadow-xs"
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="mt-6 flex justify-end gap-3">
              <button
                onClick={() => setModal1(false)}
                className="border-base-200 hover:bg-background-soft-50 text-text-50 cursor-pointer rounded-lg border px-4 py-3 text-sm font-medium"
              >
                Close
              </button>
              <button
                onClick={() => setModal1(false)}
                className="bg-primary-500 hover:bg-primary-600 text-white-100 cursor-pointer rounded-lg px-4 py-3 text-sm font-medium"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

      {modal2 && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setModal2(false)}
          ></div>
          {/* Modal Content */}
          <div className="bg-background-50 relative z-10 w-full max-w-[700px] rounded-2xl p-6 sm:p-10">
            <button
              onClick={() => setModal2(false)}
              className="bg-background-soft-200 text-text-200 hover:text-text-50 absolute top-5 right-5 inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.6163 5.97546L16.5411 6.04383L11.999 10.5859L7.45711 6.04397C7.06658 5.65344 6.43342 5.65344 6.04289 6.04397C5.65237 6.43449 5.65237 7.06766 6.04289 7.45818L10.5848 12.0001L6.04289 16.542C5.65237 16.9325 5.65237 17.5657 6.04289 17.9562C6.43342 18.3468 7.06658 18.3468 7.45711 17.9562L11.999 13.4143L16.5411 17.9564L16.6163 18.0247C17.0091 18.3453 17.5891 18.3226 17.9553 17.9564C18.3215 17.5902 18.3442 17.0102 18.0237 16.6174L17.9553 16.5422L13.4132 12.0001L17.9553 7.45804L18.0237 7.38277C18.3442 6.98999 18.3215 6.41002 17.9553 6.04383C17.5891 5.67763 17.0091 5.6549 16.6163 5.97546Z"
                  fill="currentColor"
                />
              </svg>
            </button>
            <h2
              id="modal1-title"
              className="text-title-50 mb-2 text-2xl font-semibold"
            >
              Edit Address
            </h2>
            <p className="text-text-100 mb-6">
              Update your details to keep your profile up-to-date.
            </p>
            <div className="max-h-[70vh] overflow-y-auto px-1">
              <form action="#">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="country"
                      className="text-text-50 mb-2 block text-sm font-medium"
                    >
                      Country
                    </label>
                    <input
                      type="text"
                      value="United Kingdom"
                      className="border-base-200 h-11 w-full rounded-lg border p-4 py-2.5 text-sm shadow-xs"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="city"
                      className="text-text-50 mb-2 block text-sm font-medium"
                    >
                      City/State
                    </label>
                    <input
                      type="text"
                      value="Leeds, East London"
                      className="border-base-200 h-11 w-full rounded-lg border p-4 py-2.5 text-sm shadow-xs"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="likedin"
                      className="text-text-50 mb-2 block text-sm font-medium"
                    >
                      Postal Code
                    </label>
                    <input
                      type="text"
                      value="ERT 2489"
                      className="border-base-200 h-11 w-full rounded-lg border p-4 py-2.5 text-sm shadow-xs"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="TAX ID"
                      className="text-text-50 mb-2 block text-sm font-medium"
                    >
                      Instagram
                    </label>
                    <input
                      type="text"
                      value="AS4568384"
                      className="border-base-200 h-11 w-full rounded-lg border p-4 py-2.5 text-sm shadow-xs"
                    />
                  </div>
                </div>
              </form>
              <div className="mt-6 flex justify-end gap-3">
                <button
                  onClick={() => setModal2(false)}
                  className="border-base-200 hover:bg-background-soft-50 text-text-50 cursor-pointer rounded-lg border px-4 py-3 text-sm font-medium"
                >
                  Close
                </button>
                <button
                  onClick={() => setModal2(false)}
                  className="bg-primary-500 hover:bg-primary-600 text-white-100 cursor-pointer rounded-lg px-4 py-3 text-sm font-medium"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
