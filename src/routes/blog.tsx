import { createFileRoute } from '@tanstack/react-router'
import { generateSEOHead } from '../lib/seo'

export const Route = createFileRoute('/blog')({
  head: () => generateSEOHead('blog'),
  component: () => null,
})
