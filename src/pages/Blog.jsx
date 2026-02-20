import { useScrollReveal } from '../hooks/useScrollReveal'
import BlogSection from '../components/sections/Blog'

export default function Blog() {
  useScrollReveal()

  return (
    <div className="pt-16">
      <BlogSection />
    </div>
  )
}
