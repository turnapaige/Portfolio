import { useTypewriter } from '../../hooks/useTypewriter'
import Button from '../ui/Button'

const roles = ['Software Engineer', 'Cloud Engineer', 'Full Stack Developer', 'Builder']

export default function Hero() {
  const typed = useTypewriter(roles, 100, 50, 2000)

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient mesh background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-96 h-96 bg-teal-400/20 dark:bg-teal-500/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl animate-blob top-1/4 left-1/4" />
        <div className="absolute w-96 h-96 bg-cyan-300/20 dark:bg-cyan-500/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl animate-blob top-1/3 right-1/4" style={{ animationDelay: '2s' }} />
        <div className="absolute w-96 h-96 bg-teal-300/15 dark:bg-teal-600/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl animate-blob bottom-1/4 left-1/3" style={{ animationDelay: '4s' }} />
      </div>

      {/* Floating geometric decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-16 h-16 border-2 border-teal-500/20 rounded-lg rotate-12 animate-float" />
        <div className="absolute top-40 right-20 w-8 h-8 bg-teal-500/10 rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-1/4 w-12 h-12 border-2 border-cyan-400/20 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-48 right-1/3 w-6 h-6 bg-teal-400/15 rotate-45 animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/3 left-20 w-4 h-4 bg-cyan-400/20 rounded-full animate-pulse-glow" />
      </div>

      <div className="text-center px-4 max-w-3xl mx-auto">
        <p className="text-sm md:text-base font-medium tracking-widest uppercase text-teal-500 mb-4 animate-fade-in">
          Hello, I&apos;m
        </p>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 animate-slide-up">
          <span className="text-gradient">Paige Hunter</span>
        </h1>
        <div className="h-10 md:h-12 flex items-center justify-center mb-4">
          <span className="text-xl md:text-2xl font-medium text-neutral-600 dark:text-neutral-400">
            {typed}
          </span>
          <span className="inline-block w-[3px] h-6 md:h-8 ml-1 bg-teal-500 animate-typewriter-blink" />
        </div>
        <p className="text-neutral-500 dark:text-neutral-400 mb-8 animate-fade-in text-sm md:text-base" style={{ animationDelay: '0.3s' }}>
          Infrastructure Engineer in finance → transitioning into IoT Solutions Architecture
        </p>
        <div className="flex items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <Button size="lg" onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}>
            View Projects
          </Button>
          <Button variant="outline" size="lg" onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Get in Touch
          </Button>
        </div>
      </div>
    </section>
  )
}
