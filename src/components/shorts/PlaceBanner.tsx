import { MapPin, ChevronUp } from 'lucide-react';

interface PlaceBannerProps {
  placeCount: number;
  onClick: () => void;
}

export function PlaceBanner({ placeCount, onClick }: PlaceBannerProps) {
  return (
    <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between rounded-full bg-black/70 px-4 py-3 text-white backdrop-blur-md">
      <button type="button" onClick={onClick} className="flex items-center gap-2 text-xs font-bold">
        <MapPin className="h-4 w-4 text-[#6d96a8]" />
        <span>영상 속 장소 {placeCount}개 발견!</span>
      </button>
      <button type="button" onClick={onClick} className="flex items-center text-xs font-semibold text-[#bfd1e0]">
        코스 보기 <ChevronUp className="ml-1 h-4 w-4" />
      </button>
    </div>
  );
}