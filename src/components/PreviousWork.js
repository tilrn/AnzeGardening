import React from 'react';
import { motion } from 'framer-motion';
import './PreviousWork.css';

const PreviousWork = () => {
  const lawnImages = [
    {
      
      url: "https://picsum.photos/id/17/200/300",
      title: "Vzdrževanje zelenic pri stanovanjskih hišah"
    },
    {
      url: "https://picsum.photos/id/15/200/300",
      title: "Urejanje okolice poslovnih objektov"
    },
    {
      url: "https://picsum.photos/id/18/200/300",
      title: "Oblikovanje vrtov"
    },
    {
      url: "https://picsum.photos/id/19/200/300",
      title: "Obrezovanje živih mej"
    },
    {
      url: "https://picsum.photos/id/12/200/300",
      title: "Vzdrževanje trate"
    },
    {
      url: "https://picsum.photos/id/13/200/300",
      title: "Sezonsko čiščenje okolice"
    }
  ];

  return (
    <div className="previous-work">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Predhodna Dela
      </motion.h2>
      <motion.p 
        className="section-subtitle"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Hiter ogled naših del
      </motion.p>
      <div className="work-gallery">
        {lawnImages.map((image, index) => (
          <motion.div 
            key={index}
            className="work-item"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -10 }}
          >
            <img 
              src={image.url} 
              alt={image.title}
              loading="lazy"
              onError={(e) => {
                // Fallback to a generic garden image if the URL fails
                e.target.src = "https://images.unsplash.com/photo-1574231164645-d6f0e8553590?w=400&h=300&fit=crop";
              }}
            />
            <div className="work-overlay">
              <h3>{image.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PreviousWork;