'use client';

import { useEffect } from 'react';

/**
 * Global Intersection Observer that adds `.is-visible` to
 * any element with `data-animate` when it enters the viewport.
 * (pbakaus/impeccable — animate skill)
 */
export default function ScrollReveal() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Respect reduced-motion preference
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) {
      // Make everything visible immediately
      document.querySelectorAll('[data-animate]').forEach((el) => {
        el.classList.add('is-visible');
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target); // Only animate once
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    // Observe all elements with data-animate
    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el);
    });

    // Re-observe on DOM mutations (for dynamically added content)
    const mutationObserver = new MutationObserver(() => {
      document.querySelectorAll('[data-animate]:not(.is-visible)').forEach(
        (el) => observer.observe(el)
      );
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return null; // This component only sets up the observer
}
