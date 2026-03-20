import { notFound } from 'next/navigation';
import Link from 'next/link';
import { restaurantes } from '@/data';
import { formatPrecio, getRestaurantesByCiudad } from '@/utils/filters';
import RestaurantCard from '@/components/RestaurantCard';
import type { Metadata } from 'next';

// Next.js 15+: params is a Promise
type Props = {
  params: Promise<{ id: string }>;
};

// Generate static paths for all restaurants
export function generateStaticParams() {
  return restaurantes.map((r) => ({ id: r.id }));
}

// Dynamic metadata for SEO — async in Next 15+
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const restaurante = restaurantes.find((r) => r.id === id);
  if (!restaurante) return { title: 'Restaurante no encontrado' };

  return {
    title: `${restaurante.nombre} — Ruta del Sabor`,
    description: restaurante.descripcion,
    openGraph: {
      title: `${restaurante.nombre} — Ruta del Sabor`,
      description: restaurante.descripcion,
      images: [restaurante.imagen_url],
    },
  };
}

export default async function RestaurantePage({ params }: Props) {
  const { id } = await params;
  const restaurante = restaurantes.find((r) => r.id === id);

  if (!restaurante) {
    notFound();
  }

  const r = restaurante;

  // Related restaurants from same city
  const related = getRestaurantesByCiudad(restaurantes, r.ciudad)
    .filter((other) => other.id !== r.id)
    .slice(0, 3);

  return (
    <div className="pt-16">
      {/* Hero Image */}
      <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <img
          src={r.imagen_url}
          alt={r.nombre}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

        {/* Back button */}
        <Link
          href="/explorar"
          className="absolute top-20 left-4 md:left-8 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors shadow-sm"
        >
          <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </Link>

        {/* Title overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 section-padding">
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
                #{r.ranking} en {r.ciudad}
              </span>
              {r.destacado && (
                <span className="bg-primary-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Destacado
                </span>
              )}
            </div>
            <h1 className="text-3xl md:text-5xl font-display font-bold text-white mb-2">
              {r.nombre}
            </h1>
            <p className="text-white/70 text-lg">
              {r.direccion}
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="section-padding py-10 md:py-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Main content */}
            <div className="md:col-span-2 space-y-8">
              {/* Quick info */}
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-yellow-50 text-yellow-700 px-4 py-2 rounded-xl">
                  <span className="text-lg">★</span>
                  <span className="font-semibold">{r.rating}</span>
                  <span className="text-yellow-600 text-sm">/ 5.0</span>
                </div>
                <div className="flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-xl">
                  <span className="text-sm font-semibold">{formatPrecio(r.precio_promedio)}</span>
                  <span className="text-green-600 text-sm">promedio</span>
                </div>
              </div>

              {/* Description */}
              <div>
                <h2 className="text-xl font-display font-bold text-gray-900 mb-3">
                  Sobre este lugar
                </h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {r.descripcion}
                </p>
              </div>

              {/* Categories */}
              <div>
                <h2 className="text-xl font-display font-bold text-gray-900 mb-3">
                  Categorías
                </h2>
                <div className="flex flex-wrap gap-2">
                  {r.categorias.map((cat) => (
                    <Link
                      key={cat}
                      href={`/explorar?categoria=${cat}`}
                      className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-medium capitalize transition-colors"
                    >
                      {cat.replace('-', ' ')}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div>
                <h2 className="text-xl font-display font-bold text-gray-900 mb-3">
                  Etiquetas
                </h2>
                <div className="flex flex-wrap gap-2">
                  {r.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-primary-50 text-primary-700 px-3 py-1.5 rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar info */}
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-2xl p-6 space-y-4">
                <h3 className="font-semibold text-gray-900">Información</h3>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="text-sm font-medium text-gray-700">Dirección</p>
                      <p className="text-sm text-gray-500">{r.direccion}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                    </svg>
                    <div>
                      <p className="text-sm font-medium text-gray-700">Ubicación</p>
                      <p className="text-sm text-gray-500">
                        {r.distrito}, {r.provincia}, {r.departamento}
                      </p>
                    </div>
                  </div>

                  {r.horario && (
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <p className="text-sm font-medium text-gray-700">Horario</p>
                        <p className="text-sm text-gray-500">{r.horario}</p>
                      </div>
                    </div>
                  )}

                  {r.chef && (
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <div>
                        <p className="text-sm font-medium text-gray-700">Chef</p>
                        <p className="text-sm text-gray-500">{r.chef}</p>
                      </div>
                    </div>
                  )}

                  {r.website && (
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                      <div>
                        <p className="text-sm font-medium text-gray-700">Web</p>
                        <a
                          href={r.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-primary-600 hover:text-primary-700"
                        >
                          Visitar sitio web
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Map placeholder */}
              <div className="bg-gray-100 rounded-2xl p-6 text-center">
                <p className="text-sm text-gray-500 mb-2">Coordenadas</p>
                <p className="text-xs text-gray-400 font-mono">
                  {r.coordenadas.lat}, {r.coordenadas.lng}
                </p>
                <a
                  href={`https://www.google.com/maps?q=${r.coordenadas.lat},${r.coordenadas.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 mt-3 text-sm text-primary-600 hover:text-primary-700 font-medium"
                >
                  Ver en Google Maps
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Related restaurants */}
          {related.length > 0 && (
            <div className="mt-16 pt-10 border-t border-gray-100">
              <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">
                Más en {r.ciudad}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {related.map((other) => (
                  <RestaurantCard key={other.id} restaurante={other} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
