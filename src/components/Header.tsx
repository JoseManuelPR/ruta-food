'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const navCiudades = [
  { label: 'Lima',       href: '/explorar?departamento=Lima' },
  { label: 'Cusco',      href: '/explorar?departamento=Cusco' },
  { label: 'Arequipa',   href: '/explorar?departamento=Arequipa' },
  { label: 'Lambayeque', href: '/explorar?departamento=Lambayeque' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <header
      className={`fixed z-50 transition-all duration-500 ease-out-quart ${
        scrolled
          ? 'top-3 left-3 right-3 sm:top-4 sm:left-4 sm:right-4 bg-white/90 backdrop-blur-xl shadow-lg shadow-black/[0.04] border border-warm-200/60 rounded-2xl'
          : 'top-0 left-0 right-0 bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo — SVG instead of emoji (UI UX Pro Max: no-emoji-icons) */}
          <Link href="/" className="flex items-center gap-2.5 group relative z-50">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center shadow-sm transition-transform duration-300 ease-out-quart group-hover:scale-110">
              <svg className="w-4.5 h-4.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 002-2V2" /><path d="M7 2v20" /><path d="M21 15V2a5 5 0 00-5 5v6c0 1.1.9 2 2 2h3zm0 0v7" />
              </svg>
            </div>
            <div>
              <span className={`text-lg font-display font-bold leading-tight transition-colors duration-300 ${
                scrolled || menuOpen ? 'text-warm-900' : 'text-white'
              } group-hover:text-primary-600`}>
                Ruta del Sabor
              </span>
              <p className={`text-[10px] -mt-0.5 tracking-wider uppercase transition-colors duration-300 ${
                scrolled || menuOpen ? 'text-warm-400' : 'text-white/60'
              }`}>
                Guía gastronómica
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            <Link
              href="/explorar"
              className={`text-sm px-3 py-2 rounded-lg font-medium transition-all duration-200 ${
                scrolled
                  ? 'text-warm-600 hover:text-primary-600 hover:bg-primary-50'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              Explorar
            </Link>
            {navCiudades.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className={`text-sm px-3 py-2 rounded-lg font-medium transition-all duration-200 ${
                  scrolled
                    ? 'text-warm-600 hover:text-primary-600 hover:bg-primary-50'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/buscar"
              className={`flex items-center gap-2 text-sm px-4 py-2 rounded-full font-medium ml-2 transition-all duration-200 ${
                scrolled
                  ? 'bg-warm-100 text-warm-500 hover:bg-warm-200 hover:text-warm-700'
                  : 'bg-white/15 text-white/70 hover:bg-white/25 hover:text-white'
              }`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Buscar
            </Link>
          </div>

          {/* Mobile menu button — 44px min touch target (UI/UX Pro Max) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden relative z-50 w-11 h-11 flex items-center justify-center rounded-xl transition-all duration-200 ${
              menuOpen
                ? 'text-warm-900 bg-warm-100'
                : scrolled ? 'text-warm-600 hover:text-warm-900 hover:bg-warm-100' : 'text-white hover:text-white/80 hover:bg-white/10'
            }`}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`block h-0.5 bg-current rounded-full transition-all duration-300 ease-out-quart origin-center ${
                menuOpen ? 'rotate-45 translate-y-[9px]' : ''
              }`} />
              <span className={`block h-0.5 bg-current rounded-full transition-all duration-200 ${
                menuOpen ? 'opacity-0 scale-x-0' : 'opacity-100'
              }`} />
              <span className={`block h-0.5 bg-current rounded-full transition-all duration-300 ease-out-quart origin-center ${
                menuOpen ? '-rotate-45 -translate-y-[9px]' : ''
              }`} />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Nav Overlay */}
      <div
        className={`fixed inset-0 bg-white z-40 md:hidden transition-all duration-500 ease-out-quint ${
          menuOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="flex flex-col justify-center items-center h-full gap-2 px-8">
          {[
            { label: 'Explorar todo', href: '/explorar' },
            ...navCiudades,
            { label: 'Buscar', href: '/buscar' },
            { label: 'Contacto', href: '/contacto' },
          ].map(({ label, href }, i) => (
            <Link
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-2xl font-display font-semibold text-warm-800 hover:text-primary-600 py-3 transition-colors duration-200"
              style={{
                transitionDelay: menuOpen ? `${(i + 1) * 60}ms` : '0ms',
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? 'translateY(0)' : 'translateY(12px)',
                transition: 'opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1), transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), color 0.2s',
              }}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
