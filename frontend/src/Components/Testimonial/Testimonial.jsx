import React, { useState, useEffect } from 'react';
import './Testimonial.css';

const testimonialsData = [
  {
    id: 1,
    name: "Soumya Ranjan Mohapatra",
    location: "Cuttack, Odisha",
    role: "Regular Donor & Volunteer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    rating: 5,
    isOdia: true,
    content: "ଶ୍ରୀ ଶିର୍ଡ଼ି ସାଇ ଟ୍ରଷ୍ଟର ଅନ୍ନଦାନ ସେବା ଏବଂ ଗରିବ ପିଲାଙ୍କ ପାଠପଢ଼ା ସହାୟତା ସତରେ ଅତୁଳନୀୟ। ପ୍ରତି ଗୁରୁବାର ଦିନ ଶହ ଶହ ଅସହାୟ ଲୋକଙ୍କୁ ପ୍ରସାଦ ଓ ଖାଦ୍ୟ ବଣ୍ଟନ କରାଯାଉଛି। ବାବାଙ୍କ କୃପାରୁ ଏହି ପବିତ୍ର ସେବା ସାରା ଓଡ଼ିଶାରେ ଆଗକୁ ବଢ଼ୁ।"
  },
  {
    id: 2,
    name: "Priyanka Priyadarshini Jena",
    location: "Bhubaneswar, Odisha",
    role: "Education Supporter",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200",
    rating: 5,
    isOdia: false,
    content: "The Trust's dedication to educating underprivileged children across Odisha is remarkable. Providing school supplies, uniforms, and scholarships has transformed numerous young lives. Truly grateful to be a part of this mission."
  },
  {
    id: 3,
    name: "Debasis Samantaray",
    location: "Puri, Odisha",
    role: "Community Seva Volunteer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
    rating: 5,
    isOdia: true,
    content: "ପୁରୀ ଏବଂ ଉପକୂଳବର୍ତ୍ତୀ ଅଞ୍ଚଳରେ ବନ୍ୟା ଓ ବାତ୍ୟା ସମୟରେ ଟ୍ରଷ୍ଟ ସଦସ୍ୟମାନଙ୍କ ୨୪ ଘଣ୍ଟିଆ ସେବା ଅତ୍ୟନ୍ତ ପ୍ରଶଂସନୀୟ। ନିଃସ୍ୱାର୍ଥପର ଭାବେ ପ୍ରଭାବିତ ପରିବାର ନିକଟରେ ଶୁଖିଲା ଖାଦ୍ୟ, ପାଣି ଓ ଔଷଧ ପହଞ୍ଚାଉଛନ୍ତି।"
  },
  {
    id: 4,
    name: "Dr. Minati Tripathy",
    location: "Berhampur, Odisha",
    role: "Healthcare Volunteer Doctor",
    image: "https://images.unsplash.com/photo-1594824813589-322123d53f53?auto=format&fit=crop&q=80&w=200",
    rating: 5,
    isOdia: false,
    content: "Volunteering with the medical team during free health camps in Ganjam has been deeply fulfilling. Free consultations, diagnostic tests, and medicines are distributed to rural families with genuine care and compassion."
  },
  {
    id: 5,
    name: "Bikash Kumar Sahoo",
    location: "Rourkela, Odisha",
    role: "Monthly Contributor",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200",
    rating: 5,
    isOdia: true,
    content: "ଏହି ଟ୍ରଷ୍ଟର ସବୁଠାରୁ ବଡ଼ ବିଶେଷତ୍ୱ ହେଉଛି ସ୍ୱଚ୍ଛତା। ଆମ ଦାନ କିପରି ସିଧାସଳଖ ଅସହାୟ ଲୋକଙ୍କ ନିକଟରେ ପହଞ୍ଚୁଛି ତାହାର ସମ୍ପୂର୍ଣ୍ଣ ବିବରଣୀ ମିଳେ। ମାନବ ସେବା ହିଁ ମାଧବ ସେବା ବୋଲି ଏଠାରେ ଅନୁଭବ ହୁଏ।"
  },
  {
    id: 6,
    name: "Rashmita Pattanaik",
    location: "Balasore, Odisha",
    role: "Women Livelihood Partner",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200",
    rating: 5,
    isOdia: false,
    content: "The skill development and sewing training initiatives have helped hundreds of rural women gain financial independence and live with dignity. Sincere appreciation to the Trust for this impactful social transformation."
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
                    <span className="author-location">
                      <i className="bi bi-geo-alt-fill text-danger me-1"></i>
                      {currentItem.location}
                    </span>
                    <span className="meta-separator">•</span>
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