import {
  HeadContent,
  Scripts,
  createRootRoute,
  useLocation,
} from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'
import { useEffect, useState } from 'react'
import { PostHogProvider } from '@posthog/react'
import posthog from 'posthog-js'
import { ProfileHeader } from '../components/ProfileHeader'
import { Footer } from '../components/Footer'
import { TabNavigation } from '../components/TabNavigation'
import { Projects } from '../components/tabs/Projects'
import { Experience } from '../components/tabs/Experience'
import { Tools } from '../components/tabs/Tools'
import { Blog } from '../components/tabs/Blog'
import { Speaking } from '../components/tabs/Speaking'
import appCss from '../styles.css?url'
import { DEFAULT_SEO, SITE_URL, generateSEOHead } from '../lib/seo'
import type { TabId } from '../components/TabNavigation'

if (typeof window !== 'undefined') {
  posthog.init(import.meta.env.VITE_PUBLIC_POSTHOG_KEY, {
    api_host: import.meta.env.VITE_PUBLIC_POSTHOG_HOST,
    person_profiles: 'identified_only', // Or 'always' if you want to track anonymous users fully
    capture_pageview: true,
    capture_pageleave: true,
  })
}

export const Route = createRootRoute({
  head: () => {
    const seo = generateSEOHead('')
    return {
      ...seo,
      meta: [
        ...seo.meta,
        {
          charSet: 'utf-8',
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
      ],
      links: [
        ...seo.links,
        {
          rel: 'stylesheet',
          href: appCss,
        },
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico',
        },
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png',
        },
        {
          rel: 'manifest',
          href: '/manifest.json',
        },
      ],
    }
  },
  shellComponent: RootDocument,
  component: RootComponent,
})

function RootComponent() {
  const location = useLocation()
  const [activeTab, setActiveTab] = useState<TabId>('projects')

  useEffect(() => {
    const rawPath = location.pathname.split('/')[1] || 'projects'
    const tabId = rawPath as TabId
    const validTabs: Array<TabId> = [
      'projects',
      'experience',
      'tools',
      'blog',
      'speaking',
    ]

    // Only update tab if it's a valid tab and doesn't look like a static file (contains a dot)
    if (validTabs.includes(tabId)) {
      setActiveTab(tabId)
    } else if (!location.pathname.includes('.')) {
      // If it's not a valid tab but also NOT a file, default to projects
      setActiveTab('projects')
    }
  }, [location.pathname])

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
      <PostHogProvider client={posthog}>
        <main className="min-h-screen pt-20 pb-16 px-6">
          <div className="max-w-2xl mx-auto">
            <ProfileHeader />
            <TabNavigation activeTab={activeTab} />
            <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
              {renderTabContent()}
            </div>
            <div className="mt-20 border-t border-border pt-8">
              <Footer />
            </div>
          </div>
        </main>
      </PostHogProvider>
    </>
  )
}

function RootDocument({ children }: { children: React.ReactNode }) {
  const GA_ID = import.meta.env.VITE_PUBLIC_GA_ID

  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        {GA_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_ID}');
                `,
              }}
            />
          </>
        )}
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
        {/* Person Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Joseph',
              alternateName: 'JC Coder',
              url: SITE_URL,
              image: DEFAULT_SEO.ogImage,
              jobTitle: 'Software Engineer',
              description: DEFAULT_SEO.description,
              sameAs: [
                'https://github.com/jc-coder',
                'https://x.com/jc_coder1',
                'https://www.linkedin.com/in/jc-coder',
                'https://www.youtube.com/@jc_coder',
              ],
            }),
          }}
        />
        {/* ProfessionalService Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfessionalService',
              name: 'JC Coder Engineering',
              image: DEFAULT_SEO.ogImage,
              url: SITE_URL,
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Nigeria',
                addressCountry: 'NG',
              },
              description:
                'Specialized Software Engineering services including AI Agents, Web3 Infrastructure, and Full-Stack Development.',
              priceRange: '$$',
            }),
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
