import HeroSection from '@/components/HeroSection';
import CityCard from '@/components/CityCard';
import CategoryCard from '@/components/CategoryCard';
import RestaurantCard from '@/components/RestaurantCard';
import { restaurantes, ciudades, categorias } from '@/data';
import { getDestacados } from '@/utils/filters';
import Link from 'next/link';

export default function HomePage() {
  const destacados = getDestacados(restaurantes);

  return (
    <>
      {/* Hero */}
      <HeroSection />

      {/* Ciudades destacadas */}
      <section className="section-padding py-16 md:py-24">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-3">
            Explora por ciudad
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Cada ciudad del Perú tiene su propia identidad culinaria.
            Descubre los sabores que definen cada destino.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ciudades.map((ciudad) => (
            <CityCard key={ciudad.id} ciudad={ciudad} />
          ))}
        </div>
      </section>

      {/* Categorías */}
      <section className="bg-gray-50 py-16">
        <div className="section-padding">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-3">
              ¿Qué se te antoja?
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Desde fine dining hasta street food, encuentra exactamente lo que
              buscas.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
            {categorias.map((cat) => (
              <CategoryCard key={cat.id} categoria={cat} />
            ))}
          </div>
        </div>
      </section>

      {/* Restaurantes destacados */}
      <section className="section-padding py-16 md:py-24">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-3">
              Restaurantes destacados
            </h2>
            <p className="text-gray-500 max-w-xl">
              Los imprescindibles de la gastronomía peruana, seleccionados por
              su excelencia y autenticidad.
            </p>
          </div>
          <Link
            href="/explorar"
            className="hidden md:inline-flex items-center gap-1 text-primary-600 font-medium hover:text-primary-700 transition-colors text-sm"
          >
            Ver todos
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destacados.slice(0, 6).map((r) => (
            <RestaurantCard key={r.id} restaurante={r} variant="featured" />
          ))}
        </div>

        <div className="text-center mt-10 md:hidden">
          <Link
            href="/explorar"
            className="inline-flex items-center gap-2 bg-primary-500 text-white px-6 py-3 rounded-full font-medium hover:bg-primary-600 transition-colors"
          >
            Ver todos los restaurantes
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-950 text-white py-16 md:py-24">
        <div className="section-padding text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            ¿Tienes un restaurante?
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-8">
            Únete a Ruta del Sabor y haz que miles de turistas y locales descubran
            tu propuesta gastronómica. Planes desde destacado hasta premium.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center justify-center gap-2 bg-primary-500 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-primary-600 transition-colors">
              Registrar mi restaurante
            </button>
            <button className="inline-flex items-center justify-center gap-2 border border-gray-700 text-gray-300 px-8 py-3.5 rounded-full font-semibold hover:border-gray-500 hover:text-white transition-colors">
              Saber más
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
