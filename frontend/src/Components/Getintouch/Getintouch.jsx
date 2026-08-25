import React, { useState } from 'react';
import './Getintouch.css';
import contact from '../../assets/contact.jpeg';
const Getintouch = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        message: ''
      });
    }, 4000);
  };

  return (
    <section className="getintouch-section py-5">
      <div className="container">
        <div className="row g-4 g-lg-5 align-items-center">
          {/* Left Side Column */}
          <div className="col-lg-6 text-start">
            {/* Top Tag Badge */}
            <div className="contact-tag-badge mb-3">
              <i className="bi bi-headset me-2 text-warning fs-6"></i>
              <span>Contact Us</span>
            </div>

            {/* Main Heading */}
            <h2 className="contact-left-title fw-bold mb-3">
              Growing Together to Create <span className="text-highlight-orange">Lasting Impact</span>
            </h2>

            {/* Description Paragraph */}
            <p className="contact-left-desc text-muted mb-4">
              From grassroots initiatives to large scale community programs across Odisha, we continue to grow with one divine purpose—to serve those in need with integrity, compassion, and dedication.
            </p>

            {/* Featured Image Card with Floating Contact Overlay */}
            <div className="contact-hero-card position-relative rounded-4 overflow-hidden shadow-sm">
              <img
                src={contact}
                alt="Sri Shirdi Sai Charitable Trust Volunteers"
                className="contact-hero-img w-100"
              />

              {/* Dark Overlay Gradient with Info Buttons */}
              <div className="contact-img-overlay position-absolute bottom-0 start-0 end-0 p-3 p-md-4 d-flex flex-wrap align-items-center justify-content-between gap-3">
                <div className="d-flex align-items-center gap-3">
                  <div className="contact-icon-btn rounded-circle text-white d-flex align-items-center justify-content-center bg-theme-orange">
                    <i className="bi bi-telephone-fill fs-5"></i>
                  </div>
                  <div>
                    <div className="contact-btn-label text-white-50 x-small fw-semibold">Emergency Call</div>
                    <a href="tel:+919437000000" className="contact-btn-value text-white fw-bold text-decoration-none">
                      +91 94370 00000
                    </a>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-3">
                  <div className="contact-icon-btn rounded-circle text-white d-flex align-items-center justify-content-center bg-theme-orange">
                    <i className="bi bi-envelope-fill fs-5"></i>
                  </div>
                  <div>
                    <div className="contact-btn-label text-white-50 x-small fw-semibold">E-mail Us</div>
                    <a href="mailto:info@shirdisaitrust.org" className="contact-btn-value text-white fw-bold text-decoration-none">
                      info@shirdisaitrust.org
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Column: Form Card */}
          <div className="col-lg-6">
            <div className="contact-form-card p-4 p-md-5 rounded-4 bg-white shadow-sm border text-start">
              <h2 className="contact-form-title fw-bold text-dark mb-2">
                Get In Touch
              </h2>
              <p className="contact-form-subtitle text-muted mb-4 small">
                We'd love to hear from you. Whether you have questions, ready to start your journey, or support our initiatives, our team is here to help.
              </p>

              {isSubmitted ? (
                <div className="alert alert-success rounded-3 p-3 text-center mb-0" role="alert">
                  <i className="bi bi-check-circle-fill me-2 fs-5"></i>
                  Thank you! Your message has been sent successfully. We will get back to you shortly.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="row g-3 mb-3">
                    <div className="col-12 col-md-6">
                      <div className="input-icon-wrapper">
                        <i className="bi bi-person input-field-icon"></i>
                        <input
                          type="text"
                          name="firstName"
                          className="form-control contact-input has-icon"
                          placeholder="First Name"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="input-icon-wrapper">
                        <i className="bi bi-person input-field-icon"></i>
                        <input
                          type="text"
                          name="lastName"
                          className="form-control contact-input has-icon"
                          placeholder="Last Name"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row g-3 mb-3">
                    <div className="col-12 col-md-6">
                      <div className="input-icon-wrapper">
                        <i className="bi bi-telephone input-field-icon"></i>
                        <input
                          type="tel"
                          name="phone"
                          className="form-control contact-input has-icon"
                          placeholder="Phone Number"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="input-icon-wrapper">
                        <i className="bi bi-envelope input-field-icon"></i>
                        <input
                          type="email"
                          name="email"
                          className="form-control contact-input has-icon"
                          placeholder="E-mail Address"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="input-icon-wrapper textarea-wrapper">
                      <i className="bi bi-chat-left-text input-field-icon"></i>
                      <textarea
                        name="message"
                        rows="4"
                        className="form-control contact-input has-icon"
                        placeholder="Write Message..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>
                  </div>

                  <button type="submit" className="btn btn-theme-orange px-4 py-2-5 rounded-3 fw-bold text-white shadow-sm d-inline-flex align-items-center gap-2">
                    <i className="bi bi-send-fill fs-6"></i>
                    Submit Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Getintouch;