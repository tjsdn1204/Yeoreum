import { Link, useLocation, Outlet } from '@tanstack/react-router';
import { Compass, MapPin, Calendar, Users } from 'lucide-react';
import { cn } from '@/lib/utils';

export function MainLayout() {
  const location = useLocation();

  const navItems = [
    { to: '/', label: '발견', icon: Compass },
    { to: '/map', label: '지도', icon: MapPin },
    { to: '/itinerary', label: '일정', icon: Calendar },
    { to: '/together', label: '함께', icon: Users },
  ];

  return (
    <div className="relative min-h-screen bg-gray-50 text-gray-900">
      {/* 데스크톱 전용 상단 헤더 */}
      <header className="hidden border-b border-gray-200 bg-white md:block">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link to="/" className="text-xl font-bold text-blue-600">
            여름
          </Link>
          <nav className="flex items-center gap-6 text-sm font-medium">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeProps={{ className: 'text-blue-600 font-bold' }}
                inactiveProps={{ className: 'text-gray-600 hover:text-gray-900' }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* 메인 콘텐츠 영역 (모바일 하단 탭 바 높이 고려 pb-16) */}
      <main className="mx-auto max-w-md pb-16 md:max-w-7xl md:p-6 md:pb-0">
        <Outlet />
      </main>

      {/* 모바일 전용 하단 탭 바 */}
      <footer className="fixed bottom-0 left-0 right-0 z-50 h-16 border-t border-gray-200 bg-white md:hidden">
        <nav className="grid h-full grid-cols-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.to;

            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  'flex flex-col items-center justify-center gap-1 text-xs transition-colors',
                  isActive ? 'font-semibold text-blue-600' : 'text-gray-500 hover:text-gray-900'
                )}
              >
                <Icon className={cn('h-5 w-5', isActive && 'scale-110 transition-transform')} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </footer>
    </div>
  );
}