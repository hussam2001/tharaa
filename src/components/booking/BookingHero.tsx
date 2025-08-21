'use client'

import { motion } from 'framer-motion'
import { Calendar, Clock, Users, Award, CheckCircle } from 'lucide-react'

const BookingHero = () => {
  const consultationFeatures = [
    {
      icon: Calendar,
      title: 'Flexible Scheduling',
      description: 'Choose from available time slots that fit your schedule'
    },
    {
      icon: Clock,
      title: '60-Minute Sessions',
      description: 'Comprehensive consultation with dedicated time for your questions'
    },
    {
      icon: Users,
      title: 'Expert Advisors',
      description: 'Meet with our CMA-licensed investment professionals'
    },
    {
      icon: Award,
      title: 'Shariah Compliant',
      description: 'All advice follows Islamic finance principles'
    }
  ]

  return (
    <section className="relative bg-gradient-to-br from-thara-navy via-thara-navy/95 to-thara-navy/90 py-20 lg:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-slate-800/20"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-thara-gold/20 text-thara-gold rounded-full px-4 py-2 text-sm font-semibold"
            >
              <Calendar className="w-4 h-4" />
              Professional Investment Consultation
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl lg:text-6xl font-bold text-white leading-tight"
            >
              Book Your
              <span className="block text-thara-gold">Investment</span>
              <span className="block text-white">Consultation</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-gray-300 leading-relaxed"
            >
              Schedule a personalized consultation with our investment experts to discuss 
              your financial goals and explore Shariah-compliant investment opportunities.
            </motion.p>

            {/* What You'll Get */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold text-white">What You'll Get:</h3>
              <div className="space-y-3">
                {[
                  'Personalized investment strategy review',
                  'Portfolio analysis and recommendations',
                  'Risk assessment and goal setting',
                  'Shariah compliance verification',
                  'Market insights and opportunities'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-thara-green flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap items-center gap-6 text-sm text-gray-400"
            >
              <div className="flex items-center">
                <div className="w-3 h-3 bg-thara-green rounded-full mr-2"></div>
                CMA Licensed
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-thara-gold rounded-full mr-2"></div>
                50+ Years Experience
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-400 rounded-full mr-2"></div>
                100% Shariah Compliant
              </div>
            </motion.div>
          </div>

          {/* Right Column - Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {consultationFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-thara-gold/20 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-thara-gold" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default BookingHero
