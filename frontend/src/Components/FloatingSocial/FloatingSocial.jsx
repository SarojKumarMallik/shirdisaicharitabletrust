import { FaWhatsapp, FaYoutube, FaInstagram, FaFacebookF } from 'react-icons/fa';
import './FloatingSocial.css';

const socialLinks = [
  {
    id: 'whatsapp',
    name: 'WhatsApp',
    icon: <FaWhatsapp className="floating-social-icon" />,
    url: 'https://wa.me/919876543210?text=Jai%20Sai%20Ram!%20I%20would%20like%20to%20know%20more%20about%20Sri%20Shirdi%20Sai%20Charitable%20Trust.',
    bgClass: 'floating-whatsapp',
    ariaLabel: 'Chat with us on WhatsApp'
  },
  {
    id: 'youtube',
    name: 'YouTube',
    icon: <FaYoutube className="floating-social-icon" />,
    url: 'https://youtube.com',
    bgClass: 'floating-youtube',
    ariaLabel: 'Subscribe on YouTube'
  },
  {
    id: 'instagram',
    name: 'Instagram',
    icon: <FaInstagram className="floating-social-icon" />,
    url: 'https://instagram.com',
    bgClass: 'floating-instagram',
    ariaLabel: 'Follow us on Instagram'
  },
  {
    id: 'facebook',
    name: 'Facebook',
    icon: <FaFacebookF className="floating-social-icon" />,
    url: 'https://facebook.com',
    bgClass: 'floating-facebook',
    ariaLabel: 'Follow us on Facebook'
  }
];

const FloatingSocial = () => {
  return (
    <aside className="floating-social-sidebar" aria-label="Social Media Quick Links">
      <div className="floating-social-list">
        {socialLinks.map((item) => (
          <a
            key={item.id}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`floating-social-item ${item.bgClass}`}
            aria-label={item.ariaLabel}
            title={item.name}
          >
            <span className="floating-social-label">{item.name}</span>
            <span className="floating-social-icon-wrapper">
              {item.icon}
            </span>
          </a>
        ))}
      </div>
    </aside>
  );
};

export default FloatingSocial;
