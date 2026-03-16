const features = [
  {
    label: 'SEO Audit',
    desc: 'Meta tags, alt text, structured data, social sharing',
  },
  {
    label: 'Performance',
    desc: 'Script loading, lazy images, render-blocking detection',
  },
  {
    label: 'Theme Health',
    desc: 'Required hooks, deprecated code, template issues',
  },
]

const tags = ['Next.js', 'TypeScript', 'Free Tool', 'No Install Required', 'Shopify']

export function Projects() {
  return (
    <section
      id="projects"
      className="bg-black border-t border-zinc-800 px-6 md:px-12 py-24 md:py-32"
    >
      <div className="flex flex-col md:flex-row gap-12 md:gap-24">
        {/* Section label */}
        <div className="md:w-48 flex-shrink-0 pt-1">
          <span className="text-xs text-zinc-600 uppercase tracking-widest">
            02 — Projects
          </span>
        </div>

        {/* Content */}
        <div className="flex-1">
          {/* Project card */}
          <div className="border border-zinc-800 hover:border-accent transition-colors duration-300 group">
            {/* Card header */}
            <div className="border-b border-zinc-800 p-8 flex items-start justify-between gap-4">
              <div>
                <span className="text-xs text-accent uppercase tracking-widest mb-3 block">
                  Featured Project
                </span>
                <h3
                  className="font-black text-white tracking-tight uppercase leading-none"
                  style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}
                >
                  CartClinic
                </h3>
                <p className="text-zinc-400 mt-3 text-sm md:text-base max-w-md">
                  Instant health checks for your Shopify store. Find SEO issues,
                  performance problems, and theme errors in seconds.
                </p>
              </div>
              <a
                href="https://www.cartclinicapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-700 group-hover:text-accent transition-colors text-4xl flex-shrink-0 hover:scale-110 transition-transform"
                aria-label="Visit CartClinic"
              >
                ↗
              </a>
            </div>

            {/* Card body */}
            <div className="p-8 grid md:grid-cols-2 gap-10">
              {/* Terminal mockup */}
              <div className="bg-zinc-950 border border-zinc-800 rounded-sm p-5 font-mono text-xs">
                <div className="flex gap-1.5 mb-5">
                  <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                  <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                  <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                  <span className="ml-2 text-zinc-600 text-[10px] uppercase tracking-widest">
                    cartclinic audit
                  </span>
                </div>
                <div className="text-zinc-600 mb-4 text-[11px]">
                  $ Auditing mystore.myshopify.com...
                </div>
                <div className="space-y-2.5">
                  <div className="flex items-start gap-2 text-green-400 text-[11px]">
                    <span className="flex-shrink-0">✓</span>
                    <span>SEO: 8/10 checks passed</span>
                  </div>
                  <div className="flex items-start gap-2 text-yellow-400 text-[11px]">
                    <span className="flex-shrink-0">△</span>
                    <div>
                      <div>Performance: 2 issues found</div>
                      <div className="text-zinc-600 mt-0.5 pl-0">
                        → render-blocking scripts detected
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 text-green-400 text-[11px]">
                    <span className="flex-shrink-0">✓</span>
                    <span>Theme: All hooks valid</span>
                  </div>
                  <div className="border-t border-zinc-800 pt-2 mt-2 text-zinc-500 text-[10px]">
                    Completed in 1.2s — no install required
                  </div>
                </div>
              </div>

              {/* Feature list */}
              <div className="flex flex-col justify-center">
                <ul className="space-y-6">
                  {features.map((feature) => (
                    <li key={feature.label} className="flex gap-3">
                      <span className="text-accent text-xs mt-0.5 flex-shrink-0">
                        ▲
                      </span>
                      <div>
                        <div className="text-white text-sm font-bold uppercase tracking-wide">
                          {feature.label}
                        </div>
                        <div className="text-zinc-500 text-xs mt-0.5">
                          {feature.desc}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Tags */}
            <div className="border-t border-zinc-800 px-8 py-5 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-zinc-900 text-zinc-500 border border-zinc-800 px-3 py-1 uppercase tracking-wider"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Card footer */}
            <div className="border-t border-zinc-800 px-8 py-5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-xs text-zinc-600 uppercase tracking-widest">
                  In Active Development
                </span>
              </div>
              <a
                href="https://www.cartclinicapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-accent hover:text-white transition-colors uppercase tracking-widest font-bold"
              >
                Visit Site →
              </a>
            </div>
          </div>

          <p className="mt-6 text-xs text-zinc-700 uppercase tracking-widest text-center">
            More projects in progress
          </p>
        </div>
      </div>
    </section>
  )
}
