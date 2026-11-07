import { createFileRoute } from '@tanstack/react-router';
import { ItineraryPage } from '@/pages/ItineraryPage';

export const Route = createFileRoute('/itinerary')({
  component: ItineraryPage,
});