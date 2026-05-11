import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {getSanityConfig} from '../sanity.shared'

const sanityConfig = getSanityConfig(process.env)

export default defineConfig({
  name: 'default',
  title: 'jc-portfolio',

  projectId: sanityConfig.projectId,
  dataset: sanityConfig.dataset,

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
