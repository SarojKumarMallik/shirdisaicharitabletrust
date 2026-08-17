import React, { useState } from 'react';
import './Faq.css';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0); // Question 1 open by default

  const faqs = [
    {
      id: 1,
      question: '1. Can I make a recurring monthly donation?',
      answer:
        'Yes, we offer a monthly giving program that allows you to contribute automatically each month and continuously support your chosen cause.',
    },
    {
      id: 2,
      question: '2. How do I know my donation is being used effectively?',
      answer:
        'We operate with 100% transparency and accountability. Every contribution is directly utilized for free Mahaprasadam distribution, medical check-up camps, and student scholarships in Kendrapara, Odisha.',
    },
    {
      id: 3,
      question: '3. Can I volunteer with your organization?',
      answer:
        'Yes! We warmly welcome volunteers from all walks of life to participate in our Annadanam Seva, healthcare camps, and community welfare initiatives.',
    },
    {
      id: 4,
      question: '4. How can I make a donation?',
      answer:
        'You can donate online via UPI, Net Banking, or Direct Bank Transfer through our secure donation page, or visit our trust office at Basantpur, Kendrapara.',
    },
    {
      id: 5,
      question: '5. How do I get updates about the causes I support?',
      answer:
        'We publish regular program updates, photo galleries, and financial reports on our website and send news updates directly to our valued donors.',
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Left Column: Devotional Seva Image & Overlay Rating Card */}
          <div className="col-lg-5">
            <div className="faq-image-wrapper">
              {/* Main Portrait Seva Image */}
              <img
                src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&q=80&w=800"
                alt="Volunteers feeding child with care"
                className="faq-main-img"
              />

              {/* Bottom-Right Floating Rating Card */}
              <div className="faq-rating-card">
                <div className="faq-stars">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>

                <div className="faq-avatars">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100"
                    alt="Volunteer 1"
                    className="faq-avatar-img"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100"
                    alt="Volunteer 2"
                    className="faq-avatar-img"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100"
                    alt="Volunteer 3"
                    className="faq-avatar-img"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100"
                    alt="Volunteer 4"
                    className="faq-avatar-img"
                  />
                </div>

                <div className="faq-google-rating">
                  <svg width="24" height="24" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                    />
                  </svg>
                  <span className="faq-score">4.9 / 5</span>
                </div>

                <p className="faq-rating-subtitle">
                  Trusted by our volunteers for transparency.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Title & Interactive Accordion */}
          <div className="col-lg-7 text-start">
            <div className="faq-badge">
              <i className="bi bi-patch-question-fill text-warning me-1"></i>
              <span>Frequently Asked Questions</span>
            </div>

            <h2 className="faq-title">
              Your questions answers with transparency & care
            </h2>

            <div className="faq-accordion-list">
              {faqs.map((faq, index) => (
                <div
                  key={faq.id}
                  className={`faq-item ${openIndex === index ? 'active-faq' : ''}`}
                >
                  <button
                    className="faq-question-btn"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={openIndex === index}
                  >
                    <span className="faq-question-text">{faq.question}</span>
                    <span className="faq-toggle-icon">
                      <i
                        className={`bi ${
                          openIndex === index
                            ? 'bi-dash-circle-fill'
                            : 'bi-plus-circle-fill'
                        }`}
                      ></i>
                    </span>
                  </button>

                  <div className="faq-answer-wrapper">
                    <p className="faq-answer-text">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;