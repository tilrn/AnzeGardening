import React from 'react';
import { motion } from 'framer-motion';
import './CompanyDescription.css';

const CompanyDescription = () => {
  return (
    <div className="company-description">
      <div className="company-content">
        <motion.div 
          className="company-text"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>O podjetju Anže Gardening</h2>
          <p>
          Z več kot 15-letnimi izkušnjami na področju profesionalne nege trat in vrtnarskega vzdrževanja Anže Gardening že vrsto let preoblikuje zunanje površine po vsej regiji. Naša ekipa certificiranih strokovnjakov za urejanje okolice je predana temu, da vaše vrtne sanje spremeni v resničnost.
          </p>
          <p>
          Specializirani smo za celovite storitve nege trate – od rednega košenja in gnojenja do celostnega načrtovanja in izvedbe krajinske ureditve. Naša zavezanost kakovosti in zadovoljstvu strank nas postavlja kot zaupanja vredno izbiro tako za stanovanjske kot poslovne naročnike.
          </p>
          <div className="company-stats">
            <div className="stat">
              <h3>500+</h3>
              <p>Zadovoljnih Strank</p>
            </div>
            <div className="stat">
              <h3>15+</h3>
              <p>Let izkušenj</p>
            </div>
            <div className="stat">
              <h3>100%</h3>
              <p>Stopnja zadovoljstva</p>
            </div>
          </div>
        </motion.div>
        <motion.div 
          className="company-image"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <img 
            src="https://images.unsplash.com/photo-1592595896551-12b371d546d5?w=600&h=400&fit=crop" 
            alt="Professional Landscaping Team at Work"
            loading="lazy"
            onError={(e) => {
              e.target.src = "https://images.unsplash.com/photo-1574231164645-d6f0e8553590?w=600&h=400&fit=crop";
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default CompanyDescription;