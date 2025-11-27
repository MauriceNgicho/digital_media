'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About Us', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Pricing', href: '#pricing' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Track which section is active
      const sections = navLinks.map((link) => {
        const section = document.querySelector(link.href);
        if (!section) return null;
        return {
          name: link.name,
          top: section.offsetTop - 100,
          bottom: section.offsetTop + section.offsetHeight - 100,
        };
      });

      const currentSection = sections.find(
        (sec) =>
          sec && window.scrollY >= sec.top && window.scrollY < sec.bottom
      );

      if (currentSection) {
        setActiveSection(currentSection.name);
      } else if (window.scrollY < 100) {
        setActiveSection('hero');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuOpen && !event.target.closest('nav')) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [mobileMenuOpen]);

  // Smooth scroll on click - Enhanced for mobile
  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false); // Close menu first
    
    // Small delay to let menu close animation finish
    setTimeout(() => {
      const target = document.querySelector(href);
      if (target) {
        const navHeight = 88; // Height of your fixed nav (h-20 = 80px + top-2 = 8px)
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-2 left-0 right-0 z-50 transition-all duration-300 rounded-full
          ${scrolled
            ? 'bg-white shadow-md'
            : 'bg-white/95 backdrop-blur-sm'
          } w-[95%] max-w-7xl mx-auto`}
      >
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.a
              href="#hero"
              className="flex items-center flex-shrink-0"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => handleSmoothScroll(e, '#hero')}
            >
              <Image
                src="/logos/sawavalogo.png"
                alt="Sawava Logo"
                width={140}
                height={45}
                className="object-contain"
              />
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200
                    ${activeSection === link.name
                      ? 'text-[#e1292c]'
                      : 'text-gray-700 hover:text-[#e1292c]'
                    }`}
                  whileHover={{ y: -1 }}
                  transition={{ duration: 0.2 }}
                >
                  {link.name}
                  {activeSection === link.name && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#e1292c]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.a>
              ))}

              <motion.a
                href="#contact"
                onClick={(e) => handleSmoothScroll(e, '#contact')}
                className="ml-6 bg-[#e1292c] text-white px-5 py-2 rounded-full text-xs sm:text-sm font-semibold hover:bg-[#c32023] transition-all duration-200 shadow-sm hover:shadow-md whitespace-nowrap"
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                Schedule Consultation
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden relative w-10 h-10 flex items-center justify-center text-gray-700 hover:text-[#e1292c] transition-colors z-60"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <motion.span
                  animate={mobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                  className="w-full h-0.5 bg-current transition-all origin-center"
                />
                <motion.span
                  animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="w-full h-0.5 bg-current transition-all"
                />
                <motion.span
                  animate={mobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                  className="w-full h-0.5 bg-current transition-all origin-center"
                />
              </div>
            </button>
          </div>

          {/* Mobile Menu - Using AnimatePresence for better unmounting */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="md:hidden overflow-hidden"
              >
                <div className="py-4 space-y-1">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleSmoothScroll(e, link.href)}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -20, opacity: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className={`block py-3 px-4 text-base font-medium rounded-md transition-colors
                        ${activeSection === link.name
                          ? 'text-[#e1292c] bg-red-50'
                          : 'text-gray-700 hover:text-[#e1292c] hover:bg-gray-50'
                        }`}
                    >
                      {link.name}
                    </motion.a>
                  ))}
                  <motion.a
                    href="#contact"
                    onClick={(e) => handleSmoothScroll(e, '#contact')}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -20, opacity: 0 }}
                    transition={{ duration: 0.3, delay: navLinks.length * 0.05 }}
                    className="block mt-4 bg-[#e1292c] text-white px-6 py-3 rounded-md text-center font-semibold hover:bg-[#c32023] transition-colors"
                  >
                    Get Started
                  </motion.a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* Add scroll-margin to all sections */}
      <style jsx global>{`
        section[id] {
          scroll-margin-top: 88px;
        }
      `}</style>
    </>
  );
}