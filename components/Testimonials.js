'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import useScrollAnimation from '@/hooks/useScrollAnimation';

export default function Testimonials() {
  const [ref, isVisible] = useScrollAnimation(0.1);

  const testimonials = [
    {
      name: 'Lulu Hassan',
      role: 'CEO, TechStart Inc.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
      content: 'Digital Media transformed our online presence completely. Their creative approach and attention to detail exceeded all our expectations. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Bryan Mbeumo',
      role: 'Marketing Director, GrowthCo',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
      content: 'Working with this team was an absolute pleasure. They delivered a stunning website that not only looks great but has significantly increased our conversion rates.',
      rating: 5,
    },
    {
      name: 'Lilian Muli',
      role: 'Founder, Creative Studio',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
      content: 'Their expertise in digital marketing helped us reach our target audience effectively. The ROI we achieved was beyond what we imagined possible.',
      rating: 5,
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
    <section id="testimonials" className="py-20 bg-white relative overflow-hidden" ref={ref}>
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#e1292c]/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#313130]/5 rounded-full filter blur-3xl"></div>

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
            <span className="text-[#e1292c] font-semibold tracking-wider uppercase text-sm">What Clients Say</span>
            <div className="w-12 h-0.5 bg-[#e1292c]"></div>
          </div>

          <h2 className="text-4xl md:text-5xl font-display font-bold text-[#313130] mb-6">
            Client Testimonials
          </h2>
          <p className="text-xl text-[#313130]/70 max-w-3xl mx-auto leading-relaxed">
            Don&apos;t just take our word for it. Hear what our clients have to say about their experience working with us.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative bg-white rounded-xl border-2 border-gray-100 hover:border-[#e1292c] transition-all duration-300 overflow-hidden shadow-lg hover:shadow-2xl"
            >
              {/* Top red accent bar */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#e1292c] to-[#313130] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

              {/* Quote icon background */}
              <div className="absolute top-6 right-6 text-[#e1292c]/10 group-hover:text-[#e1292c]/20 transition-colors duration-300">
                <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              <div className="p-8 relative z-10">
                {/* Star Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.svg
                      key={i}
                      className="w-5 h-5 text-[#e1292c]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={isVisible ? { scale: 1, rotate: 0 } : {}}
                      transition={{ delay: index * 0.15 + i * 0.1, type: 'spring', stiffness: 200 }}
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </motion.svg>
                  ))}
                </div>

                {/* Testimonial Content */}
                <p className="text-[#313130]/80 mb-6 leading-relaxed italic relative">
                  &quot;{testimonial.content}&quot;
                </p>

                {/* Client Info */}
                <div className="flex items-center pt-4 border-t-2 border-gray-100 group-hover:border-[#e1292c]/20 transition-colors duration-300">
                  <div className="relative">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="relative"
                    >
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="w-12 h-12 rounded-full object-cover border-2 border-[#e1292c]/20 group-hover:border-[#e1292c] transition-colors duration-300"
                      />
                      {/* Verified badge */}
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#e1292c] rounded-full flex items-center justify-center border-2 border-white">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </motion.div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-[#313130] group-hover:text-[#e1292c] transition-colors duration-300">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-[#313130]/60">{testimonial.role}</p>
                  </div>
                </div>
              </div>

              {/* Corner decoration */}
              <div className="absolute bottom-0 right-0 w-20 h-20 border-r-4 border-b-4 border-[#e1292c]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-br-xl"></div>
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
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-gradient-to-r from-[#313130] to-[#313130]/95 rounded-2xl px-8 py-6 shadow-xl relative overflow-hidden">
            {/* Decorative glow */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#e1292c]/10 rounded-full filter blur-3xl"></div>

            <div className="text-white text-center sm:text-left relative z-10">
              <p className="font-bold text-lg mb-1">Ready to Join Our Success Stories?</p>
              <p className="text-white/70 text-sm">Let&apos;s create something amazing together</p>
            </div>
            <motion.a
              href="#contact"
              className="bg-[#e1292c] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#c32023] transition-colors shadow-lg whitespace-nowrap relative z-10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}