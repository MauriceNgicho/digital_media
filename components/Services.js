'use client';

import { motion } from 'framer-motion';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import Process from './Process';

export default function Services() {
  const [ref, isVisible] = useScrollAnimation(0.1);

  const services = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      title: 'Executive/Admin Support',
      description: 'Managing your diary, invoicing, data entry, and handling your general email inbox.',
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Financial & Strategic Admin',
      description: 'Creating weekly sales reports, collecting staff data, and helping with funding or job applications.',
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
        </svg>
      ),
      title: 'Digital Content Creation',
      description: 'Designing graphics (like flyers and banners) and editing videos for reels, stories, and long-form clips.',
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
        </svg>
      ),
      title: 'Social & Community Management',
      description: 'Scheduling posts, engaging with your audience, managing your inbox, and running campaigns.',
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Web/Email Marketing & Events',
      description: 'Designing or updating your website, writing and publishing blogs, creating newsletters, and managing events through platforms like Eventbrite.',
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'HR & Recruitment',
      description: 'Handling staff recruitment from job posting and reviewing to onboarding, plus managing DBS checks and forms.',
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden" ref={ref}>
      {/* Background decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-[#e1292c]/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-40 left-0 w-80 h-80 bg-[#313130]/5 rounded-full filter blur-3xl"></div>

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
            <span className="text-[#e1292c] font-semibold tracking-wider uppercase text-sm">What We Offer</span>
            <div className="w-12 h-0.5 bg-[#e1292c]"></div>
          </div>

          <h2 className="text-4xl md:text-5xl font-display font-bold text-[#313130] mb-6">
            Our Services
          </h2>
          <p className="text-xl text-[#313130]/70 max-w-3xl mx-auto leading-relaxed">
            We offer six core Service Modules designed to manage all the back-end and front-facing operations of a modern business.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group relative bg-white p-8 rounded-xl border-2 border-gray-100 hover:border-[#e1292c] transition-all duration-300 overflow-hidden"
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              {/* Hover background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#e1292c]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Red accent bar */}
              <div className="absolute top-0 left-0 w-full h-1 bg-[#e1292c] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon Container */}
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 bg-[#313130] rounded-lg mb-6 text-[#e1292c] group-hover:bg-[#e1292c] group-hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {service.icon}
                </motion.div>

                <h3 className="text-xl font-display font-bold text-[#313130] mb-3 group-hover:text-[#e1292c] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-[#313130]/70 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Corner decoration */}
              <div className="absolute bottom-0 right-0 w-20 h-20 border-r-4 border-b-4 border-[#e1292c]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-br-xl"></div>

              {/* Number badge */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-[#313130]/5 rounded-full flex items-center justify-center text-[#313130] font-bold text-sm group-hover:bg-[#e1292c] group-hover:text-white transition-all duration-300">
                {index + 1}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-3 bg-white border-2 border-[#e1292c]/20 rounded-full px-8 py-4 shadow-lg">
            <div className="w-3 h-3 bg-[#e1292c] rounded-full animate-pulse"></div>
            <p className="text-[#313130] font-semibold">
              Need a custom solution? 
              <a href="#contact" className="text-[#e1292c] ml-2 hover:underline">
                Let&apos;s talk
              </a>
            </p>
          </div>
        </motion.div>
      </div>
      
      {/* Process Section */}
      <Process />
    </section>
  );
}