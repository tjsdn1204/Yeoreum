
import { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { MOCK_PLACES } from '@/constants/places';
import {
  Sparkles,
  Bookmark,
  MapPin,
  Bell,
  User,
  Calendar,
  Users,
  X
} from 'lucide-react';

export function AiItineraryPage() {
  const navigate = useNavigate();
  const [selectedDay, setSelectedDay] = useState(1);

  return (
    <div className="min-h-screen min-h-dvh w-full bg-[#fdf6ed] flex flex-col">

      {/* 1. 상단 네비게이션 */}
      <div className="flex items-center justify-between px-5 pt-5 pb-3 shrink-0">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => navigate({ to: '/' })}
            className="text-gray-700 text-xl font-bold"
          >
            ‹
          </button>

          <h1 className="text-base font-bold text-gray-900 flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-amber-500 fill-amber-400" />
            AI 여행 일정 만들기
          </h1>
        </div>

        <div className="flex items-center gap-4 text-gray-700">
          <Bell className="w-5 h-5" />
          <User className="w-5 h-5" />
        </div>
      </div>

      {/* 2. 메인 콘텐츠 */}
      <main className="flex-1 flex flex-col px-4 min-h-0">

        {/* 여행 조건 설정 카드 */}
        <div className="w-full rounded-3xl bg-gradient-to-br from-[#fff9f0] to-[#fcebd7] p-4 space-y-3.5 shrink-0">

          <h2 className="text-sm font-bold text-gray-800">
            어떤 여행을 계획하고 있나요?
          </h2>

          {/* 여행 조건 태그 */}
          <div className="flex flex-wrap gap-1.5">

            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/90 rounded-full text-xs font-medium text-gray-700">
              <MapPin className="w-3.5 h-3.5" />
              부산
              <X className="w-3 h-3 opacity-50" />
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/90 rounded-full text-xs font-medium text-gray-700">
              <Calendar className="w-3.5 h-3.5" />
              2박 3일
              <X className="w-3 h-3 opacity-50" />
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/90 rounded-full text-xs font-medium text-gray-700">
              <Users className="w-3.5 h-3.5" />
              2명
              <X className="w-3 h-3 opacity-50" />
            </div>

          </div>

          {/* AI 추천 버튼 */}
          <button
            type="button"
            className="w-full py-3.5 bg-[#729eaf] hover:bg-[#628b9c] text-white rounded-full font-bold text-sm flex items-center justify-center gap-1.5 transition-colors active:scale-[0.98]"
          >
            AI로 일정 추천하기
            <Sparkles className="w-4 h-4 fill-white" />
          </button>

        </div>

        {/* AI 추천 여행 일정 */}
        <div className="space-y-3 pt-5 shrink-0">

          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-gray-900">
              AI 추천 여행 일정
            </h3>

            <span className="text-xs font-bold bg-[#fff0c9] text-amber-800 px-3.5 py-1.5 rounded-full whitespace-nowrap">
              부산 · 2박 3일
            </span>
          </div>

          {/* 일차 선택 탭 */}
          <div className="flex items-center bg-[#f6eadb] p-1 rounded-full gap-1">

            {[1, 2, 3].map((day) => (
              <button
                key={day}
                type="button"
                onClick={() => setSelectedDay(day)}
                className={`flex-1 py-2.5 rounded-full text-xs font-bold transition-colors outline-none focus:ring-0 ${
                  selectedDay === day
                    ? 'bg-[#729eaf] text-white'
                    : 'bg-transparent text-gray-600 hover:bg-white/50'
                }`}
              >
                {day}일차
              </button>
            ))}

          </div>
        </div>

        {/* 3. 여행 일정 타임라인 */}
        <div className="relative pl-5 pt-5 pb-5">

          {/* 타임라인 세로선 */}
          <div className="absolute left-[4px] top-8 bottom-8 w-[1.5px] bg-[#e5ddd1]" />

          {/* 장소 목록: 일정 간격 24px */}
          <div className="flex flex-col gap-6">

            {MOCK_PLACES.map((place, idx) => (
              <div
                key={place.id}
                className="relative flex items-center gap-3 min-h-[76px]"
              >

                {/* 타임라인 마커 */}
                <div
                  className={`absolute -left-[21px] top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full border-2 border-[#fdf6ed] ${
                    idx % 2 === 0
                      ? 'bg-[#729eaf]'
                      : 'bg-[#e9b85e]'
                  }`}
                />

                {/* 장소 이미지 */}
                <img
                  src={place.thumbnailUrl}
                  alt={place.title}
                  className="w-[68px] h-[68px] rounded-xl object-cover shrink-0"
                />

                {/* 장소 정보 */}
                <div className="flex-1 min-w-0 space-y-1">

                  <div className="flex items-center gap-1 text-[#729eaf] text-[11px] font-medium">
                    <MapPin className="w-3.5 h-3.5" />

                    <span>
                      {idx === 0
                        ? '10:00'
                        : idx === 1
                        ? '13:00'
                        : idx === 2
                        ? '15:00'
                        : `${10 + idx}:00`}
                    </span>
                  </div>

                  <h4 className="text-xs font-bold text-gray-900 truncate">
                    {place.title}
                  </h4>

                  <p className="text-[10px] text-gray-500 line-clamp-1">
                    {place.description}
                  </p>

                </div>

              </div>
            ))}

          </div>
        </div>

      </main>

      {/* 4. 하단 고정 저장 버튼 */}
      <div className="sticky bottom-0 w-full px-4 pt-3 pb-4 shrink-0 bg-gradient-to-t from-[#fdf6ed] via-[#fdf6ed] to-transparent">

        <button
          type="button"
          onClick={() => navigate({ to: '/itinerary' })}
          className="w-full py-3.5 bg-[#ffe9ae] hover:bg-[#f9df9e] text-amber-900 rounded-full font-bold text-sm flex items-center justify-center gap-2 transition-colors active:scale-[0.98]"
        >
          <Bookmark className="w-4 h-4" />
          이 일정을 내 여행에 저장하기
        </button>

      </div>

    </div>
  );
}
