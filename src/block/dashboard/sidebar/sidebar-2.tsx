import { Input } from '@/components/core/input';
import {
  Calendar,
  Folder1,
  FolderPlusCircle,
  Layout22,
  Row,
  Search1,
} from '@tailgrids/icons';
import { useState } from 'react';

interface TooltipPosition {
  x: number;
  y: number;
}

interface MenuItem {
  icon: React.ReactNode;
  label: string;
  href: string;
}

interface ProjectItem {
  icon: React.ReactNode;
  label: string;
  href: string;
}

interface StatusItem {
  color: string;
  label: string;
  count: number;
}

export default function Sidebar2() {
  const [permanentlyExpanded, setPermanentlyExpanded] = useState(true);
  const [temporarilyExpanded, setTemporarilyExpanded] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipText, setTooltipText] = useState('');
  const [tooltipPosition, setTooltipPosition] = useState<TooltipPosition>({
    x: 0,
    y: 0,
  });

  const isExpanded = permanentlyExpanded || temporarilyExpanded;

  const toggle = () => {
    setPermanentlyExpanded(!permanentlyExpanded);
    setTemporarilyExpanded(false);
  };

  const showTooltipFor = (text: string, event: React.MouseEvent) => {
    if (!isExpanded) {
      setTooltipText(text);
      const rect = event.currentTarget.getBoundingClientRect();
      setTooltipPosition({
        x: rect.right + 8,
        y: rect.top + rect.height / 2,
      });
      setShowTooltip(true);
    }
  };

  const hideTooltip = () => {
    setShowTooltip(false);
  };

  const menuItems: MenuItem[] = [
    {
      icon: <FolderPlusCircle className="size-5" />,
      label: 'Add Project',
      href: 'javascript:void(0)',
    },
    {
      icon: <Calendar className="size-5" />,
      label: 'Analytics',
      href: 'javascript:void(0)',
    },
    {
      icon: <Row className="size-5" />,
      label: 'My Task',
      href: 'javascript:void(0)',
    },
  ];

  const projectItems: ProjectItem[] = [
    {
      icon: <Folder1 className="size-5" />,
      label: 'Plain Admin',
      href: 'javascript:void(0)',
    },
    {
      icon: <Folder1 className="size-5" />,
      label: 'Static.run',
      href: 'javascript:void(0)',
    },
    {
      icon: <Folder1 className="size-5" />,
      label: 'Tailadmin',
      href: 'javascript:void(0)',
    },
    {
      icon: <Folder1 className="size-5" />,
      label: 'Nextjstemplates',
      href: 'javascript:void(0)',
    },
  ];

  const statusItems: StatusItem[] = [
    { color: 'bg-primary-500', label: 'To-Do', count: 15 },
    { color: 'bg-warning-500', label: 'In Progress', count: 4 },
    { color: 'bg-success-500', label: 'Completed', count: 12 },
    { color: 'bg-purple-500', label: 'On Hold', count: 35 },
  ];

  const renderMenuItem = (item: MenuItem) => (
    <li key={item.label}>
      <a
        href={item.href}
        className={`hover:bg-background-soft-100 text-text-50 hover:text-title-50 flex h-10 w-full cursor-pointer items-center gap-3 rounded-lg px-3 py-2 text-sm font-normal transition ${
          !isExpanded ? 'justify-center' : 'justify-start'
        }`}
        onMouseEnter={(e) => showTooltipFor(item.label, e)}
        onMouseLeave={hideTooltip}
      >
        {item.icon}
        {isExpanded && <span>{item.label}</span>}
      </a>
    </li>
  );

  const renderProjectItem = (item: ProjectItem) => (
    <li key={item.label}>
      <a
        href={item.href}
        className={`text-text-100 hover:bg-background-soft-100 hover:text-text-50 flex h-10 w-full cursor-pointer items-center gap-3 rounded-lg px-3 py-2 text-sm font-normal transition ${
          !isExpanded ? 'justify-center' : 'justify-start'
        }`}
        onMouseEnter={(e) => showTooltipFor(item.label, e)}
        onMouseLeave={hideTooltip}
      >
        {item.icon}
        {isExpanded && <span>{item.label}</span>}
      </a>
    </li>
  );

  return (
    <div className="flex">
      <aside
        className={`bg-background-50 border-base-50 flex min-h-screen flex-col border-r px-5 py-8 ${
          isExpanded ? 'w-68' : 'w-[92px]'
        }`}
      >
        {/* Wrapper */}
        <div className="flex flex-col">
          <div
            className={`mb-7 flex items-center ${
              isExpanded ? 'justify-between' : 'justify-center'
            }`}
          >
            {/* Logo */}
            <div className="overflow-hidden">
              {isExpanded && (
                <a href="javascript:void(0)" className="block">
                  <img
                    src="https://cdn-tailgrids.b-cdn.net/3.0/logo/tailgrids-logo.svg"
                    alt="Logo"
                    className=""
                  />
                </a>
              )}
              {!isExpanded && (
                <a href="javascript:void(0)" className="block">
                  <img
                    src="https://cdn-tailgrids.b-cdn.net/3.0/logo/taigrids-logo-icon.svg"
                    alt="Logo"
                    className="mx-auto flex justify-center"
                  />
                </a>
              )}
            </div>
            {isExpanded && (
              <button
                onClick={toggle}
                className="hover:bg-background-soft-100 text-text-50 flex h-8 w-8 cursor-pointer items-center justify-center gap-2 rounded-lg text-sm transition"
              >
                <Layout22 className="size-5" />
              </button>
            )}
          </div>

          {!isExpanded && (
            <div className="mb-7 flex items-center justify-center">
              <button
                onClick={toggle}
                className="hover:bg-background-soft-100 text-text-50 flex h-8 w-8 cursor-pointer items-center justify-center gap-2 rounded-lg text-sm transition"
              >
                <Layout22 className="size-5" />
              </button>
            </div>
          )}

          {/* Search Input - Expanded */}
          {isExpanded && (
            <div className="mb-8">
              <form action="#">
                <div className="relative flex items-center">
                  <span className="text-text-100 pointer-events-none absolute top-1/2 left-3 z-10 shrink-0 -translate-y-1/2">
                    <Search1 className="size-5" />
                  </span>
                  <Input
                    type="text"
                    placeholder="Search Files"
                    className="border-base-100 bg-background-soft-50 w-full rounded-lg border px-4 py-2.5 pl-10"
                  />
                </div>
              </form>
            </div>
          )}

          {/* Search Button - Collapsed */}
          {!isExpanded && (
            <div className="mb-7 flex items-center justify-center">
              <button
                className="text-text-100 border-base-100 bg-background-soft-50 inline-flex h-11 w-11 items-center justify-center rounded-lg border transition"
                onMouseEnter={(e) => showTooltipFor('Search Files', e)}
                onMouseLeave={hideTooltip}
              >
                <Search1 className="size-5" />
              </button>
            </div>
          )}

          {/* Main nav area */}
          <div className="mb-6 flex-1">
            {/* Navigation */}
            <nav className="space-y-6">
              {/* Menu Section */}
              <div>
                <span
                  className={`text-text-200 mb-3 flex text-xs ${
                    isExpanded ? 'justify-start' : 'justify-center'
                  }`}
                >
                  {isExpanded && 'Menu'}
                </span>
                <ul className="space-y-1">
                  {menuItems.map((item) => renderMenuItem(item))}
                </ul>
              </div>

              {/* Projects Section */}
              {isExpanded && (
                <div>
                  <span className="text-text-200 mb-3 flex text-xs">
                    Projects
                  </span>
                  <ul className="space-y-1">
                    {projectItems.map((item) => renderProjectItem(item))}
                  </ul>
                </div>
              )}

              {/* Status Section */}
              {isExpanded && (
                <div>
                  <span className="text-text-200 mb-3 flex text-xs">
                    Status
                  </span>
                  <ul className="space-y-1">
                    {statusItems.map((status) => (
                      <li key={status.label}>
                        <a
                          href="javascript:void(0)"
                          className="text-text-100 flex h-10 w-full cursor-pointer items-center gap-3 rounded-lg px-4 py-2 text-sm font-normal transition"
                        >
                          <span className="inline-block space-x-3">
                            <span
                              className={`inline-block h-2 w-2 ${status.color} rounded-full`}
                            ></span>
                            <span className="text-text-50">{status.label}</span>
                          </span>
                          <span className="bg-background-soft-100 text-text-50 ml-auto rounded-full px-2 py-0.5 text-xs font-medium">
                            {status.count.toString().padStart(2, '0')}
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </nav>
          </div>

          {/* Upgrade card */}
          {isExpanded && (
            <div>
              <div className="bg-background-50 border-base-100 flex items-center justify-between rounded-2xl border p-4">
                <div>
                  <h3 className="text-title-50 text-sm font-medium">
                    100 Credit left today
                  </h3>
                  <p className="text-text-100 text-xs">
                    Upgrade to pro for refill credit
                  </p>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                  >
                    <circle
                      cx="20"
                      cy="20"
                      r="18"
                      stroke="#E5E7EB"
                      strokeWidth="4"
                    />
                    <mask id="path-2-inside-1_11414_9489" fill="white">
                      <path d="M21.6592 37.9262C21.7608 39.0245 22.7367 39.8426 23.8195 39.6319C26.3254 39.1444 28.7211 38.1803 30.874 36.7856C33.5871 35.028 35.8338 32.6389 37.4215 29.823C39.0092 27.0071 39.8907 23.8483 39.9905 20.6172C40.0902 17.386 39.4053 14.1788 37.9943 11.2704C36.5833 8.36187 34.4883 5.83876 31.8887 3.91714C29.2892 1.99552 26.2626 0.732663 23.0682 0.236742C19.8738 -0.259178 16.6067 0.0266189 13.5469 1.06965C11.1189 1.89732 8.87887 3.18222 6.94488 4.84863C6.10926 5.56864 6.1477 6.84149 6.94742 7.60116C7.74714 8.36083 9.00433 8.31703 9.85763 7.61808C11.334 6.40871 13.0192 5.46965 14.8357 4.85041C17.2844 4.01569 19.899 3.78697 22.4554 4.18385C25.0118 4.58072 27.434 5.59136 29.5143 7.1292C31.5947 8.66703 33.2713 10.6862 34.4005 13.0138C35.5297 15.3414 36.0778 17.9081 35.998 20.4939C35.9182 23.0797 35.2127 25.6076 33.9421 27.8612C32.6715 30.1147 30.8735 32.0266 28.7022 33.4332C27.0915 34.4767 25.3109 35.219 23.4472 35.63C22.3701 35.8676 21.5575 36.8279 21.6592 37.9262Z" />
                    </mask>
                    <path
                      d="M21.6592 37.9262C21.7608 39.0245 22.7367 39.8426 23.8195 39.6319C26.3254 39.1444 28.7211 38.1803 30.874 36.7856C33.5871 35.028 35.8338 32.6389 37.4215 29.823C39.0092 27.0071 39.8907 23.8483 39.9905 20.6172C40.0902 17.386 39.4053 14.1788 37.9943 11.2704C36.5833 8.36187 34.4883 5.83876 31.8887 3.91714C29.2892 1.99552 26.2626 0.732663 23.0682 0.236742C19.8738 -0.259178 16.6067 0.0266189 13.5469 1.06965C11.1189 1.89732 8.87887 3.18222 6.94488 4.84863C6.10926 5.56864 6.1477 6.84149 6.94742 7.60116C7.74714 8.36083 9.00433 8.31703 9.85763 7.61808C11.334 6.40871 13.0192 5.46965 14.8357 4.85041C17.2844 4.01569 19.899 3.78697 22.4554 4.18385C25.0118 4.58072 27.434 5.59136 29.5143 7.1292C31.5947 8.66703 33.2713 10.6862 34.4005 13.0138C35.5297 15.3414 36.0778 17.9081 35.998 20.4939C35.9182 23.0797 35.2127 25.6076 33.9421 27.8612C32.6715 30.1147 30.8735 32.0266 28.7022 33.4332C27.0915 34.4767 25.3109 35.219 23.4472 35.63C22.3701 35.8676 21.5575 36.8279 21.6592 37.9262Z"
                      stroke="#3758F9"
                      strokeWidth="8"
                      mask="url(#path-2-inside-1_11414_9489)"
                    />
                  </svg>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Tooltip */}
        {showTooltip && !isExpanded && (
          <div
            className="text-title-50 bg-background-50 border-base-100 pointer-events-none fixed z-50 mt-4 rounded-md border px-3 py-2 text-sm font-medium shadow-lg"
            style={{
              left: `${tooltipPosition.x}px`,
              top: `${tooltipPosition.y - 12}px`,
              transform: 'translateY(-50%)',
            }}
          >
            {tooltipText}
          </div>
        )}
      </aside>
    </div>
  );
}
