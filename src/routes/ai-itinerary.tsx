import { createFileRoute } from '@tanstack/react-router';
import { AiItineraryPage } from '@/pages/AiItineraryPage';

export const Route = createFileRoute('/ai-itinerary')({
  component: AiItineraryPage,
});