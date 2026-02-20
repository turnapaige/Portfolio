import { useScrollReveal } from '../hooks/useScrollReveal'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Projects from '../components/sections/Projects'
import Experience from '../components/sections/Experience'
import Skills from '../components/sections/Skills'
import Education from '../components/sections/Education'
import Blog from '../components/sections/Blog'
import Contact from '../components/sections/Contact'

export default function Home() {
  useScrollReveal()

  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Education />
      <Blog />
      <Contact />
    </>
  )
}
