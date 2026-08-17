import React from 'react';
import { Link } from 'react-router-dom';
import './Cta.css';

const Cta = () => {
  return (
    <section className="cta-volunteer-section text-start">
      {/* Dark Overlay & Radial Glow */}
      <div className="cta-bg-overlay"></div>
      <div className="cta-bg-glow"></div>

      <div className="container position-relative z-2 py-3 py-md-4">
        <div className="row align-items-center g-4 g-lg-5">
          {/* Left Side: Headline, Content & Impact Highlights */}
          <div className="col-lg-7 text-start">
            <div className="cta-badge mb-3">
              <i className="bi bi-heart-fill text-white me-2"></i>
              <span>BECOME A VOLUNTEER</span>
            </div>

            <h2 className="cta-title mb-3">
              NO ONE HAS EVER BECOME POOR BY GIVING
            </h2>

            <p className="cta-description mb-4">
              In the spirit of Shirdi Sai Baba's divine teachings, we come together to serve humanity, feed the hungry, provide healthcare, and bring hope to every home.
            </p>

            {/* Feature Highlights Grid */}
            <div className="row g-3 mb-4 cta-features">
              <div className="col-sm-4">
                <div className="cta-feature-item">
                  <div className="cta-feature-icon mb-2">
                    <i className="bi bi-heart-fill text-warning"></i>
                  </div>
                  <h6 className="cta-feature-title mb-1">50,000+ Meals</h6>
                  <p className="cta-feature-desc mb-0">Served to needy families</p>
                </div>
              </div>

              <div className="col-sm-4">
                <div className="cta-feature-item">
                  <div className="cta-feature-icon mb-2">
                    <i className="bi bi-people-fill text-warning"></i>
                  </div>
                  <h6 className="cta-feature-title mb-1">500+ Volunteers</h6>
                  <p className="cta-feature-desc mb-0">Active across Odisha</p>
                </div>
              </div>

              <div className="col-sm-4">
                <div className="cta-feature-item">
                  <div className="cta-feature-icon mb-2">
                    <i className="bi bi-shield-check text-warning"></i>
                  </div>
                  <h6 className="cta-feature-title mb-1">100% Free Aid</h6>
                  <p className="cta-feature-desc mb-0">Direct community support</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Action Card */}
          <div className="col-lg-5">
            <div className="cta-action-card">
              <div className="cta-card-header mb-3 text-start">
                <h4 className="cta-card-title mb-1">Make an Impact Today</h4>
                <p className="cta-card-subtitle mb-0">Join Sri Shirdi Sai Charitable Trust as a volunteer or supporter.</p>
              </div>

              {/* Action Buttons */}
              <div className="d-flex flex-column gap-3 mb-4">
                <Link to="/contact" className="btn btn-volunteer-primary">
                  <i className="bi bi-person-plus-fill me-2"></i>
                  <span>GET INVOLVED NOW!</span>
                </Link>

                <Link to="/donate" className="btn btn-volunteer-secondary">
                  <i className="bi bi-heart-fill me-2 text-warning"></i>
                  <span>DONATE NOW</span>
                </Link>
              </div>

              {/* Active Volunteers Social Proof */}
              <div className="cta-volunteers-proof pt-3 border-top border-secondary border-opacity-25 text-start">
                <div className="d-flex align-items-center gap-3">
                  <div className="volunteer-avatar-group d-flex">
                    <img
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100"
                      alt="Volunteer Avatar 1"
                      className="volunteer-avatar"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100"
                      alt="Volunteer Avatar 2"
                      className="volunteer-avatar"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100"
                      alt="Volunteer Avatar 3"
                      className="volunteer-avatar"
                    />
                  </div>
                  <div>
                    <div className="proof-number">500+ Active Volunteers</div>
                    <div className="proof-label">Serving across Kendrapara & Odisha</div>
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

export default Cta;