import Link from 'next/link';
import { CiudadInfo } from '@/types';

interface Props {
  ciudad: CiudadInfo;
}

function buildExplorarUrl(ciudad: CiudadInfo): string {
  const params = new URLSearchParams();
  params.set('departamento', ciudad.departamento);
  if (ciudad.nombre !== ciudad.departamento) {
    params.set('provincia', ciudad.nombre);
  }
  return `/explorar?${params.toString()}`;
}

export default function CityCard({ ciudad }: Props) {
  return (
    <Link
      href={buildExplorarUrl(ciudad)}
      className="group relative overflow-hidden rounded-2xl aspect-[3/4] md:aspect-[4/5] card-hover shadow-sm cursor-pointer"
      aria-label={`Explorar ${ciudad.nombre} — ${ciudad.total_restaurantes} restaurantes`}
    >
      <img
        src={ciudad.imagen_url}
        alt={`Vista de ${ciudad.nombre}, Perú`}
        className="absolute inset-0 w-full h-full object-cover img-zoom"
        loading="lazy"
      />
      {/* Multi-layer gradient for depth — enhanced */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/5" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Explore indicator — appears on hover */}
      <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out-quart translate-y-2 group-hover:translate-y-0">
        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-8 h-0.5 bg-primary-400 rounded-full transition-all duration-500 ease-out-quart group-hover:w-12" />
          <span className="text-primary-400 text-xs font-semibold tracking-widest uppercase tabular-nums">
            {ciudad.total_restaurantes} restaurantes
          </span>
        </div>
        <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-1.5 drop-shadow-sm group-hover:text-primary-200 transition-colors duration-300">
          {ciudad.nombre}
        </h3>
        <p className="text-white/65 text-sm line-clamp-2 leading-relaxed">
          {ciudad.descripcion}
        </p>
      </div>
    </Link>
  );
}
