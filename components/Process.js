'use client';

import { motion } from 'framer-motion';
import useScrollAnimation from '@/hooks/useScrollAnimation';

export default function Process() {
  const [ref, isVisible] = useScrollAnimation(0.1);

  const processSteps = [
    {
      step: '1',
      title: 'Discuss Your Needs',
      description: 'We have a chat about your biggest challenges and what you need off your plate',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      ),
    },
    {
      step: '2', 
      title: 'Team Assignment',
      description: 'We match you with the perfect virtual assistant who specializes in your specific requirements and industry.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
    {
      step: '3',
      title: 'Start Working',
      description: 'We get started right away. Our team blends right in — keeping your workflow smooth and your updates consistent every step of the way.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="process" className="py-20 bg-white relative overflow-hidden" ref={ref}>
      {/* Background decorative elements */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-[#e1292c]/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#313130]/5 rounded-full filter blur-3xl"></div>

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
            <span className="text-[#e1292c] font-semibold tracking-wider uppercase text-sm">How It Works</span>
            <div className="w-12 h-0.5 bg-[#e1292c]"></div>
          </div>

          <h2 className="text-4xl md:text-5xl font-display font-bold text-[#313130] mb-6">
            Our Process
          </h2>
          <p className="text-xl text-[#313130]/70 max-w-3xl mx-auto leading-relaxed">
            We keep things simple and focused so you get straight to the support you need.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative"
          variants={container}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              variants={item}
              className="relative"
            >
              {/* Connection Arrow - Desktop only */}
              {index < processSteps.length - 1 && (
                <div className="hidden md:block absolute top-24 left-full w-full z-0">
                  <svg className="w-full h-8" viewBox="0 0 100 20" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#e1292c" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#e1292c" stopOpacity="0.1" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 0 10 Q 50 10 100 10"
                      stroke={`url(#gradient-${index})`}
                      strokeWidth="2"
                      fill="none"
                      strokeDasharray="5,5"
                    />
                    <path
                      d="M 95 7 L 100 10 L 95 13"
                      stroke="#e1292c"
                      strokeWidth="2"
                      fill="none"
                      opacity="0.5"
                    />
                  </svg>
                </div>
              )}
              
              <div className="relative bg-white p-8 rounded-xl border-2 border-gray-100 hover:border-[#e1292c] transition-all duration-300 group hover:shadow-2xl">
                {/* Step Number Badge */}
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-10">
                  <motion.div
                    className="w-14 h-14 bg-[#e1292c] text-white rounded-full flex items-center justify-center font-bold text-2xl shadow-lg border-4 border-white group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {step.step}
                  </motion.div>
                </div>

                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#e1292c]/0 via-[#e1292c]/0 to-[#e1292c]/0 group-hover:from-[#e1292c]/5 group-hover:to-transparent rounded-xl transition-all duration-300"></div>

                {/* Content */}
                <div className="relative z-10 text-center pt-6">
                  {/* Icon Container */}
                  <motion.div
                    className="inline-flex items-center justify-center w-20 h-20 bg-[#313130] rounded-xl mb-6 text-[#e1292c] group-hover:bg-[#e1292c] group-hover:text-white transition-all duration-300 shadow-md"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    {step.icon}
                  </motion.div>

                  <h3 className="text-xl font-display font-bold text-[#313130] mb-4 group-hover:text-[#e1292c] transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-[#313130]/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#e1292c] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>

              {/* Mobile connection indicator */}
              {index < processSteps.length - 1 && (
                <div className="md:hidden flex justify-center my-4">
                  <svg className="w-6 h-12 text-[#e1292c]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" transform="rotate(90 12 12)" />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Info Section */}
        <motion.div
          className="mt-20 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="bg-gradient-to-r from-[#313130] to-[#313130]/95 rounded-2xl p-8 md:p-12 relative overflow-hidden">
            {/* Decorative corner accents */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-[#e1292c] opacity-50"></div>
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-[#e1292c] opacity-50"></div>
            
            <div className="relative z-10 text-center">
              <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                Let&apos;s discuss how we can help streamline your business operations and give you more time to focus on growth.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.a
                  href="#contact"
                  className="inline-flex items-center bg-[#e1292c] text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-[#c32023] transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-[#e1292c]/30"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started Today
                  <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.a>

                {/* <motion.a
                  href="#services"
                  className="inline-flex items-center border-2 border-white text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-[#313130] transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Services
                </motion.a> */}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}