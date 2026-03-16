const skills = [
  'Shopify',
  'BigCommerce',
  'JavaScript',
  'Next.js',
  'TypeScript',
  'UX / UI Design',
  'Interaction Design',
  'eCommerce Integrations',
  'Product Strategy',
  'Technical Escalations',
  'React',
  'Merchant Tooling',
]

export function About() {
  return (
    <section
      id="about"
      className="bg-black border-t border-zinc-800 px-6 md:px-12 py-24 md:py-32"
    >
      <div className="flex flex-col md:flex-row gap-12 md:gap-24">
        {/* Section label */}
        <div className="md:w-48 flex-shrink-0 pt-1">
          <span className="text-xs text-zinc-600 uppercase tracking-widest">
            01 — About
          </span>
        </div>

        {/* Content */}
        <div className="flex-1">
          <p
            className="text-white font-light leading-relaxed mb-8"
            style={{ fontSize: 'clamp(20px, 2.5vw, 28px)' }}
          >
            I&apos;m a product-minded technical specialist with a foundation in{' '}
            <span className="text-accent font-medium">Interaction Design</span>,
            blending UX strategy with hands-on engineering.
          </p>

          <p className="text-zinc-400 leading-relaxed mb-5 text-base md:text-lg">
            I started in UX/UI and digital design — focused on intuitive,
            conversion-driven experiences — before evolving into a Level 2
            Implementation Specialist leading complex eCommerce integrations for
            enterprise and mid-market brands.
          </p>

          <p className="text-zinc-400 leading-relaxed mb-10 text-base md:text-lg">
            At Order Protection, I owned advanced Shopify and BigCommerce
            implementations, customizing JavaScript solutions across diverse
            storefront architectures and resolving high-impact technical
            escalations. My design background lets me approach product challenges
            holistically — balancing user experience, technical feasibility, and
            business outcomes.
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="text-xs border border-zinc-800 text-zinc-500 px-3 py-1.5 uppercase tracking-wider hover:border-zinc-600 hover:text-zinc-300 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
