'use client';

import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import RestaurantCard from '@/components/RestaurantCard';
import FilterSidebar from '@/components/FilterSidebar';
import SearchBar from '@/components/SearchBar';
import { restaurantes } from '@/data';
import { FiltrosState, Categoria } from '@/types';
import {
  filtrarRestaurantes,
  getUniqueValues,
  getProvinciasByDepartamento,
  getDistritosByProvincia,
  getContextualRankLabel,
} from '@/utils/filters';

function ExplorarContent() {
  const searchParams = useSearchParams();

  const [filtros, setFiltros] = useState<FiltrosState>({
    departamento: '',
    provincia: '',
    distrito: '',
    categorias: [],
    ordenar: 'ranking',
    busqueda: '',
  });

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // Initialize from URL params
  useEffect(() => {
    // Support ?departamento= + ?provincia= (new) and legacy ?ciudad= (backward compat)
    const departamento = searchParams.get('departamento') || searchParams.get('ciudad') || '';
    const provincia = searchParams.get('provincia') || '';
    const categoria = searchParams.get('categoria');

    if (departamento || provincia || categoria) {
      setFiltros((prev) => ({
        ...prev,
        departamento: departamento || prev.departamento,
        provincia: provincia || prev.provincia,
        categorias: categoria ? [categoria as Categoria] : prev.categorias,
      }));
    }
  }, [searchParams]);

  // Derived data
  const departamentos = useMemo(() => getUniqueValues(restaurantes, 'departamento'), []);
  const provincias = useMemo(
    () => getProvinciasByDepartamento(restaurantes, filtros.departamento),
    [filtros.departamento]
  );
  const distritos = useMemo(
    () => getDistritosByProvincia(restaurantes, filtros.provincia),
    [filtros.provincia]
  );

  const resultados = useMemo(
    () => filtrarRestaurantes(restaurantes, filtros),
    [filtros]
  );

  return (
    <div className="pt-20 pb-16">
      {/* Page header */}
      <div className="section-padding mb-8">
        <h1 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-2">
          Explora restaurantes
        </h1>
        <p className="text-gray-500">
          Filtra por ubicación, categoría y encuentra tu próxima experiencia gastronómica.
        </p>

        {/* Search + Mobile filter toggle */}
        <div className="flex gap-3 mt-6">
          <div className="flex-1">
            <SearchBar placeholder="Buscar por nombre, ciudad..." />
          </div>
          <button
            onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
            className="lg:hidden flex items-center gap-2 px-4 py-2.5 border border-gray-200 rounded-full text-sm text-gray-700 hover:bg-gray-50"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
            Filtros
          </button>
        </div>
      </div>

      <div className="section-padding">
        <div className="flex gap-8">
          {/* Sidebar — Desktop */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              <FilterSidebar
                filtros={filtros}
                setFiltros={setFiltros}
                departamentos={departamentos}
                provincias={provincias}
                distritos={distritos}
                totalResultados={resultados.length}
              />
            </div>
          </div>

          {/* Mobile Sidebar */}
          {mobileFiltersOpen && (
            <div className="fixed inset-0 z-50 lg:hidden">
              <div
                className="absolute inset-0 bg-black/50"
                onClick={() => setMobileFiltersOpen(false)}
              />
              <div className="absolute right-0 top-0 bottom-0 w-80 max-w-full bg-white p-6 overflow-y-auto shadow-xl">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-semibold">Filtros</h2>
                  <button
                    onClick={() => setMobileFiltersOpen(false)}
                    className="p-2 text-gray-400 hover:text-gray-600"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <FilterSidebar
                  filtros={filtros}
                  setFiltros={setFiltros}
                  departamentos={departamentos}
                  provincias={provincias}
                  distritos={distritos}
                  totalResultados={resultados.length}
                />
              </div>
            </div>
          )}

          {/* Results Grid */}
          <div className="flex-1">
            {resultados.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {resultados.map((r) => (
                  <RestaurantCard
                    key={r.id}
                    restaurante={r}
                    rankLabel={getContextualRankLabel(r, restaurantes, filtros)}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <span className="text-5xl mb-4 block">🍽️</span>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  No se encontraron resultados
                </h3>
                <p className="text-gray-500">
                  Intenta ajustar los filtros o buscar con otros términos.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ExplorarPage() {
  return (
    <Suspense
      fallback={
        <div className="pt-20 pb-16 section-padding">
          <div className="animate-pulse space-y-4">
            <div className="h-10 bg-gray-200 rounded w-1/3" />
            <div className="h-6 bg-gray-200 rounded w-2/3" />
          </div>
        </div>
      }
    >
      <ExplorarContent />
    </Suspense>
  );
}
