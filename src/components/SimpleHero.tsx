'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Shield, TrendingUp, ArrowRight } from 'lucide-react'

const SimpleHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-thara-navy via-thara-navy/95 to-thara-navy/90 py-20 lg:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="hero-pattern w-full h-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* CMA Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center space-x-2 mb-8"
          >
            <Shield className="w-5 h-5 text-thara-green" />
            <span className="text-thara-green font-semibold">Licensed by Oman's Capital Market Authority</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          >
            Thara Global
            <span className="text-thara-green block">Investment LLC</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Secure medium and long-term growth through innovative 
            Real Estate Investment Trusts and Public-Private Partnerships
          </motion.p>

          {/* Year Established */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-center justify-center space-x-2 mb-12"
          >
            <TrendingUp className="w-5 h-5 text-thara-gold" />
            <span className="text-thara-gold font-semibold">Established 2018</span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/about"
              className="bg-thara-green text-white px-8 py-4 rounded-lg font-semibold hover:bg-light-green transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
            >
              Learn More
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              href="/investments"
              className="border-2 border-thara-gold text-thara-gold px-8 py-4 rounded-lg font-semibold hover:bg-thara-gold hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              Explore Investments
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default SimpleHero