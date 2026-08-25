import React from 'react';
import './Founder.css';
import founder from '../../assets/founder.png'
const Founder = () => {
  return (
    <section className="founder-section py-5">
      <div className="container">
        <div className="row align-items-center g-4 g-lg-5">
          {/* Left Side: Content */}
          <div className="col-lg-6 col-xl-7 text-start">
            <div className="founder-badge mb-3">
              <i className="bi bi-person-badge-fill me-2 text-warning"></i>
              <span>Founder & Managing Director</span>
            </div>

            <h2 className="founder-title mb-3">
              Guided by Compassion, Committed to Selfless Service
            </h2>

            <h5 className="founder-name-sub mb-4">
              Dr. Rudra Mohanty <span className="founder-designation">— Founder & Managing Director</span>
            </h5>

            <div className="founder-desc-content mb-4">
              <p className="founder-text">
                Under the visionary leadership of <strong>Dr. Rudra Mohanty</strong>, Sri Shirdi Sai Charitable Trust has grown from a humble initiative into a beacon of hope and support for thousands of underprivileged individuals and families across Odisha.
              </p>
              <p className="founder-text">
                Deeply inspired by the divine teachings of <strong>Shirdi Sai Baba</strong>—emphasizing <em>Shraddha</em> (Faith) and <em>Saburi</em> (Patience)—Dr. Mohanty has dedicated his life to selfless social service, free healthcare accessibility, food distribution, and educational support for children in need.
              </p>
            </div>

            {/* Founder Quote Card */}
            <div className="founder-quote-box mb-4">
              <div className="quote-icon mb-2">
                <i className="bi bi-quote"></i>
              </div>
              <p className="quote-text mb-2">
                "Service to mankind is the highest form of worship. True happiness lies in easing the suffering of others and lighting the lamp of hope in every home."
              </p>
              <div className="quote-author">
                — Dr. Rudra Mohanty
              </div>
            </div>


          </div>

          {/* Right Side: Image */}
          <div className="col-lg-6 col-xl-5">
            <div className="founder-image-wrapper">
              {/* Decorative Background Glow Shape */}
              <div className="founder-bg-shape"></div>

              {/* Main Founder Image Card */}
              <div className="founder-img-card">
                <img
                  src={founder}
                  alt="Dr. Rudra Mohanty - Founder & Managing Director"
                  className="founder-main-img"
                />

                {/* Floating Experience Badge */}
                <div className="founder-exp-badge">
                  <div className="exp-number">14+</div>
                  <div className="exp-text">Years of Dedicated Service</div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;