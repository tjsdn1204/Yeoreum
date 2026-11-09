export interface Place {
  id: string;
  title: string;
  category: string;
  address: string;
  lat: number;
  lng: number;
  rating: number;
  reviewCount: number;
  thumbnailUrl: string;
  tags: string[];
  description: string;
  businessHours: string;
  source: string;
  views?: string; // 숏폼 카드 표시용 옵션값
}