interface DayTabBarProps {
  activeDay: number;
  totalDays?: number;
  onSelectDay: (day: number) => void;
}

export function DayTabBar({ activeDay, totalDays = 3, onSelectDay }: DayTabBarProps) {
  const days = Array.from({ length: totalDays }, (_, i) => i + 1);

  return (
    <div className="flex gap-2 border-b border-[#f0e4d6] pb-2">
      {days.map((day) => {
        const isActive = activeDay === day;
        return (
          <button
            key={day}
            type="button"
            onClick={() => onSelectDay(day)}
            className={`rounded-full px-4 py-1.5 text-xs font-bold transition-all ${
              isActive
                ? 'bg-[#6d96a8] text-white shadow-sm'
                : 'bg-white text-gray-500 hover:bg-[#f0e4d6]/50'
            }`}
          >
            {day}일차
          </button>
        );
      })}
    </div>
  );
}