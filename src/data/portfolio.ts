export const portfolioData = {
  overview: {
    name: 'JC CODER',
    intro: "Hi, I'm Joseph",
    about:
      "**Software Engineer** helping businesses grow, make money and scale. Also working on tools to improve lives of people using the internet. I'm not a **10x Dev** but I can help you make **10x your current revenue**.",
  },
  socials: [
    { name: 'GitHub', link: 'https://github.com/jc-coder', icon: 'github' },
    { name: 'Twitter/X', link: 'https://x.com/jc_coder1', icon: 'twitter' },
    { name: 'LinkedIn', link: 'https://www.linkedin.com/in/jc-coder', icon: 'linkedin' },
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
      company: 'Koch – Bautechnik Energieberatung',
      duration: '4 yrs 4 mos',
      type: 'Part-time',
      logoType: 'svg-koch',
      roles: [
        {
          title: 'Office Assistant',
          type: 'Part-time',
          period: 'Aug 2021 – Present',
          relativeDuration: '4 yrs 4 mos',
          location: 'Riedlingen, Baden-Württemberg, Germany',
          tech: 'Adobe Photoshop, Adobe XD',
        },
      ],
    },
    {
      company: 'RSU GmbH – E-Commerce',
      duration: '11 mos',
      type: 'Co-op',
      logoType: 'custom-rsu',
      roles: [
        {
          title: 'Software Engineer',
          type: 'Co-op',
          period: 'Oct 2024 – Aug 2025',
          relativeDuration: '10 mos',
          location: 'Ulm, Baden-Württemberg, Germany',
          tech: 'Git, Angular',
          moreTech: ['Laravel'],
          showLine: true,
        },
        {
          title: 'Junior Developer',
          type: 'Part-time',
          period: 'Aug 2024 – Sep 2024',
          relativeDuration: '1 mo',
          location: 'Ulm, Baden-Württemberg, Germany',
          tech: 'JavaScript, HTML',
          moreTech: ['CSS'],
          showLine: true,
        },
        {
          title: 'Software Engineer',
          type: 'Internship',
          period: 'Sep 2024 – Oct 2024',
          location: 'Riedlingen, Baden-Württemberg, Germany',
          tech: 'Git, Angular',
          moreTech: ['Laravel'],
        },
      ],
    },
    {
      company: 'Mail0 (X25)',
      duration: '1 mo',
      type: 'Contract',
      logoType: 'svg-mail0',
      roles: [
        {
          title: 'Discord Community Manager',
          type: 'Contract',
          period: 'Jul 2025 – Aug 2025',
          location: 'Remote, Germany',
          tech: 'Discord, Community',
          moreTech: ['Customer Support'],
        },
      ],
    },
  ],
  education: [
    {
      school: 'Baden-Wuerttemberg Cooperative State University Heidenheim',
      degree: 'Bachelor of Science - BS, Computer Science',
      type: 'Full-time',
      period: 'Oct 2024 - Aug 2025 · 10 mos',
      location: 'Heidenheim, Baden-Württemberg, Germany',
      note: 'Dropped Out',
      logoType: 'image',
      logoUrl:
        'https://upload.wikimedia.org/wikipedia/commons/e/e5/DHBW_Logo.svg',
    },
    {
      school: 'Kaufmännische Schule Ehingen',
      degree: 'Fachhochschulreife, Foreign Languages',
      type: 'Full-time',
      period: 'Sep 2022 - Jul 2024 · 1 yr 10 mos',
      location: 'Ehingen, Baden-Württemberg, Germany',
      note: 'Grade: 2.9',
      logoType: 'text',
      logoText: 'KSE',
      logoColor: 'text-blue-800',
    },
    {
      school: 'Geschwister-Scholl-Realschule Riedlingen',
      degree: 'Middle School Diploma',
      type: 'Full-time',
      period: 'Sep 2016 - Jul 2022 · 5 yrs 10 mos',
      location: 'Riedlingen, Baden-Württemberg, Germany',
      note: 'Englisch, German',
      logoType: 'text-pill',
      logoText: 'GSR',
    },
  ],
  tools: [
    {
      title: 'Frontend',
      items: [
        { name: 'React', icon: '⚛️' },
        { name: 'Next.js', icon: 'N' },
        { name: 'TailwindCSS', icon: '🌊' },
      ],
    },
    {
      title: 'Backend & Infrastructure',
      items: [
        { name: 'Node.js', icon: '🟩' },
        { name: 'Bun', icon: '🥟' },
        { name: 'PostgreSQL', icon: '🐘' },
        { name: 'Hono', icon: '🔥' },
        { name: 'Neon', icon: '🟢' },
        { name: 'Drizzle', icon: '🌧️' },
      ],
    },
    {
      title: 'Development Tools',
      items: [
        { name: 'Docker', icon: '🐳' },
        { name: 'Vitest', icon: '⚡' },
        { name: 'PostHog', icon: '🦔' },
        { name: 'Upstash', icon: '🌀' },
      ],
    },
  ],
  blogPosts: [
    {
      title: 'Resolved: Preview Deployment Vulnerability in Dokploy',
      date: 'Jul 10, 2025',
      description:
        'Dokploy allows you to spin up automatic preview deployments for GitHub. These were found to be vulnerable and should not be used by public repositories. Read the full post for more information!',
      tags: ['Vulnerabilities'],
      link: 'https://hashnode.com',
    },
    {
      title: 'Why I switched to TanStack Start',
      date: 'May 15, 2025',
      description:
        'Exploring the benefits of TanStack Start for building modern web applications with type-safe routing and SSR. Discover how it simplifies the development workflow.',
      tags: ['Web Development', 'Frameworks'],
      link: 'https://hashnode.com',
    },
    {
      title: 'Mastering Tailwind CSS 4.0',
      date: 'Mar 22, 2025',
      description:
        'A deep dive into the new features of Tailwind CSS 4.0, including the engine overhaul and CSS-first configuration. Learn how to leverage the latest updates.',
      tags: ['Design Systems', 'CSS'],
      link: 'https://hashnode.com',
    },
    {
      title: 'The future of open source maintenance',
      date: 'Jan 10, 2025',
      description:
        'Reflecting on my experience maintaining Marble and the challenges of sustainable open-source development in the current ecosystem.',
      tags: ['Open Source', 'Thoughts'],
      link: 'https://hashnode.com',
    },
    {
      title: 'Building a type-safe API with Hono and Drizzle',
      date: 'Nov 05, 2024',
      description:
        'How to combine Hono and Drizzle ORM to create a robust and highly performant backend with TypeScript. Practical tips and best practices included.',
      tags: ['Backend', 'TypeScript'],
      link: 'https://hashnode.com',
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
