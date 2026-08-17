import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '../../assets/logo6.png';

const Footer = () => {
  return (
    <footer className="trust-footer">
      <div className="container footer-top">
        <div className="row g-4">
          {/* Col 1: Trust Logo & Bio */}
          <div className="col-lg-4 col-md-6 text-start">
            <Link to="/">
              <img src={logo} alt="Sri Sri Shirdi Sai Charitable Trust Logo" className="footer-brand-logo" />
            </Link>
            <p className="footer-desc">
              Sri Sri Shirdi Sai Charitable Trust is dedicated to serving humanity in Basantpur, Kendrapara, Odisha through free food distribution (Annadanam), education support, and medical relief.
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
              <li><Link to="/our-work"><i className="bi bi-chevron-right"></i> Our Work</Link></li>
              <li><Link to="/event"><i className="bi bi-chevron-right"></i> Events</Link></li>
              <li><Link to="/news"><i className="bi bi-chevron-right"></i> Latest News</Link></li>
              <li><Link to="/gallery"><i className="bi bi-chevron-right"></i> Photo Gallery</Link></li>
              <li><Link to="/contact"><i className="bi bi-chevron-right"></i> Contact Us</Link></li>
            </ul>
          </div>

          {/* Col 3: Seva Activities */}
          <div className="col-lg-3 col-md-6 text-start">
            <h5 className="footer-heading">Our Seva Activities</h5>
            <ul className="footer-links">
              <li><Link to="/our-work"><i className="bi bi-heart-pulse text-warning me-1"></i> Daily Annadanam Seva</Link></li>
              <li><Link to="/our-work"><i className="bi bi-book text-warning me-1"></i> Free Child Education</Link></li>
              <li><Link to="/our-work"><i className="bi bi-hospital text-warning me-1"></i> Medical Assistance Camps</Link></li>
              <li><Link to="/our-work"><i className="bi bi-house-heart text-warning me-1"></i> Temple Seva & Darshan</Link></li>
              <li><Link to="/donate"><i className="bi bi-award text-warning me-1"></i> Donate for Cause</Link></li>
            </ul>
          </div>

          {/* Col 4: Contact & Location Info */}
          <div className="col-lg-3 col-md-6 text-start">
            <h5 className="footer-heading">Temple & Office</h5>
            <div className="footer-contact-item">
              <i className="bi bi-geo-alt-fill footer-contact-icon"></i>
              <span>Basantpur, Kendrapara, Odisha</span>
            </div>
            <div className="footer-contact-item">
              <i className="bi bi-telephone-fill"></i>
              <a href="tel:+919876543210">+91 98765 43210</a>
            </div>
            <div className="footer-contact-item">
              <i className="bi bi-envelope-fill"></i>
              <a href="mailto:contact@shirdisaicharitabletrust.org">contact@shirdisaicharitabletrust.org</a>
            </div>
            <div className="footer-contact-item">
              <i className="bi bi-clock-history"></i>
              <span>Darshan: 6:00 AM - 9:00 PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="footer-bottom text-center">
        <div className="container">
          <p className="m-0">
            © {new Date().getFullYear()} <strong>Sri Sri Shirdi Sai Charitable Trust</strong>. All Rights Reserved. Designed with Devotion.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;