import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Ruta del Sabor — Guía Gastronómica del Perú',
  description:
    'Descubre los mejores restaurantes, cevicherías, cafés y experiencias gastronómicas del Perú. Guía curada con restaurantes reales verificados en Lima, Cusco, Arequipa y más.',
  keywords: [
    'restaurantes Perú',
    'gastronomía peruana',
    'mejores restaurantes Lima',
    'ceviche',
    'comida peruana',
    'guía gastronómica',
    'turismo gastronómico Perú',
    'fine dining Lima',
    'Cusco restaurantes',
    'Arequipa picanterías',
  ],
  openGraph: {
    title: 'Ruta del Sabor — Guía Gastronómica del Perú',
    description: 'Descubre el Perú a través de su comida. Los mejores restaurantes verificados.',
    type: 'website',
    locale: 'es_PE',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="font-sans">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
