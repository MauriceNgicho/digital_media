'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

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
    setFormData({ ...formData, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    setErrors({});
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const socials = [
    { name: 'Twitter', icon: <FaTwitter />, link: '#' },
    { name: 'Facebook', icon: <FaFacebookF />, link: '#' },
    { name: 'Instagram', icon: <FaInstagram />, link: '#' },
    { name: 'LinkedIn', icon: <FaLinkedinIn />, link: '#' },
  ];

  return (
    <section id="contact" className="py-20 bg-[#f9f9f9]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-[#313130] mb-4">
            Schedule an Appointment
          </h2>
          <p className="text-lg text-[#555] max-w-2xl mx-auto">
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
            <div className="bg-[#313130] text-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-3xl font-display font-bold mb-6 text-[#e1292c]">
                Let&apos;s Start a Conversation
              </h3>
              <p className="mb-8 text-gray-200 leading-relaxed">
                We&apos;re excited to learn about your goals and help bring your ideas to life. Our team at Sawava is ready to deliver tailored, efficient solutions that fit your vision.
              </p>

              <div className="space-y-6">
                {/* Contact Info */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#e1292c]/20 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#e1292c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">Email Us</h4>
                    <p className="text-gray-300">hello@sawava.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#e1292c]/20 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#e1292c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502L19 19a2 2 0 01-2 2H9.716C4.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">Call Us</h4>
                    <p className="text-gray-300">+254 713 594 140</p>
                  </div>
                </div>
              </div>

              {/* Socials */}
              <div className="mt-8 pt-8 border-t border-gray-700">
                <h4 className="font-semibold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  {socials.map(({ name, icon, link }) => (
                    <motion.a
                      key={name}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-[#e1292c] rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[#e1292c] transition-all"
                      whileTap={{ scale: 0.95 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      <span className="sr-only">{name}</span>
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
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <div className="space-y-6">
                {['name', 'email', 'phone'].map((field) => (
                  <div key={field}>
                    <label htmlFor={field} className="block text-sm font-semibold text-[#313130] mb-2 capitalize">
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
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#e1292c] outline-none transition-all ${
                        errors[field] ? 'border-red-500' : 'border-gray-300'
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
                      <p className="mt-1 text-sm text-red-600">{errors[field]}</p>
                    )}
                  </div>
                ))}

                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-[#313130] mb-2">
                    Service Interested In *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-[#e1292c] focus:border-transparent outline-none transition-all"
                  >
                    <option value="">Select a service</option>
                    <option value="admin">Executive/Admin Support</option>
                    <option value="finance">Financial & Strategic Admin</option>
                    <option value="content">Digital Content Creation</option>
                    <option value="social">Social & Community Management</option>
                    <option value="marketing">Marketing & Events</option>
                    <option value="hr">HR & Recruitment</option>
                  </select>
                  {errors.service && (
                    <p className="mt-1 text-sm text-red-600">{errors.service}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-[#313130] mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-[#e1292c] outline-none resize-none"
                    placeholder="Tell us about your project..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                  )}
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-lg font-semibold text-lg transition-all ${
                    isSubmitting
                      ? 'bg-gray-400 text-white cursor-not-allowed'
                      : 'bg-[#e1292c] text-white hover:bg-[#c61e23] shadow-lg hover:shadow-xl'
                  }`}
                  whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                >
                  {isSubmitting ? 'Sending...' : 'Schedule Appointment'}
                </motion.button>
              </div>

              {/* Status Messages */}
              {submitStatus && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mt-4 p-4 rounded-lg text-center ${
                    submitStatus === 'success'
                      ? 'bg-green-50 border border-green-200 text-green-700'
                      : 'bg-red-50 border border-red-200 text-red-700'
                  }`}
                >
                  {submitStatus === 'success'
                    ? 'Thank you! We’ll get back to you shortly.'
                    : 'Something went wrong. Please try again.'}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
