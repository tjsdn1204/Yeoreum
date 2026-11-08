export interface Place {
  id: string;
  title: string;
  category: '카페' | '음식점' | '명소' | '드라이브' | '자연';
  address: string;
  lat: number;
  lng: number;
  rating: number;
  reviewCount: number;
  videoUrl?: string;
  thumbnailUrl: string;
  tags: string[];
  description?: string;
  businessHours?: string;
  source?: string;
}