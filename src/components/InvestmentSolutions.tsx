'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Building2, Users, PieChart, Leaf, ArrowRight } from 'lucide-react'

const InvestmentSolutions = () => {
  const solutions = [
    {
      icon: Building2,
      title: 'Real Estate Investment Trusts (REITs)',
      description: 'Diversified real estate portfolios across Oman\'s prime commercial and residential developments. Secure, liquid investments with steady returns.',
      features: ['Diversified Portfolio', 'Regular Dividends', 'Liquid Investment'],
      link: '/investments/reits'
    },
    {
      icon: Users,
      title: 'Public-Private Partnerships',
      description: 'Strategic collaborations with government entities driving Oman\'s infrastructure development and economic diversification goals.',
      features: ['Government Backed', 'Long-term Stability', 'Vision 2040 Aligned'],
      link: '/investments/ppp'
    },
    {
      icon: PieChart,
      title: 'Structured Investment Products',
      description: 'Tailored financial instruments designed to meet specific investment objectives with controlled risk profiles and enhanced returns.',
      features: ['Customized Solutions', 'Risk Management', 'Enhanced Returns'],
      link: '/investments/structured'
    },
    {
      icon: Leaf,
      title: 'Sustainable & ESG Investments',
      description: 'Environmentally responsible investments supporting Oman\'s green transition and sustainable development initiatives.',
      features: ['ESG Compliant', 'Environmental Impact', 'Future-focused'],
      link: '/investments/sustainable'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-thara-navy mb-4">
            Comprehensive Investment Solutions
          </h2>
          <p className="text-xl text-text-gray max-w-3xl mx-auto">
            Discover our diverse range of investment opportunities designed to build wealth 
            while contributing to Oman's economic growth and sustainable development.
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="bg-white border-2 border-border-gray rounded-2xl p-8 h-full transition-all duration-300 hover:border-thara-green hover:shadow-xl group-hover:shadow-2xl">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-thara-green bg-opacity-10 rounded-xl flex items-center justify-center group-hover:bg-thara-green group-hover:bg-opacity-100 transition-all duration-300">
                      <solution.icon className="w-8 h-8 text-thara-green group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-full border-2 border-border-gray group-hover:border-thara-green flex items-center justify-center transition-all duration-300">
                    <ArrowRight className="w-4 h-4 text-text-gray group-hover:text-thara-green transition-colors duration-300" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-thara-navy mb-4 group-hover:text-thara-green transition-colors duration-300">
                  {solution.title}
                </h3>
                
                <p className="text-text-gray mb-6 leading-relaxed">
                  {solution.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {solution.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 bg-soft-gray text-text-gray text-sm rounded-full group-hover:bg-thara-green group-hover:bg-opacity-10 group-hover:text-thara-green transition-all duration-300"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  href={solution.link}
                  className="inline-flex items-center text-thara-green font-semibold hover:text-light-green transition-colors duration-200"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-thara-green to-thara-gold opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <Link
            href="/investments"
            className="inline-flex items-center bg-thara-navy text-white px-8 py-4 rounded-lg font-semibold hover:bg-dark-navy transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            View All Investment Solutions
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default InvestmentSolutions
