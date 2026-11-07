import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/together')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/together"!</div>
}
