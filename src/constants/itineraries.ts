import type { DayItinerary } from '@/types/itinerary';

export const MOCK_ITINERARY: DayItinerary[] = [
  {
    day: 1,
    date: '7.18 (목)',
    routes: [
      {
        id: 'r1',
        order: 1,
        time: '10:00',
        placeId: 'place-1',
        placeTitle: '제주 바다 카페',
        category: '카페',
        address: '제주 제주시 해안로 123',
        lat: 33.5561,
        lng: 126.7958,
        travelTimeNext: '이동 20분',
      },
      {
        id: 'r2',
        order: 2,
        time: '12:00',
        placeId: 'place-2',
        placeTitle: '산굼부리 산책로',
        category: '자연',
        address: '제주 제주시 조천읍 비자림로 768',
        lat: 33.4312,
        lng: 126.6883,
      },
    ],
  },
];