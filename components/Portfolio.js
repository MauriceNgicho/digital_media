'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import useScrollAnimation from '@/hooks/useScrollAnimation';

export default function Portfolio() {
  const [ref, isVisible] = useScrollAnimation(0.1);

  const projects = [
    {
      title: 'Project-Based Support',
      category: 'Handling focused, minimal-scope projects such as IT/Website maintenance and one-off content creation',
      image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&q=80',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      title: 'Heavy Digital Focus',
      category: 'Managing weekly content, reporting, and recruitment for businesses focused on a strong digital presence',
      image: 'https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&q=80',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'High-Volume Management',
      category: 'Providing frequent, ongoing support across five service areas, including weekly sales reporting, diary management, and daily engagement',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
    {
      title: 'Specialist Content',
      category: 'Focused purely on Digital Content Creation and Social Media Management',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden" ref={ref}>
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#e1292c]/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#313130]/5 rounded-full filter blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Label */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-0.5 bg-[#e1292c]"></div>
            <span className="text-[#e1292c] font-semibold tracking-wider uppercase text-sm">Our Work</span>
            <div className="w-12 h-0.5 bg-[#e1292c]"></div>
          </div>

          <h2 className="text-4xl md:text-5xl font-display font-bold text-[#313130] mb-6">
            Some of our Works
          </h2>
          <p className="text-xl text-[#313130]/70 max-w-3xl mx-auto leading-relaxed">
            Explore our latest work and see how we have helped brands achieve remarkable results.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group relative overflow-hidden rounded-xl bg-white border-2 border-gray-100 hover:border-[#e1292c] transition-all duration-500 shadow-lg hover:shadow-2xl"
              whileHover={{ y: -8 }}
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-gray-200">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={500}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#313130] via-[#313130]/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

                {/* Red accent overlay on hover */}
                <div className="absolute inset-0 bg-[#e1292c]/0 group-hover:bg-[#e1292c]/20 transition-all duration-500"></div>

                {/* Icon Badge */}
                <motion.div
                  className="absolute top-4 right-4 w-12 h-12 bg-white rounded-lg flex items-center justify-center text-[#e1292c] shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {project.icon}
                </motion.div>

                {/* Bottom Content on Image */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-0 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl font-display font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-white/90 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {project.category}
                  </p>
                </div>

                {/* View Details Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <motion.button
                    className="bg-[#e1292c] text-white px-6 py-3 rounded-full font-semibold shadow-xl flex items-center gap-2 hover:bg-[#c32023] transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Details
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.button>
                </div>
              </div>

              {/* Card Bottom Section */}
              <div className="p-6 border-t-4 border-[#e1292c]">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-[#313130] uppercase tracking-wide">
                    Featured Work
                  </span>
                  <div className="flex items-center gap-2 text-[#e1292c]">
                    <span className="text-sm font-medium">Learn More</span>
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Corner decoration */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-[#e1292c] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-[#313130] rounded-2xl px-8 py-6 shadow-xl">
            <div className="text-white text-center sm:text-left">
              <p className="font-semibold text-lg mb-1">Want to see more success stories?</p>
              <p className="text-white/70 text-sm">Discover how we can transform your business</p>
            </div>
            <motion.a
              href="#contact"
              className="bg-[#e1292c] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#c32023] transition-colors shadow-lg whitespace-nowrap"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}