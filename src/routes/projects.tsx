import { createFileRoute } from '@tanstack/react-router'
import { generateSEOHead } from '../lib/seo'

export const Route = createFileRoute('/projects')({
  head: () => generateSEOHead('projects'),
  component: () => null,
})
