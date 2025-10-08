'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import useScrollAnimation from '@/hooks/useScrollAnimation';

export default function About() {
  const [ref, isVisible] = useScrollAnimation(0.1);

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '250+', label: 'Happy Clients' },
    { number: '50+', label: 'Team Members' },
    { number: '10+', label: 'Years Experience' },
  ];

  return (
    <section id="about" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              About Digital Media
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We are a creative digital agency passionate about transforming ideas into extraordinary digital experiences. Our team of designers, developers, and strategists work together to bring your vision to life.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              With over a decade of experience, we have helped hundreds of brands establish their digital presence and achieve measurable growth. We combine creativity with data-driven insights to deliver solutions that not only look amazing but also drive real business results.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="text-center p-4 bg-primary-50 rounded-xl"
                >
                  <div className="text-3xl md:text-4xl font-display font-bold text-primary-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Team collaboration"
                width={800}
                height={533}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-600/20 to-transparent"></div>
            </div>
            
            <motion.div
              className="absolute -bottom-6 -left-6 bg-accent-500 text-white p-8 rounded-2xl shadow-xl"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl font-display font-bold mb-2">10+</div>
              <div className="text-lg font-semibold">Years of Excellence</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}