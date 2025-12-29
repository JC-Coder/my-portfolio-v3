export interface IRole {
  title: string
  type: string
  startDate: string
  endDate: string | 'Present'
  location: string
  tech: string
  moreTech?: Array<string>
  showLine?: boolean
}

export interface IExperience {
  company: string
  logoUrl?: string
  logoType?: string
  description?: string
  roles: Array<IRole>
}

export interface IEducation {
  school: string
  degree: string
  type?: string
  period: string
  location: string
  note?: string
  logoType: 'image' | 'text' | 'text-pill'
  logoUrl?: string
  logoText?: string
  logoColor?: string
}

export interface IProject {
  title: string
  status: string
  statusColor: string
  description: string
  tech: Array<string>
  demoLink: string
  logoType: string
  logoText?: string
  logoBg?: string
}

export interface ISocial {
  name: string
  link: string
  icon: string
}

export interface IPortfolioData {
  overview: {
    name: string
    intro: string
    about: string
  }
  socials: Array<ISocial>
  projects: Array<IProject>
  experience: Array<IExperience>
  education: Array<IEducation>
  tools: Array<{
    title: string
    items: Array<{ name: string; icon: string }>
  }>
  blogPosts: Array<{
    title: string
    date: string
    description: string
    tags: Array<string>
    link: string
  }>
  speakingEngagements: Array<{
    title: string
    event: string
    date: string
    description: string
    image: string
    videoUrl?: string
    slidesUrl?: string
    readUrl?: string
  }>
}

export const portfolioData: IPortfolioData = {
  overview: {
    name: 'JC CODER',
    intro: "Hi, I'm Joseph",
    about:
      "**Software Engineer** helping businesses grow, make money and scale. Also working on tools to improve lives of people using the internet. I'm not a **10x Dev** but I can help you **10x your current revenue**.",
  },
  socials: [
    { name: 'GitHub', link: 'https://github.com/jc-coder', icon: 'github' },
    { name: 'Twitter/X', link: 'https://x.com/jc_coder1', icon: 'twitter' },
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/jc-coder',
      icon: 'linkedin',
    },
    // { name: 'Book a call', link: '#', icon: 'calendar' },
    // { name: 'Stack', link: '#', icon: 'box' },
  ],
  projects: [
    {
      title: 'Would You Bot',
      status: 'On Hold',
      statusColor: 'bg-emerald-500/10 text-emerald-500',
      description:
        "Interactive Discord bot providing engaging 'Would You Rather' questions and community features.",
      tech: ['Node.js', 'Discord.js', 'TypeScript', 'MongoDB', 'Docker'],
      demoLink: '#',
      logoType: 'custom-would-you-bot',
    },
    {
      title: 'Marble',
      status: 'Past Maintainer',
      statusColor: 'bg-slate-500/10 text-slate-400',
      description:
        'A modern, open-source headless CMS designed for blogs and content management, built with TypeScript and Nextjs.',
      tech: ['Next.js', 'Postgres', 'TypeScript', 'Prisma', 'Upstash'],
      demoLink: '#',
      logoType: 'text',
      logoText: 'M',
      logoBg: 'bg-secondary',
    },
    {
      title: 'Rivo',
      status: 'Active',
      statusColor: 'bg-purple-500/10 text-purple-500',
      description:
        'SaaS platform for managing software licenses and subscriptions.',
      tech: ['Remix', 'Tailwind', 'Stripe', 'Supabase'],
      demoLink: '#',
      logoType: 'text',
      logoText: 'R',
      logoBg: 'bg-blue-600',
    },
  ],
  experience: [
    {
      company: 'Truparse',
      logoUrl:
        'https://media.licdn.com/dms/image/v2/C4E0BAQGzkpkoG6aNuA/company-logo_200_200/company-logo_200_200/0/1677794769514/truparse_logo?e=1768435200&v=beta&t=KAUWEtV6POu8H_P1fsg7ZuPd3AXAxXhsksbpdQKBUS0',
      description:
        'Worked on multiple projects - Figur (fintech), Breej (fintech), Fosad (AI Recruitment Platform), Penguine (Property booking platform) ',
      roles: [
        {
          title: 'Backend Engineer',
          type: 'Full-time',
          startDate: '2023-05',
          endDate: '2024-11',
          location: 'Remote, Nigeria',
          tech: 'ExpressJS, NestJS, Git, JavaScript, MongoDB, NodeJS, PostgreSQL, Redis, TypeScript, HTML, CSS, AWS , DigitalOcean, Docker, NGINX, PM2, Cloudflare',
        },
      ],
    },
    {
      company: 'Zed',
      logoUrl:
        'https://media.licdn.com/dms/image/v2/D4D0BAQEpEjoK5aUvTQ/company-logo_100_100/company-logo_100_100/0/1684958856471/pawa_ng_logo?e=1768435200&v=beta&t=wuay6x2Mhf25LQeMegFuAOkuJkzfzyiUcqh0x0-FjmM',
      description:
        'ReEngineered and maintained backend services for Zed, a leading fintech startup, enhancing system performance and reliability.',
      roles: [
        {
          title: 'Backend Engineer',
          type: 'Full-time',
          startDate: '2023-05',
          endDate: '2024-04',
          location: 'Remote, Nigeria',
          tech: 'ExpressJS, NestJS, Git, JavaScript, MongoDB, NodeJS, PostgreSQL, Redis, TypeScript, HTML, CSS, AWS , DigitalOcean, Docker, NGINX, PM2, Cloudflare',
        },
      ],
    },
    {
      company: 'Onract',
      logoUrl:
        'https://media.licdn.com/dms/image/v2/D4E0BAQFu4Edf0Xy0yA/company-logo_100_100/company-logo_100_100/0/1688637502473?e=1768435200&v=beta&t=CFRBq7FndxTBzJW3DEic4LwAk_pWybR-xDj_N_s7xDo',
      description:
        'Worked on E-commerce application with advanced integration with social media e.g Facebook where user can make purchase directly from chat through chat bots.',
      roles: [
        {
          title: 'Backend Engineer',
          type: 'Full-time',
          startDate: '2023-02',
          endDate: '2023-12',
          location: 'Remote, UK',
          tech: 'TypeScript, Jest, NestJS, Git, JavaScript, PostgreSQL, Redis, AWS',
        },
      ],
    },
    {
      company: 'Pelmedic',
      logoUrl:
        'https://media.licdn.com/dms/image/v2/C560BAQEMm9oUFWAXew/company-logo_100_100/company-logo_100_100/0/1630577033084?e=1768435200&v=beta&t=s4Zqpz40acqpM9f0i5oui6PtfPc0-25whZSRF_sSWmQ',
      description:
        'Worked on a Medical application that helps users keep track of health metrics and manage medical records efficiently.',
      roles: [
        {
          title: 'Software Engineer',
          type: 'Contract',
          startDate: '2023-02',
          endDate: '2023-05',
          location: 'Remote, Nigeria',
          tech: 'TypeScript, NestJS, Git, JavaScript, MongoDB, Redis, AWS',
        },
      ],
    },
    {
      company: 'SpiCodeX',
      logoUrl:
        'https://media.licdn.com/dms/image/v2/D4D0BAQGVgnUtYOjVAg/company-logo_100_100/company-logo_100_100/0/1704624030101?e=1768435200&v=beta&t=83Pf2t2-s9MEio8sjTQGqlkkbfBg1cGDruCn_Ata0N8',
      description:
        'Worked on an E-commerce application for robotic and STEM education.',
      roles: [
        {
          title: 'Software Engineer',
          type: 'Contract',
          startDate: '2023-02',
          endDate: '2023-05',
          location: 'Remote, Nigeria',
          tech: 'TypeScript, NestJS, Git, JavaScript, MongoDB, Redis',
        },
      ],
    },
  ],
  education: [
    // {
    //   school: 'Baden-Wuerttemberg Cooperative State',
    //   degree: 'Bachelor of Science - BS, Computer Science',
    //   type: 'Full-time',
    //   period: 'Oct 2024 - Aug 2025 · 10 mos',
    //   location: 'Heidenheim, Baden-Württemberg, Germany',
    //   note: 'Dropped Out',
    //   logoType: 'image',
    //   logoUrl:
    //     'https://upload.wikimedia.org/wikipedia/commons/e/e5/DHBW_Logo.svg',
    // },
  ],
  tools: [
    {
      title: 'Frontend',
      items: [
        { name: 'React', icon: '⚛️' },
        { name: 'Next.js', icon: 'N' },
        { name: 'HTML', icon: '📄' },
        { name: 'CSS', icon: '🎨' },
        { name: 'JavaScript', icon: 'JS' },
        { name: 'TypeScript', icon: 'TS' },
        { name: 'TailwindCSS', icon: '🌊' },
      ],
    },
    {
      title: 'Backend & Infrastructure',
      items: [
        { name: 'Node.js', icon: '🟩' },
        { name: 'Express.js', icon: 'E' },
        { name: 'Hono', icon: '🔥' },
        { name: 'Nest.js', icon: 'N' },
        { name: 'RESTful API', icon: '🔌' },
        { name: 'PostgreSQL', icon: '🐘' },
        { name: 'MongoDB', icon: '🍃' },
        { name: 'MySQL', icon: '🗄️' },
        { name: 'Redis', icon: '🔴' },
        { name: 'Firebase', icon: '🔥' },
        { name: 'Supabase', icon: '⚡' },
        { name: 'AWS', icon: '☁️' },
        { name: 'DigitalOcean', icon: '🌊' },
        { name: 'Docker', icon: '🐳' },
        { name: 'NGINX', icon: '🌐' },
        { name: 'PM2', icon: '⚙️' },
        { name: 'Cloudflare', icon: '🛡️' },
      ],
    },
    {
      title: 'Development Tools',
      items: [
        { name: 'GitHub Actions', icon: '⚙️' },
        { name: 'Sentry', icon: '🚨' },
        { name: 'Vitest', icon: '⚡' },
        { name: 'PostHog', icon: '🦔' },
        { name: 'Upstash', icon: '🌀' },
        { name: 'Prometheus', icon: '📊' },
        { name: 'Grafana', icon: '📈' },
      ],
    },
  ],
  blogPosts: [
    {
      title:
        "Building a Laravel-React Todo App: A Comprehensive Beginner's Guide",
      date: 'September 27, 2024',
      description:
        "Creating a full-stack application can seem daunting, especially for beginners. However, with the right guidance, it's entirely achievable. In this blog post, we'll walk you through building a Todo App using Laravel for the backend and React for the frontend.....",
      tags: ['Laravel', 'React', 'PHP', 'JavaScript', 'Fullstack'],
      link: 'https://jc-coder.hashnode.dev/building-a-laravel-react-todo-app-a-comprehensive-beginners-guide',
    },
    {
      title:
        'From Frustration to Innovation: How I Built StartEase, Inspired by Prospark',
      date: 'June 27, 2024',
      description:
        "As a developer, I found myself spending way too much time setting up new projects. Whether it was a React app, a Node.js backend, or a Python script, the initial setup always felt like a chore. I thought, There's got to be a better way!.....",
      tags: ['Open Source', 'Productivity', 'CLI', 'Node.js', 'Tooling'],
      link: 'https://jc-coder.hashnode.dev/from-frustration-to-innovation-how-i-built-startease-inspired-by-prospark',
    },
    {
      title:
        'An Easy Guide to Managing Database Migrations with NestJS and PostgreSQL',
      date: 'August 16, 2023',
      description:
        "Ever felt overwhelmed by the thought of database changes as your app evolves? Fear not! Migrations are here to rescue you from the complexity, turning daunting into the doable. Think of them as your app's organizational magic - like tidying up your app's room as it grows .....",
      tags: ['NestJS', 'PostgreSQL', 'Database', 'Migrations', 'Backend'],
      link: 'https://jc-coder.hashnode.dev/an-easy-guide-to-managing-database-migrations-with-nestjs-and-postgresql',
    },
    {
      title:
        'From Beginner to Pro: A Guide to Learning Web Development the Right Way',
      date: 'January 2, 2023',
      description:
        "Are you looking to start your journey in the world of web development but don't know where to start? Look no further! In this blog post, we will discuss the right way to learn web development. Whether you're a complete beginner or have some experience in web development .....",
      tags: ['Web Development', 'Career', 'Learning', 'Frontend', 'Backend'],
      link: 'https://jc-coder.hashnode.dev/from-beginner-to-pro-a-guide-to-learning-web-development-the-right-way',
    },
    {
      title: "Beginner's Guide To Web Development (simplified)",
      date: 'December 13, 2022',
      description:
        'Web development, also known as website development, refers to the tasks associated with creating, building, and maintaining websites and web applications that run online on a browser. It may, however .....',
      tags: ['Web Development', 'HTML', 'CSS', 'JavaScript', 'Beginner'],
      link: 'https://jc-coder.hashnode.dev/beginners-guide-to-web-development-simplified',
    },
  ],
  speakingEngagements: [
    {
      title: 'The Future of Type-Safe Frontend Architectures',
      event: 'React Berlin Conference',
      date: 'June 2025',
      description:
        'A deep dive into how we can leverage TanStack Router and Start to build robust, type-safe applications that scale. Exploring the boundaries of SSR and SPA modes.',
      image: 'https://iili.io/2aBOZJ.jpg',
      videoUrl: 'https://youtube.com',
      slidesUrl: 'https://speakerdeck.com',
      readUrl: 'https://hashnode.com',
    },
    {
      title: 'Building Maintainable Open Source Projects',
      event: 'Open Source Summit Europe',
      date: 'March 2025',
      description:
        'Lessons learned from maintaining large-scale TypeScript projects. We discuss community management, documentation, and sustainable development practices.',
      image: 'https://iili.io/2aBOZJ.jpg',
      videoUrl: 'https://youtube.com',
      readUrl: 'https://hashnode.com',
    },
    {
      title: 'CSS-in-JS vs Utility-First: The Great Debate',
      event: 'TechTalk Hamburg',
      date: 'November 2024',
      description:
        'Comparing different styling approaches in modern React applications. Analyzing performance, developer experience, and long-term maintainability.',
      image: 'https://iili.io/2aBOZJ.jpg',
      slidesUrl: 'https://speakerdeck.com',
    },
  ],
}

export const getGithubLink = () => {
  return portfolioData.socials.find((social) => social.icon === 'github')?.link
}
