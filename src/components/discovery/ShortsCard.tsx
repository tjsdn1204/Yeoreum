import { Play, Bookmark, Star } from 'lucide-react';
import type { Place } from '@/types/place';

interface ShortsCardProps {
  place: Place;
  onClick: () => void;
}

export function ShortsCard({ place, onClick }: ShortsCardProps) {
  return (
    <div
      onClick={onClick}
      className="group relative flex-shrink-0 w-36 cursor-pointer space-y-1.5"
    >
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-gray-200">
        <img
          src={place.thumbnailUrl}
          alt={place.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {/* 조회수 또는 평점 뱃지 */}
        <div className="absolute bottom-2 left-2 flex items-center gap-1 rounded-full bg-black/40 px-2 py-0.5 text-[10px] font-medium text-white backdrop-blur-sm">
          {place.views ? (
            <>
              <Play className="h-2.5 w-2.5 fill-white" />
              <span>{place.views}</span>
            </>
          ) : (
            <>
              <Star className="h-2.5 w-2.5 fill-yellow-400 text-yellow-400" />
              <span>{place.rating}</span>
            </>
          )}
        </div>
        <button
          type="button"
          onClick={(e) => e.stopPropagation()}
          className="absolute bottom-2 right-2 text-white/80 hover:text-white"
        >
          <Bookmark className="h-3.5 w-3.5" />
        </button>
      </div>
      <p className="line-clamp-2 text-xs font-semibold text-gray-800 leading-snug">
        {place.title}
      </p>
    </div>
  );
}