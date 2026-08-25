import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Visiondesc.css';

import relief from '../../assets/relief.png';
import health from '../../assets/health.png';
import education from '../../assets/education.png';
import hero1 from '../../assets/hero1.png';

const VISION_DIMENSIONS_DATA = [
  {
    id: 'zero-hunger',
    title: 'Sustained Zero-Hunger Ecosystem',
    tag: 'Long-term Annadanam',
    icon: 'bi-shield-heart',
    image: relief,
    desc: 'Establishing continuous, automated community kitchens and mobile Annadanam vans ensuring no individual goes to bed hungry within the district.',
    targetLabel: 'Vision Target',
    targetVal: '100,000+ Meals/Year'
  },
  {
    id: 'health-sanctuary',
    title: 'Integrated Rural Health Sanctuary',
    tag: 'Holistic Healthcare',
    icon: 'bi-hospital-fill',
    image: health,
    desc: 'Setting up permanent subsidized diagnostic centers, ambulance emergency networks, and routine telemedicine consultations for rural patients.',
    targetLabel: 'Vision Target',
    targetVal: 'Permanent Health Center'
  },
  {
    id: 'value-education',
    title: 'Center of Knowledge & Moral Ethics',
    tag: 'Education & Empowerment',
    icon: 'bi-book-half',
    image: education,
    desc: 'Creating free digital study libraries, computer training labs, and vocational centers to impart career skills with spiritual moral values.',
    targetLabel: 'Vision Target',
    targetVal: '1,000+ Young Leaders'
  },
  {
    id: 'spiritual-haven',
    title: 'Spiritual Haven & Peace Sanctuary',
    tag: 'Faith & Harmony',
    icon: 'bi-peace-fill',
    image: hero1,
    desc: 'Expanding Dwarkamai and Gurusthana at Basantapur as a universal sanctuary of prayer, meditation, interfaith harmony, and devotional satsang.',
    targetLabel: 'Vision Target',
    targetVal: 'Universal Sanctuary'
  }
];

const GUIDING_TENETS_DATA = [
  {
    title: 'Shraddha',
    odia: 'ଶ୍ରଦ୍ଧା (Unwavering Devotion & Faith)',
    icon: 'bi-patch-check-fill',
    desc: 'Cultivating complete faith in the Supreme and unselfish love for humanity, giving us the strength to serve without expectation of reward.'
  },
  {
    title: 'Saburi',
    odia: 'ସବୁରୀ (Patience & Compassion)',
    icon: 'bi-heart-half',
    desc: 'Practicing calm endurance, perseverance, and deep empathy to overcome adversity and stay dedicated to uplifting the destitute.'
  },
  {
    title: 'Vasudhaiva Kutumbakam',
    odia: 'ବସୁଧୈବ କୁଟୁମ୍ବକମ୍ (World as One Family)',
    icon: 'bi-globe-asia-australia',
    desc: 'Recognizing that all beings are part of one divine household, transcending boundaries of religion, race, and status.'
  }
];

const ROADMAP_STEPS = [
  {
    phase: 'Phase 1 • 2024 - 2026',
    title: 'Expansion of Seva Infrastructure',
    desc: 'Scaling daily Annadanam capacity, launching mobile food units, and increasing free diagnostic medical check-ups in neighboring villages.'
  },
  {
    phase: 'Phase 2 • 2026 - 2028',
    title: 'Education & Community Skill Hubs',
    desc: 'Establishing rural computer literacy centers, tailoring & skill development workshops for women, and expanding scholarship coverage.'
  },
  {
    phase: 'Phase 3 • 2028 - 2030',
    title: 'Holistic Charitable Care Complex',
    desc: 'Constructing a permanent charitable healthcare dispensary, spiritual meditation center, and permanent student support facility.'
  }
];

const Visiondesc = () => {
  const [isEnglishQuote, setIsEnglishQuote] = useState(false);

  return (
    <section className="visiondesc-section">
      {/* Background Ambient Glows */}
      <div className="visiondesc-glow visiondesc-glow-1"></div>
      <div className="visiondesc-glow visiondesc-glow-2"></div>

      <div className="container position-relative z-2">
        {/* Section Intro Header */}
        <div className="text-center max-w-900 mx-auto mb-5">
          <div className="visiondesc-badge mb-3">
            <i className="bi bi-eye-fill text-warning"></i>
            <span>ASPIRATION & STRATEGIC HORIZONS</span>
          </div>

          <h2 className="visiondesc-main-title">
            ENVISIONING A FUTURE OF <span className="visiondesc-highlight">DIGNITY, PEACE & UNIVERSAL LOVE</span>
          </h2>

          <p className="visiondesc-lead-text">
            We envision an enlightened society where poverty, sickness, and despair are transformed into hope, health, and holistic well-being through Bhagwan Sri Shirdi Sai Baba's timeless grace and compassionate human action.
          </p>
        </div>

        {/* Central Grand Vision Statement Card */}
        <div className="vision-statement-banner mb-5">
          <div className="row align-items-center g-4">
            <div className="col-lg-8">
              <div className="d-flex align-items-center gap-2 mb-3">
                <span className="vision-banner-badge">
                  <i className="bi bi-compass-fill text-warning me-1"></i> Our Strategic Vision for 2030
                </span>
              </div>

              <h3 className="vision-statement-heading mb-3">
                "To build a compassionate, resilient, and spiritually awakened society where no one is left hungry, destitute, or without medical care, and every child is empowered with knowledge."
              </h3>

              <p className="vision-statement-subtext mb-0">
                Rooted at Sai Temple Basantapur, Kendrapara, our spiritual mission aspires to become a universal beacon of selfless service, peace, and spiritual transformation across Odisha.
              </p>
            </div>

            <div className="col-lg-4 text-center text-lg-end">
              <div className="d-flex flex-column flex-sm-row flex-lg-column gap-3 justify-content-center justify-content-lg-end">
                <Link to="/contact" className="btn-vision-primary justify-content-center">
                  <i className="bi bi-heart-fill"></i> Be Part of the Vision
                </Link>
                <Link to="/about" className="btn-vision-outline justify-content-center">
                  <i className="bi bi-info-circle"></i> Learn About Us
                </Link>
              </div>
            </div>
          </div>
        </div>

      

        {/* Guiding Spiritual Tenets */}
        <div className="vision-tenets-section mb-5">
          <div className="text-center max-w-900 mx-auto mb-4">
            <div className="visiondesc-badge mb-2">
              <i className="bi bi-flower1 text-warning"></i>
              <span>DIVINE ETHOS</span>
            </div>
            <h3 className="visiondesc-main-title" style={{ fontSize: '1.75rem' }}>
              Guiding Spiritual <span className="visiondesc-highlight">Tenets</span>
            </h3>
            <p className="visiondesc-lead-text m-0">
              The foundational philosophical pillars given by Bhagwan Sri Shirdi Sai Baba that anchor all our future endeavors.
            </p>
          </div>

          <div className="row g-4">
            {GUIDING_TENETS_DATA.map((tenet, idx) => (
              <div key={idx} className="col-md-4">
                <div className="tenet-card-custom">
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <i className={`bi ${tenet.icon} tenet-card-icon`}></i>
                    <div>
                      <h4 className="tenet-card-title m-0">{tenet.title}</h4>
                      <span className="tenet-card-odia d-block">{tenet.odia}</span>
                    </div>
                  </div>
                  <p className="tenet-card-desc mt-2">{tenet.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Roadmap to 2030 Box */}
        <div className="vision-roadmap-box mb-5">
          <div className="text-center max-w-900 mx-auto mb-4">
            <span className="vision-banner-badge mb-2 d-inline-block">
              <i className="bi bi-clock-history text-warning me-1"></i> FUTURE MILESTONES
            </span>
            <h3 className="vision-statement-heading">
              Our Phased Roadmap to <span className="text-warning">2030</span>
            </h3>
          </div>

          <div className="row g-4">
            {ROADMAP_STEPS.map((step, idx) => (
              <div key={idx} className="col-lg-4">
                <div className="roadmap-step">
                  <span className="roadmap-badge">{step.phase}</span>
                  <h4 className="roadmap-title">{step.title}</h4>
                  <p className="roadmap-desc">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default Visiondesc;
