import SearchBar from './SearchBar';

export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=1600&q=80"
          alt="Ceviche peruano — plato bandera del Perú"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 text-center">
        <div className="mb-6">
          <span className="inline-block text-primary-400 text-sm font-medium tracking-widest uppercase mb-4 bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full">
            Guía Gastronómica del Perú
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-4 leading-tight">
          Descubre el Perú
          <br />
          <span className="text-primary-400">a través de su comida</span>
        </h1>

        <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto">
          Explora los mejores restaurantes, cevicherías, picanterías y
          experiencias gastronómicas de cada rincón del país.
        </p>

        {/* Search */}
        <SearchBar large />

        {/* Quick stats */}
        <div className="flex items-center justify-center gap-8 mt-10 text-white/60 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-lg">🍽️</span>
            <span>28+ restaurantes</span>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <span className="text-lg">📍</span>
            <span>4 ciudades</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-lg">⭐</span>
            <span>100% verificados</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
