import { useNavigate } from '@tanstack/react-router';
import { ChevronRight } from 'lucide-react';
import { ShortsCard } from './ShortsCard';
import { MOCK_PLACES } from '@/constants/places';

export function ShortsSection() {
  const navigate = useNavigate();

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-bold text-gray-900 flex items-center gap-1">
          지금 뜨는 여행 숏폼 🔥
        </h3>
        <button
          type="button"
          className="flex items-center text-xs text-gray-400 hover:text-gray-600"
        >
          더보기 <ChevronRight className="h-3.5 w-3.5" />
        </button>
      </div>

      <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
        {MOCK_PLACES.map((place) => (
          <ShortsCard
            key={place.id}
            place={place}
            onClick={() =>
              navigate({
                to: '/place/$placeId',
                params: { placeId: place.id },
              })
            }
          />
        ))}
      </div>
    </div>
  );
}