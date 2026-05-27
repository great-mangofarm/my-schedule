import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Calendar, DashboardSquare1 } from '@tailgrids/icons';
import { signOutUser } from '../../lib/auth';
import { useAuthStore } from '../../store/authStore';

interface AppLayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  const [collapsed, setCollapsed] = useState(false);   // 데스크탑 접힘
  const [mobileOpen, setMobileOpen] = useState(false); // 모바일 열림
  const user = useAuthStore((s) => s.user);

  const navItems = [
    { to: '/calendar', icon: <Calendar />, label: '캘린더' },
    { to: '/dashboard', icon: <DashboardSquare1 />, label: '대시보드' },
  ];

  const SidebarContent = ({ onNavClick }: { onNavClick?: () => void }) => (
    <>
      {/* Nav */}
      <nav className="flex-1 space-y-1 p-3">
        {navItems.map(({ to, icon, label }) => (
          <NavLink
            key={to}
            to={to}
            onClick={onNavClick}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-primary-50 text-primary-600'
                  : 'text-gray-500 hover:bg-gray-50 hover:text-gray-700'
              }`
            }
          >
            <span className="flex h-5 w-5 shrink-0 items-center justify-center">{icon}</span>
            <span className="leading-none">{label}</span>
          </NavLink>
        ))}
      </nav>

      {/* Footer */}
      <div className="border-t border-gray-100 p-3">
        {user && (
          <p className="mb-2 truncate px-3 text-xs text-gray-400">{user.email}</p>
        )}
        <button
          onClick={signOutUser}
          className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-700 transition-colors"
        >
          <span className="flex h-5 w-5 shrink-0 items-center justify-center">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
          </span>
          <span className="leading-none">로그아웃</span>
        </button>
      </div>
    </>
  );

  return (
    <div className="flex h-screen overflow-hidden bg-background-soft-50">

      {/* ── 데스크탑 사이드바 (md 이상) ── */}
      <aside
        className={`hidden md:flex flex-col border-r border-gray-100 bg-white transition-all duration-300 ${
          collapsed ? 'w-16' : 'w-56'
        }`}
      >
        <div className="flex h-16 items-center justify-between px-4 border-b border-gray-100">
          {!collapsed && (
            <span className="text-base font-bold text-primary-500">My Schedule</span>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="rounded-lg p-1.5 text-gray-400 hover:bg-gray-100"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        <nav className="flex-1 space-y-1 p-3">
          {navItems.map(({ to, icon, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-primary-50 text-primary-600'
                    : 'text-gray-500 hover:bg-gray-50 hover:text-gray-700'
                }`
              }
            >
              <span className="flex h-5 w-5 shrink-0 items-center justify-center">{icon}</span>
              {!collapsed && <span className="leading-none">{label}</span>}
            </NavLink>
          ))}
        </nav>

        <div className="border-t border-gray-100 p-3">
          {!collapsed && user && (
            <p className="mb-2 truncate px-3 text-xs text-gray-400">{user.email}</p>
          )}
          <button
            onClick={signOutUser}
            className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-700 transition-colors"
          >
            <span className="flex h-5 w-5 shrink-0 items-center justify-center">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
            </span>
            {!collapsed && <span className="leading-none">로그아웃</span>}
          </button>
        </div>
      </aside>

      {/* ── 모바일 오버레이 (md 미만) ── */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}
      <aside
        className={`fixed top-0 left-0 z-50 h-full w-64 flex flex-col bg-white shadow-xl transition-transform duration-300 md:hidden ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex h-16 items-center justify-between px-4 border-b border-gray-100">
          <span className="text-base font-bold text-primary-500">My Schedule</span>
          <button
            onClick={() => setMobileOpen(false)}
            className="rounded-lg p-1.5 text-gray-400 hover:bg-gray-100"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <SidebarContent onNavClick={() => setMobileOpen(false)} />
      </aside>

      {/* ── 메인 콘텐츠 ── */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* 모바일 상단바 */}
        <header className="flex h-14 items-center gap-3 border-b border-gray-100 bg-white px-4 md:hidden">
          <button
            onClick={() => setMobileOpen(true)}
            className="rounded-lg p-1.5 text-gray-500 hover:bg-gray-100"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <span className="text-base font-bold text-primary-500">My Schedule</span>
        </header>

        <main className="flex-1 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
