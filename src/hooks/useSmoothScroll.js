import { useEffect } from 'react';
import Lenis from 'lenis';
import { ScrollTrigger } from '../utils/gsapClient';

/**
 * Lenis smooth scrolling + ScrollTrigger sync. Disabled on small viewports so native scroll
 * works reliably on mobile. Skipped when user prefers reduced motion.
 * Note: AOS manages its own IntersectionObserver — no manual AOS.refresh() needed here.
 */
export function useSmoothScroll() {
    useEffect(() => {
        if (typeof window === 'undefined') return undefined;
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
        if (window.matchMedia('(max-width: 767px)').matches) return undefined;

        const lenis = new Lenis({
            duration: 1.05,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
            touchMultiplier: 1.1,
        });

        lenis.on('scroll', ScrollTrigger.update);

        let rafId = 0;
        const raf = (time) => {
            lenis.raf(time);
            rafId = requestAnimationFrame(raf);
        };
        rafId = requestAnimationFrame(raf);

        return () => {
            cancelAnimationFrame(rafId);
            lenis.destroy();
        };
    }, []);
}

