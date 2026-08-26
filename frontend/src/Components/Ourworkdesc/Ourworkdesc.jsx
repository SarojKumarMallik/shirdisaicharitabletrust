import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Ourworkdesc.css';
import relief from '../../assets/relief.png';
import health from '../../assets/health.png';
import education from '../../assets/education.png';
import social from '../../assets/social.png';
import hero1 from '../../assets/hero1.png';
import saibaba from '../../assets/saibaba.png';

const INITIATIVES_DATA = [
  {
    id: 'relief',
    categoryId: 'relief',
    label: 'RELIEF & ANNADANAM',
    title: 'RELIEF & COMMUNITY SUPPORT',
    shortCategory: 'Relief & Annadanam',
    tag: 'Relief & Annadanam',
    icon: 'bi-heart-pulse-fill',
    badgeColor: 'badge-relief',
    leadSubtitle: 'Providing Immediate Lifelines in Times of Need & Hunger',
    description:
      'The Trust works to provide support to people in need through charitable relief, food distribution, and community welfare initiatives.',
    extendedText:
      'Inspired by the core philosophy of Annadanam (feeding the hungry), we regularly organize free cooked meal distributions, dry food kit provisions, and immediate emergency relief to vulnerable and underprivileged families.',
    keyPoints: [
      {
        icon: 'bi-egg-fried',
        title: 'Annadanam & Food Support',
        desc: 'Providing food and support to people in need.'
      },
      {
        icon: 'bi-shield-check',
        title: 'Relief for the Poor',
        desc: 'Extending assistance to underprivileged and disadvantaged communities.'
      },
      {
        icon: 'bi-people-fill',
        title: 'Community Welfare',
        desc: 'Supporting initiatives that contribute to the well-being of society.'
      },
      {
        icon: 'bi-box-seam',
        title: 'Emergency & Relief Support',
        desc: 'Providing assistance during situations where people require immediate support.'
      }
    ],
    stats: [
      { number: '50,000+', label: 'Meals Served' },
      { number: '3,500+', label: 'Families Supported' },
      { number: '100%', label: 'Free Annadanam' }
    ],
    image: relief,
    impactHighlight: 'Serving free wholesome meals and emergency assistance to communities in need.',
    ctaText: 'Support Annadanam'
  },
  {
    id: 'healthcare',
    categoryId: 'healthcare',
    label: 'HEALTHCARE',
    title: 'HEALTHCARE & MEDICAL SUPPORT',
    shortCategory: 'Healthcare',
    tag: 'Healthcare',
    icon: 'bi-hospital-fill',
    badgeColor: 'badge-healthcare',
    leadSubtitle: 'Improving Access to Basic Healthcare & Medical Consultations',
    description:
      'The Trust supports healthcare initiatives aimed at improving access to medical care and health awareness for people in need.',
    extendedText:
      'Through collaborative medical camps with leading institutions such as Apollo Hospital Bhubaneswar and eye check-up camps with Bhumika Eye Hospital, we bring vital diagnostic services, free vision screening, and essential medicines directly to local communities.',
    keyPoints: [
      {
        icon: 'bi-activity',
        title: 'Health Camps',
        desc: 'Organizing healthcare activities for the community.'
      },
      {
        icon: 'bi-eye-fill',
        title: 'Eye Care Camps',
        desc: 'Supporting eye-care initiatives for people who need medical attention.'
      },
      {
        icon: 'bi-capsule',
        title: 'Medical Assistance',
        desc: 'Providing support for medical treatment and essential healthcare needs.'
      },
      {
        icon: 'bi-heart-pulse',
        title: 'Health Awareness',
        desc: 'Promoting awareness and access to basic healthcare.'
      }
    ],
    stats: [
      { number: '15,000+', label: 'Consultations' },
      { number: '45+', label: 'Health & Eye Camps' },
      { number: 'Free', label: 'Medicines & Screening' }
    ],
    image: health,
    impactHighlight: 'Delivering free expert medical check-ups and specialized eye care to villagers.',
    ctaText: 'Support Healthcare'
  },
  {
    id: 'education',
    categoryId: 'education',
    label: 'EDUCATION',
    title: 'EDUCATION & STUDENT SUPPORT',
    shortCategory: 'Education & Scholarships',
    tag: 'Education & Scholarships',
    icon: 'bi-mortarboard-fill',
    badgeColor: 'badge-education',
    leadSubtitle: 'Nurturing Young Minds Through Learning & Financial Aid',
    description:
      'The Trust promotes education and supports students through scholarships, financial assistance, educational activities, and learning opportunities.',
    extendedText:
      'We believe education is the key to breaking socio-economic barriers. We provide educational kits, merit scholarships, student development workshops, and organize educational quiz competitions to inspire curiosity and academic excellence.',
    keyPoints: [
      {
        icon: 'bi-award-fill',
        title: 'Scholarships',
        desc: 'Financial assistance for deserving students.'
      },
      {
        icon: 'bi-book-half',
        title: 'Educational Support',
        desc: 'Supporting students with educational needs.'
      },
      {
        icon: 'bi-lightbulb-fill',
        title: 'Learning Activities',
        desc: 'Encouraging knowledge, learning, and personal development.'
      },
      {
        icon: 'bi-person-badge-fill',
        title: 'Student Development',
        desc: 'Supporting opportunities that help young people grow.'
      }
    ],
    stats: [
      { number: '500+', label: 'Students Supported' },
      { number: '100+', label: 'Scholarships' },
      { number: '10+', label: 'Quiz & Learning Events' }
    ],
    image: education,
    impactHighlight: 'Providing scholarships, books, and educational development programs for students.',
    ctaText: 'Sponsor a Student'
  },
  {
    id: 'community',
    categoryId: 'community',
    label: 'COMMUNITY WELFARE',
    title: 'SUPPORTING PEOPLE & COMMUNITIES',
    shortCategory: 'Community Welfare',
    tag: 'Community Welfare',
    icon: 'bi-people-fill',
    badgeColor: 'badge-community',
    leadSubtitle: 'Empowering Disadvantaged Groups & Fostering Social Well-being',
    description:
      'Our community initiatives focus on supporting underprivileged people and contributing to their social and economic well-being.',
    extendedText:
      'We work directly with marginalized households, elderly citizens, and youth to create sustainable social safety nets, distribute essential living necessities, and build stronger, self-reliant local communities.',
    keyPoints: [
      {
        icon: 'bi-hand-thumbs-up-fill',
        title: 'Support for the Underprivileged',
        desc: 'Helping people facing difficult circumstances.'
      },
      {
        icon: 'bi-gift-fill',
        title: 'Charitable Assistance',
        desc: 'Providing support through welfare and charitable initiatives.'
      },
      {
        icon: 'bi-building-check',
        title: 'Community Development',
        desc: 'Encouraging activities that strengthen local communities.'
      },
      {
        icon: 'bi-person-hearts',
        title: 'Youth & Family Support',
        desc: 'Supporting opportunities for children, youth, and families.'
      }
    ],
    stats: [
      { number: '25+', label: 'Villages Reached' },
      { number: '1,200+', label: 'Welfare Kits' },
      { number: '24/7', label: 'Community Support' }
    ],
    image: social,
    impactHighlight: 'Empowering underprivileged families and building supportive community networks.',
    ctaText: 'Support Community'
  },
  {
    id: 'spiritual',
    categoryId: 'spiritual',
    label: 'SPIRITUAL & CULTURAL',
    title: 'FAITH, SPIRITUALITY & CULTURAL VALUES',
    shortCategory: 'Spiritual & Cultural',
    tag: 'Spiritual & Cultural',
    icon: 'bi-flower1',
    badgeColor: 'badge-spiritual',
    leadSubtitle: 'Spreading the Divine Message of Faith, Harmony & Universal Love',
    description:
      'Alongside social service, the Trust promotes spiritual and cultural activities inspired by the teachings and values of Shirdi Sai Baba.',
    extendedText:
      'Through sacred temple worship at Dwarkamai and Gurusthana in Basantapur, regular satsang congregations, devotional music, and cultural celebrations, we foster unity, moral integrity, and inner peace in society.',
    keyPoints: [
      {
        icon: 'bi-peace-fill',
        title: 'Spiritual Activities',
        desc: 'Promoting spiritual learning and values.'
      },
      {
        icon: 'bi-people',
        title: 'Satsang & Spiritual Gatherings',
        desc: 'Encouraging community participation and spiritual development.'
      },
      {
        icon: 'bi-palette-fill',
        title: 'Cultural Activities',
        desc: 'Supporting cultural, artistic, and traditional activities.'
      },
      {
        icon: 'bi-bank',
        title: 'Temple & Worship',
        desc: 'Supporting spiritual and charitable activities connected with places of worship.'
      }
    ],
    stats: [
      { number: 'Daily', label: 'Aarti & Darshan' },
      { number: 'Weekly', label: 'Satsang Gatherings' },
      { number: 'Annual', label: 'Utsav Celebrations' }
    ],
    image: saibaba,
    impactHighlight: 'Cultivating spiritual harmony, devotional gatherings, and traditional cultural festivals.',
    ctaText: 'Support Temple Seva'
  }
];

const CATEGORY_TABS = [
  { id: 'all', label: 'All Initiatives', icon: 'bi-grid-fill' },
  { id: 'relief', label: 'Relief & Annadanam', icon: 'bi-heart-pulse-fill' },
  { id: 'healthcare', label: 'Healthcare', icon: 'bi-hospital-fill' },
  { id: 'education', label: 'Education & Scholarships', icon: 'bi-mortarboard-fill' },
  { id: 'community', label: 'Community Welfare', icon: 'bi-people-fill' },
  { id: 'spiritual', label: 'Spiritual & Cultural', icon: 'bi-flower1' },
  { id: 'underprivileged', label: 'Support for Underprivileged', icon: 'bi-hand-thumbs-up-fill' }
];

const Ourworkdesc = () => {
  const [isEnglishQuote, setIsEnglishQuote] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filteredInitiatives =
    selectedFilter === 'all'
      ? INITIATIVES_DATA
      : selectedFilter === 'underprivileged'
        ? INITIATIVES_DATA.filter((item) => item.id === 'community' || item.id === 'relief')
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
            <span>OUR NOBLE PILLARS OF SEVA</span>
          </div>

          <h2 className="workdesc-main-title">
            TRANSFORMING LIVES THROUGH <span className="workdesc-highlight">COMPASSIONATE SERVICE</span>
          </h2>

          <p className="workdesc-lead-text">
            Inspired by the teachings of Shirdi Sai Baba, Sri Sri Shirdi Sai Charitable Trust serves society through education, healthcare, charitable relief, spiritual activities, and community welfare.
          </p>
        </div>

        

        {/* Detailed Comprehensive Showcase of the 5 Noble Work Pillars */}
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
                          {item.label}
                        </span>
                      </div>

                      <h3 className="workdesc-item-title mb-2">{item.title}</h3>
                      <p className="workdesc-item-desc mb-3">{item.description}</p>

                      {/* Compact List Design for Key Points */}
                      <div className="workdesc-points-list mb-4">
                        <div className="row g-2">
                          {item.keyPoints.map((point, idx) => (
                            <div key={idx} className="col-md-6">
                              <div className="workdesc-list-item d-flex align-items-start gap-2 py-1">
                                <div className="point-list-bullet flex-shrink-0">
                                  <i className={`bi ${point.icon}`}></i>
                                </div>
                                <div className="point-list-content">
                                  <span className="point-list-title">{point.title}: </span>
                                  <span className="point-list-desc">{point.desc}</span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Sai Baba Spiritual Quote Banner */}
        <div className="workdesc-quote-card my-5 p-4 p-md-5 rounded-4 text-center position-relative">
          {/* Translate Button */}
          <div className="d-flex justify-content-center mb-3">
            <button
              type="button"
              className="btn btn-quote-translate d-inline-flex align-items-center gap-2"
              onClick={() => setIsEnglishQuote(!isEnglishQuote)}
            >
              <i className="bi bi-translate text-warning"></i>
              <span>{isEnglishQuote ? 'Translate to ଓଡ଼ିଆ (Odia)' : 'Translate to English'}</span>
            </button>
          </div>

          <i className="bi bi-quote quote-icon mb-2 d-block"></i>

          {isEnglishQuote ? (
            <div className="quote-content-wrapper">
              <p className="quote-text mb-2">
                "Before you speak of giving, feel the sacred joy of serving. Love all,
                serve all, feed the hungry, and comfort the distressed."
              </p>
              <span className="quote-author">
                — Inspired by the Divine Teachings of Bhagwan Sri Shirdi Sai Baba
              </span>
            </div>
          ) : (
            <div className="quote-content-wrapper">
              <p className="quote-text odia-quote mb-2">
                "ଦେବା ବିଷୟରେ କହିବା ପୂର୍ବରୁ ସେବା କରିବାର ପବିତ୍ର ଆନନ୍ଦକୁ ଅନୁଭବ
                କରନ୍ତୁ। ସମସ୍ତଙ୍କୁ ଭଲ ପାଆନ୍ତୁ, ସମସ୍ତଙ୍କର ସେବା କରନ୍ତୁ, ଭୋକିଲାଙ୍କୁ
                ଖାଦ୍ୟ ଦିଅନ୍ତୁ ଏବଂ ଦୁଃଖୀଙ୍କୁ ସାନ୍ତ୍ୱନା ଦିଅନ୍ତୁ।"
              </p>
              <span className="quote-author odia-author d-block mt-1">
                — ଭଗବାନ ଶ୍ରୀ ଶିର୍ଡ଼ି ସାଇ ବାବାଙ୍କ ଦିବ୍ୟ ଶିକ୍ଷାରୁ ପ୍ରେରିତ
              </span>
            </div>
          )}
        </div>

       
      </div>
    </section>
  );
};

export default Ourworkdesc;