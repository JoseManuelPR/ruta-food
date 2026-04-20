'use client';

import { Categoria, FiltrosState } from '@/types';
import { categorias as allCategorias } from '@/data';
import { getNombresDepartamentos, getProvinciasDe, getDistritosDe } from '@/data';

/* SVG icon map — same as CategoryCard (UI UX Pro Max: no-emoji-icons) */
const sidebarIconMap: Record<string, React.ReactNode> = {
  restaurante: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 002-2V2" /><path d="M7 2v20" /><path d="M21 15V2a5 5 0 00-5 5v6c0 1.1.9 2 2 2h3zm0 0v7" /></svg>,
  cafe: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"><path d="M17 8h1a4 4 0 110 8h-1" /><path d="M3 8h14v9a4 4 0 01-4 4H7a4 4 0 01-4-4V8z" /><line x1="6" y1="2" x2="6" y2="4" /><line x1="10" y1="2" x2="10" y2="4" /><line x1="14" y1="2" x2="14" y2="4" /></svg>,
  bar: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"><path d="M8 22h8" /><path d="M12 11v11" /><path d="M19 2l-7 8-7-8h14z" /></svg>,
  rooftop: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18" /><path d="M5 21V7l8-4 8 4v14" /><path d="M9 21v-4a2 2 0 012-2h2a2 2 0 012 2v4" /></svg>,
  'comida-tipica': <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a7 7 0 017 7c0 3-2 5.5-4 7.5L12 20l-3-3.5C7 14.5 5 12 5 9a7 7 0 017-7z" /><circle cx="12" cy="9" r="2.5" /></svg>,
  'fine-dining': <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>,
  'street-food': <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" /><path d="M2.05 2.05h2l2.66 12.42a2 2 0 002 1.58h9.78a2 2 0 001.95-1.57L23 6H6" /></svg>,
  cevicheria: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"><path d="M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6" /><path d="M2 12h20v3c0 1.5-.5 2-2 2H4c-1.5 0-2-.5-2-2v-3z" /><path d="M4 19c0 1.5.5 2 2 2h12c1.5 0 2-.5 2-2" /></svg>,
  nikkei: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 3c-1.5 2-2.5 5-2.5 9s1 7 2.5 9" /><path d="M12 3c1.5 2 2.5 5 2.5 9s-1 7-2.5 9" /><line x1="3" y1="12" x2="21" y2="12" /></svg>,
  chifa: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"><path d="M15.5 2.5c2 2.5 3 5 1 7.5" /><path d="M8.5 2.5c-2 2.5-3 5-1 7.5" /><path d="M3 14h18v2c0 3-3 6-9 6s-9-3-9-6v-2z" /><path d="M3 14c0-2 3-4 9-4s9 2 9 4" /></svg>,
};

interface Props {
  filtros: FiltrosState;
  setFiltros: (filtros: FiltrosState) => void;
  departamentos?: string[];
  provincias?: string[];
  distritos?: string[];
  totalResultados: number;
}

export default function FilterSidebar({ filtros, setFiltros, totalResultados }: Props) {
  const departamentos = getNombresDepartamentos();
  const provincias = filtros.departamento ? getProvinciasDe(filtros.departamento) : [];
  const distritos = filtros.departamento && filtros.provincia
    ? getDistritosDe(filtros.departamento, filtros.provincia)
    : [];

  const updateFiltro = (key: keyof FiltrosState, value: unknown) => {
    const newFiltros = { ...filtros, [key]: value };
    if (key === 'departamento') { newFiltros.provincia = ''; newFiltros.distrito = ''; }
    if (key === 'provincia') { newFiltros.distrito = ''; }
    setFiltros(newFiltros);
  };

  const toggleCategoria = (cat: Categoria) => {
    const current = filtros.categorias;
    const updated = current.includes(cat)
      ? current.filter((c) => c !== cat)
      : [...current, cat];
    updateFiltro('categorias', updated);
  };

  const clearFilters = () => {
    setFiltros({ departamento: '', provincia: '', distrito: '', categorias: [], ordenar: 'ranking', busqueda: '' });
  };

  const hasActiveFilters = filtros.departamento || filtros.provincia || filtros.distrito || filtros.categorias.length > 0;

  return (
    <aside className="space-y-6">
      <div className="flex items-center justify-between">
        <p className="text-sm text-warm-500">
          <span className="font-semibold text-warm-900">{totalResultados}</span>{' '}
          {totalResultados === 1 ? 'resultado' : 'resultados'}
        </p>
        {hasActiveFilters && (
          <button onClick={clearFilters} className="text-xs text-primary-600 hover:text-primary-700 font-medium transition-colors">
            Limpiar filtros
          </button>
        )}
      </div>

      <div>
        <label className="block text-xs font-semibold text-warm-700 uppercase tracking-[0.12em] mb-2">Ordenar por</label>
        <select value={filtros.ordenar} onChange={(e) => updateFiltro('ordenar', e.target.value)}
          className="w-full border border-warm-200 rounded-xl px-3 py-2.5 text-sm text-warm-700 bg-white focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-400 transition-all">
          <option value="ranking">Ranking</option>
          <option value="rating">Mejor valorados</option>
          <option value="precio-asc">Precio: menor a mayor</option>
          <option value="precio-desc">Precio: mayor a menor</option>
        </select>
      </div>

      <div>
        <label className="block text-xs font-semibold text-warm-700 uppercase tracking-[0.12em] mb-2">Departamento</label>
        <select value={filtros.departamento} onChange={(e) => updateFiltro('departamento', e.target.value)}
          className="w-full border border-warm-200 rounded-xl px-3 py-2.5 text-sm text-warm-700 bg-white focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-400 transition-all">
          <option value="">Todos los departamentos</option>
          {departamentos.map((d) => <option key={d} value={d}>{d}</option>)}
        </select>
      </div>

      {filtros.departamento && provincias.length > 0 && (
        <div>
          <label className="block text-xs font-semibold text-warm-700 uppercase tracking-[0.12em] mb-2">Provincia</label>
          <select value={filtros.provincia} onChange={(e) => updateFiltro('provincia', e.target.value)}
            className="w-full border border-warm-200 rounded-xl px-3 py-2.5 text-sm text-warm-700 bg-white focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-400 transition-all">
            <option value="">Todas las provincias</option>
            {provincias.map((p) => <option key={p} value={p}>{p}</option>)}
          </select>
        </div>
      )}

      {filtros.provincia && distritos.length > 0 && (
        <div>
          <label className="block text-xs font-semibold text-warm-700 uppercase tracking-[0.12em] mb-2">Distrito</label>
          <select value={filtros.distrito} onChange={(e) => updateFiltro('distrito', e.target.value)}
            className="w-full border border-warm-200 rounded-xl px-3 py-2.5 text-sm text-warm-700 bg-white focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-400 transition-all">
            <option value="">Todos los distritos</option>
            {distritos.map((d) => <option key={d} value={d}>{d}</option>)}
          </select>
        </div>
      )}

      <div>
        <label className="block text-xs font-semibold text-warm-700 uppercase tracking-[0.12em] mb-3">Categor&iacute;as</label>
        <div className="space-y-1.5">
          {allCategorias.map((cat) => (
            <button key={cat.id} onClick={() => toggleCategoria(cat.id)}
              className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm transition-all duration-200 text-left ${
                filtros.categorias.includes(cat.id)
                  ? 'bg-primary-50 text-primary-700 font-medium ring-1 ring-primary-200'
                  : 'text-warm-600 hover:bg-warm-100'
              }`}>
              <span className="flex-shrink-0">{sidebarIconMap[cat.id] || <span className="text-base">{cat.icono}</span>}</span>
              <span>{cat.nombre}</span>
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}
