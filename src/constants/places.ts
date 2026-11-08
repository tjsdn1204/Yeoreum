import type { Place } from '@/types/place';

export const MOCK_PLACES: Place[] = [
  {
    id: 'place-1',
    title: '제주 바다 카페',
    category: '카페',
    address: '제주 제주시 해안로 123',
    lat: 33.5561,
    lng: 126.7958,
    rating: 4.7,
    reviewCount: 1234,
    thumbnailUrl: 'https://picsum.photos/seed/place1/600/800',
    tags: ['추천', '제주', '카페', '오션뷰'],
    description: '에메랄드빛 바다가 한눈에 내려다보이는 제주의 뷰 맛집 카페입니다.',
    businessHours: '10:00 - 19:00',
    source: '인스타그램, 블로그',
  },
  {
    id: 'place-2',
    title: '산굼부리 산책로',
    category: '자연',
    address: '제주 제주시 조천읍 비자림로 768',
    lat: 33.4312,
    lng: 126.6883,
    rating: 4.8,
    reviewCount: 890,
    thumbnailUrl: 'https://picsum.photos/seed/place2/600/800',
    tags: ['추천', '제주', '자연', '산책'],
    description: '억새밭이 장관을 이루는 힐링 산책 코스입니다.',
    businessHours: '09:00 - 18:00',
    source: '제주관광공사',
  },
];