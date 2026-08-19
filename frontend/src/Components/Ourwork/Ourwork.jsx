import React from 'react';
import './Ourwork.css';
import relief from '../../assets/relief.png'
import planting from '../../assets/planting.png'
import social from '../../assets/social.png'
import health from '../../assets/health.png'
import education from '../../assets/education.png'
import women from '../../assets/women.png'
const WORK_INITIATIVES = [
  {
    id: 1,
    title: 'Relief & Community Support',
    category: 'Emergency Aid',
    icon: 'bi-heart-fill',
    description:
      'We provide support to people and families facing difficult situations, helping them with essential needs and emergency assistance whenever possible.',
    image: relief,
  },
  {
    id: 2,
    title: 'Plantation & Environmental Care',
    category: 'Eco Welfare',
    icon: 'bi-tree-fill',
    description:
      'We promote tree plantation and environmental awareness to create a greener, healthier, and more sustainable future for our communities.',
    image: planting,
  },
  {
    id: 3,
    title: 'Social Welfare',
    category: 'Community Wellbeing',
    icon: 'bi-people-fill',
    description:
      'We take part in community-focused activities that encourage kindness, support vulnerable people, and contribute to the overall well-being of society.',
    image: social
  },
  {
    id: 4,
    title: 'Healthcare Drives',
    category: 'Medical Aid',
    icon: 'bi-heart-pulse-fill',
    description:
      'We organize healthcare initiatives and medical support programs to help people access basic health services and encourage better health awareness.',
    image: health
  },
  {
    id: 5,
    title: 'Educational Support',
    category: 'Child Education',
    icon: 'bi-mortarboard-fill',
    description:
      'We support students from underserved backgrounds by helping create better opportunities for learning, education, and personal development.',
    image: education,
  },
  {
    id: 6,
    title: 'Women Empowerment',
    category: 'Skill & Dignity',
    icon: 'bi-award-fill',
    description:
      'We support women through awareness, education, opportunities, and community initiatives that encourage confidence, independence, and self-reliance.',
    image: women,
  },
];

const Ourwork = () => {
  return (
    <section className="ourwork-section py-5">
      <div className="container">
        {/* Section Header */}
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-8">
            <div className="ourwork-badge mb-3">
              <i className="bi bi-star-fill text-warning me-2"></i>
              <span>Our Work</span>
            </div>
            <h2 className="ourwork-title mb-3">
              Creating Change Through Service
            </h2>
            <p className="ourwork-subtitle">
              At <strong>Sri Sri Shirdi Sai Charitable Trust</strong>, our work focuses on helping people, strengthening communities, and creating a better future. Through dedicated service and community initiatives, we work to support those who need care, guidance, and opportunities.
            </p>
          </div>
        </div>

        {/* 6 Work Initiatives Cards Grid */}
        <div className="row g-4 mb-4">
          {WORK_INITIATIVES.map((item) => (
            <div key={item.id} className="col-12 col-md-6 col-lg-4">
              <div className="ourwork-card h-100 text-start">
                {/* Image Header with Floating Icon Badge */}
                <div className="ourwork-img-container">
                  <img src={item.image} alt={item.title} className="ourwork-card-img" />
                  <div className="ourwork-category-badge">{item.category}</div>
                  
                </div>

                {/* Card Content Body */}
                <div className="ourwork-card-body p-4 d-flex flex-column">
                  <h4 className="ourwork-card-title mb-2">{item.title}</h4>
                  <div className="ourwork-title-line mb-3"></div>
                  <p className="ourwork-card-desc mb-0">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Simple Quotes Container */}
        <div className="ourwork-simple-quote text-center my-4 py-4 px-3">
          <p className="simple-quote-text mb-0">
            <i className="bi bi-quote quote-mark me-2 text-warning"></i>
            "Together, we believe that service can create hope, dignity, and lasting positive change."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Ourwork;