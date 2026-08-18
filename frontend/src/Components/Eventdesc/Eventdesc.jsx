import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Eventdesc.css';

const EVENTS_DATA = [
  {
    id: 'guru-purnima',
    title: 'Grand Guru Purnima Mahotsav & Mega Annadanam',
    category: 'Spiritual Utsavs',
    status: 'Upcoming',
    date: { day: '21', month: 'JUL', year: '2026' },
    time: '06:00 AM – 09:00 PM',
    location: 'Sri Shirdi Sai Ashram Ground, Kendrapara, Odisha',
    image: 'https://images.unsplash.com/photo-1609946782200-a6164a2cb457?auto=format&fit=crop&q=80&w=800',
    description:
      'Join thousands of devotees for the most sacred annual Guru Purnima celebrations featuring Kakad Aarti, Sai Palkhi Yatra, Guru Vandana, and continuous Annadanam for 10,000+ pilgrims.',
    highlights: [
      'Palkhi Procession through Kendrapara city with Bhajan mandalis',
      'Maha Abhishek & Floral Shringar of Bhagwan Shirdi Sai Baba',
      'Continuous 10,000+ Prasadam & Annadanam distribution',
      'Spiritual discourse by Dr. Rudra Mohanty & venerable sadhus'
    ],
    featured: true,
    expectedDevotees: '10,000+ Devotees',
    ctaText: 'Register as Sevak',
    sponsorText: 'Sponsor Annadanam'
  },
  {
    id: 'medical-camp-aug',
    title: 'Mega Multi-Specialty Free Healthcare & Eye Camp',
    category: 'Healthcare Camps',
    status: 'Upcoming',
    date: { day: '15', month: 'AUG', year: '2026' },
    time: '08:30 AM – 04:30 PM',
    location: 'Community Health Complex, Narada, Kendrapara',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800',
    description:
      'A comprehensive free medical camp providing consultations with senior specialists in Cardiology, Pediatrics, Gynecology, Orthopedics, and free diagnostic screenings.',
    highlights: [
      'Free ECG, Blood Sugar, Hemoglobin & BP diagnostics',
      'Free power eye testing & distribution of 500+ prescription spectacles',
      'Free generic & essential medicines for 1,500+ rural patients',
      'Specialized counseling on nutrition and preventive hygiene'
    ],
    featured: false,
    expectedDevotees: '1,500+ Beneficiaries',
    ctaText: 'Volunteer as Medic',
    sponsorText: 'Sponsor Medicine Kit'
  },
  {
    id: 'ram-navami',
    title: 'Sri Ram Navami & Sai Janmotsav Celebrations',
    category: 'Spiritual Utsavs',
    status: 'Annual Utsav',
    date: { day: '05', month: 'APR', year: '2026' },
    time: '05:30 AM – 10:00 PM',
    location: 'Sri Shirdi Sai Temple Mandir, Bhubaneswar, Odisha',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800',
    description:
      'Commemorating the auspicious appearance day with traditional cradle ceremony (Palana Utsav), Ramayana Parayan, Dhoop Aarti, and special prasad distribution.',
    highlights: [
      'Akhanda Sai Satcharitra & Ramayana Parayan recitation',
      'Special Abhishek with holy water from sacred rivers',
      'Distribution of 5,000+ packets of sweet prasad and meals',
      'Evening classical devotional music and bhajan sandhya'
    ],
    featured: false,
    expectedDevotees: '7,500+ Devotees',
    ctaText: 'Participate in Puja',
    sponsorText: 'Sponsor Temple Flowers'
  },
  {
    id: 'vidya-daan-drive',
    title: 'Annual Vidya Daan: 2,500 School Kit Distribution',
    category: 'Annadanam & Relief',
    status: 'Upcoming',
    date: { day: '05', month: 'SEP', year: '2026' },
    time: '09:30 AM – 02:00 PM',
    location: 'Zilla Parishad High School Grounds, Kendrapara',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800',
    description:
      'Equipping 2,500 underprivileged rural school children across 20 village schools with school bags, notebooks, geometry boxes, shoes, and umbrellas for the academic year.',
    highlights: [
      'Full academic kits provided to students from grades 1 through 10',
      'Merit scholarship awards for top performing rural students',
      'Interactive motivational workshop on moral education',
      'Wholesome hot lunch distribution for all students and parents'
    ],
    featured: false,
    expectedDevotees: '2,500+ Students',
    ctaText: 'Volunteer for Drive',
    sponsorText: 'Sponsor a Student Kit'
  },
  {
    id: 'plantation-drive',
    title: 'Mission Green Earth: 10,000 Tree Plantation Drive',
    category: 'Annadanam & Relief',
    status: 'Upcoming',
    date: { day: '12', month: 'OCT', year: '2026' },
    time: '07:00 AM – 12:30 PM',
    location: 'Coastal Canal Road & Village Schools, Kendrapara',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800',
    description:
      'Mass environmental afforestation drive planting native shade, fruit-bearing, and medicinal trees along coastal embankments and rural school playgrounds.',
    highlights: [
      'Planting Neem, Peepal, Banyan, Mango, and Jamun saplings',
      'Tree adoption pledge program for youth volunteers',
      'Distribution of free medicinal saplings to village families',
      'Community workshop on organic farming & water conservation'
    ],
    featured: false,
    expectedDevotees: '1,000+ Volunteers',
    ctaText: 'Adopt a Tree',
    sponsorText: 'Sponsor 50 Saplings'
  },
  {
    id: 'samadhi-diwas',
    title: 'Sai Punyatithi Mahasamadhi & Deepotsav Festival',
    category: 'Spiritual Utsavs',
    status: 'Annual Utsav',
    date: { day: '24', month: 'OCT', year: '2026' },
    time: '05:00 AM – 11:00 PM',
    location: 'Sri Shirdi Sai Ashram Campus, Kendrapara, Odisha',
    image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=800',
    description:
      'Observing the solemn anniversary of Baba\'s Mahasamadhi with 1,008 oil lamps (Deepotsav), night-long Akhanda Bhajan, and mass charity to destitute elders.',
    highlights: [
      'Lighting of 1,008 sacred ghee and oil lamps at dusk',
      'Maha Samadhi Pooja with holy chantings and Vedic hymns',
      'Distribution of 1,500 warm winter blankets to needy elders',
      'Maha Prasadam served to all visitors and pilgrim families'
    ],
    featured: false,
    expectedDevotees: '12,000+ Devotees',
    ctaText: 'Light a Deepam',
    sponsorText: 'Sponsor Blanket Drive'
  }
];

const WEEKLY_SCHEDULE = [
  {
    day: 'Every Thursday',
    event: 'Maha Kakad Aarti, Shej Aarti & Annadanam',
    time: '06:00 AM – 09:30 PM',
    venue: 'Main Temple Ashram, Kendrapara',
    desc: 'Grand weekly congregation with special floral alankaram, choral bhajans, and unlimited pure vegetarian lunch and dinner prasadam.'
  },
  {
    day: 'Every Ekadashi',
    event: 'Sai Satcharitra Akhanda Parayan',
    time: '07:00 AM – 07:00 PM',
    venue: 'Prayer Hall & Online Live Stream',
    desc: 'Continuous reading of the sacred chapters of Sri Sai Satcharitra with devotional kirtan and holy prasad distribution.'
  },
  {
    day: '1st Sunday Monthly',
    event: 'Rural Health Clinic & Free Medicine Day',
    time: '09:00 AM – 01:00 PM',
    venue: 'Charitable Clinic, Narada',
    desc: 'Free general checkups, sugar & BP tests, pediatric consultation, and zero-cost prescription medicines for elderly and village mothers.'
  },
  {
    day: 'Last Saturday Monthly',
    event: 'Swachhata & Village Green Drive',
    time: '07:30 AM – 11:30 AM',
    venue: 'Selected Rural Village Clusters',
    desc: 'Community cleanliness mission, waste management awareness, and planting 500+ saplings along village roads and schools.'
  }
];

const Eventdesc = () => {
  const [activeCategory, setActiveCategory] = useState('All Events');
  const [selectedEventModal, setSelectedEventModal] = useState(null);

  const categories = [
    'All Events',
    'Upcoming Events',
    'Spiritual Utsavs',
    'Healthcare Camps',
    'Annadanam & Relief'
  ];

  const filteredEvents = EVENTS_DATA.filter((item) => {
    if (activeCategory === 'All Events') return true;
    if (activeCategory === 'Upcoming Events') return item.status === 'Upcoming';
    return item.category === activeCategory;
  });

  const featuredEvent = EVENTS_DATA.find((e) => e.featured) || EVENTS_DATA[0];

  return (
    <section className="eventdesc-page-section">
      {/* Background Ambient Glow Accents */}
      <div className="eventdesc-glow eventdesc-glow-1"></div>
      <div className="eventdesc-glow eventdesc-glow-2"></div>

      <div className="container position-relative z-2">
        {/* Section Intro Header (Left Aligned) */}
        <div className="text-start max-w-800 mb-4 mb-lg-5">
          <div className="eventdesc-badge mb-3">
            <i className="bi bi-calendar2-star-fill text-warning me-2"></i>
            <span>Sacred Gatherings & Seva Drives</span>
          </div>

          <h2 className="eventdesc-main-title text-start">
            Celebrating Devotion, Unity & <span className="eventdesc-highlight">Selfless Service</span>
          </h2>

          <p className="eventdesc-lead-text text-start">
            Experience the divine energy of our spiritual festivals, holy Utsavs, and community outreach drives. Under the compassionate guidance of <strong>Sri Sri Shirdi Sai Charitable Trust</strong>, every gathering is an opportunity to worship through devotion and serve humanity with humility.
          </p>
        </div>

        {/* Mega Spotlight Event Banner (Hero Card) */}
        {featuredEvent && (
          <div className="event-spotlight-card mb-5 p-4 p-md-5 rounded-4 shadow-sm position-relative overflow-hidden">
            <div className="spotlight-radial-glow"></div>

            <div className="row align-items-center g-4 g-lg-5 position-relative z-2">
              {/* Left Column: Spotlight Image with Date Chip */}
              <div className="col-lg-5">
                <div className="spotlight-img-wrapper position-relative">
                  <img
                    src={featuredEvent.image}
                    alt={featuredEvent.title}
                    className="spotlight-img rounded-4 w-100 shadow"
                    loading="lazy"
                  />
                  <div className="spotlight-date-chip">
                    <span className="chip-day">{featuredEvent.date.day}</span>
                    <span className="chip-month">{featuredEvent.date.month}</span>
                    <span className="chip-year">{featuredEvent.date.year}</span>
                  </div>
                  <div className="spotlight-status-tag">
                    <i className="bi bi-stars me-1 text-warning"></i>
                    <span>Featured Mahotsav</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Narrative & Action */}
              <div className="col-lg-7 text-start">
                <div className="d-flex align-items-center gap-2 mb-2 flex-wrap">
                  <span className="spotlight-category-badge">
                    <i className="bi bi-flower1 me-1"></i>
                    {featuredEvent.category}
                  </span>
                  <span className="spotlight-attendees-badge">
                    <i className="bi bi-people-fill me-1 text-warning"></i>
                    {featuredEvent.expectedDevotees}
                  </span>
                </div>

                <h3 className="spotlight-title mb-3">{featuredEvent.title}</h3>

                <div className="spotlight-meta-strip d-flex flex-wrap gap-3 gap-md-4 mb-3 pb-3 border-bottom border-light border-opacity-10">
                  <div className="meta-item d-flex align-items-center gap-2">
                    <i className="bi bi-clock-fill text-warning"></i>
                    <span>{featuredEvent.time}</span>
                  </div>
                  <div className="meta-item d-flex align-items-center gap-2">
                    <i className="bi bi-geo-alt-fill text-danger"></i>
                    <span>{featuredEvent.location}</span>
                  </div>
                </div>

                <p className="spotlight-desc mb-3">{featuredEvent.description}</p>

                {/* Highlights Mini List */}
                <div className="row g-2 mb-4">
                  {featuredEvent.highlights.slice(0, 2).map((h, i) => (
                    <div key={i} className="col-sm-6">
                      <div className="spotlight-highlight-box p-2 px-3 rounded-3 d-flex align-items-center gap-2">
                        <i className="bi bi-check-circle-fill text-warning fs-6 flex-shrink-0"></i>
                        <span className="small text-white-50">{h}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Spotlight Action Buttons */}
                <div className="d-flex align-items-center gap-3 flex-wrap">
                  <Link to="/contact" className="btn btn-spotlight-primary">
                    <i className="bi bi-person-plus-fill me-2"></i>
                    <span>{featuredEvent.ctaText}</span>
                  </Link>
                  <Link to="/donate" className="btn btn-spotlight-secondary">
                    <i className="bi bi-heart-fill me-2 text-warning"></i>
                    <span>{featuredEvent.sponsorText}</span>
                  </Link>
                  <button
                    type="button"
                    className="btn btn-spotlight-details"
                    onClick={() => setSelectedEventModal(featuredEvent)}
                  >
                    <i className="bi bi-info-circle me-1"></i> Full Schedule
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Category Filter Pills (Centered & Wrapped on Mobile, 1-Row on Desktop) */}
        <div className="eventdesc-filter-wrapper mb-5">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`btn eventdesc-filter-pill ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat === 'All Events' && <i className="bi bi-grid-fill me-1"></i>}
              {cat === 'Upcoming Events' && <i className="bi bi-calendar-event me-1"></i>}
              {cat === 'Spiritual Utsavs' && <i className="bi bi-stars me-1"></i>}
              {cat === 'Healthcare Camps' && <i className="bi bi-hospital me-1"></i>}
              {cat === 'Annadanam & Relief' && <i className="bi bi-heart-fill me-1"></i>}
              <span>{cat}</span>
            </button>
          ))}
        </div>

        {/* Events Grid (Clean 2-Column Responsive Card Grid) */}
        <div className="row g-4 mb-5">
          {filteredEvents.map((event) => (
            <div key={event.id} className="col-12 col-lg-6">
              <div className="event-card rounded-4 p-3 p-sm-4 h-100 d-flex flex-column justify-content-between shadow-sm">
                <div>
                  {/* Card Header Media & Floating Date Badge */}
                  <div className="event-card-img-wrap position-relative rounded-3 overflow-hidden mb-3">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="event-card-img w-100"
                      loading="lazy"
                    />
                    <div className="event-date-badge">
                      <div className="date-day">{event.date.day}</div>
                      <div className="date-month">{event.date.month}</div>
                    </div>
                    <div className="event-category-chip">
                      <span>{event.category}</span>
                    </div>
                  </div>

                  {/* Title & Metadata */}
                  <div className="d-flex align-items-center justify-content-between mb-2 flex-wrap gap-2">
                    <span className="badge event-status-pill">
                      <i className="bi bi-dot"></i> {event.status}
                    </span>
                    <span className="event-expected-pill small text-muted">
                      <i className="bi bi-people-fill text-warning me-1"></i>
                      {event.expectedDevotees}
                    </span>
                  </div>

                  <h4 className="event-card-title mb-2">{event.title}</h4>

                  <div className="event-location-info mb-3">
                    <div className="d-flex align-items-center gap-2 text-muted small mb-1">
                      <i className="bi bi-clock-fill text-warning flex-shrink-0"></i>
                      <span>{event.time}</span>
                    </div>
                    <div className="d-flex align-items-center gap-2 text-muted small">
                      <i className="bi bi-geo-alt-fill text-danger flex-shrink-0"></i>
                      <span>{event.location}</span>
                    </div>
                  </div>

                  <p className="event-card-desc text-muted mb-3">{event.description}</p>

                  {/* Key Highlights Bullet points */}
                  <div className="event-highlights-list mb-4">
                    {event.highlights.slice(0, 2).map((h, hIdx) => (
                      <div key={hIdx} className="event-highlight-item d-flex align-items-start gap-2 mb-1">
                        <i className="bi bi-check-circle-fill text-warning flex-shrink-0 mt-1"></i>
                        <span className="small text-secondary">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Bar */}
                <div className="event-card-action-bar pt-3 border-top d-flex align-items-center justify-content-between gap-2 mt-auto">
                  <Link to="/contact" className="btn btn-event-primary flex-grow-1 text-center justify-content-center">
                    <span>{event.ctaText}</span>
                    <i className="bi bi-arrow-up-right ms-1"></i>
                  </Link>

                  <Link to="/donate" className="btn btn-event-sponsor" title="Sponsor this event">
                    <i className="bi bi-heart-fill me-1 text-danger"></i>
                    <span>Sponsor</span>
                  </Link>

                  <button
                    type="button"
                    className="btn btn-event-info"
                    title="View Event Details"
                    onClick={() => setSelectedEventModal(event)}
                  >
                    <i className="bi bi-eye-fill"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Regular Weekly & Monthly Spiritual Timetable */}
        <div className="weekly-schedule-container p-4 p-md-5 rounded-4 shadow-sm mb-5">
          <div className="text-center max-w-800 mx-auto mb-4">
            <div className="eventdesc-badge mb-2">
              <i className="bi bi-clock-history text-warning me-2"></i>
              <span>Sacred Timetable</span>
            </div>
            <h3 className="schedule-main-title">Recurring Weekly & Monthly Seva Schedule</h3>
            <p className="text-muted small">
              Participate regularly at Sri Shirdi Sai Charitable Trust Ashram and centers. All devotees and families are warmly welcomed.
            </p>
          </div>

          <div className="row g-3 g-lg-4">
            {WEEKLY_SCHEDULE.map((item, idx) => (
              <div key={idx} className="col-12 col-md-6">
                <div className="schedule-item-card p-3 p-sm-4 rounded-3 h-100 d-flex flex-column justify-content-between">
                  <div>
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <span className="schedule-day-badge">{item.day}</span>
                      <span className="schedule-time small text-muted">
                        <i className="bi bi-clock me-1 text-warning"></i>
                        {item.time}
                      </span>
                    </div>
                    <h5 className="schedule-event-name mb-2">{item.event}</h5>
                    <p className="schedule-venue small text-warning mb-2">
                      <i className="bi bi-geo-alt-fill me-1 text-danger"></i>
                      {item.venue}
                    </p>
                    <p className="schedule-desc text-muted small mb-0">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sai Baba Teaching Quote */}
        <div className="eventdesc-quote-card my-5 p-4 p-md-5 rounded-4 text-center">
          <i className="bi bi-quote quote-icon mb-2 d-block"></i>
          <p className="quote-text mb-2">
            "Those who come together with faith and devotion to serve the distressed and sing the divine glory shall find peace, joy, and spiritual fulfillment."
          </p>
          <span className="quote-author">— Sri Shirdi Sai Baba</span>
        </div>

        {/* Bottom Help & Event Sponsorship Banner */}
        <div className="workdesc-bottom-cta p-4 p-md-5 rounded-4 text-center text-lg-start position-relative overflow-hidden">
          <div className="bottom-cta-glow"></div>

          <div className="row align-items-center g-4 position-relative z-2">
            <div className="col-lg-7 text-center text-lg-start">
              <div className="bottom-cta-badge d-inline-flex align-items-center gap-2 mb-3">
                <i className="bi bi-star-fill text-warning"></i>
                <span>Host or Sponsor an Event</span>
              </div>
              <h3 className="bottom-cta-title text-white fw-bold mb-3">
                Wish to Sponsor Annadanam or a Health Camp on Your Special Day?
              </h3>
              <p className="bottom-cta-desc text-white-50 mb-0">
                Celebrate birthdays, wedding anniversaries, or memorial days by feeding the needy, supporting rural clinics, or distributing school kits through our Trust.
              </p>
            </div>

            <div className="col-lg-5">
              <div className="bottom-cta-btn-group d-flex align-items-center justify-content-center justify-content-lg-end gap-3 flex-wrap flex-sm-nowrap">
                <Link to="/contact" className="btn btn-bottom-cta-connect w-100 w-sm-auto">
                  <i className="bi bi-calendar-check-fill me-2 text-danger"></i>
                  <span>Plan an Event</span>
                </Link>
                <Link to="/donate" className="btn btn-bottom-cta-donate w-100 w-sm-auto">
                  <i className="bi bi-heart-fill me-2 text-danger"></i>
                  <span>Sponsor Seva</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Modal for Event Details & Full Schedule */}
      {selectedEventModal && (
        <div className="event-modal-backdrop" onClick={() => setSelectedEventModal(null)}>
          <div
            className="event-modal-content rounded-4 p-4 p-md-5 text-start shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="d-flex align-items-center justify-content-between mb-3 border-bottom pb-3">
              <div className="d-flex align-items-center gap-2">
                <span className="badge bg-warning text-dark font-weight-bold px-3 py-1 rounded-pill">
                  {selectedEventModal.category}
                </span>
                <span className="text-muted small">
                  <i className="bi bi-calendar3 me-1"></i>
                  {selectedEventModal.date.day} {selectedEventModal.date.month} {selectedEventModal.date.year}
                </span>
              </div>
              <button
                type="button"
                className="btn-close"
                onClick={() => setSelectedEventModal(null)}
                aria-label="Close"
              ></button>
            </div>

            {/* Modal Body */}
            <h4 className="event-modal-title mb-3">{selectedEventModal.title}</h4>

            <div className="event-modal-media mb-3">
              <img
                src={selectedEventModal.image}
                alt={selectedEventModal.title}
                className="event-modal-img rounded-3 w-100"
              />
            </div>

            <div className="row g-2 mb-3 text-muted small">
              <div className="col-sm-6">
                <i className="bi bi-clock-fill text-warning me-2"></i>
                <strong>Timings:</strong> {selectedEventModal.time}
              </div>
              <div className="col-sm-6">
                <i className="bi bi-geo-alt-fill text-danger me-2"></i>
                <strong>Venue:</strong> {selectedEventModal.location}
              </div>
            </div>

            <p className="text-secondary mb-3">{selectedEventModal.description}</p>

            <h6 className="fw-bold text-dark mb-2">Detailed Program Highlights:</h6>
            <ul className="event-modal-list mb-4 ps-3">
              {selectedEventModal.highlights.map((item, idx) => (
                <li key={idx} className="small text-muted mb-1">
                  {item}
                </li>
              ))}
            </ul>

            {/* Modal Actions */}
            <div className="d-flex align-items-center gap-3 justify-content-end pt-3 border-top">
              <Link to="/contact" className="btn btn-dark rounded-pill px-4 py-2 small">
                <i className="bi bi-person-plus-fill me-1"></i> {selectedEventModal.ctaText}
              </Link>
              <Link to="/donate" className="btn btn-warning text-dark fw-bold rounded-pill px-4 py-2 small">
                <i className="bi bi-heart-fill me-1 text-danger"></i> {selectedEventModal.sponsorText}
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Eventdesc;