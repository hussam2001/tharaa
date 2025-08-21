'use client'

import { motion } from 'framer-motion'
import { TrendingUp, DollarSign, Award, Users, Building2, PieChart, Target, Shield } from 'lucide-react'

const PortfolioHero = () => {
  const keyMetrics = [
    {
      icon: DollarSign,
      value: '$300M+',
      label: 'Assets Under Management',
      change: '+25%',
      period: 'YoY Growth'
    },
    {
      icon: TrendingUp,
      value: '12.5%',
      label: 'Average Annual Return',
      change: '+2.3%',
      period: 'Above Market'
    },
    {
      icon: Users,
      value: '500+',
      label: 'Active Investors',
      change: '+150',
      period: 'New This Year'
    },
    {
      icon: Award,
      value: '15',
      label: 'Successful Projects',
      change: '+3',
      period: 'Completed 2023'
    }
  ]

  return (
    <section className="relative bg-gradient-to-br from-thara-navy via-thara-navy/95 to-thara-navy/90 py-20 lg:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1200 800">
          <defs>
            <pattern id="portfolioGrid" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#22c55e" strokeWidth="1" opacity="0.3"/>
              <rect x="45" y="45" width="10" height="10" fill="#f59e0b" opacity="0.4"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#portfolioGrid)" />
        </svg>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-thara-green opacity-20 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-thara-gold opacity-15 rounded-full blur-xl"></div>

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
              <span className="text-thara-green font-semibold">Proven Track Record Since 2018</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              Our Investment
              <span className="text-thara-green block">Portfolio &</span>
              <span className="text-thara-gold">Performance</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-xl text-gray-300 mb-8 leading-relaxed"
            >
              Discover our diversified investment portfolio that has consistently delivered 
              superior returns while contributing to Oman's economic growth and sustainable development.
            </motion.p>

            {/* Achievement Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 mb-8"
            >
              <h3 className="text-lg font-bold mb-4">Portfolio Highlights</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Building2 className="w-5 h-5 text-thara-green" />
                  <div>
                    <div className="font-semibold">Real Estate REITs</div>
                    <div className="text-sm text-gray-300">42% of portfolio</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Target className="w-5 h-5 text-thara-gold" />
                  <div>
                    <div className="font-semibold">PPP Projects</div>
                    <div className="text-sm text-gray-300">28% of portfolio</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <PieChart className="w-5 h-5 text-light-green" />
                  <div>
                    <div className="font-semibold">Structured Products</div>
                    <div className="text-sm text-gray-300">20% of portfolio</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <TrendingUp className="w-5 h-5 text-white" />
                  <div>
                    <div className="font-semibold">ESG Investments</div>
                    <div className="text-sm text-gray-300">10% of portfolio</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Performance Period */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-center lg:text-left"
            >
              <div className="text-sm text-gray-400 mb-2">Performance Period</div>
              <div className="text-2xl font-bold text-thara-gold">January 2018 - December 2023</div>
            </motion.div>
          </motion.div>

          {/* Key Metrics Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold text-thara-navy">Portfolio Performance</h3>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-thara-green rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-500">Live Data</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {keyMetrics.map((metric, index) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="bg-soft-gray rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-thara-green bg-opacity-10 rounded-lg flex items-center justify-center">
                        <metric.icon className="w-6 h-6 text-thara-green" />
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-green-600 font-medium">{metric.change}</div>
                        <div className="text-xs text-gray-500">{metric.period}</div>
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-thara-navy mb-1">{metric.value}</div>
                    <div className="text-sm text-gray-600">{metric.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Performance Chart Placeholder */}
              <div className="mt-8 p-6 bg-gradient-to-r from-thara-navy to-dark-navy rounded-xl text-white">
                <h4 className="text-lg font-bold mb-4">5-Year Performance Summary</h4>
                <div className="flex items-end justify-between space-x-2 h-24">
                  {[65, 78, 85, 92, 100].map((height, index) => (
                    <motion.div
                      key={index}
                      initial={{ height: 0 }}
                      animate={{ height: `${height}%` }}
                      transition={{ duration: 1, delay: 0.8 + index * 0.2 }}
                      className="bg-thara-green rounded-t flex-1 min-h-[10px]"
                    ></motion.div>
                  ))}
                </div>
                <div className="flex justify-between text-xs text-gray-300 mt-2">
                  <span>2019</span>
                  <span>2020</span>
                  <span>2021</span>
                  <span>2022</span>
                  <span>2023</span>
                </div>
              </div>
            </div>

            {/* Floating Achievement Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="absolute -top-4 -right-4 bg-thara-gold text-white p-3 rounded-xl shadow-lg"
            >
              <Award className="w-6 h-6" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="absolute -bottom-4 -left-4 bg-thara-green text-white p-3 rounded-xl shadow-lg"
            >
              <TrendingUp className="w-6 h-6" />
            </motion.div>
          </motion.div>
        </div>

        {/* Trust & Transparency */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8">
            <p className="text-gray-300 mb-6">
              All performance data is audited and verified by independent third parties
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-thara-green">100%</div>
                <div className="text-sm text-gray-400">Transparent Reporting</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-thara-gold">6</div>
                <div className="text-sm text-gray-400">Years Track Record</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">CMA</div>
                <div className="text-sm text-gray-400">Regulated</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-thara-green">A+</div>
                <div className="text-sm text-gray-400">Credit Rating</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default PortfolioHero


