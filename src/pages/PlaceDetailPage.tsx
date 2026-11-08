import { useParams } from '@tanstack/react-router';

export function PlaceDetailPage() {
  const { placeId } = useParams({ from: '/place/$placeId' });

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-xl font-bold">02 장소 상세 (ID: {placeId})</h2>
      <p className="text-sm text-gray-500">이미지 갤러리, 평점/리뷰, 미니 지도, 일정 추가 버튼 영역</p>
    </div>
  );
}