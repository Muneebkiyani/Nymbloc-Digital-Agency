import React from 'react';
import { Link } from 'react-router-dom';

const ShopifyDevelopment = () => {
    const plans = [
        {
            name: "Starter Shopify Store",
            price: "$249",
            timeline: "1 week",
            tech: "Shopify Liquid + Responsive Theme",
            features: [
                "Shopify store setup & configuration",
                "Responsive theme customization",
                "Product catalog setup (up to 15 products)",
                "Payment gateways & tax/shipping setup",
                "Mobile checkout optimization"
            ],
            recommended: false
        },
        {
            name: "Custom Growth Store",
            price: "$449",
            timeline: "2 weeks",
            tech: "Custom Liquid + App Extensions",
            features: [
                "Bespoke Shopify theme design & development",
                "High-converting custom product page layouts",
                "Slide-out cart drawer with dynamic upsells",
                "Email marketing integration (Klaviyo / Omnisend)",
                "Core Web Vitals & speed optimization"
            ],
            recommended: true
        },
        {
            name: "Advanced Shopify Platform",
            price: "$699",
            timeline: "3 weeks",
            tech: "Shopify Plus / Custom API Integrations",
            features: [
                "Full store migration (from WooCommerce / Magento)",
                "International markets & multi-currency setup",
                "Custom liquid sections & metafield architectures",
                "Advanced inventory & wholesale discount logic",
                "Complete 301 URL redirect map for SEO retention"
            ],
            recommended: false
        }
    ];

    return (
        <div className="service-page">
            <section
                className="page-header robot-page-header service-page-hero"
                style={{ '--service-hero-image': 'url(/assets/infrastructure.jpg)' }}
                data-aos="fade-down"
            >
                <div className="container">
                    <span className="section-subtitle">Service</span>
                    <h1 className="section-title reveal-text">Shopify store design &amp; development</h1>
                    <p className="page-header-lead">
                        High-converting, mobile-first Shopify and Shopify Plus storefronts engineered for sub-2-second
                        load times, frictionless checkouts, and scalable e-commerce revenue.
                    </p>
                </div>
            </section>

            <section className="section-padding robot-page-section" data-aos="fade-up">
                <div className="container">
                    <div className="service-intro-block">
                        <h2 className="section-title">E-Commerce Experiences Built for Conversions</h2>
                        <p>
                            A successful Shopify store requires more than installing a pre-made template. We architect
                            tailored e-commerce experiences with bespoke Liquid themes, optimized product merchandising layouts,
                            streamlined cart drawers, and strategic app ecosystems that minimize buyer friction and drive
                            higher average order value (AOV).
                        </p>
                        <br />
                        <ul className="feature-list">
                            <li>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                Custom Liquid Theme Architecture &amp; Modular Blocks
                            </li>
                            <li>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                Mobile-First Checkout &amp; Conversion Rate Optimization (CRO)
                            </li>
                            <li>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                Clean App Integration (Klaviyo, Yotpo, ReCharge, Gorgias)
                            </li>
                            <li>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                Frictionless Migration with 100% SEO Redirect Protection
                            </li>
                        </ul>
                    </div>

                    <div className="pricing-header text-center" style={{ marginBottom: '60px' }}>
                        <span className="section-subtitle">Pricing Plans</span>
                        <h2 className="section-title">Choose Your Store Build Plan</h2>
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
                                <Link to={`/checkout?service=Shopify&plan=${encodeURIComponent(plan.name)}`} className={`btn ${plan.recommended ? 'btn-primary' : 'btn-outline'} plan-select-btn`}>
                                    Select Plan
                                </Link>
                            </div>
                        ))}
                    </div>

                    <div className="service-intro-block" style={{ marginTop: '60px' }} data-aos="fade-up">
                        <h2 className="section-title">Shopify Deliverables &amp; Governance Policy</h2>
                        <p>We provide full transparency and code ownership so your team can manage sales with confidence:</p>
                        <br />
                        <ul className="feature-list">
                            <li>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                <strong>Theme Code Ownership:</strong> Complete ownership of all custom Liquid templates, CSS, and component files transferred upon project launch.
                            </li>
                            <li>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                <strong>Performance &amp; Speed Guarantee:</strong> Lightweight code structure adhering to Shopify's performance guidelines and Core Web Vitals targets.
                            </li>
                            <li>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                <strong>Subscription &amp; App Fees:</strong> Monthly Shopify platform plans, custom domain fees, and third-party app subscriptions are paid directly via the client's billing account.
                            </li>
                            <li>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                <strong>Training &amp; Warranty:</strong> Includes personalized video walkthroughs for your operations team and a 30-day post-launch bug remediation warranty.
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ShopifyDevelopment;
