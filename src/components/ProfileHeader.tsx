import {
  Github,
  Linkedin,
  Calendar,
  Twitter,
  Box,
  Moon,
  Sun,
} from 'lucide-react'
import { useState, useEffect } from 'react'
import { getGithubLink, portfolioData } from '../data/portfolio'

export function ProfileHeader() {
  const [isDark, setIsDark] = useState(true)
  const { overview, socials } = portfolioData

  useEffect(() => {
    // Check initial preference
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: light)').matches
    ) {
      setIsDark(false)
    }
  }, [])

  useEffect(() => {
    const root = window.document.documentElement
    if (isDark) {
      root.classList.add('dark')
      root.style.colorScheme = 'dark'
    } else {
      root.classList.remove('dark')
      root.style.colorScheme = 'light'
    }
  }, [isDark])

  const toggleTheme = () => setIsDark(!isDark)

  const getIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case 'github':
        return <Github className="w-5 h-5" />
      case 'linkedin':
        return <Linkedin className="w-5 h-5" />
      case 'twitter':
        return <Twitter className="w-5 h-5" />
      case 'calendar':
        return <Calendar className="w-5 h-5" />
      case 'box':
        return <Box className="w-5 h-5" />
      default:
        return <Box className="w-5 h-5" />
    }
  }

  return (
    <div className="mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex items-start justify-between mb-4">
        <h1 className="text-3xl md:text-4xl font-serif font-bold tracking-tight">
          {overview.intro}
        </h1>

        <div className="flex items-center gap-4">
          <a
            href={getGithubLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
            aria-label="GitHub Profile"
          >
            <Github className="w-5 h-5" />
            <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 text-[11px] font-medium rounded opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap shadow-xl z-50 scale-95 group-hover:scale-100">
              GitHub
              <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-zinc-900 dark:border-t-zinc-100"></span>
            </span>
          </a>
          <button
            onClick={toggleTheme}
            className="group relative flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors focus:outline-none cursor-pointer"
            aria-label="Toggle Theme"
          >
            {isDark ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
            <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 text-[11px] font-medium rounded opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap shadow-xl z-50 scale-95 group-hover:scale-100">
              {isDark ? 'Light Mode' : 'Dark Mode'}
              <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-zinc-900 dark:border-t-zinc-100"></span>
            </span>
          </button>
        </div>
      </div>

      <p className="text-foreground/90 leading-relaxed mb-6">
        {overview.about.split('**').map((part, i) =>
          i % 2 === 1 ? (
            <strong key={i} className="text-foreground font-bold">
              {part}
            </strong>
          ) : (
            part
          ),
        )}
      </p>

      <div className="flex items-center gap-4">
        {socials.map((social) => (
          <SocialLink
            key={social.name}
            href={social.link}
            icon={getIcon(social.icon)}
            label={social.name}
          />
        ))}
      </div>
    </div>
  )
}

function SocialLink({
  href,
  icon,
  label,
}: {
  href: string
  icon: React.ReactNode
  label: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors p-2 -ml-2 first:ml-0 rounded-md hover:bg-muted/50"
      aria-label={label}
    >
      {icon}
      <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 text-[11px] font-medium rounded opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap shadow-xl z-50 scale-95 group-hover:scale-100">
        {label}
        <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-zinc-900 dark:border-t-zinc-100"></span>
      </span>
    </a>
  )
}
