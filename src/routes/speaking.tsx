import { createFileRoute } from '@tanstack/react-router'
import { generateSEOHead } from '../lib/seo'

export const Route = createFileRoute('/speaking')({
  head: () => generateSEOHead('speaking'),
  component: () => null,
})
