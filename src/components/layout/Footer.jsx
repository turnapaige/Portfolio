import { Github, Linkedin, ArrowUp } from 'lucide-react'

const socials = [
  { icon: Github, href: 'https://github.com/turnapaige', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/paigedhunter', label: 'LinkedIn' },
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-neutral-950 text-neutral-400">
      {/* Teal gradient accent line */}
      <div className="h-1 bg-gradient-to-r from-teal-500 via-cyan-400 to-teal-500" />

      <div className="py-12 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="text-xl font-bold font-display">
              <span className="text-teal-500">P</span>
              <span className="text-neutral-50">H</span>
              <span className="text-teal-500">.</span>
            </span>
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Paige Hunter. All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-4">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2 rounded-lg hover:bg-teal-500/10 hover:text-teal-400 transition-colors"
              >
                <Icon size={20} />
              </a>
            ))}
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg hover:bg-teal-500/10 hover:text-teal-400 transition-colors ml-2"
              aria-label="Back to top"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
