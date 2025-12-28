import { portfolioData } from '../../data/portfolio'

export function Blog() {
  const { blogPosts } = portfolioData

  return (
    <div className="space-y-12">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Blog</h2>
        <p className="text-muted-foreground">
          Thoughts on web development, design systems, and modern tooling.
        </p>
      </div>

      <div className="space-y-6">
        {blogPosts.map((post, index) => (
          <BlogItem key={index} post={post} />
        ))}
      </div>
    </div>
  )
}

function BlogItem({ post }: { post: any }) {
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
          {post.tags.map((tag: string) => (
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
