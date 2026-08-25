import React from 'react';
import './Journey.css';

const JOURNEY_MILESTONES = [
  {
    step: 'A',
    stepNumber: '01',
    stepLabel: 'Phase 01',
    date: '24/12/2012',
    dateFormatted: '24 Dec 2012',
    year: '2012',
    title: 'Bhumi Puja of Temple',
    category: 'Sacred Foundation',
    badge: 'Foundation Ceremony',
    by: 'Priest Sri Chiranjeeb Mishra',
    byRole: 'Temple Priest',
    icon: 'bi-flower1',
    description: 'The sacred ground-breaking ritual and divine Bhumi Puja performed by priest Sri Chiranjeeb Mishra to sanctify the holy ground and initiate construction.',
    items: [],
    highlight: false,
  },
  {
    step: 'B',
    stepNumber: '02',
    stepLabel: 'Phase 02',
    date: '22/01/2017',
    dateFormatted: '22 Jan 2017',
    year: '2017',
    title: 'Pran Pratishta of Temple',
    category: 'Grand Consecration',
    badge: 'Divine Consecration',
    by: 'Revered Guruji Dr Chandrabhanu Satpathy Ji',
    byRole: 'Spiritual Master',
    icon: 'bi-sun-fill',
    description: 'The grand Pran Pratishta and sacred consecration of Sri Shirdi Sai Baba idol consecrated by Revered Guruji Dr. Chandrabhanu Satpathy Ji.',
    items: [],
    highlight: true,
  },
  {
    step: 'C',
    stepNumber: '03',
    stepLabel: 'Phase 03',
    date: '22/01/2017',
    dateFormatted: '22 Jan 2017',
    year: '2017',
    title: 'Consecration of Other Deities',
    category: 'Holy Sanctuaries',
    badge: 'Sacred Sanctuaries',
    by: 'Revered Guruji Dr Chandrabhanu Satpathy Ji',
    byRole: 'Spiritual Master',
    icon: 'bi-bank',
    description: 'Consecration of the holy abodes within the temple premises, consecrated by Revered Guruji Dr. Chandrabhanu Satpathy Ji:',
    items: [
      { name: 'Dwarkamai', sub: 'Sacred Dhuni & Shelter of Baba', icon: 'bi-fire' },
      { name: 'Gurusthana', sub: 'Holy Sanctum of the Sacred Neem', icon: 'bi-tree-fill' },
    ],
    highlight: false,
  },
  {
    step: 'D',
    stepNumber: '04',
    stepLabel: 'Phase 04',
    date: '22/01/2017',
    dateFormatted: '22 Jan 2017',
    year: '2017',
    title: 'Dedication of Facilities',
    category: 'Community Infrastructure',
    badge: 'Public Amenities',
    by: 'Revered Guruji Dr Chandrabhanu Satpathy Ji',
    byRole: 'Spiritual Master',
    icon: 'bi-building-check',
    description: 'Inauguration and dedication of essential pilgrim facilities and disaster-resilient infrastructure by Revered Guruji:',
    items: [
      { name: 'Cold Drinking Water', sub: 'Purified Continuous Water Supply', icon: 'bi-droplet-fill' },
      { name: 'Public Toilets', sub: 'Hygienic Sanitation Facilities', icon: 'bi-shield-check' },
      { name: 'Community Center Cum Cyclone Shelter', sub: 'Multi-purpose Civic Shelter', icon: 'bi-house-heart-fill' },
    ],
    highlight: false,
  },
  {
    step: 'E',
    stepNumber: '05',
    stepLabel: 'Ongoing Seva',
    date: 'Regular Healthcare',
    dateFormatted: 'Ongoing Healthcare',
    year: 'Welfare',
    title: 'Welfare Activities & Medical Camps',
    category: 'Humanitarian Care',
    badge: 'Welfare Seva',
    by: 'Apollo Hospital & Bhumika Eye Hospital',
    byRole: 'Partner Hospitals',
    icon: 'bi-heart-pulse-fill',
    description: 'Continuous health checkups, specialized diagnostic camps, and free eye care services organized regularly for the rural community:',
    items: [
      { name: 'Health camp by Apollo Hospital Bhubaneswar', sub: 'Multi-Specialty Health Screening', icon: 'bi-hospital-fill' },
      { name: 'Eye camp by Bhumika Eye Hospital', sub: 'Free Vision Testing & Eye Care', icon: 'bi-eye-fill' },
    ],
    highlight: true,
  },
];

const Journey = () => {
  return (
    <section className="journey-master-section position-relative">
      {/* Background Ambient Glows */}
      <div className="journey-master-overlay"></div>
      <div className="journey-radial-glow glow-top-left"></div>
      <div className="journey-radial-glow glow-bottom-right"></div>
      <div className="journey-radial-glow glow-center"></div>

      <div className="container journey-max-1200 position-relative z-3 py-4 py-lg-5">
        {/* Header Section */}
        <div className="row justify-content-center text-center mb-4 mb-lg-5">
          <div className="col-12 col-lg-10">
            <div className="journey-hero-badge mb-3">
              <span className="badge-sparkle"><i className="bi bi-stars"></i></span>
              <span className="badge-text">Our Sacred Milestones & Humanitarian Journey</span>
              <span className="badge-sparkle"><i className="bi bi-stars"></i></span>
            </div>

            <h2 className="journey-hero-title mb-3">
              Timeline of <span className="text-gold-gradient">Divine Milestones</span> & Seva
            </h2>

            <p className="journey-hero-subtitle mb-4">
              Tracing our journey from the foundational Bhumi Puja to the auspicious Pran Pratishta by Revered Guruji Dr. Chandrabhanu Satpathy Ji, dedicated civic amenities, and ongoing healthcare outreach.
            </p>
          </div>
        </div>

        {/* Vertical Timeline Structure */}
        <div className="vertical-timeline-wrapper position-relative">
          {/* Central Vertical Glowing Spine Line */}
          <div className="v-timeline-spine">
            <div className="v-timeline-spine-pulse"></div>
          </div>

          {/* Timeline Items List */}
          <div className="v-timeline-items">
            {JOURNEY_MILESTONES.map((item, index) => {
              const isEven = index % 2 === 1; // Left/Right alternating
              return (
                <div 
                  key={index} 
                  className={`v-timeline-row ${isEven ? 'row-right' : 'row-left'} ${item.highlight ? 'row-highlighted' : ''}`}
                >
                  {/* Central Node Marker on the Vertical Line */}
                  <div className="v-timeline-node-wrap">
                    <div className="v-node-halo"></div>
                    <div className="v-node-ring"></div>
                    <div className="v-node-orb">
                      <i className={`bi ${item.icon}`}></i>
                    </div>
                  </div>

                  {/* Date Badge Column on Opposite Side (Desktop) */}
                  <div className="v-timeline-date-side">
                    <div className="v-date-pill">
                      <i className="bi bi-calendar3 text-warning me-2"></i>
                      <span>{item.dateFormatted}</span>
                    </div>
                  </div>

                  {/* Content Card Side */}
                  <div className="v-timeline-card-side">
                    <div className="v-branch-connector"></div>
                    
                    <div className="v-card-glass">
                      {/* Top Accent Rim */}
                      <div className="v-card-accent-line"></div>

                      {/* Header Row */}
                      <div className="d-flex align-items-center justify-content-between mb-2 flex-wrap gap-2">
                        <span className="v-category-badge">{item.badge}</span>
                        <div className="v-mobile-date-tag d-lg-none">
                          <i className="bi bi-calendar-event text-warning me-1"></i>
                          <span>{item.dateFormatted}</span>
                        </div>
                      </div>

                      {/* Title */}
                      <h4 className="v-card-title mb-2">
                        {item.title}
                      </h4>

                      {/* Consecrated / Organized By Badge Box */}
                      {item.by && (
                        <div className="v-dignitary-box mb-3">
                          <div className="v-dignitary-icon">
                            <i className={item.byRole === 'Spiritual Master' ? 'bi bi-award-fill' : item.byRole === 'Partner Hospitals' ? 'bi bi-hospital' : 'bi bi-person-badge-fill'}></i>
                          </div>
                          <div className="v-dignitary-info">
                            <span className="v-dignitary-label">Conducted / Consecrated By:</span>
                            <span className="v-dignitary-name">{item.by}</span>
                          </div>
                        </div>
                      )}

                      {/* Description */}
                      <p className="v-card-desc mb-3">
                        {item.description}
                      </p>

                      {/* Sub-items / Sanctuaries / Facilities / Camps */}
                      {item.items && item.items.length > 0 && (
                        <div className="v-subitems-container pt-2">
                          <div className="v-subitems-label mb-2">
                            <i className="bi bi-stars text-warning me-1"></i> Key Highlights & Components
                          </div>
                          <div className="v-subitems-grid">
                            {item.items.map((sub, sIdx) => (
                              <div key={sIdx} className="v-subitem-chip">
                                <div className="v-subitem-icon">
                                  <i className={`bi ${sub.icon}`}></i>
                                </div>
                                <div className="v-subitem-texts">
                                  <span className="v-subitem-title">{sub.name}</span>
                                  {sub.sub && <span className="v-subitem-sub">{sub.sub}</span>}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        

      </div>

      
    </section>
  );
};

export default Journey;