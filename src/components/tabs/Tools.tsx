export function Tools() {
  return (
    <div className="space-y-12">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Tools</h2>
        <p className="text-muted-foreground">My stack and daily drivers.</p>
      </div>

      <div className="space-y-10">
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
    </div>
  )
}

function ToolSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-bold text-foreground">{title}</h3>
      <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-y-8 gap-x-4">
        {children}
      </div>
    </div>
  )
}

function ToolItem({ name, icon }: { name: string; icon: string }) {
  return (
    <div className="flex flex-col items-center gap-3 group cursor-default">
      <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 group-hover:bg-zinc-100/30 dark:group-hover:bg-zinc-800/50 transition-all duration-300">
        {icon}
      </div>
      <span className="text-[13px] font-medium text-muted-foreground group-hover:text-foreground transition-colors text-center">
        {name}
      </span>
    </div>
  )
}
