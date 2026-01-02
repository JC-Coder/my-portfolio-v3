import { ChevronDown, ExternalLink } from 'lucide-react'
import { useState } from 'react'
import { portfolioData } from '../../data/portfolio'
import { usePostHogEvents } from '../../hooks/usePostHog'

export function Projects() {
  const { projects } = portfolioData

  return (
    <div className="space-y-12">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Projects</h2>
        <p className="text-muted-foreground">Some things I've built.</p>
      </div>

      <div className="space-y-10">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  )
}

function ProjectCard({
  title,
  status,
  statusColor,
  description,
  demoLink,
  logoUrl,
  videoUrl,
}: any) {
  const [showVideo, setShowVideo] = useState(false)
  const {
    project: { trackDemoUrlClick, trackVideoClick },
  } = usePostHogEvents()

  const renderLogo = () => {
    return (
      <div className="w-12 h-12 rounded-xl border border-border flex items-center justify-center overflow-hidden bg-secondary">
        <img
          src={logoUrl}
          alt={`${title} logo`}
          className="w-full h-full object-cover"
        />
      </div>
    )
  }

  return (
    <div className="flex gap-4 group">
      <div className="shrink-0 pt-1">{renderLogo()}</div>
      <div className="space-y-3 flex-1">
        <div className="flex items-center gap-3">
          <h3 className="text-xl font-bold text-foreground">{title}</h3>
          {status && (
            <span
              className={`text-[10px] px-2 py-0.5 rounded-md font-medium ${statusColor}`}
            >
              {status}
            </span>
          )}
        </div>

        <p className="text-muted-foreground leading-relaxed max-w-xl">
          {description}
        </p>

        <div className="flex items-center gap-6 pt-1">
          {demoLink && demoLink !== '#' && (
            <a
              href={demoLink}
              target="__blank"
              className="text-sm flex items-center gap-2 text-foreground hover:underline font-medium"
              onClick={() => {
                trackDemoUrlClick(title, demoLink)
              }}
            >
              <ExternalLink className="w-4 h-4" /> Live Demo
            </a>
          )}

          {videoUrl && (
            <button
              onClick={() => {
                setShowVideo(!showVideo)
                trackVideoClick(title)
              }}
              className="text-sm flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-medium cursor-pointer"
            >
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${
                  showVideo ? 'rotate-180' : ''
                }`}
              />
              {showVideo ? 'Hide Video' : 'View Video'}
            </button>
          )}
        </div>

        {showVideo && videoUrl && (
          <div className="mt-4 rounded-xl overflow-hidden border border-border bg-muted/50 aspect-video animate-in fade-in slide-in-from-top-2 duration-300">
            <video
              src={videoUrl}
              controls
              className="w-full h-full object-cover"
              autoPlay
              muted
            />
          </div>
        )}
      </div>
    </div>
  )
}
