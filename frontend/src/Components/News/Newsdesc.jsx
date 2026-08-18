import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import prameyaImg from '../../assets/prameya_news.jpg';
import samajImg from '../../assets/samaj_news.jpg';
import './Newsdesc.css';

const NEWS_ARTICLES = [
  {
    id: 'independence-day-2026',
    title: '78th Independence Day Celebration & Student Felicitation',
    titleOdia: 'ଶିରିଡ଼ି ସାଇ ଚାରିଟେବୁଲ ଟ୍ରଷ୍ଟ: ୭୮ତମ ସ୍ୱାଧୀନତା ଦିବସ ପାଳିତ ଓ ପ୍ରତିଭା ପୁରସ୍କାର',
    category: 'Community Initiatives',
    categoryKey: 'community',
    date: '18 Aug 2026',
    coverImage: samajImg,
    shortDesc:
      'Sri Sri Shirdi Sai Charitable Trust celebrated the 78th Independence Day with national flag hoisting, memorial tree plantation, and felicitation of district debate champion student Anisha Maharaj.',
    fullDesc:
      'Sri Sri Shirdi Sai Charitable Trust celebrated India\'s 78th Independence Day with high patriotic fervor at the Basantapur Mandir premises in Garadpur block, Kendrapara. Managing Trustee Dr. Rudra Mohanty unfurled the National Flag alongside school children, followed by tribute to freedom fighters, memorial tree plantation in honor of departed elders, and honoring young debate achiever Anisha Maharaj.',
    highlights: [
      'National flag hoisting by school children, trustees, and village dignitaries',
      'Homage and patriotic discourse on freedom fighters\' supreme sacrifice',
      'Tree plantation drive in memory of Late Gouranga Mohanty & Late Radhakrushna Mohanty',
      'Felicitation of district debate champion student Anisha Maharaj of Padmapur Bhatapada Primary School',
      'Attended by Managing Trustee Dr. Rudra Mohanty, Secretary Sunil Mohanty, and trust members'
    ],
    dignitaries:
      'Dr. Rudra Mohanty (Managing Trustee), Sunil Mohanty (Secretary), Rabindra Kumar Mahapatra (Former Sarpanch), Jadu Nath Dash, Chandi Prasad Mohanty, Ranjit Mohanty, Nalinikanta Mohanty, Dhiren Maharaj, Pravas Mohanty, Kamal Mohanty.',
    // 2 Published Newspaper Clippings for this event:
    papers: [
      {
        id: 'prameya-clipping',
        paperName: 'Prameya',
        paperOdia: 'ପ୍ରମେୟ',
        edition: 'Odisha State Edition',
        date: '18 Aug 2026',
        headlineOdia: 'ଶିରିଡ଼ି ସାଇ ଚାରିଟେବୁଲ ଟ୍ରଷ୍ଟ: ସ୍ୱାଧୀନତା ଦିବସ ଓ ପ୍ରତିଭା ପୁରସ୍କାର',
        image: prameyaImg,
        summary:
          'Prameya daily covered the tricolor flag hoisting, tree plantation honoring elders, and student award presentation at Basantapur.'
      },
      {
        id: 'samaj-clipping',
        paperName: 'The Samaja',
        paperOdia: 'ସମାଜ',
        edition: 'Cuttack Edition',
        date: '18 Aug 2026',
        headlineOdia: 'ଶିରିଡ଼ି ସାଇ ମନ୍ଦିର: ସ୍ୱାଧୀନତା ଦିବସ ଓ ଛାତ୍ରୀ ସମ୍ବର୍ଦ୍ଧନା',
        image: samajImg,
        summary:
          'The Samaja published the flag unfurling by Dr. Rudra Mohanty with children and the presentation of honorary Uttariya and Baba\'s portrait.'
      }
    ]
  }
];

const CATEGORIES_LIST = [
  { name: 'Community Initiatives', key: 'community', icon: 'bi-people-fill' },
  { name: 'Healthcare', key: 'healthcare', icon: 'bi-heart-pulse-fill' },
  { name: 'Education', key: 'education', icon: 'bi-book-half' },
  { name: 'Women Empowerment', key: 'women', icon: 'bi-person-hearts' },
  { name: 'Plantation & Environment', key: 'environment', icon: 'bi-tree-fill' },
  { name: 'Social Welfare', key: 'social', icon: 'bi-hands-helping' }
];

const ITEMS_PER_PAGE = 3;

const Newsdesc = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [activeModalItem, setActiveModalItem] = useState(null);
  const [selectedPaperTab, setSelectedPaperTab] = useState(0);
  const [subscribeEmail, setSubscribeEmail] = useState('');
  const [subscribedMsg, setSubscribedMsg] = useState(false);

  // Filter & Sort items (Most Recent News Always on Top)
  const filteredArticles = useMemo(() => {
    const list = NEWS_ARTICLES.filter((article) => {
      // Sidebar category filter
      const matchesCategory =
        !selectedCategory || article.categoryKey === selectedCategory;

      // Search query
      const matchesSearch =
        searchQuery.trim() === '' ||
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.titleOdia.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.category.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });

    // Sort by publication date descending (most recent on top)
    return [...list].sort((a, b) => {
      const timeA = new Date(a.date).getTime() || 0;
      const timeB = new Date(b.date).getTime() || 0;
      return timeB - timeA;
    });
  }, [selectedCategory, searchQuery]);

  const totalPages = Math.ceil(filteredArticles.length / ITEMS_PER_PAGE) || 1;
  const paginatedArticles = filteredArticles.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 350, behavior: 'smooth' });
    }
  };

  const handleOpenModal = (article) => {
    setActiveModalItem(article);
    setSelectedPaperTab(0);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (subscribeEmail) {
      setSubscribedMsg(true);
      setTimeout(() => {
        setSubscribedMsg(false);
        setSubscribeEmail('');
      }, 4000);
    }
  };

  return (
    <section className="newsdesc-clean-section position-relative overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="newsdesc-glow newsdesc-glow-1"></div>
      <div className="newsdesc-glow newsdesc-glow-2"></div>

      <div className="container position-relative z-2">
        {/* ====================================================================
            Premium Left-Aligned Section Intro Header & Search Row
           ==================================================================== */}
        <div className="news-intro-header-wrapper mb-4 mb-lg-5">
          <div className="row align-items-end justify-content-between g-4">
            {/* Left: Premium Heading & Description */}
            <div className="col-lg-7 text-start">
              <div className="newsdesc-badge mb-3">
                <i className="bi bi-newspaper text-warning me-2"></i>
                <span>Media Coverage &amp; Press Publications</span>
              </div>

              <h2 className="newsdesc-main-title text-start mb-2">
                Sri Shirdi Sai Charitable Trust <span className="newsdesc-highlight">In The News</span>
              </h2>

              <p className="newsdesc-lead-text text-start mb-0">
                Discover authentic news coverage, newspaper publications, and press updates highlighting our sacred celebrations, health camps, and humanitarian seva.
              </p>
            </div>

            {/* Right: Sleek Premium Search Bar */}
            <div className="col-lg-5 col-xl-4">
              <div className="news-search-box-premium position-relative">
                <i className="bi bi-search search-icon position-absolute"></i>
                <input
                  type="text"
                  className="form-control search-input-premium rounded-pill ps-5 pe-4"
                  placeholder="Search articles, topics..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setCurrentPage(1);
                  }}
                />
                {searchQuery && (
                  <button
                    type="button"
                    className="btn btn-sm clear-search position-absolute"
                    onClick={() => setSearchQuery('')}
                    title="Clear search"
                  >
                    <i className="bi bi-x-circle-fill"></i>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* 2-Column Main Content Row */}
        <div className="row g-4 g-lg-5 align-items-start">
          {/* Left Column: News Articles Feed */}
          <div className="col-lg-8">
            <div className="d-flex flex-column gap-4">
              {paginatedArticles.length > 0 ? (
                paginatedArticles.map((article) => (
                  <div key={article.id} className="news-horizontal-card p-3 p-sm-4 rounded-4 shadow-sm bg-white">
                    <div className="row g-3 g-sm-4 align-items-center">
                      {/* Left: Card Thumbnail Image */}
                      <div className="col-sm-5 col-md-5">
                        <div
                          className="news-card-img-wrapper rounded-3 overflow-hidden position-relative cursor-pointer"
                          onClick={() => handleOpenModal(article)}
                          title="Click to view details & newspaper clippings"
                        >
                          <img
                            src={article.coverImage}
                            alt={article.title}
                            className="news-card-img w-100"
                            loading="lazy"
                          />
                          {article.papers && article.papers.length > 1 ? (
                            <div className="card-multi-paper-badge">
                              <i className="bi bi-newspaper me-1"></i>
                              <span>{article.papers.length} Papers Covered</span>
                            </div>
                          ) : article.papers && article.papers.length === 1 ? (
                            <div className="card-paper-badge">
                              <span>{article.papers[0].paperName}</span>
                            </div>
                          ) : null}
                        </div>
                      </div>

                      {/* Right: Content, Date & Read More */}
                      <div className="col-sm-7 col-md-7 text-start">
                        {/* Date Chip */}
                        <div className="d-flex align-items-center gap-2 mb-2 flex-wrap">
                          <div className="news-date-chip d-inline-flex align-items-center gap-1">
                            <i className="bi bi-calendar3 text-warning"></i>
                            <span>{article.date}</span>
                          </div>
                          {article.papers && article.papers.length > 1 && (
                            <span className="badge bg-warning bg-opacity-20 text-dark fw-bold rounded-pill px-2 py-1 small">
                              {article.papers.map((p) => p.paperName).join(' & ')}
                            </span>
                          )}
                        </div>

                        {/* Title */}
                        <h4 className="news-card-title mb-2" onClick={() => handleOpenModal(article)}>
                          {article.title}
                        </h4>

                        {/* Short Description */}
                        <p className="news-card-desc text-muted mb-3">
                          {article.shortDesc}
                        </p>

                        {/* Read More Button (Golden/Amber) */}
                        <button
                          type="button"
                          className="btn btn-read-more"
                          onClick={() => handleOpenModal(article)}
                        >
                          <span>Read More</span>
                          <i className="bi bi-chevron-right ms-1"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="no-news-found p-5 text-center bg-white rounded-4 shadow-sm">
                  <i className="bi bi-newspaper display-4 text-muted mb-3 d-block"></i>
                  <h5>No News Articles Found</h5>
                  <p className="text-muted small mb-3">
                    No articles match your current search or category filter.
                  </p>
                  <button
                    type="button"
                    className="btn btn-warning rounded-pill px-4 text-dark fw-bold"
                    onClick={() => {
                      setSelectedCategory(null);
                      setSearchQuery('');
                    }}
                  >
                    View All News
                  </button>
                </div>
              )}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="news-pagination d-flex align-items-center justify-content-center gap-2 mt-5">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                  <button
                    key={pageNum}
                    type="button"
                    className={`btn pagination-btn ${currentPage === pageNum ? 'active' : ''}`}
                    onClick={() => handlePageChange(pageNum)}
                  >
                    {pageNum}
                  </button>
                ))}
                {currentPage < totalPages && (
                  <button
                    type="button"
                    className="btn pagination-btn arrow-btn"
                    onClick={() => handlePageChange(currentPage + 1)}
                    aria-label="Next Page"
                  >
                    <i className="bi bi-chevron-right"></i>
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Right Column: Sidebar (Categories & Subscribe) */}
          <div className="col-lg-4">
            <div className="d-flex flex-column gap-4">
              {/* 1. News Categories Card */}
              <div className="sidebar-card p-4 rounded-4 shadow-sm bg-white text-start">
                <div className="d-flex align-items-center justify-content-between mb-3 pb-2 border-bottom">
                  <div className="d-flex align-items-center gap-2">
                    <i className="bi bi-folder2-open text-warning fs-5"></i>
                    <h5 className="sidebar-heading fw-bold mb-0 text-dark">News Categories</h5>
                  </div>
                  {selectedCategory && (
                    <button
                      type="button"
                      className="btn btn-link btn-sm text-muted p-0 text-decoration-none"
                      onClick={() => setSelectedCategory(null)}
                      title="Clear category filter"
                    >
                      Show All
                    </button>
                  )}
                </div>

                <div className="category-list d-flex flex-column gap-1">
                  {CATEGORIES_LIST.map((cat) => {
                    const isSelected = selectedCategory === cat.key;
                    const count = NEWS_ARTICLES.filter(
                      (article) => article.categoryKey === cat.key
                    ).length;

                    return (
                      <button
                        key={cat.key}
                        type="button"
                        className={`btn category-item d-flex align-items-center justify-content-between p-2 rounded-3 text-start w-100 ${
                          isSelected ? 'active' : ''
                        }`}
                        onClick={() => {
                          setSelectedCategory(isSelected ? null : cat.key);
                          setCurrentPage(1);
                        }}
                      >
                        <div className="d-flex align-items-center gap-2">
                          <i className={`bi ${cat.icon} text-warning`}></i>
                          <span className="cat-name">{cat.name}</span>
                        </div>
                        <div className="d-flex align-items-center gap-2">
                          <span className={`cat-count-badge ${count > 0 ? 'has-count' : 'zero-count'}`}>
                            {count}
                          </span>
                          <i className="bi bi-chevron-right text-muted small"></i>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              
            </div>
          </div>
        </div>
      </div>

      {/* ====================================================================
          Interactive Event & Newspaper Modal (Opens on "Read More >")
          - If 1 newspaper published: shows that 1 newspaper clipping
          - If 2 newspapers published: shows both newspapers with selector tabs
         ==================================================================== */}
      {activeModalItem && (
        <div className="news-details-modal-backdrop" onClick={() => setActiveModalItem(null)}>
          <div
            className="news-details-modal-content rounded-4 p-4 p-md-5 text-start shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Header */}
            <div className="d-flex align-items-center justify-content-between mb-3 border-bottom pb-3">
              <div className="d-flex align-items-center gap-2 flex-wrap">
                <span className="badge bg-warning text-dark fw-bold px-3 py-1 rounded-pill">
                  {activeModalItem.category}
                </span>
                <span className="text-muted small">
                  <i className="bi bi-calendar3 me-1 text-warning"></i>
                  {activeModalItem.date}
                </span>
              </div>
              <button
                type="button"
                className="btn-close"
                onClick={() => setActiveModalItem(null)}
                aria-label="Close"
              ></button>
            </div>

            {/* Modal Event Heading */}
            <h4 className="modal-news-title mb-3">{activeModalItem.title}</h4>

            {/* Published Newspaper Clippings Display */}
            {activeModalItem.papers && activeModalItem.papers.length > 0 ? (
              <div className="modal-papers-clean-box">
                {/* If multiple papers, show switcher tabs on top */}
                {activeModalItem.papers.length > 1 && (
                  <div className="d-flex align-items-center justify-content-center gap-2 mb-3">
                    {activeModalItem.papers.map((paper, pIdx) => (
                      <button
                        key={paper.id}
                        type="button"
                        className={`btn modal-paper-tab-btn ${
                          selectedPaperTab === pIdx ? 'active' : ''
                        }`}
                        onClick={() => setSelectedPaperTab(pIdx)}
                      >
                        <i className="bi bi-newspaper me-1"></i>
                        <span className="fw-bold">{paper.paperName}</span>{' '}
                        <span>({paper.paperOdia})</span>
                      </button>
                    ))}
                  </div>
                )}

                {/* Selected Paper Details */}
                {(() => {
                  const currentPaper =
                    activeModalItem.papers[selectedPaperTab] || activeModalItem.papers[0];

                  return (
                    <div className="modal-paper-view-container text-center">
                      {/* High-Resolution Newspaper Image */}
                      <div className="modal-paper-img-frame mb-3 rounded-3 overflow-hidden shadow-sm">
                        <img
                          src={currentPaper.image}
                          alt={currentPaper.paperName}
                          className="modal-paper-img img-fluid rounded-3"
                        />
                      </div>

                      {/* Headline & Short Note */}
                      {currentPaper.headlineOdia && (
                        <h6 className="fw-bold text-dark mb-1">{currentPaper.headlineOdia}</h6>
                      )}
                      <p className="small text-muted mb-3">
                        <em>{currentPaper.summary}</em>
                      </p>

                      <div className="d-flex align-items-center justify-content-between pt-2 border-top">
                        <a
                          href={currentPaper.image}
                          target="_blank"
                          rel="noreferrer"
                          className="btn btn-outline-dark btn-sm rounded-pill px-3"
                        >
                          <i className="bi bi-box-arrow-up-right me-1"></i> Open Original Image
                        </a>
                        <button
                          type="button"
                          className="btn btn-warning btn-sm text-dark fw-bold rounded-pill px-4"
                          onClick={() => setActiveModalItem(null)}
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  );
                })()}
              </div>
            ) : (
              <div className="modal-default-content text-center">
                <div className="modal-paper-img-frame mb-3 rounded-3 overflow-hidden">
                  <img
                    src={activeModalItem.coverImage}
                    alt={activeModalItem.title}
                    className="modal-paper-img img-fluid rounded-3"
                  />
                </div>
                <p className="text-muted small mb-3">{activeModalItem.shortDesc}</p>
                <div className="text-end pt-2 border-top">
                  <button
                    type="button"
                    className="btn btn-warning btn-sm text-dark fw-bold rounded-pill px-4"
                    onClick={() => setActiveModalItem(null)}
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Newsdesc;