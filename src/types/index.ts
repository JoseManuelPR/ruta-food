// ============================================================
// Ruta del Sabor — Core Data Types
// ============================================================

export interface Coordenadas {
  lat: number;
  lng: number;
}

export interface Restaurante {
  id: string;
  nombre: string;
  ciudad: string;
  departamento: string;
  provincia: string;
  distrito: string;
  categorias: Categoria[];
  ranking: number; // 1–50 within city
  descripcion: string;
  direccion: string;
  coordenadas: Coordenadas;
  precio_promedio: number; // in PEN (soles)
  rating: number; // 1.0–5.0
  imagen_url: string;
  destacado: boolean;
  tags: string[];
  horario?: string;
  telefono?: string;
  website?: string;
  chef?: string;
}

export type Categoria =
  | 'restaurante'
  | 'cafe'
  | 'bar'
  | 'rooftop'
  | 'comida-tipica'
  | 'fine-dining'
  | 'street-food'
  | 'cevicheria'
  | 'chifa'
  | 'nikkei'
  | 'panaderia';

export interface CategoriaInfo {
  id: Categoria;
  nombre: string;
  descripcion: string;
  icono: string; // emoji
  color: string; // tailwind color class
}

export interface CiudadInfo {
  id: string;
  nombre: string;
  departamento: string;
  descripcion: string;
  imagen_url: string;
  total_restaurantes: number;
}

export interface FiltrosState {
  departamento: string;
  provincia: string;
  distrito: string;
  categorias: Categoria[];
  ordenar: 'ranking' | 'rating' | 'precio-asc' | 'precio-desc';
  busqueda: string;
}

// For future scalability
export interface Review {
  id: string;
  restaurante_id: string;
  usuario: string;
  rating: number;
  comentario: string;
  fecha: string;
}

export interface Usuario {
  id: string;
  nombre: string;
  email: string;
  favoritos: string[];
}
