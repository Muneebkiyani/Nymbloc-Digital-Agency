import React, { useState, useEffect, useCallback } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';

const DESKTOP_BREAKPOINT = 992;

const Header = () => {
    const { pathname } = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isDemosOpen, setIsDemosOpen] = useState(false);
    const [isDesktop, setIsDesktop] = useState(
        () => typeof window !== 'undefined' && window.innerWidth > DESKTOP_BREAKPOINT
    );
    const demosNavActive =
        pathname === '/demos' ||
        pathname === '/demo' ||
        pathname.startsWith('/demos/') ||
        pathname.startsWith('/demo/');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth > DESKTOP_BREAKPOINT);
        };
        window.addEventListener('resize', handleResize, { passive: true });
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMenuOpen]);

    const closeMenu = useCallback(() => {
        setIsMenuOpen(false);
        setIsServicesOpen(false);
        setIsDemosOpen(false);
    }, []);

    return (
        <header className={`robot-header ${isScrolled ? 'header-scrolled' : ''}`}>
            {isMenuOpen ? (
                <button
                    type="button"
                    className="nav-backdrop"
                    aria-label="Close menu"
                    onClick={closeMenu}
                />
            ) : null}
            <div className="container nav-container">
                <button className="mobile-menu-btn" aria-label="Toggle Menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? '✕' : '☰'}
                </button>

                <Link to="/" className="logo" onClick={closeMenu}>
                    <img src="/assets/logo-header.png" alt="NYMBLOC Logo" style={{ height: '60px', width: 'auto', maxWidth: '250px', objectFit: 'contain' }} />
                </Link>

                <nav>
                    <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                        <li><NavLink to="/" className={({ isActive }) => isActive ? 'active-link' : ''} onClick={closeMenu} end>Home</NavLink></li>
                        <li><NavLink to="/about" className={({ isActive }) => isActive ? 'active-link' : ''} onClick={closeMenu}>About</NavLink></li>
                        <li
                            className="dropdown"
                            onMouseEnter={() => isDesktop && setIsServicesOpen(true)}
                            onMouseLeave={() => isDesktop && setIsServicesOpen(false)}
                        >
                            <NavLink
                                to="/services"
                                className={({ isActive }) => (isActive || isServicesOpen) ? 'active-link dropdown-toggle' : 'dropdown-toggle'}
                                onClick={(e) => {
                                    if (!isDesktop) {
                                        e.preventDefault();
                                        setIsServicesOpen(!isServicesOpen);
                                    } else {
                                        closeMenu();
                                    }
                                }}
                            >
                                Services <span className={`arrow ${isServicesOpen ? 'up' : ''}`}>▾</span>
                            </NavLink>
                            <ul className={`dropdown-menu ${isServicesOpen ? 'show' : ''}`}>
                                <li><Link to="/services/website" onClick={closeMenu}>Website Development</Link></li>
                                <li><Link to="/services/application" onClick={closeMenu}>Application Development</Link></li>
                                <li><Link to="/services/wordpress" onClick={closeMenu}>WordPress Sites</Link></li>
                            </ul>
                        </li>
                        <li
                            className="dropdown"
                            onMouseEnter={() => isDesktop && setIsDemosOpen(true)}
                            onMouseLeave={() => isDesktop && setIsDemosOpen(false)}
                        >
                            <span
                                role="button"
                                tabIndex={0}
                                className={`dropdown-toggle ${demosNavActive || isDemosOpen ? 'active-link' : ''}`}
                                aria-expanded={isDemosOpen}
                                aria-haspopup="true"
                                onClick={() => {
                                    if (!isDesktop) {
                                        setIsDemosOpen(!isDemosOpen);
                                    }
                                }}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' || e.key === ' ') {
                                        e.preventDefault();
                                        if (!isDesktop) {
                                            setIsDemosOpen(!isDemosOpen);
                                        }
                                    }
                                }}
                            >
                                Demos <span className={`arrow ${isDemosOpen ? 'up' : ''}`}>▾</span>
                            </span>
                            <ul className={`dropdown-menu ${isDemosOpen ? 'show' : ''}`} role="menu">
                                <li><Link to="/demos/restaurants" target="_blank" rel="noopener noreferrer" onClick={closeMenu} role="menuitem">Restaurants &amp; Cafes</Link></li>
                                <li><Link to="/demos/salons" target="_blank" rel="noopener noreferrer" onClick={closeMenu} role="menuitem">Salons &amp; Beauty</Link></li>
                                <li><Link to="/demos/cleaning" target="_blank" rel="noopener noreferrer" onClick={closeMenu} role="menuitem">Cleaning Services</Link></li>
                                <li><Link to="/demos/bakeries" target="_blank" rel="noopener noreferrer" onClick={closeMenu} role="menuitem">Bakeries &amp; Food Shops</Link></li>
                            </ul>
                        </li>
                        <li><NavLink to="/blog" className={({ isActive }) => isActive ? 'active-link' : ''} onClick={closeMenu}>Blog</NavLink></li>
                        <li><NavLink to="/faq" className={({ isActive }) => isActive ? 'active-link' : ''} onClick={closeMenu}>FAQ</NavLink></li>
                        <li><Link to="/contact" className="btn btn-primary header-cta" onClick={closeMenu}>Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
