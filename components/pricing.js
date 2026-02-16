'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const packages = [
    {
      name: 'Starter',
      tagline: 'Perfect for Solo Entrepreneurs',
      description: 'Get essential support to handle your day-to-day admin tasks',
      monthlyPrice: 299,
      annualPrice: 2990,
      savings: 'Save $598/year',
      features: [
        { text: 'Up to 20 hours/month', included: true },
        { text: 'Email & Calendar Management', included: true },
        { text: 'Basic Data Entry & Filing', included: true },
        { text: 'Social Media Scheduling (1 platform)', included: true },
        { text: 'Monthly Performance Report', included: true },
        { text: 'Response Time: 24 hours', included: true },
        { text: 'Dedicated Account Manager', included: false },
        { text: 'Priority Support', included: false },
      ],
      cta: 'Start Free Trial',
      popular: false,
    },
    {
      name: 'Growth',
      tagline: 'Most Popular for Small Businesses',
      description: 'Comprehensive support across multiple service areas',
      monthlyPrice: 599,
      annualPrice: 5990,
      savings: 'Save $1,198/year',
      features: [
        { text: 'Up to 40 hours/month', included: true },
        { text: 'Everything in Starter, plus:', included: true, bold: true },
        { text: 'Financial Admin & Reporting', included: true },
        { text: 'Content Creation (Graphics & Videos)', included: true },
        { text: 'Social Media Management (3 platforms)', included: true },
        { text: 'Weekly Strategy Calls', included: true },
        { text: 'Dedicated Account Manager', included: true },
        { text: 'Response Time: 12 hours', included: true },
      ],
      cta: 'Get Started Now',
      popular: true,
    },
    {
      name: 'Enterprise',
      tagline: 'For Growing Teams & Organizations',
      description: 'Full-service support with dedicated team members',
      monthlyPrice: 1299,
      annualPrice: 12990,
      savings: 'Save $2,598/year',
      features: [
        { text: 'Unlimited hours/month', included: true },
        { text: 'Everything in Growth, plus:', included: true, bold: true },
        { text: 'HR & Recruitment Support', included: true },
        { text: 'Web Development & Maintenance', included: true },
        { text: 'Advanced Analytics & Insights', included: true },
        { text: 'Multi-platform Campaign Management', included: true },
        { text: 'Priority 24/7 Support', included: true },
        { text: 'Quarterly Business Reviews', included: true },
      ],
      cta: 'Schedule Consultation',
      popular: false,
    },
  ];

  const priceFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  });

  return (
    <section id="pricing" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-[#e1292c]/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-80 sm:h-80 bg-[#313130]/5 rounded-full filter blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          {/* Section Label */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <div className="w-8 sm:w-12 h-0.5 bg-[#e1292c]"></div>
            <span className="text-[#e1292c] font-semibold tracking-wider uppercase text-xs sm:text-sm">
              Investment Options
            </span>
            <div className="w-8 sm:w-12 h-0.5 bg-[#e1292c]"></div>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#313130] mb-4 sm:mb-6 px-4">
            Choose Your Plan
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#313130]/70 max-w-3xl mx-auto leading-relaxed px-4">
            Flexible packages designed to scale with your business. All plans include dedicated support and no hidden fees.
          </p>

          {/* Billing Toggle - FIXED */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-8 px-4">
            <span className={`text-sm sm:text-base font-semibold transition-colors ${
              billingCycle === 'monthly' ? 'text-[#313130]' : 'text-[#313130]/50'
            }`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
              className={`relative w-14 h-7 sm:w-16 sm:h-8 rounded-full transition-colors duration-300 flex-shrink-0 ${
                billingCycle === 'annual' ? 'bg-[#e1292c]' : 'bg-gray-300'
              }`}
              aria-label="Toggle billing cycle"
            >
              <motion.div
                className="absolute top-0.5 sm:top-1 w-6 h-6 bg-white rounded-full shadow-md"
                animate={{ left: billingCycle === 'annual' ? '30px' : '4px' }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              />
            </button>
            <div className="flex items-center gap-1 sm:gap-2">
              <span className={`text-sm sm:text-base font-semibold transition-colors ${
                billingCycle === 'annual' ? 'text-[#313130]' : 'text-[#313130]/50'
              }`}>
                Annual
              </span>
              <span className="text-[10px] sm:text-xs bg-[#e1292c] text-white px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full whitespace-nowrap">
                Save 20%
              </span>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              className={`relative bg-white rounded-2xl p-6 sm:p-8 transition-all duration-300 ${
                pkg.popular
                  ? 'border-4 border-[#e1292c] shadow-2xl md:scale-105'
                  : 'border-2 border-gray-200 hover:border-[#e1292c] shadow-lg hover:shadow-xl'
              }`}
              whileHover={{ y: -4 }}
            >
              {/* Popular Badge - FIXED */}
              {pkg.popular && (
                <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-[#e1292c] text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg whitespace-nowrap">
                    MOST POPULAR
                  </span>
                </div>
              )}

              {/* Package Header */}
              <div className="text-center mb-6 mt-2">
                <h3 className="text-xl sm:text-2xl font-bold text-[#313130] mb-2">
                  {pkg.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#e1292c] font-semibold mb-2">
                  {pkg.tagline}
                </p>
                <p className="text-xs sm:text-sm text-[#313130]/60 leading-relaxed">
                  {pkg.description}
                </p>
              </div>

              {/* Pricing - FIXED for mobile */}
              <div className="text-center mb-6 pb-6 border-b-2 border-gray-100">
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#313130]">
                    {billingCycle === 'monthly' 
                      ? priceFormatter.format(pkg.monthlyPrice) 
                      : priceFormatter.format(pkg.annualPrice)}
                  </span>
                  <span className="text-sm sm:text-base text-[#313130]/60">
                    /{billingCycle === 'monthly' ? 'mo' : 'yr'}
                  </span>
                </div>
                {billingCycle === 'annual' && (
                  <p className="text-xs sm:text-sm text-green-600 font-semibold mt-2">
                    {pkg.savings}
                  </p>
                )}
              </div>

              {/* Features - IMPROVED spacing */}
              <ul className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 sm:gap-3">
                    {feature.included ? (
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#e1292c] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    )}
                    <span className={`text-xs sm:text-sm leading-relaxed ${
                      feature.included ? 'text-[#313130]' : 'text-[#313130]/40 line-through'
                    } ${feature.bold ? 'font-bold' : ''}`}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button - IMPROVED */}
              <motion.a
                href="#contact"
                className={`block w-full py-3 sm:py-4 rounded-full text-center text-sm sm:text-base font-semibold transition-all duration-300 ${
                  pkg.popular
                    ? 'bg-[#e1292c] text-white hover:bg-[#c32023] shadow-lg hover:shadow-xl'
                    : 'bg-[#313130] text-white hover:bg-[#e1292c] border-2 border-[#313130] hover:border-[#e1292c]'
                }`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                {pkg.cta}
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* Additional Info - IMPROVED for mobile */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-[#e1292c]/20 max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-[#313130] mb-3 sm:mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-sm sm:text-base text-[#313130]/70 mb-4 sm:mb-6 leading-relaxed">
              Every business is unique. If you need a tailored package or have specific requirements, 
              let&apos;s chat and create the perfect solution for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <motion.a
                href="#contact"
                className="bg-[#e1292c] text-white px-6 sm:px-8 py-3 rounded-full text-sm sm:text-base font-semibold hover:bg-[#c32023] transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule a Call
              </motion.a>
              <motion.a
                href="tel:+254713594140"
                className="border-2 border-[#313130] text-[#313130] px-6 sm:px-8 py-3 rounded-full text-sm sm:text-base font-semibold hover:bg-[#313130] hover:text-white transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Call: +254 713 594 140
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}