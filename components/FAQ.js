'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useScrollAnimation from '@/hooks/useScrollAnimation';

export default function FAQ() {
  const [ref, isVisible] = useScrollAnimation(0.1);
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is a 'High Volume Retainer'?",
      answer: 'A high volume retainer means you get frequent, ongoing support across multiple service areas. For example, a client might receive weekly sales reporting, weekly blog publishing and daily social media engagement',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      question: 'Can you help with staff recruitment?',
      answer: 'Yes. Our HR & Recruitment service include everything from posting job adverts and reviewing applications to conducting DBS checks and helping with staff onboarding and form management.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      question: 'How quickly can you update my website?',
      answer: 'We regularly handle tasks like website updates, design, migrations, and adding weekly blog posts. We can agree on a schedule that works for you.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      )
    },
    {
      question: 'Which service areas do your clients use most often?',
      answer: 'Many of our retainer clients use a mix of services, but our most common activities include Executive/Admin Support, Digital Content Creation, and Social & Community Management.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden" ref={ref}>
      {/* Background decorative elements */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-[#e1292c]/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-20 right-0 w-80 h-80 bg-[#313130]/5 rounded-full filter blur-3xl"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Label */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-0.5 bg-[#e1292c]"></div>
            <span className="text-[#e1292c] font-semibold tracking-wider uppercase text-sm">Got Questions?</span>
            <div className="w-12 h-0.5 bg-[#e1292c]"></div>
          </div>

          <h2 className="text-4xl md:text-5xl font-display font-bold text-[#313130] mb-6">
            Popular Questions
          </h2>
          <p className="text-xl text-[#313130]/70 max-w-3xl mx-auto leading-relaxed">
            We understand you may have questions about our services, approach, or what makes us different. Here are answers to the most common questions we receive.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`group bg-white rounded-xl border-2 transition-all duration-300 overflow-hidden ${
                openIndex === index 
                  ? 'border-[#e1292c] shadow-xl' 
                  : 'border-gray-100 hover:border-[#e1292c]/50 shadow-md hover:shadow-lg'
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex items-center gap-4 hover:bg-gray-50 transition-colors"
              >
                {/* Icon Container */}
                <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 ${
                  openIndex === index 
                    ? 'bg-[#e1292c] text-white' 
                    : 'bg-[#313130] text-[#e1292c] group-hover:bg-[#e1292c] group-hover:text-white'
                }`}>
                  {faq.icon}
                </div>

                {/* Question */}
                <h3 className={`flex-1 text-lg font-bold transition-colors duration-300 ${
                  openIndex === index 
                    ? 'text-[#e1292c]' 
                    : 'text-[#313130] group-hover:text-[#e1292c]'
                }`}>
                  {faq.question}
                </h3>

                {/* Toggle Icon */}
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${
                    openIndex === index 
                      ? 'bg-[#e1292c] text-white' 
                      : 'bg-gray-100 text-[#313130]'
                  }`}>
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <div className="border-t-2 border-[#e1292c]/20 pt-5 pl-16">
                        <p className="text-[#313130]/80 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Bottom accent line when open */}
              {openIndex === index && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  className="h-1 bg-gradient-to-r from-[#e1292c] to-[#313130]"
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Additional Help Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="relative bg-[#313130] rounded-2xl p-10 overflow-hidden">
            {/* Decorative corner accents */}
            <div className="absolute top-0 left-0 w-24 h-24 border-t-4 border-l-4 border-[#e1292c] opacity-30"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 border-b-4 border-r-4 border-[#e1292c] opacity-30"></div>

            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#e1292c]/10 rounded-full filter blur-3xl"></div>

            <div className="relative z-10">
              <h3 className="text-3xl font-display font-bold text-white mb-4">
                Still Have Questions?
              </h3>
              <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                If you don&apos;t find what you&apos;re looking for, we&apos;re here to help. Get in touch with our team for personalized answers.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.a
                  href="#contact"
                  className="inline-flex items-center bg-[#e1292c] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#c32023] transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-[#e1292c]/30"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Us
                  <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.a>

                <motion.a
                  href="#services"
                  className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-[#313130] transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Services
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}