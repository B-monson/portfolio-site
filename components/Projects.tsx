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

            {/* Screenshot showcase */}
            <div className="bg-zinc-950 border-b border-zinc-800">
              {/* Fake browser chrome bar */}
              <div className="flex items-center gap-2 px-4 py-2.5 bg-zinc-900 border-b border-zinc-800">
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                <span className="ml-3 text-zinc-600 text-[11px] font-mono tracking-wider">
                  cartclinicapp.com/audit
                </span>
              </div>

              {/* Screenshot viewport */}
              <div className="relative overflow-hidden" style={{ height: '440px' }}>
                {/* Desktop screenshot: background-image lets us precisely pan/crop.
                    background-size 'auto 130%' = height 130% of container (571px),
                    proportional width = 571 × (2030/1431) = 810px.
                    background-position shifts down 6% to skip macOS browser chrome. */}
                <div
                  aria-label="CartClinic audit results — desktop view"
                  className="absolute inset-0"
                  style={{
                    backgroundImage: 'url("/images/cartclinic-desktop.png")',
                    backgroundSize: 'auto 130%',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center 6%',
                  }}
                />

                {/* Bottom fade */}
                <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-zinc-950 to-transparent" />

                {/* Mobile inset — zooms into the health-score section of the desktop
                    screenshot for a clean "phone view" without DevTools chrome.
                    background-size 'auto 350%' zooms in ~2.7×; position targets
                    the score card area (upper-center of the page content). */}
                <div
                  aria-label="CartClinic audit results — mobile view"
                  className="absolute bottom-6 right-6 md:right-10 border border-zinc-700 shadow-2xl rounded-sm"
                  style={{
                    width: '110px',
                    aspectRatio: '390 / 844',
                    backgroundImage: 'url("/images/cartclinic-desktop.png")',
                    backgroundSize: 'auto 350%',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: '28% 28%',
                  }}
                />
              </div>
            </div>

            {/* Feature list */}
            <div className="p-8">
              <ul className="grid md:grid-cols-3 gap-6">
                {features.map((feature) => (
                  <li key={feature.label} className="flex gap-3">
                    <span className="text-accent text-xs mt-0.5 flex-shrink-0">▲</span>
                    <div>
                      <div className="text-white text-sm font-bold uppercase tracking-wide">
                        {feature.label}
                      </div>
                      <div className="text-zinc-500 text-xs mt-0.5">{feature.desc}</div>
                    </div>
                  </li>
                ))}
              </ul>
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
