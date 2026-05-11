import {defineCliConfig} from 'sanity/cli'
import {getSanityConfig} from '../sanity.shared'

const sanityConfig = getSanityConfig(process.env)

export default defineCliConfig({
  api: {
    projectId: sanityConfig.projectId,
    dataset: sanityConfig.dataset,
  },
  deployment: {
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/studio/latest-version-of-sanity#k47faf43faf56
     */
    autoUpdates: true,
  }
})
