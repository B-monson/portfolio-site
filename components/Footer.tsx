export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-black border-t border-zinc-800 px-6 md:px-12 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
      <span className="text-zinc-700 text-xs uppercase tracking-widest">
        © {year} Brett Monson
      </span>
      <div className="flex items-center gap-6">
        <a
          href="https://www.linkedin.com/in/brett-monson"
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-700 text-xs uppercase tracking-widest hover:text-zinc-400 transition-colors"
        >
          LinkedIn
        </a>
        <a
          href="https://www.cartclinicapp.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-700 text-xs uppercase tracking-widest hover:text-zinc-400 transition-colors"
        >
          CartClinic
        </a>
      </div>
      <span className="text-zinc-700 text-xs uppercase tracking-widest">
        Built with Next.js
      </span>
    </footer>
  )
}
