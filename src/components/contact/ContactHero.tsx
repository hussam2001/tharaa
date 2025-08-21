'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Calendar } from 'lucide-react'

const ContactHero = () => {
  const quickContacts = [
    {
      icon: Phone,
      title: 'Call Us',
      value: '+968 7688 0161',
      description: 'Speak directly with our investment specialists',
      action: 'tel:+96876880161'
    },
    {
      icon: Mail,
      title: 'Email Us',
      value: 'info@tharaglobal.com',
      description: 'Send us your investment inquiries',
      action: 'mailto:info@tharaglobal.com'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      value: 'Muscat, Oman',
      description: 'Meet our team at our headquarters',
      action: '#office-location'
    },
    {
      icon: Calendar,
      title: 'Schedule Meeting',
      value: 'Book Consultation',
      description: 'Reserve time with our investment advisors',
      action: '#contact-form'
    }
  ]

  return (
    <section className="relative bg-gradient-to-br from-thara-navy via-thara-navy/95 to-thara-navy/90 py-20 lg:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-slate-800/20"></div>
      </div>

      {/* Background Decorations */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-thara-gold opacity-15 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-thara-green opacity-20 rounded-full blur-lg"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-thara-green bg-opacity-20 text-thara-green text-sm font-semibold mb-6">
              <span className="w-2 h-2 bg-thara-green rounded-full mr-2"></span>
              Get In Touch
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Let's Discuss Your
              <span className="block text-thara-gold">Investment Goals</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
              Connect with our expert investment advisors to explore personalized Shariah-compliant 
              investment solutions tailored to your financial objectives.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <motion.a
                href="#contact-form"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-4 bg-thara-gold text-thara-navy font-semibold rounded-xl hover:bg-yellow-400 transition-colors duration-200 shadow-lg"
              >
                Schedule Consultation
              </motion.a>
              
              <motion.a
                href="tel:+96876880161"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-thara-navy transition-all duration-200"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </motion.a>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-thara-green rounded-full mr-2"></div>
                CMA Licensed
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-thara-gold rounded-full mr-2"></div>
                Shariah Compliant
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-400 rounded-full mr-2"></div>
                50+ Years Experience
              </div>
            </div>
          </motion.div>

          {/* Right Content - Quick Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {quickContacts.map((contact, index) => {
              const Icon = contact.icon
              return (
                <motion.a
                  key={contact.title}
                  href={contact.action}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group relative bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300"
                >
                  {/* Icon */}
                  <div className="w-12 h-12 bg-thara-gold bg-opacity-20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-thara-gold group-hover:bg-opacity-30 transition-colors duration-200">
                    <Icon className="w-6 h-6 text-thara-gold" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-white mb-2">{contact.title}</h3>
                  <p className="text-thara-gold font-medium mb-2">{contact.value}</p>
                  <p className="text-sm text-gray-300">{contact.description}</p>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-thara-gold/5 to-thara-green/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.a>
              )
            })}
          </motion.div>
        </div>


      </div>
    </section>
  )
}

export default ContactHero