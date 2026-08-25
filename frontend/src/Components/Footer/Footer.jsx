import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <footer className="trust-footer">
      <div className="container footer-top">
        <div className="row g-4">
          {/* Col 1: Trust Logo & Bio */}
          <div className="col-lg-4 col-md-6 text-start">
            <Link to="/" className="d-inline-block">
              <img src={logo} alt="Sri Sri Shirdi Sai Charitable Trust Logo" className="footer-brand-logo" />
            </Link>
            <p className="footer-desc">
             Sri Sri Shirdi Sai Charitable Trust is committed to serving humanity with compassion and devotion. Through free food distribution (Annadanam), rural healthcare, educational support, and spiritual initiatives, we strive to bring hope, dignity, and positive change to communities in Basantpur, Kendrapara, Odisha.
            </p>
            <div className="footer-socials">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="footer-social-link" title="Facebook"><i className="bi bi-facebook"></i></a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="footer-social-link" title="Instagram"><i className="bi bi-instagram"></i></a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="footer-social-link" title="YouTube"><i className="bi bi-youtube"></i></a>
              <a href="https://whatsapp.com" target="_blank" rel="noreferrer" className="footer-social-link" title="WhatsApp"><i className="bi bi-whatsapp"></i></a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="col-lg-2 col-md-6 text-start">
            <h5 className="footer-heading">Quick Links</h5>
            <ul className="footer-links">
              <li><Link to="/"><i className="bi bi-chevron-right"></i> Home</Link></li>
              <li><Link to="/about"><i className="bi bi-chevron-right"></i> About Us</Link></li>
              <li><Link to="/ourteam"><i className="bi bi-chevron-right"></i> Our Team</Link></li>
              <li><Link to="/our-work"><i className="bi bi-chevron-right"></i> Our Work</Link></li>
             
              <li><Link to="/event"><i className="bi bi-chevron-right"></i> Events</Link></li>
              <li><Link to="/news"><i className="bi bi-chevron-right"></i> News</Link></li>
              <li><Link to="/gallery"><i className="bi bi-chevron-right"></i> Gallery</Link></li>
              <li><Link to="/contact"><i className="bi bi-chevron-right"></i> Contact Us</Link></li>
            </ul>
          </div>

          {/* Col 3: Seva Activities */}
          <div className="col-lg-3 col-md-6 text-start">
            <h5 className="footer-heading">Our Seva Activities</h5>
            <ul className="footer-links">
              <li>
                <Link to="/our-work">
                  <i className="bi bi-egg-fried text-warning me-1"></i> Daily Annadanam Seva
                </Link>
              </li>
              <li>
                <Link to="/our-work">
                  <i className="bi bi-hospital-fill text-warning me-1"></i> Medical & Eye Care Camps
                </Link>
              </li>
              <li>
                <Link to="/our-work">
                  <i className="bi bi-mortarboard-fill text-warning me-1"></i> Free Child Education
                </Link>
              </li>
              <li>
                <Link to="/our-work">
                  <i className="bi bi-people-fill text-warning me-1"></i> Community Welfare
                </Link>
              </li>
              <li>
                <Link to="/our-work">
                  <i className="bi bi-flower1 text-warning me-1"></i> Temple Seva & Darshan
                </Link>
              </li>
              <li>
                <Link to="/mission">
                  <i className="bi bi-award-fill text-warning me-1"></i> Our Mission
                </Link>
              </li>
              <li>
                <Link to="/vision">
                  <i className="bi bi-award-fill text-warning me-1"></i> Our Vision
                </Link>
              </li>
              
               
            </ul>
          </div>

          {/* Col 4: Contact & Location Info with Mini Map */}
          <div className="col-lg-3 col-md-6 text-start">
            <h5 className="footer-heading">Temple & Office</h5>
            <div className="footer-contact-item">
              <i className="bi bi-geo-alt-fill footer-contact-icon"></i>
              <a
                href="https://maps.app.goo.gl/1g4z2SS66WjsQUnX8"
                target="_blank"
                rel="noopener noreferrer"
              >
                Basantpur, Kendrapara, Odisha - 754134
              </a>
            </div>
            <div className="footer-contact-item">
              <i className="bi bi-telephone-fill"></i>
              <div className="d-flex flex-column gap-1">
                <a href="tel:+919437001135">+91 94370 01135</a>
                <a href="tel:+919090210667">+91 90902 10667</a>
              </div>
            </div>
            <div className="footer-contact-item">
              <i className="bi bi-envelope-fill"></i>
              <a href="mailto:contact@shirdisaicharitabletrust.org">contact@shirdisaicharitabletrust.org</a>
            </div>
            <div className="footer-contact-item">
              <i className="bi bi-clock-history"></i>
              <span>Darshan: 6:00 AM - 9:00 PM</span>
            </div>

            {/* Embedded Mini Google Map */}
            <div className="footer-mini-map mt-3 rounded-3 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4861.199788690327!2d86.27906575111642!3d20.36502406625631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1bd5d89eb2dbab%3A0x713ddf96a6239ffc!2sSai%20temple%2CBasantpur!5e1!3m2!1sen!2sin!4v1786985889902!5m2!1sen!2sin"
                width="100%"
                height="125"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Footer Mini Map - Sai Temple, Basantpur"
                className="d-block"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="footer-bottom text-center">
        <div className="container">
          <div className="footer-copyright-content d-flex flex-column flex-md-row align-items-center justify-content-center gap-2">
            <span>
              © {new Date().getFullYear()} <strong className="trust-name-highlight">Sri Sri Shirdi Sai Charitable Trust</strong>. All Rights Reserved.
            </span>
            <span className="d-none d-md-inline text-secondary opacity-50">|</span>
            <span className="creovate-credit-inline">
              Designed with <span className="heart-emoji">❤️</span> by{' '}
              <a
                href="https://www.creovatetechnologies.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="creovate-highlight-link"
              >
                Creovate Technologies
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;