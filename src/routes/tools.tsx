import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/tools')({
  component: Tools,
})

function Tools() {
  return (
    <div className="space-y-12">
       <div className="space-y-2">
        <h2 className="text-2xl font-serif font-semibold">Tools</h2>
        <p className="text-muted-foreground">My stack and daily drivers.</p>
      </div>

        <ToolSection title="Frontend">
            <ToolItem name="React" icon="⚛️" />
            <ToolItem name="Next.js" icon="N" />
            <ToolItem name="TailwindCSS" icon="🌊" />
        </ToolSection>

        <ToolSection title="Backend & Infrastructure">
            <ToolItem name="Node.js" icon="🟩" />
            <ToolItem name="Bun" icon="🥟" />
            <ToolItem name="PostgreSQL" icon="🐘" />
            <ToolItem name="Hono" icon="🔥" />
            <ToolItem name="Neon" icon="🟢" />
            <ToolItem name="Drizzle" icon="🌧️" />
        </ToolSection>

        <ToolSection title="Development Tools">
            <ToolItem name="Docker" icon="🐳" />
            <ToolItem name="Vitest" icon="⚡" />
            <ToolItem name="PostHog" icon="🦔" />
            <ToolItem name="Upstash" icon="🌀" />
        </ToolSection>
    </div>
  )
}

function ToolSection({ title, children }: { title: string, children: React.ReactNode }) {
    return (
        <div className="space-y-6">
            <h3 className="text-lg font-semibold">{title}</h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6">
                {children}
            </div>
        </div>
    )
}

function ToolItem({ name, icon }: { name: string, icon: string }) {
    return (
        <div className="flex flex-col items-center gap-3 group">
            <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                {icon}
            </div>
            <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">{name}</span>
        </div>
    )
}
