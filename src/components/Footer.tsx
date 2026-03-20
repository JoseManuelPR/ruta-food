import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🇵🇪</span>
              <span className="text-lg font-display font-bold text-white">
                Ruta del Sabor
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              Descubre el Perú a través de su comida. La guía gastronómica más
              completa y auténtica del país.
            </p>
          </div>

          {/* Ciudades */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Ciudades
            </h3>
            <ul className="space-y-2">
              {['Lima', 'Cusco', 'Arequipa', 'Chiclayo'].map((ciudad) => (
                <li key={ciudad}>
                  <Link
                    href={`/explorar?ciudad=${ciudad}`}
                    className="text-sm text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {ciudad}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categorías */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Categorías
            </h3>
            <ul className="space-y-2">
              {['Fine Dining', 'Comida Típica', 'Cevicherías', 'Cafés', 'Street Food'].map(
                (cat) => (
                  <li key={cat}>
                    <Link
                      href="/explorar"
                      className="text-sm text-gray-400 hover:text-primary-400 transition-colors"
                    >
                      {cat}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Sobre nosotros
            </h3>
            <ul className="space-y-2">
              <li>
                <span className="text-sm text-gray-400">Contacto</span>
              </li>
              <li>
                <span className="text-sm text-gray-400">Para restaurantes</span>
              </li>
              <li>
                <span className="text-sm text-gray-400">Blog</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Ruta del Sabor. Todos los derechos reservados.
          </p>
          <p className="text-xs text-gray-500">
            No es solo comer, es recorrer el Perú a través de su comida.
          </p>
        </div>
      </div>
    </footer>
  );
}
