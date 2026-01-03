export interface ISEOConfig {
  title: string
  description: string
  keywords?: string[]
  canonical?: string
  ogType?: 'website' | 'article' | 'profile'
  ogImage?: string
  ogUrl?: string
  twitterCard?: 'summary' | 'summary_large_image'
  robots?: 'index,follow' | 'noindex,follow' | 'index,nofollow'
  author?: string
}

export const SITE_URL = 'https://www.jccoder.xyz'
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image-jc.jpg`
export const OG_IMAGE_WIDTH = 1016
export const OG_IMAGE_HEIGHT = 465

export const DEFAULT_SEO: ISEOConfig = {
  title: 'JC Coder - Full-Stack Developer & Web Designer | Portfolio',
  description:
    'Full-stack developer and designer building modern web applications, sites, and digital tools. Explore my projects, experience, and technical insights.',
  keywords: [
    'Web Developer',
    'Web Designer',
    'Full-Stack Developer',
    'React Developer',
    'Node.js',
    'Portfolio',
    'Projects',
    'JavaScript',
    'TypeScript',
  ],
  canonical: SITE_URL,
  ogType: 'website',
  ogImage: DEFAULT_OG_IMAGE,
  robots: 'index,follow',
  author: 'Joseph (JC Coder)',
}

export const PAGE_SEO: Record<string, ISEOConfig> = {
  home: {
    ...DEFAULT_SEO,
  },
  projects: {
    ...DEFAULT_SEO,
    title: 'Projects & Portfolio - JC Coder | Web Development',
    description:
      'A collection of web applications, fintech tools, and creative projects built with modern technologies.',
    canonical: `${SITE_URL}/projects`,
  },
  experience: {
    ...DEFAULT_SEO,
    title: 'Work Experience - JC Coder | Software Engineering',
    description:
      'My professional journey as a developer, from startups to open source contributions and technical support.',
    canonical: `${SITE_URL}/experience`,
  },
  speaking: {
    ...DEFAULT_SEO,
    title: 'Speaking & Workshops - JC Coder',
    description:
      "Talks, conference sessions, and technical workshops I've led for the developer community.",
    canonical: `${SITE_URL}/speaking`,
  },
  blog: {
    ...DEFAULT_SEO,
    title: 'Blog & Articles - JC Coder | Web Insights',
    description:
      'Read about web development, coding tips, and my experiences in the tech industry.',
    canonical: `${SITE_URL}/blog`,
  },
  tools: {
    ...DEFAULT_SEO,
    title: 'Tech Stack & Tools I Use - JC Coder',
    description:
      'The languages, frameworks, and tools I use to build modern websites and software.',
    canonical: `${SITE_URL}/tools`,
  },
}
