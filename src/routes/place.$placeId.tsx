import { createFileRoute } from '@tanstack/react-router';
import { PlaceDetailPage } from '@/pages/PlaceDetailPage';

export const Route = createFileRoute('/place/$placeId')({
  component: PlaceDetailPage,
});