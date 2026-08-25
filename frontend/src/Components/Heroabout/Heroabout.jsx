import React from 'react';
import { Link } from 'react-router-dom';
import './Heroabout.css';
import aid from '../../assets/aid.png';
import social from '../../assets/social.png';
import relief from '../../assets/relief.png';
import founder from '../../assets/founder.png';

const Heroabout = () => {
  return (
    <section id="about" className="heroabout-section">
      <div className="container">
        <div className="row align-items-stretch g-4 g-lg-5">
          {/* Left Column: 3 Overlapping Image Collage */}
          <div className="col-lg-5 d-flex">
            <div className="heroabout-image-collage flex-grow-1">
              {/* Top Right Overlapping Image */}
              <img
                src={aid}
                alt="Educational and food support"
                className="collage-img-top-right"
              />
              {/* Main Center Image */}
              <img
                src={social}
                alt="Community and welfare service"
                className="collage-img-main"
              />
              {/* Bottom Overlapping Image */}
              <img
                src={relief}
                alt="Healthcare and relief support"
                className="collage-img-bottom-left"
              />
            </div>
          </div>

          {/* Right Column: Typography, Feature Cards & Founder Badge */}
          <div className="col-lg-7 text-start d-flex flex-column justify-content-between">
            <div>
              <div className="heroabout-badge">
                <i className="bi bi-star-fill text-warning me-1"></i> ABOUT US
              </div>

              <h2 className="heroabout-title">
                A JOURNEY OF FAITH, SERVICE &amp; COMMUNITY
              </h2>

              <div className="heroabout-desc-content mb-4">
                <p className="heroabout-desc">
                  Sri Sri Shirdi Sai Charitable Trust, Basantapur is a charitable organization dedicated to serving society through faith, compassion, education, healthcare, and community welfare. The Trust works to support people in need while promoting the values of service, humanity, and spiritual well-being.
                </p>
              </div>

              {/* Feature Highlight Cards (History & Our Work) */}
              <div className="row g-3 mb-4">
                {/* History Card */}
                <div className="col-md-6">
                  <div className="heroabout-box-card">
                    <div className="heroabout-icon-badge mb-2 mb-md-3">
                      <i className="bi bi-clock-history"></i>
                    </div>
                    <h4 className="heroabout-feature-title">History</h4>
                    <p className="heroabout-feature-desc">
                      The journey of Sai Temple Basantapur began with the Bhumi Puja on 24 December 2012. Since then, the Trust has continued its spiritual and community-oriented activities, bringing people together through service, devotion, and charitable initiatives.
                    </p>
                  </div>
                </div>

                {/* Our Work Card */}
                <div className="col-md-6">
                  <div className="heroabout-box-card">
                    <div className="heroabout-icon-badge mb-2 mb-md-3">
                      <i className="bi bi-heart-pulse-fill"></i>
                    </div>
                    <h4 className="heroabout-feature-title">Our Work</h4>
                    <p className="heroabout-feature-desc">
                      The Trust's documented objectives include supporting education and scholarships, healthcare and medical assistance, relief for the poor, food support, charitable activities, spiritual development, and community welfare.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Action Row: CTA Button & Founder Profile (1 Row on Mobile) */}
            <div className="heroabout-action-row mt-2">
              <Link to="/about" className="btn-heroabout-more">
                <span>More About Us</span>
                <i className="bi bi-arrow-up-right"></i>
              </Link>

              
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Heroabout;