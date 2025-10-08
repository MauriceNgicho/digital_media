'use client';

import { motion } from 'framer-motion';
import useScrollAnimation from '@/hooks/useScrollAnimation';

export default function Portfolio() {
  const [ref, isVisible] = useScrollAnimation(0.1);

  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&q=80',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Brand Redesign',
      category: 'Brand Identity',
      image: 'https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&q=80',
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Marketing Campaign',
      category: 'Digital Marketing',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      color: 'from-orange-500 to-red-500',
    },
    {
      title: 'Mobile App Design',
      category: 'UI/UX Design',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80',
      color: 'from-green-500 to-teal-500',
    },
    {
      title: 'Social Media Strategy',
      category: 'Content Creation',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80',
      color: 'from-indigo-500 to-blue-500',
    },
    {
      title: 'Analytics Dashboard',
      category: 'Data Visualization',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      color: 'from-yellow-500 to-orange-500',
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our latest work and see how we have helped brands achieve remarkable results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer"
              whileHover={{ y: -10 }}
            >
              <div className="aspect-[4/3] overflow-hidden bg-gray-200">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />
              </div>
              
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center`}
              >
                <div className="text-center text-white p-6">
                  <motion.h3
                    className="text-2xl font-display font-bold mb-2"
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p
                    className="text-lg"
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    {project.category}
                  </motion.p>
                </div>
              </motion.div>

              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                <h3 className="text-xl font-display font-bold text-white mb-1">
                  {project.title}
                </h3>
                <p className="text-gray-200">{project.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}