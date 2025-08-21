'use client'

import { motion } from 'framer-motion'
import { Shield, Award, Calendar, MapPin, Building2 } from 'lucide-react'

const AboutHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-thara-navy via-thara-navy/95 to-thara-navy/90 py-20 lg:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1200 800">
          <defs>
            <pattern id="aboutGrid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#22c55e" strokeWidth="1" opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#aboutGrid)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <Shield className="w-6 h-6 text-thara-green" />
              <span className="text-thara-green font-semibold">CMA Licensed Since 2018</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              Building Oman's
              <span className="text-thara-green block">Investment Future</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-xl text-gray-300 mb-8 leading-relaxed"
            >
              Since 2018, Thara Global has been at the forefront of Oman's economic transformation, 
              providing innovative investment solutions that align with Vision 2040 while delivering 
              sustainable returns for our investors.
            </motion.p>

            {/* Key Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-2 gap-6 mb-8"
            >
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-thara-gold mb-2">50+</div>
                <div className="text-sm text-gray-400">Years Combined Experience</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-thara-green mb-2">2018</div>
                <div className="text-sm text-gray-400">Established & CMA Licensed</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Achievement Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="bg-white rounded-2xl p-8 shadow-2xl"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-thara-green rounded-xl flex items-center justify-center">
                      <Building2 className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-thara-navy text-lg">Thara Global</div>
                      <div className="text-sm text-gray-500">Investment Excellence</div>
                    </div>
                  </div>
                  <Award className="w-8 h-8 text-thara-gold" />
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Regulatory Compliance</span>
                    <span className="text-thara-green font-bold">100%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-thara-green h-2 rounded-full w-full"></div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Vision 2040 Alignment</span>
                    <span className="text-thara-gold font-bold">Strategic</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-thara-gold h-2 rounded-full w-5/6"></div>
                  </div>

                  <div className="bg-soft-gray rounded-lg p-4 mt-6">
                    <div className="flex items-center space-x-2 mb-2">
                      <Calendar className="w-4 h-4 text-thara-navy" />
                      <span className="text-sm font-semibold text-thara-navy">Established 2018</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-thara-navy" />
                      <span className="text-sm text-gray-600">Muscat, Sultanate of Oman</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Regulatory Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -top-4 -right-4 bg-thara-gold text-white p-4 rounded-xl shadow-lg"
              >
                <div className="text-center">
                  <Shield className="w-6 h-6 mx-auto mb-1" />
                  <div className="text-xs font-bold">CMA</div>
                  <div className="text-xs">Licensed</div>
                </div>
              </motion.div>

              {/* Floating Performance Indicator */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute -bottom-4 -left-4 bg-thara-green text-white p-4 rounded-xl shadow-lg"
              >
                <div className="text-center">
                  <Award className="w-6 h-6 mx-auto mb-1" />
                  <div className="text-xs font-bold">Excellence</div>
                  <div className="text-xs">Since 2018</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutHero
