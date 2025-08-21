'use client'

import { motion } from 'framer-motion'
import { Trophy, Target, Users, TrendingUp, Award, Star, Building2, Globe } from 'lucide-react'

const CompanyAchievements = () => {
  const achievements = [
    {
      icon: Trophy,
      title: 'CMA Excellence Award',
      year: '2023',
      description: 'Recognized for outstanding regulatory compliance and investor protection standards.',
      category: 'Regulatory Excellence'
    },
    {
      icon: Building2,
      title: 'First Sustainable REIT Launch',
      year: '2022',
      description: 'Pioneered Oman\'s first ESG-compliant REIT focused on sustainable real estate development.',
      category: 'Innovation'
    },
    {
      icon: Users,
      title: '500+ Satisfied Investors',
      year: '2023',
      description: 'Built a growing community of investors trusting Thara Global with their financial future.',
      category: 'Client Success'
    },
    {
      icon: Target,
      title: 'Vision 2040 Partnership',
      year: '2021',
      description: 'Selected as official investment partner for multiple Vision 2040 infrastructure projects.',
      category: 'Strategic Partnership'
    },
    {
      icon: TrendingUp,
      title: 'Consistent Performance',
      year: '2018-2023',
      description: 'Delivered above-market returns across all investment vehicles since inception.',
      category: 'Performance'
    },
    {
      icon: Globe,
      title: 'GCC Investment Recognition',
      year: '2023',
      description: 'Awarded "Best Emerging Investment Firm" by GCC Financial Markets Association.',
      category: 'Regional Recognition'
    }
  ]

  const stats = [
    {
      icon: Users,
      number: '500+',
      label: 'Active Investors',
      description: 'Growing community of satisfied clients'
    },
    {
      icon: TrendingUp,
      number: '12.5%',
      label: 'Average Annual Return',
      description: 'Consistent performance above market'
    },
    {
      icon: Building2,
      number: '$300M+',
      label: 'Assets Under Management',
      description: 'Diversified investment portfolio'
    },
    {
      icon: Award,
      number: '100%',
      label: 'Compliance Record',
      description: 'Perfect regulatory compliance since 2018'
    },
    {
      icon: Target,
      number: '15+',
      label: 'Investment Projects',
      description: 'Successful project completions'
    },
    {
      icon: Star,
      number: '6',
      label: 'Industry Awards',
      description: 'Recognition for excellence and innovation'
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
          <h2 className="text-4xl font-bold text-thara-navy mb-6">Our Achievements</h2>
          <p className="text-xl text-text-gray max-w-4xl mx-auto leading-relaxed">
            Since our establishment in 2018, Thara Global has consistently delivered exceptional 
            results, earning recognition from regulatory authorities, industry peers, and most 
            importantly, our valued investors.
          </p>
        </motion.div>

        {/* Key Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center bg-soft-gray rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-thara-green bg-opacity-10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <stat.icon className="w-6 h-6 text-thara-green" />
              </div>
              <div className="text-2xl font-bold text-thara-navy mb-1">{stat.number}</div>
              <div className="text-sm font-semibold text-thara-green mb-2">{stat.label}</div>
              <div className="text-xs text-text-gray leading-tight">{stat.description}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
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
                      <achievement.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-thara-gold">{achievement.year}</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide">{achievement.category}</div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-thara-navy mb-4 group-hover:text-thara-green transition-colors duration-300">
                  {achievement.title}
                </h3>
                
                <p className="text-text-gray leading-relaxed">{achievement.description}</p>

                {/* Decorative Element */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-thara-green to-thara-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Recognition Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-r from-thara-navy to-dark-navy rounded-2xl p-8 lg:p-12 text-white"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-6">Recognition & Milestones</h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our journey of excellence is marked by significant achievements that demonstrate 
              our commitment to innovation, compliance, and superior performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-thara-green bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-thara-green" />
              </div>
              <div className="text-2xl font-bold text-thara-green mb-2">2018</div>
              <div className="text-white font-semibold mb-2">Company Launch</div>
              <div className="text-gray-300 text-sm">CMA licensing obtained, operations commenced</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-thara-gold bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-thara-gold" />
              </div>
              <div className="text-2xl font-bold text-thara-gold mb-2">2022</div>
              <div className="text-white font-semibold mb-2">First REIT Launch</div>
              <div className="text-gray-300 text-sm">Pioneered sustainable real estate investing</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-white mb-2">2023</div>
              <div className="text-white font-semibold mb-2">Industry Recognition</div>
              <div className="text-gray-300 text-sm">Multiple awards for excellence and innovation</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-thara-green bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-thara-green" />
              </div>
              <div className="text-2xl font-bold text-thara-green mb-2">2024</div>
              <div className="text-white font-semibold mb-2">Future Growth</div>
              <div className="text-gray-300 text-sm">Expanding portfolio and market presence</div>
            </motion.div>
          </div>
        </motion.div>

        {/* Commitment to Excellence */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-soft-gray rounded-2xl p-8 lg:p-12">
            <h3 className="text-3xl font-bold text-thara-navy mb-6">Our Commitment to Excellence</h3>
            <p className="text-xl text-text-gray max-w-4xl mx-auto leading-relaxed">
              These achievements reflect our unwavering commitment to excellence, innovation, and 
              client success. As we continue to grow, we remain dedicated to setting new standards 
              in the investment industry while contributing to Oman's economic development and 
              Vision 2040 objectives.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CompanyAchievements


