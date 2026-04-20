import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';

const BASE_URL = 'https://rutadelsabor.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Ruta del Sabor — Guía Gastronómica del Perú',
    template: '%s | Ruta del Sabor',
  },
  description:
    'Descubre los mejores restaurantes, cevicherías, cafés y experiencias gastronómicas del Perú. Guía curada con restaurantes reales verificados en Lima, Cusco, Arequipa y Lambayeque.',
  keywords: [
    'restaurantes Perú', 'gastronomía peruana', 'mejores restaurantes Lima',
    'ceviche', 'comida peruana', 'guía gastronómica', 'turismo gastronómico Perú',
    'fine dining Lima', 'Cusco restaurantes', 'Arequipa picanterías',
    'Lambayeque cocina norteña', 'Chiclayo restaurantes',
  ],

  // Favicon & Icons
  icons: {
    icon: [
      { url: '/favicon.ico',    sizes: 'any',   type: 'image/x-icon'  },
      { url: '/favicon.svg',    type: 'image/svg+xml'                  },
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png'     },
      { url: '/favicon-16.png', sizes: '16x16', type: 'image/png'     },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    shortcut: '/favicon.ico',
  },
  manifest: '/site.webmanifest',

  // Open Graph
  openGraph: {
    title:       'Ruta del Sabor — Guía Gastronómica del Perú',
    description: 'Descubre el Perú a través de su comida. Los mejores restaurantes verificados en Lima, Cusco, Arequipa y Lambayeque.',
    url:         BASE_URL,
    siteName:    'Ruta del Sabor',
    type:        'website',
    locale:      'es_PE',
    images: [{
      url:    '/og-image.jpg',
      width:  1200,
      height: 630,
      alt:    'Ruta del Sabor — Guía Gastronómica del Perú',
    }],
  },

  // Twitter / X card
  twitter: {
    card:        'summary_large_image',
    site:        '@josemanuelpr23',
    creator:     '@josemanuelpr23',
    title:       'Ruta del Sabor — Guía Gastronómica del Perú',
    description: 'Descubre el Perú a través de su comida. Los mejores restaurantes verificados.',
    images:      ['/og-image.jpg'],
  },

  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  authors: [{ name: 'José Manuel Puicón', url: 'https://instagram.com/josemanuelpr23' }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="icon"             href="/favicon.ico" sizes="any" />
        <link rel="icon"             href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest"         href="/site.webmanifest" />
        <meta name="theme-color"     content="#ee7711" />
      </head>
      <body className="font-sans antialiased">
        <ScrollReveal />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
