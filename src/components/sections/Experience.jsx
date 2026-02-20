import { experience } from '../../data/experience'

export default function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        {/* Left-aligned title with teal bar */}
        <div className="flex items-center gap-4 mb-12 reveal">
          <div className="w-12 h-1 bg-teal-500 rounded-full" />
          <h2 className="text-3xl md:text-4xl font-bold font-display">Experience</h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="relative border-l-2 border-teal-500/30 pl-8 space-y-12 reveal-stagger">
            {experience.map((item) => (
              <div key={item.id} className="relative reveal">
                {/* Glowing teal timeline dot */}
                <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-teal-500 border-4 border-neutral-50 dark:border-neutral-950 shadow-lg shadow-teal-500/30" />
                <p className="text-sm font-medium text-teal-600 dark:text-teal-400 mb-1">{item.period}</p>
                <h3 className="text-xl font-bold text-neutral-950 dark:text-neutral-50">{item.role}</h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-3">{item.company}</p>
                <ul className="space-y-1">
                  {item.highlights.map((h, i) => (
                    <li key={i} className="text-sm text-neutral-600 dark:text-neutral-400 flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
