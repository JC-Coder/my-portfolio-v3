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

export const SITE_URL = 'https://jccoder.xyz'
export const DEFAULT_OG_IMAGE = '/og-image-jc.png'

export const DEFAULT_SEO: ISEOConfig = {
  title: 'JC Coder - Senior Full-Stack Engineer & AI Automation Architect',
  description:
    'Senior Software Engineer specializing in scalable systems, AI-powered automation, Web3, and high-performance JavaScript/TypeScript architectures. Open Source contributor and DevOps expert.',
  keywords: [
    'Software Engineer',
    'Full-Stack Developer',
    'JavaScript Expert',
    'TypeScript Developer',
    'AI Automation Architect',
    'Web3 Developer',
    'DevOps Engineer',
    'Open Source Contributor',
    'Dev Support',
    'Scalable Systems',
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
    title:
      'High-Impact Engineering: Portfolio of AI & Fintech Solutions | JC Coder',
    description:
      'Explore a portfolio of high-stakes engineering projects including AI agents, Fintech platforms, and scalable Web3 infrastructure built by Joseph (JC Coder).',
    canonical: `${SITE_URL}/projects`,
  },
  experience: {
    ...DEFAULT_SEO,
    title:
      'Engineering Experience - Full-Stack & Systems Architecture | JC Coder',
    description:
      'Professional experience in architecting robust backend systems, lead developer roles, and deep contributions to the Open Source ecosystem.',
    canonical: `${SITE_URL}/experience`,
  },
  speaking: {
    ...DEFAULT_SEO,
    title:
      'Speaking Engagements - Dev Advocate & Technical Educator | JC Coder',
    description:
      'Technical talks and workshops on AI, automation, and modern web engineering delivered at GDG, DevFest, and international tech conferences.',
    canonical: `${SITE_URL}/speaking`,
  },
  blog: {
    ...DEFAULT_SEO,
    title: 'JC Coder Blog - Deep Dives into Engineering & Automation',
    description:
      'Technical articles on JavaScript, TypeScript, AI agents, and scaling digital products.',
    canonical: `${SITE_URL}/blog`,
  },
  tools: {
    ...DEFAULT_SEO,
    title: 'Tech Stack & Engineering Tools | JC Coder',
    description:
      'The modern tech stack used to build high-performance applications: React, Node.js, AWS, Docker, and AI tools.',
    canonical: `${SITE_URL}/tools`,
  },
}
