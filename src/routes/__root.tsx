import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'

import appCss from '../styles.css?url'

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
        title: 'Dominik Koch - Software Engineer',
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

import { ProfileHeader } from '../components/ProfileHeader'
import { Footer } from '../components/Footer'
import { TabNavigation, type TabId } from '../components/TabNavigation'
import { Projects } from '../components/tabs/Projects'
import { Experience } from '../components/tabs/Experience'
import { Tools } from '../components/tabs/Tools'
import { Blog } from '../components/tabs/Blog'
import { Speaking } from '../components/tabs/Speaking'
import { useState } from 'react'

function RootComponent() {
  const [activeTab, setActiveTab] = useState<TabId>('projects')

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
          <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
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
