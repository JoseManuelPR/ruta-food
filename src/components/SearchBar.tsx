'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { restaurantes } from '@/data';
import { buscarRestaurantes, formatPrecio } from '@/utils/filters';
import { Restaurante } from '@/types';

interface Props {
  large?: boolean;
  autoFocus?: boolean;
  placeholder?: string;
}

export default function SearchBar({
  large = false,
  autoFocus = false,
  placeholder = 'Buscar restaurantes, ciudades, platos...',
}: Props) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Restaurante[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (query.length >= 2) {
      const found = buscarRestaurantes(restaurantes, query);
      setResults(found);
      setIsOpen(true);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  }, [query]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={wrapperRef} className="relative w-full">
      <div className={`relative ${large ? 'max-w-2xl mx-auto' : ''}`}>
        <svg
          className={`absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 ${large ? 'w-5 h-5' : 'w-4 h-4'}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => query.length >= 2 && setIsOpen(true)}
          autoFocus={autoFocus}
          placeholder={placeholder}
          className={`w-full bg-white border border-gray-200 rounded-full pl-11 pr-4 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-400 transition-all ${
            large ? 'py-4 text-lg shadow-lg' : 'py-2.5 text-sm shadow-sm'
          }`}
        />
        {query && (
          <button
            onClick={() => {
              setQuery('');
              setIsOpen(false);
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {/* Dropdown Results */}
      {isOpen && results.length > 0 && (
        <div className={`absolute top-full mt-2 w-full bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-50 ${large ? 'max-w-2xl left-1/2 -translate-x-1/2' : ''}`}>
          <div className="max-h-96 overflow-y-auto">
            {results.map((r) => (
              <Link
                key={r.id}
                href={`/restaurante/${r.id}`}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
              >
                <img
                  src={r.imagen_url}
                  alt={r.nombre}
                  className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
                />
                <div className="min-w-0 flex-1">
                  <h4 className="font-medium text-gray-900 truncate">{r.nombre}</h4>
                  <p className="text-xs text-gray-500">
                    {r.distrito}, {r.ciudad} · {formatPrecio(r.precio_promedio)}
                  </p>
                </div>
                <span className="text-yellow-500 text-sm flex-shrink-0">
                  ★ {r.rating}
                </span>
              </Link>
            ))}
          </div>
          <Link
            href={`/buscar?q=${encodeURIComponent(query)}`}
            onClick={() => setIsOpen(false)}
            className="block text-center py-3 text-sm text-primary-600 font-medium hover:bg-gray-50 border-t border-gray-100"
          >
            Ver todos los resultados
          </Link>
        </div>
      )}

      {isOpen && query.length >= 2 && results.length === 0 && (
        <div className={`absolute top-full mt-2 w-full bg-white rounded-2xl shadow-xl border border-gray-100 p-6 text-center z-50 ${large ? 'max-w-2xl left-1/2 -translate-x-1/2' : ''}`}>
          <p className="text-gray-500 text-sm">
            No se encontraron resultados para &quot;{query}&quot;
          </p>
          <p className="text-gray-400 text-xs mt-1">
            Intenta buscar por nombre de restaurante, ciudad o tipo de comida
          </p>
        </div>
      )}
    </div>
  );
}
