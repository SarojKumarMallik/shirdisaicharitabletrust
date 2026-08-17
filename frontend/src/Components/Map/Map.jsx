import React from 'react';
import './Map.css';

const Map = () => {
  return (
    <section className="map-section py-5">
      <div className="container">
        {/* Map Header Card */}
        

        {/* Responsive Google Maps Iframe Container */}
        <div className="map-frame-wrapper rounded-4 overflow-hidden shadow-sm border position-relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4861.199788690327!2d86.27906575111642!3d20.36502406625631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1bd5d89eb2dbab%3A0x713ddf96a6239ffc!2sSai%20temple%2CBasantpur!5e1!3m2!1sen!2sin!4v1786985889902!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            title="Sai Temple, Basantpur Google Map"
            className="map-iframe d-block"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Map;