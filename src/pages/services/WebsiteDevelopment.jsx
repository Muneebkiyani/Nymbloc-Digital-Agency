import React from 'react';
import { Link } from 'react-router-dom';

const WebsiteDevelopment = () => {
    const plans = [
        {
            name: "Starter Website",
            price: "$199",
            timeline: "1 week",
            tech: "React + basic backend",
            features: [
                "React-based website",
                "3–5 pages",
                "Mobile responsive design",
                "Basic animations",
                "Contact form integration"
            ],
            recommended: false
        },
        {
            name: "Business Website",
            price: "$299",
            timeline: "2 weeks",
            tech: "React + Laravel / Supabase",
            features: [
                "React / Next.js website",
                "6–10 pages",
                "API integrations",
                "Dynamic content (CMS/backend)",
                "Performance optimization"
            ],
            recommended: true
        },
        {
            name: "Advanced Website",
            price: "$399",
            timeline: "2 weeks",
            tech: "React + Laravel + SQL/NoSQL",
            features: [
                "High-end React / Next.js",
                "10+ pages or complex UI",
                "Dashboard / admin panel",
                "Authentication system",
                "Advanced integrations"
            ],
            recommended: false
        }
    ];

    return (
        <div className="service-page">
            <section
                className="page-header robot-page-header service-page-hero"
                style={{ '--service-hero-image': 'url(/assets/hero.jpg)' }}
                data-aos="fade-down"
            >
                <div className="container">
                    <span className="section-subtitle">Service</span>
                    <h1 className="section-title reveal-text">Website development</h1>
                    <p className="page-header-lead">
                        Fast, clear marketing sites and web experiences—structured so visitors understand your offer and
                        can act quickly.
                    </p>
                </div>
            </section>

            <section className="section-padding robot-page-section" data-aos="fade-up">
                <div className="container">
                    <div className="service-intro-block">
                        <h2 className="section-title">Modern Web Solutions</h2>
                        <p>We build high-performance, responsive websites using the latest technologies. Whether you need a simple brand presence or a complex business platform, we deliver excellence in record time.</p>
                        <br />
                        <ul className="feature-list">
                            <li>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                React & Next.js Experts
                            </li>
                            <li>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                SEO & Speed Optimized
                            </li>
                            <li>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                Custom API Integrations
                            </li>
                        </ul>
                    </div>

                    <div className="pricing-header text-center" style={{ marginBottom: '60px' }}>
                        <span className="section-subtitle">Pricing Plans</span>
                        <h2 className="section-title">Choose Your Plan</h2>
                    </div>

                    <div className="pricing-grid">
                        {plans.map((plan, index) => (
                            <div key={index} className={`pricing-card ${plan.recommended ? 'recommended' : ''}`} data-aos="fade-up" data-aos-delay={index * 100}>
                                {plan.recommended && <div className="recommended-tag">Most Popular</div>}
                                <h3 className="plan-name">{plan.name}</h3>
                                <div className="plan-price">{plan.price}</div>
                                <div style={{ marginBottom: '20px', fontSize: '0.9rem', color: 'var(--text-light)', fontWeight: '700' }}>
                                    Timeline: {plan.timeline}
                                </div>
                                <ul className="plan-features">
                                    {plan.features.map((feature, fIndex) => (
                                        <li key={fIndex}>
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                            {feature}
                                        </li>
                                    ))}
                                    <li className="plan-tech-line">
                                        Tech: {plan.tech}
                                    </li>
                                </ul>
                                <Link to={`/checkout?service=Website&plan=${encodeURIComponent(plan.name)}`} className={`btn ${plan.recommended ? 'btn-primary' : 'btn-outline'} plan-select-btn`}>
                                    Select Plan
                                </Link>
                            </div>
                        ))}
                    </div>

                    <div className="service-intro-block" style={{ marginTop: '60px' }} data-aos="fade-up">
                        <h2 className="section-title">Deliverables & Scope Boundaries</h2>
                        <p>We believe in upfront, transparent scoping so you know precisely what is included in every website sprint:</p>
                        <br />
                        <ul className="feature-list">
                            <li>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                <strong>Full Code Ownership:</strong> 100% transfer of custom source code, repository access, and production deployment scripts upon final milestone sign-off.
                            </li>
                            <li>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                <strong>Technical Standards:</strong> Built for sub-2-second mobile load times, semantic HTML5 hierarchy, and Core Web Vitals compliance.
                            </li>
                            <li>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                <strong>Prerequisites & Third Parties:</strong> Domain registration, cloud hosting, and third-party API fees are maintained directly on client accounts.
                            </li>
                            <li>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                <strong>Warranty & Support:</strong> Includes 2 rounds of structured staging review revisions and a 30-day post-launch defect warranty.
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WebsiteDevelopment;
