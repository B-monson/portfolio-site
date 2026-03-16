'use client'

import { useState, useEffect } from 'react'

export function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 h-16 transition-all duration-300 ${
        scrolled ? 'bg-black/95 backdrop-blur-sm border-b border-zinc-800' : ''
      }`}
    >
      <a
        href="#"
        className="text-white font-black text-lg tracking-tighter hover:text-accent transition-colors"
      >
        BM
      </a>

      <div className="hidden md:flex items-center gap-8">
        <a
          href="#about"
          className="text-sm text-zinc-400 hover:text-white transition-colors uppercase tracking-widest"
        >
          About
        </a>
        <a
          href="#projects"
          className="text-sm text-zinc-400 hover:text-white transition-colors uppercase tracking-widest"
        >
          Projects
        </a>
        <a
          href="#experience"
          className="text-sm text-zinc-400 hover:text-white transition-colors uppercase tracking-widest"
        >
          Experience
        </a>
        <a
          href="#contact"
          className="text-sm bg-accent text-black px-5 py-2 font-bold uppercase tracking-widest hover:bg-white transition-colors"
        >
          Contact
        </a>
      </div>

      {/* Mobile contact link */}
      <a
        href="#contact"
        className="md:hidden text-sm bg-accent text-black px-4 py-2 font-bold uppercase tracking-widest"
      >
        Contact
      </a>
    </nav>
  )
}
