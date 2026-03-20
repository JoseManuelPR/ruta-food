'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-2xl">🇵🇪</span>
            <div>
              <h1 className="text-lg font-display font-bold text-gray-900 leading-tight group-hover:text-primary-600 transition-colors">
                Ruta del Sabor
              </h1>
              <p className="text-[10px] text-gray-400 -mt-0.5 tracking-wider uppercase">
                Guía gastronómica del Perú
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/explorar"
              className="text-sm text-gray-600 hover:text-primary-600 transition-colors font-medium"
            >
              Explorar
            </Link>
            <Link
              href="/explorar?ciudad=Lima"
              className="text-sm text-gray-600 hover:text-primary-600 transition-colors font-medium"
            >
              Lima
            </Link>
            <Link
              href="/explorar?ciudad=Cusco"
              className="text-sm text-gray-600 hover:text-primary-600 transition-colors font-medium"
            >
              Cusco
            </Link>
            <Link
              href="/explorar?ciudad=Arequipa"
              className="text-sm text-gray-600 hover:text-primary-600 transition-colors font-medium"
            >
              Arequipa
            </Link>
            <Link
              href="/buscar"
              className="flex items-center gap-2 bg-gray-50 hover:bg-gray-100 text-gray-500 text-sm px-4 py-2 rounded-full transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Buscar
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-gray-900"
            aria-label="Menú"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-100 mt-2 pt-4 space-y-3">
            <Link
              href="/explorar"
              onClick={() => setMenuOpen(false)}
              className="block text-gray-700 hover:text-primary-600 font-medium py-2"
            >
              Explorar
            </Link>
            <Link
              href="/explorar?ciudad=Lima"
              onClick={() => setMenuOpen(false)}
              className="block text-gray-700 hover:text-primary-600 font-medium py-2"
            >
              Lima
            </Link>
            <Link
              href="/explorar?ciudad=Cusco"
              onClick={() => setMenuOpen(false)}
              className="block text-gray-700 hover:text-primary-600 font-medium py-2"
            >
              Cusco
            </Link>
            <Link
              href="/explorar?ciudad=Arequipa"
              onClick={() => setMenuOpen(false)}
              className="block text-gray-700 hover:text-primary-600 font-medium py-2"
            >
              Arequipa
            </Link>
            <Link
              href="/buscar"
              onClick={() => setMenuOpen(false)}
              className="block text-gray-700 hover:text-primary-600 font-medium py-2"
            >
              Buscar
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
