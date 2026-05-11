import { createClient } from '@sanity/client'
import { portfolioData } from '../src/data/portfolio'

const projectId = process.env.VITE_SANITY_PROJECT_ID || 'f4c27e9l'
const dataset = process.env.VITE_SANITY_DATASET || 'production'
const token = process.env.SANITY_WRITE_TOKEN

if (!token) {
  throw new Error(
    'Missing SANITY_WRITE_TOKEN. Create a Sanity write token and pass it when running this script.',
  )
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: '2026-03-01',
  token,
  useCdn: false,
})

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')

async function seed() {
  const documents = [
    ...portfolioData.projects.map((project, index) => ({
      _id: `project-${slugify(project.title)}`,
      _type: 'project',
      ...project,
      order: index,
    })),
    ...portfolioData.experience.map((experience, index) => ({
      _id: `experience-${slugify(experience.company)}`,
      _type: 'experience',
      ...experience,
      order: index,
    })),
    ...portfolioData.education.map((education, index) => ({
      _id: `education-${slugify(education.school)}`,
      _type: 'education',
      ...education,
      order: index,
    })),
    ...portfolioData.blogPosts.map((post, index) => ({
      _id: `blog-post-${slugify(post.title)}`,
      _type: 'blogPost',
      ...post,
      order: index,
    })),
    ...portfolioData.speakingEngagements.map((engagement, index) => {
      const { image, ...rest } = engagement

      return {
        _id: `speaking-engagement-${slugify(engagement.title)}`,
        _type: 'speakingEngagement',
        ...rest,
        imageUrl: image,
        order: index,
      }
    }),
  ]

  const transaction = documents.reduce(
    (tx, document) => tx.createOrReplace(document as any),
    client.transaction(),
  )

  await transaction.commit()
  console.log(`Seeded ${documents.length} Sanity documents.`)
}

seed().catch((error) => {
  console.error(error)
  process.exit(1)
})
