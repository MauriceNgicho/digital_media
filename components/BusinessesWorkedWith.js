'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import useScrollAnimation from '@/hooks/useScrollAnimation';

export default function BusinessesWorkedWith() {
  const [ref, isVisible] = useScrollAnimation(0.1);

  const businesses = [
    { 
      name: 'Br8ke The Silence', 
      logo: '/logos/B8TS Logo.png',
      alt: 'Br8ke The Silence Logo'
    },
    { 
      name: 'Shisha Eclipse', 
      logo: '/logos/Shisha Eclipse.png',
      alt: 'Shisha Eclipse Logo'
    },
    { 
      name: 'Ascencia Living', 
      logo: '/logos/asencia.png',
      alt: 'Ascencia Living Logo'
    },
    { 
      name: 'Learn Science', 
      logo: '/logos/Learn Science.png',
      alt: 'Learn Physics Logo'
    },
    { 
      name: 'NCBI', 
      logo: '/logos/NCBI Logo.png',
      alt: 'NCBI Logo'
    },
    { 
      name: 'Coaching Bow', 
      logo: '/logos/Coaching Bow Logo.png',
      alt: 'Coaching Bow Logo'
    },
    { 
      name: 'Kings Venture Group', 
      logo: '/logos/KVG Logo.png',
      alt: 'Kings Venture Group Logo'
    },
    { 
      name: "Agatha's Space CIC", 
      logo: '/logos/Agathas Space CIC Logo.png',
      alt: 'Agathas Space CIC Logo'
    },
    { 
      name: 'Oshun Ocean Sanctuary', 
      logo: '/logos/Oshun Ocean Sanctuary.png',
      alt: 'Oshun Ocean Sanctuary Logo'
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Header with Red Background */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          {/* Section Label with Red Background */}
          <div className="inline-flex items-center justify-center gap-3 mb-6 bg-[#e1292c]/10 px-6 py-3 rounded-full">
            <div className="w-8 h-0.5 bg-[#e1292c]"></div>
            <span className="text-[#e1292c] font-semibold tracking-wider uppercase text-sm">Trusted Partners</span>
            <div className="w-8 h-0.5 bg-[#e1292c]"></div>
          </div>

          <h2 className="text-3xl md:text-4xl font-display font-bold text-[#313130] mb-4">
            Businesses We&apos;ve Worked With
          </h2>
          <p className="text-lg text-[#313130]/70 max-w-3xl mx-auto leading-relaxed">
            Trusted by companies across industries to streamline their operations and drive growth.
          </p>
        </motion.div>

        {/* Simple Logo Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-12 items-center"
          variants={container}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          {businesses.map((business, index) => (
            <motion.div
              key={index}
              variants={item}
              className="relative w-full h-20 flex items-center justify-center"
            >
              <Image
                src={business.logo}
                alt={business.alt}
                fill
                className="object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}