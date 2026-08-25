import React from 'react';
import './Abouthero.css';
import aid from '../../assets/aid.png';
import social from '../../assets/social.png';
import relief from '../../assets/relief.png';

const Abouthero = () => {
  return (
    <section id="about" className="heroabout-section">
      <div className="container">
        <div className="row align-items-center g-4 g-lg-5">
          {/* Left Column: 3 Overlapping Image Collage */}
          <div className="col-lg-5">
            <div className="heroabout-image-collage">
              {/* Main Center Image */}
              <img
                src={social}
                alt="Community and welfare service"
                className="collage-img-main"
              />
              {/* Top Right Overlapping Image */}
              <img
                src={aid}
                alt="Educational and food support"
                className="collage-img-top-right"
              />
              {/* Bottom Left Overlapping Image */}
              <img
                src={relief}
                alt="Healthcare and relief support"
                className="collage-img-bottom-left"
              />
            </div>
          </div>

          {/* Right Column: Typography, History & Our Work Cards, Leadership Team */}
          <div className="col-lg-7 text-start">
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

            {/* History & Our Work Highlight Cards */}
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

            {/* Leadership Team Box */}
            <div className="heroabout-leadership-box p-3 p-md-4 rounded-4">
              <div className="d-flex align-items-center gap-2 mb-3">
                <i className="bi bi-people-fill text-warning fs-5"></i>
                <h5 className="leadership-box-heading m-0">Leadership Team</h5>
              </div>

              <div className="row g-3">
                {/* Managing Trustee */}
                <div className="col-md-6">
                  <div className="leader-mini-card p-3 rounded-3 h-100">
                    <div className="d-flex align-items-center gap-2 mb-1">
                      <div className="leader-avatar-dot">
                        <i className="bi bi-person-check-fill"></i>
                      </div>
                      <div>
                        <h6 className="leader-name m-0">Dr. Rudra Mohanty</h6>
                        <span className="leader-designation">Managing Trustee</span>
                      </div>
                    </div>
                    <p className="leader-desc mt-2 mb-0">
                      Provides leadership and oversees the activities and administration of the Trust.
                    </p>
                  </div>
                </div>

                {/* President */}
                <div className="col-md-6">
                  <div className="leader-mini-card p-3 rounded-3 h-100">
                    <div className="d-flex align-items-center gap-2 mb-1">
                      <div className="leader-avatar-dot">
                        <i className="bi bi-award-fill"></i>
                      </div>
                      <div>
                        <h6 className="leader-name m-0">Sri Saktikanta Mohanty</h6>
                        <span className="leader-designation">President</span>
                      </div>
                    </div>
                    <p className="leader-desc mt-2 mb-0">
                      Guides organizational governance, institutional vision, and community initiatives.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Abouthero;