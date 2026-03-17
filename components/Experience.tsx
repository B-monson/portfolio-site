const experience = [
  {
    role: 'Founder & Developer',
    company: 'CartClinic',
    period: '2026 — Present',
    current: true,
    description:
      'Building a free Shopify store diagnostic tool from the ground up. Responsible for product design, full-stack development with Next.js, and go-to-market strategy. Handling all aspects from UX research to deployment.',
    highlights: ['Next.js', 'TypeScript', 'Product Design', 'Shopify API', 'UX Research'],
  },
  {
    role: 'Level 2 Implementation Specialist',
    company: 'Order Protection',
    period: '2023 — 2026',
    current: false,
    description:
      'Led complex eCommerce integrations for enterprise and mid-market brands. Owned advanced Shopify and BigCommerce implementations, customizing JavaScript solutions across diverse storefront architectures and resolving high-impact technical escalations. Collaborated closely with Product, Engineering, and Customer Success to refine onboarding workflows and improve time-to-value for merchants.',
    highlights: [
      'Shopify',
      'BigCommerce',
      'JavaScript',
      'Enterprise Integrations',
      'Technical Escalations',
      'Cross-functional Collaboration',
    ],
  },
]

export function Experience() {
  return (
    <section
      id="experience"
      className="bg-black border-t border-zinc-800 px-6 md:px-12 py-24 md:py-32"
    >
      <div className="flex flex-col md:flex-row gap-12 md:gap-24">
        {/* Section label */}
        <div className="md:w-48 flex-shrink-0 pt-1">
          <span className="text-xs text-zinc-600 uppercase tracking-widest">
            03 — Experience
          </span>
        </div>

        {/* Content */}
        <div className="flex-1 divide-y divide-zinc-800">
          {experience.map((exp) => (
            <div
              key={exp.role}
              className="py-10 flex flex-col md:flex-row md:items-start gap-6"
            >
              {/* Period */}
              <div className="md:w-40 flex-shrink-0">
                <span className="text-xs text-zinc-600 uppercase tracking-wider">
                  {exp.period}
                </span>
                {exp.current && (
                  <div className="flex items-center gap-1.5 mt-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                    <span className="text-xs text-accent uppercase tracking-widest">
                      Current
                    </span>
                  </div>
                )}
              </div>

              {/* Details */}
              <div className="flex-1">
                <h4 className="text-white font-bold text-lg md:text-xl">
                  {exp.role}
                </h4>
                <p className="text-accent text-sm font-medium mt-0.5 uppercase tracking-wider">
                  {exp.company}
                </p>
                <p className="text-zinc-400 mt-4 text-sm leading-relaxed">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-5">
                  {exp.highlights.map((h) => (
                    <span
                      key={h}
                      className="text-xs border border-zinc-800 text-zinc-600 px-2.5 py-1 uppercase tracking-wider"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
