import Link from 'next/link';
import { Restaurante } from '@/types';
import { formatPrecio } from '@/utils/filters';

interface Props {
  restaurante: Restaurante;
  variant?: 'default' | 'featured' | 'compact';
  /** Contextual rank label: "#1 en Lambayeque", "#2 en Chiclayo", etc. */
  rankLabel?: string;
}

export default function RestaurantCard({ restaurante, variant = 'default', rankLabel }: Props) {
  const r = restaurante;

  if (variant === 'compact') {
    return (
      <Link
        href={`/restaurante/${r.id}`}
        className="flex gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors group"
      >
        <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100">
          <img
            src={r.imagen_url}
            alt={r.nombre}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="min-w-0">
          <h3 className="font-semibold text-gray-900 truncate group-hover:text-primary-600 transition-colors">
            {r.nombre}
          </h3>
          <p className="text-sm text-gray-500">
            {r.distrito}, {r.ciudad}
          </p>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-yellow-500 text-sm">★ {r.rating}</span>
            <span className="text-gray-300">·</span>
            <span className="text-sm text-gray-500">{formatPrecio(r.precio_promedio)}</span>
          </div>
        </div>
      </Link>
    );
  }

  if (variant === 'featured') {
    return (
      <Link
        href={`/restaurante/${r.id}`}
        className="group relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-300"
      >
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={r.imagen_url}
            alt={r.nombre}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>

        {/* Ranking badge */}
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-xs font-bold px-2.5 py-1 rounded-full text-primary-700">
          {rankLabel ?? `#${r.ranking} en ${r.departamento}`}
        </div>

        {/* Destacado badge */}
        {r.destacado && (
          <div className="absolute top-3 right-3 bg-primary-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">
            Destacado
          </div>
        )}

        {/* Content overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <h3 className="text-xl font-display font-bold mb-1">{r.nombre}</h3>
          <p className="text-white/80 text-sm mb-2">
            {r.distrito}, {r.ciudad}
          </p>
          <div className="flex items-center gap-3 text-sm">
            <span className="flex items-center gap-1">
              <span className="text-yellow-400">★</span> {r.rating}
            </span>
            <span className="text-white/50">·</span>
            <span>{formatPrecio(r.precio_promedio)} aprox.</span>
          </div>
        </div>
      </Link>
    );
  }

  // Default variant
  return (
    <Link
      href={`/restaurante/${r.id}`}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
    >
      <div className="aspect-[16/10] overflow-hidden relative">
        <img
          src={r.imagen_url}
          alt={r.nombre}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Ranking */}
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-xs font-bold px-2.5 py-1 rounded-full text-gray-700">
          {rankLabel ?? `#${r.ranking} en ${r.departamento}`}
        </div>

        {r.destacado && (
          <div className="absolute top-3 right-3 bg-primary-500 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-sm">
            Destacado
          </div>
        )}
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors text-lg">
            {r.nombre}
          </h3>
          <span className="flex items-center gap-1 text-sm font-medium flex-shrink-0">
            <span className="text-yellow-500">★</span> {r.rating}
          </span>
        </div>

        <p className="text-sm text-gray-500 mb-2">
          {r.distrito}, {r.ciudad}
        </p>

        {/* Categories */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {r.categorias.slice(0, 3).map((cat) => (
            <span
              key={cat}
              className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full capitalize"
            >
              {cat.replace('-', ' ')}
            </span>
          ))}
        </div>

        <p className="text-sm text-gray-600 line-clamp-2 mb-3">{r.descripcion}</p>

        <div className="flex items-center justify-between text-sm pt-3 border-t border-gray-50">
          <span className="text-gray-500">{formatPrecio(r.precio_promedio)} aprox.</span>
          <span className="text-primary-600 font-medium group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
            Ver más
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}
