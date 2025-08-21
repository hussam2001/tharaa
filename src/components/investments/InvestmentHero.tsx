'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Shield, Target, Building2, Users, PieChart, Leaf } from 'lucide-react'
import Link from 'next/link'

const InvestmentHero = () => {
  const highlights = [
    { icon: Building2, label: 'REITs', value: '$120M+' },
    { icon: Users, label: 'PPP Projects', value: '15+' },
    { icon: PieChart, label: 'Structured Products', value: '8' },
    { icon: Leaf, label: 'ESG Investments', value: '60%' }
  ]

  return (
    <section className="relative bg-gradient-to-br from-thara-navy via-thara-navy/95 to-thara-navy/90 py-20 lg:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1200 800">
          <defs>
            <pattern id="investmentGrid" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#22c55e" strokeWidth="1" opacity="0.3"/>
              <circle cx="50" cy="50" r="2" fill="#f59e0b" opacity="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#investmentGrid)" />
        </svg>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-thara-green opacity-20 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-thara-gold opacity-15 rounded-full blur-xl"></div>

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
              <Shield className="w-5 h-5 text-thara-green" />
              <span className="text-thara-green font-semibold">CMA Licensed Investment Solutions</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              Comprehensive
              <span className="text-thara-green block">Investment</span>
              <span className="text-thara-gold">Solutions</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-xl text-gray-300 mb-8 leading-relaxed"
            >
              Discover our diverse portfolio of investment opportunities designed to meet your 
              financial goals while contributing to Oman's economic growth and Vision 2040 objectives.
            </motion.p>

            {/* Investment Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-2 gap-4 mb-8"
            >
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                  className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-thara-green bg-opacity-20 rounded-lg flex items-center justify-center">
                      <highlight.icon className="w-5 h-5 text-thara-green" />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-white">{highlight.value}</div>
                      <div className="text-sm text-gray-300">{highlight.label}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="#investment-solutions"
                className="bg-thara-green text-white px-8 py-4 rounded-lg font-semibold hover:bg-light-green transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
              >
                <TrendingUp className="w-5 h-5 mr-2" />
                Explore Opportunities
              </Link>
              <Link
                href="/contact"
                className="border-2 border-thara-gold text-thara-gold px-8 py-4 rounded-lg font-semibold hover:bg-thara-gold hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                <Target className="w-5 h-5 mr-2" />
                Schedule Consultation
              </Link>
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
              {/* Main Investment Dashboard */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="bg-white rounded-2xl p-8 shadow-2xl"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-thara-navy">Investment Portfolio</h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-thara-green rounded-full"></div>
                    <span className="text-sm text-gray-500">Live Performance</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-soft-gray rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Building2 className="w-5 h-5 text-thara-green" />
                      <span className="font-medium text-thara-navy">Real Estate REITs</span>
                    </div>
                    <span className="text-thara-green font-bold">+12.5%</span>
                  </div>

                  <div className="flex justify-between items-center p-3 bg-soft-gray rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Users className="w-5 h-5 text-thara-gold" />
                      <span className="font-medium text-thara-navy">PPP Infrastructure</span>
                    </div>
                    <span className="text-thara-gold font-bold">+8.3%</span>
                  </div>

                  <div className="flex justify-between items-center p-3 bg-soft-gray rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Leaf className="w-5 h-5 text-light-green" />
                      <span className="font-medium text-thara-navy">Sustainable Funds</span>
                    </div>
                    <span className="text-light-green font-bold">+10.1%</span>
                  </div>

                  <div className="bg-gradient-to-r from-thara-navy to-dark-navy rounded-lg p-4 text-white">
                    <div className="text-center">
                      <div className="text-sm text-gray-300 mb-1">Total Portfolio Performance</div>
                      <div className="text-2xl font-bold text-thara-green">+11.2%</div>
                      <div className="text-xs text-gray-400">Annual Return (2023)</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Performance Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -top-4 -right-4 bg-thara-green text-white p-3 rounded-xl shadow-lg"
              >
                <TrendingUp className="w-6 h-6" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute -bottom-4 -left-4 bg-thara-gold text-white p-3 rounded-xl shadow-lg"
              >
                <Shield className="w-6 h-6" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 text-center"
        >
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8">
            <p className="text-gray-300 mb-6">Trusted by 500+ investors across Oman and the GCC</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-thara-green">$300M+</div>
                <div className="text-sm text-gray-400">Assets Under Management</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-thara-gold">100%</div>
                <div className="text-sm text-gray-400">Compliance Record</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">15+</div>
                <div className="text-sm text-gray-400">Active Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-thara-green">6</div>
                <div className="text-sm text-gray-400">Years of Excellence</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default InvestmentHero
