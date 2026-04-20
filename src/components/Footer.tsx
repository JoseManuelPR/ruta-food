import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-warm-950 text-warm-400 relative overflow-hidden">
      {/* Subtle ambient glow */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[200px] bg-primary-600/5 rounded-full blur-[120px]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-5 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center shadow-sm transition-transform duration-300 ease-out-quart group-hover:scale-110">
                <svg className="w-4.5 h-4.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 002-2V2" /><path d="M7 2v20" /><path d="M21 15V2a5 5 0 00-5 5v6c0 1.1.9 2 2 2h3zm0 0v7" />
                </svg>
              </div>
              <span className="text-lg font-display font-bold text-white">
                Ruta del Sabor
              </span>
            </Link>
            <p className="text-sm text-warm-500 leading-relaxed mb-6">
              La guía gastronómica más auténtica del Perú.
              Cada restaurante verificado en 3+ fuentes.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com/josemanuelpr23"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-warm-900 flex items-center justify-center text-warm-400 hover:bg-primary-600 hover:text-white transition-all duration-200"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="https://x.com/josemanuelpr23"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-warm-900 flex items-center justify-center text-warm-400 hover:bg-primary-600 hover:text-white transition-all duration-200"
                aria-label="X / Twitter"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="mailto:josemanuelpr23@gmail.com"
                className="w-9 h-9 rounded-lg bg-warm-900 flex items-center justify-center text-warm-400 hover:bg-primary-600 hover:text-white transition-all duration-200"
                aria-label="Email"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Departamentos */}
          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-[0.15em] mb-5">
              Departamentos
            </h3>
            <ul className="space-y-2.5">
              {[
                { label: 'Lima',       href: '/explorar?departamento=Lima' },
                { label: 'Cusco',      href: '/explorar?departamento=Cusco' },
                { label: 'Arequipa',   href: '/explorar?departamento=Arequipa' },
                { label: 'Lambayeque', href: '/explorar?departamento=Lambayeque' },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-warm-500 hover:text-primary-400 transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categorías */}
          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-[0.15em] mb-5">
              Categorías
            </h3>
            <ul className="space-y-2.5">
              {['Fine Dining', 'Comida Típica', 'Cevicherías', 'Cafés', 'Street Food'].map(
                (cat) => (
                  <li key={cat}>
                    <Link
                      href="/explorar"
                      className="text-sm text-warm-500 hover:text-primary-400 transition-colors duration-200"
                    >
                      {cat}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-[0.15em] mb-5">
              Sobre nosotros
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/contacto" className="text-sm text-warm-500 hover:text-primary-400 transition-colors duration-200">
                  Contacto
                </Link>
              </li>
              <li>
                <a
                  href="mailto:josemanuelpr23@gmail.com?subject=Quiero%20aparecer%20en%20Ruta%20del%20Sabor"
                  className="text-sm text-warm-500 hover:text-primary-400 transition-colors duration-200"
                >
                  Para restaurantes
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-warm-900 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-warm-600">
            &copy; {new Date().getFullYear()} Ruta del Sabor. Todos los derechos reservados.
          </p>
          <p className="text-xs text-warm-700 italic font-display">
            &ldquo;No es solo comer, es recorrer el Perú a través de su comida.&rdquo;
          </p>
        </div>
      </div>
    </footer>
  );
}
