'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Pricing', href: '#pricing' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Throttle function for performance
  const throttle = (func, delay) => {
    let lastCall = 0;
    return (...args) => {
      const now = new Date().getTime();
      if (now - lastCall < delay) return;
      lastCall = now;
      return func(...args);
    };
  };

  // Detect scroll position with throttling
  useEffect(() => {
    const handleScroll = throttle(() => {
      setScrolled(window.scrollY > 50);

      // Track which section is active using getBoundingClientRect for accuracy
      const sections = navLinks.map((link) => {
        const section = document.querySelector(link.href);
        if (!section) return null;
        const rect = section.getBoundingClientRect();
        return {
          name: link.name,
          top: rect.top + window.scrollY,
          bottom: rect.bottom + window.scrollY,
        };
      });

      const scrollPosition = window.scrollY + 150;
      const currentSection = sections.find(
        (sec) => sec && scrollPosition >= sec.top && scrollPosition < sec.bottom
      );

      if (currentSection) {
        setActiveSection(currentSection.name);
      } else if (window.scrollY < 100) {
        setActiveSection('hero');
      }
    }, 100);

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = 'var(--scrollbar-width, 0px)';
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [mobileMenuOpen]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuOpen && !event.target.closest('nav')) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [mobileMenuOpen]);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [mobileMenuOpen]);

  // Smooth scroll with better mobile handling
  const handleSmoothScroll = useCallback((e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    setTimeout(() => {
      const target = document.querySelector(href);
      if (target) {
        const navHeight = window.innerWidth < 768 ? 76 : 88;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    }, mobileMenuOpen ? 150 : 0);
  }, [mobileMenuOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-2 left-0 right-0 z-50 transition-all duration-300
          ${scrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'}
          w-[96%] sm:w-[95%] max-w-7xl mx-auto
          rounded-2xl sm:rounded-full`}
      >
        <div className="px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo - Responsive sizing */}
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
                className="object-contain w-24 sm:w-32 md:w-36 h-auto"
                priority
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
                className="ml-6 bg-[#e1292c] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#c32023] transition-all duration-200 shadow-sm hover:shadow-md whitespace-nowrap"
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                Schedule Consultation
              </motion.a>
            </div>

            {/* Mobile Menu Button - Enhanced */}
            <button
              className="md:hidden relative w-11 h-11 flex items-center justify-center text-gray-700 hover:text-[#e1292c] transition-colors rounded-lg hover:bg-gray-100 active:bg-gray-200"
              onClick={(e) => {
                e.stopPropagation();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <motion.span
                  animate={mobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                  className="w-full h-0.5 bg-current rounded-full"
                />
                <motion.span
                  animate={mobileMenuOpen ? { opacity: 0, scale: 0.5 } : { opacity: 1, scale: 1 }}
                  className="w-full h-0.5 bg-current rounded-full"
                />
                <motion.span
                  animate={mobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                  className="w-full h-0.5 bg-current rounded-full"
                />
              </div>
            </button>
          </div>

          {/* Mobile Menu - Enhanced with max-height */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="md:hidden overflow-hidden"
              >
                <div className="py-3 pb-4 space-y-1 max-h-[calc(100vh-120px)] overflow-y-auto">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleSmoothScroll(e, link.href)}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -20, opacity: 0 }}
                      transition={{ duration: 0.2, delay: index * 0.04 }}
                      className={`block py-3 px-4 text-base font-medium rounded-lg transition-colors
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
                    transition={{ duration: 0.2, delay: navLinks.length * 0.04 }}
                    className="block mt-3 bg-[#e1292c] text-white px-6 py-3 rounded-lg text-center font-semibold hover:bg-[#c32023] transition-colors shadow-sm active:scale-[0.98]"
                  >
                    Get Started
                  </motion.a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* Backdrop overlay for mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Global styles */}
      <style jsx global>{`
        section[id] {
          scroll-margin-top: 88px;
        }
        
        @media (max-width: 768px) {
          section[id] {
            scroll-margin-top: 76px;
          }
        }

        /* Calculate scrollbar width */
        :root {
          --scrollbar-width: 0px;
        }
      `}</style>
    </>
  );
}