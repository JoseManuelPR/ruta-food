import { CiudadInfo } from '@/types';

export const ciudades: CiudadInfo[] = [
  {
    id: 'lima',
    nombre: 'Lima',
    departamento: 'Lima',
    descripcion:
      'Capital gastronómica de las Américas. Desde ceviches en Miraflores hasta fine dining en Barranco, Lima es el epicentro de la revolución culinaria peruana con restaurantes entre los mejores del mundo.',
    // Malecón de Miraflores — costa panorámica de Lima (descargada localmente)
    imagen_url: '/images/cities/lima.jpg',
    total_restaurantes: 12,
  },
  {
    id: 'cusco',
    nombre: 'Cusco',
    departamento: 'Cusco',
    descripcion:
      'La capital del Imperio Inca es también un tesoro gastronómico. Cocina andina ancestral que se reinventa con ingredientes de altura como la kiwicha, la oca y la alpaca, entre ruinas milenarias.',
    // Arquitectura colonial cusqueña — centro histórico (descargada localmente)
    imagen_url: '/images/cities/cusco.jpg',
    total_restaurantes: 6,
  },
  {
    id: 'arequipa',
    nombre: 'Arequipa',
    departamento: 'Arequipa',
    descripcion:
      'La Ciudad Blanca alberga las picanterías más auténticas del Perú. Rocoto relleno, chupe de camarones y adobo arequipeño son Patrimonio Cultural. El volcán Misti vigila cada plato.',
    // Volcán Misti iluminado sobre la ciudad de Arequipa (descargada localmente)
    imagen_url: '/images/cities/arequipa.jpg',
    total_restaurantes: 5,
  },
  {
    id: 'chiclayo',
    nombre: 'Chiclayo',
    departamento: 'Lambayeque',
    descripcion:
      'Capital de la Amistad y cuna del Señor de Sipán. La región Lambayeque ofrece arroz con pato, cabrito a la chiclayana, espesado, chinguirito y conchas negras — una de las cocinas regionales más ricas y auténticas del Perú.',
    // Museo Tumbas Reales de Sipán — símbolo de Lambayeque (descargada localmente)
    imagen_url: '/images/cities/chiclayo.jpg',
    total_restaurantes: 9,
  },
];
