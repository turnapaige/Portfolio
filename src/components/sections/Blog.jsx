import { ExternalLink, ArrowUpRight } from 'lucide-react'
import { blogPosts } from '../../data/blog'

export default function Blog() {
  return (
    <section id="blog" className="section-padding bg-gradient-to-br from-teal-50/50 via-neutral-100 to-cyan-50/50 dark:from-teal-950/20 dark:via-neutral-900 dark:to-cyan-950/20">
      <div className="container-custom">
        <h2 className="section-title reveal">
          <span className="text-gradient">Blog</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 reveal-stagger">
          {blogPosts.map((post) => (
            <a
              key={post.id}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal group bg-white dark:bg-neutral-800 rounded-xl p-6 border border-neutral-200 dark:border-neutral-700 hover:border-teal-500/50 hover:shadow-lg hover:shadow-teal-500/10 hover:-translate-y-1 transition-all duration-300 block"
            >
              <div className="flex items-start justify-between mb-2">
                <span className="text-xs font-medium text-teal-600 dark:text-teal-400 uppercase tracking-wider">{post.platform}</span>
                <ArrowUpRight
                  size={18}
                  className="text-neutral-400 group-hover:text-teal-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                />
              </div>
              <h3 className="text-lg font-bold text-neutral-950 dark:text-neutral-50 mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                {post.title}
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3 leading-relaxed">{post.excerpt}</p>
              <div className="flex items-center gap-2 text-xs text-neutral-500">
                <ExternalLink size={14} />
                <span>{post.date}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
