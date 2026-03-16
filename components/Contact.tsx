export function Contact() {
  return (
    <section
      id="contact"
      className="bg-black border-t border-zinc-800 px-6 md:px-12 py-24 md:py-32"
    >
      <div className="flex flex-col md:flex-row gap-12 md:gap-24">
        {/* Section label */}
        <div className="md:w-48 flex-shrink-0 pt-1">
          <span className="text-xs text-zinc-600 uppercase tracking-widest">
            04 — Contact
          </span>
        </div>

        {/* Content */}
        <div className="flex-1">
          <h2
            className="font-black text-white uppercase leading-[0.85] tracking-tighter"
            style={{ fontSize: 'clamp(52px, 9vw, 130px)' }}
          >
            Let&apos;s
            <br />
            Work
            <br />
            <span className="text-accent">Together.</span>
          </h2>

          <p className="text-zinc-400 mt-10 max-w-md leading-relaxed text-base md:text-lg">
            I&apos;m open to product-focused roles where I can bridge customers
            and engineering, influence roadmap decisions, and help build scalable
            solutions with measurable impact.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <a
              href="https://www.linkedin.com/in/brett-monson"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-black px-8 py-4 font-black uppercase tracking-widest text-xs hover:bg-white transition-colors"
            >
              LinkedIn ↗
            </a>
            <a
              href="https://www.cartclinicapp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-zinc-700 text-zinc-400 px-8 py-4 font-bold uppercase tracking-widest text-xs hover:border-white hover:text-white transition-all"
            >
              View CartClinic ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
