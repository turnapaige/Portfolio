import { skills, pivotSkills } from '../../data/skills'

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-gradient-to-br from-teal-50/50 via-neutral-100 to-cyan-50/50 dark:from-teal-950/20 dark:via-neutral-900 dark:to-cyan-950/20">
      <div className="container-custom">
        <h2 className="section-title reveal">
          <span className="text-gradient">Skills</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 reveal-stagger">
          {skills.map((group) => (
            <div key={group.category} className="reveal glass-card rounded-xl p-6">
              <h3 className="text-lg font-bold text-neutral-950 dark:text-neutral-50 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-teal-500" />
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm font-medium bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 rounded-lg hover:bg-teal-500 hover:text-white hover:shadow-md hover:shadow-teal-500/20 hover:-translate-y-0.5 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Pivot / In Progress Section */}
        <div className="mt-14 reveal">
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 text-xs font-semibold tracking-widest uppercase rounded-full bg-amber-400/20 text-amber-500 border border-amber-400/30">
              In Progress
            </span>
            <h3 className="text-xl font-bold text-neutral-950 dark:text-neutral-50">
              Currently Building Toward — IoT &amp; Aerospace
            </h3>
          </div>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-6 max-w-2xl">
            Actively pivoting into IoT Solutions Architecture with a focus on aerospace and industrial applications. These are the domains I&apos;m developing hands-on experience in now.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pivotSkills.map((group) => (
              <div
                key={group.category}
                className="rounded-xl p-6 border border-dashed border-amber-400/40 bg-amber-50/30 dark:bg-amber-950/10"
              >
                <h4 className="text-base font-bold text-neutral-800 dark:text-neutral-200 mb-1 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                  {group.category}
                </h4>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-4 leading-relaxed">
                  {group.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm font-medium bg-amber-100/60 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 rounded-lg border border-amber-300/40 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
