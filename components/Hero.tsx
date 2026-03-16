export function Hero() {
  return (
    <section className="min-h-screen bg-black flex flex-col justify-between px-6 md:px-12 pt-32 pb-12">
      <div className="flex-1 flex flex-col justify-center">
        {/* Currently building badge */}
        <div className="mb-10 flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse flex-shrink-0" />
          <span className="text-xs text-zinc-500 uppercase tracking-widest">
            Currently building
          </span>
          <a
            href="https://www.cartclinicapp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-accent uppercase tracking-widest hover:underline"
          >
            CartClinic ↗
          </a>
        </div>

        {/* Giant name */}
        <h1
          className="font-black uppercase leading-[0.85] tracking-tighter text-white"
          style={{ fontSize: 'clamp(72px, 14vw, 210px)' }}
        >
          Brett
          <br />
          <span className="text-accent">Monson</span>
        </h1>

        {/* Subtitle + CTAs */}
        <div className="mt-10 md:mt-14 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <p
            className="text-zinc-400 font-light leading-snug max-w-sm"
            style={{ fontSize: 'clamp(18px, 2.5vw, 26px)' }}
          >
            Product-Minded Engineer
            <br />
            <span className="text-white font-medium">
              &amp; UX Specialist.
            </span>
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://www.cartclinicapp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-accent text-accent px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-accent hover:text-black transition-all"
            >
              View Project ↗
            </a>
            <a
              href="#contact"
              className="border border-zinc-700 text-zinc-400 px-6 py-3 text-xs font-bold uppercase tracking-widest hover:border-white hover:text-white transition-all"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="flex items-center gap-4 mt-16 pt-6 border-t border-zinc-900">
        <span className="text-xs text-zinc-700 uppercase tracking-widest">
          Scroll to explore
        </span>
        <div className="h-px flex-1 bg-zinc-900" />
      </div>
    </section>
  )
}
