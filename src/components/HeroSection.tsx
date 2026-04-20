'use client';

import { useEffect, useRef, useState } from 'react';
import SearchBar from './SearchBar';

function AnimatedCounter({ end, duration = 2000, suffix = '' }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const start = 0;
          const startTime = performance.now();

          const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out-quart
            const eased = 1 - Math.pow(1 - progress, 4);
            setCount(Math.round(start + (end - start) * eased));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function HeroSection() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY * 0.35);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
      {/* Parallax Background Image */}
      <div
        className="absolute inset-0 will-change-transform"
        style={{ transform: `translateY(${offsetY}px) scale(1.1)` }}
      >
        <img
          src="/images/hero-ceviche.jpg"
          alt="Ceviche peruano — plato bandera del Perú"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Multi-layer gradient overlay — enhanced depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/85" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />

      {/* Warm tint overlay */}
      <div className="absolute inset-0 bg-primary-950/15 mix-blend-multiply" />

      {/* Subtle noise/grain texture for premium feel */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      }} />

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 text-center">
        {/* Badge — refined glass effect */}
        <div className="mb-8 animate-fade-in">
          <span className="inline-flex items-center gap-2.5 text-primary-300 text-xs font-semibold tracking-[0.2em] uppercase glass-dark px-6 py-2.5 rounded-full border border-white/10 shadow-lg shadow-black/10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-400" />
            </span>
            Guía gastronómica del Perú
          </span>
        </div>

        {/* Headline — copywriting: "{Achieve outcome} without {pain point}" */}
        <h1 className="font-display font-bold text-white mb-6 leading-[1.08] animate-fade-in-delay-1 text-fluid-hero tracking-tight">
          Descubre dónde comer
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 via-primary-400 to-amber-300 animate-shimmer-text">
            sin improvisar
          </span>
        </h1>

        {/* Subheadline — copywriting: expand headline, add specificity */}
        <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-delay-2">
          54+ restaurantes reales, verificados en múltiples fuentes.
          <br className="hidden sm:block" />
          De Lima a Lambayeque, cada recomendación es de confianza.
        </p>

        {/* Search — CRO: primary action above the fold */}
        <div className="animate-fade-in-delay-3">
          <SearchBar large />
        </div>

        {/* Social proof stats — marketing psychology: bandwagon + specificity + authority */}
        <div className="flex items-center justify-center gap-8 sm:gap-12 mt-14 animate-fade-in-delay-3">
          {[
            {
              value: 54, suffix: '+', label: 'Restaurantes verificados',
              icon: (
                <svg className="w-4 h-4 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 002-2V2M7 2v20M21 15V2a5 5 0 00-5 5v6c0 1.1.9 2 2 2h3zm0 0v7" />
                </svg>
              ),
            },
            {
              value: 4, suffix: '', label: 'Regiones del Perú',
              icon: (
                <svg className="w-4 h-4 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              ),
            },
            {
              value: 3, suffix: '+', label: 'Fuentes por restaurante',
              icon: (
                <svg className="w-4 h-4 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ),
            },
          ].map(({ value, suffix, label, icon }) => (
            <div key={label} className="flex flex-col items-center gap-1.5">
              <div className="flex items-center gap-2 text-white font-bold text-xl md:text-2xl tabular-nums">
                {icon}
                <AnimatedCounter end={value} suffix={suffix} />
              </div>
              <span className="text-white/40 text-[11px] font-medium hidden sm:block tracking-wide">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom gradient fade to content — smoother */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-warm-50 via-warm-50/50 to-transparent" />

      {/* Scroll indicator — gentle finite cue (UI UX Pro Max: no continuous loops) */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity duration-300">
        <span className="text-white/40 text-[10px] tracking-[0.2em] uppercase font-medium">Explorar</span>
        <div className="w-5 h-8 rounded-full border border-white/20 flex justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-white/50 animate-scroll-cue" />
        </div>
      </div>
    </section>
  );
}
