import React from 'react';
import { Link } from 'react-router-dom';
import './Whychoose.css';
import aid from '../../assets/aid.png';
import health from '../../assets/health.png';
import education from '../../assets/education.png';

const Whychoose = () => {
  return (
    <section className="whychoose-section py-5">
      <div className="container">
        <div className="row align-items-center g-4 g-lg-5">
          {/* Left Side: Overlapping Image Collage */}
          <div className="col-lg-6">
            <div className="whychoose-image-container position-relative">
             

              {/* Main Background Image */}
              <div className="whychoose-main-img-card">
                <img
                  src={aid}
                  alt="Serving humanity with compassion"
                  className="whychoose-main-img"
                />
              </div>

              {/* Bottom-Right Overlapping Sub Image */}
              <div className="whychoose-sub-img-card">
                <img
                  src={health}
                  alt="Community healthcare and eye care"
                  className="whychoose-sub-img"
                />
              </div>
            </div>
          </div>

          {/* Right Side: Content Column */}
          <div className="col-lg-6 text-start">
            {/* Section Header Badge */}
            <div className="whychoose-badge mb-3">
              <i className="bi bi-heart-fill text-warning me-2"></i>
              <span>Why Choose Us</span>
            </div>

            {/* Main Title Heading */}
            <h2 className="whychoose-title mb-3">
              Serving Humanity with Faith, Compassion & Purpose
            </h2>

            {/* Description Subtitle */}
            <p className="whychoose-description mb-4">
              Shri Sai Shirdi Charitable Trust, Basantapur is dedicated to serving the community through spiritual, educational, healthcare, and charitable activities, creating meaningful support for people in need.
            </p>

            {/* Feature Impact Box */}
            <div className="whychoose-impact-card mb-4">
              <div className="row align-items-center g-3">
                {/* Left Part: Title & Bullet Points */}
                <div className="col-md-7 text-start">
                  <h5 className="impact-card-title mb-2">Community Welfare & Service</h5>
                  <div className="impact-title-line mb-3"></div>

                  <ul className="impact-list list-unstyled m-0 p-0">
                    <li className="impact-list-item mb-2">
                      <i className="bi bi-heart-pulse-fill impact-item-icon me-2"></i>
                      <span>Health &amp; Eye Care Camps</span>
                    </li>
                    <li className="impact-list-item mb-2">
                      <i className="bi bi-mortarboard-fill impact-item-icon me-2"></i>
                      <span>Educational &amp; Quiz Programs</span>
                    </li>
                    <li className="impact-list-item">
                      <i className="bi bi-people-fill impact-item-icon me-2"></i>
                      <span>Community Welfare Activities</span>
                    </li>
                  </ul>
                </div>

                {/* Right Part: Group Image */}
                <div className="col-md-5">
                  <div className="impact-img-wrapper">
                    <img
                      src={education}
                      alt="Educational & Community Programs"
                      className="impact-img"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Subtle Divider */}
            <hr className="whychoose-divider mb-4" />

            {/* Bottom Action CTA Button */}
            <div className="whychoose-action">
              <Link to="/contact" className="btn-whychoose-cta">
                <span className="cta-text">Contact Us</span>
                <span className="cta-arrow-box">
                  <i className="bi bi-arrow-up-right"></i>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whychoose;