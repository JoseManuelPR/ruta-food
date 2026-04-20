import HeroSection from '@/components/HeroSection';
import CityCard from '@/components/CityCard';
import CategoryCard from '@/components/CategoryCard';
import RestaurantCard from '@/components/RestaurantCard';
import { restaurantes, ciudades, categorias } from '@/data';
import { getDestacados } from '@/utils/filters';
import Link from 'next/link';

export default function HomePage() {
  const destacados = getDestacados(restaurantes);

  /* ── JSON-LD: WebSite + SearchAction (SEO Audit skill) ── */
  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Ruta del Sabor',
    alternateName: 'Ruta del Sabor — Guía Gastronómica del Perú',
    url: 'https://rutadelsabor.vercel.app',
    description: 'Descubre los mejores restaurantes, cevicherías, cafés y experiencias gastronómicas del Perú.',
    inLanguage: 'es-PE',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://rutadelsabor.vercel.app/buscar?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };

  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Ruta del Sabor',
    url: 'https://rutadelsabor.vercel.app',
    logo: 'https://rutadelsabor.vercel.app/favicon.svg',
    sameAs: [
      'https://instagram.com/josemanuelpr23',
      'https://x.com/josemanuelpr23',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'josemanuelpr23@gmail.com',
      contactType: 'customer service',
      availableLanguage: 'Spanish',
    },
  };

  return (
    <>
      {/* JSON-LD Structured Data (SEO Audit) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />

      {/* Hero */}
      <HeroSection />

      {/* ── How it works — CRO: Reduce complexity, 3-4 steps ── */}
      <section className="py-16 bg-white border-b border-warm-100">
        <div className="section-padding">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto" data-animate>
            {[
              {
                step: '01',
                title: 'Explora por región',
                desc: 'Navega por Lima, Cusco, Arequipa o Lambayeque y descubre la identidad culinaria de cada destino.',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                ),
              },
              {
                step: '02',
                title: 'Compara rankings',
                desc: 'Cada restaurante tiene un ranking contextual basado en TripAdvisor, Summum y más fuentes verificadas.',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 4h18M3 8h12M3 12h18M3 16h8M3 20h14" />
                  </svg>
                ),
              },
              {
                step: '03',
                title: 'Decide con confianza',
                desc: 'Revisa fotos, ubicación, precios y abre Google Maps con un clic para llegar sin rodeos.',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
            ].map(({ step, title, desc, icon }, i) => (
              <div key={step} className="text-center group" data-animate data-animate-delay={`${i + 1}`}>
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary-50 text-primary-600 mb-4 group-hover:bg-primary-100 group-hover:scale-105 transition-all duration-300 ease-out-quart shadow-sm">
                  {icon}
                </div>
                <div className="text-[10px] text-primary-400 font-bold tracking-[0.2em] uppercase mb-2">{step}</div>
                <h3 className="text-base font-display font-bold text-warm-900 mb-2">{title}</h3>
                <p className="text-sm text-warm-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ciudades — scroll-reveal staggered */}
      <section className="py-[var(--space-section)]">
        <div className="section-padding">
          <div className="text-center mb-12" data-animate>
            <span className="text-primary-600 text-xs font-semibold tracking-[0.15em] uppercase mb-3 block">
              Destinos culinarios
            </span>
            <h2 className="font-display font-bold text-warm-900 mb-4">
              Explora por departamento
            </h2>
            <p className="text-warm-500 max-w-xl mx-auto leading-relaxed">
              Cada región del Perú tiene su propia identidad culinaria.
              Descubre los sabores que definen cada destino.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ciudades.map((ciudad, i) => (
              <div key={ciudad.id} data-animate data-animate-delay={`${i + 1}`}>
                <CityCard ciudad={ciudad} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categorías */}
      <section className="bg-gradient-to-b from-warm-100/50 to-warm-50 py-[var(--space-section)]">
        <div className="section-padding">
          <div className="text-center mb-12" data-animate>
            <span className="text-primary-600 text-xs font-semibold tracking-[0.15em] uppercase mb-3 block">
              Para cada antojo
            </span>
            <h2 className="font-display font-bold text-warm-900 mb-4">
              ¿Qué se te antoja hoy?
            </h2>
            <p className="text-warm-500 max-w-xl mx-auto leading-relaxed">
              Desde fine dining de talla mundial hasta picanterías centenarias.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3" data-animate>
            {categorias.map((cat) => (
              <CategoryCard key={cat.id} categoria={cat} />
            ))}
          </div>
        </div>
      </section>

      {/* Restaurantes destacados */}
      <section className="py-[var(--space-section)]">
        <div className="section-padding">
          <div className="flex items-end justify-between mb-12" data-animate>
            <div>
              <span className="text-primary-600 text-xs font-semibold tracking-[0.15em] uppercase mb-3 block">
                Los imprescindibles
              </span>
              <h2 className="font-display font-bold text-warm-900 mb-3">
                Restaurantes destacados
              </h2>
              <p className="text-warm-500 max-w-xl leading-relaxed">
                Seleccionados por su excelencia, autenticidad y reputación
                verificada en múltiples fuentes.
              </p>
            </div>
            <Link
              href="/explorar"
              className="hidden md:inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-all duration-200 group/link text-sm"
            >
              Ver todos
              <svg className="w-4 h-4 transition-transform duration-300 ease-out-quart group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {destacados.slice(0, 6).map((r, i) => (
              <div key={r.id} data-animate data-animate-delay={`${(i % 3) + 1}`}>
                <RestaurantCard restaurante={r} variant="featured" />
              </div>
            ))}
          </div>

          <div className="text-center mt-12 md:hidden" data-animate>
            <Link
              href="/explorar"
              className="btn-primary text-white px-8 py-3.5 rounded-full"
            >
              Ver todos los restaurantes
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust signals — marketing psychology: social proof + authority — ENHANCED */}
      <section className="border-y border-warm-100 py-14 bg-gradient-to-b from-warm-50 to-white" data-animate>
        <div className="section-padding">
          <p className="text-center text-[11px] font-semibold text-warm-400 uppercase tracking-[0.2em] mb-8">
            Verificados con fuentes de confianza
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-8">
            {[
              { label: 'TripAdvisor', desc: 'Reviews verificadas', icon: (
                <svg className="w-5 h-5 text-warm-400 group-hover:text-green-600 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                </svg>
              )},
              { label: 'Premios Summum', desc: 'Máximo galardón gastronómico', icon: (
                <svg className="w-5 h-5 text-warm-400 group-hover:text-amber-500 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              )},
              { label: 'El Comercio', desc: 'Diario de referencia', icon: (
                <svg className="w-5 h-5 text-warm-400 group-hover:text-blue-600 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
                </svg>
              )},
              { label: 'Wanderlog', desc: 'Guía de viajeros', icon: (
                <svg className="w-5 h-5 text-warm-400 group-hover:text-purple-600 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              )},
            ].map(({ label, desc, icon }) => (
              <div key={label} className="flex items-center gap-3 group cursor-default">
                <div className="w-10 h-10 rounded-xl bg-warm-100 flex items-center justify-center group-hover:bg-warm-50 transition-colors duration-300">
                  {icon}
                </div>
                <div>
                  <span className="text-sm font-bold text-warm-700 tracking-wide block">{label}</span>
                  <span className="text-[10px] text-warm-400">{desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section — CRO: benefit-focused + loss aversion + copywriting */}
      <section className="bg-warm-950 text-white py-[var(--space-section)] relative overflow-hidden">
        {/* Ambient gradient decoration */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-primary-600/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[200px] bg-primary-500/5 rounded-full blur-[100px]" />

        <div className="section-padding text-center relative z-10" data-animate>
          <span className="text-primary-400 text-xs font-semibold tracking-[0.15em] uppercase mb-4 block">
            Para restaurantes
          </span>
          {/* Headline — copywriting: "{Question highlighting main pain point}" */}
          <h2 className="font-display font-bold mb-5 text-fluid-3xl leading-tight">
            Miles de personas buscan dónde comer.
            <br className="hidden md:block" />
            <span className="text-primary-400">¿Tu restaurante aparece?</span>
          </h2>
          {/* Subheadline — copywriting: specificity + social proof */}
          <p className="text-warm-400 max-w-xl mx-auto mb-10 leading-relaxed text-lg">
            Únete a la guía gastronómica más auténtica del Perú.
            <br className="hidden sm:block" />
            Los restaurantes destacados reciben hasta <span className="text-primary-400 font-semibold">3x más visitas</span>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Primary CTA — copywriting: [Action Verb] + [What They Get] */}
            <a
              href="mailto:josemanuelpr23@gmail.com?subject=Quiero%20aparecer%20en%20Ruta%20del%20Sabor"
              className="btn-primary text-white px-8 py-4 rounded-full text-base group/cta"
            >
              Registrar mi restaurante gratis
              <svg className="w-5 h-5 transition-transform duration-300 ease-out-quart group-hover/cta:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <Link
              href="/contacto"
              className="btn-secondary border-warm-700 text-warm-300 px-8 py-4 rounded-full text-base hover:border-warm-500 hover:text-white"
            >
              Saber más
            </Link>
          </div>
          {/* Micro-copy — CRO: reduce friction */}
          <p className="text-warm-600 text-xs mt-6">
            Sin costo. Sin compromiso. Respuesta en menos de 48 horas.
          </p>
        </div>
      </section>
    </>
  );
}
