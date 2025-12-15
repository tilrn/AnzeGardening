import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    alert('Thank you for your inquiry! We will contact you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  return (
    <div className="contact">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Pridobite Brezplačno Ponudbo
      </motion.h2>
      <motion.p 
        className="section-subtitle"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Pripravljeni smo za vašo nepremičnino? Kontaktirajte nas še danes!
      </motion.p>

      <div className="contact-content">
        <motion.div 
          className="contact-form"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Vaše ime"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Vaš email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="tel"
                name="phone"
                placeholder="Vaša telefonska številka"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="">Izberite storitev</option>
                <option value="lawn-maintenance">Nezavodno košenje trate</option>
                <option value="garden-design">Načrtovanje in izvedba vrtov</option>
                <option value="tree-care">Obrezovanje in vzdrževanje dreves in grmov</option>
                <option value="seasonal-cleanup">Sezonsko čiščenje</option>
                <option value="other">Drugo</option>
              </select>
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Povejte nam o vašem projektu..."
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <motion.button 
              type="submit"
              className="submit-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Pošlji sporočilo
            </motion.button>
          </form>
        </motion.div>

        <motion.div 
          className="contact-info"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="contact-item">
            <h3>📞 Kontaktirajte nas</h3>
            <p>041 123 456</p>
          </div>
          <div className="contact-item">
            <h3>✉️ Email nas</h3>
            <p>info@anzegardening.com</p>
          </div>
          <div className="contact-item">
            <h3>📍 Obiščite nas</h3>
            <p>3233 Kalobje<br />1000 Ljubljana</p>
          </div>
          <div className="contact-item">
            <h3>🕒 Delovni čas</h3>
            <p>Ponedeljek - Petek: 8:00 - 16:00<br />
               Sobota: 8:00 - 12:00<br />
               Nedelja: Zaprt</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;