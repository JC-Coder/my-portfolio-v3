import { FileText, Monitor, Play } from 'lucide-react'
import { portfolioData } from '../../data/portfolio'

export function Speaking() {
  const { speakingEngagements } = portfolioData

  return (
    <div className="space-y-12">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Speaking</h2>
        <p className="text-muted-foreground">
          I love sharing my experiences and thoughts on stage at conferences and
          meetups.
        </p>
      </div>

      <div className="space-y-8">
        {speakingEngagements.map((item, index) => (
          <SpeakingItem key={index} engagement={item} />
        ))}
      </div>
    </div>
  )
}

function SpeakingItem({ engagement }: { engagement: any }) {
  return (
    <div className="flex flex-col md:flex-row rounded-2xl border border-border bg-background overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group">
      {/* Left Column: Image */}
      <div className="w-full md:w-1/4 h-40 md:h-auto overflow-hidden">
        <img
          src={engagement.image}
          alt={engagement.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Right Column: Content */}
      <div className="flex-1 p-5 md:p-6 space-y-3">
        <div className="space-y-1">
          <div className="text-[12px] font-bold uppercase tracking-wider text-muted-foreground">
            {engagement.event} • {engagement.date}
          </div>
          <h3 className="text-xl font-bold text-foreground leading-tight">
            {engagement.title}
          </h3>
        </div>

        <p className="text-muted-foreground leading-relaxed text-[15px]">
          {engagement.description}
        </p>

        <div className="flex flex-wrap gap-x-6 gap-y-3 pt-1">
          {engagement.videoUrl && (
            <a
              href={engagement.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-all duration-200 hover:scale-105 active:scale-95"
            >
              <div className="w-7 h-7 rounded-full bg-secondary flex items-center justify-center shadow-sm">
                <Play className="w-3.5 h-3.5 fill-current" />
              </div>
              Watch Video
            </a>
          )}

          {engagement.slidesUrl && (
            <a
              href={engagement.slidesUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-all duration-200 hover:scale-105 active:scale-95"
            >
              <div className="w-7 h-7 rounded-full bg-secondary flex items-center justify-center shadow-sm">
                <Monitor className="w-3.5 h-3.5" />
              </div>
              View Slides
            </a>
          )}

          {engagement.readUrl && (
            <a
              href={engagement.readUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-all duration-200 hover:scale-105 active:scale-95"
            >
              <div className="w-7 h-7 rounded-full bg-secondary flex items-center justify-center shadow-sm">
                <FileText className="w-3.5 h-3.5" />
              </div>
              Read Talk
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
