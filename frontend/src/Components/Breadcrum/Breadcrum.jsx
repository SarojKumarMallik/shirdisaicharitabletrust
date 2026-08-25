import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Breadcrum.css';


// Default spiritual background image
const DEFAULT_BG_IMAGE = 'https://images.unsplash.com/photo-1609946782200-a6164a2cb457?auto=format&fit=crop&q=80&w=1920';

// Route configuration mapping for default titles, subtitles & parent links
const ROUTE_CONFIG = {
  '/about': {
    title: 'About Us',
    subtitle: 'Discover our sacred journey, vision, and mission of selfless service to humanity.',
    bgImage: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=1920',
  },
  '/ourteam': {
    title: 'Our Team & Leadership',
    subtitle: 'Meet the dedicated trustees and compassionate minds behind our charitable trust.',
    bgImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1920',
  },
  '/our-work': {
    title: 'Our Welfare Initiatives',
    subtitle: 'Explore our charitable activities, food distribution drives, and community outreach.',
    bgImage: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1920',
  },
  '/event': {
    title: 'Events & Celebrations',
    subtitle: 'Join our spiritual gatherings, festival celebrations, and community events.',
    bgImage: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1920',
  },
  '/news': {
    title: 'News',
    subtitle: 'Stay updated with our latest press releases, stories, and trust updates.',
    bgImage: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=1920',
  },
  '/gallery': {
    title: 'Gallery',
    subtitle: 'Glimpses of divine darshan, trust initiatives, and community service.',
    bgImage: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&q=80&w=1920',
  },
  '/contact': {
    title: 'Contact Us',
    subtitle: 'Reach out to Sri Shirdi Sai Charitable Trust for support, inquiries, or visits.',
    bgImage: 'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&q=80&w=1920',
  },
  '/contact': {
    title: 'Donate & Support',
    subtitle: 'Your generous donations enable us to feed the needy and empower communities.',
    bgImage: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb0?auto=format&fit=crop&q=80&w=1920',
  },
};

/**
 * SEO-Optimized Dynamic Breadcrumb Header Component
 *
 * Features:
 * - Dynamic route matching & fallback formatting
 * - Full Schema.org BreadcrumbList Microdata + JSON-LD injection for Search Engines (SEO)
 * - Rich background image with linear gradient dark overlay
 * - All content left-aligned
 * - Support for custom props: title, subtitle, parent, parentPath, items, bgImage
 */
const Breadcrum = ({ title, subtitle, parent, parentPath, items, bgImage }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://shirdisaicharitabletrust.org';

  // Retrieve route metadata default based on current URL
  const matchedRoute = ROUTE_CONFIG[currentPath] || {};

  // Formulate final Page Title, Subtitle, & Background Image
  const pageTitle = title || matchedRoute.title || formatPathTitle(currentPath);
  const pageSubtitle = subtitle || matchedRoute.subtitle || '';
  const bannerBgImage = bgImage || matchedRoute.bgImage || DEFAULT_BG_IMAGE;

  // Formulate Breadcrumb Items list dynamically
  let breadcrumbItems = [];

  if (items && Array.isArray(items) && items.length > 0) {
    breadcrumbItems = items;
  } else {
    breadcrumbItems = [{ label: 'Home', path: '/' }];

    const parentLabel = parent || matchedRoute.parent;
    const parentRoute = parentPath || matchedRoute.parentPath;

    if (parentLabel && parentRoute) {
      breadcrumbItems.push({ label: parentLabel, path: parentRoute });
    }

    breadcrumbItems.push({ label: pageTitle });
  }

  // Inject Schema.org BreadcrumbList JSON-LD into DOM for SEO search engine indexing
  useEffect(() => {
    const jsonLdData = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': breadcrumbItems.map((item, idx) => ({
        '@type': 'ListItem',
        'position': idx + 1,
        'name': item.label,
        'item': item.path ? `${baseUrl}${item.path}` : `${baseUrl}${currentPath}`,
      })),
    };

    const scriptId = 'seo-breadcrumb-jsonld';
    let existingScript = document.getElementById(scriptId);

    if (!existingScript) {
      existingScript = document.createElement('script');
      existingScript.id = scriptId;
      existingScript.type = 'application/ld+json';
      document.head.appendChild(existingScript);
    }

    existingScript.textContent = JSON.stringify(jsonLdData);

    return () => {
      const scriptToRemove = document.getElementById(scriptId);
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [breadcrumbItems, currentPath, baseUrl]);

  return (
    <section
      className="breadcrum-hero-section text-start"
      style={{ backgroundImage: `url(${bannerBgImage})` }}
    >
      {/* Dark Translucent Overlay & Glow */}
      <div className="breadcrum-overlay"></div>
      <div className="breadcrum-bg-glow"></div>

      <div className="container position-relative z-2 py-4 py-md-5">
        <div className="row">
          {/* Entire Content Left-Aligned */}
          <div className="col-12 col-lg-10 text-start">
            {/* Top Left: SEO Breadcrumb Navigation Pill */}
            <nav aria-label="breadcrumb" className="mb-3">
              <ol
                itemScope
                itemType="https://schema.org/BreadcrumbList"
                className="breadcrum-list d-inline-flex align-items-center flex-wrap m-0"
              >
                {breadcrumbItems.map((item, index) => {
                  const isLast = index === breadcrumbItems.length - 1;
                  const itemUrl = item.path ? `${baseUrl}${item.path}` : `${baseUrl}${currentPath}`;

                  return (
                    <li
                      key={index}
                      itemProp="itemListElement"
                      itemScope
                      itemType="https://schema.org/ListItem"
                      className={`breadcrum-item ${isLast ? 'active' : ''}`}
                    >
                      {index > 0 && (
                        <i className="bi bi-chevron-right breadcrum-separator mx-2"></i>
                      )}

                      {index === 0 && (
                        <i className="bi bi-house-door-fill me-1 text-warning"></i>
                      )}

                      {item.path && !isLast ? (
                        <Link
                          to={item.path}
                          itemProp="item"
                          className="breadcrum-link"
                        >
                          <span itemProp="name">{item.label}</span>
                        </Link>
                      ) : (
                        <span itemProp="name" className="breadcrum-current">
                          {item.label}
                        </span>
                      )}

                      <meta itemProp="position" content={String(index + 1)} />
                      {itemUrl && <meta itemProp="item" content={itemUrl} />}
                    </li>
                  );
                })}
              </ol>
            </nav>

            {/* Main Left-Aligned H1 Title for SEO */}
            <h1 className="breadcrum-title text-start">{pageTitle}</h1>


          </div>
        </div>
      </div>


    </section>
  );
};

// Fallback helper to format route path name (e.g. "/our-services" -> "Our Services")
function formatPathTitle(pathname) {
  if (!pathname || pathname === '/') return 'Home';
  const cleanPath = pathname.replace(/^\/+|\/+$/g, '');
  return cleanPath
    .split(/[-_/]+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export default Breadcrum;