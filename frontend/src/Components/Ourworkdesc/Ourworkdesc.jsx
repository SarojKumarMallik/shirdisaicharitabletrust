import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Ourworkdesc.css';
import relief from '../../assets/relief.png'
const INITIATIVES_DATA = [
  {
    id: 'relief',
    title: 'Relief & Community Support',
    shortCategory: 'Relief & Community',
    tag: 'Emergency & Annadanam',
    icon: 'bi-heart-pulse-fill',
    badgeColor: 'badge-relief',
    leadSubtitle: 'Providing Immediate Lifelines in Times of Crisis & Hunger',
    description:
      'Sri Sri Shirdi Sai Charitable Trust is dedicated to extending immediate humanitarian assistance to families struck by natural disasters, poverty, and sudden emergencies. We believe that no individual should ever go to sleep hungry or without shelter.',
    extendedText:
      'Through our organized food distribution (Annadanam) programs, emergency response units during cyclones and floods across coastal Odisha, and regular essential kit provisions, we bring hope and immediate relief directly to vulnerable communities.',
    keyPoints: [
      {
        icon: 'bi-shield-check',
        title: 'Emergency Disaster Relief',
        desc: 'Rapid ground deployment of food, clean drinking water, and dry rations during floods and cyclones.'
      },
      {
        icon: 'bi-egg-fried',
        title: 'Daily & Weekly Annadanam',
        desc: 'Nutritious cooked meals served to patients\' attendants outside public hospitals and impoverished settlements.'
      },
      {
        icon: 'bi-box-seam',
        title: 'Essential Household Kits',
        desc: 'Monthly distribution of pulses, grains, hygiene items, and clothing to destitute families and widows.'
      },
      {
        icon: 'bi-thermometer-sun',
        title: 'Winter Warmth Drives',
        desc: 'Annual distribution of warm blankets and woolens to roadside dwellers and rural elderly during harsh winters.'
      }
    ],
    stats: [
      { number: '50,000+', label: 'Meals Served' },
      { number: '3,200+', label: 'Ration Kits Distributed' },
      { number: '24/7', label: 'Emergency Support' }
    ],
    image: relief,
    impactHighlight: 'Over 50,000 wholesome meals served across hospital campuses and rural clusters.',
    ctaText: 'Support Relief Drives'
  },
  {
    id: 'healthcare',
    title: 'Healthcare Drives',
    shortCategory: 'Healthcare',
    tag: 'Medical & Health Camps',
    icon: 'bi-hospital-fill',
    badgeColor: 'badge-healthcare',
    leadSubtitle: 'Bringing Free Quality Medical Care to Underserved Villages',
    description:
      'Access to timely and quality healthcare remains one of the greatest challenges for rural and marginalized populations. We bridge this critical gap through mobile diagnostic health camps, specialist doctor consultations, and free medicine distribution.',
    extendedText:
      'In partnership with dedicated volunteer medical professionals and diagnostic labs, our medical drives deliver preventative checkups, eye screenings, and chronic illness support to thousands of underprivileged people right at their doorsteps.',
    keyPoints: [
      {
        icon: 'bi-person-check-fill',
        title: 'Free Specialist OPD Camps',
        desc: 'General medicine, pediatric, orthopedic, and gynecological consultations conducted in remote village clusters.'
      },
      {
        icon: 'bi-capsule',
        title: 'Free Medicine Distribution',
        desc: 'Prescription medicines, vitamins, and healthcare supplements provided at zero cost to patients.'
      },
      {
        icon: 'bi-eye-fill',
        title: 'Eye Screening & Spectacle Aid',
        desc: 'Comprehensive vision tests, free custom power glasses, and coordinated free cataract surgical support.'
      },
      {
        icon: 'bi-droplet-half',
        title: 'Blood Donation Drives',
        desc: 'Regular voluntary blood donation camps supporting regional government blood banks for emergency patients.'
      }
    ],
    stats: [
      { number: '15,000+', label: 'Patients Treated' },
      { number: '45+', label: 'Medical Camps Held' },
      { number: '1,800+', label: 'Free Glasses Provided' }
    ],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800',
    impactHighlight: '15,000+ villagers treated with free consultations, medicines, and eye tests.',
    ctaText: 'Sponsor a Health Camp'
  },
  {
    id: 'education',
    title: 'Educational Support',
    shortCategory: 'Education',
    tag: 'Vidya Daan & Youth',
    icon: 'bi-mortarboard-fill',
    badgeColor: 'badge-education',
    leadSubtitle: 'Illuminating Young Minds and Breaking the Cycle of Poverty',
    description:
      'Education is the most powerful catalyst for socio-economic transformation. Sri Sri Shirdi Sai Charitable Trust strives to ensure that poverty never becomes an obstacle to a child\'s dreams and fundamental right to learn.',
    extendedText:
      'We support underprivileged students through comprehensive school supply distributions, merit scholarships, after-school coaching centers, and modern digital literacy programs to empower the next generation with knowledge and confidence.',
    keyPoints: [
      {
        icon: 'bi-backpack-fill',
        title: 'School Kit Distributions',
        desc: 'Providing school bags, notebooks, geometry boxes, uniforms, and shoes to rural school students every academic year.'
      },
      {
        icon: 'bi-award-fill',
        title: 'Merit-Cum-Need Scholarships',
        desc: 'Direct financial assistance for bright, economically disadvantaged students pursuing higher secondary and college studies.'
      },
      {
        icon: 'bi-laptop',
        title: 'Basic Digital Literacy',
        desc: 'Introducing foundational computer education, typing, and digital tools to rural school students.'
      },
      {
        icon: 'bi-book-half',
        title: 'Remedial Tuition Centers',
        desc: 'Free evening coaching sessions to help students from low-income families excel in core subjects like Math and Science.'
      }
    ],
    stats: [
      { number: '5,000+', label: 'Children Supported' },
      { number: '35+', label: 'Schools Partnered' },
      { number: '100%', label: 'Dedicated Guidance' }
    ],
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800',
    impactHighlight: 'Over 5,000 children provided with annual school kits, study materials, and scholarships.',
    ctaText: 'Educate a Child'
  },
  {
    id: 'women',
    title: 'Women Empowerment',
    shortCategory: 'Women Empowerment',
    tag: 'Skill & Self-Reliance',
    icon: 'bi-gender-female',
    badgeColor: 'badge-women',
    leadSubtitle: 'Fostering Dignity, Financial Independence, and Leadership',
    description:
      'When a woman is empowered, an entire family and community thrives. Our women empowerment programs focus on imparting practical vocational skills, micro-entrepreneurship support, and health awareness to enable financial self-reliance.',
    extendedText:
      'We run dedicated tailoring and stitching centers, offer handicraft training, facilitate self-help groups (SHGs), and conduct regular menstrual hygiene and legal rights workshops for rural women across Kendrapara and neighboring regions.',
    keyPoints: [
      {
        icon: 'bi-scissors',
        title: 'Vocational Sewing & Tailoring',
        desc: 'Certified cutting, tailoring, and embroidery workshops helping women start home-based tailoring ventures.'
      },
      {
        icon: 'bi-currency-rupee',
        title: 'SHG & Financial Literacy',
        desc: 'Training women on basic banking, savings, government welfare schemes, and small micro-enterprise management.'
      },
      {
        icon: 'bi-heart-pulse',
        title: 'Hygiene & Sanitary Care',
        desc: 'Breaking social taboos through reproductive health awareness campaigns and free eco-friendly sanitary pad distribution.'
      },
      {
        icon: 'bi-stars',
        title: 'Self-Confidence & Rights Workshops',
        desc: 'Interactive mentoring on leadership, women\'s legal protections, and family nutrition.'
      }
    ],
    stats: [
      { number: '1,200+', label: 'Women Trained' },
      { number: '18+', label: 'Skill Batches' },
      { number: '85%', label: 'Earning Livelihood' }
    ],
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800',
    impactHighlight: '1,200+ rural women equipped with vocational skills, earning dignity and independent incomes.',
    ctaText: 'Support Women Livelihoods'
  },
  {
    id: 'environment',
    title: 'Plantation & Environment',
    shortCategory: 'Environment',
    tag: 'Eco Welfare & Green Earth',
    icon: 'bi-tree-fill',
    badgeColor: 'badge-environment',
    leadSubtitle: 'Nurturing Mother Earth for a Greener, Healthier Tomorrow',
    description:
      'Protecting our fragile environment and combating the effects of climate change is an integral duty of our Trust. We lead mass afforestation drives, clean-up missions, and eco-sustainability workshops.',
    extendedText:
      'Focusing especially on coastal Odisha\'s vulnerable terrain, our volunteers plant fruit-bearing and cyclone-resilient shade trees along schools, canals, temple grounds, and rural roadways, while actively nurturing them to maturity.',
    keyPoints: [
      {
        icon: 'bi-flower1',
        title: 'Mass Tree Plantation Drives',
        desc: 'Planting neem, banyan, peepal, mango, and medicinal saplings in schools, villages, and community parks.'
      },
      {
        icon: 'bi-trash-fill',
        title: 'Plastic Clean-Up Campaigns',
        desc: 'Community cleanliness drives (Swachhata Abhiyan) promoting plastic-free villages and waste segregation.'
      },
      {
        icon: 'bi-water',
        title: 'Water Body Conservation',
        desc: 'Raising community awareness on reviving local ponds, cleaning water channels, and rainwater harvesting.'
      },
      {
        icon: 'bi-sun-fill',
        title: 'Eco-Education in Schools',
        desc: 'Distributing free saplings to school students with a pledge to nurture and care for their adopted tree.'
      }
    ],
    stats: [
      { number: '25,000+', label: 'Saplings Planted' },
      { number: '85%', label: 'Plant Survival Rate' },
      { number: '40+', label: 'Villages Greened' }
    ],
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800',
    impactHighlight: '25,000+ trees planted and protected, building greener and more climate-resilient communities.',
    ctaText: 'Adopt a Green Drive'
  },
  {
    id: 'welfare',
    title: 'Social Welfare',
    shortCategory: 'Social Welfare',
    tag: 'Dignity & Elder Support',
    icon: 'bi-people-fill',
    badgeColor: 'badge-welfare',
    leadSubtitle: 'Upholding Human Dignity, Equality, and Compassionate Care',
    description:
      'Our social welfare wing works tirelessly to ensure that the most neglected and marginalized sections of society—elderly citizens, destitute individuals, and differently-abled persons—receive respect, care, and equal opportunities.',
    extendedText:
      'We regularly partner with old age homes, organize clean drinking water kiosks (Jala Chhatra) during scorching summers, provide mobility aids to persons with disabilities, and host community harmony gatherings.',
    keyPoints: [
      {
        icon: 'bi-emoji-smile-fill',
        title: 'Elder Care & Old Age Home Support',
        desc: 'Monthly visits with medical checks, fresh fruits, clothing, and emotional companionship for elderly residents.'
      },
      {
        icon: 'bi-universal-access',
        title: 'Mobility Aids for Differently-Abled',
        desc: 'Free distribution of wheelchairs, tricycles, walking sticks, and hearing aids to underprivileged persons.'
      },
      {
        icon: 'bi-cup-straw',
        title: 'Summer Drinking Water Kiosks',
        desc: 'Operating free community drinking water (Jala Chhatra) and buttermilk centers during peak heat waves.'
      },
      {
        icon: 'bi-megaphone-fill',
        title: 'Social Harmony & Anti-Addiction',
        desc: 'Conducting youth counseling and awareness programs against substance abuse and social discrimination.'
      }
    ],
    stats: [
      { number: '20+', label: 'Care Homes Supported' },
      { number: '250+', label: 'Mobility Aids Given' },
      { number: '15+', label: 'Water Kiosks Run' }
    ],
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800',
    impactHighlight: 'Continuous elder care, mobility aid distributions, and lifesaving summer water kiosks across Odisha.',
    ctaText: 'Support Social Welfare'
  }
];

const Ourworkdesc = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filteredInitiatives =
    selectedFilter === 'all'
      ? INITIATIVES_DATA
      : INITIATIVES_DATA.filter((item) => item.id === selectedFilter);

  return (
    <section className="ourworkdesc-page-section">
      {/* Top Floating Glow Elements */}
      <div className="workdesc-glow workdesc-glow-1"></div>
      <div className="workdesc-glow workdesc-glow-2"></div>

      <div className="container position-relative z-2">
        {/* Section Intro Header */}
        <div className="text-center max-w-800 mx-auto mb-4 mb-lg-5">
          <div className="workdesc-badge mb-3">
            <i className="bi bi-star-fill text-warning me-2"></i>
            <span>Our Noble Pillars of Seva</span>
          </div>

          <h2 className="workdesc-main-title">
            Transforming Lives Through <span className="workdesc-highlight">Compassionate Action</span>
          </h2>

          <p className="workdesc-lead-text">
            Rooted in the eternal teachings of <strong>Bhagwan Sri Shirdi Sai Baba</strong>—<em>Shraddha</em> (Devotion) and <em>Saburi</em> (Patience)—Sri Sri Shirdi Sai Charitable Trust operates 6 comprehensive welfare programs designed to uplift vulnerable families and build a progressive, healthy, and self-reliant society.
          </p>
        </div>



        {/* Interactive Category Filter Pills (1 Single Line on Desktop) */}
        <div className="workdesc-filter-wrapper mb-5">
          <button
            type="button"
            className={`btn workdesc-filter-pill ${selectedFilter === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedFilter('all')}
          >
            <i className="bi bi-grid-fill me-1"></i> All Initiatives
          </button>
          {INITIATIVES_DATA.map((initiative) => (
            <button
              key={initiative.id}
              type="button"
              className={`btn workdesc-filter-pill ${selectedFilter === initiative.id ? 'active' : ''}`}
              onClick={() => setSelectedFilter(initiative.id)}
            >
              <i className={`bi ${initiative.icon} me-1`}></i> {initiative.shortCategory}
            </button>
          ))}
        </div>

        {/* Detailed Comprehensive Showcase of the 6 Initiatives */}
        <div className="workdesc-initiatives-stack d-flex flex-column gap-5">
          {filteredInitiatives.map((item, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <div
                key={item.id}
                id={item.id}
                className={`workdesc-card-box ${item.badgeColor} p-4 p-md-5 rounded-4 shadow-sm`}
              >
                <div className={`row align-items-stretch g-4 g-lg-5 ${isReversed ? 'flex-lg-row-reverse' : ''}`}>
                  {/* Visual Column - Equal Full Height */}
                  <div className="col-lg-5 d-flex">
                    <div className="workdesc-img-container position-relative w-100 h-100">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="workdesc-feature-img rounded-4 w-100 h-100"
                        loading="lazy"
                      />

                      {/* Image Gradient Tint Overlay */}
                      <div className="workdesc-img-gradient-overlay"></div>

                      {/* Top Overlay Badge */}
                      <div className="workdesc-img-tag-badge">
                        <i className={`bi ${item.icon} me-1`}></i>
                        <span>{item.tag}</span>
                      </div>

                      {/* Bottom Floating Impact Highlight Pill */}
                      <div className="workdesc-floating-impact shadow-sm">
                        <i className="bi bi-patch-check-fill text-warning me-2 fs-5 flex-shrink-0"></i>
                        <span className="impact-quote-text">{item.impactHighlight}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content Narrative Column - Equal Full Height with Flex Column */}
                  <div className="col-lg-7 d-flex flex-column justify-content-between text-start">
                    <div>
                      {/* Header Pill & Title */}
                      <div className="d-flex align-items-center gap-2 mb-2">
                        <span className="workdesc-category-label">
                          <i className={`bi ${item.icon} me-1`}></i>
                          {item.tag}
                        </span>
                      </div>

                      <h3 className="workdesc-item-title mb-2">{item.title}</h3>
                      <h5 className="workdesc-item-subtitle text-muted mb-3">{item.leadSubtitle}</h5>

                      <p className="workdesc-item-desc mb-2">{item.description}</p>
                      <p className="workdesc-item-desc-extended text-muted mb-4">{item.extendedText}</p>

                      {/* 4 Feature Key Points 2x2 Grid */}
                      <div className="row g-3 mb-4">
                        {item.keyPoints.map((point, idx) => (
                          <div key={idx} className="col-sm-6">
                            <div className="workdesc-point-card p-3 rounded-3 h-100">
                              <div className="d-flex align-items-center gap-2 mb-1">
                                <div className="point-icon-box">
                                  <i className={`bi ${point.icon}`}></i>
                                </div>
                                <h6 className="point-title mb-0">{point.title}</h6>
                              </div>
                              <p className="point-desc mb-0">{point.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Section: Impact Stats Grid + Action Row */}
                    <div className="workdesc-bottom-section mt-auto pt-3 border-top w-100">
                      {/* 3 Metric Stats (3 Equal Columns) */}
                      <div className="row g-2 mb-3">
                        {item.stats.map((stat, sIdx) => (
                          <div key={sIdx} className="col-4">
                            <div className="item-stat-box text-center h-100">
                              <div className="item-stat-number">{stat.number}</div>
                              <div className="item-stat-label">{stat.label}</div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Action Links Row */}
                      <div className="workdesc-action-row d-flex align-items-center gap-2 w-100">
                        <Link to="/donate" className="btn btn-workdesc-donate flex-grow-1 text-center justify-content-center">
                          <span>{item.ctaText}</span>
                          <i className="bi bi-arrow-up-right ms-1"></i>
                        </Link>
                        <Link to="/contact" className="btn btn-workdesc-volunteer flex-shrink-0" title="Volunteer for this cause">
                          <i className="bi bi-people-fill"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Sai Baba Spiritual Quote Banner */}
        <div className="workdesc-quote-card my-5 p-4 p-md-5 rounded-4 text-center">
          <i className="bi bi-quote quote-icon mb-2 d-block"></i>
          <p className="quote-text mb-2">
            "Before you speak of giving, feel the sacred joy of serving. Love all, serve all, feed the hungry, and comfort the distressed."
          </p>
          <span className="quote-author">— Inspired by the Divine Teachings of Bhagwan Sri Shirdi Sai Baba</span>
        </div>

        {/* Bottom Help Banner (Flawlessly Responsive across Mobile & Desktop) */}
        <div className="workdesc-bottom-cta p-4 p-md-5 rounded-4 text-center text-lg-start position-relative overflow-hidden">
          {/* Decorative Gold Radial Glow */}
          <div className="bottom-cta-glow"></div>

          <div className="row align-items-center g-4 position-relative z-2">
            <div className="col-lg-7 text-center text-lg-start">
              <div className="bottom-cta-badge d-inline-flex align-items-center gap-2 mb-3">
                <i className="bi bi-star-fill text-warning"></i>
                <span>Be the Change You Wish to See</span>
              </div>
              <h3 className="bottom-cta-title text-white fw-bold mb-3">
                Have an Initiative or Want to Sponsor a Village Drive?
              </h3>
              <p className="bottom-cta-desc text-white-50 mb-0">
                Join hands with <strong>Sri Sri Shirdi Sai Charitable Trust</strong>. Every small contribution creates a lifelong wave of joy and sustenance.
              </p>
            </div>

            <div className="col-lg-5">
              <div className="bottom-cta-btn-group d-flex align-items-center justify-content-center justify-content-lg-end gap-3 flex-wrap flex-sm-nowrap">
                <Link to="/contact" className="btn btn-bottom-cta-connect w-100 w-sm-auto">
                  <i className="bi bi-chat-heart-fill me-2 text-danger"></i>
                  <span>Connect With Us</span>
                </Link>
                <Link to="/donate" className="btn btn-bottom-cta-donate w-100 w-sm-auto">
                  <i className="bi bi-heart-fill me-2 text-danger"></i>
                  <span>Donate Now</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ourworkdesc;