import { CiudadInfo } from '@/types';

export const ciudades: CiudadInfo[] = [
  {
    id: 'lima',
    nombre: 'Lima',
    departamento: 'Lima',
    descripcion:
      'Capital gastronómica de las Américas. Desde ceviches en Miraflores hasta fine dining en Barranco, Lima es el epicentro de la revolución culinaria peruana.',
    // Malecón de Miraflores — Costa Verde, Lima
    imagen_url: 'https://images.unsplash.com/photo-1531968455001-5c5272a67c71?w=800&q=80',
    total_restaurantes: 12,
  },
  {
    id: 'cusco',
    nombre: 'Cusco',
    departamento: 'Cusco',
    descripcion:
      'La capital del imperio incaico es también un tesoro gastronómico. Cocina andina ancestral que se reinventa con ingredientes de altura y tradición milenaria.',
    // Plaza de Armas de Cusco con la Catedral
    imagen_url: 'https://images.unsplash.com/photo-1580968014381-868e228f1260?w=800&q=80',
    total_restaurantes: 6,
  },
  {
    id: 'arequipa',
    nombre: 'Arequipa',
    departamento: 'Arequipa',
    descripcion:
      'La Ciudad Blanca alberga las picanterías más auténticas del Perú. Rocoto relleno, chupe de camarones y adobo arequipeño son patrimonio vivo.',
    // Volcán Misti y la ciudad de Arequipa
    imagen_url: 'https://images.unsplash.com/photo-1612294037637-ec328d0e075e?w=800&q=80',
    total_restaurantes: 5,
  },
  {
    id: 'chiclayo',
    nombre: 'Chiclayo',
    departamento: 'Lambayeque',
    descripcion:
      'La Capital de la Amistad y cuna del Señor de Sipán. Su cocina norteña con arroz con pato, cabrito y ceviche de conchas negras la posiciona como destino imperdible en 2025.',
    // Catedral de Chiclayo — Plaza Principal
    imagen_url: 'https://images.unsplash.com/photo-1583417267826-aebc4d1542e1?w=800&q=80',
    total_restaurantes: 5,
  },
];
