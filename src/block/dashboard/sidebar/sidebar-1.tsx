import {
  Bolt1,
  Calendar,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Comment1Dots,
  Copy4,
  DashboardSquare1,
  FileText,
  Layout6,
  MenuMeatballs1,
  UserCircle1,
} from '@tailgrids/icons';

import { useState } from 'react';

// Types for menu structure
type SubmenuItem = {
  label: string;
  href: string;
  badge?: string;
};

type MenuItem = {
  id: string;
  label: string;
  href?: string;
  icon: React.ReactNode;
  hasDropdown?: boolean;
  isOpen?: boolean;
  toggle?: () => void;
  submenu?: SubmenuItem[];
};

export default function Sidebar1() {
  const [permanentlyExpanded, setPermanentlyExpanded] = useState(true);
  const [temporarilyExpanded, setTemporarilyExpanded] = useState(false);
  const [dashboardOpen, setDashboardOpen] = useState(false);

  const isExpanded = permanentlyExpanded || temporarilyExpanded;

  // Navigation menu data
  const menuItems: MenuItem[] = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: <DashboardSquare1 />,
      hasDropdown: true,
      isOpen: dashboardOpen,
      toggle: () => setDashboardOpen(!dashboardOpen),
      submenu: [
        { label: 'Ecommerce', href: 'javascript:void(0)' },
        { label: 'Analytics', href: 'javascript:void(0)' },
        { label: 'Marketing', href: 'javascript:void(0)' },
        { label: 'CRM', href: 'javascript:void(0)' },
        { label: 'Stocks', href: 'javascript:void(0)', badge: 'New' },
      ],
    },
    {
      id: 'calendar',
      label: 'Calendar',
      href: 'javascript:void(0)',
      icon: <Calendar />,
    },
    {
      id: 'profile',
      label: 'User Profile',
      href: 'javascript:void(0)',
      icon: <UserCircle1 />,
    },
    {
      id: 'tasks',
      label: 'My Task',
      href: 'javascript:void(0)',
      icon: <Copy4 />,
    },
    {
      id: 'tables',
      label: 'Tables',
      href: 'javascript:void(0)',
      icon: <Layout6 />,
    },
  ];

  const supportItems: MenuItem[] = [
    {
      id: 'chat',
      label: 'Chat',
      href: 'javascript:void(0)',
      icon: <Comment1Dots />,
    },
    {
      id: 'invoice',
      label: 'Invoice',
      href: 'javascript:void(0)',
      icon: <FileText />,
    },
  ];

  // Helper function to render menu items
  const renderMenuItem = (item: MenuItem) => {
    if (item.hasDropdown) {
      return (
        <li key={item.id} className="relative">
          <button
            onClick={item.toggle}
            className={`hover:text-primary-500 group hover:bg-sidebar-nav-active-background text-text-50 flex w-full cursor-pointer items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition ${
              !isExpanded ? 'justify-center' : ''
            }`}
          >
            <span>{item.icon}</span>
            {isExpanded && <span>{item.label}</span>}
            {isExpanded && (
              <ChevronDown
                className={`ml-auto size-5 transform transition-transform duration-200 ${
                  item.isOpen ? 'rotate-180' : ''
                }`}
              />
            )}
          </button>
          {item.isOpen && isExpanded && (
            <div className="mt-2 flex flex-col space-y-1 pl-9">
              {item.submenu?.map((subItem: SubmenuItem) => (
                <a
                  key={subItem.label}
                  href={subItem.href}
                  className="hover:bg-sidebar-nav-active-background hover:text-primary-500 text-title-50 flex items-center justify-between rounded-lg bg-transparent px-3 py-2.5 text-sm font-medium"
                >
                  {subItem.label}
                  {subItem.badge && (
                    <span className="bg-primary-50 text-primary-500 ml-auto rounded-full px-2 py-0.5 text-xs font-medium">
                      {subItem.badge}
                    </span>
                  )}
                </a>
              ))}
            </div>
          )}
        </li>
      );
    }

    return (
      <li key={item.id}>
        <a
          href={item.href}
          className={`hover:text-primary-500 hover:bg-sidebar-nav-active-background text-text-50 flex w-full cursor-pointer items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition ${
            !isExpanded ? 'justify-center' : 'justify-start'
          }`}
        >
          {item.icon}
          {isExpanded && <span>{item.label}</span>}
        </a>
      </li>
    );
  };

  const toggle = () => {
    setPermanentlyExpanded(!permanentlyExpanded);
    setTemporarilyExpanded(false);
  };

  const handleMouseEnter = () => {
    if (!permanentlyExpanded) {
      setTemporarilyExpanded(true);
    }
  };

  const handleMouseLeave = () => {
    if (!permanentlyExpanded) {
      setTemporarilyExpanded(false);
    }
  };

  return (
    <div className="flex min-h-screen">
      <aside
        className={`bg-background-50 border-base-50 fixed top-0 left-0 flex h-screen flex-col border-r px-5 py-8 ${
          isExpanded ? 'w-64' : 'w-[92px]'
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Wrapper */}
        <div className="flex h-full flex-col">
          {/* Logo */}
          <div className="mb-7 overflow-hidden">
            {isExpanded ? (
              <a href="javascript:void(0)" className="block">
                <img
                  src="https://cdn-tailgrids.b-cdn.net/3.0/logo/tailgrids-logo.svg"
                  alt="Logo"
                  className=""
                />
              </a>
            ) : (
              <a href="javascript:void(0)" className="block">
                <img
                  src="https://cdn-tailgrids.b-cdn.net/3.0/logo/taigrids-logo-icon.svg"
                  alt="Logo"
                  className="mx-auto flex justify-center"
                />
              </a>
            )}
          </div>

          {/* Main nav area */}
          <div className="mb-6 flex-1 overflow-y-auto">
            {/* Navigation */}
            <nav className="space-y-6">
              <div>
                <div className="mb-4">
                  {isExpanded ? (
                    <span className="text-text-200 block text-xs font-normal uppercase">
                      MENU
                    </span>
                  ) : (
                    <span className="flex justify-center">
                      <MenuMeatballs1 className="text-text-200" />
                    </span>
                  )}
                </div>
                <ul className="space-y-1">{menuItems.map(renderMenuItem)}</ul>
              </div>

              {/* Support Section */}
              <div>
                <div className="mb-4">
                  {isExpanded ? (
                    <span className="text-text-200 block text-xs font-normal uppercase">
                      SUPPORT
                    </span>
                  ) : (
                    <span className="flex justify-center">
                      <MenuMeatballs1 className="text-text-200" />
                    </span>
                  )}
                </div>
                <ul className="space-y-1">
                  {supportItems.map(renderMenuItem)}
                </ul>
              </div>
            </nav>
          </div>

          {/* Upgrade card */}
          {isExpanded && (
            <div className="bg-background-soft-50 rounded-2xl p-4 text-center">
              <h4 className="text-title-50 mb-2 text-base font-semibold">
                TailGrids Pro
              </h4>
              <p className="text-text-100 mb-4 text-sm">
                Get all dashboards and 300+ essential UI elements
              </p>
              <a
                href="javascript:void(0)"
                className="bg-primary-500 hover:bg-primary-600 text-white-100 flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition"
              >
                <Bolt1 className="size-4" />
                Upgrade Plan
              </a>
            </div>
          )}
        </div>
      </aside>

      <div className={`flex-1 ${isExpanded ? 'ml-64' : 'ml-[92px]'}`}>
        {/* Toggle Button */}
        <button
          onClick={toggle}
          className="hover:text-title-50 hover:bg-background-soft-100 text-text-50 rounded-lg p-2 transition-colors duration-200"
        >
          {permanentlyExpanded ? (
            <ChevronRight className="size-5" />
          ) : (
            <ChevronLeft className="size-5" />
          )}
        </button>
      </div>
    </div>
  );
}
