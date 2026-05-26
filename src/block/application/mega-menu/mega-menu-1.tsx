import {
  ArrowAngularTopRight,
  ChevronDown,
  Code1,
  Layout14,
  Layout22,
  LifeGuardTube2,
  MenuHamburger1,
  Pencil1,
  UserMultiple1,
  Xmark2x,
} from '@tailgrids/icons';
import { useState } from 'react';

// Navigation links
const NAV_LINKS = [
  { label: 'Products', href: 'javascript:void(0);' },
  { label: 'Resources', href: 'javascript:void(0);' },
  { label: 'Pricing', href: 'javascript:void(0);' },
];

// Mega menu left column items
const MEGA_MENU_LEFT = [
  {
    icon: <Layout14 className="h-6 w-6" />,
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
    icon: <Layout22 className="h-6 w-6" />,
    title: 'Customer stories',
    desc: 'Join 100+ satisfied clients and elevate your business.',
    href: 'javascript:void(0);',
  },
];

// Mega menu middle column items
const MEGA_MENU_MIDDLE = [
  {
    icon: <Pencil1 className="h-6 w-6" />,
    title: 'Blog',
    desc: 'Stay ahead with expert insights, industry trends.',
    href: 'javascript:void(0);',
  },
  {
    icon: <UserMultiple1 className="h-6 w-6" />,
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

// Combined mega menu items for mobile
const MEGA_MENU_ALL = [...MEGA_MENU_LEFT, ...MEGA_MENU_MIDDLE];

// Featured card data
const FEATURED_CARD = {
  badge: 'Customer Story',
  title: 'Innovative & Custom Solutions for your Digital Future',
  stat: '65X',
  statLabel: 'Faster grow with us.',
};

export default function MegaMenu1() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [mobileMegaOpen, setMobileMegaOpen] = useState(false);

  return (
    <nav className="border-base-50 bg-background-50 relative z-10 min-h-screen border-b py-4 lg:py-0">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between">
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
          <div className="hidden flex-1 items-center justify-center lg:flex">
            <div className="flex items-center space-x-1">
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
                  className={`border-base-50 bg-background-50 absolute top-full left-1/2 z-50 w-screen max-w-[972px] -translate-x-1/2 rounded-xl border shadow-lg transition-all duration-200 ease-out ${
                    megaMenuOpen
                      ? 'visible translate-y-0 opacity-100'
                      : 'invisible translate-y-2 opacity-0'
                  }`}
                >
                  <div className="grid grid-cols-1 gap-3 p-3 lg:grid-cols-3">
                    {/* Left Column */}
                    <div className="border-base-50 space-y-1 border-b pb-6 lg:border-r lg:border-b-0 lg:pr-3 lg:pb-0">
                      {MEGA_MENU_LEFT.map((item) => (
                        <a
                          href={item.href}
                          key={item.title}
                          className="hover:bg-background-soft-50 group flex cursor-pointer items-start rounded-lg p-4 transition"
                        >
                          <div className="text-text-50 group-hover:text-primary-500 transition-colors">
                            {item.icon}
                          </div>
                          <div className="ml-4">
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

                    {/* Middle Column */}
                    <div className="space-y-1">
                      {MEGA_MENU_MIDDLE.map((item) => (
                        <a
                          href={item.href}
                          key={item.title}
                          className="hover:bg-background-soft-50 group flex cursor-pointer items-start rounded-lg p-4 transition"
                        >
                          <div className="text-text-50 group-hover:text-primary-500 transition-colors">
                            {item.icon}
                          </div>
                          <div className="ml-4">
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

                    {/* Right Featured Card */}
                    <div className="overflow-hidden rounded-lg bg-gray-800 p-6 shadow-lg">
                      <div className="flex items-start justify-between">
                        <span className="bg-primary-500 text-white-100 rounded-full px-3 py-1 text-xs font-medium">
                          {FEATURED_CARD.badge}
                        </span>

                        <ArrowAngularTopRight className="text-white-100 h-6 w-6" />
                      </div>
                      <div className="mt-8">
                        <h3 className="text-white-100 text-xl font-bold">
                          {FEATURED_CARD.title}
                        </h3>
                        <div className="mt-12">
                          <p className="text-white-100 text-3xl font-bold">
                            {FEATURED_CARD.stat}
                          </p>
                          <p className="text-text-200 mt-1 text-sm">
                            {FEATURED_CARD.statLabel}
                          </p>
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
              className="bg-primary-500 hover:bg-primary-600 text-white-100 rounded-lg px-4 py-2.5 text-sm font-medium transition"
            >
              Sign up
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-base-50 border-t lg:hidden">
          <div className="bg-background-50 space-y-1 px-4 pt-2 pb-4">
            {/* Mobile Mega Menu Toggle */}
            <button
              onClick={() => setMobileMegaOpen(!mobileMegaOpen)}
              className="hover:bg-background-soft-50 text-text-50 flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-base font-medium"
            >
              Solutions
              <ChevronDown
                className={`size-5 transition-transform duration-200 ${mobileMegaOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {/* Mobile Mega Menu Content */}
            {mobileMegaOpen && (
              <div className="border-base-50 border-t px-4 py-4">
                <div className="space-y-1">
                  {MEGA_MENU_ALL.map((item) => (
                    <a
                      href={item.href}
                      key={item.title}
                      className="hover:bg-background-soft-50 group flex cursor-pointer items-start rounded-lg p-4 transition"
                    >
                      <div className="text-text-50 group-hover:text-primary-500 transition-colors">
                        {item.icon}
                      </div>
                      <div className="ml-4">
                        <p className="text-text-50 text-base font-medium">
                          {item.title}
                        </p>
                        <p className="text-text-100 text-sm">{item.desc}</p>
                      </div>
                    </a>
                  ))}
                  {/* Mobile Featured Card */}
                  <div className="bg-foreground-soft-400 mt-4 overflow-hidden rounded-lg p-6 shadow-lg">
                    <div className="flex items-start justify-between">
                      <span className="bg-primary-500 text-white-100 rounded-full px-3 py-1 text-xs font-medium">
                        {FEATURED_CARD.badge}
                      </span>

                      <ArrowAngularTopRight className="text-white-100 h-6 w-6" />
                    </div>
                    <div className="mt-8">
                      <h3 className="text-white-100 text-xl font-bold">
                        {FEATURED_CARD.title}
                      </h3>
                      <div className="mt-12">
                        <p className="text-white-100 text-3xl font-bold">
                          {FEATURED_CARD.stat}
                        </p>
                        <p className="text-text-200 mt-1 text-sm">
                          {FEATURED_CARD.statLabel}
                        </p>
                      </div>
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
              className="bg-primary-500 hover:bg-primary-600 text-white-100 w-full rounded-lg py-3 text-center text-sm font-medium"
            >
              Sign up
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
