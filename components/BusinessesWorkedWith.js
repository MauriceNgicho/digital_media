'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import useScrollAnimation from '@/hooks/useScrollAnimation';

export default function BusinessesWorkedWith() {
  const [ref, isVisible] = useScrollAnimation(0.1);

  const businesses = [
    { 
      name: 'Br8ke The Silence', 
      logo: '/logos/br8ke.png',
      alt: 'Br8ke The Silence Logo'
    },
    { 
      name: 'Shisha Eclips', 
      logo: '/logos/shisha.png',
      alt: 'Shisha Eclips Logo'
    },
    { 
      name: 'Ascencia Living', 
      logo: '/logos/asencia.png',
      alt: 'Ascencia Living Logo'
    },
    { 
      name: 'Personal Brands', 
      logo: '/logos/asencia.png',
      alt: 'Personal Brands Logo'
    },
    { 
      name: 'Learn Physics', 
      logo: '/logos/learnphyc.png',
      alt: 'Learn Physics Logo'
    },
    { 
      name: 'NCBI', 
      logo: '/logos/ncbi.png',
      alt: 'NCBI Logo'
    },
    { 
      name: 'Coaching Bow', 
      logo: '/logos/coachingbow.png',
      alt: 'Coaching Bow Logo'
    },
    { 
      name: 'Kings Venture Group', 
      logo: '/logos/kvg.jpeg',
      alt: 'Kings Venture Group Logo'
    },
    { 
      name: "Agatha's Space CIC", 
      logo: '/logos/agatha.jpeg',
      alt: 'Agathas Space CIC Logo'
    },
    { 
      name: 'Oshun Ocean Sanctuary', 
      logo: '/logos/oshun.jpeg',
      alt: 'Oshun Ocean Sanctuary Logo'
    },
  ];

  return (
    <section className="py-20 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
            Businesses We've Worked With
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Trusted by companies across industries to streamline their operations and drive growth.
          </p>
        </motion.div>

        {/* Scrolling Marquee */}
        {/* <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-16"
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {[...businesses, ...businesses].map((business, index) => (
              <div
                key={index}
                className="relative w-32 h-16 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 hover:scale-105 transition-all duration-500 ease-in-out flex-shrink-0"
              >
                <Image
                  src={business.logo}
                  alt={business.alt}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div> */}
        
        {/* Static Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 justify-items-center">
          {businesses.map((business, index) => (
            <div key={index} className="relative w-32 h-16 flex items-center justify-center">
              <Image
                src={business.logo}
                alt={business.alt}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>

        {/* Tagline */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <p className="text-gray-600 italic">
            “Join hundreds of businesses that trust Sawava for their virtual assistant needs.”
          </p>
        </motion.div>
      </div>
    </section>
  );
}
