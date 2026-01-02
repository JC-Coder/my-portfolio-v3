import { getGithubLink, portfolioData } from '@/data/portfolio'
import { usePostHogEvents } from '@/hooks/usePostHog'

export function Footer() {
  const { trackInspiredByClick, trackSocialLinkClick } = usePostHogEvents()
  const githubLink = getGithubLink()

  return (
    <footer className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <div className="flex items-center gap-1.5">
        <span>Made with ❤️ by</span>
        <a
          href={githubLink}
          className="font-bold text-foreground"
          onClick={() => {
            trackSocialLinkClick('github', githubLink!)
          }}
        >
          {portfolioData.overview.name}
        </a>
      </div>
      <div>
        Inspired by{' '}
        <a
          href="https://dominikkoch.dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-foreground underline decoration-1 underline-offset-4 hover:opacity-80 transition-opacity"
          onClick={() => {
            trackInspiredByClick('https://dominikkoch.dev/')
          }}
        >
          Dominik Koch
        </a>
      </div>
    </footer>
  )
}
