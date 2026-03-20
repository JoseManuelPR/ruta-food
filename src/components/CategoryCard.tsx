import Link from 'next/link';
import { CategoriaInfo } from '@/types';

interface Props {
  categoria: CategoriaInfo;
}

export default function CategoryCard({ categoria }: Props) {
  return (
    <Link
      href={`/explorar?categoria=${categoria.id}`}
      className="group flex flex-col items-center gap-3 p-4 rounded-2xl hover:bg-gray-50 transition-all duration-200"
    >
      <div
        className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl ${categoria.color} group-hover:scale-110 transition-transform duration-200`}
      >
        {categoria.icono}
      </div>
      <div className="text-center">
        <h3 className="text-sm font-semibold text-gray-900">{categoria.nombre}</h3>
        <p className="text-xs text-gray-400 mt-0.5 hidden sm:block">{categoria.descripcion}</p>
      </div>
    </Link>
  );
}
