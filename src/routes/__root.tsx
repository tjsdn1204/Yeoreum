import { createRootRoute, Outlet } from '@tanstack/react-router';

export const Route = createRootRoute({
  component: () => (
    <div>
      <h1>여름 (Yeoreum) Root</h1>
      <Outlet />
    </div>
  ),
});
