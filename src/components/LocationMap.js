import React from 'react';
import { motion } from 'framer-motion';
import './LocationMap.css';

const LocationMap = () => {
  return (
    <div className="location-map">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Poiščite nas
      </motion.h2>
      <div className="location-content">
        <motion.div 
          className="location-info"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3>Obiščite našo pisarno</h3>
          <div className="address">
            <p><strong>Anže Gardening</strong></p>
            <p>3233 Kalobje</p>
            <p>1000 Ljubljana</p>
            <p>Phone: 041 123 456</p>
            <p>Email: info@anzegardening.com</p>
          </div>
          <div className="hours">
            <h4>Delovni čas</h4>
            <p>Ponedeljek - Petek: 8:00 - 16:00</p>
            <p>Sobota: 8:00 - 12:00</p>
            <p>Nedelja: Zaprt</p>
          </div>
        </motion.div>
        <motion.div 
          className="map-container"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Embedded Google Maps */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11052.722277811908!2d15.370098120402636!3d46.167061144954296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47659e06e57518fb%3A0xc04f17130af4f80e!2s3233%20Kalobje!5e0!3m2!1sen!2ssi!4v1754304646401!5m2!1sen!2ssi"
            width="100%"
            height="400"
            style={{ border: 0, borderRadius: '10px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="GreenScape Gardens Location"
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
};

export default LocationMap;