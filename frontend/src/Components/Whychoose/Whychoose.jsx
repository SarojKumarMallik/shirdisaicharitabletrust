import React from 'react';
import { Link } from 'react-router-dom';
import './Whychoose.css';

const Whychoose = () => {
  return (
    <section className="whychoose-section py-5">
      <div className="container">
        <div className="row align-items-center g-4 g-lg-5">
          {/* Left Side: Overlapping Image Collage & Volunteer Badge */}
          <div className="col-lg-6">
            <div className="whychoose-image-container position-relative">
              

              {/* Main Background Image */}
              <div className="whychoose-main-img-card">
                <img
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800"
                  alt="Child receiving food and toy support"
                  className="whychoose-main-img"
                />
              </div>

              {/* Top-Left Floating Active Volunteers Badge */}
              <div className="whychoose-volunteer-card">
                <div className="volunteer-count-wrap">
                  <h4 className="volunteer-count">3,500+</h4>
                  <span className="volunteer-label">Active Volunteers</span>
                </div>
                <div className="volunteer-avatar-group d-flex mt-2">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100"
                    alt="Volunteer 1"
                    className="avatar-img"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100"
                    alt="Volunteer 2"
                    className="avatar-img"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100"
                    alt="Volunteer 3"
                    className="avatar-img"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=100"
                    alt="Volunteer 4"
                    className="avatar-img"
                  />
                </div>
              </div>

              {/* Bottom-Right Overlapping Sub Image */}
              <div className="whychoose-sub-img-card">
                <img
                  src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&q=80&w=600"
                  alt="Child receiving community aid"
                  className="whychoose-sub-img"
                />
              </div>
            </div>
          </div>

          {/* Right Side: Content Column */}
          <div className="col-lg-6 text-start">
            {/* Section Header Badge */}
            <div className="whychoose-badge mb-3">
              <i className="bi bi-star-fill text-warning me-1"></i> Why Choose Us
            </div>

            {/* Main Title Heading */}
            <h2 className="whychoose-title mb-3">
              Transforming generosity into meaningful change
            </h2>

            {/* Description Subtitle */}
            <p className="whychoose-description mb-4">
              We design and implement sustainable programs in education, healthcare, hunger relief, and disaster response to uplift underserved communities & create lasting social impact.
            </p>

            {/* Feature Impact Box (White Card with Left List + Right Image) */}
            <div className="whychoose-impact-card mb-4">
              <div className="row align-items-center g-3">
                {/* Left Part: Title & Bullet Points */}
                <div className="col-md-7 text-start">
                  <h5 className="impact-card-title mb-2">Real Time Impact Tracking</h5>
                  <div className="impact-title-line mb-3"></div>

                  <ul className="impact-list list-unstyled m-0 p-0">
                    <li className="impact-list-item mb-2">
                      <i className="bi bi-check-circle-fill impact-check-icon me-2"></i>
                      <span>Transparent, easy to read reports</span>
                    </li>
                    <li className="impact-list-item mb-2">
                      <i className="bi bi-check-circle-fill impact-check-icon me-2"></i>
                      <span>Track the ongoing status of donation</span>
                    </li>
                    <li className="impact-list-item">
                      <i className="bi bi-check-circle-fill impact-check-icon me-2"></i>
                      <span>Access your own dashboard monitor</span>
                    </li>
                  </ul>
                </div>

                {/* Right Part: Group Image */}
                <div className="col-md-5">
                  <div className="impact-img-wrapper">
                    <img
                      src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=500"
                      alt="Children smiling together"
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