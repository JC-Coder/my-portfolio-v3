import { usePostHog } from '@posthog/react'

export function usePostHogEvents() {
  const posthog = usePostHog()

  const trackEvent = (
    eventName: string,
    properties: Record<string, any> = {},
  ) => {
    // track in posthog
    posthog.capture(eventName, properties)

    // track in google analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, {
        ...properties,
        timestamp: new Date().toISOString(),
      })
    }
  }

  return {
    trackSocialLinkClick: (platform: string, link: string) => {
      trackEvent('social_link_clicked', {
        platform,
        link,
      })
    },
    trackTabChange: (tabId: string) => {
      trackEvent('tab_change', { tab_id: tabId })
    },
    project: {
      trackDemoUrlClick: (projectTitle: string, url?: string) => {
        trackEvent('project_demo_url_clicked', {
          project_title: projectTitle,
          url,
        })
      },
      trackVideoClick: (projectTitle: string) => {
        trackEvent('project_video_clicked', {
          project_title: projectTitle,
        })
      },
    },
    trackExperienceDescriptionClick: (company: string) => {
      trackEvent('experience_description_clicked', {
        company,
      })
    },
    trackBlogPostClick: (title: string, link: string) => {
      trackEvent('blog_post_clicked', {
        title,
        link,
      })
    },
    trackTalkClick: (title: string, link: string) => {
      trackEvent('talk_clicked', {
        title,
        link,
      })
    },
    trackInspiredByClick: (link: string) => {
      trackEvent('inspired_by_clicked', {
        link,
      })
    },
  }
}
