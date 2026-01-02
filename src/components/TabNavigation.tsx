import { usePostHogEvents } from '../hooks/usePostHog'

export type TabId = 'projects' | 'experience' | 'tools' | 'blog' | 'speaking'

interface TabNavigationProps {
  activeTab: TabId
  onTabChange: (tab: TabId) => void
}

export function TabNavigation({ activeTab, onTabChange }: TabNavigationProps) {
  const { trackTabChange } = usePostHogEvents()

  const tabs: { id: TabId; name: string }[] = [
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
          <TabButton
            key={tab.id}
            name={tab.name}
            isActive={activeTab === tab.id}
            onClick={() => {
              onTabChange(tab.id)
              trackTabChange(tab.id)
            }}
          />
        ))}
      </div>
    </div>
  )
}

function TabButton({
  name,
  isActive,
  onClick,
}: {
  name: string
  isActive: boolean
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className={`px-2 py-1.5 sm:px-4 sm:py-1.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer whitespace-nowrap ${
        isActive
          ? 'bg-background text-foreground shadow-sm ring-1 ring-border'
          : 'text-muted-foreground hover:text-foreground hover:bg-background/50'
      }`}
    >
      {name}
    </button>
  )
}
