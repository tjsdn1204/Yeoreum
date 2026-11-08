import { createRootRoute } from '@tanstack/react-router';
import { MainLayout } from '@/layouts/MainLayout/MainLayout';

export const Route = createRootRoute({
  component: MainLayout,
});