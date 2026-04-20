import { notFound } from 'next/navigation';
import Link from 'next/link';
import { restaurantes } from '@/data';
import { formatPrecio, getRestaurantesByCiudad, getAllRankings } from '@/utils/filters';
import RestaurantCard from '@/components/RestaurantCard';
import type { Metadata } from 'next';

type Props = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return restaurantes.map((r) => ({ id: r.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const restaurante = restaurantes.find((r) => r.id === id);
  if (!restaurante) return { title: 'Restaurante no encontrado' };

  const imageUrl = `https://rutadelsabor.vercel.app${restaurante.imagen_url}`;
  return {
    title: restaurante.nombre,
    description: restaurante.descripcion,
    openGraph: {
      title:       `${restaurante.nombre} — Ruta del Sabor`,
      description: restaurante.descripcion,
      url:         `https://rutadelsabor.vercel.app/restaurante/${restaurante.id}`,
      type:        'website',
      siteName:    'Ruta del Sabor',
      locale:      'es_PE',
      images: [{ url: imageUrl, width: 1200, height: 800, alt: restaurante.nombre }],
    },
    twitter: {
      card:        'summary_large_image',
      site:        '@josemanuelpr23',
      creator:     '@josemanuelpr23',
      title:       `${restaurante.nombre} — Ruta del Sabor`,
      description: restaurante.descripcion,
      images:      [imageUrl],
    },
  };
}

export default async function RestaurantePage({ params }: Props) {
  const { id } = await params;
  const restaurante = restaurantes.find((r) => r.id === id);
  if (!restaurante) notFound();

  const r = restaurante;
  const rankings = getAllRankings(r, restaurantes);
  const related = getRestaurantesByCiudad(restaurantes, r.ciudad)
    .filter((other) => other.id !== r.id)
    .slice(0, 3);

  // JSON-LD Structured Data (pSEO skill)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: r.nombre,
    description: r.descripcion,
    image: `https://rutadelsabor.vercel.app${r.imagen_url}`,
    url: `https://rutadelsabor.vercel.app/restaurante/${r.id}`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: r.direccion,
      addressLocality: r.distrito,
      addressRegion: r.departamento,
      addressCountry: 'PE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: r.coordenadas.lat,
      longitude: r.coordenadas.lng,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: r.rating,
      bestRating: 5,
      worstRating: 1,
    },
    priceRange: `S/ ${Math.round(r.precio_promedio * 0.5)}–${Math.round(r.precio_promedio * 1.5)}`,
    servesCuisine: 'Peruana',
    ...(r.website && { sameAs: r.website }),
    ...(r.horario && { openingHours: r.horario }),
  };

  // Breadcrumb JSON-LD
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://rutadelsabor.vercel.app' },
      { '@type': 'ListItem', position: 2, name: r.departamento, item: `https://rutadelsabor.vercel.app/explorar?departamento=${encodeURIComponent(r.departamento)}` },
      { '@type': 'ListItem', position: 3, name: r.nombre, item: `https://rutadelsabor.vercel.app/restaurante/${r.id}` },
    ],
  };

  return (
    <div className="pt-16">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      {/* Hero Image */}
      <div className="relative h-[55vh] md:h-[65vh] overflow-hidden">
        <img
          src={r.imagen_url}
          alt={r.nombre}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/10" />

        {/* Breadcrumb */}
        <div className="absolute top-20 left-0 right-0 section-padding">
          <div className="flex items-center gap-2 max-w-4xl">
            <Link
              href="/explorar"
              className="glass p-2 rounded-xl hover:bg-white transition-colors duration-200 shadow-sm"
            >
              <svg className="w-5 h-5 text-warm-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </Link>
            <nav className="glass px-4 py-2 rounded-xl text-xs font-medium shadow-sm" aria-label="Breadcrumb">
              <ol className="flex items-center gap-1.5 text-warm-600">
                <li><Link href="/" className="hover:text-primary-600 transition-colors">Inicio</Link></li>
                <li className="text-warm-300">/</li>
                <li>
                  <Link href={`/explorar?departamento=${encodeURIComponent(r.departamento)}`} className="hover:text-primary-600 transition-colors">
                    {r.departamento}
                  </Link>
                </li>
                <li className="text-warm-300">/</li>
                <li className="text-warm-900 font-semibold truncate max-w-[180px]">{r.nombre}</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Title overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 section-padding">
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="glass-dark text-white text-xs font-bold px-3.5 py-1.5 rounded-full border border-white/10">
                {rankings.departamento}
              </span>
              <span className="glass-dark text-white/90 text-xs font-medium px-3 py-1.5 rounded-full border border-white/10">
                {rankings.provincia}
              </span>
              {rankings.distrito && (
                <span className="glass-dark text-white/80 text-xs font-medium px-3 py-1.5 rounded-full border border-white/10">
                  {rankings.distrito}
                </span>
              )}
              {r.destacado && (
                <span className="bg-gradient-to-r from-primary-500 to-primary-600 text-white text-xs font-bold px-3.5 py-1.5 rounded-full shadow-lg shadow-primary-500/25">
                  Destacado
                </span>
              )}
            </div>
            <h1 className="text-3xl md:text-5xl font-display font-bold text-white mb-2 drop-shadow-sm">
              {r.nombre}
            </h1>
            <p className="text-white/65 text-lg">{r.direccion}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="section-padding py-10 md:py-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Main content */}
            <div className="md:col-span-2 space-y-10">
              {/* Quick info pills */}
              <div className="flex flex-wrap gap-3" data-animate>
                <div className="flex items-center gap-2 bg-primary-50 text-primary-700 px-5 py-2.5 rounded-2xl border border-primary-100">
                  <span className="text-lg">★</span>
                  <span className="font-bold text-lg">{r.rating}</span>
                  <span className="text-primary-500 text-sm">/ 5.0</span>
                </div>
                <div className="flex items-center gap-2 bg-green-50 text-green-700 px-5 py-2.5 rounded-2xl border border-green-100">
                  <span className="font-bold">{formatPrecio(r.precio_promedio)}</span>
                  <span className="text-green-500 text-sm">promedio</span>
                </div>
              </div>

              {/* Rankings visual */}
              <div data-animate>
                <h2 className="text-xl font-display font-bold text-warm-900 mb-4">Rankings</h2>
                <div className="flex flex-wrap gap-3">
                  {[
                    { rank: rankings.departamento, label: r.departamento, bg: 'bg-amber-50', border: 'border-amber-100', text: 'text-amber-700', sub: 'text-amber-600' },
                    { rank: rankings.provincia, label: r.provincia, bg: 'bg-orange-50', border: 'border-orange-100', text: 'text-orange-700', sub: 'text-orange-600' },
                    ...(rankings.distrito
                      ? [{ rank: rankings.distrito, label: r.distrito, bg: 'bg-red-50', border: 'border-red-100', text: 'text-red-700', sub: 'text-red-600' }]
                      : []),
                  ].map(({ rank, label, bg, border, text, sub }) => (
                    <div key={label} className={`flex flex-col items-center ${bg} border ${border} rounded-2xl px-6 py-4 min-w-[120px]`}>
                      <span className={`text-3xl font-bold ${text}`}>{rank.split(' ')[0]}</span>
                      <span className={`text-xs ${sub} text-center leading-tight mt-1 font-medium`}>en {label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div data-animate>
                <h2 className="text-xl font-display font-bold text-warm-900 mb-4">Sobre este lugar</h2>
                <p className="text-warm-600 leading-relaxed text-lg">{r.descripcion}</p>
              </div>

              {/* Categories */}
              <div data-animate>
                <h2 className="text-xl font-display font-bold text-warm-900 mb-4">Categorías</h2>
                <div className="flex flex-wrap gap-2">
                  {r.categorias.map((cat) => (
                    <Link
                      key={cat}
                      href={`/explorar?categoria=${cat}`}
                      className="bg-warm-100 hover:bg-warm-200 text-warm-700 px-4 py-2.5 rounded-xl text-sm font-medium capitalize transition-all duration-200"
                    >
                      {cat.replace('-', ' ')}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div data-animate>
                <h2 className="text-xl font-display font-bold text-warm-900 mb-4">Etiquetas</h2>
                <div className="flex flex-wrap gap-2">
                  {r.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-primary-50 text-primary-700 px-3 py-1.5 rounded-full font-medium border border-primary-100"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6" data-animate="slide-right">
              <div className="bg-warm-100/60 rounded-2xl p-6 space-y-5 border border-warm-200/50">
                <h3 className="font-semibold text-warm-900 text-lg">Información</h3>

                <div className="space-y-4">
                  {[
                    {
                      icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z',
                      title: 'Dirección',
                      value: r.direccion,
                    },
                    {
                      icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064',
                      title: 'Ubicación',
                      value: `${r.distrito}, ${r.provincia}, ${r.departamento}`,
                    },
                    ...(r.horario ? [{
                      icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
                      title: 'Horario',
                      value: r.horario,
                    }] : []),
                    ...(r.chef ? [{
                      icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
                      title: 'Chef',
                      value: r.chef,
                    }] : []),
                  ].map(({ icon, title, value }) => (
                    <div key={title} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-warm-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon} />
                      </svg>
                      <div>
                        <p className="text-sm font-semibold text-warm-700">{title}</p>
                        <p className="text-sm text-warm-500">{value}</p>
                      </div>
                    </div>
                  ))}

                  {r.website && (
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-warm-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                      <div>
                        <p className="text-sm font-semibold text-warm-700">Web</p>
                        <a href={r.website} target="_blank" rel="noopener noreferrer"
                          className="text-sm text-primary-600 hover:text-primary-700 transition-colors font-medium"
                        >
                          Visitar sitio web &rarr;
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Google Maps CTA */}
              <div className="bg-warm-100/60 rounded-2xl p-6 border border-warm-200/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-warm-900">Cómo llegar</h3>
                </div>
                <a
                  href={`https://www.google.com/maps?q=${r.coordenadas.lat},${r.coordenadas.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full text-white font-semibold px-5 py-3.5 rounded-xl text-sm"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Abrir en Google Maps
                </a>
              </div>
            </div>
          </div>

          {/* Related restaurants */}
          {related.length > 0 && (
            <div className="mt-20 pt-12 border-t border-warm-100" data-animate>
              <h2 className="text-2xl font-display font-bold text-warm-900 mb-8">
                Más en {r.departamento}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
                {related.map((other, i) => (
                  <div key={other.id} data-animate data-animate-delay={`${i + 1}`}>
                    <RestaurantCard restaurante={other} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
