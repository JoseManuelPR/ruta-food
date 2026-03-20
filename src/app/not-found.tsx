import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <span className="text-6xl mb-6 block">🍽️</span>
        <h1 className="text-4xl font-display font-bold text-gray-900 mb-3">
          Página no encontrada
        </h1>
        <p className="text-gray-500 mb-8 max-w-md">
          Lo sentimos, no pudimos encontrar lo que buscas. Quizás este plato ya
          se agotó.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-primary-500 text-white px-6 py-3 rounded-full font-medium hover:bg-primary-600 transition-colors"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
