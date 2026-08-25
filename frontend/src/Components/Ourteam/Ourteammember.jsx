import React, { useState } from 'react';
import './Ourteammember.css';
import founder from '../../assets/founder.png';
import man from '../../assets/male.png';
import woman from '../../assets/female.png';

const teamMembersData = [
  {
    id: 1,
    name: 'Dr. Rudra Mohanty',
    role: 'Managing Trustee',
    category: 'Office Bearers',
    image: founder,
    email: 'contact@shirdisaicharitabletrust.org',
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    badge: 'Managing Trustee',
    desc: 'Oversees leadership, administrative governance, and overall charitable & spiritual initiatives of the Trust.'
  },
  {
    id: 2,
    name: 'Sri Saktikanta Mohanty',
    role: 'President',
    category: 'Office Bearers',
    image: man,
    email: 'contact@shirdisaicharitabletrust.org',
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    badge: 'President',
    desc: 'Guides strategic institutional direction, organizational governance, and community welfare outreach.'
  },
  {
    id: 3,
    name: 'Sri Sunil Mohanty',
    role: 'Secretary',
    category: 'Office Bearers',
    image: man,
    email: 'contact@shirdisaicharitabletrust.org',
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    badge: 'Secretary',
    desc: 'Coordinates operational seva activities, logistics, volunteer coordination, and trust communications.'
  },
  {
    id: 4,
    name: 'Sri Somen Mohanty',
    role: 'Treasurer',
    category: 'Office Bearers',
    image: man,
    email: 'contact@shirdisaicharitabletrust.org',
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    badge: 'Treasurer',
    desc: 'Manages financial transparency, accounts, fund allocations, and resource management for all seva projects.'
  },
  {
    id: 5,
    name: 'Sri Nikhil Mohanty',
    role: 'Trustee / Member',
    category: 'Trust Members',
    image: man,
    email: 'contact@shirdisaicharitabletrust.org',
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    badge: 'Trustee',
    desc: 'Active trustee supporting community development, temple seva programs, and public welfare.'
  },
  {
    id: 6,
    name: 'Sri Keshaba Chandra Mohanty',
    role: 'Trustee / Member',
    category: 'Trust Members',
    image: man,
    email: 'contact@shirdisaicharitabletrust.org',
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    badge: 'Trustee',
    desc: 'Dedicated trustee driving youth engagement, Annadanam seva logistics, and village outreach.'
  },
  {
    id: 7,
    name: 'Smt. Babita Das',
    role: 'Trustee / Member',
    category: 'Trust Members',
    image: woman,
    email: 'contact@shirdisaicharitabletrust.org',
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    badge: 'Trustee',
    desc: 'Passionate trustee advocating for women empowerment, child welfare, and community health.'
  },
  {
    id: 8,
    name: 'Smt. Snigdha Mohanty',
    role: 'Trustee / Member',
    category: 'Trust Members',
    image: woman,
    email: 'contact@shirdisaicharitabletrust.org',
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    badge: 'Trustee',
    desc: 'Committed trustee supporting education initiatives, cultural festivals, and devotional gatherings.'
  },
  {
    id: 9,
    name: 'Smt. Lopamudra Mohapatra',
    role: 'Trustee / Member',
    category: 'Trust Members',
    image: woman,
    email: 'contact@shirdisaicharitabletrust.org',
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    badge: 'Trustee',
    desc: 'Dedicated trustee actively contributing to social welfare, health camps, and relief operations.'
  }
];

const Ourteammember = () => {
  const [activeTab, setActiveTab] = useState('All');

  const filteredMembers = activeTab === 'All'
    ? teamMembersData
    : teamMembersData.filter((m) => m.category === activeTab);

  return (
    <section className="our-team-section py-5">
      {/* Subtle Background Glows */}
      <div className="team-bg-glow team-bg-glow-1"></div>
      <div className="team-bg-glow team-bg-glow-2"></div>

      <div className="container position-relative z-2">
        {/* Section Header */}
        <div className="text-center max-w-850 mx-auto mb-5 px-2">
          <div className="team-badge mb-3 shadow-sm">
            <i className="bi bi-stars text-warning me-2"></i>
            <span>GOVERNING BODY OF THE TRUST</span>
          </div>
          <h2 className="team-main-title fw-bold mb-3">
            Pillars of <span className="text-gradient-gold">Selfless Leadership &amp; Seva</span>
          </h2>
          <p className="team-subtitle text-muted mt-2">
            Dedicated trustees guiding Sri Sri Shirdi Sai Charitable Trust, Basantapur with <em>Shraddha</em> (Faith) and <em>Saburi</em> (Patience) to serve humanity with transparency, compassion, and divine love.
          </p>
        </div>

       

        {/* Team Members Grid - 3 Cards Per Row */}
        <div className="row g-4 justify-content-center">
          {filteredMembers.map((member) => (
            <div key={member.id} className="col-12 col-md-6 col-lg-4">
              <div className="team-card rounded-4 overflow-hidden bg-white d-flex flex-column h-100 position-relative">
                {/* Decorative Top Banner */}
                <div className="team-card-header-banner"></div>

                {/* Avatar Image Frame - Enlarged Square Squircle */}
                <div className="team-avatar-container">
                  <div className="team-avatar-glow"></div>
                  <div className="team-avatar-ring">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="team-card-img"
                    />
                  </div>
                </div>

                {/* Card Body */}
                <div className="team-card-body p-4 text-center d-flex flex-column justify-content-between flex-grow-1">
                  <div>
                    <h5 className="team-member-name fw-bold mb-1">
                      {member.name}
                    </h5>

                    <div className="team-member-role mb-3">
                      {member.role}
                    </div>

                    {/* <p className="team-member-desc text-muted mb-4">
                      {member.desc}
                    </p> */}
                  </div>

                  {/* Connect Social Links (Squircle Buttons with Vibrant Gradients) */}
                  <div className="team-social-links d-flex justify-content-center gap-2 pt-3 border-top">
                    <a
                      href={member.facebook || "https://facebook.com"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="team-social-btn icon-facebook"
                      title="Facebook"
                    >
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a
                      href={member.instagram || "https://instagram.com"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="team-social-btn icon-instagram"
                      title="Instagram"
                    >
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="team-social-btn icon-email"
                      title={`Email ${member.name}`}
                    >
                      <i className="bi bi-envelope-fill"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Join Team Banner */}
        <div className="row mt-5">
          <div className="col-12">
            <div className="join-team-banner p-4 p-md-5 rounded-4 text-center text-md-start d-flex flex-column flex-md-row align-items-center justify-content-between gap-4">
              <div>
                <h4 className="fw-bold mb-2 text-dark">
                  Want to Serve Society as a Sai Sevak in Odisha?
                </h4>
                <p className="text-muted mb-0">
                  Join our family of dedicated volunteers across Basantapur, Kendrapara, and Odisha to make a direct positive impact on people's lives.
                </p>
              </div>
              <a href="/contact" className="btn btn-warning px-4 py-3 text-dark fw-bold rounded-pill shadow-sm flex-shrink-0">
                <i className="bi bi-person-plus-fill me-2"></i>
                Become a Volunteer
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ourteammember;