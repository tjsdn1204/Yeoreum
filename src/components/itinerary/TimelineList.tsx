import { MapPin, Clock } from 'lucide-react';

export interface PlaceItem {
  id: string;
  name: string;
  category: string;
  time: string;
  memo: string;
  image: string;
}

interface TimelineListProps {
  places: PlaceItem[];
}

export function TimelineList({ places }: TimelineListProps) {
  return (
    <div className="relative space-y-4 pl-6 before:absolute before:left-2.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-[#f0e4d6]">
      {places.map((place, idx) => (
        <div
          key={place.id}
          className="relative flex gap-3 rounded-2xl bg-white p-3 shadow-sm border border-[#f0e4d6]/60"
        >
          <div className="absolute -left-6 top-3 flex h-5 w-5 items-center justify-center rounded-full bg-[#6d96a8] text-[10px] font-bold text-white ring-4 ring-[#fdf6ed]">
            {idx + 1}
          </div>

          <img src={place.image} alt={place.name} className="h-18 w-18 rounded-xl object-cover shrink-0" />

          <div className="flex-1 space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-semibold text-[#6d96a8]">{place.category}</span>
              <span className="flex items-center gap-1 text-[11px] text-gray-400">
                <Clock className="h-3 w-3" /> {place.time}
              </span>
            </div>
            <h4 className="text-sm font-bold text-gray-900">{place.name}</h4>
            <p className="flex items-center gap-1 text-xs text-gray-500">
              <MapPin className="h-3 w-3 text-gray-400" /> {place.memo}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}