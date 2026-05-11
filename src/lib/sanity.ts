import {createClient} from '@sanity/client'
import {getSanityConfig} from '../../sanity.shared'

const sanityConfig = getSanityConfig(import.meta.env)

export const sanityClient = createClient({
  ...sanityConfig,
  useCdn: true,
})
