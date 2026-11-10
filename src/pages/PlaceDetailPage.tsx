import { useState } from 'react';
import { useParams, useNavigate } from '@tanstack/react-router';
import { MOCK_PLACES } from '@/constants/places';
import { BottomSheet } from '@/components/common/BottomSheet';
import { MapPin, Heart, Bookmark, Share2, ArrowLeft } from 'lucide-react';

export function PlaceDetailPage() {
  const { placeId } = useParams({ from: '/place/$placeId' });
  const navigate = useNavigate();
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const currentPlace = MOCK_PLACES.find((p) => p.id === placeId) || MOCK_PLACES[0];

  return (
    <div className="relative h-screen w-full bg-black">
      {/* 뒤로가기 버튼 */}
      <button
        type="button"
        onClick={() => navigate({ to: '/' })}
        className="absolute top-4 left-4 z-20 rounded-full bg-black/40 p-2 text-white backdrop-blur-md"
      >
        <ArrowLeft className="h-6 w-6" />
      </button>

      {/* 메인 뷰어 */}
      <div className="relative h-full w-full flex items-center justify-center">
        <img
          src={currentPlace.thumbnailUrl} // 👈 thumbnailUrl 적용
          alt={currentPlace.title}
          className="h-full w-full object-cover"
        />

        {/* 인터랙션 스택 */}
        <div className="absolute right-4 bottom-28 z-10 flex flex-col items-center gap-5 text-white">
          <button type="button" className="flex flex-col items-center gap-1">
            <Heart className="h-7 w-7 text-white active:scale-125 transition-transform" />
            <span className="text-xs">{currentPlace.views || '1.2k'}</span>
          </button>
          <button type="button" className="flex flex-col items-center gap-1">
            <Bookmark className="h-7 w-7 text-white active:scale-125 transition-transform" />
            <span className="text-xs">보관</span>
          </button>
          <button type="button" className="flex flex-col items-center gap-1">
            <Share2 className="h-7 w-7 text-white" />
            <span className="text-xs">공유</span>
          </button>
        </div>

        {/* 하단 장소 오버레이 배너 */}
        <div className="absolute bottom-6 left-4 right-16 z-10">
          <button
            type="button"
            onClick={() => setIsSheetOpen(true)}
            className="flex items-center gap-2 rounded-2xl bg-black/60 px-4 py-3 text-white backdrop-blur-md transition-all active:scale-95"
          >
            <MapPin className="h-5 w-5 text-amber-400" />
            <span className="text-sm font-bold">📍 영상 속 장소 4곳 확인하기</span>
          </button>
        </div>
      </div>

      {/* 장소 정보 바텀시트 */}
      <BottomSheet
        isOpen={isSheetOpen}
        onClose={() => setIsSheetOpen(false)}
        title="영상 속 등장 장소"
      >
        <div className="space-y-3 pt-2">
          {MOCK_PLACES.slice(0, 3).map((place) => (
            <div
              key={place.id}
              className="flex items-center justify-between rounded-xl bg-gray-50 p-3"
            >
              <div>
                <h4 className="text-sm font-bold text-gray-800">{place.title}</h4>
                <p className="text-xs text-gray-500">{place.address}</p> {/* 👈 address 적용 */}
              </div>
              <button
                type="button"
                onClick={() => navigate({ to: '/map' })}
                className="rounded-lg bg-[#6d96a8] px-3 py-1.5 text-xs font-bold text-white"
              >
                지도보기
              </button>
            </div>
          ))}
        </div>
      </BottomSheet>
    </div>
  );
}