const stats = [
  { label: 'Years in Tech', value: '5+' },
  { label: 'Devices Managed', value: '25K+' },
  { label: 'Engineers Supported', value: '30+' },
]

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        {/* Left-aligned title with teal bar */}
        <div className="flex items-center gap-4 mb-12 reveal">
          <div className="w-12 h-1 bg-teal-500 rounded-full" />
          <h2 className="text-3xl md:text-4xl font-bold font-display">About Me</h2>
        </div>

        {/* Asymmetric 2-col layout */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* Bio - left, wider */}
          <div className="md:col-span-3 reveal">
            <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
              I&apos;m a Software Engineer transitioning into IoT Solutions Architecture, with a focus on
              aerospace and industrial applications. I bridge enterprise-scale
              network engineering with embedded systems development and building IoT prototypes from the
              ground up. I build things end-to-end and learn whatever I need to get there — across Bank of
              America, Citibank, and New York Presbyterian, I&apos;ve owned projects from the first
              conversation with stakeholders to production: a Splunk observability dashboard live with the
              NOC team, a cost management app used daily by 30 engineers, and a data cleanup initiative
              across 25,000+ devices that exposed a systemic gap and spawned a new enterprise program. I
              move fast and thrive in environments where ownership is the expectation.
            </p>
          </div>

          {/* Stats - right, narrower */}
          <div className="md:col-span-2 space-y-6 reveal">
            {stats.map((stat) => (
              <div key={stat.label} className="border-l-2 border-teal-500/30 pl-4">
                <p className="text-3xl md:text-4xl font-bold text-teal-500 font-display mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-neutral-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
