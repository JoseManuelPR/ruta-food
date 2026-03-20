import Link from 'next/link';
import { CiudadInfo } from '@/types';

interface Props {
  ciudad: CiudadInfo;
}

function buildExplorarUrl(ciudad: CiudadInfo): string {
  const params = new URLSearchParams();
  params.set('departamento', ciudad.departamento);
  // If the city name differs from departamento, it's a province-level entry
  if (ciudad.nombre !== ciudad.departamento) {
    params.set('provincia', ciudad.nombre);
  }
  return `/explorar?${params.toString()}`;
}

export default function CityCard({ ciudad }: Props) {
  return (
    <Link
      href={buildExplorarUrl(ciudad)}
      className="group relative overflow-hidden rounded-2xl aspect-[3/4] md:aspect-[4/5]"
    >
      <img
        src={ciudad.imagen_url}
        alt={ciudad.nombre}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      <div className="absolute bottom-0 left-0 right-0 p-5">
        <h3 className="text-2xl font-display font-bold text-white mb-1">
          {ciudad.nombre}
        </h3>
        <p className="text-white/70 text-sm line-clamp-2 mb-2">
          {ciudad.descripcion}
        </p>
        <span className="text-xs text-white/50 font-medium">
          {ciudad.total_restaurantes} restaurantes
        </span>
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-primary-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </Link>
  );
}
