import { CiudadInfo } from '@/types';

export const ciudades: CiudadInfo[] = [
  {
    id: 'lima',
    nombre: 'Lima',
    departamento: 'Lima',
    descripcion:
      'Capital gastronómica de las Américas. Desde ceviches en Miraflores hasta fine dining en Barranco, Lima es el epicentro de la revolución culinaria peruana.',
    imagen_url: 'https://images.unsplash.com/photo-1531968455001-5c5272a67c71?w=800&q=80',
    total_restaurantes: 12,
  },
  {
    id: 'cusco',
    nombre: 'Cusco',
    departamento: 'Cusco',
    descripcion:
      'La capital del imperio incaico es también un tesoro gastronómico. Cocina andina ancestral que se reinventa con ingredientes de altura y tradición milenaria.',
    imagen_url: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=800&q=80',
    total_restaurantes: 6,
  },
  {
    id: 'arequipa',
    nombre: 'Arequipa',
    departamento: 'Arequipa',
    descripcion:
      'La Ciudad Blanca alberga las picanterías más auténticas del Perú. Rocoto relleno, chupe de camarones y adobo arequipeño son patrimonio vivo.',
    imagen_url: 'https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?w=800&q=80',
    total_restaurantes: 5,
  },
];
