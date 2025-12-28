import { Github, Linkedin, Calendar, Twitter, Box, Moon, Sun } from 'lucide-react'
import { useState, useEffect } from 'react'

export function ProfileHeader() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    // Check initial preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
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

  return (
    <div className="mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex items-start justify-between mb-4">
        <h1 className="text-3xl md:text-4xl font-serif font-bold tracking-tight">
          Hi, I'm Dominik Koch
        </h1>
        
        <div className="flex items-center gap-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="GitHub Profile"
          >
            <Github className="w-5 h-5" />
          </a>
          <button
            onClick={toggleTheme}
            className="text-muted-foreground hover:text-foreground transition-colors focus:outline-none"
            aria-label="Toggle Theme"
          >
            {isDark ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>
      
      <p className="text-muted-foreground leading-relaxed mb-6">
        Software Engineer based in Germany, 20.94558065080 years old with a
        passion for open source. Self proclaimed 10x engineer currently working
        on <strong className="text-foreground">Rivo</strong> and <strong className="text-foreground">Notra</strong>.
      </p>

      <div className="flex items-center gap-4">
        <SocialLink href="#" icon={<Calendar className="w-5 h-5" />} label="Book a call" />
        <SocialLink href="#" icon={<Github className="w-5 h-5" />} label="GitHub" />
        <SocialLink href="#" icon={<Twitter className="w-5 h-5" />} label="Twitter/X" />
        <SocialLink href="#" icon={<Linkedin className="w-5 h-5" />} label="LinkedIn" />
        <SocialLink href="#" icon={<Box className="w-5 h-5" />} label="Stack" />
      </div>
    </div>
  )
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-muted-foreground hover:text-foreground transition-colors p-2 -ml-2 first:ml-0 rounded-md hover:bg-muted/50"
      aria-label={label}
    >
      {icon}
    </a>
  )
}
