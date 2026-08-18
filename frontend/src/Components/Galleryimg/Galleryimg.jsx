import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import './Galleryimg.css';

// Curated Gallery Albums matching the reference screenshot
const GALLERY_ALBUMS = [
  {
    id: 'temple-spiritual',
    title: 'Temple & Spiritual Moments',
    category: 'temple',
    photoCount: 56,
    icon: 'bi-bank',
    coverImage: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=800',
    description: 'Sacred moments, daily aarti rituals, and divine architectural views of the Basantapur Sri Shirdi Sai Mandir.',
    photos: [
      {
        url: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=1200',
        caption: 'Sunrise view of Sri Shirdi Sai Baba Mandir premises at Basantapur.'
      },
      {
        url: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&q=80&w=1200',
        caption: 'Evening deeparadhana and divine prayers at the sanctum sanctorum.'
      },
      {
        url: 'https://images.unsplash.com/photo-1609342122563-a43ac8917a3a?auto=format&fit=crop&q=80&w=1200',
        caption: 'Sacred dhuni pooja and prasad distribution to visiting devotees.'
      },
      {
        url: 'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&q=80&w=1200',
        caption: 'Thursday special Sai Abhishek and floral decoration by sevaks.'
      },
      {
        url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1200',
        caption: 'Devotees participating in holy Bhajan and meditation.'
      },
      {
        url: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=1200',
        caption: 'Spiritual discourse and holy prasadam offering at temple hall.'
      }
    ]
  },
  {
    id: 'sai-baba',
    title: 'Sai Baba',
    category: 'temple',
    photoCount: 48,
    icon: 'bi-person-badge',
    coverImage: 'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&q=80&w=800',
    description: 'Divine darshan portraits, holy paduka, and ornamental shringar of Sadguru Sri Shirdi Sai Baba.',
    photos: [
      {
        url: 'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&q=80&w=1200',
        caption: 'Divine idol of Sri Shirdi Sai Baba adorned with fresh marigold garlands.'
      },
      {
        url: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=1200',
        caption: 'Sacred holy altar and Baba’s divine idol during morning Kakad Aarti.'
      },
      {
        url: 'https://images.unsplash.com/photo-1609342122563-a43ac8917a3a?auto=format&fit=crop&q=80&w=1200',
        caption: 'Close-up darshan of Sadguru Sai Baba on special festival occasion.'
      },
      {
        url: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&q=80&w=1200',
        caption: 'Golden crown and holy chandan shringar on Baba’s sacred idol.'
      }
    ]
  },
  {
    id: 'events-celebrations',
    title: 'Events & Celebrations',
    category: 'events',
    photoCount: 72,
    icon: 'bi-calendar-star',
    coverImage: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800',
    description: 'Grand celebrations of Guru Purnima, Ram Navami, Vijayadashami, and Sai Sandhya Bhajans.',
    photos: [
      {
        url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1200',
        caption: 'Devotional Sai Sandhya Bhajan and musical seva by renowned Odia artists.'
      },
      {
        url: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&q=80&w=1200',
        caption: 'Grand celebration of Guru Purnima Mahotsav with thousands of devotees.'
      },
      {
        url: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=1200',
        caption: 'Ram Navami procession and community Annadanam distribution.'
      },
      {
        url: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1200',
        caption: 'Independence Day tricolor flag hoisting and patriotic speeches.'
      }
    ]
  },
  {
    id: 'relief-community',
    title: 'Relief & Community Support',
    category: 'relief',
    photoCount: 62,
    icon: 'bi-heart-pulse-fill',
    coverImage: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=800',
    description: 'Emergency disaster response, dry ration kit distribution, and humanitarian aid to marginalized families.',
    photos: [
      {
        url: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=1200',
        caption: 'Volunteers distributing food grocery packages to underprivileged families.'
      },
      {
        url: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1200',
        caption: 'Emergency flood relief food kit delivery in Kendrapara coastal villages.'
      },
      {
        url: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&q=80&w=1200',
        caption: 'Winter warm blanket distribution seva for elderly and homeless individuals.'
      },
      {
        url: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=1200',
        caption: 'Sai Sevaks serving hot nutritious meals during emergency relief camp.'
      }
    ]
  },
  {
    id: 'healthcare-drives',
    title: 'Healthcare Drives',
    category: 'healthcare',
    photoCount: 39,
    icon: 'bi-hospital',
    coverImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800',
    description: 'Free multi-specialty health check-up camps, blood donation drives, eye screenings, and medicine distribution.',
    photos: [
      {
        url: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200',
        caption: 'Experienced doctor examining senior citizens at Free Health Check-up Camp.'
      },
      {
        url: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=1200',
        caption: 'Free diagnostic blood sugar and blood pressure screening in Garadpur.'
      },
      {
        url: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=1200',
        caption: '100% free distribution of essential prescription medicines and tonics.'
      },
      {
        url: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1200',
        caption: 'Eye screening and free spectacles distribution for elderly villagers.'
      }
    ]
  },
  {
    id: 'educational-support',
    title: 'Educational Support',
    category: 'education',
    photoCount: 64,
    icon: 'bi-mortarboard-fill',
    coverImage: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800',
    description: 'School kit distribution, student merit scholarships, and coaching support for deserving rural children.',
    photos: [
      {
        url: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1200',
        caption: 'Rural school students joyfully studying with newly gifted bags and books.'
      },
      {
        url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1200',
        caption: 'Felicitation ceremony of bright high-school debate and quiz champions.'
      },
      {
        url: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=1200',
        caption: 'Distribution of stationery, geometry sets, and uniforms to village students.'
      },
      {
        url: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=1200',
        caption: 'Interactive moral education and storytelling workshop in school hall.'
      }
    ]
  },
  {
    id: 'plantation-environment',
    title: 'Plantation & Environment',
    category: 'environment',
    photoCount: 55,
    icon: 'bi-tree-fill',
    coverImage: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800',
    description: 'Mass sapling plantation, eco-awareness campaigns, and green avenue initiatives across Kendrapara villages.',
    photos: [
      {
        url: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1200',
        caption: 'Volunteers and students planting neem and fruit saplings in Tyendakuda.'
      },
      {
        url: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200',
        caption: 'Memorial tree plantation drive honoring departed community elders.'
      },
      {
        url: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&q=80&w=1200',
        caption: 'Distribution of medicinal herbal plants (Tulsi, Amla, Bel) to rural families.'
      },
      {
        url: 'https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&q=80&w=1200',
        caption: 'Community water conservation and green plantation awareness rally.'
      }
    ]
  },
  {
    id: 'women-empowerment',
    title: 'Women Empowerment',
    category: 'women',
    photoCount: 41,
    icon: 'bi-person-heart',
    coverImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800',
    description: 'Self-help group (SHG) skill training, tailoring workshops, and health awareness sessions for rural women.',
    photos: [
      {
        url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1200',
        caption: 'Empowered rural women at vocational tailoring and handicraft training workshop.'
      },
      {
        url: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=1200',
        caption: 'Women SHG micro-enterprise training and certificate distribution.'
      },
      {
        url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1200',
        caption: 'Maternal health and nutrition awareness camp conducted by trust doctors.'
      },
      {
        url: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&q=80&w=1200',
        caption: 'Distribution of sewing kits and empowerment certificates to rural beneficiaries.'
      }
    ]
  },
  {
    id: 'social-welfare',
    title: 'Social Welfare',
    category: 'social',
    photoCount: 50,
    icon: 'bi-people-fill',
    coverImage: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&q=80&w=800',
    description: 'Inclusive community welfare drives, supporting elderly citizens, child nourishment, and social harmony.',
    photos: [
      {
        url: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&q=80&w=1200',
        caption: 'Community gathering and celebration of social welfare seva with village elders.'
      },
      {
        url: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=1200',
        caption: 'Care kits and nutrition support distributed to rural underprivileged children.'
      },
      {
        url: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1200',
        caption: 'Inter-village harmony and spiritual celebration at Basantapur Sai Mandir.'
      },
      {
        url: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=1200',
        caption: 'Annadanam meal distribution for hundreds of devotees and village guests.'
      }
    ]
  }
];

const Galleryimg = () => {
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const handleSelectAlbum = (album) => {
    setSelectedAlbum(album);
    setSelectedPhoto(null);
    window.scrollTo({ top: 350, behavior: 'smooth' });
  };

  const handleBackToAlbums = () => {
    setSelectedAlbum(null);
    setSelectedPhoto(null);
    window.scrollTo({ top: 350, behavior: 'smooth' });
  };

  return (
    <section className="gallery-section position-relative overflow-hidden">
      {/* Background Ambience Glow */}
      <div className="gallery-glow gallery-glow-1"></div>
      <div className="gallery-glow gallery-glow-2"></div>

      <div className="container position-relative z-2">
        {/* ====================================================================
            Gallery Header Title & Subtitle
           ==================================================================== */}
        {!selectedAlbum && (
          <div className="gallery-header-box text-center mx-auto mb-4 mb-md-5">
            <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill mb-2 gallery-badge-chip">
              <i className="bi bi-images text-warning"></i>
              <span className="small fw-bold text-uppercase letter-spacing-1">
                Visual Journey &amp; Seva
              </span>
            </div>
            <h2 className="gallery-main-title mb-2">
              Photo Albums &amp; Sacred Moments
            </h2>
            <div className="gallery-title-separator mx-auto mb-3"></div>
            <p className="gallery-main-subtitle text-muted mx-auto mb-0">
              Browse through our photo collections capturing temple darshan, spiritual celebrations, health camps, and humanitarian outreach.
            </p>
          </div>
        )}

        {/* ====================================================================
            View 1: When an Album is Selected -> 2-Column Split:
            - Left: Photos Grid
            - Right: Explore Other Photo Albums Sidebar
           ==================================================================== */}
        {selectedAlbum ? (
          <div className="album-detail-view-container animate-fade-in mb-5">
            {/* Top Back Nav & Album Title Bar (Single row on mobile & laptop) */}
            <div className="album-top-nav-bar d-flex align-items-center justify-content-between flex-nowrap gap-2 mb-3 mb-md-4 pb-3 border-bottom">
              <button
                type="button"
                className="btn btn-outline-dark btn-back-albums rounded-pill px-3 px-md-4 fw-bold d-flex align-items-center gap-1 gap-md-2 flex-shrink-0"
                onClick={handleBackToAlbums}
              >
                <i className="bi bi-arrow-left"></i>
                <span className="d-none d-sm-inline">Back to All Albums</span>
                <span className="d-inline d-sm-none">Back</span>
              </button>

              <div className="d-flex align-items-center flex-shrink-0">
                <span className="badge bg-warning text-dark px-2 px-md-3 py-2 rounded-pill fw-bold album-count-badge">
                  <i className={`bi ${selectedAlbum.icon} me-1`}></i>
                  <span>{selectedAlbum.photos.length} Photos</span>
                  <span className="d-none d-sm-inline"> in this Album</span>
                </span>
              </div>
            </div>

            {/* 2-Column Main Row: Left Photos Grid, Right Sidebar */}
            <div className="row g-4 align-items-start">
              {/* Left Column: Photos Grid */}
              <div className="col-lg-8">
                {/* Album Header Card */}
                <div className="album-header-banner p-4 rounded-4 shadow-sm text-start mb-4">
                  <div className="d-inline-flex align-items-center gap-2 text-warning fw-bold small mb-1 text-uppercase letter-spacing-1">
                    <i className={`bi ${selectedAlbum.icon}`}></i>
                    <span>Photo Collection</span>
                  </div>
                  <h3 className="album-detail-title mb-2 text-dark">
                    {selectedAlbum.title}
                  </h3>
                  <p className="album-detail-desc text-muted small mb-0">
                    {selectedAlbum.description}
                  </p>
                </div>

                {/* Photos Grid (Clicking an image opens full modal) */}
                <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 g-2 g-md-3">
                  {selectedAlbum.photos.map((photo, pIdx) => (
                    <div key={pIdx} className="col">
                      <div
                        className="in-page-photo-card h-100 rounded-3 overflow-hidden shadow-sm bg-white border position-relative cursor-pointer"
                        onClick={() => setSelectedPhoto(photo)}
                        title="Click to view full photo"
                      >
                        <div className="photo-frame-wrapper position-relative overflow-hidden">
                          <img
                            src={photo.url}
                            alt={photo.caption}
                            className="in-page-grid-img w-100"
                            loading="lazy"
                          />
                          <div className="photo-zoom-icon-badge">
                            <i className="bi bi-arrows-fullscreen"></i>
                          </div>
                          <div className="photo-card-overlay">
                            <p className="photo-overlay-caption text-white small mb-0">
                              <i className="bi bi-zoom-in me-1"></i> View Full Image
                            </p>
                          </div>
                        </div>
                        <div className="photo-caption-footer p-2 px-3 text-start">
                          <p className="small text-dark fw-semibold mb-0 text-truncate">
                            {photo.caption}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Explore Other Photo Albums Sidebar */}
              <div className="col-lg-4">
                <div className="other-albums-sidebar p-4 rounded-4 bg-white border shadow-sm text-start sticky-top">
                  <div className="d-flex align-items-center gap-2 mb-3 pb-2 border-bottom">
                    <i className="bi bi-collection-fill text-warning fs-5"></i>
                    <h5 className="fw-bold text-dark mb-0">Explore Other Albums</h5>
                  </div>

                  <div className="other-albums-list d-flex flex-column gap-2">
                    {GALLERY_ALBUMS.filter((alb) => alb.id !== selectedAlbum.id).map(
                      (alb) => (
                        <div
                          key={alb.id}
                          className="other-album-item p-2 rounded-3 d-flex align-items-center justify-content-between cursor-pointer"
                          onClick={() => handleSelectAlbum(alb)}
                        >
                          <div className="d-flex align-items-center gap-3">
                            <div className="other-album-thumb rounded-2 overflow-hidden flex-shrink-0">
                              <img
                                src={alb.coverImage}
                                alt={alb.title}
                                className="w-100 h-100 object-fit-cover"
                              />
                            </div>
                            <div className="other-album-meta">
                              <h6 className="other-album-title mb-0 text-dark fw-bold small">
                                {alb.title}
                              </h6>
                              <span className="small text-muted">
                                {alb.photoCount} Photos
                              </span>
                            </div>
                          </div>
                          <i className="bi bi-chevron-right text-warning"></i>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* ====================================================================
              View 2: Main All-Albums Grid (4 columns on desktop/laptop)
             ==================================================================== */
          <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 g-3 g-md-4 mb-5">
            {GALLERY_ALBUMS.map((album) => (
              <div key={album.id} className="col">
                <div
                  className="gallery-album-card h-100 bg-white rounded-4 overflow-hidden shadow-sm"
                  onClick={() => handleSelectAlbum(album)}
                >
                  {/* Album Cover Image Container */}
                  <div className="album-cover-wrapper position-relative overflow-hidden">
                    <img
                      src={album.coverImage}
                      alt={album.title}
                      className="album-cover-img w-100 h-100"
                      loading="lazy"
                    />
                    <div className="album-overlay-gradient"></div>

                    {/* Floating Circular Icon Badge */}
                    <div className="album-icon-badge position-absolute">
                      <i className={`bi ${album.icon}`}></i>
                    </div>
                  </div>

                  {/* Album Info Footer */}
                  <div className="album-info-footer p-3 text-start d-flex align-items-center justify-content-between">
                    <div>
                      <h5 className="album-card-title mb-1">{album.title}</h5>
                      <span className="album-photo-count text-muted">
                        {album.photoCount} Photos
                      </span>
                    </div>
                    <div className="album-arrow-box">
                      <i className="bi bi-chevron-right album-arrow-icon"></i>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ====================================================================
            Full Single Image Modal (Rendered to document.body via Portal)
           ==================================================================== */}
        {selectedPhoto &&
          typeof document !== 'undefined' &&
          createPortal(
            <div
              className="gallery-single-photo-backdrop"
              onClick={() => setSelectedPhoto(null)}
            >
              <div
                className="gallery-single-photo-modal rounded-4 overflow-hidden shadow-lg"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Top Header */}
                <div className="single-photo-header text-white d-flex align-items-center justify-content-between">
                  <div className="single-photo-title-wrap d-flex align-items-center me-2">
                    <i className="bi bi-image text-warning me-2 flex-shrink-0"></i>
                    <span className="single-photo-caption-text text-truncate">
                      {selectedPhoto.caption}
                    </span>
                  </div>
                  <button
                    type="button"
                    className="btn-modal-close-custom"
                    onClick={() => setSelectedPhoto(null)}
                    aria-label="Close modal"
                  >
                    <i className="bi bi-x-lg"></i>
                  </button>
                </div>

                {/* Full Resolution Photo Container */}
                <div className="single-photo-stage text-center p-2 p-md-3">
                  <img
                    src={selectedPhoto.url}
                    alt={selectedPhoto.caption}
                    className="single-photo-full-img img-fluid rounded-3"
                  />
                </div>
              </div>
            </div>,
            document.body
          )}

        
      </div>
    </section>
  );
};

export default Galleryimg;