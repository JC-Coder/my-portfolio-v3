import { createFileRoute } from '@tanstack/react-router'
import { generateSEOHead } from '../lib/seo'

export const Route = createFileRoute('/experience')({
  head: () => generateSEOHead('experience'),
  component: () => null,
})
