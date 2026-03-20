import { CiudadInfo } from '@/types';

export const ciudades: CiudadInfo[] = [
  {
    id: 'lima',
    nombre: 'Lima',
    departamento: 'Lima',
    descripcion:
      'Capital gastronómica de las Américas. Desde ceviches en Miraflores hasta fine dining en Barranco, Lima es el epicentro de la revolución culinaria peruana.',
    // Malecón de Miraflores — costa panorámica de Lima (Willian Justen de Vasconcellos)
    imagen_url: 'https://images.unsplash.com/photo-mZKEIRBStv4?w=800&q=80',
    total_restaurantes: 12,
  },
  {
    id: 'cusco',
    nombre: 'Cusco',
    departamento: 'Cusco',
    descripcion:
      'La capital del imperio incaico es también un tesoro gastronómico. Cocina andina ancestral que se reinventa con ingredientes de altura y tradición milenaria.',
    // Iglesia de la Compañía de Jesús — Plaza de Armas de Cusco
    imagen_url: 'https://images.unsplash.com/photo-2LydtNCRBv8?w=800&q=80',
    total_restaurantes: 6,
  },
  {
    id: 'arequipa',
    nombre: 'Arequipa',
    departamento: 'Arequipa',
    descripcion:
      'La Ciudad Blanca alberga las picanterías más auténticas del Perú. Rocoto relleno, chupe de camarones y adobo arequipeño son patrimonio vivo.',
    // Volcán Misti iluminado sobre la ciudad de Arequipa de noche
    imagen_url: 'https://images.unsplash.com/photo-4uyu3PAGayQ?w=800&q=80',
    total_restaurantes: 5,
  },
  {
    id: 'chiclayo',
    nombre: 'Chiclayo',
    departamento: 'Lambayeque',
    descripcion:
      'La Capital de la Amistad y cuna del Señor de Sipán. Su cocina norteña con arroz con pato, cabrito y ceviche de conchas negras la posiciona como destino gastronómico imperdible.',
    // Museo Tumbas Reales de Sipán — icónica pirámide de Lambayeque
    imagen_url: 'https://www.phimavoyages.com/wp-content/uploads/2017/03/musee-tumbas-reales.jpg',
    total_restaurantes: 9,
  },
];
