import { createFileRoute } from '@tanstack/react-router'
import { ExternalLink } from 'lucide-react'

export const Route = createFileRoute('/projects')({
  component: Projects,
})

function Projects() {
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
          statusColor="bg-green-500/10 text-green-500"
          description="Interactive Discord bot providing engaging 'Would You Rather' questions and community features."
          tech={['Node.js', 'Discord.js', 'TypeScript', 'MongoDB', 'Docker']}
          demoLink="#"
        />

        <ProjectCard
          title="Marble"
          status="Past Maintainer"
          statusColor="bg-blue-500/10 text-blue-500"
          description="A modern, open-source headless CMS designed for blogs and content management, built with TypeScript and Nextjs."
          tech={['Next.js', 'Postgres', 'TypeScript', 'Prisma', 'Upstash']}
          demoLink="#"
        />
        
        <ProjectCard
          title="Rivo"
          status="Active"
          statusColor="bg-purple-500/10 text-purple-500"
          description="SaaS platform for managing software licenses and subscriptions."
          tech={['Remix', 'Tailwind', 'Stripe', 'Supabase']}
          demoLink="#"
        />
      </div>
    </div>
  )
}

function ProjectCard({ title, status, statusColor, description, tech, demoLink }: any) {
  return (
    <div className="group block space-y-3">
      <div className="flex items-center gap-3">
        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        {status && (
          <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${statusColor}`}>
            {status}
          </span>
        )}
      </div>
      
      <p className="text-muted-foreground text-sm leading-relaxed">
        {description}
      </p>

      <div className="flex flex-wrap gap-2">
        {tech.map((t: string) => (
          <span key={t} className="text-xs border border-border px-2 py-1 rounded bg-muted/30 text-muted-foreground">
            {t}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-2 pt-1 opacity-0 group-hover:opacity-100 transition-opacity">
         <a href={demoLink} className="text-xs flex items-center gap-1 text-foreground hover:underline">
            <ExternalLink className="w-3 h-3" /> Live Demo
         </a>
      </div>
    </div>
  )
}
