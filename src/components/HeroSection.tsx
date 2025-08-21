'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Shield, Award, TrendingUp, Download } from 'lucide-react'

const HeroSection = () => {
  return (
    <section className="relative bg-thara-navy overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 geometric-pattern opacity-10"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-thara-green opacity-5 rounded-full -translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-thara-gold opacity-5 rounded-full translate-x-48 translate-y-48"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center space-x-2 mb-6"
            >
              <Shield className="w-5 h-5 text-thara-green" />
              <span className="text-sm font-medium text-thara-green">Licensed by CMA</span>
              <span className="text-sm text-gray-300">• 50+ Years Experience • Vision 2040 Aligned</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              Pioneering{' '}
              <span className="text-thara-green">Sustainable</span>{' '}
              Investment Solutions in{' '}
              <span className="text-thara-gold">Oman</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-gray-300 mb-8 leading-relaxed"
            >
              Building Oman's economic future through strategic investments in real estate, 
              public-private partnerships, and sustainable development projects. 
              Fully regulated and committed to delivering secure, stable returns.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Link
                href="/investments"
                className="bg-thara-green text-white px-8 py-4 rounded-lg font-semibold hover:bg-light-green transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
              >
                <TrendingUp className="w-5 h-5 mr-2" />
                Explore Investment Opportunities
              </Link>
              <Link
                href="/about/company-profile.pdf"
                className="border-2 border-thara-gold text-thara-gold px-8 py-4 rounded-lg font-semibold hover:bg-thara-gold hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Company Profile
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-3 gap-6"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-thara-green mb-2">2018</div>
                <div className="text-sm text-gray-400">Established</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-thara-gold mb-2">50+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">CMA</div>
                <div className="text-sm text-gray-400">Licensed</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative w-full max-w-lg mx-auto">
              {/* Main Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="bg-white rounded-2xl p-8 shadow-2xl"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-thara-green rounded-lg flex items-center justify-center">
                      <svg
                        viewBox="0 0 24 24"
                        className="w-7 h-7 text-white"
                        fill="currentColor"
                      >
                        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                        <path d="M12 8l4 4h-8l4-4z" fill="#f59e0b" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-thara-navy">Investment Portfolio</div>
                      <div className="text-sm text-gray-500">Real Estate & Infrastructure</div>
                    </div>
                  </div>
                  <Award className="w-8 h-8 text-thara-gold" />
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">REITs Performance</span>
                    <span className="text-thara-green font-semibold">+12.5%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-thara-green h-2 rounded-full w-3/4"></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">PPP Projects</span>
                    <span className="text-thara-gold font-semibold">+8.3%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-thara-gold h-2 rounded-full w-2/3"></div>
                  </div>

                  <div className="bg-soft-gray rounded-lg p-4 mt-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-thara-navy mb-1">Vision 2040</div>
                      <div className="text-sm text-gray-600">Aligned Investment Strategy</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -top-4 -right-4 bg-thara-gold text-white p-3 rounded-lg shadow-lg"
              >
                <Shield className="w-6 h-6" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute -bottom-4 -left-4 bg-thara-green text-white p-3 rounded-lg shadow-lg"
              >
                <TrendingUp className="w-6 h-6" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

