export function Experience() {
  return (
    <div className="space-y-12">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Work</h2>
        <p className="text-muted-foreground">My professional journey.</p>
      </div>

      <div className="space-y-12">
        <ExperienceItem
          company="Koch – Bautechnik Energieberatung"
          duration="4 yrs 4 mos"
          type="Part-time"
          logo={
            <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center overflow-hidden">
              <svg
                viewBox="0 0 24 24"
                className="w-8 h-8 text-white fill-current"
              >
                <path d="M3 3h18v18H3V3zm16 16V5H5v14h14zM7 7h10v2H7V7zm0 4h10v2H7v-2zm0 4h7v2H7v-2z" />
              </svg>
            </div>
          }
          roles={[
            {
              title: 'Office Assistant',
              type: 'Part-time',
              period: 'Aug 2021 – Present',
              relativeDuration: '4 yrs 4 mos',
              location: 'Riedlingen, Baden-Württemberg, Germany',
              tech: 'Adobe Photoshop, Adobe XD',
            },
          ]}
        />

        <ExperienceItem
          company="RSU GmbH – E-Commerce"
          duration="11 mos"
          type="Co-op"
          logo={
            <div className="w-12 h-12 rounded-xl bg-white border border-zinc-200 flex flex-col items-center justify-center p-1">
              <span className="text-[10px] font-bold text-orange-500 leading-none tracking-tighter italic">
                RSU
              </span>
              <span className="text-[6px] text-zinc-400 leading-none uppercase tracking-widest font-medium">
                E-COMMERCE
              </span>
            </div>
          }
          roles={[
            {
              title: 'Software Engineer',
              type: 'Co-op',
              period: 'Oct 2024 – Aug 2025',
              relativeDuration: '10 mos',
              location: 'Ulm, Baden-Württemberg, Germany',
              tech: 'Git, Angular',
              moreTech: ['Laravel'],
              showLine: true,
            },
            {
              title: 'Junior Developer',
              type: 'Part-time',
              period: 'Aug 2024 – Sep 2024',
              relativeDuration: '1 mo',
              location: 'Ulm, Baden-Württemberg, Germany',
              tech: 'JavaScript, HTML',
              moreTech: ['CSS'],
              showLine: true,
            },
            {
              title: 'Software Engineer',
              type: 'Internship',
              period: 'Sep 2024 – Oct 2024',
              location: 'Riedlingen, Baden-Württemberg, Germany',
              tech: 'Git, Angular',
              moreTech: ['Laravel'],
            },
          ]}
        />

        <ExperienceItem
          company="Mail0 (X25)"
          duration="1 mo"
          type="Contract"
          logo={
            <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-white">
                <path
                  fill="currentColor"
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"
                />
              </svg>
            </div>
          }
          roles={[
            {
              title: 'Discord Community Manager',
              type: 'Contract',
              period: 'Jul 2025 – Aug 2025',
              location: 'Remote, Germany',
              tech: 'Discord, Community',
              moreTech: ['Customer Support'],
            },
          ]}
        />
      </div>

      <div className="space-y-8 pt-4">
        <h2 className="text-2xl font-bold">Education</h2>
        <div className="space-y-10">
          <EducationItem
            school="Baden-Wuerttemberg Cooperative State University Heidenheim"
            degree="Bachelor of Science - BS, Computer Science"
            type="Full-time"
            period="Oct 2024 - Aug 2025 · 10 mos"
            location="Heidenheim, Baden-Württemberg, Germany"
            note="Dropped Out"
            logo={
              <div className="w-12 h-12 rounded-xl bg-white border border-zinc-200 flex items-center justify-center p-1 overflow-hidden">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/e/e5/DHBW_Logo.svg"
                  alt="DHBW"
                  className="w-full h-auto"
                />
              </div>
            }
          />
          <EducationItem
            school="Kaufmännische Schule Ehingen"
            degree="Fachhochschulreife, Foreign Languages"
            type="Full-time"
            period="Sep 2022 - Jul 2024 · 1 yr 10 mos"
            location="Ehingen, Baden-Württemberg, Germany"
            note="Grade: 2.9"
            logo={
              <div className="w-12 h-12 rounded-xl bg-white border border-zinc-200 flex items-center justify-center p-2 overflow-hidden">
                <span className="text-sm font-bold text-blue-800 leading-none">
                  KSE
                </span>
              </div>
            }
          />
          <EducationItem
            school="Geschwister-Scholl-Realschule Riedlingen"
            degree="Middle School Diploma"
            type="Full-time"
            period="Sep 2016 - Jul 2022 · 5 yrs 10 mos"
            location="Riedlingen, Baden-Württemberg, Germany"
            note="Englisch, German"
            logo={
              <div className="w-12 h-12 rounded-xl bg-white border border-zinc-200 flex items-center justify-center p-1 overflow-hidden">
                <div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-900 font-bold text-xs">
                  GSR
                </div>
              </div>
            }
          />
        </div>
      </div>
    </div>
  )
}

function ExperienceItem({ company, duration, type, logo, roles }: any) {
  return (
    <div className="flex gap-4">
      <div className="shrink-0">{logo}</div>
      <div className="space-y-4 flex-1">
        <div>
          <h3 className="text-xl font-bold text-foreground">{company}</h3>
          <div className="text-[15px] text-muted-foreground">
            {duration} · {type}
          </div>
        </div>

        <div className="space-y-8 relative">
          {roles.map((role: any, index: number) => (
            <div key={index} className="relative pl-6">
              {/* Connector dots and lines for multiple roles */}
              {roles.length > 1 && (
                <>
                  <div
                    className={`absolute left-0 top-2 rounded-full bg-zinc-400 dark:bg-zinc-600 -translate-x-1/2 z-10 ${
                      index === 0 ? 'w-3.5 h-3.5' : 'w-2 h-2'
                    }`}
                  />
                  {role.showLine && (
                    <div className="absolute left-0 top-4 bottom-[-32px] w-px bg-zinc-800 -translate-x-1/2" />
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
                  {role.period}{' '}
                  {role.relativeDuration && `· ${role.relativeDuration}`}
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

function TechStack({ tech, moreTech }: { tech: string; moreTech?: string[] }) {
  return (
    <div className="text-sm text-foreground mt-2 font-medium flex items-center gap-1 flex-wrap">
      <span>{tech}</span>
      {moreTech && moreTech.length > 0 && (
        <>
          <span className="font-normal text-muted-foreground">and</span>
          <div className="group relative">
            <span className="underline decoration-dotted underline-offset-4 cursor-help text-muted-foreground transition-colors hover:text-foreground">
              +{moreTech.length} {moreTech.length === 1 ? 'skill' : 'skills'}
            </span>
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-white text-zinc-900 text-xs rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-50 ring-1 ring-zinc-950/10">
              {tech}, {moreTech.join(', ')}
              <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-white" />
            </div>
          </div>
        </>
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
  logo,
}: any) {
  return (
    <div className="flex gap-4">
      <div className="shrink-0">{logo}</div>
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
