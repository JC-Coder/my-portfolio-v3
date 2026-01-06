import { Link } from '@tanstack/react-router'
import { usePostHogEvents } from '../hooks/usePostHog'

export type TabId = 'projects' | 'experience' | 'tools' | 'blog' | 'speaking'

interface TabNavigationProps {
  activeTab: TabId
}

export function TabNavigation({ activeTab }: TabNavigationProps) {
  const { trackTabChange } = usePostHogEvents()

  const tabs: Array<{ id: TabId; name: string }> = [
    { id: 'projects', name: 'Projects' },
    { id: 'experience', name: 'Experience' },
    { id: 'tools', name: 'Tools' },
    { id: 'blog', name: 'Blog' },
    { id: 'speaking', name: 'Talks' },
  ]

  return (
    <div className="mb-8 overflow-x-auto pb-2 scrollbar-hide">
      <div className="inline-flex items-center gap-1 p-1 rounded-full bg-secondary/50 border border-border/50 backdrop-blur-sm">
        {tabs.map((tab) => (
          <TabLink
            key={tab.id}
            name={tab.name}
            to={`/${tab.id}`}
            isActive={activeTab === tab.id}
            onClick={() => {
              trackTabChange(tab.id)
            }}
          />
        ))}
      </div>
    </div>
  )
}

function TabLink({
  name,
  to,
  isActive,
  onClick,
}: {
  name: string
  to: string
  isActive: boolean
  onClick: () => void
}) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`px-2 py-1.5 sm:px-4 sm:py-1.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer whitespace-nowrap ${
        isActive
          ? 'bg-background text-foreground shadow-sm ring-1 ring-border'
          : 'text-muted-foreground hover:text-foreground hover:bg-background/50'
      }`}
    >
      {name}
    </Link>
  )
}
