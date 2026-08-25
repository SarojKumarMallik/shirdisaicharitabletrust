import React, { useState, useEffect } from 'react';
import './Testimonial.css';
import male from '../../assets/man.png';
import female from '../../assets/woman.png';

const testimonialsData = [
  {
    id: 1,
    name: "Soumya Ranjan Mohapatra",
    role: "Volunteer",
    image: male,
    rating: 5,
    isOdia: true,
    content:
      "ଶ୍ରୀ ଶିର୍ଡ଼ି ସାଇ ଚାରିଟେବଲ ଟ୍ରଷ୍ଟର ସେବା କାର୍ଯ୍ୟ ମୋତେ ବହୁତ ପ୍ରଭାବିତ କରିଛି। ଲୋକମାନଙ୍କୁ ସାହାଯ୍ୟ କରିବା, ସ୍ୱାସ୍ଥ୍ୟ ଶିବିର ଆୟୋଜନ କରିବା ଏବଂ ଶିକ୍ଷା କ୍ଷେତ୍ରରେ ସହଯୋଗ କରିବା ଟ୍ରଷ୍ଟର ଏକ ସୁନ୍ଦର ପ୍ରୟାସ। ଏଭଳି ମାନବ ସେବା ଆହୁରି ଆଗକୁ ବଢ଼ୁ।"
  },
  {
    id: 2,
    name: "Priyanka Priyadarshini Jena",
    role: "Education Supporter",
    image:
      female,
    rating: 5,
    isOdia: false,
    content:
      "What I appreciate most about the Trust is its focus on helping people in a practical and meaningful way. The educational activities and support for students show a genuine commitment to creating better opportunities for the community."
  },
  {
    id: 3,
    name: "Debasis Samantaray",
    role: "Community Volunteer",
    image:
      male,
    rating: 5,
    isOdia: true,
    content:
      "ଟ୍ରଷ୍ଟ ସହିତ ଜଡିତ ହୋଇ ମୁଁ ଅନେକ ସେବା କାର୍ଯ୍ୟକୁ ନିକଟରୁ ଦେଖିଛି। ଆବଶ୍ୟକତା ଥିବା ଲୋକଙ୍କୁ ସହାୟତା, ସମୁଦାୟ କାର୍ଯ୍ୟକ୍ରମ ଏବଂ ବିଭିନ୍ନ ଚାରିଟେବଲ ପ୍ରୟାସରେ ଟ୍ରଷ୍ଟର ଭୂମିକା ପ୍ରଶଂସନୀୟ।"
  },
  {
    id: 4,
    name: "Dr. Minati Tripathy",
    role: "Healthcare Volunteer",
    image:
      female,
    rating: 5,
    isOdia: false,
    content:
      "The health and eye-care initiatives are a meaningful way of bringing basic healthcare support closer to the community. I truly value the Trust's efforts to make these services accessible to people who may otherwise find them difficult to reach."
  },
  {
    id: 5,
    name: "Bikash Kumar Sahoo",
    role: "Trust Supporter",
    image:
      male,
    rating: 5,
    isOdia: true,
    content:
      "ଶ୍ରୀ ଶିର୍ଡ଼ି ସାଇ ଚାରିଟେବଲ ଟ୍ରଷ୍ଟର ସେବା ମନୋଭାବ ମୋତେ ସବୁଠାରୁ ଅଧିକ ଭଲ ଲାଗେ। ଶିକ୍ଷା, ସ୍ୱାସ୍ଥ୍ୟ ଏବଂ ଗରିବ ଓ ଆବଶ୍ୟକତା ଥିବା ଲୋକଙ୍କ ପାଇଁ ଟ୍ରଷ୍ଟର ପ୍ରୟାସ ନିଶ୍ଚିତ ଭାବେ ପ୍ରଶଂସାର ଯୋଗ୍ୟ।"
  },
  {
    id: 6,
    name: "Rashmita Pattanaik",
    role: "Community Volunteer",
    image:
      female,
    rating: 5,
    isOdia: false,
    content:
      "Being associated with the Trust has been a meaningful experience for me. The way it brings together spiritual values with education, healthcare and community welfare makes its work feel genuinely connected to people's everyday needs."
  }
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeAnim, setFadeAnim] = useState(false);

  // Automatic slide every 4.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setFadeAnim(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
        setFadeAnim(false);
      }, 250);
    }, 4500);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const handlePrev = () => {
    setFadeAnim(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
      setFadeAnim(false);
    }, 200);
  };

  const handleNext = () => {
    setFadeAnim(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
      setFadeAnim(false);
    }, 200);
  };

  const handleDotClick = (idx) => {
    if (idx === currentIndex) return;
    setFadeAnim(true);
    setTimeout(() => {
      setCurrentIndex(idx);
      setFadeAnim(false);
    }, 200);
  };

  const currentItem = testimonialsData[currentIndex];

  return (
    <section className="testimonial-section py-5">
      <div className="container">
        {/* Simple & Clean English Header */}
        <div className="text-center testimonial-header mb-5">
          <span className="testimonial-badge mb-2">
            <i className="bi bi-star-fill text-warning me-2"></i>
            TESTIMONIALS
          </span>
          <h2 className="testimonial-main-title mt-2 mb-2">
            What People Say About Us
          </h2>
          <p className="testimonial-subtitle mx-auto">
            Inspiring experiences from our donors, volunteers, and beneficiaries across Odisha.
          </p>
        </div>

        {/* Centered Auto-Slide Testimonial Showcase */}
        <div className="testimonial-showcase-wrapper mx-auto">
          <div className={`testimonial-card-main ${fadeAnim ? 'fade-out' : 'fade-in'}`}>
            {/* Top Row: Quote Icon on Left, 5 Stars on Right */}
            <div className="d-flex justify-content-between align-items-center mb-3">
              <i className="bi bi-quote quote-icon text-warning"></i>
              <div className="star-rating d-flex gap-1 text-warning">
                {[...Array(currentItem.rating)].map((_, i) => (
                  <i key={i} className="bi bi-star-fill"></i>
                ))}
              </div>
            </div>

            {/* Testimonial Quote Body */}
            <div className="testimonial-body my-3">
              <p className={`testimonial-text ${currentItem.isOdia ? 'odia-font' : ''}`}>
                "{currentItem.content}"
              </p>
            </div>

            {/* Bottom Row: Author Avatar, Name, Location (below name), and Role */}
            <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 pt-3 border-top border-secondary-subtle">
              <div className="d-flex align-items-center gap-3">
                <img
                  src={currentItem.image}
                  alt={currentItem.name}
                  className="author-avatar"
                />
                <div>
                  <h5 className="author-name mb-1">{currentItem.name}</h5>
                  <div className="author-meta-line d-flex align-items-center gap-2 flex-wrap">


                    <span className="author-role">{currentItem.role}</span>
                  </div>
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="slider-controls d-flex align-items-center gap-2">
                <button
                  type="button"
                  className="nav-btn"
                  onClick={handlePrev}
                  aria-label="Previous testimonial"
                >
                  <i className="bi bi-arrow-left"></i>
                </button>
                <span className="slide-counter text-muted small">
                  {currentIndex + 1} / {testimonialsData.length}
                </span>
                <button
                  type="button"
                  className="nav-btn"
                  onClick={handleNext}
                  aria-label="Next testimonial"
                >
                  <i className="bi bi-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>

          {/* Dots Pagination */}
          <div className="d-flex justify-content-center align-items-center gap-2 mt-4">
            {testimonialsData.map((_, dotIdx) => (
              <button
                key={dotIdx}
                type="button"
                className={`testimonial-dot ${dotIdx === currentIndex ? 'active-dot' : ''}`}
                onClick={() => handleDotClick(dotIdx)}
                aria-label={`Go to slide ${dotIdx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;