import Link from 'next/link';
import { CategoriaInfo } from '@/types';

interface Props {
  categoria: CategoriaInfo;
}

/* ── SVG icon map (UI/UX Pro Max: never use emoji as structural icons) ── */
const iconMap: Record<string, React.ReactNode> = {
  restaurante: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 002-2V2" /><path d="M7 2v20" /><path d="M21 15V2v0a5 5 0 00-5 5v6c0 1.1.9 2 2 2h3zm0 0v7" />
    </svg>
  ),
  cafe: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 8h1a4 4 0 110 8h-1" /><path d="M3 8h14v9a4 4 0 01-4 4H7a4 4 0 01-4-4V8z" /><line x1="6" y1="2" x2="6" y2="4" /><line x1="10" y1="2" x2="10" y2="4" /><line x1="14" y1="2" x2="14" y2="4" />
    </svg>
  ),
  bar: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 22h8" /><path d="M12 11v11" /><path d="M19 2l-7 8-7-8h14z" />
    </svg>
  ),
  rooftop: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21h18" /><path d="M5 21V7l8-4 8 4v14" /><path d="M9 21v-4a2 2 0 012-2h2a2 2 0 012 2v4" /><path d="M3 11l9-5 9 5" />
    </svg>
  ),
  'comida-tipica': (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a7 7 0 017 7c0 3-2 5.5-4 7.5L12 20l-3-3.5C7 14.5 5 12 5 9a7 7 0 017-7z" /><circle cx="12" cy="9" r="2.5" />
    </svg>
  ),
  'fine-dining': (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  ),
  'street-food': (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" /><path d="M2.05 2.05h2l2.66 12.42a2 2 0 002 1.58h9.78a2 2 0 001.95-1.57L23 6H6" />
    </svg>
  ),
  cevicheria: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6" /><path d="M4 19c0 1.5.5 2 2 2h12c1.5 0 2-.5 2-2" /><path d="M2 12h20v3c0 1.5-.5 2-2 2H4c-1.5 0-2-.5-2-2v-3z" /><line x1="12" y1="4" x2="12" y2="6" /><line x1="9" y1="5" x2="10" y2="6.5" /><line x1="15" y1="5" x2="14" y2="6.5" />
    </svg>
  ),
  nikkei: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" /><path d="M12 3c-1.5 2-2.5 5-2.5 9s1 7 2.5 9" /><path d="M12 3c1.5 2 2.5 5 2.5 9s-1 7-2.5 9" /><line x1="3" y1="12" x2="21" y2="12" />
    </svg>
  ),
  chifa: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M15.5 2.5c2 2.5 3 5 1 7.5" /><path d="M8.5 2.5c-2 2.5-3 5-1 7.5" /><path d="M3 14h18v2c0 3-3 6-9 6s-9-3-9-6v-2z" /><path d="M3 14c0-2 3-4 9-4s9 2 9 4" />
    </svg>
  ),
};

export default function CategoryCard({ categoria }: Props) {
  const svgIcon = iconMap[categoria.id];

  return (
    <Link
      href={`/explorar?categoria=${categoria.id}`}
      className="group flex flex-col items-center gap-3 p-5 rounded-2xl hover:bg-white hover:shadow-lg hover:shadow-warm-200/50 transition-all duration-300 ease-out-quart border border-transparent hover:border-warm-100 cursor-pointer"
    >
      <div
        className={`w-14 h-14 rounded-2xl flex items-center justify-center ${categoria.color} group-hover:scale-110 transition-all duration-300 ease-out-quart shadow-sm group-hover:shadow-md`}
      >
        {svgIcon || <span className="text-2xl">{categoria.icono}</span>}
      </div>
      <div className="text-center">
        <h3 className="text-sm font-semibold text-warm-900 group-hover:text-primary-600 transition-colors duration-200">{categoria.nombre}</h3>
        <p className="text-xs text-warm-400 mt-0.5 hidden sm:block">{categoria.descripcion}</p>
      </div>
    </Link>
  );
}
