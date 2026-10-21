import React from 'react';
import { Link } from 'react-router-dom';

const ShopifyConnector = () => {
    const plans = [
        {
            name: "Connector Core License",
            price: "$299",
            timeline: "1 week",
            tech: "Node.js / Python + Webhooks",
            features: [
                "Automated database-to-Shopify inventory sync",
                "Product catalog synchronization & price updates",
                "REST & GraphQL Admin API integration",
                "Automated error logging & email notifications",
                "Self-hosted Docker container setup"
            ],
            recommended: false
        },
        {
            name: "Bidirectional Sync Pro",
            price: "$499",
            timeline: "2 weeks",
            tech: "Node.js + Redis Queue + Supabase",
            features: [
                "Two-way real-time sync (Inventory, Orders, Customers)",
                "Shopify webhook event listener with automated retry queue",
                "Web-based admin dashboard for sync health monitoring",
                "Custom data mapping rules & attribute transformation",
                "Rate-limit safe bulk operation handling"
            ],
            recommended: true
        },
        {
            name: "Bespoke Enterprise Connector",
            price: "$799",
            timeline: "3 weeks",
            tech: "Custom Microservice + ERP Architecture",
            features: [
                "Full ERP / WMS integration (SAP, NetSuite, SQL, Airtable)",
                "Multi-store inventory synchronization",
                "Automated order fulfillment & tracking number pushes",
                "High-concurrency Redis event worker pipeline",
                "60-day enterprise maintenance & support SLA"
            ],
            recommended: false
        }
    ];

    return (
        <div className="service-page">
            <section
                className="page-header robot-page-header service-page-hero"
                style={{ '--service-hero-image': 'url(/assets/bg-network-1.jpg)' }}
                data-aos="fade-down"
            >
                <div className="container">
                    <span className="section-subtitle">Proprietary Software</span>
                    <h1 className="section-title reveal-text">NYMBLOC Shopify connector software</h1>
                    <p className="page-header-lead">
                        High-performance middleware that synchronizes inventory, orders, customer records, and product
                        catalogs between your external databases, ERPs, and Shopify stores in real time.
                    </p>
                </div>
            </section>

            <section className="section-padding robot-page-section" data-aos="fade-up">
                <div className="container">
                    <div className="service-intro-block">
                        <h2 className="section-title">Automate Store Syncing Without SaaS Subscription Lock-in</h2>
                        <p>
                            Growing e-commerce brands often struggle with manual data entry or expensive third-party SaaS connectors
                            that charge steep per-order transaction fees. The NYMBLOC Shopify Connector is a standalone, self-hosted
                            integration software suite. It establishes a resilient bridge between your custom backend, inventory database
                            (PostgreSQL, MySQL, Supabase, Airtable, or ERP), and Shopify's GraphQL Admin API.
                        </p>
                        <br />
                        <ul className="feature-list">
                            <li>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                Real-Time Bidirectional Sync for Products, Quantities &amp; Orders
                            </li>
                            <li>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                Resilient Webhook Queue with Automated Retry &amp; Dead-Letter Handlers
                            </li>
                            <li>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                100% Source Code Ownership — Zero Ongoing Transaction Fees
                            </li>
                            <li>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                Lightweight Docker Deployment for Cloud or On-Premise Servers
                            </li>
                        </ul>
                    </div>

                    <div className="pricing-header text-center" style={{ marginBottom: '60px' }}>
                        <span className="section-subtitle">Software Licensing &amp; Setup</span>
                        <h2 className="section-title">Select Your Connector Package</h2>
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
                                <Link to={`/checkout?service=ShopifyConnector&plan=${encodeURIComponent(plan.name)}`} className={`btn ${plan.recommended ? 'btn-primary' : 'btn-outline'} plan-select-btn`}>
                                    Select License
                                </Link>
                            </div>
                        ))}
                    </div>

                    <div className="service-intro-block" style={{ marginTop: '60px' }} data-aos="fade-up">
                        <h2 className="section-title">Software Architecture &amp; Licensing Policy</h2>
                        <p>Enterprise-grade software designed to fit your unique operational workflows:</p>
                        <br />
                        <ul className="feature-list">
                            <li>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                <strong>Perpetual Software License:</strong> You receive the complete source code and deployment scripts with no recurring monthly software royalties.
                            </li>
                            <li>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                <strong>Data Security &amp; Isolation:</strong> The software deploys inside your private cloud or on-premise infrastructure; your customer data never touches third-party servers.
                            </li>
                            <li>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                <strong>Prerequisites:</strong> Client provides external database credentials and Shopify private app / API access keys.
                            </li>
                            <li>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                <strong>Verification &amp; Support:</strong> Includes complete end-to-end sandbox sync verification and a 30-day post-deployment bug warranty.
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ShopifyConnector;
