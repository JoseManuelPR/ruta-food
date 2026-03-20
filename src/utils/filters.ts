import { Restaurante, Categoria, FiltrosState } from '@/types';

/**
 * Normaliza texto para búsquedas (quita tildes, lowercase)
 */
export function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

/**
 * Filtra restaurantes según estado de filtros
 */
export function filtrarRestaurantes(
  restaurantes: Restaurante[],
  filtros: FiltrosState
): Restaurante[] {
  let resultado = [...restaurantes];

  // Filtrar por departamento
  if (filtros.departamento) {
    resultado = resultado.filter(
      (r) => normalizeText(r.departamento) === normalizeText(filtros.departamento)
    );
  }

  // Filtrar por provincia
  if (filtros.provincia) {
    resultado = resultado.filter(
      (r) => normalizeText(r.provincia) === normalizeText(filtros.provincia)
    );
  }

  // Filtrar por distrito
  if (filtros.distrito) {
    resultado = resultado.filter(
      (r) => normalizeText(r.distrito) === normalizeText(filtros.distrito)
    );
  }

  // Filtrar por categorías
  if (filtros.categorias.length > 0) {
    resultado = resultado.filter((r) =>
      filtros.categorias.some((cat) => r.categorias.includes(cat))
    );
  }

  // Búsqueda por texto
  if (filtros.busqueda) {
    const query = normalizeText(filtros.busqueda);
    resultado = resultado.filter(
      (r) =>
        normalizeText(r.nombre).includes(query) ||
        normalizeText(r.ciudad).includes(query) ||
        normalizeText(r.descripcion).includes(query) ||
        r.tags.some((tag) => normalizeText(tag).includes(query))
    );
  }

  // Ordenar
  switch (filtros.ordenar) {
    case 'ranking':
      resultado.sort((a, b) => a.ranking - b.ranking);
      break;
    case 'rating':
      resultado.sort((a, b) => b.rating - a.rating);
      break;
    case 'precio-asc':
      resultado.sort((a, b) => a.precio_promedio - b.precio_promedio);
      break;
    case 'precio-desc':
      resultado.sort((a, b) => b.precio_promedio - a.precio_promedio);
      break;
  }

  return resultado;
}

/**
 * Obtiene valores únicos de un campo para generar opciones de filtro
 */
export function getUniqueValues(
  restaurantes: Restaurante[],
  campo: keyof Restaurante
): string[] {
  const values = restaurantes.map((r) => r[campo] as string);
  return Array.from(new Set(values)).sort();
}

/**
 * Obtiene provincias filtradas por departamento
 */
export function getProvinciasByDepartamento(
  restaurantes: Restaurante[],
  departamento: string
): string[] {
  if (!departamento) return getUniqueValues(restaurantes, 'provincia');
  return getUniqueValues(
    restaurantes.filter(
      (r) => normalizeText(r.departamento) === normalizeText(departamento)
    ),
    'provincia'
  );
}

/**
 * Obtiene distritos filtrados por provincia
 */
export function getDistritosByProvincia(
  restaurantes: Restaurante[],
  provincia: string
): string[] {
  if (!provincia) return getUniqueValues(restaurantes, 'distrito');
  return getUniqueValues(
    restaurantes.filter(
      (r) => normalizeText(r.provincia) === normalizeText(provincia)
    ),
    'distrito'
  );
}

/**
 * Busca restaurantes por texto
 */
export function buscarRestaurantes(
  restaurantes: Restaurante[],
  query: string
): Restaurante[] {
  if (!query.trim()) return [];
  const q = normalizeText(query);
  return restaurantes
    .filter(
      (r) =>
        normalizeText(r.nombre).includes(q) ||
        normalizeText(r.ciudad).includes(q) ||
        normalizeText(r.descripcion).includes(q) ||
        normalizeText(r.distrito).includes(q) ||
        r.tags.some((tag) => normalizeText(tag).includes(q))
    )
    .slice(0, 20); // limitar resultados
}

/**
 * Obtiene restaurantes destacados
 */
export function getDestacados(restaurantes: Restaurante[]): Restaurante[] {
  return restaurantes.filter((r) => r.destacado);
}

/**
 * Obtiene restaurantes por ciudad
 */
export function getRestaurantesByCiudad(
  restaurantes: Restaurante[],
  ciudad: string
): Restaurante[] {
  return restaurantes
    .filter((r) => normalizeText(r.ciudad) === normalizeText(ciudad))
    .sort((a, b) => a.ranking - b.ranking);
}

/**
 * Formatea el precio en soles
 */
export function formatPrecio(precio: number): string {
  return `S/ ${precio}`;
}

/**
 * Genera estrellas de rating
 */
export function getRatingStars(rating: number): string {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5 ? 1 : 0;
  return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(5 - full - half);
}
