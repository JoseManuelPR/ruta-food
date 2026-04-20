import Link from 'next/link';
import { Restaurante } from '@/types';
import { formatPrecio } from '@/utils/filters';

interface Props {
  restaurante: Restaurante;
  variant?: 'default' | 'featured' | 'compact';
  rankLabel?: string;
}

export default function RestaurantCard({ restaurante, variant = 'default', rankLabel }: Props) {
  const r = restaurante;

  if (variant === 'compact') {
    return (
      <Link
        href={`/restaurante/${r.id}`}
        className="flex gap-4 p-3 rounded-xl hover:bg-warm-100 transition-all duration-200 ease-out-quart group cursor-pointer"
      >
        <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 bg-warm-100">
          <img
            src={r.imagen_url}
            alt={r.nombre}
            className="w-full h-full object-cover img-zoom"
            loading="lazy"
          />
        </div>
        <div className="min-w-0">
          <h3 className="font-semibold text-warm-900 truncate group-hover:text-primary-600 transition-colors duration-200">
            {r.nombre}
          </h3>
          <p className="text-sm text-warm-500">
            {r.distrito}, {r.provincia}
          </p>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-primary-500 text-sm font-semibold inline-flex items-center gap-0.5"><svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg> {r.rating}</span>
            <span className="text-warm-300">·</span>
            <span className="text-sm text-warm-500">{formatPrecio(r.precio_promedio)}</span>
          </div>
        </div>
      </Link>
    );
  }

  if (variant === 'featured') {
    return (
      <Link
        href={`/restaurante/${r.id}`}
        className="group relative overflow-hidden rounded-2xl bg-white card-hover shadow-sm cursor-pointer"
        aria-label={`${r.nombre} — ${r.distrito}, ${r.provincia} — Rating ${r.rating}`}
      >
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={r.imagen_url}
            alt={r.nombre}
            className="w-full h-full object-cover img-zoom"
            loading="lazy"
          />
          {/* Enhanced gradient for better text legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        </div>

        {/* Ranking badge */}
        <div className="absolute top-3 left-3 glass text-xs font-bold px-3 py-1.5 rounded-full text-primary-700 border border-white/30 shadow-sm">
          {rankLabel ?? `#${r.ranking} en ${r.departamento}`}
        </div>

        {r.destacado && (
          <div className="absolute top-3 right-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg shadow-primary-500/25">
            Destacado
          </div>
        )}

        {/* Content overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <h3 className="text-xl font-display font-bold text-white mb-1 drop-shadow-sm group-hover:text-primary-200 transition-colors duration-300">{r.nombre}</h3>
          <p className="text-white/75 text-sm mb-2.5">
            {r.distrito}, {r.provincia}
          </p>
          <div className="flex items-center gap-3 text-sm">
            <span className="flex items-center gap-1 font-semibold">
              <svg className="w-3.5 h-3.5 text-primary-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              <span className="text-white tabular-nums">{r.rating}</span>
            </span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span className="text-white/70 tabular-nums">{formatPrecio(r.precio_promedio)} aprox.</span>
            {r.categorias[0] && (
              <>
                <span className="w-1 h-1 rounded-full bg-white/30" />
                <span className="text-white/60 capitalize text-xs">{r.categorias[0].replace('-', ' ')}</span>
              </>
            )}
          </div>
        </div>
      </Link>
    );
  }

  // Default variant
  return (
    <Link
      href={`/restaurante/${r.id}`}
      className="group bg-white rounded-2xl overflow-hidden card-hover border border-warm-100 cursor-pointer"
    >
      <div className="aspect-[16/10] overflow-hidden relative">
        <img
          src={r.imagen_url}
          alt={r.nombre}
          className="w-full h-full object-cover img-zoom"
          loading="lazy"
        />

        <div className="absolute top-3 left-3 glass text-xs font-bold px-3 py-1.5 rounded-full text-warm-700 border border-white/30">
          {rankLabel ?? `#${r.ranking} en ${r.departamento}`}
        </div>

        {r.destacado && (
          <div className="absolute top-3 right-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg shadow-primary-500/25">
            Destacado
          </div>
        )}
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-1.5">
          <h3 className="font-semibold text-warm-900 group-hover:text-primary-600 transition-colors duration-200 text-lg leading-snug">
            {r.nombre}
          </h3>
          <span className="flex items-center gap-1 text-sm font-bold flex-shrink-0 text-primary-600 bg-primary-50 px-2.5 py-1 rounded-lg">
            <svg className="w-3.5 h-3.5 text-primary-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            <span className="tabular-nums">{r.rating}</span>
          </span>
        </div>

        <p className="text-sm text-warm-500 mb-3">
          {r.distrito}, {r.provincia}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-3">
          {r.categorias.slice(0, 3).map((cat) => (
            <span
              key={cat}
              className="text-xs bg-warm-100 text-warm-600 px-2.5 py-1 rounded-full capitalize font-medium"
            >
              {cat.replace('-', ' ')}
            </span>
          ))}
        </div>

        <p className="text-sm text-warm-600 line-clamp-2 mb-4 leading-relaxed">{r.descripcion}</p>

        <div className="flex items-center justify-between text-sm pt-3 border-t border-warm-100">
          <span className="text-warm-500 font-medium">{formatPrecio(r.precio_promedio)} aprox.</span>
          <span className="text-primary-600 font-semibold group-hover:translate-x-1 transition-transform duration-300 ease-out-quart inline-flex items-center gap-1">
            Ver detalle
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}
