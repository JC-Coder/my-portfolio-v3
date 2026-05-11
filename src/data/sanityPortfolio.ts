import {sanityClient} from '../lib/sanity'
import type {
  IEducation,
  IExperience,
  IPortfolioData,
  IProject,
  ISocial,
} from './portfolio'

export type ProfileContent = {
  overview: IPortfolioData['overview']
  socials: Array<ISocial>
}

export type BlogPost = IPortfolioData['blogPosts'][number]
export type SpeakingEngagement = IPortfolioData['speakingEngagements'][number]

export async function getProfileContent(): Promise<ProfileContent | null> {
  const data = await sanityClient.fetch<{
    profile: IPortfolioData['overview'] | null
    socials: Array<ISocial>
  }>(`
    {
      "profile": *[_type == "profile"][0] {
        name,
        intro,
        about
      },
      "socials": *[_type == "social"] | order(order asc) {
        name,
        link,
        icon
      }
    }
  `)

  if (!data.profile) {
    return null
  }

  return {
    overview: data.profile,
    socials: data.socials,
  }
}

export async function getProjects(): Promise<Array<IProject>> {
  return sanityClient.fetch(`
    *[_type == "project"] | order(order asc) {
      title,
      status,
      statusColor,
      description,
      demoLink,
      videoUrl,
      "logoUrl": coalesce(logo.asset->url, logoUrl)
    }
  `)
}

export async function getExperienceContent(): Promise<{
  experience: Array<IExperience>
  education: Array<IEducation>
}> {
  return sanityClient.fetch(`
    {
      "experience": *[_type == "experience"] | order(order asc) {
        company,
        description,
        logoType,
        "logoUrl": coalesce(logo.asset->url, logoUrl),
        roles[] {
          title,
          type,
          startDate,
          endDate,
          location,
          tech,
          moreTech,
          showLine
        }
      },
      "education": *[_type == "education"] | order(order asc) {
        school,
        degree,
        type,
        period,
        location,
        note,
        logoType,
        "logoUrl": coalesce(logo.asset->url, logoUrl),
        logoText,
        logoColor
      }
    }
  `)
}

export async function getBlogPosts(): Promise<Array<BlogPost>> {
  return sanityClient.fetch(`
    *[_type == "blogPost"] | order(order asc) {
      title,
      date,
      description,
      tags,
      link
    }
  `)
}

export async function getSpeakingEngagements(): Promise<
  Array<SpeakingEngagement>
> {
  return sanityClient.fetch(`
    *[_type == "speakingEngagement"] | order(order asc) {
      title,
      event,
      date,
      description,
      "image": coalesce(image.asset->url, imageUrl),
      videoUrl,
      slidesUrl,
      readUrl
    }
  `)
}
