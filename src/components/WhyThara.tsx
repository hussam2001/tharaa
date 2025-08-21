'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { TrendingUp, Users, MapPin, ArrowRight } from 'lucide-react'

const WhyThara = () => {
  const reasons = [
    {
      icon: TrendingUp,
      title: 'Investment Projects',
      subtitle: 'Safe and innovative investment projects',
      description: 'We focus on carefully vetted investment opportunities that provide sustainable returns while contributing to Oman\'s economic growth and diversification.',
      color: '22c55e'
    },
    {
      icon: Users,
      title: 'Omani Team',
      subtitle: 'Local and international experience',
      description: 'Our experienced Omani team combines deep local market knowledge with international investment expertise to identify and execute optimal investment strategies.',
      color: 'f59e0b'
    },
    {
      icon: MapPin,
      title: 'Enhancing Economy',
      subtitle: 'Contributing to Oman\'s development cycle',
      description: 'Every investment we make is designed to enhance Oman\'s economic and development cycle, supporting the nation\'s Vision 2040 and sustainable growth objectives.',
      color: '1e3a8a'
    }
  ]

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-thara-navy mb-6">
            Why Choose Thara?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Three fundamental pillars that distinguish Thara Global as your trusted investment partner
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group bg-gray-50 rounded-3xl p-8 hover:bg-white hover:shadow-xl transition-all duration-500 border border-gray-100"
            >
              {/* Icon */}
              <div className={`w-16 h-16 bg-[#${reason.color}] bg-opacity-10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-opacity-15 transition-all duration-300`}>
                <reason.icon className={`w-8 h-8 text-[#${reason.color}]`} />
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-thara-navy group-hover:text-dark-navy transition-colors">
                  {reason.title}
                </h3>
                
                <p className={`text-[#${reason.color}] font-semibold text-lg`}>
                  {reason.subtitle}
                </p>
                
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>

              {/* Decorative Element */}
              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className={`h-1 bg-[#${reason.color}] rounded-full w-12`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-thara-navy to-dark-navy rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Start Your Investment Journey?</h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Discover how Thara Global can help you achieve your investment goals through our proven strategies and local expertise.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/investments"
                className="bg-thara-green text-white px-8 py-4 rounded-xl font-semibold hover:bg-light-green transition-all duration-300 shadow-lg flex items-center justify-center group"
              >
                Explore Investment Options
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-thara-navy transition-all duration-300 flex items-center justify-center"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyThara