'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Calendar, ArrowRight, TrendingUp, FileText, User } from 'lucide-react'

const MarketInsights = () => {
  const featuredInsight = {
    title: 'Oman Vision 2040: Investment Opportunities in Economic Diversification',
    excerpt: 'Exploring the strategic investment opportunities emerging from Oman\'s comprehensive economic transformation plan and its implications for investors.',
    image: '/api/placeholder/600/400',
    date: '2024-01-15',
    author: 'Investment Research Team',
    category: 'Market Analysis',
    readTime: '8 min read',
    link: '/insights/oman-vision-2040-opportunities'
  }

  const recentInsights = [
    {
      title: 'REIT Market Performance Review Q4 2023',
      excerpt: 'Comprehensive analysis of Oman\'s REIT market performance and outlook for 2024.',
      date: '2024-01-10',
      category: 'REIT Analysis',
      readTime: '5 min read',
      link: '/insights/reit-performance-q4-2023'
    },
    {
      title: 'Sustainable Investment Trends in the GCC',
      excerpt: 'How ESG investing is reshaping the investment landscape across Gulf countries.',
      date: '2024-01-08',
      category: 'ESG Investing',
      readTime: '6 min read',
      link: '/insights/sustainable-investment-trends-gcc'
    },
    {
      title: 'Infrastructure PPP Opportunities in Oman',
      excerpt: 'Analysis of upcoming public-private partnership projects and investment potential.',
      date: '2024-01-05',
      category: 'PPP Analysis',
      readTime: '7 min read',
      link: '/insights/infrastructure-ppp-opportunities'
    }
  ]

  const categories = [
    { name: 'Market Analysis', count: 12 },
    { name: 'Investment Guide', count: 8 },
    { name: 'Economic Updates', count: 15 },
    { name: 'REIT Insights', count: 6 },
    { name: 'ESG Investing', count: 4 }
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
            Market Insights & Research
          </h2>
          <p className="text-xl text-text-gray max-w-3xl mx-auto">
            Stay informed with our latest market analysis, investment guidance, 
            and economic insights from our expert research team.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Featured Article */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {/* Featured Image */}
              <div className="relative h-64 bg-gradient-to-r from-thara-navy to-thara-green">
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <div className="absolute bottom-4 left-6">
                  <span className="bg-thara-gold text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                </div>
              </div>

              <div className="p-8">
                {/* Meta Information */}
                <div className="flex items-center text-sm text-text-gray mb-4 space-x-4">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>January 15, 2024</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span>{featuredInsight.author}</span>
                  </div>
                  <span className="bg-thara-green bg-opacity-10 text-thara-green px-2 py-1 rounded text-xs">
                    {featuredInsight.category}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-thara-navy mb-4 leading-tight">
                  {featuredInsight.title}
                </h3>
                
                <p className="text-text-gray mb-6 leading-relaxed">
                  {featuredInsight.excerpt}
                </p>

                {/* Read More */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-text-gray">{featuredInsight.readTime}</span>
                  <Link
                    href={featuredInsight.link}
                    className="inline-flex items-center text-thara-green font-semibold hover:text-light-green transition-colors duration-200"
                  >
                    Read Full Article
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Recent Articles */}
            <div className="bg-soft-gray rounded-2xl p-6">
              <h3 className="text-xl font-bold text-thara-navy mb-6">Recent Insights</h3>
              
              <div className="space-y-6">
                {recentInsights.map((insight, index) => (
                  <div key={insight.title} className="border-b border-border-gray last:border-b-0 pb-4 last:pb-0">
                    <span className="bg-thara-navy bg-opacity-10 text-thara-navy px-2 py-1 rounded text-xs mb-2 inline-block">
                      {insight.category}
                    </span>
                    <h4 className="font-semibold text-thara-navy mb-2 leading-tight">
                      <Link href={insight.link} className="hover:text-thara-green transition-colors duration-200">
                        {insight.title}
                      </Link>
                    </h4>
                    <p className="text-sm text-text-gray mb-3">
                      {insight.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-text-gray">
                      <span>{insight.date}</span>
                      <span>{insight.readTime}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-thara-navy mb-6">Browse by Category</h3>
              
              <div className="space-y-3">
                {categories.map((category) => (
                  <Link
                    key={category.name}
                    href={`/insights/category/${category.name.toLowerCase().replace(' ', '-')}`}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-soft-gray transition-colors duration-200 group"
                  >
                    <span className="text-text-gray group-hover:text-thara-green transition-colors duration-200">
                      {category.name}
                    </span>
                    <span className="bg-thara-green bg-opacity-10 text-thara-green px-2 py-1 rounded-full text-xs">
                      {category.count}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-thara-navy rounded-2xl p-6 text-white">
              <div className="text-center mb-4">
                <TrendingUp className="w-12 h-12 text-thara-gold mx-auto mb-3" />
                <h3 className="text-xl font-bold mb-2">Stay Informed</h3>
                <p className="text-gray-300 text-sm">
                  Get weekly market insights and investment updates delivered to your inbox.
                </p>
              </div>
              
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg text-thara-navy focus:outline-none focus:ring-2 focus:ring-thara-gold"
                />
                <button className="w-full bg-thara-gold text-white py-3 rounded-lg font-semibold hover:bg-light-gold transition-colors duration-200">
                  Subscribe Now
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <Link
            href="/insights"
            className="inline-flex items-center bg-thara-green text-white px-8 py-4 rounded-lg font-semibold hover:bg-light-green transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <FileText className="mr-2 w-5 h-5" />
            View All Market Insights
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default MarketInsights

