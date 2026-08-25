import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Missiondesc.css';

import relief from '../../assets/relief.png';
import health from '../../assets/health.png';
import education from '../../assets/education.png';
import women from '../../assets/women.png';

const MISSION_PILLARS_DATA = [
  {
    id: 'annadanam',
    title: 'Daily Annadanam & Food Relief',
    tag: 'Nutrition & Hunger Relief',
    icon: 'bi-egg-fried',
    image: relief,
    desc: 'Serving wholesome, sanctified meals daily to pilgrims, destitute families, and needy individuals across rural Kendrapara.',
    statNum: '50,000+',
    statLabel: 'Meals Distributed',
    link: '/our-work'
  },
  {
    id: 'healthcare',
    title: 'Rural Healthcare & Medical Camps',
    tag: 'Preventive & Emergency Care',
    icon: 'bi-heart-pulse-fill',
    image: health,
    desc: 'Organizing free specialized health camps with Apollo Hospital and eye surgeries with Bhumika Eye Hospital for disadvantaged villagers.',
    statNum: '2,500+',
    statLabel: 'Patients Treated',
    link: '/our-work'
  },
  {
    id: 'education',
    title: 'Child Education & Scholarships',
    tag: 'Knowledge & Literacy',
    icon: 'bi-mortarboard-fill',
    image: education,
    desc: 'Providing underprivileged students with essential tuition assistance, study materials, backpacks, and mentoring for higher learning.',
    statNum: '500+',
    statLabel: 'Students Empowered',
    link: '/our-work'
  },
  {
    id: 'community',
    title: 'Women Empowerment & Relief',
    tag: 'Community Welfare',
    icon: 'bi-people-fill',
    image: women,
    desc: 'Empowering marginalized women, rural artisans, and economically weaker families through livelihood support and emergency aid.',
    statNum: '1,200+',
    statLabel: 'Families Assisted',
    link: '/our-work'
  }
];

const OPERATIONAL_COMMITMENTS = [
  {
    icon: 'bi-patch-check-fill',
    title: '100% Transparent Seva',
    text: 'Every rupee donated directly supports grassroots beneficiaries with complete accountability.'
  },
  {
    icon: 'bi-universal-access',
    title: 'Universal Inclusivity',
    text: 'Serving all human beings with unconditional love, transcending caste, religion, and social background.'
  },
  {
    icon: 'bi-shield-check',
    title: 'Institutional Partnerships',
    text: 'Collaborating with renowned hospitals and institutions to deliver high-quality medical and educational aid.'
  },
  {
    icon: 'bi-award-fill',
    title: 'Dedicated Volunteer Force',
    text: 'Driven by selfless devotees inspired by the eternal teachings of Bhagwan Sri Shirdi Sai Baba.'
  }
];

const IMPACT_METRICS = [
  { icon: 'bi-heart-fill', num: '50,000+', label: 'Free Meals Served' },
  { icon: 'bi-hospital', num: '25+', label: 'Medical & Eye Camps' },
  { icon: 'bi-mortarboard', num: '500+', label: 'Students Supported' },
  { icon: 'bi-calendar-check', num: '12+ Years', label: 'Unbroken Dedication' }
];

const Missiondesc = () => {
  const [isEnglishQuote, setIsEnglishQuote] = useState(false);

  return (
    <section className="missiondesc-section">
      {/* Background Glows */}
      <div className="missiondesc-glow missiondesc-glow-1"></div>
      <div className="missiondesc-glow missiondesc-glow-2"></div>

      <div className="container position-relative z-2">
        {/* Section Intro Header */}
        <div className="text-center max-w-900 mx-auto mb-5">
          <div className="missiondesc-badge mb-3">
            <i className="bi bi-bullseye text-warning"></i>
            <span>PURPOSE & SACRED COMMITMENT</span>
          </div>

          <h2 className="missiondesc-main-title">
            SERVING HUMANITY WITH <span className="missiondesc-highlight">COMPASSION, FAITH & DEDICATION</span>
          </h2>

          <p className="missiondesc-lead-text">
            Rooted in the eternal wisdom of Bhagwan Sri Shirdi Sai Baba—<em>"Love All, Serve All"</em>—Sri Sri Shirdi Sai Charitable Trust, Basantapur, Kendrapara is committed to eradicating hunger, uplifting rural communities, and fostering spiritual harmony.
          </p>
        </div>

        {/* Central Grand Mission Statement Card */}
        <div className="mission-statement-banner mb-5">
          <div className="row align-items-center g-4">
            <div className="col-lg-8">
              <div className="d-flex align-items-center gap-2 mb-3">
                <span className="mission-banner-badge">
                  <i className="bi bi-star-fill text-warning me-1"></i> Core Mission Statement
                </span>
              </div>

              <h3 className="mission-statement-heading mb-3">
                "To alleviate human suffering, eliminate hunger through Annadanam, and empower marginalized communities through compassionate healthcare, quality education, and spiritual enlightenment."
              </h3>

              <p className="mission-statement-subtext mb-0">
                Guided by the sacred principle of <strong>Seva Paramo Dharma</strong> (Selfless Service is the Supreme Virtue), we strive every day to bring joy and dignity to every human life.
              </p>
            </div>

            <div className="col-lg-4 text-center text-lg-end">
              <div className="d-flex flex-column flex-sm-row flex-lg-column gap-3 justify-content-center justify-content-lg-end">
                <Link to="/contact" className="btn-mission-primary justify-content-center">
                  <i className="bi bi-heart-fill"></i> Support Our Mission
                </Link>
                <Link to="/our-work" className="btn-mission-outline justify-content-center">
                  <i className="bi bi-arrow-right-circle"></i> Explore Our Seva
                </Link>
              </div>
            </div>
          </div>
        </div>


        {/* Operational Commitments Box */}
        <div className="mission-commit-box mb-5">
          <div className="row g-4 align-items-center">
            <div className="col-lg-4 text-start">
              <div className="missiondesc-badge mb-2">
                <i className="bi bi-shield-lock-fill text-warning"></i>
                <span>TRUST COMMITMENT</span>
              </div>
              <h3 className="missiondesc-main-title mb-3" style={{ fontSize: '1.65rem' }}>
                Our Core Principles of <span className="missiondesc-highlight">Execution</span>
              </h3>
              <p className="missiondesc-lead-text m-0">
                We uphold strict ethical standards, unwavering dedication, and deep reverence in every initiative we carry out.
              </p>
            </div>

            <div className="col-lg-8">
              <div className="row g-3">
                {OPERATIONAL_COMMITMENTS.map((item, idx) => (
                  <div key={idx} className="col-sm-6">
                    <div className="commit-item">
                      <div className="commit-icon">
                        <i className={`bi ${item.icon}`}></i>
                      </div>
                      <div>
                        <h5 className="commit-title">{item.title}</h5>
                        <p className="commit-text">{item.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default Missiondesc;
