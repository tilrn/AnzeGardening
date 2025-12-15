import React from 'react';
import { motion } from 'framer-motion';
import './AboutUs.css';

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Anze Kovacic",
      position: "Ustanovitelj in vodja krajinskih del",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face",
      bio: "Z več kot 15-letnimi izkušnjami v krajinskem vzdrževanju, je Anze Kovacic ustanovil Anže Gardening, da bi prinesel profesionalno, ekološko-prijazno nego trate v skupnost."
    },
    {
      name: "Gašper Gradič",
      position: "Vrtnarski strokovnjak",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      bio: "Gašperova umetniška vizija in vrtni strokovnost pomagajo ustvariti izjemne vrtne oblike, ki uspevajo v katerikoli sezoni."
    },
    {
      name: "Nika Črnič",
      position: "Nadzornik vzdrževanja",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face",
      bio: "Nika zagotavlja, da vsak list dobi nego, ki je zaslužen, in koordinira naše ekipe za optimalne rezultate."
    }
  ];

  return (
    <div className="about-us">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Srečajte našo ekipo
      </motion.h2>
      <motion.p 
        className="section-subtitle"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Profesionalci, ki se zavzemajo za vaše vrtne sanje
      </motion.p>
      
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <motion.div 
            key={index}
            className="team-member"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
          >
            <div className="member-image">
              <img 
                src={member.image} 
                alt={member.name}
                loading="lazy"
                onError={(e) => {
                  // Fallback to a generic profile image if the URL fails
                  e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face";
                }}
              />
            </div>
            <h3>{member.name}</h3>
            <h4>{member.position}</h4>
            <p>{member.bio}</p>
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="company-values"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <h3>Naše vrednote</h3>
        <div className="values-grid">
          <div className="value">
            <h4>🌱 Ekološka prizadevanja</h4>
            <p>Uporabljamo ekološke prakse in organične rešitve, kadar je to mogoče</p>
          </div>
          <div className="value">
            <h4>🎯 Kakovost</h4>
            <p>Vsak projekt dobi našo popolno pozornost in strokovno izkušnjo</p>
          </div>
          <div className="value">
            <h4>🤝 Zanesljivost</h4>
            <p>Naše storitve so dosledne in načasne, zato jih lahko zaupate</p>
          </div>
          <div className="value">
            <h4>💚 Strast</h4>
            <p>Resnično radi delamo in to vidimo v naših delih</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutUs;