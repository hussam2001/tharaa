'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'
import { Building, Users, TrendingUp, Shield, ArrowRight, Zap, Target, Star } from 'lucide-react'

const ModernServices = () => {
  const [activeService, setActiveService] = useState(0)

  const services = [
    {
      icon: Building,
      title: 'Real Estate Investment Trusts',
      subtitle: 'REITs Excellence',
      description: 'Diversified real estate portfolios offering stable income streams and capital appreciation through professionally managed properties across prime Omani locations.',
      features: [
        'Commercial & Residential Properties',
        'Professional Property Management',
        'Quarterly Distribution Returns',
        'Market-Leading Performance'
      ],
      color: 'from-emerald-400 to-green-500',
      bgGradient: 'from-emerald-500/10 to-green-500/5',
      borderColor: 'border-emerald-500/30'
    },
    {
      icon: Users,
      title: 'Public-Private Partnerships',
      subtitle: 'Strategic Collaborations',
      description: 'Innovative partnership structures that combine public sector stability with private sector efficiency, creating sustainable infrastructure and development projects.',
      features: [
        'Infrastructure Development',
        'Government Partnerships',
        'Risk-Shared Investment Models',
        'Long-term Value Creation'
      ],
      color: 'from-blue-400 to-cyan-500',
      bgGradient: 'from-blue-500/10 to-cyan-500/5',
      borderColor: 'border-blue-500/30'
    },
    {
      icon: TrendingUp,
      title: 'Investment Advisory',
      subtitle: 'Expert Guidance',
      description: 'Comprehensive investment advisory services backed by deep market knowledge and regulatory expertise to optimize your investment strategy and returns.',
      features: [
        'Portfolio Optimization',
        'Risk Assessment & Management',
        'Market Analysis & Insights',
        'Regulatory Compliance Support'
      ],
      color: 'from-purple-400 to-pink-500',
      bgGradient: 'from-purple-500/10 to-pink-500/5',
      borderColor: 'border-purple-500/30'
    }
  ]

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-800"></div>
      
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 border border-white rounded-full"
        ></motion.div>
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-64 h-64 border border-white rounded-full"
        ></motion.div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-500/20 backdrop-blur-sm mb-6"
          >
            <Star className="w-5 h-5 text-blue-400 mr-2" />
            <span className="text-blue-400 font-semibold">Investment Solutions</span>
          </motion.div>

          <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Comprehensive investment solutions designed to maximize returns while minimizing risk
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              onHoverStart={() => setActiveService(index)}
              className={`group relative bg-gradient-to-br ${service.bgGradient} backdrop-blur-xl border ${service.borderColor} rounded-3xl p-8 cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl`}
            >
              {/* Background Glow */}
              <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}></div>

              {/* Header */}
              <div className="relative mb-8">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className={`w-20 h-20 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                >
                  <service.icon className="w-10 h-10 text-white" />
                </motion.div>

                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-gray-100 transition-colors">
                  {service.title}
                </h3>
                <p className={`text-lg font-semibold bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                  {service.subtitle}
                </p>
              </div>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed mb-8 group-hover:text-gray-300 transition-colors">
                {service.description}
              </p>

              {/* Features */}
              <div className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * featureIndex, duration: 0.5 }}
                    className="flex items-center space-x-3"
                  >
                    <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full`}></div>
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <motion.div
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-between"
              >
                <Link
                  href="/investments"
                  className={`inline-flex items-center text-sm font-semibold bg-gradient-to-r ${service.color} bg-clip-text text-transparent hover:opacity-80 transition-opacity`}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <Zap className="w-6 h-6 text-white" />
                </motion.div>
              </div>

              {/* Active Indicator */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: activeService === index ? '100%' : '0%' }}
                transition={{ duration: 0.5 }}
                className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${service.color} rounded-full`}
              ></motion.div>
            </motion.div>
          ))}
        </div>

        {/* Active Service Details */}
        <motion.div
          key={activeService}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className={`inline-flex items-center px-8 py-4 bg-gradient-to-r ${services[activeService].bgGradient} backdrop-blur-xl border ${services[activeService].borderColor} rounded-2xl`}>
            <Target className={`w-6 h-6 mr-3`} style={{ color: services[activeService].color.split(' ')[1].replace('to-', '') }} />
            <div className="text-left">
              <div className="text-white font-semibold">Currently Viewing</div>
              <div className="text-gray-400 text-sm">{services[activeService].title}</div>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-xl border border-white/10 rounded-3xl p-12">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Discover how our investment solutions can help you achieve your financial goals with confidence and security.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="group px-8 py-4 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-xl font-semibold text-white hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center"
              >
                Schedule Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/portfolio"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl font-semibold text-white hover:bg-white/20 transition-all duration-300 flex items-center justify-center"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ModernServices
