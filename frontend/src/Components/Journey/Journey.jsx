import React from 'react';
import './Journey.css';

const JOURNEY_MILESTONES = [
  {
    year: '2010',
    title: 'Trust Foundation',
    subtitle: 'Kendrapara, Odisha',
    description: 'Founded with weekly food distribution drives & selfless care.',
    icon: 'bi-brightness-high-fill',
    badge: 'Inception',
  },
  {
    year: '2014',
    title: 'Medical Relief',
    subtitle: 'Free Health Support',
    description: 'Launched free rural medical camps & medicine distribution.',
    icon: 'bi-heart-pulse-fill',
    badge: 'Healthcare',
  },
  {
    year: '2018',
    title: 'Education Aid',
    subtitle: 'Child Support',
    description: 'Provided free books, uniforms & scholarships to children.',
    icon: 'bi-mortarboard-fill',
    badge: 'Education',
  },
  {
    year: '2021',
    title: 'Disaster Support',
    subtitle: 'Crisis Relief',
    description: 'Emergency food & relief kits during Covid-19 & cyclones.',
    icon: 'bi-shield-fill-check',
    badge: 'Relief Work',
  },
  {
    year: '2024',
    title: '500+ Volunteers',
    subtitle: 'Odisha Network',
    description: 'Expanded active volunteer network & digital impact tracking.',
    icon: 'bi-people-fill',
    badge: 'Community',
  },
  {
    year: 'Present',
    title: 'Care Infrastructure',
    subtitle: 'Future Horizon',
    description: 'Building permanent Annadaanam halls & empowerment centers.',
    icon: 'bi-buildings-fill',
    badge: 'Vision 2026+',
  },
];

const Journey = () => {
  return (
    <section className="journey-premium-section text-center position-relative">
      {/* Radiant Background Glows */}
      <div className="journey-bg-overlay"></div>
      <div className="journey-bg-glow-left"></div>
      <div className="journey-bg-glow-right"></div>

      <div className="container position-relative z-2 py-3 py-md-4">
        {/* Header Section */}
        <div className="row justify-content-center text-center mb-3">
          <div className="col-lg-8">
            <div className="journey-premium-badge mb-2">
              <i className="bi bi-compass-fill text-warning me-2"></i>
              <span>Our Sacred Journey Since 2010</span>
            </div>
            <h2 className="journey-premium-title mb-1">
              15+ Years of Selfless Impact & Community Welfare
            </h2>
            <p className="journey-premium-desc mb-0">
              Tracing our path of service, faith, and dedication from 2010 to present day.
            </p>
          </div>
        </div>

        {/* Modern Dot-Dot Horizontal Connector Track */}
        <div className="journey-track-container">
          {/* Dashed Gold Dot Connector Line */}
          <div className="journey-dot-line"></div>

          {/* Grid Milestones */}
          <div className="row g-2 g-lg-3 justify-content-center position-relative z-2">
            {JOURNEY_MILESTONES.map((item, index) => (
              <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-2">
                <div className="journey-premium-card">
                  {/* Dot Node Circle */}
                  <div className="node-wrapper mb-2">
                    <div className="node-outer-ring"></div>
                    <div className="node-icon-circle">
                      <i className={`bi ${item.icon}`}></i>
                    </div>
                    <span className="node-year-badge">{item.year}</span>
                  </div>

                  {/* Glassmorphic Card Content */}
                  <div className="card-glass-body">
                    <div className="card-top-accent"></div>
                    <span className="card-badge-pill mb-1">{item.badge}</span>
                    <h5 className="card-item-title mb-1">{item.title}</h5>
                    <div className="card-item-sub mb-1">{item.subtitle}</div>
                    <p className="card-item-desc mb-0">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Bottom Line */}
      <div className="journey-bottom-accent"></div>
    </section>
  );
};

export default Journey;