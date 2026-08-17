import React from 'react';
import './Abouthero.css';

const Abouthero = () => {
  return (
    <section id="about" className="heroabout-section">
      <div className="container">
        <div className="row align-items-center g-4 g-lg-5">
          {/* Left Column: 3 Overlapping Image Collage */}
          <div className="col-lg-6">
            <div className="heroabout-image-collage">
              {/* Main Center Image */}
              <img
                src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=800"
                alt="Volunteers distributing food and medical aid"
                className="collage-img-main"
              />
              {/* Top Right Overlapping Image */}
              <img
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=600"
                alt="Smiling children receiving education support"
                className="collage-img-top-right"
              />
              {/* Bottom Left Overlapping Image */}
              <img
                src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&q=80&w=600"
                alt="Child receiving community welfare aid"
                className="collage-img-bottom-left"
              />
            </div>
          </div>

          {/* Right Column: Typography, Feature Cards & Founder Badge */}
          <div className="col-lg-6 text-start">
            <div className="heroabout-badge">
              <i className="bi bi-star-fill text-warning me-1"></i> About Us
            </div>

            <h2 className="heroabout-title">
              Growing Together, Creating Lasting Impact
            </h2>

            <div className="heroabout-desc-content mb-4">
              <p className="heroabout-desc">
                Sri Sri Shirdi Sai Charitable Trust is committed to serving people, supporting communities, and creating positive change in society.
              </p>
              <p className="heroabout-desc">
                Led by <strong>Dr. Rudra Mohanty, Managing Director</strong>, the Trust works with compassion, honesty, and dedication to help people in need and make a meaningful difference in their lives.
              </p>
              <p className="heroabout-desc">
                Inspired by the values of service, kindness, faith, and humanity, we believe that every small effort can create a positive and lasting impact.
              </p>
            </div>

            {/* Feature Highlight Cards (Side-by-Side: Icon Top -> Heading Below -> Paragraph Below) */}
            <div className="row g-3 mb-4">
              {/* Mission Card */}
              <div className="col-6">
                <div className="heroabout-box-card">
                  <div className="heroabout-icon-badge mb-2 mb-md-3">
                    <i className="bi bi-bullseye"></i>
                  </div>
                  <h4 className="heroabout-feature-title">Our Mission</h4>
                  <p className="heroabout-feature-desc">
                    To build stronger communities, support those in need, and create better opportunities for a brighter future.
                  </p>
                </div>
              </div>

              {/* Vision Card */}
              <div className="col-6">
                <div className="heroabout-box-card">
                  <div className="heroabout-icon-badge mb-2 mb-md-3">
                    <i className="bi bi-eye-fill"></i>
                  </div>
                  <h4 className="heroabout-feature-title">Our Vision</h4>
                  <p className="heroabout-feature-desc">
                    Empowering society through free healthcare, education support, skill development, and women empowerment.
                  </p>
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