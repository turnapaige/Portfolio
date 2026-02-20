import { GraduationCap, Award } from 'lucide-react'
import { education, certifications } from '../../data/education'

export default function Education() {
  return (
    <section id="education" className="section-padding">
      <div className="container-custom">
        {/* Left-aligned title with teal bar */}
        <div className="flex items-center gap-4 mb-12 reveal">
          <div className="w-12 h-1 bg-teal-500 rounded-full" />
          <h2 className="text-3xl md:text-4xl font-bold font-display">Education</h2>
        </div>
        <div className="max-w-2xl mx-auto">
          {education.map((edu, i) => (
            <div key={i} className="reveal bg-white dark:bg-neutral-800 rounded-xl p-6 border-l-4 border-l-teal-500 border border-neutral-200 dark:border-neutral-700">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-teal-50 dark:bg-teal-950/30 shrink-0">
                  <GraduationCap size={24} className="text-teal-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-950 dark:text-neutral-50">{edu.degree}</h3>
                  <p className="text-neutral-600 dark:text-neutral-400">{edu.school}</p>
                  <p className="text-sm text-neutral-500 mb-3">{edu.period}</p>
                  <ul className="space-y-1">
                    {edu.highlights.map((h, j) => (
                      <li key={j} className="text-sm text-neutral-600 dark:text-neutral-400 flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications In Progress */}
        <div className="mt-16 reveal">
          <div className="flex items-center gap-3 mb-2">
            <Award size={20} className="text-amber-500" />
            <h3 className="text-2xl font-bold font-display text-neutral-950 dark:text-neutral-50">
              Certifications
            </h3>
            <span className="px-3 py-0.5 text-xs font-semibold tracking-widest uppercase rounded-full bg-amber-400/20 text-amber-500 border border-amber-400/30">
              In Progress
            </span>
          </div>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-8 ml-7">
            Certifications I&apos;m actively working toward as part of my pivot into Cloud &amp; IoT Architecture.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {certifications.map((group) => (
              <div
                key={group.provider}
                className="rounded-xl p-5 border border-dashed border-amber-400/40 bg-amber-50/30 dark:bg-amber-950/10"
              >
                <h4 className="text-sm font-bold uppercase tracking-widest text-amber-500 mb-3">
                  {group.provider}
                </h4>
                <ul className="space-y-2">
                  {group.items.map((cert) => (
                    <li key={cert} className="flex items-start gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                      {cert}
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
