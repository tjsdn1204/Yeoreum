import { useNavigate } from '@tanstack/react-router';
import { Flame, Sparkles, Map, Bookmark } from 'lucide-react';

export function QuickMenuGrid() {
  const navigate = useNavigate();

  const menus = [
    {
      id: 'popular',
      label: '인기 여행지',
      icon: Flame,
      iconColor: 'text-amber-500',
      bgColor: 'bg-white',
      onClick: () => {},
    },
    {
      id: 'ai-plan',
      label: 'AI 일정짜기',
      icon: Sparkles,
      iconColor: 'text-[#6d96a8]',
      bgColor: 'bg-[#fef0c7]', // 디자인 시안 강조 노란색 배경
      onClick: () => navigate({ to: '/ai-itinerary' }),
    },
    {
      id: 'my-map',
      label: '내지도',
      icon: Map,
      iconColor: 'text-[#6d96a8]',
      bgColor: 'bg-white',
      onClick: () => navigate({ to: '/map' }),
    },
    {
      id: 'saved',
      label: '저장한 장소',
      icon: Bookmark,
      iconColor: 'text-amber-500',
      bgColor: 'bg-white',
      onClick: () => {},
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-2.5">
      {menus.map((menu) => {
        const Icon = menu.icon;
        return (
          <button
            key={menu.id}
            type="button"
            onClick={menu.onClick}
            className={`flex aspect-square flex-col items-center justify-center gap-2 rounded-2xl ${menu.bgColor} p-2 shadow-sm border border-gray-100/60 transition-all hover:shadow-md active:scale-95`}
          >
            <Icon className={`h-6 w-6 ${menu.iconColor}`} />
            <span className="whitespace-nowrap text-[11px] font-bold text-gray-800 tracking-tight">
              {menu.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}