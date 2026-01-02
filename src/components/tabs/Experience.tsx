import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { calculateDuration, formatDate } from '../../lib/utils'
import { portfolioData } from '../../data/portfolio'
import type { IEducation, IExperience, IRole } from '../../data/portfolio'
import { usePostHogEvents } from '../../hooks/usePostHog'

export function Experience() {
  const { experience, education } = portfolioData

  return (
    <div className="space-y-12">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Work</h2>
        <p className="text-muted-foreground">My professional journey.</p>
      </div>

      <div className="space-y-12">
        {experience.map((item, index) => (
          <ExperienceItem key={index} {...item} />
        ))}
      </div>

      <div className="space-y-8 pt-4">
        <h2 className="text-2xl font-bold">Education</h2>
        <div className="space-y-10">
          {education.length === 0 && (
            <p className="text-muted-foreground">Data Not Available</p>
          )}
          {education.length > 0 &&
            education.map((item, index) => (
              <EducationItem key={index} {...item} />
            ))}
        </div>
      </div>
    </div>
  )
}

function ExperienceItem({
  company,
  logoType,
  logoUrl,
  description,
  roles,
}: IExperience) {
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false)
  const { trackExperienceDescriptionClick } = usePostHogEvents()

  // Calculate total duration and type
  const sortedRolesByStart = [...roles].sort(
    (a: IRole, b: IRole) =>
      new Date(a.startDate).getTime() - new Date(b.startDate).getTime(),
  )
  const sortedRolesByEnd = [...roles].sort((a: IRole, b: IRole) => {
    const endA =
      a.endDate === 'Present'
        ? new Date().getTime()
        : new Date(a.endDate).getTime()
    const endB =
      b.endDate === 'Present'
        ? new Date().getTime()
        : new Date(b.endDate).getTime()
    return endA - endB
  })

  const start = sortedRolesByStart[0].startDate
  const end = sortedRolesByEnd[sortedRolesByEnd.length - 1].endDate
  const totalDuration = calculateDuration(start, end)
  const type = roles[0].type

  const renderLogo = () => {
    if (logoUrl) {
      return (
        <div className="w-12 h-12 rounded-xl bg-white border border-zinc-200 flex items-center justify-center p-1 overflow-hidden">
          <img src={logoUrl} alt={company} className="w-full h-auto" />
        </div>
      )
    }

    if (logoType === 'svg-koch') {
      return (
        <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center overflow-hidden">
          <svg viewBox="0 0 24 24" className="w-8 h-8 text-white fill-current">
            <path d="M3 3h18v18H3V3zm16 16V5H5v14h14zM7 7h10v2H7V7zm0 4h10v2H7v-2zm0 4h7v2H7v-2z" />
          </svg>
        </div>
      )
    }

    if (logoType === 'custom-rsu') {
      return (
        <div className="w-12 h-12 rounded-xl bg-white border border-zinc-200 flex flex-col items-center justify-center p-1">
          <span className="text-[10px] font-bold text-orange-500 leading-none tracking-tighter italic">
            RSU
          </span>
          <span className="text-[6px] text-zinc-400 leading-none uppercase tracking-widest font-medium">
            E-COMMERCE
          </span>
        </div>
      )
    }

    if (logoType === 'svg-mail0') {
      return (
        <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-6 h-6 text-white">
            <path
              fill="currentColor"
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"
            />
          </svg>
        </div>
      )
    }

    return null
  }

  return (
    <div className="flex gap-4">
      <div className="shrink-0">{renderLogo()}</div>
      <div className="space-y-4 flex-1">
        <div>
          <h3 className="text-xl font-bold text-foreground">{company}</h3>
          <div className="text-[15px] text-muted-foreground">
            {totalDuration} · {type}
          </div>
          {description && (
            <div className="mt-3">
              <button
                onClick={() => {
                  setIsDescriptionExpanded(!isDescriptionExpanded)
                  trackExperienceDescriptionClick(company)
                }}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                {isDescriptionExpanded ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
                <span>Description</span>
              </button>
              {isDescriptionExpanded && (
                <div className="mt-2 text-sm text-foreground leading-relaxed">
                  {description}
                </div>
              )}
            </div>
          )}
        </div>

        <div className="space-y-8 relative">
          {roles.map((role: any, index: number) => (
            <div
              key={index}
              className={`relative ${roles.length > 1 ? 'pl-6' : ''}`}
            >
              {/* Connector dots and lines for multiple roles */}
              {roles.length > 1 && (
                <>
                  <div
                    className={`absolute left-0 top-2 rounded-full bg-zinc-400 dark:bg-zinc-600 -translate-x-1/2 z-10 ${
                      index === 0 ? 'w-3.5 h-3.5' : 'w-2 h-2'
                    }`}
                  />
                  {role.showLine && (
                    <div className="absolute left-0 top-4 -bottom-8 w-px bg-zinc-800 -translate-x-1/2" />
                  )}
                </>
              )}

              <div className="space-y-1">
                <div className="font-bold text-foreground">
                  {role.title}{' '}
                  <span className="font-normal text-muted-foreground ml-1">
                    · {role.type}
                  </span>
                </div>
                <div className="text-[15px] text-muted-foreground">
                  {formatDate(role.startDate)} – {formatDate(role.endDate)} ·{' '}
                  {calculateDuration(role.startDate, role.endDate)}
                </div>
                <div className="text-[15px] text-muted-foreground">
                  {role.location}
                </div>
                {role.tech && (
                  <TechStack tech={role.tech} moreTech={role.moreTech} />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function TechStack({
  tech,
  moreTech,
}: {
  tech: string
  moreTech?: Array<string>
}) {
  // Parse tech string by splitting on commas and trimming whitespace
  const techList = tech
    .split(',')
    .map((t) => t.trim())
    .filter((t) => t.length > 0)

  // Combine with moreTech if it exists
  const allTech = moreTech ? [...techList, ...moreTech] : techList

  // Show first 6 items, rest in tooltip
  const visibleTech = allTech.slice(0, 6)
  const remainingTech = allTech.slice(6)
  const hasMore = remainingTech.length > 0

  return (
    <div className="text-sm text-foreground mt-2 font-medium flex items-center gap-1 flex-wrap">
      <span>{visibleTech.join(', ')}</span>
      {hasMore && (
        <div className="group relative">
          <span className="underline decoration-dotted underline-offset-4 cursor-help text-muted-foreground transition-colors hover:text-foreground">
            +{remainingTech.length} {remainingTech.length > 0 && 'more'}
          </span>
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 text-xs rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 ring-1 ring-zinc-950/10 dark:ring-zinc-50/10 max-w-xs whitespace-wrap break-words">
            {allTech.join(', ')}
            <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-white dark:border-t-zinc-900" />
          </div>
        </div>
      )}
    </div>
  )
}

function EducationItem({
  school,
  degree,
  type,
  period,
  location,
  note,
  logoType,
  logoUrl,
  logoText,
  logoColor,
}: IEducation) {
  const renderLogo = () => {
    if (logoType === 'image') {
      return (
        <div className="w-12 h-12 rounded-xl bg-white border border-zinc-200 flex items-center justify-center p-1 overflow-hidden">
          <img src={logoUrl} alt={school} className="w-full h-auto" />
        </div>
      )
    }

    if (logoType === 'text') {
      return (
        <div className="w-12 h-12 rounded-xl bg-white border border-zinc-200 flex items-center justify-center p-2 overflow-hidden">
          <span className={`text-sm font-bold leading-none ${logoColor}`}>
            {logoText}
          </span>
        </div>
      )
    }

    return (
      <div className="w-12 h-12 rounded-xl bg-white border border-zinc-200 flex items-center justify-center p-1 overflow-hidden">
        <div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-900 font-bold text-xs">
          {logoText}
        </div>
      </div>
    )
  }

  return (
    <div className="flex gap-4">
      <div className="shrink-0">{renderLogo()}</div>
      <div className="space-y-1 flex-1">
        <h3 className="text-xl font-bold text-foreground leading-tight">
          {school}
        </h3>
        <div className="font-bold text-foreground flex items-center gap-2">
          {degree}{' '}
          {type && (
            <span className="font-normal text-muted-foreground">· {type}</span>
          )}
        </div>
        <div className="text-[15px] text-muted-foreground">{period}</div>
        <div className="text-[15px] text-muted-foreground">{location}</div>
        {note && <div className="text-sm text-foreground mt-2">{note}</div>}
      </div>
    </div>
  )
}
