import React from 'react';
import { Link } from 'react-router-dom';

const GraphicDesignIT = () => {
    const plans = [
        {
            name: "Starter Identity & IT Setup",
            price: "$199",
            timeline: "1 week",
            tech: "Figma + Vector + Cloud DNS",
            features: [
                "Brand identity kit & vector logo (SVG/PNG/PDF)",
                "Typography & color palette guidelines",
                "Corporate email & DNS setup (Google Workspace / M365)",
                "Domain security hygiene (SPF, DKIM, DMARC)",
                "Basic social media collateral pack"
            ],
            recommended: false
        },
        {
            name: "Brand & Cloud Infrastructure",
            price: "$349",
            timeline: "2 weeks",
            tech: "Figma + Cloud Server + WAF",
            features: [
                "Complete brand design system & UI/UX prototypes",
                "Marketing collateral (pitch decks, business cards, banners)",
                "Cloud server provisioning & secure configuration",
                "Automated offsite backup pipeline & monitoring",
                "SSL/TLS security & firewall optimization"
            ],
            recommended: true
        },
        {
            name: "Enterprise Design & IT Retainer",
            price: "$599",
            timeline: "2–3 weeks / Retainer",
            tech: "Multi-Cloud + Dedicated IT Support",
            features: [
                "Ongoing UI/UX & graphic design sprints",
                "Full IT infrastructure management & troubleshooting",
                "Multi-environment cloud setup (staging/production)",
                "Workstation & credential access governance",
                "Priority 24/7 technical incident support"
            ],
            recommended: false
        }
    ];

    return (
        <div className="service-page">
            <section
                className="page-header robot-page-header service-page-hero"
                style={{ '--service-hero-image': 'url(/assets/innovation.jpg)' }}
                data-aos="fade-down"
            >
                <div className="container">
                    <span className="section-subtitle">Service</span>
                    <h1 className="section-title reveal-text">Graphic design &amp; IT services</h1>
                    <p className="page-header-lead">
                        High-impact visual brand identities paired with dependable cloud infrastructure, corporate email
                        hygiene, and ongoing technical systems administration.
                    </p>
                </div>
            </section>

            <section className="section-padding robot-page-section" data-aos="fade-up">
                <div className="container">
                    <div className="service-intro-block">
                        <h2 className="section-title">Design Precision Meets Infrastructure Stability</h2>
                        <p>
                            Modern businesses need both compelling brand presentation and resilient technical operations.
                            We bridge the gap between creative visual design and enterprise IT administration—crafting logos,
                            brand systems, and UI/UX assets while ensuring your servers, domain DNS, corporate mailboxes, and
                            cloud environments remain secure and operational.
                        </p>
                        <br />
                        <ul className="feature-list">
                            <li>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                Vector Brand Identity &amp; UI/UX Prototyping in Figma
                            </li>
                            <li>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                Enterprise Cloud Setup (AWS, DigitalOcean, Google Cloud)
                            </li>
                            <li>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                Corporate Email Security (SPF, DKIM, DMARC Deliverability)
                            </li>
                            <li>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                Automated Cloud Backups &amp; Proactive Uptime Monitoring
                            </li>
                        </ul>
                    </div>

                    <div className="pricing-header text-center" style={{ marginBottom: '60px' }}>
                        <span className="section-subtitle">Pricing Plans</span>
                        <h2 className="section-title">Choose Your Service Plan</h2>
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
                                <Link to={`/checkout?service=GraphicDesignIT&plan=${encodeURIComponent(plan.name)}`} className={`btn ${plan.recommended ? 'btn-primary' : 'btn-outline'} plan-select-btn`}>
                                    Select Plan
                                </Link>
                            </div>
                        ))}
                    </div>

                    <div className="service-intro-block" style={{ marginTop: '60px' }} data-aos="fade-up">
                        <h2 className="section-title">Deliverables &amp; Scope Governance</h2>
                        <p>Clear boundaries and documented deliverables ensure transparent execution without unexpected fees:</p>
                        <br />
                        <ul className="feature-list">
                            <li>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                <strong>Complete Asset Ownership:</strong> Full commercial copyright transfer for all vector logos, Figma design files, and brand guidelines upon completion.
                            </li>
                            <li>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                <strong>Direct Infrastructure Control:</strong> Cloud accounts, domain registrars, and email suites are configured under your organization's administrative profile.
                            </li>
                            <li>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                <strong>Prerequisites &amp; Licensing:</strong> External software subscription fees (e.g. Google Workspace, Microsoft 365, AWS cloud compute) are billed directly to client accounts.
                            </li>
                            <li>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                <strong>Support &amp; Revision Rounds:</strong> Design packages include 2 rounds of design revisions; IT setups include a 30-day post-launch technical support guarantee.
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default GraphicDesignIT;
