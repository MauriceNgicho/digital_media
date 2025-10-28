'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-white pt-20 overflow-hidden">
      {/* Enhanced Gradient Overlay with Red Tint */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#ffffff] via-[#fef8f8] to-[#fef1f1]" />

      {/* Primary Floating Red Glow */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-[#e1292c]/10 rounded-full filter blur-3xl"
        animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Secondary Floating Red Glow for Depth */}
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-[#e1292c]/8 rounded-full filter blur-3xl"
        animate={{ x: [0, -80, 0], y: [0, -60, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      {/* Decorative Red Accent Line */}
      <motion.div
        className="absolute top-1/2 left-0 w-32 h-1 bg-gradient-to-r from-[#e1292c] to-transparent"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 1 }}
      />

      <div className="relative max-w-7xl mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-display font-bold text-[#313130] mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Grow Your Business Get Your Time Back With
            <span className="text-[#e1292c] relative">
              {' '}Sawava
              {/* Subtle underline accent */}
              <motion.span
                className="absolute bottom-0 left-0 w-full h-1 bg-[#e1292c]/30"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
              />
            </span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-2xl text-[#313130]/80 mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Stop drowning in admin and start focusing on your big ideas. We&apos;re Sawava - a team of expert Virtual Assistants who handle your day-to-day tasks with efficiency and a smile.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <motion.a
              href="#contact"
              className="bg-[#e1292c] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#c32023] transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#e1292c]/20"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule Consultation
            </motion.a>

            <motion.a
              href="#portfolio"
              className="border-2 border-[#313130] text-[#313130] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#313130] hover:text-white transition-all duration-300 relative overflow-hidden group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Subtle red accent on hover */}
              <span className="absolute inset-0 bg-gradient-to-r from-[#e1292c]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative">View Our Work</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}