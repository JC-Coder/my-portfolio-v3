import {createClient} from '@sanity/client'

export const sanityClient = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || 'f4c27e9l',
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  apiVersion: '2026-03-01',
  useCdn: true,
})
