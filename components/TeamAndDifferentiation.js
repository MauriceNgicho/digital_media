'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import useScrollAnimation from '@/hooks/useScrollAnimation';

export default function TeamAndDifferentiation() {
  const [ref, isVisible] = useScrollAnimation(0.1);

  const teamMembers = [
    {
      name: 'Herbert',
      role: 'Lead Virtual Assistant & Operations Manager',
      description: 'With 8+ years in business operations, Sarah specializes in streamlining workflows and managing complex administrative tasks. She leads our team with expertise in project management and client relations.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&q=80',
      expertise: ['Project Management', 'Client Relations', 'Operations']
    },
    {
      name: 'Simon',
      role: 'Digital Marketing & Content Specialist',
      description: 'Michael brings 6+ years of digital marketing experience, creating compelling content and managing social media campaigns that drive engagement and growth for our clients.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
      expertise: ['Digital Marketing', 'Content Creation', 'Social Media']
    },
    {
      name: 'Kenjoe',
      role: 'Financial & Strategic Admin Expert',
      description: 'Emily excels in financial management and strategic planning, helping businesses optimize their processes and make data-driven decisions for sustainable growth.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
      expertise: ['Financial Analysis', 'Strategic Planning', 'Data Management']
    },
    {
      name: 'Maurice',
      role: 'Software Engineer',
      description: 'With 3+ year in Software engineering, Maurice solves day to day problems in development.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
      expertise: ['Web Development', 'SEO']
    }
  ];

  const differentiators = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'A Full Service Module',
      description: 'Unlike VAs who only do one task, we cover all areas of admin, finance, content, and HR. This means you can get support for your full business lifecycle - from staff recruitment to fortnightly newsletters.'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Expert Integration',
      description: 'We combine a professional efficiency with a deep understanding of the needs and standards of international businesses'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Cost-Effective Quality',
      description: 'We deliver a high-quality, dedicated service that is a smarter investment than hiring, training, and managing an in-house team.'
    }
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
    <section className="py-20 bg-gradient-to-b from-white to-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Our Team Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Label */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-0.5 bg-[#e1292c]"></div>
            <span className="text-[#e1292c] font-semibold tracking-wider uppercase text-sm">Meet The Team</span>
            <div className="w-12 h-0.5 bg-[#e1292c]"></div>
          </div>

          <h2 className="text-4xl md:text-5xl font-display font-bold text-[#313130] mb-6">
            Our Team
          </h2>
          <p className="text-xl text-[#313130]/70 max-w-4xl mx-auto leading-relaxed">
            Our team is a group of skilled, professional Virtual Assistants dedicated to creating seamless operations that drive success. We are hand-picked for our reliability, attention to detail, and commitment to making our clients&apos; lives easier.
          </p>
        </motion.div>

        {/* Team Grid - 2x2 Layout */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24 max-w-5xl mx-auto"
          variants={container}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-white rounded-lg overflow-hidden group hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-[#e1292c]/20"
            >
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={400}
                  height={288}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Red gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#313130] via-[#313130]/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                
                {/* Name overlay on image */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
                  <h3 className="text-2xl font-display font-bold mb-1">
                    {member.name}
                  </h3>
                  <p className="text-[#e1292c] font-semibold text-sm">
                    {member.role}
                  </p>
                </div>

                {/* Red accent corner */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-[#e1292c] opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}></div>
              </div>
              
              <div className="p-6 border-t-4 border-[#e1292c]">
                <p className="text-[#313130]/80 leading-relaxed mb-4 text-sm">
                  {member.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {member.expertise.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-[#313130] text-white text-xs rounded-full font-medium hover:bg-[#e1292c] transition-colors duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="relative mb-20">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="bg-gradient-to-b from-white to-gray-50 px-8">
              <div className="w-3 h-3 bg-[#e1292c] rotate-45"></div>
            </div>
          </div>
        </div>

        {/* What Makes Us Different Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {/* Section Label */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-0.5 bg-[#e1292c]"></div>
            <span className="text-[#e1292c] font-semibold tracking-wider uppercase text-sm">Why Choose Us</span>
            <div className="w-12 h-0.5 bg-[#e1292c]"></div>
          </div>

          <h2 className="text-4xl md:text-5xl font-display font-bold text-[#313130] mb-6">
            What Makes Us Different
          </h2>
          <p className="text-xl text-[#313130]/70 max-w-4xl mx-auto leading-relaxed">
            We offer more than just a remote worker; we offer a strategic partnership. Here&apos;s how we stand out from the rest.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          {differentiators.map((diff, index) => (
            <motion.div
              key={index}
              variants={item}
              className="relative bg-white p-8 rounded-lg border-2 border-gray-100 hover:border-[#e1292c] transition-all duration-300 text-center group overflow-hidden"
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              {/* Background accent */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#e1292c] to-[#313130] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

              <motion.div
                className="text-[#e1292c] mb-6 inline-block"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {diff.icon}
              </motion.div>

              <h3 className="text-xl font-display font-bold text-[#313130] mb-4">
                {diff.title}
              </h3>
              <p className="text-[#313130]/70 leading-relaxed">
                {diff.description}
              </p>

              {/* Corner decoration */}
              <div className="absolute bottom-0 right-0 w-12 h-12 border-r-4 border-b-4 border-[#e1292c]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="relative bg-[#313130] rounded-2xl p-12 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-40 h-40 bg-[#e1292c]/10 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#e1292c]/10 rounded-full filter blur-3xl"></div>

            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                Ready to Experience the Difference?
              </h3>
              <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                Join hundreds of businesses that have transformed their operations with Sawava&apos;s expert virtual assistant services.
              </p>
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
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}