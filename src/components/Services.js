import React from 'react';
import { motion } from 'framer-motion';
import './Services.css';

const Services = () => {
  const services = [
    {
      title: "Nezavodno košenje trate",
      description: "Redno košenje, ograjevanje in orezovanje, da bi vaša trta izgledala popolnoma",
      icon: "🌿",
      features: ["Tedenljivo/Dvotnedensko košenje", "Ograjevanje", "Odstranitev listov", "Gnojenje trate"]
    },
    {
      title: "Načrtovanje in izvedba vrtov",
      description: "Prilagojeni načrti vrtov, ki odražajo vašo slavo in dopolnjujejo vašo nepremičnino",
      icon: "🌺",
      features: ["Prilagojeni načrti", "Izbira rastlin", "Izvedba", "Namestitev začasne vode"]
    },
    {
      title: "Obrezovanje in vzdrževanje dreves in grmov",
      description: "Profesionalno obrezovanje in vzdrževanje vseh vaših dreves in grmov",
      icon: "🌳",
      features: ["Obrezovanje in orezovanje", "Zdravljenje bolezni", "Sezonsko vzdrževanje", "Odstranitev storitev"]
    },
    {
      title: "Sezonsko čiščenje",
      description: "Celovito sezonsko vzdrževanje, da vaš vrt pripravljen za vse leto",
      icon: "🍂",
      features: ["Vasarično čiščenje", "Odstranitev listov", "Zimska priprava", "Odstranitev odpadkov"]
    }
  ];

  return (
    <div className="services">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Naše storitve
      </motion.h2>
      <motion.p 
        className="section-subtitle"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Celovita nega trate in krajinske ureditve za vašo nepremičnino
      </motion.p>
      
      <div className="services-grid">
        {services.map((service, index) => (
          <motion.div 
            key={index}
            className="service-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -10 }}
          >
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <ul className="service-features">
              {service.features.map((feature, featureIndex) => (
                <li key={featureIndex}>{feature}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;