import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Ponte en contacto con el equipo de Ruta del Sabor. Instagram, correo electr&oacute;nico y X.',
  openGraph: {
    title: 'Contacto — Ruta del Sabor',
    description: 'Ponte en contacto con el equipo de Ruta del Sabor.',
    url: 'https://rutadelsabor.vercel.app/contacto',
  },
};

const contactLinks = [
  {
    id: 'instagram',
    label: 'Instagram',
    handle: '@josemanuelpr23',
    href: 'https://instagram.com/josemanuelpr23',
    description: 'S&iacute;guenos en Instagram para ver novedades, fotos y contenido gastron&oacute;mico.',
    cta: 'Abrir en Instagram',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
    textColor: 'text-pink-600',
    bgColor: 'bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50',
    borderColor: 'border-pink-100',
    iconBg: 'bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400',
  },
  {
    id: 'email',
    label: 'Correo electr&oacute;nico',
    handle: 'josemanuelpr23@gmail.com',
    href: 'mailto:josemanuelpr23@gmail.com',
    description: 'Escr&iacute;benos para consultas, colaboraciones o sugerencias de restaurantes.',
    cta: 'Enviar correo',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 001.228 0L20 9.044 20.002 18H4z" />
      </svg>
    ),
    textColor: 'text-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-100',
    iconBg: 'bg-gradient-to-br from-blue-500 to-sky-400',
  },
  {
    id: 'x',
    label: 'X (Twitter)',
    handle: '@josemanuelpr23',
    href: 'https://x.com/josemanuelpr23',
    description: 'S&iacute;guenos en X para actualizaciones r&aacute;pidas, noticias gastron&oacute;micas y m&aacute;s.',
    cta: 'Abrir en X',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    textColor: 'text-warm-800',
    bgColor: 'bg-warm-50',
    borderColor: 'border-warm-200',
    iconBg: 'bg-warm-900',
  },
];

export default function ContactoPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <div className="section-padding max-w-3xl mx-auto text-center mb-14" data-animate>
        <span className="inline-block bg-primary-50 text-primary-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-4 tracking-[0.15em] uppercase">
          Contacto
        </span>
        <h1 className="text-4xl md:text-5xl font-display font-bold text-warm-900 mb-4 leading-tight">
          Hablemos de gastronom&iacute;a
        </h1>
        <p className="text-lg text-warm-500 max-w-xl mx-auto leading-relaxed">
          &iquest;Tienes un restaurante para recomendar, quieres colaborar o simplemente
          quieres charlar de comida peruana? Escr&iacute;beme por cualquiera de estos medios.
        </p>
      </div>

      {/* Contact cards */}
      <div className="section-padding max-w-3xl mx-auto grid grid-cols-1 gap-5">
        {contactLinks.map((c, i) => (
          <a
            key={c.id}
            href={c.href}
            target={c.id !== 'email' ? '_blank' : undefined}
            rel={c.id !== 'email' ? 'noopener noreferrer' : undefined}
            className={`group flex items-center gap-6 p-6 rounded-2xl border ${c.bgColor} ${c.borderColor} hover:shadow-lg transition-all duration-300 ease-out-quart hover:-translate-y-0.5`}
            data-animate
            data-animate-delay={`${i + 1}`}
          >
            {/* Icon */}
            <div className={`flex-shrink-0 w-14 h-14 rounded-2xl ${c.iconBg} text-white flex items-center justify-center shadow-sm`}>
              {c.icon}
            </div>

            {/* Text */}
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-warm-400 mb-0.5">
                {c.label}
              </p>
              <p className={`text-lg font-bold ${c.textColor} truncate mb-1`}>
                {c.handle}
              </p>
              <p className="text-sm text-warm-500 line-clamp-1">
                {c.description}
              </p>
            </div>

            {/* CTA arrow */}
            <div className={`flex-shrink-0 flex items-center gap-2 text-sm font-medium ${c.textColor} group-hover:translate-x-1 transition-transform duration-300 ease-out-quart`}>
              <span className="hidden sm:block">{c.cta}</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </a>
        ))}
      </div>

      {/* Footer note */}
      <div className="section-padding max-w-3xl mx-auto mt-12 text-center" data-animate>
        <p className="text-sm text-warm-400">
          &iquest;Eres due&ntilde;o de un restaurante y quieres aparecer en Ruta del Sabor?{' '}
          <a
            href="mailto:josemanuelpr23@gmail.com?subject=Quiero%20aparecer%20en%20Ruta%20del%20Sabor"
            className="text-primary-600 hover:text-primary-700 font-medium underline underline-offset-2 transition-colors"
          >
            Escr&iacute;benos
          </a>{' '}
          con los datos de tu local.
        </p>
      </div>

      {/* Back to explore */}
      <div className="section-padding max-w-3xl mx-auto mt-6 text-center">
        <Link
          href="/explorar"
          className="inline-flex items-center gap-2 text-sm text-warm-500 hover:text-primary-600 transition-colors duration-200"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Volver a explorar restaurantes
        </Link>
      </div>
    </div>
  );
}
