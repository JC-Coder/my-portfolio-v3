import {
  HeadContent,
  Scripts,
  createRootRoute,
  useLocation,
} from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'
import { useEffect, useState } from 'react'
import { ProfileHeader } from '../components/ProfileHeader'
import { Footer } from '../components/Footer'
import { TabNavigation } from '../components/TabNavigation'
import { Projects } from '../components/tabs/Projects'
import { Experience } from '../components/tabs/Experience'
import { Tools } from '../components/tabs/Tools'
import { Blog } from '../components/tabs/Blog'
import { Speaking } from '../components/tabs/Speaking'
import appCss from '../styles.css?url'
import type { TabId } from '../components/TabNavigation'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'JC CODER - Software Engineer',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),

  shellComponent: RootDocument,
  component: RootComponent,
})

function RootComponent() {
  const location = useLocation()
  const [activeTab, setActiveTab] = useState<TabId>('projects')

  useEffect(() => {
    const pathname = location.pathname.replace(/\//g, '') || 'projects'
    const tabId = pathname as TabId
    const validTabs: Array<TabId> = [
      'projects',
      'experience',
      'tools',
      'blog',
      'speaking',
    ]

    if (validTabs.includes(tabId)) {
      setActiveTab(tabId)
    } else {
      setActiveTab('projects')
    }
  }, [location.pathname])

  const handleTabChange = (tab: TabId) => {
    setActiveTab(tab)
    window.history.pushState(null, '', `/${tab}`)
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case 'projects':
        return <Projects />
      case 'experience':
        return <Experience />
      case 'tools':
        return <Tools />
      case 'blog':
        return <Blog />
      case 'speaking':
        return <Speaking />
      default:
        return <Projects />
    }
  }

  return (
    <>
      <main className="min-h-screen pt-20 pb-16 px-6">
        <div className="max-w-2xl mx-auto">
          <ProfileHeader />
          <TabNavigation activeTab={activeTab} onTabChange={handleTabChange} />
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
            {renderTabContent()}
          </div>
          <div className="mt-20 border-t border-border pt-8">
            <Footer />
          </div>
        </div>
      </main>
    </>
  )
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                document.documentElement.classList.add('dark');
                document.documentElement.style.colorScheme = 'dark';
              })();
            `,
          }}
        />
        <HeadContent />
      </head>
      <body>
        {children}
        <TanStackDevtools
          config={{
            position: 'bottom-right',
          }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  )
}
