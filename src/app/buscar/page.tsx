'use client';

import { useState, useEffect, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import SearchBar from '@/components/SearchBar';
import RestaurantCard from '@/components/RestaurantCard';
import { restaurantes } from '@/data';
import { buscarRestaurantes, getDestacados } from '@/utils/filters';

function BuscarContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const [query, setQuery] = useState(initialQuery);

  useEffect(() => {
    const q = searchParams.get('q');
    if (q) setQuery(q);
  }, [searchParams]);

  const results = useMemo(() => {
    if (query.length < 2) return [];
    return buscarRestaurantes(restaurantes, query);
  }, [query]);

  const destacados = useMemo(() => getDestacados(restaurantes).slice(0, 6), []);

  return (
    <div className="pt-20 pb-16">
      <div className="section-padding">
        {/* Search header */}
        <div className="max-w-2xl mx-auto text-center mb-10" data-animate>
          <h1 className="text-3xl md:text-4xl font-display font-bold text-warm-900 mb-4">
            Buscar
          </h1>
          <SearchBar
            large
            autoFocus
            placeholder="Nombre, ciudad, tipo de comida..."
          />
        </div>

        {/* Results */}
        {query.length >= 2 && results.length > 0 && (
          <div data-animate>
            <p className="text-sm text-warm-500 mb-6">
              <span className="font-semibold text-warm-900">{results.length}</span>{' '}
              resultados para &quot;{query}&quot;
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {results.map((r, i) => (
                <div key={r.id} data-animate data-animate-delay={`${(i % 3) + 1}`}>
                  <RestaurantCard restaurante={r} />
                </div>
              ))}
            </div>
          </div>
        )}

        {query.length >= 2 && results.length === 0 && (
          <div className="text-center py-16" data-animate>
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-warm-100 flex items-center justify-center">
              <svg className="w-8 h-8 text-warm-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
              </svg>
            </div>
            <h3 className="text-xl font-display font-semibold text-warm-900 mb-2">
              Sin resultados para &quot;{query}&quot;
            </h3>
            <p className="text-warm-500 mb-4">
              Intenta buscar con otros t&eacute;rminos como &quot;ceviche&quot;, &quot;Lima&quot; o
              &quot;fine dining&quot;
            </p>
          </div>
        )}

        {/* Suggested when no search */}
        {query.length < 2 && (
          <div data-animate>
            <h2 className="text-xl font-display font-bold text-warm-900 mb-6">
              Restaurantes destacados
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {destacados.map((r, i) => (
                <div key={r.id} data-animate data-animate-delay={`${(i % 3) + 1}`}>
                  <RestaurantCard restaurante={r} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function BuscarPage() {
  return (
    <Suspense
      fallback={
        <div className="pt-20 pb-16 section-padding text-center">
          <div className="animate-pulse">
            <div className="h-10 bg-warm-200 rounded w-1/3 mx-auto mb-4" />
            <div className="h-12 bg-warm-200 rounded-full max-w-2xl mx-auto" />
          </div>
        </div>
      }
    >
      <BuscarContent />
    </Suspense>
  );
}
