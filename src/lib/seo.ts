export interface ISEOConfig {
  title: string
  description: string
  keywords?: Array<string>
  canonical?: string
  ogType?: 'website' | 'article' | 'profile'
  ogImage?: string
  ogUrl?: string
  twitterCard?: 'summary' | 'summary_large_image'
  robots?: 'index,follow' | 'noindex,follow' | 'index,nofollow'
  author?: string
}

export const SITE_URL = 'https://jccoder.xyz'
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
  ogUrl: SITE_URL,
  twitterCard: 'summary_large_image',
  robots: 'index,follow',
  author: 'Joseph (JC Coder)',
}

export const PAGE_SEO: Record<string, ISEOConfig> = {
  home: {
    ...DEFAULT_SEO,
  },
  '': {
    ...DEFAULT_SEO,
  },
  projects: {
    ...DEFAULT_SEO,
    title: 'Projects & Portfolio - JC Coder | Web Development',
    description:
      'A collection of web applications, fintech tools, and creative projects built with modern technologies.',
    canonical: `${SITE_URL}/projects`,
    ogUrl: `${SITE_URL}/projects`,
  },
  experience: {
    ...DEFAULT_SEO,
    title: 'Work Experience - JC Coder | Software Engineering',
    description:
      'My professional journey as a developer, from startups to open source contributions and technical support.',
    canonical: `${SITE_URL}/experience`,
    ogUrl: `${SITE_URL}/experience`,
  },
  speaking: {
    ...DEFAULT_SEO,
    title: 'Speaking & Workshops - JC Coder',
    description:
      "Talks, conference sessions, and technical workshops I've led for the developer community.",
    canonical: `${SITE_URL}/speaking`,
    ogUrl: `${SITE_URL}/speaking`,
  },
  blog: {
    ...DEFAULT_SEO,
    title: 'Blog & Articles - JC Coder | Web Insights',
    description:
      'Read about web development, coding tips, and my experiences in the tech industry.',
    canonical: `${SITE_URL}/blog`,
    ogUrl: `${SITE_URL}/blog`,
  },
  tools: {
    ...DEFAULT_SEO,
    title: 'Tech Stack & Tools I Use - JC Coder',
    description:
      'The languages, frameworks, and tools I use to build modern websites and software.',
    canonical: `${SITE_URL}/tools`,
    ogUrl: `${SITE_URL}/tools`,
  },
}

export function generateSEOHead(page: keyof typeof PAGE_SEO) {
  const seo = PAGE_SEO[page]
  return {
    meta: [
      { title: seo.title },
      { name: 'description', content: seo.description },
      { name: 'keywords', content: seo.keywords?.join(', ') },
      { name: 'robots', content: seo.robots },
      { name: 'author', content: seo.author },
      { property: 'og:title', content: seo.title },
      { property: 'og:description', content: seo.description },
      { property: 'og:image', content: seo.ogImage },
      { property: 'og:url', content: seo.ogUrl },
      { property: 'og:type', content: seo.ogType },
      { property: 'og:image:width', content: String(OG_IMAGE_WIDTH) },
      { property: 'og:image:height', content: String(OG_IMAGE_HEIGHT) },
      { property: 'og:image:type', content: 'image/jpeg' },
      { property: 'og:site_name', content: 'JC Coder' },
      { property: 'og:locale', content: 'en_US' },
      { name: 'twitter:card', content: seo.twitterCard },
      { name: 'twitter:site', content: '@jc_coder1' },
      { name: 'twitter:creator', content: '@jc_coder1' },
      { name: 'twitter:title', content: seo.title },
      { name: 'twitter:description', content: seo.description },
      { name: 'twitter:image', content: seo.ogImage },
    ],
    links: [{ rel: 'canonical', href: seo.canonical }],
  }
}
