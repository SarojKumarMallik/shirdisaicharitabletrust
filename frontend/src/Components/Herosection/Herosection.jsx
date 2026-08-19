import React, { useState, useEffect } from 'react';
import './Herosection.css';
import hero1 from '../../assets/hero1.png'
import hero2 from '../../assets/hero2.png'
import hero3 from '../../assets/hero3.png'

const Herosection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const slideDuration = 5000; // 5 Seconds per slide

  const slides = [
    {
      id: 1,
      tag: 'OM SAI RAM',
      title: 'SERVE ALL, LOVE ALL,\nHELP EVER, HURT NEVER.',
      desc: 'Inspired by the divine teachings of Shirdi Sai Baba, we dedicate ourselves to selfless service, feeding the hungry, and aiding the needy in Basantpur, Kendrapara, Odisha.',
      btnPrimaryText: 'MAKE A DONATION',
      btnPrimaryLink: '/donate',
      btnSecondaryText: 'WATCH VIDEO',
      btnSecondaryLink: '/gallery',
      bgImage: hero1,
      cardImage: hero1,
    },
    {
      id: 2,
      tag: 'ANNADANAM MAHA SEVA',
      title: 'FEEDING THE HUNGRY WITH\nDEVOTION & GRATITUDE.',
      desc: 'Providing daily nutritious free Mahaprasadam to thousands of underprivileged people, pilgrims, and temple devotees in Odisha.',
      btnPrimaryText: 'SPONSOR A MEAL',
      btnPrimaryLink: '/donate',
      btnSecondaryText: 'EXPLORE OUR WORK',
      btnSecondaryLink: '/our-work',
      bgImage: hero3,
      cardImage: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 3,
      tag: 'EDUCATION & HEALTHCARE',
      title: 'LIGHTING MINDS & HEALING\nLIVES WITH COMPASSION.',
      desc: 'Empowering underprivileged students with free educational supplies, school fees, uniforms, and running rural health checkup camps.',
      btnPrimaryText: 'SUPPORT A CHILD',
      btnPrimaryLink: '/donate',
      btnSecondaryText: 'GET IN TOUCH',
      btnSecondaryLink: '/contact',
      bgImage: hero2,
      cardImage: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&q=80&w=800',
    },
  ];

  // Auto-slide Timer & Progress Bar Handler
  useEffect(() => {
    if (isPaused) return;

    const intervalStep = 100; // Update progress bar every 100ms
    const stepIncrement = (intervalStep / slideDuration) * 100;

    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
          return 0;
        }
        return prevProgress + stepIncrement;
      });
    }, intervalStep);

    return () => clearInterval(timer);
  }, [isPaused, slides.length, slideDuration]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setProgress(0);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setProgress(0);
  };

  const handleDotClick = (index) => {
    setCurrentSlide(index);
    setProgress(0);
  };

  return (
    <section
      id="home"
      className="hero-slider-section"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slider Items */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`hero-slide-item ${index === currentSlide ? 'active-slide' : ''}`}
        >
          {/* Full-bleed Background Image with Ken-Burns Animation */}
          <div
            className="hero-bg-img"
            style={{ backgroundImage: `url("${slide.bgImage}")` }}
          ></div>

          {/* Dark Overlay */}
          {/* <div className="hero-overlay"></div> */}

          {/* Container Content */}
          <div className="container position-relative z-3 my-auto py-4 py-lg-5">
            <div className="row align-items-center g-4">
              {/* Left Column: Typography & CTAs (Left-Aligned on all devices) */}
              <div className="col-lg-7 text-start hero-content-left">
                <div className="hero-badge-tag">
                  <i className="bi bi-star-fill me-1" style={{ fontSize: '0.75rem' }}></i>
                  <span>|| {slide.tag} ||</span>
                </div>
                <h1 className="hero-title">
                  {slide.title.split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                      {i === 1 ? <span className="gold-gradient-text">{line}</span> : line}
                      {i < slide.title.split('\n').length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </h1>
                <p className="hero-desc">{slide.desc}</p>
                <div className="hero-buttons">
                  <a href={slide.btnPrimaryLink} className="btn btn-hero-donate">
                    <i className="bi bi-heart-fill me-1"></i>
                    <span>{slide.btnPrimaryText}</span>
                  </a>
                  <a href={slide.btnSecondaryLink} className="btn btn-hero-watch">
                    <span className="play-icon-circle me-1">
                      <i className="bi bi-play-fill"></i>
                    </span>
                    <span>{slide.btnSecondaryText}</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Devotional Imagery Frame (Desktop Only) */}
              {/* <div className="col-lg-5 text-center hero-content-right d-none d-lg-block">
                <div className="hero-image-frame">
                  <div className="hero-deity-card">
                    <img src={slide.cardImage} alt={slide.tag} />
                    <div className="deity-card-badge">
                      <i className="bi bi-flower1"></i> Om Sai Ram
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      ))}



     

      {/* Organic Golden Wave Curve Divider */}
      <div className="hero-bottom-wave">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          {/* Glowing Golden Stroke Accent Layer */}
          <path
            d="M0,45 C320,105 640,15 960,75 C1120,110 1280,40 1440,20 L1440,120 L0,120 Z"
            fill="none"
            stroke="#c59b27"
            strokeWidth="5"
          ></path>
          {/* Solid Cream Base Layer */}
          <path
            d="M0,48 C320,108 640,18 960,78 C1120,113 1280,43 1440,23 L1440,120 L0,120 Z"
            fill="#fffbf2"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Herosection;