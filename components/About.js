'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import BusinessesWorkedWith from './BusinessesWorkedWith';

export default function About() {
  const [ref, isVisible] = useScrollAnimation(0.1);

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '100+', label: 'Happy Clients' },
    { number: '95%', label: 'Positive Rating' },
    { number: '10+', label: 'Years Experience' },
  ];

  return (
    <>
      {/* Businesses We Have Worked With */}
      <BusinessesWorkedWith />
      
      <section id="about" className="py-20 bg-[#313130] relative overflow-hidden" ref={ref}>
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')]"></div>

        {/* Red accent line at top */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#e1292c] to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              {/* Section label with red accent */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-0.5 bg-[#e1292c]"></div>
                <span className="text-[#e1292c] font-semibold tracking-wider uppercase text-sm">About Us</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
                About Sawava
              </h2>
              <p className="text-lg text-white/80 mb-6 leading-relaxed">
                At Sawava, we give business owners a powerful, reliable way to manage their operations without having to hire, train, and manage a full-time staff member. Our virtual assistants are professionals who specialize in the tasks that keep your business running smoothly, from diary management to social media campaigns.
              </p>
              <p className="text-lg text-white/80 mb-12 leading-relaxed">
                We&apos;re all about trust, clear communication, and making a real difference to your bottom line. We handle the paperwork and posts so you can handle the growth.
              </p>

              {/* Our Impact Section */}
              <div className="border-l-4 border-[#e1292c] pl-6 mb-12">
                <h3 className="text-3xl font-display font-bold text-white mb-4">
                  Our Impact
                </h3>
                <p className="text-lg text-white/80 mb-6">
                  We don&apos;t just complete tasks, we deliver results for our clients.
                </p>
              </div>
              
              {/* Impact List with Red Accents */}
              <ul className="space-y-6 mb-12">
                <li className="flex items-start group">
                  <div className="flex-shrink-0 w-6 h-6 bg-[#e1292c] rounded-sm flex items-center justify-center mt-1 mr-4 group-hover:scale-110 transition-transform">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-bold text-white text-lg">Saving Time</span>
                    <p className="text-white/70 mt-1">We take on the repetitive, essential tasks like invoicing and data entry, freeing up business owners to focus on strategy and high-value work.</p>
                  </div>
                </li>
                <li className="flex items-start group">
                  <div className="flex-shrink-0 w-6 h-6 bg-[#e1292c] rounded-sm flex items-center justify-center mt-1 mr-4 group-hover:scale-110 transition-transform">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-bold text-white text-lg">Strategic Support</span>
                    <p className="text-white/70 mt-1">We regularly help clients with crucial work like chasing for funding and job application data.</p>
                  </div>
                </li>
                <li className="flex items-start group">
                  <div className="flex-shrink-0 w-6 h-6 bg-[#e1292c] rounded-sm flex items-center justify-center mt-1 mr-4 group-hover:scale-110 transition-transform">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-bold text-white text-lg">Reliable Digital Presence</span>
                    <p className="text-white/70 mt-1">We help clients maintain a consistent, high-volume digital presence through weekly blogs, newsletters, and social engagement.</p>
                  </div>
                </li>
              </ul>

              {/* Stats Grid - Minimalist Style */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="relative p-6 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#e1292c]/50 transition-all duration-300 group"
                  >
                    {/* Red accent corner */}
                    <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#e1292c] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    
                    <div className="text-3xl md:text-4xl font-display font-bold text-white mb-2">
                      {stat.number}
                    </div>
                    <div className="text-white/70 font-medium text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Image & Cards */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Main Image with Red Border Accent */}
              <div className="relative rounded-lg overflow-hidden shadow-2xl group">
                {/* Red border frame */}
                <div className="absolute inset-0 border-4 border-[#e1292c]/30 z-10 group-hover:border-[#e1292c]/60 transition-colors duration-500"></div>
                
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                  alt="Team collaboration at Sawava"
                  width={800}
                  height={533}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Dark overlay with red gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#313130]/60 via-transparent to-[#e1292c]/20"></div>
              </div>
              
              {/* Floating Badge - Years of Excellence */}
              <motion.div
                className="absolute -bottom-6 -left-6 bg-[#e1292c] text-white p-8 shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-5xl font-display font-bold mb-2">10+</div>
                <div className="text-lg font-semibold tracking-wide">Years of Excellence</div>
                
                {/* Decorative corner cut */}
                <div className="absolute top-0 right-0 w-6 h-6 bg-[#313130]" style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}></div>
              </motion.div>
              
              {/* Status Indicator Card */}
              {/* <motion.div
                className="absolute -top-4 -right-4 bg-white p-4 shadow-xl border-l-4 border-[#e1292c]"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="w-3 h-3 bg-[#e1292c] rounded-full"></div>
                    <div className="absolute inset-0 w-3 h-3 bg-[#e1292c] rounded-full animate-ping"></div>
                  </div>
                  <span className="text-sm font-bold text-[#313130]">Always Available</span>
                </div>
              </motion.div> */}

              {/* Decorative geometric element */}
              <div className="absolute -z-10 top-1/2 right-0 w-32 h-32 border-4 border-[#e1292c]/20 transform translate-x-16"></div>
            </motion.div>
          </div>
        </div>

        {/* Bottom decorative line */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#e1292c]/50 to-transparent"></div>
      </section>
    </>
  );
}