import { useNavigate } from '@tanstack/react-router';
import { Header } from '@/components/common/Header';
import { Button } from '@/components/common/Button';
import { MOCK_PLACES } from '@/constants/places';

export function ItineraryPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#fdf6ed] pb-12">
      <Header title="내 여행 보관함" showBack />

      <div className="mx-auto max-w-md space-y-4 px-4 pt-4">
        <div className="rounded-2xl bg-white p-4 shadow-sm border border-gray-100 space-y-3">
          <div className="flex justify-between items-start">
            <div>
              <span className="text-xs font-bold text-[#6d96a8]">2026.06.12 - 06.14</span>
              <h3 className="text-base font-bold text-gray-800 mt-0.5">부산 힐링 감성 2박 3일</h3>
            </div>
            <span className="rounded-full bg-[#fef0c7] px-2.5 py-1 text-xs font-bold text-amber-700">
              저장됨
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2 pt-1">
            {MOCK_PLACES.slice(0, 3).map((place) => (
              <img
                key={place.id}
                src={place.thumbnailUrl} // 👈 thumbnailUrl 적용
                alt={place.title}
                className="h-20 w-full rounded-xl object-cover"
              />
            ))}
          </div>
        </div>

        <Button
          fullWidth
          variant="outline"
          onClick={() => navigate({ to: '/ai-itinerary' })}
        >
          + 새 AI 일정 추천받기
        </Button>
      </div>
    </div>
  );
}