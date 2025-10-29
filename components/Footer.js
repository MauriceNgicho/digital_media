'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Services: ['Executive/Admin Support', 'Finance & Strategic Admin', 'Web/Email Marketing & Events', 'Digital Content Creation', 'HR & Recruitment'],
    Company: ['About Us', 'Our Team', 'Careers', 'Contact'],
    Resources: ['Blog', 'Case Studies', 'FAQs', 'Support'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
  };

  const socialLinks = [
    { 
      name: 'Facebook', 
      href: '#',
      icon: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' 
    },
    { 
      name: 'Twitter', 
      href: '#',
      icon: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' 
    },
    { 
      name: 'Instagram', 
      href: '#',
      icon: 'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01' 
    },
    { 
      name: 'LinkedIn', 
      href: '#',
      icon: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z' 
    },
  ];

  return (
    <footer className="bg-[#313130] text-white relative overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#e1292c] to-transparent"></div>

      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#e1292c]/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#e1292c]/5 rounded-full filter blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Logo/Brand */}
              <motion.h3
                className="text-3xl font-display font-bold text-white mb-4 relative inline-block"
                whileHover={{ scale: 1.05 }}
              >
                Sawava
                <div className="absolute -bottom-1 left-0 w-16 h-1 bg-[#e1292c]"></div>
              </motion.h3>
              
              <p className="text-white/70 mb-6 leading-relaxed max-w-sm">
                Transforming brands through innovative digital solutions. We create experiences that inspire and deliver results.
              </p>

              {/* Social Media Links */}
              <div className="mb-6">
                <p className="text-sm font-semibold text-white/90 mb-3 uppercase tracking-wider">Follow Us</p>
                <div className="flex space-x-3">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      className="w-11 h-11 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-[#e1292c] transition-all duration-300 border border-white/10 hover:border-[#e1292c] group"
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={social.name}
                    >
                      <svg
                        className="w-5 h-5 text-white/70 group-hover:text-white transition-colors"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d={social.icon}
                        />
                      </svg>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Newsletter Signup */}
              <div>
                <p className="text-sm font-semibold text-white/90 mb-3 uppercase tracking-wider">Stay Updated</p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-[#e1292c] transition-colors"
                  />
                  <motion.button
                    className="px-6 py-2 bg-[#e1292c] text-white rounded-lg font-semibold hover:bg-[#c32023] transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Subscribe
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Footer Links Columns */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h4 className="text-white font-bold mb-4 text-lg relative inline-block">
                {category}
                <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-[#e1292c]"></div>
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <motion.li 
                    key={link} 
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <a
                      href="#"
                      className="text-white/60 hover:text-[#e1292c] transition-colors duration-300 text-sm flex items-center group"
                    >
                      <span className="w-0 h-px bg-[#e1292c] group-hover:w-3 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.p 
              className="text-white/60 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              © {currentYear} Sawava. All rights reserved. Crafted with{' '}
              <span className="text-[#e1292c]">❤</span> for your success.
            </motion.p>
            
            <div className="flex flex-wrap justify-center gap-6">
              {['Privacy Policy', 'Terms of Service', 'Sitemap'].map((item, index) => (
                <motion.a
                  key={item}
                  href="#"
                  className="text-white/60 hover:text-[#e1292c] text-sm transition-colors duration-300 relative group"
                  whileHover={{ y: -2 }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#e1292c] group-hover:w-full transition-all duration-300"></span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="absolute bottom-8 right-8 w-12 h-12 bg-[#e1292c] rounded-full flex items-center justify-center text-white hover:bg-[#c32023] transition-all duration-300 shadow-lg hover:shadow-xl group"
          whileHover={{ scale: 1.1, y: -3 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <svg className="w-6 h-6 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </motion.button>
      </div>
    </footer>
  );
}