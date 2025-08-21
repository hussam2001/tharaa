'use client'

import { motion } from 'framer-motion'
import { Shield, MapPin, Award, Users, TrendingUp, CheckCircle } from 'lucide-react'

const WhyChooseSection = () => {
  const features = [
    {
      icon: MapPin,
      title: 'Local Expertise',
      description: 'Deep understanding of Oman\'s market dynamics, regulatory environment, and cultural business practices.',
      stats: '50+ Years',
      statsLabel: 'Combined Experience',
      highlights: [
        'Local market knowledge',
        'Cultural understanding',
        'Government relationships',
        'Regional network'
      ]
    },
    {
      icon: Shield,
      title: 'Regulatory Compliance',
      description: 'Fully licensed by CMA with strict adherence to all regulatory requirements and international standards.',
      stats: '100%',
      statsLabel: 'Compliance Record',
      highlights: [
        'CMA Licensed',
        'Regulatory oversight',
        'Transparent reporting',
        'Risk management'
      ]
    },
    {
      icon: Award,
      title: 'Proven Track Record',
      description: 'Consistent performance across market cycles with a focus on capital preservation and steady growth.',
      stats: '2018',
      statsLabel: 'Established',
      highlights: [
        'Stable returns',
        'Risk mitigation',
        'Portfolio diversity',
        'Client satisfaction'
      ]
    }
  ]

  const achievements = [
    { number: '500+', label: 'Investors Served', icon: Users },
    { number: '12.5%', label: 'Average Annual Return', icon: TrendingUp },
    { number: '100%', label: 'Regulatory Compliance', icon: Shield },
    { number: '5+', label: 'Investment Sectors', icon: Award }
  ]

  return (
    <section className="py-20 bg-soft-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-thara-navy mb-4">
            Why Choose Thara Global?
          </h2>
          <p className="text-xl text-text-gray max-w-3xl mx-auto">
            With decades of expertise and unwavering commitment to excellence, 
            we deliver investment solutions that build lasting wealth for our clients.
          </p>
        </motion.div>

        {/* Main Features */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Icon and Stats */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-16 h-16 bg-thara-green bg-opacity-10 rounded-xl flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-thara-green" />
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-thara-gold">{feature.stats}</div>
                  <div className="text-sm text-text-gray">{feature.statsLabel}</div>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-thara-navy mb-4">
                {feature.title}
              </h3>
              
              <p className="text-text-gray mb-6 leading-relaxed">
                {feature.description}
              </p>

              {/* Highlights */}
              <div className="space-y-2">
                {feature.highlights.map((highlight) => (
                  <div key={highlight} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-thara-green flex-shrink-0" />
                    <span className="text-sm text-text-gray">{highlight}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-thara-navy rounded-2xl p-8 lg:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Our Achievements Speak for Themselves
            </h3>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Trusted by investors across Oman and the GCC region for consistent 
              performance and professional excellence.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-thara-green bg-opacity-20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="w-8 h-8 text-thara-green" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                  {achievement.number}
                </div>
                <div className="text-gray-300 text-sm lg:text-base">
                  {achievement.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-thara-navy mb-6">
              Regulatory Credentials & Certifications
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center justify-center space-x-3 p-4 bg-soft-gray rounded-lg">
                <Shield className="w-8 h-8 text-thara-green" />
                <div className="text-left">
                  <div className="font-semibold text-thara-navy">CMA Licensed</div>
                  <div className="text-sm text-text-gray">Capital Market Authority</div>
                </div>
              </div>
              
              <div className="flex items-center justify-center space-x-3 p-4 bg-soft-gray rounded-lg">
                <Award className="w-8 h-8 text-thara-gold" />
                <div className="text-left">
                  <div className="font-semibold text-thara-navy">Vision 2040</div>
                  <div className="text-sm text-text-gray">Aligned Strategy</div>
                </div>
              </div>
              
              <div className="flex items-center justify-center space-x-3 p-4 bg-soft-gray rounded-lg">
                <TrendingUp className="w-8 h-8 text-thara-green" />
                <div className="text-left">
                  <div className="font-semibold text-thara-navy">ESG Compliant</div>
                  <div className="text-sm text-text-gray">Sustainable Investing</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChooseSection

