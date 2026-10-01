import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import AdSense from '../components/AdSense';
import { BLOG_COVER_FALLBACK_URL } from '../data/blogCovers.js';
import { getPostBySlug } from '../data/blogPosts';

/** In-article ad: after 2nd paragraph, or after 1st if only one (per AdSense guidance). */
const IN_ARTICLE_AD_SLOT = '1893873079';

function renderSection(section, index) {
    const delay = Math.min(index * 35, 210);
    if (section.type === 'p') {
        return (
            <p key={index} className="article-p">
                {section.text}
            </p>
        );
    }
    if (section.type === 'h2') {
        return (
            <h2 key={index} className="article-h2" data-aos="fade-up" data-aos-delay={delay}>
                {section.text}
            </h2>
        );
    }
    if (section.type === 'ul') {
        return (
            <ul key={index} className="article-ul" data-aos="fade-up" data-aos-delay={delay}>
                {section.items.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        );
    }
    return null;
}

function renderArticleBody(sections) {
    const pIndices = sections
        .map((s, i) => (s.type === 'p' ? i : -1))
        .filter((i) => i >= 0);
    const insertAfter =
        pIndices.length >= 2 ? pIndices[1] : pIndices.length === 1 ? pIndices[0] : -1;

    const nodes = [];
    sections.forEach((section, index) => {
        nodes.push(renderSection(section, index));
        if (insertAfter >= 0 && index === insertAfter) {
            nodes.push(
                <div
                    key="article-in-article-ad"
                    className="article-in-article-ad"
                    aria-label="Advertisement"
                >
                    <p className="article-ad-label">Advertisement</p>
                    <AdSense adSlot={IN_ARTICLE_AD_SLOT} variant="in-article" />
                </div>
            );
        }
    });
    return nodes;
}

const BlogPost = () => {
    const { slug } = useParams();
    const post = slug ? getPostBySlug(slug) : undefined;
    const [heroFallbackSlug, setHeroFallbackSlug] = useState(null);
    const heroSrc =
        post && heroFallbackSlug === post.slug ? BLOG_COVER_FALLBACK_URL : (post?.coverImage ?? '');

    if (!post) {
        return (
            <>
                <section className="page-header robot-page-header page-header-simple" data-aos="fade-down">
                    <div className="container">
                        <h1 className="section-title">Article not found</h1>
                        <p className="page-header-lead">
                            That post does not exist or the link is outdated.
                        </p>
                        <Link to="/blog" className="btn btn-primary" style={{ marginTop: '1.5rem' }}>
                            Back to blog
                        </Link>
                    </div>
                </section>
            </>
        );
    }

    const heroBgStyle = {
        '--article-hero-bg': `url("${String(heroSrc).replace(/"/g, '%22')}")`,
    };

    return (
        <>
            <article itemScope itemType="https://schema.org/Article">
                <section
                    className="page-header robot-page-header page-header-simple article-page-hero article-hero-has-bg"
                    style={heroBgStyle}
                    data-aos="fade-down"
                >
                    <div className="article-hero-bg-layer" aria-hidden="true" />
                    <div className="article-hero-scrim" aria-hidden="true" />
                    <div className="container">
                        <div className="article-hero-copy">
                            <p className="article-breadcrumb">
                                <Link to="/blog">Blog</Link>
                                <span aria-hidden> / </span>
                                <span>{post.readTime}</span>
                            </p>
                            <h1 className="section-title article-title" itemProp="headline">
                                {post.title}
                            </h1>
                            <p className="page-header-lead article-deck" itemProp="description">
                                {post.excerpt}
                            </p>
                            <div className="article-meta-row">
                                <div className="article-author-byline" itemProp="author" itemScope itemType="https://schema.org/Person">
                                    <span className="byline-avatar" aria-hidden="true">NB</span>
                                    <div className="byline-details">
                                        <span className="byline-name" itemProp="name">{post.author?.name || 'Nymbloc Technical Team'}</span>
                                        <span className="byline-role" itemProp="jobTitle">{post.author?.role || 'Web Strategy & Engineering'}</span>
                                    </div>
                                </div>
                                <time
                                    className="article-published"
                                    dateTime={post.date}
                                    itemProp="datePublished"
                                >
                                    {new Date(post.date + 'T12:00:00').toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric',
                                    })}
                                </time>
                            </div>
                            <meta itemProp="dateModified" content={post.date} />
                            <div itemProp="publisher" itemScope itemType="https://schema.org/Organization" style={{ display: 'none' }}>
                                <meta itemProp="name" content="NYMBLOC" />
                                <meta itemProp="url" content="https://nymbloc.com" />
                            </div>
                            <p className="article-hero-photo-credit">
                                Photo: {post.coverAlt}{' '}
                                <span className="article-hero-credit-source">
                                    (
                                    <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer">
                                        Unsplash
                                    </a>
                                    )
                                </span>
                            </p>
                        </div>
                    </div>
                    <img
                        src={heroSrc}
                        alt={post.coverAlt}
                        itemProp="image"
                        width={1200}
                        height={675}
                        className="article-hero-schema-img"
                        loading="eager"
                        decoding="async"
                        fetchPriority="high"
                        onError={() => {
                            if (post.slug && heroFallbackSlug !== post.slug) {
                                setHeroFallbackSlug(post.slug);
                            }
                        }}
                    />
                </section>

                <section className="section-padding robot-page-section article-body-section" data-aos="fade-up">
                    <div className="container article-container">
                        <div className="article-content" itemProp="articleBody">
                            {renderArticleBody(post.sections)}
                        </div>

                        {/* Author & Editorial Review Box (E-E-A-T) */}
                        <div className="article-author-card" data-aos="fade-up">
                            <div className="author-card-header">
                                <div className="author-card-avatar" aria-hidden="true">NB</div>
                                <div className="author-card-title-group">
                                    <span className="author-card-eyebrow">Editorial & Technical Standards</span>
                                    <h3 className="author-card-name">Written & Reviewed by NYMBLOC Engineering</h3>
                                    <p className="author-card-role">Digital Strategy, Full-Stack Architecture & Performance</p>
                                </div>
                            </div>
                            <p className="author-card-bio">
                                This guide was authored and reviewed by senior engineers and consultants at NYMBLOC. 
                                We specialize in high-performance React architectures, accessible UI systems, and conversion-focused WordPress platforms. 
                                Our content is grounded in real-world deployment data, W3C standards, and Google Search Central guidelines.
                            </p>
                            <div className="author-card-trust-badges">
                                <span className="trust-badge">✓ Technically Verified</span>
                                <span className="trust-badge">✓ Updated for 2026</span>
                                <span className="trust-badge">✓ Independent Editorial Analysis</span>
                            </div>
                        </div>

                        <div className="article-footer-cta" data-aos="fade-up">
                            <h2 className="article-h2">Need help with your site?</h2>
                            <p className="article-p">
                                We build and maintain websites, applications, and WordPress platforms for growing
                                businesses. Share your goals on our contact page and we will respond within one
                                business day.
                            </p>
                            <Link to="/contact" className="btn btn-primary">
                                Contact NYMBLOC
                            </Link>
                        </div>
                    </div>
                </section>
            </article>
        </>
    );
};

export default BlogPost;
