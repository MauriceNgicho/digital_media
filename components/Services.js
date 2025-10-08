'use client';

import { motion } from 'framer-motion';
import useScrollAnimation from '@/hooks/useScrollAnimation';

export default function Services() {
  const [ref, isVisible] = useScrollAnimation(0.1);

  const services = [
    {
      icon: '🎨',
      title: 'Brand Identity',
      description: 'Create memorable brand experiences with strategic design and visual storytelling that resonates with your audience.',
    },
    {
      icon: '💻',
      title: 'Web Development',
      description: 'Build fast, responsive, and scalable websites with cutting-edge technologies and best practices.',
    },
    {
      icon: '📱',
      title: 'Digital Marketing',
      description: 'Grow your online presence with data-driven strategies that drive engagement and conversions.',
    },
    {
      icon: '🎬',
      title: 'Email Marketing',
      description: 'Emails that dont just get opened-they drive action, build trust, and turn one-time visitors into lifelong customers.',
    },
    {
      icon: '📊',
      title: 'SEO & Analytics',
      description: 'Optimize your digital presence with advanced SEO techniques and actionable insights from data.',
    },
    {
      icon: '🚀',
      title: 'Growth Strategy',
      description: 'Scale your business with proven growth hacking techniques and innovative marketing approaches.',
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="services" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to elevate your brand and achieve your goals.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <motion.div
                className="text-5xl mb-4"
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {service.icon}
              </motion.div>
              <h3 className="text-2xl font-display font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}