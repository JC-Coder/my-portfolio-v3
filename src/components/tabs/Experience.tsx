export function Experience() {
  return (
    <div className="space-y-12">
      <div className="space-y-2">
        <h2 className="text-2xl font-serif font-semibold">Work</h2>
        <p className="text-muted-foreground">My professional journey.</p>
      </div>

      <div className="relative space-y-12 border-l border-border ml-3 pl-8 py-2">
        <ExperienceItem
          company="Rivo"
          role="Founder & Lead Developer"
          period="Feb 2023 - Present"
          duration="2 yrs 10 mos"
          type="Self-Employed"
          location="Riedlingen, Baden-Württemberg, Germany"
          tech="TypeScript, GoLang and +2 skills"
          logo="R"
          logoColor="bg-blue-600"
          current
        />

        <ExperienceItem
          company="Koch - Bautechnik Energieberatung"
          role="Office Assistant"
          period="Aug 2021 - Present"
          duration="4 yrs 4 mos"
          type="Part-time"
          location="Riedlingen, Baden-Württemberg, Germany"
          tech="Adobe Photoshop, Adobe XD"
          logo="K"
          logoColor="bg-cyan-500"
          current
        />

        <ExperienceItem
          company="RSU GmbH - E-Commerce"
          role="Software Engineer"
          period="Oct 2024 - Aug 2025"
          duration="10 mos"
          type="Co-op"
          location="Ulm, Baden-Württemberg, Germany"
          tech="Git, Angular and +1 skill"
          logo="R"
          logoColor="bg-green-500"
        />

        <ExperienceItem
          company="Mail0 (X25)"
          role="Discord Community Manager"
          period="Jul 2025 - Aug 2025"
          duration="1 mo"
          type="Contract"
          location="Remote, Germany"
          tech="Discord, Community and +1 skill"
          logo="M"
          logoColor="bg-gray-700"
        />
      </div>

      <div className="space-y-8 pt-4">
        <h2 className="text-2xl font-serif font-semibold">Education</h2>
        <div className="relative space-y-10 border-l border-border ml-3 pl-8 py-2">
          <EducationItem
            school="Baden-Wuerttemberg Cooperative State University Heidenheim"
            degree="Bachelor of Science - BS, Computer Science"
            period="Oct 2024 - Aug 2025 · 10 mos"
            location="Heidenheim, Baden-Württemberg, Germany"
            note="Dropped Out"
            logo="B"
          />
          <EducationItem
            school="Kaufmännische Schule Ehingen"
            degree="Fachhochschulreife, Foreign Languages"
            period="Sep 2022 - Jul 2024 · 1 yr 10 mos"
            location="Ehingen, Baden-Württemberg, Germany"
            note="Grade: 2.9"
            logo="K"
          />
        </div>
      </div>
    </div>
  )
}

function ExperienceItem({
  company,
  role,
  period,
  duration,
  type,
  location,
  tech,
  logo,
  logoColor,
  current,
}: any) {
  return (
    <div className="relative">
      <span
        className={`absolute -left-[41px] top-1 flex h-6 w-6 items-center justify-center rounded-full ring-4 ring-background ${logoColor} text-[10px] font-bold text-white`}
      >
        {logo}
      </span>

      <div className="flex flex-col gap-1">
        <h3 className="font-semibold text-foreground">{company}</h3>
        <div className="flex flex-wrap items-center gap-x-2 text-xs text-muted-foreground">
          <span>{duration}</span>
          <span>•</span>
          <span>{type}</span>
        </div>

        <div className="mt-2">
          <div className="font-medium text-sm text-foreground">{role}</div>
          <div className="text-xs text-muted-foreground mt-0.5">{period}</div>
          <div className="text-xs text-muted-foreground mt-0.5">{location}</div>
        </div>

        {tech && (
          <div className="mt-3 text-xs text-muted-foreground">{tech}</div>
        )}
      </div>
    </div>
  )
}

function EducationItem({ school, degree, period, location, note, logo }: any) {
  return (
    <div className="relative">
      <span className="absolute -left-[41px] top-1 flex h-6 w-6 items-center justify-center rounded-full ring-4 ring-background bg-zinc-100 dark:bg-zinc-800 text-[10px] font-bold text-zinc-900 dark:text-white">
        {logo}
      </span>

      <div className="flex flex-col gap-1">
        <h3 className="font-semibold text-foreground">{school}</h3>
        <div className="mt-1">
          <div className="font-medium text-sm text-foreground">{degree}</div>
          <div className="text-xs text-muted-foreground mt-0.5">{period}</div>
          <div className="text-xs text-muted-foreground mt-0.5">{location}</div>
        </div>

        {note && (
          <div className="mt-2 text-xs text-muted-foreground">{note}</div>
        )}
      </div>
    </div>
  )
}
