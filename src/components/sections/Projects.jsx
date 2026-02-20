import { Github, ExternalLink } from 'lucide-react'
import { projects } from '../../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-gradient-to-br from-teal-50/50 via-neutral-100 to-cyan-50/50 dark:from-teal-950/20 dark:via-neutral-900 dark:to-cyan-950/20">
      <div className="container-custom">
        <h2 className="section-title reveal">
          <span className="text-gradient">Projects</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 reveal-stagger">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`reveal group bg-white dark:bg-neutral-800 rounded-xl p-6 border border-neutral-200 dark:border-neutral-700 hover:border-teal-500/50 hover:shadow-lg hover:shadow-teal-500/10 hover:-translate-y-1 transition-all duration-300 ${
                project.featured ? 'md:col-span-2 border-l-4 border-l-teal-500' : ''
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-bold text-neutral-950 dark:text-neutral-50 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2 ml-4 shrink-0">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-teal-500 transition-colors" aria-label="GitHub">
                      <Github size={18} />
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-teal-500 transition-colors" aria-label="Live demo">
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>
              <p className="text-neutral-600 dark:text-neutral-400 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium bg-teal-50 dark:bg-teal-950/30 text-teal-700 dark:text-teal-300 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
