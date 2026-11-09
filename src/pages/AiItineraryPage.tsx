import { ConditionFilterGroup } from '@/components/itinerary/ConditionFilterGroup';
import { TimelineList } from '@/components/itinerary/TimelineList';
import { Button } from '@/components/common/Button';

const MOCK_TIMELINE_PLACES = [
  {
    id: '1',
    name: '해운대 해수욕장',
    category: '명소',
    time: '10:00 AM',
    memo: '부산 해운대구 우동',
    image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: '2',
    name: '해변열차 (미포승강장)',
    category: '체험',
    time: '12:30 PM',
    memo: '해운대 블루라인파크',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80',
  },
];

export function AiItineraryPage() {
  return (
    <div className="space-y-5 px-4 pt-2 pb-24">
      <div>
        <h2 className="text-xl font-bold text-gray-900">AI 추천 여행 코스 ✨</h2>
        <p className="mt-0.5 text-xs text-gray-500">선택한 취향과 동선에 맞춰 생성된 코스입니다.</p>
      </div>

      <ConditionFilterGroup location="부산" duration="2박 3일" people="2명" />
      <TimelineList places={MOCK_TIMELINE_PLACES} />

      <div className="fixed bottom-16 left-0 right-0 z-40 bg-gradient-to-t from-white via-white/90 to-transparent p-4 md:hidden">
        <Button fullWidth onClick={() => alert('내 여행에 저장되었습니다!')}>
          🔖 이 일정을 내 여행에 저장하기
        </Button>
      </div>
    </div>
  );
}