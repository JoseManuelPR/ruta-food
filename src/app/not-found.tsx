import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center" data-animate>
        <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-warm-100 flex items-center justify-center">
          <svg className="w-10 h-10 text-warm-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 002-2V2" /><path d="M7 2v20" /><path d="M21 15V2a5 5 0 00-5 5v6c0 1.1.9 2 2 2h3zm0 0v7" />
          </svg>
        </div>
        <h1 className="text-4xl font-display font-bold text-warm-900 mb-3">
          P&aacute;gina no encontrada
        </h1>
        <p className="text-warm-500 mb-8 max-w-md leading-relaxed">
          Lo sentimos, no pudimos encontrar lo que buscas. Quiz&aacute;s este plato ya
          se agot&oacute;.
        </p>
        <Link
          href="/"
          className="btn-primary text-white px-8 py-3.5 rounded-full"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
