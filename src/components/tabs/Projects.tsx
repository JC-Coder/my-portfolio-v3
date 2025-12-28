import { ExternalLink } from 'lucide-react'

export function Projects() {
  return (
    <div className="space-y-12">
      <div className="space-y-2">
        <h2 className="text-2xl font-serif font-semibold">Projects</h2>
        <p className="text-muted-foreground">Some things I've built.</p>
      </div>

      <div className="space-y-10">
        <ProjectCard
          title="Would You Bot"
          status="On Hold"
          statusColor="bg-emerald-500/10 text-emerald-500"
          description="Interactive Discord bot providing engaging 'Would You Rather' questions and community features."
          tech={['Node.js', 'Discord.js', 'TypeScript', 'MongoDB', 'Docker']}
          demoLink="#"
          logo={
            <div className="w-12 h-12 rounded-xl bg-[#2b2d31] flex items-center justify-center overflow-hidden">
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 rounded-full border-4 border-[#ff4500] clip-path-half-left"></div>
                <div className="absolute inset-0 rounded-full border-4 border-[#5865f2] clip-path-half-right"></div>
              </div>
            </div>
          }
        />

        <ProjectCard
          title="Marble"
          status="Past Maintainer"
          statusColor="bg-slate-500/10 text-slate-400"
          description="A modern, open-source headless CMS designed for blogs and content management, built with TypeScript and Nextjs."
          tech={['Next.js', 'Postgres', 'TypeScript', 'Prisma', 'Upstash']}
          demoLink="#"
          logo={
            <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white font-bold text-xl">
              M
            </div>
          }
        />

        <ProjectCard
          title="Rivo"
          status="Active"
          statusColor="bg-purple-500/10 text-purple-500"
          description="SaaS platform for managing software licenses and subscriptions."
          tech={['Remix', 'Tailwind', 'Stripe', 'Supabase']}
          demoLink="#"
          logo={
            <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-xl">
              R
            </div>
          }
        />
      </div>
    </div>
  )
}

function ProjectCard({
  title,
  status,
  statusColor,
  description,
  tech,
  demoLink,
  logo,
}: any) {
  return (
    <div className="flex gap-4 group">
      <div className="shrink-0 pt-1">{logo}</div>
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <h3 className="text-xl font-bold text-foreground">{title}</h3>
          {status && (
            <span
              className={`text-[10px] px-2 py-0.5 rounded-md font-medium ${statusColor}`}
            >
              {status}
            </span>
          )}
        </div>

        <p className="text-muted-foreground text-[15px] leading-relaxed max-w-xl">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {tech.map((t: string) => (
            <span
              key={t}
              className="text-xs px-3 py-1.5 rounded-md bg-zinc-900/50 text-zinc-400 border border-zinc-800/50"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-2 pt-1">
          <a
            href={demoLink}
            className="text-sm flex items-center gap-2 text-foreground hover:underline font-medium"
          >
            <ExternalLink className="w-4 h-4" /> Live Demo
          </a>
        </div>
      </div>
    </div>
  )
}
