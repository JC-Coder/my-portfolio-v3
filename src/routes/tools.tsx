import { createFileRoute } from '@tanstack/react-router'
import { generateSEOHead } from '../lib/seo'

export const Route = createFileRoute('/tools')({
  head: () => generateSEOHead('tools'),
  component: () => null,
})
