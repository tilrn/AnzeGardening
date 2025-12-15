import React from 'react';
import { motion } from 'framer-motion';
import './VideoShowcase.css';

const VideoShowcase = () => {
  return (
    <div className="video-showcase">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Oglejte si naše veščine
      </motion.h2>
      <motion.p 
        className="section-subtitle"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Oglejte si, kako preoblikujemo običajne površine v izjemne vrtne sanje
      </motion.p>
      <motion.div 
        className="video-container"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <div className="video-wrapper">
          <iframe
            src="https://www.youtube.com/embed/bD540dfvHbM?si=95BhO4p7LLctQo9G"
            title="GreenScape Gardens - Professional Landscaping"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </motion.div>
      <motion.div 
        className="video-features"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="feature">
          <h3>Profesionalna oprema</h3>
          <p>Stanardna oprema za natančno delo</p>
        </div>
        <div className="feature">
          <h3>Izkušeni strokovniki</h3>
          <p>Več kot 15 let izkušenj v krajinskem vzdrževanju</p>
        </div>
        <div className="feature">
          <h3>Pozornost na detajle</h3>
          <p>Vsak list je pomemben za nas</p>
        </div>
      </motion.div>
    </div>
  );
};

export default VideoShowcase;