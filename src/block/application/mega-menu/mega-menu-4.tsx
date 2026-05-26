import {
  ChevronDown,
  Code1,
  Layout6,
  LifeGuardTube2,
  MenuHamburger1,
  Message1,
  Pencil1,
  Play,
  User2,
  Xmark2x,
} from '@tailgrids/icons';
import { useState } from 'react';

// Navigation links
const NAV_LINKS = [
  { label: 'Products', href: 'javascript:void(0);' },
  { label: 'Resources', href: 'javascript:void(0);' },
  { label: 'Pricing', href: 'javascript:void(0);' },
];

const QUICK_LINKS = [
  'Design tools',
  'Video tutorials',
  'Integrations',
  'Security',
  'Plugins',
  'Edit mode',
  'Page builder',
];

// Mega menu resources items (Left Column)
const MEGA_MENU_RESOURCES = [
  {
    icon: <Layout6 className="h-6 w-6" />,
    title: 'Templates',
    desc: 'Website templates for any use cases.',
    href: 'javascript:void(0);',
  },
  {
    icon: <Code1 className="h-6 w-6" />,
    title: 'Developer',
    desc: 'Expert Developer for web and mobile solutions.',
    href: 'javascript:void(0);',
  },
  {
    icon: <Message1 className="h-6 w-6" />,
    title: 'Customer stories',
    desc: 'Join 100+ satisfied clients and elevate your business.',
    href: 'javascript:void(0);',
  },
];

// Mega menu support items (Right Column)
const MEGA_MENU_SUPPORT = [
  {
    icon: <Pencil1 className="h-6 w-6" />,
    title: 'Blog',
    desc: 'Stay ahead with expert insights, industry trends.',
    href: 'javascript:void(0);',
  },
  {
    icon: <User2 className="h-6 w-6" />,
    title: 'Community',
    desc: 'Group of people connected by shared interests, values, or location.',
    href: 'javascript:void(0);',
  },
  {
    icon: <LifeGuardTube2 className="h-6 w-6" />,
    title: 'Support',
    desc: 'Support means help, assistance, or encouragement.',
    href: 'javascript:void(0);',
  },
];

export default function MegaMenu4() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [mobileMegaOpen, setMobileMegaOpen] = useState(false);

  return (
    <nav className="border-base-50 bg-background-50 z-10 min-h-screen border-b py-4">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a
              href="javascript:void(0);"
              className="text-title-50 text-2xl font-bold"
            >
              <img
                src="https://cdn-tailgrids.b-cdn.net/3.0/logo/tailgrids-logo.svg"
                alt="logo"
              />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="bg-background-soft-100 text-text-50 inline-flex h-10 w-10 items-center justify-center rounded-lg focus:outline-none lg:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <Xmark2x className="h-6 w-6" />
            ) : (
              <MenuHamburger1 className="h-6 w-6" />
            )}
          </button>

          {/* Desktop Navigation */}
          <div className="pointer-events-none absolute inset-x-0 top-1/2 hidden -translate-y-1/2 justify-center lg:flex">
            <div className="pointer-events-auto flex items-center space-x-1">
              {/* Desktop Mega Menu */}
              <div
                className="group/nav px-3.5 py-8"
                onMouseEnter={() => setMegaMenuOpen(true)}
                onMouseLeave={() => setMegaMenuOpen(false)}
              >
                <button className="text-text-50 group-hover/nav:text-primary-500 flex items-center text-sm font-medium transition-colors">
                  Solutions
                  <ChevronDown
                    className={`ml-1 size-4 transition-transform duration-200 ${
                      megaMenuOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Mega Menu Dropdown */}
                <div
                  className={`border-base-50 bg-background-50 absolute top-full left-0 z-50 w-full rounded-xl border shadow-lg transition-all duration-200 ease-out ${
                    megaMenuOpen
                      ? 'visible translate-y-0 opacity-100'
                      : 'invisible translate-y-2 opacity-0'
                  }`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-5">
                    {/* Light Sidebar Column */}
                    <div className="bg-background-soft-50 col-span-1 rounded-l-xl p-6">
                      <span className="text-text-200 mb-3 block text-sm font-medium">
                        Quick Start
                      </span>
                      <div className="flex flex-col space-y-3">
                        {QUICK_LINKS.map((link) => (
                          <a
                            key={link}
                            href="javascript:void(0)"
                            className="hover:text-primary-500 text-text-50 text-base font-medium transition-colors"
                          >
                            {link}
                          </a>
                        ))}
                      </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="p-6 lg:col-span-4">
                      <div className="grid lg:grid-cols-3">
                        {/* Left Content Column */}
                        <div className="border-base-50 border-b pb-3 lg:border-r lg:border-b-0 lg:pr-3 lg:pb-0">
                          <span className="text-text-200 mb-3 block px-3 pt-2 text-sm font-medium">
                            Resources
                          </span>
                          <div className="space-y-1">
                            {MEGA_MENU_RESOURCES.map((item) => (
                              <a
                                href={item.href}
                                key={item.title}
                                className="hover:bg-background-soft-50 group flex cursor-pointer items-start rounded-lg p-3 transition"
                              >
                                <div className="text-text-50 group-hover:text-primary-500 transition-colors">
                                  {item.icon}
                                </div>
                                <div className="ml-3">
                                  <p className="text-text-50 text-base font-medium">
                                    {item.title}
                                  </p>
                                  <p className="text-text-100 mt-1 text-sm">
                                    {item.desc}
                                  </p>
                                </div>
                              </a>
                            ))}
                          </div>
                        </div>

                        {/* Middle Content Column */}
                        <div className="border-base-50 pt-3 lg:border-r lg:pt-0 lg:pr-3 lg:pl-3">
                          <span className="text-text-200 mb-3 block px-3 pt-2 text-sm font-medium">
                            Support
                          </span>
                          <div className="space-y-1">
                            {MEGA_MENU_SUPPORT.map((item) => (
                              <a
                                href={item.href}
                                key={item.title}
                                className="hover:bg-background-soft-50 group flex cursor-pointer items-start rounded-lg p-3 transition"
                              >
                                <div className="text-text-50 group-hover:text-primary-500 transition-colors">
                                  {item.icon}
                                </div>
                                <div className="ml-3">
                                  <p className="text-text-50 text-base font-medium">
                                    {item.title}
                                  </p>
                                  <p className="text-text-100 mt-1 text-sm">
                                    {item.desc}
                                  </p>
                                </div>
                              </a>
                            ))}
                          </div>
                        </div>

                        {/* Right Image Column */}
                        <div className="pt-3 lg:pt-0 lg:pl-3">
                          <div className="relative h-full">
                            <img
                              src="https://cdn-tailgrids.b-cdn.net/3.0/application/mega-menu/men.jpg"
                              className="h-full w-full rounded-lg object-cover"
                              alt="Video thumbnail"
                            />
                            <a
                              href="javascript:void(0)"
                              className="text-title-50 bg-background-50/90 hover:bg-background-50 absolute bottom-3 left-3 flex items-center gap-1.5 rounded-lg px-5 py-2 text-sm font-medium shadow-sm transition"
                            >
                              <Play className="h-5 w-5 fill-current" />
                              Play Video
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-primary-500 text-text-50 px-3.5 py-8 text-sm font-medium transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden items-center space-x-3 lg:flex">
            <a
              href="javascript:void(0);"
              className="border-base-100 bg-background-50 text-text-50 hover:bg-background-soft-50 rounded-lg border px-4 py-2.5 text-sm font-medium transition"
            >
              Sign in
            </a>
            <a
              href="javascript:void(0);"
              className="bg-primary-500 hover:bg-primary-600 rounded-lg px-4 py-2.5 text-sm font-medium text-white transition"
            >
              Sign up
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-base-50 mt-4 border-t lg:hidden">
          <div className="bg-background-50 space-y-1 px-4 pt-2 pb-4">
            {/* Mobile Mega Menu Toggle */}
            <button
              onClick={() => setMobileMegaOpen(!mobileMegaOpen)}
              className="hover:bg-background-soft-50 text-text-50 flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-base font-medium"
            >
              Solutions
              <ChevronDown
                className={`size-5 transition-transform duration-200 ${
                  mobileMegaOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {/* Mobile Mega Menu Content */}
            {mobileMegaOpen && (
              <div className="border-base-50 border-t px-4 py-4">
                <div className="space-y-6">
                  {/* Quick Links Section */}
                  <div>
                    <span className="text-text-100 mb-3 block text-sm font-medium">
                      Quick Start
                    </span>
                    <div className="border-base-50 flex flex-col space-y-3 border-l-2 pl-2">
                      {QUICK_LINKS.map((link) => (
                        <a
                          key={link}
                          href="javascript:void(0)"
                          className="hover:text-primary-500 text-text-100 text-base font-medium transition-colors"
                        >
                          {link}
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Resources Section */}
                  <div>
                    <span className="text-text-200 mb-2 block text-xs font-semibold tracking-wider uppercase">
                      Resources
                    </span>
                    <div className="space-y-1">
                      {MEGA_MENU_RESOURCES.map((item) => (
                        <div
                          key={item.title}
                          className="group flex items-start py-2"
                        >
                          <div className="text-text-50 group-hover:text-primary-500 pt-0.5 transition-colors">
                            {item.icon}
                          </div>
                          <div className="ml-3">
                            <a
                              href={item.href}
                              className="text-text-50 hover:text-primary-500 block text-sm font-medium"
                            >
                              {item.title}
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Support Section */}
                  <div>
                    <span className="text-text-200 mb-2 block text-xs font-semibold tracking-wider uppercase">
                      Support
                    </span>
                    <div className="space-y-1">
                      {MEGA_MENU_SUPPORT.map((item) => (
                        <div
                          key={item.title}
                          className="group flex items-start py-2"
                        >
                          <div className="text-text-50 group-hover:text-primary-500 pt-0.5 transition-colors">
                            {item.icon}
                          </div>
                          <div className="ml-3">
                            <a
                              href={item.href}
                              className="text-text-50 hover:text-primary-500 block text-sm font-medium"
                            >
                              {item.title}
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Image Section for Mobile */}
                  <div className="pt-2">
                    <div className="relative h-48 w-full">
                      <img
                        src="https://cdn-tailgrids.b-cdn.net/3.0/application/mega-menu/men.jpg"
                        className="h-full w-full rounded-lg object-cover"
                        alt="Video thumbnail"
                      />
                      <a
                        href="javascript:void(0)"
                        className="text-title-50 bg-background-50/90 hover:bg-background-50 absolute bottom-3 left-3 flex items-center gap-1.5 rounded-lg px-4 py-1.5 text-xs font-medium shadow-sm transition"
                      >
                        <Play className="h-4 w-4 fill-current" />
                        Play Video
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:bg-background-soft-50 text-text-50 block rounded-lg px-3 py-2 text-base font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Auth Buttons */}
          <div className="border-base-100 flex flex-col gap-3 border-t px-4 pt-5 pb-6">
            <a
              href="javascript:void(0);"
              className="border-base-50 bg-background-50 hover:bg-background-soft-50 text-text-50 w-full rounded-lg border py-3 text-center text-sm font-medium"
            >
              Sign in
            </a>
            <a
              href="javascript:void(0);"
              className="bg-primary-500 hover:bg-primary-600 w-full rounded-lg py-3 text-center text-sm font-medium text-white"
            >
              Sign up
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
