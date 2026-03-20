'use client';

import { Categoria, FiltrosState } from '@/types';
import { categorias as allCategorias } from '@/data';
import { getNombresDepartamentos, getProvinciasDe, getDistritosDe } from '@/data';

interface Props {
  filtros: FiltrosState;
  setFiltros: (filtros: FiltrosState) => void;
  departamentos?: string[];
  provincias?: string[];
  distritos?: string[];
  totalResultados: number;
}

export default function FilterSidebar({ filtros, setFiltros, totalResultados }: Props) {
  // Use full UBIGEO data (all Peru, not just restaurants in DB)
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
        <p className="text-sm text-gray-500">
          <span className="font-semibold text-gray-900">{totalResultados}</span>{' '}
          {totalResultados === 1 ? 'resultado' : 'resultados'}
        </p>
        {hasActiveFilters && (
          <button onClick={clearFilters} className="text-xs text-primary-600 hover:text-primary-700 font-medium">
            Limpiar filtros
          </button>
        )}
      </div>

      <div>
        <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">Ordenar por</label>
        <select value={filtros.ordenar} onChange={(e) => updateFiltro('ordenar', e.target.value)}
          className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-400">
          <option value="ranking">Ranking</option>
          <option value="rating">Mejor valorados</option>
          <option value="precio-asc">Precio: menor a mayor</option>
          <option value="precio-desc">Precio: mayor a menor</option>
        </select>
      </div>

      <div>
        <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">Departamento</label>
        <select value={filtros.departamento} onChange={(e) => updateFiltro('departamento', e.target.value)}
          className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-400">
          <option value="">Todos los departamentos</option>
          {departamentos.map((d) => <option key={d} value={d}>{d}</option>)}
        </select>
      </div>

      {filtros.departamento && provincias.length > 0 && (
        <div>
          <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">Provincia</label>
          <select value={filtros.provincia} onChange={(e) => updateFiltro('provincia', e.target.value)}
            className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-400">
            <option value="">Todas las provincias</option>
            {provincias.map((p) => <option key={p} value={p}>{p}</option>)}
          </select>
        </div>
      )}

      {filtros.provincia && distritos.length > 0 && (
        <div>
          <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">Distrito</label>
          <select value={filtros.distrito} onChange={(e) => updateFiltro('distrito', e.target.value)}
            className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-400">
            <option value="">Todos los distritos</option>
            {distritos.map((d) => <option key={d} value={d}>{d}</option>)}
          </select>
        </div>
      )}

      <div>
        <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-3">Categorías</label>
        <div className="space-y-1.5">
          {allCategorias.map((cat) => (
            <button key={cat.id} onClick={() => toggleCategoria(cat.id)}
              className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm transition-all text-left ${
                filtros.categorias.includes(cat.id)
                  ? 'bg-primary-50 text-primary-700 font-medium ring-1 ring-primary-200'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}>
              <span className="text-base">{cat.icono}</span>
              <span>{cat.nombre}</span>
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}
