import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './App.css';

// Import components
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import PreviousWork from './components/PreviousWork';
import CompanyDescription from './components/CompanyDescription';
import LocationMap from './components/LocationMap';
import VideoShowcase from './components/VideoShowcase';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Contact from './components/Contact';

function App() {
  const [currentSection, setCurrentSection] = useState(0);

  const sections = [
    { id: 'hero', component: Hero, bgColor: '#1a2f0a' },
    { id: 'previous-work', component: PreviousWork, bgColor: '#2d4a3a' },
    { id: 'company', component: CompanyDescription, bgColor: '#3a4f1a' },
    { id: 'location', component: LocationMap, bgColor: '#4a5d4a' },
    { id: 'video', component: VideoShowcase, bgColor: '#2f3f1f' },
    { id: 'about', component: AboutUs, bgColor: '#4a5a1f' },
    { id: 'services', component: Services, bgColor: '#3f5f1f' },
    { id: 'contact', component: Contact, bgColor: '#1a4a1a' }
  ];

  useEffect(() => {
    const updateBackground = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const sectionIndex = Math.floor(scrollY / windowHeight);
      
      if (sectionIndex !== currentSection && sectionIndex < sections.length) {
        setCurrentSection(sectionIndex);
        document.body.style.backgroundColor = sections[sectionIndex].bgColor;
      }
    };

    window.addEventListener('scroll', updateBackground);
    return () => window.removeEventListener('scroll', updateBackground);
  }, [currentSection, sections]);

  return (
    <div className="App">
      <Navigation />
      {sections.map((section, index) => {
        const Component = section.component;
        return (
          <motion.section
            key={section.id}
            id={section.id}
            className="section"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Component />
          </motion.section>
        );
      })}
    </div>
  );
}

export default App;
