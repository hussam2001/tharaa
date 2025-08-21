'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Building2, ArrowRight, Users, Target } from 'lucide-react'

const WhoIsThara = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-thara-navy mb-6">Who is Thara?</h2>
              
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  <strong className="text-thara-navy">Thara Investment LLC</strong> is an Omani investment company 
                  licensed by Oman's Capital Market Authority. Established in 2018 following comprehensive 
                  analysis of Oman's investment landscape.
                </p>

                <p>
                  We recognized a strategic opportunity to offer <span className="font-semibold text-[#22c55e]">
                  Public-Private Partnerships</span> and <span className="font-semibold text-[#22c55e]">
                  Real Estate Investment Vehicles</span> that provide secure medium and long-term growth 
                  while contributing to Oman's economic development.
                </p>

                <p>
                  Our investment approach focuses on sustainable returns through carefully selected 
                  opportunities that align with Oman's Vision 2040 and economic diversification goals.
                </p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Link
                href="/about"
                className="inline-flex items-center bg-thara-navy text-white px-8 py-4 rounded-xl font-semibold hover:bg-dark-navy transition-all duration-300 shadow-lg group"
              >
                Learn More About Our Story
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Professional Info Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              {/* Header */}
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-thara-navy rounded-2xl flex items-center justify-center">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-thara-navy">Thara Investment LLC</h3>
                  <p className="text-thara-green font-semibold">CMA Licensed Investment Company</p>
                </div>
              </div>

              {/* Key Information */}
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-2xl p-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 font-medium">Established</span>
                    <span className="text-thara-navy font-bold text-xl">2018</span>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-2xl p-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 font-medium">Investment Focus</span>
                    <span className="text-thara-green font-bold">REITs & PPP</span>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-2xl p-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 font-medium">Regulatory Authority</span>
                    <span className="text-thara-gold font-bold">CMA Oman</span>
                  </div>
                </div>

                {/* Investment Approach */}
                <div className="pt-4">
                  <h4 className="text-lg font-semibold text-thara-navy mb-4 flex items-center">
                    <Target className="w-5 h-5 mr-2" />
                    Our Approach
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-thara-green rounded-full mt-2"></div>
                      <span className="text-gray-700">Strategic market analysis and opportunity identification</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-thara-gold rounded-full mt-2"></div>
                      <span className="text-gray-700">Risk-managed investment structures</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-thara-navy rounded-full mt-2"></div>
                      <span className="text-gray-700">Long-term sustainable growth focus</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Element */}
              <div className="absolute -top-3 -right-3 w-6 h-6 opacity-20">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <polygon points="50,20 70,50 30,50" fill="#22c55e" />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default WhoIsThara