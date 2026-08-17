import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/logo6.png';

const Navbar = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // 'about' | null
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Click Outside Validation: Close open dropdowns and mobile drawer when clicking outside header
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setOpenDropdown(null);
        setIsNavCollapsed(true);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  // Standard Link Click Handler: Close dropdowns & collapse mobile menu
  const handleNavClick = () => {
    setOpenDropdown(null);
    setIsNavCollapsed(true);
  };

  // Exclusive Dropdown Toggle Handler: Opening one dropdown automatically closes all other open dropdowns
  const toggleDropdown = (e, dropdownName) => {
    e.preventDefault();
    e.stopPropagation();
    setOpenDropdown((prev) => (prev === dropdownName ? null : dropdownName));
  };

  const toggleNavCollapse = () => {
    setIsNavCollapsed(!isNavCollapsed);
    setOpenDropdown(null);
  };

  const currentPath = location.pathname;

  return (
    <header ref={headerRef} className="trust-header-wrapper">
      {/* Top Announcement & Quick Info Bar */}
      <div className="trust-topbar">
        <div className="container-fluid container-xl d-flex justify-content-between align-items-center flex-nowrap gap-2">
          <div className="topbar-left d-flex align-items-center gap-2 gap-sm-3 flex-nowrap">
            <span className="topbar-item">
              <i className="bi bi-geo-alt-fill text-warning me-1"></i>
              <span>Basantpur, Kendrapara, Odisha</span>
            </span>
            <span className="topbar-divider">|</span>
            <span className="topbar-item">
              <i className="bi bi-telephone-fill text-warning me-1"></i>
              <a href="tel:+919876543210">+91 98765 43210</a>
            </span>
            <span className="topbar-divider d-none d-md-inline">|</span>
            <span className="topbar-item d-none d-md-inline">
              <i className="bi bi-envelope-fill text-warning me-1"></i>
              <a href="mailto:contact@shirdisaicharitabletrust.org">contact@shirdisaicharitabletrust.org</a>
            </span>
          </div>

          <div className="topbar-right d-flex align-items-center gap-2 gap-sm-3 flex-nowrap">
            <span className="darshan-badge d-none d-lg-inline-block">
              <i className="bi bi-clock-history me-1 text-warning"></i> Darshan: 6:00 AM - 9:00 PM
            </span>
            <div className="topbar-socials d-flex align-items-center gap-2 flex-nowrap">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" title="Facebook" className="social-link"><i className="bi bi-facebook"></i></a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" title="Instagram" className="social-link"><i className="bi bi-instagram"></i></a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" title="YouTube" className="social-link"><i className="bi bi-youtube"></i></a>
              <a href="https://whatsapp.com" target="_blank" rel="noreferrer" title="WhatsApp" className="social-link"><i className="bi bi-whatsapp"></i></a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Responsive Navbar */}
      <nav className={`navbar navbar-expand-lg trust-navbar ${isScrolled ? 'navbar-sticky-scrolled' : ''}`}>
        <div className="container-fluid container-xl">
          {/* Brand Logo Only */}
          <Link className="navbar-brand me-lg-4 p-0 d-inline-flex align-items-center" to="/" onClick={handleNavClick}>
            <img src={logo} alt="Sri Shirdi Sai Charitable Trust Logo" className="trust-logo-img" />
          </Link>

          {/* Mobile Menu Toggler Button */}
          <button
            className={`navbar-toggler trust-toggler ${!isNavCollapsed ? 'collapsed-active' : ''}`}
            type="button"
            onClick={toggleNavCollapse}
            aria-controls="trustNavbarContent"
            aria-expanded={!isNavCollapsed}
            aria-label="Toggle navigation"
          >
            <span className="toggler-icon-bar top-bar"></span>
            <span className="toggler-icon-bar middle-bar"></span>
            <span className="toggler-icon-bar bottom-bar"></span>
          </button>

          {/* Nav Links & Action Button */}
          <div className={`collapse navbar-collapse ${!isNavCollapsed ? 'show' : ''}`} id="trustNavbarContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 trust-nav-links">
              <li className="nav-item">
                <Link
                  className={`nav-link trust-nav-item ${currentPath === '/' ? 'active' : ''}`}
                  to="/"
                  onClick={handleNavClick}
                >
                  <i className="bi bi-house-door-fill me-1 nav-icon-sm"></i>
                  Home
                </Link>
              </li>

              {/* Dropdown: About Us */}
              <li className="nav-item dropdown">
                <a
                  className={`nav-link dropdown-toggle trust-nav-item ${currentPath.startsWith('/about') || currentPath === '/trustees' ? 'active' : ''} ${openDropdown === 'about' ? 'show' : ''}`}
                  href="/about"
                  role="button"
                  aria-expanded={openDropdown === 'about'}
                  onClick={(e) => toggleDropdown(e, 'about')}
                >
                  About Us
                </a>
                <ul className={`dropdown-menu trust-dropdown-menu ${openDropdown === 'about' ? 'show' : ''}`}>
                  <li>
                    <Link className="dropdown-item" to="/about" onClick={handleNavClick}>
                      <i className="bi bi-info-circle me-2 text-warning"></i>Our Trust History
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/trustees" onClick={handleNavClick}>
                      <i className="bi bi-people me-2 text-warning"></i>Trustees & Management
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Our Work (Direct Link - No Dropdown) */}
              <li className="nav-item">
                <Link
                  className={`nav-link trust-nav-item ${currentPath === '/our-work' ? 'active' : ''}`}
                  to="/our-work"
                  onClick={handleNavClick}
                >
                  Our Work
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className={`nav-link trust-nav-item ${currentPath === '/event' ? 'active' : ''}`}
                  to="/event"
                  onClick={handleNavClick}
                >
                  Event
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className={`nav-link trust-nav-item ${currentPath === '/news' ? 'active' : ''}`}
                  to="/news"
                  onClick={handleNavClick}
                >
                  News
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className={`nav-link trust-nav-item ${currentPath === '/gallery' ? 'active' : ''}`}
                  to="/gallery"
                  onClick={handleNavClick}
                >
                  Gallery
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className={`nav-link trust-nav-item ${currentPath === '/contact' ? 'active' : ''}`}
                  to="/contact"
                  onClick={handleNavClick}
                >
                  Contact
                </Link>
              </li>
            </ul>

            {/* Right Action: Donate Button */}
            <div className="navbar-actions d-flex align-items-center gap-2 mt-3 mt-lg-0">
              <Link to="/donate" className="btn btn-donate d-flex align-items-center gap-2" onClick={handleNavClick}>
                <i className="bi bi-heart-fill heart-icon"></i>
                <span>Donate Now</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;