import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { ScrollTrigger } from '../utils/gsapClient';
import Header from './Header';
import Footer from './Footer';
import Seo from './Seo';
import CookieConsent from './CookieConsent';
import AOS from 'aos';
import { useSmoothScroll } from '../hooks/useSmoothScroll';

// Module-level guard: AOS only needs to be initialised once per page load.
let aosInitialized = false;

const Layout = () => {
    const { pathname } = useLocation();
    useSmoothScroll();

    useEffect(() => {
        if (!aosInitialized) {
            AOS.init({
                /* Subtle fades; repeat on scroll so sections fade in / out (AdSense-safe: no infinite loops, no flashing ads) */
                duration: 520,
                once: false,
                offset: 56,
                easing: 'ease-out-cubic',
                delay: 0,
                anchorPlacement: 'top-bottom',
            });
            aosInitialized = true;
        }

        return () => {};
    }, []);

    useEffect(() => {
        AOS.refresh();
        requestAnimationFrame(() => ScrollTrigger.refresh());
    }, [pathname]);

    return (
        <div className="app-layout site-shell">
            <Seo />
            <Header />
            <main className="site-main">
                <Outlet />
            </main>
            <Footer />
            <CookieConsent />
        </div>
    );
};

export default Layout;
