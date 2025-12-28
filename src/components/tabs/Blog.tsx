interface IBlogPost {
  title: string
  date: string
  description: string
  tags: string[]
  link: string
}

const BLOG_POSTS: IBlogPost[] = [
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
]

export function Blog() {
  return (
    <div className="space-y-12">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Blog</h2>
        <p className="text-muted-foreground">
          Thoughts on web development, design systems, and modern tooling.
        </p>
      </div>

      <div className="space-y-6">
        {BLOG_POSTS.map((post, index) => (
          <BlogItem key={index} post={post} />
        ))}
      </div>
    </div>
  )
}

function BlogItem({ post }: { post: IBlogPost }) {
  return (
    <a
      href={post.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block group p-6 -mx-6 rounded-2xl border border-transparent hover:border-border hover:bg-zinc-50/50 dark:hover:bg-zinc-900/30 transition-all duration-300 shadow-none hover:shadow-sm"
    >
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4">
          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors flex-1">
            {post.title}
          </h3>
          <span className="text-[15px] text-muted-foreground whitespace-nowrap pt-1">
            {post.date}
          </span>
        </div>

        <p className="text-muted-foreground leading-relaxed">
          {post.description}
        </p>

        <div className="flex flex-wrap gap-2 pt-1">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1.5 rounded-md bg-secondary text-muted-foreground border border-border"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  )
}
