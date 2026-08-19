import React, { useState } from 'react';
import './Ourteammember.css';
import founder from '../../assets/founder.png'
const teamMembersData = [
  {
    id: 1,
    name: 'Dr. Rudra Mohanty',
    role: 'Founder & Managing Trustee',
    category: 'Leadership',
    location: 'Bhubaneswar, Odisha',
    image: founder,
    email: 'rudra.mohanty@gmail.com',
    phone: '+919437000001',
    facebook: '#',
    instagram: '#',
    badge: 'Founder'
  },
  {
    id: 2,
    name: 'Sarada Dash',
    role: 'Co-Trustee & Operations Head',
    category: 'Leadership',
    location: 'Narada, Kendrapara',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600',
    email: 'sarada.dash@gmail.com',
    phone: '+919437000002',
    facebook: '#',
    instagram: '#',
    badge: 'Trustee'
  },
  {
    id: 3,
    name: 'Saroj Kumar Mallik',
    role: 'Healthcare & Social Service Director',
    category: 'Healthcare',
    location: 'Narada, Kendrapara',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600',
    email: 'saroj.mallik@gmail.com',
    phone: '+919437000003',
    facebook: '#',
    instagram: '#',
    badge: 'Social Worker'
  },
  {
    id: 4,
    name: 'Subhashree Mohapatra',
    role: 'Child Education & Skill Director',
    category: 'Education',
    location: 'Puri, Odisha',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=600',
    email: 'subhashree.m@gmail.com',
    phone: '+919437000004',
    facebook: '#',
    instagram: '#',
    badge: 'Education'
  },
  {
    id: 5,
    name: 'Ashok Kumar Das',
    role: 'Disaster Relief & Annadanam Lead',
    category: 'Social Welfare',
    location: 'Balasore, Odisha',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=600',
    email: 'ashok.das@gmail.com',
    phone: '+919437000005',
    facebook: '#',
    instagram: '#',
    badge: 'Relief Lead'
  },
  {
    id: 6,
    name: 'Satyabrata Nayak',
    role: 'Youth Outreach & Volunteer Manager',
    category: 'Social Welfare',
    location: 'Rourkela, Odisha',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600',
    email: 'satyabrata.n@gmail.com',
    phone: '+919437000006',
    facebook: '#',
    instagram: '#',
    badge: 'Volunteer Lead'
  },
  {
    id: 7,
    name: 'Rajeshwari Tripathy',
    role: 'Women Empowerment Coordinator',
    category: 'Education',
    location: 'Berhampur, Odisha',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600',
    email: 'rajeshwari.t@gmail.com',
    phone: '+919437000007',
    facebook: '#',
    instagram: '#',
    badge: 'Empowerment'
  },
  {
    id: 8,
    name: 'Monalisa Behera',
    role: 'General Secretary & Public Relations',
    category: 'Leadership',
    location: 'Sambalpur, Odisha',
    image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=600',
    email: 'monalisa.behera@gmail.com',
    phone: '+919437000008',
    facebook: '#',
    instagram: '#',
    badge: 'Secretary'
  }
];

const Ourteammember = () => {
  const [activeTab, setActiveTab] = useState('All');

  const filteredMembers = activeTab === 'All' 
    ? teamMembersData 
    : teamMembersData.filter(member => member.category === activeTab);

  return (
    <section className="our-team-section py-4">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-750 mx-auto mb-4 px-2">
          <div className="team-badge mb-2 shadow-sm">
            <i className="bi bi-stars text-warning me-2"></i>
            <span>Pillars of Selfless Service</span>
          </div>
          <h2 className="team-main-title fw-bold text-dark mb-2">
            Empowering Odisha Through <span className="text-gradient-orange">Love, Faith & Dedicated Seva</span>
          </h2>
          <p className="team-subtitle text-muted mt-2 small">
            Inspired by the divine teachings of <strong>Shirdi Sai Baba</strong>—<em>Shraddha</em> (Faith) & <em>Saburi</em> (Patience)—our compassionate leadership and volunteers bring free healthcare, education, and food relief across <strong>Kendrapara</strong> and all of Odisha.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="d-flex justify-content-center flex-wrap gap-2 mb-4">
          {['All', 'Leadership', 'Healthcare', 'Education', 'Social Welfare'].map((tab) => (
            <button
              key={tab}
              className={`btn team-filter-btn ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Team Members Grid */}
        <div className="row g-3 justify-content-center">
          {filteredMembers.map((member) => (
            <div key={member.id} className="col-12 col-md-6 col-lg-4 col-xl-3">
              <div className="team-card shadow-sm border-0 rounded-3 overflow-hidden bg-white d-flex flex-column h-100">
                <div className="team-card-img-wrapper position-relative">
                  
                  <img
                    src={member.image}
                    alt={member.name}
                    className="team-card-img"
                  />
                </div>

                <div className="team-card-body p-3 text-center d-flex flex-column justify-content-between flex-grow-1">
                  <div>
                    <div className="team-location text-muted mb-1 x-small fw-semibold">
                      <i className="bi bi-geo-alt-fill me-1 text-danger"></i>
                      {member.location}
                    </div>

                    <h6 className="team-member-name fw-bold mb-1 text-dark">
                      {member.name}
                    </h6>

                    <div className="team-member-role text-primary fw-semibold mb-3 x-small">
                      {member.role}
                    </div>
                  </div>

                  {/* Social Icons: Phone, Facebook, Insta, Gmail */}
                  <div className="team-social-links d-flex justify-content-center gap-2 pt-2 border-top">
                    <a
                      href={`tel:${member.phone}`}
                      className="team-social-icon text-secondary"
                      title={`Call ${member.name}`}
                    >
                      <i className="bi bi-telephone-fill"></i>
                    </a>
                    <a
                      href={member.facebook}
                      className="team-social-icon text-secondary"
                      title="Facebook"
                    >
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a
                      href={member.instagram}
                      className="team-social-icon text-secondary"
                      title="Instagram"
                    >
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="team-social-icon text-secondary"
                      title={`Gmail ${member.name}`}
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
        <div className="row mt-4">
          <div className="col-12">
            <div className="join-team-banner p-3 p-md-4 rounded-3 text-center text-md-start d-flex flex-column flex-md-row align-items-center justify-content-between gap-3">
              <div>
                <h5 className="fw-bold mb-1 text-dark">
                  Want to Serve Society as a Sai Sevak in Odisha?
                </h5>
                <p className="text-muted mb-0 small">
                  Join our growing family of dedicated volunteers across Odisha and make a direct impact on people's lives.
                </p>
              </div>
              <a href="/contact" className="btn btn-warning px-3 py-2 text-dark fw-bold rounded-pill shadow-sm flex-shrink-0 small">
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