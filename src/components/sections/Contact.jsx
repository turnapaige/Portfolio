import { useState } from 'react'
import { Mail, Github, Linkedin } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('https://formspree.io/f/xjgeeqoe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const inputStyles = 'w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all'

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-teal-500 via-teal-600 to-cyan-500">
      <div className="container-custom">
        <h2 className="section-title reveal text-white">Get in Touch</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <form onSubmit={handleSubmit} className="space-y-4 reveal">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className={inputStyles}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className={inputStyles}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              className={`${inputStyles} resize-none`}
              required
            />
            {status === 'success' && (
              <p className="text-sm text-white bg-white/20 rounded-lg px-4 py-3">
                Message sent! I'll get back to you soon.
              </p>
            )}
            {status === 'error' && (
              <p className="text-sm text-white bg-red-500/30 rounded-lg px-4 py-3">
                Something went wrong. Please try again or email me directly.
              </p>
            )}
            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full px-6 py-3 text-lg font-medium rounded-lg bg-white text-teal-600 hover:bg-white/90 hover:shadow-lg transition-all disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
          </form>
          <div className="reveal space-y-6">
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Contact Info</h3>
              <div className="space-y-4">
                <a href="mailto:paige.hunter@turnapaige.dev" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
                  <Mail size={20} className="shrink-0" />
                  <span>paige.hunter@turnapaige.dev</span>
                </a>
                <a href="https://linkedin.com/in/paigedhunter" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
                  <Linkedin size={20} className="shrink-0" />
                  <span>linkedin.com/in/paigedhunter</span>
                </a>
                <a href="https://github.com/turnapaige" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
                  <Github size={20} className="shrink-0" />
                  <span>github.com/turnapaige</span>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-2">Let&apos;s Connect</h3>
              <p className="text-sm text-white/80 leading-relaxed">
                Whether you have a project in mind, want to collaborate, or just want to say hi — my inbox is always open.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
