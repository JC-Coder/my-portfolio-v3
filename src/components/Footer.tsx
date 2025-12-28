import { getGithubLink, portfolioData } from '@/data/portfolio'

export function Footer() {
  const githubLink = getGithubLink()

  return (
    <footer className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <div className="flex items-center gap-1.5">
        <span>Made with ❤️ by</span>
        <a href={githubLink} className="font-bold text-foreground">
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
        >
          Dominik Koch
        </a>
      </div>
    </footer>
  )
}
