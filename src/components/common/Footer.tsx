import { Link, useLocation } from '@tanstack/react-router';
import { Home, Compass, Plus, Calendar, User } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Footer() {
  const location = useLocation();

  const tabs = [
    { to: '/', label: '홈', icon: Home },
    { to: '/map', label: '탐색', icon: Compass },
    { to: '/ai-itinerary', label: '생성', icon: Plus, isCenter: true },
    { to: '/itinerary', label: '내 여행', icon: Calendar },
    { to: '/together', label: '마이', icon: User },
  ];

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 h-16 border-t border-[#f0e4d6] bg-white/95 backdrop-blur-md md:hidden">
      <nav className="grid h-full grid-cols-5 items-center">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = location.pathname === tab.to;

          // 푸터 내부 중앙 정렬 파란색 원형 버튼
          if (tab.isCenter) {
            return (
              <Link
                key={tab.to}
                to={tab.to}
                className="flex items-center justify-center"
                aria-label="AI 일정 생성"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#6d96a8] text-white shadow-sm transition-transform active:scale-95">
                  <Plus className="h-6 w-6 stroke-[2.5]" />
                </div>
              </Link>
            );
          }

          return (
            <Link
              key={tab.to}
              to={tab.to}
              className={cn(
                'flex flex-col items-center justify-center gap-1 text-[11px] transition-colors',
                isActive ? 'font-bold text-[#6d96a8]' : 'text-gray-400 hover:text-gray-600'
              )}
            >
              <Icon className={cn('h-5 w-5', isActive && 'scale-110 transition-transform')} />
              <span>{tab.label}</span>
            </Link>
          );
        })}
      </nav>
    </footer>
  );
}