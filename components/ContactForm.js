'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';

export default function ContactForm() {
  const [ref, isVisible] = useScrollAnimation(0.1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errors, setErrors] = useState({});

  const maxMessageLength = 500;

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = 'Please enter a valid email address';
    if (!formData.service) newErrors.service = 'Please select a service';
    if (!formData.message.trim()) newErrors.message = 'Project details are required';
    if (formData.phone && !/^[\+]?[0-9\s\-\(\)]{10,}$/.test(formData.phone))
      newErrors.phone = 'Please enter a valid phone number';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Limit message length
    if (name === 'message' && value.length > maxMessageLength) {
      return;
    }
    
    setFormData({ ...formData, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    setErrors({});
    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || 'Not provided',
        service: formData.service,
        message: formData.message,
      };

      // Send email using EmailJS
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error('Failed to send email:', error?.message || 'unknown error');
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    setErrors({});
    setSubmitStatus(null);
  };

  const socials = [
    { name: 'Instagram', icon: <FaInstagram />, link: 'https://www.instagram.com/sawava.ke/' },
    { name: 'Tiktok', icon: <FaTiktok />, link: 'https://www.tiktok.com/@sawava.ke/' },
    { name: 'Facebook', icon: <FaFacebookF />, link: 'https://www.facebook.com/sawava.ke' },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden" ref={ref}>
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#e1292c]/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#313130]/5 rounded-full filter blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Label */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-0.5 bg-[#e1292c]"></div>
            <span className="text-[#e1292c] font-semibold tracking-wider uppercase text-sm">Get In Touch</span>
            <div className="w-12 h-0.5 bg-[#e1292c]"></div>
          </div>

          <h2 className="text-4xl md:text-5xl font-display font-bold text-[#313130] mb-6">
            Schedule an Appointment
          </h2>
          <p className="text-xl text-[#313130]/70 max-w-3xl mx-auto leading-relaxed">
            Let&apos;s create something extraordinary together. Reach out today and tell us about your project.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-[#313130] text-white rounded-2xl p-8 shadow-xl border-t-4 border-[#e1292c]">
              <h3 className="text-3xl font-display font-bold mb-6 text-[#e1292c]">
                Let&apos;s Start a Conversation
              </h3>
              <p className="mb-8 text-white/80 leading-relaxed">
                We&apos;re excited to learn about your goals and help bring your ideas to life. Our team at Sawava is ready to deliver tailored, efficient solutions that fit your vision.
              </p>

              <div className="space-y-6">
                {/* Email - Clickable */}
                <a 
                  href="mailto:hello@sawava.com"
                  className="flex items-center space-x-4 group hover:bg-white/5 p-3 rounded-lg transition-all"
                >
                  <div className="w-12 h-12 bg-[#e1292c]/20 rounded-full flex items-center justify-center group-hover:bg-[#e1292c] transition-all">
                    <svg className="w-6 h-6 text-[#e1292c] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">Email Us</h4>
                    <p className="text-white/70 group-hover:text-[#e1292c] transition-colors">hello@sawava.com</p>
                  </div>
                </a>

                {/* Phone - Clickable */}
                <a 
                  href="tel:+254713594140"
                  className="flex items-center space-x-4 group hover:bg-white/5 p-3 rounded-lg transition-all"
                >
                  <div className="w-12 h-12 bg-[#e1292c]/20 rounded-full flex items-center justify-center group-hover:bg-[#e1292c] transition-all">
                    <svg className="w-6 h-6 text-[#e1292c] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">Call Us</h4>
                    <p className="text-white/70 group-hover:text-[#e1292c] transition-colors">+254 713 594 140</p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center space-x-4 p-3">
                  <div className="w-12 h-12 bg-[#e1292c]/20 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#e1292c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">Visit Us</h4>
                    <p className="text-white/70">Nairobi, Kenya</p>
                  </div>
                </div>
              </div>

              {/* Socials */}
              <div className="mt-8 pt-8 border-t border-white/10">
                <h4 className="font-semibold mb-4 text-white">Follow Us</h4>
                <div className="flex space-x-4">
                  {socials.map(({ name, icon, link }) => (
                    <motion.a
                      key={name}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 bg-[#e1292c] rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[#e1292c] transition-all shadow-lg"
                      whileTap={{ scale: 0.95 }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      aria-label={`Follow us on ${name}`}
                    >
                      {icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE - FORM */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-xl border-2 border-gray-100">
              <div className="space-y-6">
                {/* Name, Email, Phone Fields */}
                {['name', 'email', 'phone'].map((field) => (
                  <div key={field}>
                    <label htmlFor={field} className="block text-sm font-semibold text-[#313130] mb-2">
                      {field === 'name'
                        ? 'Full Name *'
                        : field === 'email'
                        ? 'Email Address *'
                        : 'Phone Number'}
                    </label>
                    <input
                      type={field === 'email' ? 'email' : 'text'}
                      id={field}
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      aria-invalid={errors[field] ? 'true' : 'false'}
                      aria-describedby={errors[field] ? `${field}-error` : undefined}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#e1292c] focus:border-[#e1292c] outline-none transition-all text-[#313130] bg-white ${
                        errors[field] ? 'border-red-500 bg-red-50' : 'border-gray-300'
                      }`}
                      placeholder={
                        field === 'name'
                          ? 'John Moe'
                          : field === 'email'
                          ? 'john@example.com'
                          : '+254 712 345 678'
                      }
                    />
                    {errors[field] && (
                      <p id={`${field}-error`} className="mt-2 text-sm text-red-600 flex items-center gap-1" role="alert">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        {errors[field]}
                      </p>
                    )}
                  </div>
                ))}

                {/* Service Select */}
                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-[#313130] mb-2">
                    Service Interested In *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    aria-invalid={errors.service ? 'true' : 'false'}
                    aria-describedby={errors.service ? 'service-error' : undefined}
                    className={`w-full px-4 py-3 border rounded-lg text-[#313130] bg-white focus:ring-2 focus:ring-[#e1292c] focus:border-[#e1292c] outline-none transition-all ${
                      errors.service ? 'border-red-500 bg-red-50' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select a service</option>
                    <option value="admin">Executive/Admin Support</option>
                    <option value="finance">Financial & Strategic Admin</option>
                    <option value="content">Digital Content Creation</option>
                    <option value="social">Social & Community Management</option>
                    <option value="marketing">Web/Email Marketing & Events</option>
                    <option value="hr">HR & Recruitment</option>
                  </select>
                  {errors.service && (
                    <p id="service-error" className="mt-2 text-sm text-red-600 flex items-center gap-1" role="alert">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      {errors.service}
                    </p>
                  )}
                </div>

                {/* Message Textarea with Character Counter */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label htmlFor="message" className="block text-sm font-semibold text-[#313130]">
                      Project Details *
                    </label>
                    <span className={`text-xs ${formData.message.length >= maxMessageLength ? 'text-red-600 font-semibold' : 'text-gray-500'}`}>
                      {formData.message.length}/{maxMessageLength}
                    </span>
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    aria-invalid={errors.message ? 'true' : 'false'}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    className={`w-full px-4 py-3 border rounded-lg text-[#313130] bg-white focus:ring-2 focus:ring-[#e1292c] focus:border-[#e1292c] outline-none resize-none transition-all ${
                      errors.message ? 'border-red-500 bg-red-50' : 'border-gray-300'
                    }`}
                    placeholder="Tell us about your project and what you need help with..."
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-2 text-sm text-red-600 flex items-center gap-1" role="alert">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Buttons */}
                <div className="flex gap-4">
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className={`flex-1 py-4 rounded-lg font-semibold text-lg transition-all flex items-center justify-center gap-2 ${
                      isSubmitting
                        ? 'bg-gray-400 text-white cursor-not-allowed'
                        : 'bg-[#e1292c] text-white hover:bg-[#c32023] shadow-lg hover:shadow-xl'
                    }`}
                    whileHover={!isSubmitting ? { scale: 1.02, y: -2 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Schedule Appointment
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </>
                    )}
                  </motion.button>

                  <motion.button
                    type="button"
                    onClick={handleReset}
                    className="px-6 py-4 rounded-lg font-semibold text-lg border-2 border-gray-300 text-gray-700 hover:border-[#e1292c] hover:text-[#e1292c] transition-all"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Clear
                  </motion.button>
                </div>
              </div>

              {/* Status Messages */}
              {submitStatus && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mt-6 p-4 rounded-lg flex items-center gap-3 ${
                    submitStatus === 'success'
                      ? 'bg-green-50 border-2 border-green-200 text-green-700'
                      : 'bg-red-50 border-2 border-red-200 text-red-700'
                  }`}
                  role="alert"
                >
                  {submitStatus === 'success' ? (
                    <>
                      <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <p className="font-semibold">Success!</p>
                        <p className="text-sm">Thank you! We&apos;ll get back to you within 24 hours.</p>
                      </div>
                    </>
                  ) : (
                    <>
                      <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <p className="font-semibold">Error</p>
                        <p className="text-sm">Something went wrong. Please try again or contact us directly.</p>
                      </div>
                    </>
                  )}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}