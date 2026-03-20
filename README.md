# 🇵🇪 Ruta del Sabor — Guía Gastronómica del Perú

> "No es solo comer, es recorrer el Perú a través de su comida"

## Stack Tecnológico

- **Framework**: Next.js 14 (App Router)
- **Estilos**: Tailwind CSS 3.4
- **Lenguaje**: TypeScript 5
- **Data**: Archivos JSON estáticos (23 restaurantes reales)
- **Deploy**: Vercel (listo para deploy)

## Estructura del Proyecto

```
RUTA-FOOD/
├── src/
│   ├── app/                    # Páginas (App Router)
│   │   ├── page.tsx            # Home
│   │   ├── layout.tsx          # Layout global + SEO
│   │   ├── globals.css         # Estilos globales
│   │   ├── not-found.tsx       # 404
│   │   ├── explorar/           # Exploración con filtros
│   │   ├── restaurante/[id]/   # Detalle de restaurante
│   │   └── buscar/             # Búsqueda
│   ├── components/             # Componentes React
│   │   ├── Header.tsx          # Nav responsive
│   │   ├── Footer.tsx          # Footer
│   │   ├── HeroSection.tsx     # Hero con search
│   │   ├── RestaurantCard.tsx  # Card (3 variantes)
│   │   ├── CityCard.tsx        # Card de ciudad
│   │   ├── CategoryCard.tsx    # Card de categoría
│   │   ├── FilterSidebar.tsx   # Filtros cascada
│   │   └── SearchBar.tsx       # Buscador con dropdown
│   ├── data/                   # Data estática
│   │   ├── restaurants.ts      # 23 restaurantes reales
│   │   ├── categories.ts       # 10 categorías
│   │   └── cities.ts           # 3 ciudades
│   ├── types/                  # TypeScript types
│   └── utils/                  # Filtros y helpers
├── package.json
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── postcss.config.js
```

## Inicio Rápido

```bash
# 1. Instalar dependencias
npm install

# 2. Desarrollo local
npm run dev

# 3. Build de producción
npm run build

# 4. Servir producción
npm start
```

## Deploy en Vercel

### Opción A: Desde GitHub (recomendado)

1. Sube el proyecto a un repositorio GitHub
2. Ve a [vercel.com](https://vercel.com) → "New Project"
3. Importa el repositorio
4. Vercel detecta Next.js automáticamente
5. Click en "Deploy"

### Opción B: Vercel CLI

```bash
npm i -g vercel
vercel
# Sigue las instrucciones interactivas
```

## Datos Reales Incluidos

### Lima (12 restaurantes)
- Central (Virgilio Martínez) — #1 World's Best
- Maido (Mitsuharu Tsumura) — Nikkei
- Astrid & Gastón (Gastón Acurio)
- La Mar Cebichería
- Isolina Taberna Peruana
- El Mercado (Rafael Osterling)
- Panchita
- El Pan de la Chola
- Huaca Pucllana
- Café Bisetti
- Kjolle (Pía León)
- Rafael

### Cusco (6 restaurantes)
- Chicha por Gastón Acurio
- MAP Café
- Cicciolina
- Mil Centro (Virgilio Martínez)
- Pachapapa
- Morena Peruvian Kitchen

### Arequipa (5 restaurantes)
- Zig Zag
- La Nueva Palomino
- Chicha por Gastón Acurio
- Sol de Mayo
- Crêpísimo

## Funcionalidades

- **Home**: Hero, ciudades, categorías, destacados
- **Explorar**: Filtros cascada (Depto → Provincia → Distrito), categorías, ordenamiento
- **Detalle**: Info completa, link a Google Maps, restaurantes relacionados
- **Buscar**: Búsqueda en tiempo real con dropdown
- **SEO**: Metadata dinámica por página, Open Graph
- **Responsive**: Mobile-first design

## Escalabilidad Futura

### Backend (Fase 2)
- Node.js + Express / Next.js API Routes
- PostgreSQL + Prisma ORM
- Autenticación (NextAuth)

### Funcionalidades (Fase 3)
- Reviews y ratings de usuarios
- Sistema de reservas
- Panel admin para restaurantes
- Mapa interactivo con Mapbox
- PWA para offline

### Monetización
- **Restaurantes destacados**: Pago mensual por visibilidad premium
- **Publicidad nativa**: Banners contextuales en resultados
- **Reservas**: Comisión por reserva (5-10%)
- **Membresía Pro**: Acceso a listas curadas exclusivas
- **API de datos**: Para apps de terceros

## Licencia

Proyecto privado — Ruta del Sabor © 2026
