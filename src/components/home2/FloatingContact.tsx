'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Send, Phone, Mail, MapPin, Calendar, ArrowRight, CheckCircle, AlertCircle } from 'lucide-react'

const FloatingContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    investmentAmount: '',
    investmentType: 'REITs',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setTimeout(() => setSubmitStatus('idle'), 3000)
    }, 2000)
  }

  const contactInfo = [
    {
      icon: Phone,
      label: 'Call Us',
      value: '+968 2460 0000',
      href: 'tel:+96824600000',
      color: 'from-emerald-400 to-green-500'
    },
    {
      icon: Mail,
      label: 'Email Us',
      value: 'info@tharaglobal.com',
      href: 'mailto:info@tharaglobal.com',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      icon: MapPin,
      label: 'Visit Us',
      value: 'Muscat, Sultanate of Oman',
      href: '#',
      color: 'from-purple-400 to-pink-500'
    }
  ]

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900"></div>
      
      {/* Floating Background Elements */}
      <div className="absolute inset-0">
        {Array.from({ length: 8 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-emerald-400/30 to-blue-400/30 rounded-full"
            animate={{
              y: [0, -100, 0],
              x: [0, 50, 0],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 30}%`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-full border border-emerald-500/20 backdrop-blur-sm mb-6"
          >
            <Calendar className="w-5 h-5 text-emerald-400 mr-2" />
            <span className="text-emerald-400 font-semibold">Get In Touch</span>
          </motion.div>

          <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent mb-6">
            Start Your Investment Journey
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Ready to explore investment opportunities? Our expert team is here to guide you every step of the way.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                Connect with our investment experts to discuss your goals and discover personalized investment solutions.
              </p>
            </div>

            {contactInfo.map((contact, index) => (
              <motion.a
                key={contact.label}
                href={contact.href}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05, x: 10 }}
                className={`group flex items-center p-6 bg-gradient-to-r ${contact.color}/10 backdrop-blur-xl border border-white/10 rounded-2xl hover:bg-white/5 transition-all duration-300`}
              >
                <div className={`w-14 h-14 bg-gradient-to-r ${contact.color} rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                  <contact.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold text-lg">{contact.label}</div>
                  <div className="text-gray-400 group-hover:text-gray-300 transition-colors">
                    {contact.value}
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
              </motion.a>
            ))}

            {/* Business Hours */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
            >
              <h4 className="text-white font-semibold text-lg mb-4">Business Hours</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex justify-between">
                  <span>Sunday - Thursday</span>
                  <span>8:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Friday - Saturday</span>
                  <span>Closed</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                  >
                    <label className="block text-white font-semibold mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-emerald-400 focus:bg-white/10 transition-all duration-300"
                      placeholder="Enter your full name"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                  >
                    <label className="block text-white font-semibold mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-emerald-400 focus:bg-white/10 transition-all duration-300"
                      placeholder="Enter your email address"
                    />
                  </motion.div>
                </div>

                {/* Phone and Investment Amount */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                  >
                    <label className="block text-white font-semibold mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-emerald-400 focus:bg-white/10 transition-all duration-300"
                      placeholder="+968 XXXX XXXX"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                  >
                    <label className="block text-white font-semibold mb-2">Investment Amount</label>
                    <select
                      name="investmentAmount"
                      value={formData.investmentAmount}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white focus:outline-none focus:border-emerald-400 focus:bg-white/10 transition-all duration-300"
                    >
                      <option value="">Select range</option>
                      <option value="100k-500k">OMR 100K - 500K</option>
                      <option value="500k-1m">OMR 500K - 1M</option>
                      <option value="1m-5m">OMR 1M - 5M</option>
                      <option value="5m+">OMR 5M+</option>
                    </select>
                  </motion.div>
                </div>

                {/* Investment Type */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                >
                  <label className="block text-white font-semibold mb-2">Investment Interest</label>
                  <select
                    name="investmentType"
                    value={formData.investmentType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white focus:outline-none focus:border-emerald-400 focus:bg-white/10 transition-all duration-300"
                  >
                    <option value="REITs">Real Estate Investment Trusts (REITs)</option>
                    <option value="PPP">Public-Private Partnerships</option>
                    <option value="Advisory">Investment Advisory Services</option>
                    <option value="Mixed">Mixed Portfolio</option>
                  </select>
                </motion.div>

                {/* Message */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                >
                  <label className="block text-white font-semibold mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-emerald-400 focus:bg-white/10 transition-all duration-300 resize-none"
                    placeholder="Tell us about your investment goals and any specific questions you have..."
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group flex-1 relative px-8 py-4 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-xl font-semibold text-white overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-emerald-500/25"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      {isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                          />
                          Sending...
                        </>
                      ) : submitStatus === 'success' ? (
                        <>
                          <CheckCircle className="w-5 h-5 mr-2" />
                          Message Sent!
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>

                  <button
                    type="button"
                    className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl font-semibold text-white hover:bg-white/20 transition-all duration-300 flex items-center justify-center"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Schedule Call
                  </button>
                </motion.div>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center p-4 bg-emerald-500/20 border border-emerald-500/30 rounded-xl"
                  >
                    <CheckCircle className="w-5 h-5 text-emerald-400 mr-2" />
                    <span className="text-emerald-400">Thank you! We'll get back to you within 24 hours.</span>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center p-4 bg-red-500/20 border border-red-500/30 rounded-xl"
                  >
                    <AlertCircle className="w-5 h-5 text-red-400 mr-2" />
                    <span className="text-red-400">Sorry, there was an error. Please try again.</span>
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default FloatingContact

