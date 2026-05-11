import { createClient } from '@sanity/client'
import { portfolioData } from '../src/data/portfolio'
import { getSanityConfig } from '../sanity.shared'

const sanityConfig = getSanityConfig(process.env)
const token = process.env.SANITY_WRITE_TOKEN

if (!token) {
  throw new Error(
    'Missing SANITY_WRITE_TOKEN. Create a Sanity write token and pass it when running this script.',
  )
}

const client = createClient({
  ...sanityConfig,
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
    {
      _id: 'profile-main',
      _type: 'profile',
      ...portfolioData.overview,
    },
    ...portfolioData.socials.map((social, index) => ({
      _id: `social-${slugify(social.name)}`,
      _type: 'social',
      ...social,
      order: index,
    })),
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
