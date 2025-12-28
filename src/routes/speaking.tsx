import { createFileRoute } from '@tanstack/react-router'
import { Speaking } from '../components/tabs/Speaking'

export const Route = createFileRoute('/speaking')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Speaking />
}
