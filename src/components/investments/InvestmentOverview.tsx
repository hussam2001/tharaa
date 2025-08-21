'use client'

import { motion } from 'framer-motion'
import { Building2, Users, PieChart, Leaf, ArrowRight, DollarSign, Shield, TrendingUp } from 'lucide-react'

const InvestmentOverview = () => {
  const solutions = [
    {
      icon: Building2,
      title: 'Real Estate Investment Trusts (REITs)',
      subtitle: 'Diversified Real Estate Portfolio',
      description: 'Access Oman\'s premium real estate market through professionally managed REITs offering stable income and capital appreciation potential.',
      features: [
        'Prime commercial and residential properties',
        'Regular dividend distributions',
        'Professional property management',
        'Liquid tradeable units'
      ],
      performance: {
        returns: '12.5%',
        period: 'Annual Return',
        aum: '$120M+'
      },
      riskLevel: 'Moderate',
      minInvestment: 'OMR 1,000',
      link: '/investments/reits'
    },
    {
      icon: Users,
      title: 'Public-Private Partnerships',
      subtitle: 'Infrastructure Development Projects',
      description: 'Partner with government initiatives driving Oman\'s Vision 2040 through strategic infrastructure and development projects.',
      features: [
        'Government-backed projects',
        'Long-term stable returns',
        'Vision 2040 aligned opportunities',
        'Direct economic impact'
      ],
      performance: {
        returns: '8.3%',
        period: 'Annual Return',
        aum: '$85M+'
      },
      riskLevel: 'Conservative',
      minInvestment: 'OMR 5,000',
      link: '/investments/ppp'
    },
    {
      icon: PieChart,
      title: 'Structured Investment Products',
      subtitle: 'Tailored Financial Solutions',
      description: 'Customized investment products designed to meet specific risk-return objectives with capital protection features.',
      features: [
        'Capital protection options',
        'Customized risk profiles',
        'Enhanced return potential',
        'Flexible investment terms'
      ],
      performance: {
        returns: '9.8%',
        period: 'Target Return',
        aum: '$65M+'
      },
      riskLevel: 'Moderate-Low',
      minInvestment: 'OMR 2,500',
      link: '/investments/structured'
    },
    {
      icon: Leaf,
      title: 'Sustainable & ESG Investments',
      subtitle: 'Responsible Investment Solutions',
      description: 'Invest in Oman\'s sustainable future through ESG-compliant investments supporting environmental and social development.',
      features: [
        'ESG screening and integration',
        'Environmental impact focus',
        'Social responsibility alignment',
        'Sustainable development goals'
      ],
      performance: {
        returns: '10.1%',
        period: 'Annual Return',
        aum: '$45M+'
      },
      riskLevel: 'Moderate',
      minInvestment: 'OMR 1,500',
      link: '/investments/sustainable'
    }
  ]

  return (
    <section id="investment-solutions" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-thara-navy mb-6">Investment Solutions Overview</h2>
          <p className="text-xl text-text-gray max-w-4xl mx-auto leading-relaxed">
            Discover our comprehensive range of investment opportunities, each designed to meet 
            different risk-return profiles while contributing to Oman's economic development.
          </p>
        </motion.div>

        {/* Investment Solutions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2 h-full">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-thara-green to-light-green rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <solution.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-thara-navy group-hover:text-thara-green transition-colors duration-300">
                        {solution.title}
                      </h3>
                      <p className="text-thara-green font-medium text-sm">{solution.subtitle}</p>
                    </div>
                  </div>
                  <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-thara-green transition-colors duration-300" />
                </div>

                {/* Performance Metrics */}
                <div className="bg-soft-gray rounded-xl p-4 mb-6">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-thara-green">{solution.performance.returns}</div>
                      <div className="text-xs text-gray-500">{solution.performance.period}</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-thara-navy">{solution.performance.aum}</div>
                      <div className="text-xs text-gray-500">Assets Under Management</div>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-thara-gold">{solution.riskLevel}</div>
                      <div className="text-xs text-gray-500">Risk Level</div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-text-gray leading-relaxed mb-6">{solution.description}</p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {solution.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-thara-green rounded-full flex-shrink-0"></div>
                      <span className="text-sm text-text-gray">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Investment Details */}
                <div className="flex items-center justify-between p-4 bg-thara-navy bg-opacity-5 rounded-lg mb-6">
                  <div className="flex items-center space-x-2">
                    <DollarSign className="w-4 h-4 text-thara-gold" />
                    <span className="text-sm font-medium text-thara-navy">Minimum Investment</span>
                  </div>
                  <span className="text-lg font-bold text-thara-gold">{solution.minInvestment}</span>
                </div>

                {/* CTA */}
                <a
                  href={solution.link}
                  className="w-full bg-gradient-to-r from-thara-green to-light-green text-white py-3 rounded-lg font-semibold text-center block hover:from-light-green hover:to-thara-green transition-all duration-300 transform group-hover:scale-105"
                >
                  Learn More & Invest
                </a>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-thara-green to-thara-gold opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Investment Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-r from-thara-navy to-dark-navy rounded-2xl p-8 lg:p-12 text-white mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Our Investment Philosophy</h3>
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                At Thara Global, we believe in disciplined, research-driven investment approaches 
                that balance risk and return while creating long-term value for our investors and 
                the broader Omani economy.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-thara-green" />
                  <span className="text-gray-300">Risk-adjusted returns with capital preservation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <TrendingUp className="w-5 h-5 text-thara-gold" />
                  <span className="text-gray-300">Long-term sustainable growth strategies</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Leaf className="w-5 h-5 text-light-green" />
                  <span className="text-gray-300">ESG integration across all investments</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
              <h4 className="text-xl font-bold text-thara-gold mb-4">Investment Principles</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Diversification</span>
                  <div className="w-20 bg-gray-600 rounded-full h-2">
                    <div className="bg-thara-green h-2 rounded-full w-full"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Due Diligence</span>
                  <div className="w-20 bg-gray-600 rounded-full h-2">
                    <div className="bg-thara-gold h-2 rounded-full w-full"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Risk Management</span>
                  <div className="w-20 bg-gray-600 rounded-full h-2">
                    <div className="bg-white h-2 rounded-full w-5/6"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">ESG Integration</span>
                  <div className="w-20 bg-gray-600 rounded-full h-2">
                    <div className="bg-light-green h-2 rounded-full w-4/5"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-soft-gray rounded-2xl p-8 lg:p-12">
            <h3 className="text-3xl font-bold text-thara-navy mb-6">Ready to Start Investing?</h3>
            <p className="text-xl text-text-gray mb-8 max-w-3xl mx-auto">
              Our investment specialists are ready to help you choose the right investment 
              solution based on your financial goals and risk tolerance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-thara-green text-white px-8 py-4 rounded-lg font-semibold hover:bg-light-green transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Schedule Consultation
              </a>
              <a
                href="/resources/investment-guide"
                className="border-2 border-thara-navy text-thara-navy px-8 py-4 rounded-lg font-semibold hover:bg-thara-navy hover:text-white transition-all duration-300"
              >
                Download Investment Guide
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default InvestmentOverview
