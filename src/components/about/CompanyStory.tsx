'use client'

import { motion } from 'framer-motion'
import { Calendar, TrendingUp, Globe, Target } from 'lucide-react'

const CompanyStory = () => {
  const milestones = [
    {
      year: '2018',
      title: 'Company Foundation',
      description: 'Thara Global established with CMA licensing, bringing together 50+ years of combined investment expertise.',
      icon: Calendar
    },
    {
      year: '2019',
      title: 'Market Entry',
      description: 'Launched first investment products focusing on Oman\'s growing real estate and infrastructure sectors.',
      icon: TrendingUp
    },
    {
      year: '2020-2022',
      title: 'Strategic Growth',
      description: 'Expanded portfolio with public-private partnerships and sustainable investment initiatives.',
      icon: Globe
    },
    {
      year: '2023-Present',
      title: 'Vision 2040 Leadership',
      description: 'Leading investment opportunities aligned with Oman\'s economic diversification and sustainability goals.',
      icon: Target
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-thara-navy mb-6">Our Story</h2>
          <p className="text-xl text-text-gray max-w-4xl mx-auto leading-relaxed">
            From our foundation in 2018, Thara Global has been dedicated to transforming Oman's 
            investment landscape while contributing to the nation's economic diversification and 
            sustainable development goals.
          </p>
        </motion.div>

        {/* Company Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gradient-to-r from-thara-navy to-dark-navy rounded-2xl p-8 lg:p-12 mb-16 text-white"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Founded on Excellence</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Thara Global was established with a clear mission: to provide innovative, secure, 
                and profitable investment opportunities that contribute to Oman's economic development. 
                Our founding team brought together decades of experience in financial markets, 
                real estate, and strategic partnerships.
              </p>
              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-thara-gold">50+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-thara-green">CMA</div>
                  <div className="text-sm text-gray-400">Licensed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">2040</div>
                  <div className="text-sm text-gray-400">Vision Aligned</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
                <h4 className="text-xl font-bold mb-4 text-thara-gold">Our Mission</h4>
                <p className="text-gray-300 leading-relaxed">
                  To be the leading investment company in Oman, providing secure and stable 
                  investment vehicles while fostering economic growth and sustainable development 
                  in line with Vision 2040.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-thara-green opacity-20"></div>
          
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              {/* Timeline Node */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-thara-green rounded-full border-4 border-white shadow-lg z-10"></div>
              
              {/* Content Card */}
              <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-thara-green bg-opacity-10 rounded-lg flex items-center justify-center">
                      <milestone.icon className="w-6 h-6 text-thara-green" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-thara-navy">{milestone.year}</div>
                      <div className="text-lg font-semibold text-thara-green">{milestone.title}</div>
                    </div>
                  </div>
                  <p className="text-text-gray leading-relaxed">{milestone.description}</p>
                </div>
              </div>
              
              {/* Empty space for alternating layout */}
              <div className="w-5/12"></div>
            </motion.div>
          ))}
        </div>

        {/* Future Vision */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-soft-gray rounded-2xl p-8 lg:p-12">
            <h3 className="text-3xl font-bold text-thara-navy mb-6">Looking Forward</h3>
            <p className="text-xl text-text-gray max-w-4xl mx-auto leading-relaxed">
              As we continue to grow, Thara Global remains committed to our core values of 
              excellence, transparency, and sustainable development. We are actively positioning 
              ourselves to capitalize on emerging opportunities in Oman's diversifying economy, 
              while maintaining our focus on delivering consistent, reliable returns for our investors.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CompanyStory


