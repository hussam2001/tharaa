'use client'

import { motion } from 'framer-motion'
import { Building2, TrendingUp, MapPin, DollarSign, Calendar, PieChart, Shield, Users } from 'lucide-react'

const REITsSection = () => {
  const properties = [
    {
      name: 'Muscat Gateway Commercial Complex',
      type: 'Commercial Office',
      location: 'Muscat Central Business District',
      value: 'OMR 45M',
      occupancy: '94%',
      yield: '8.5%'
    },
    {
      name: 'Al Khuwair Residential Tower',
      type: 'Residential',
      location: 'Al Khuwair, Muscat',
      value: 'OMR 32M',
      occupancy: '88%',
      yield: '7.2%'
    },
    {
      name: 'Sohar Industrial Park',
      type: 'Industrial/Logistics',
      location: 'Sohar Free Zone',
      value: 'OMR 28M',
      occupancy: '96%',
      yield: '9.1%'
    },
    {
      name: 'Salalah Tourism Resort',
      type: 'Hospitality',
      location: 'Salalah Coastal Area',
      value: 'OMR 38M',
      occupancy: '72%',
      yield: '6.8%'
    }
  ]

  const performance = [
    { year: '2019', value: 105, dividend: 5.2 },
    { year: '2020', value: 98, dividend: 4.8 },
    { year: '2021', value: 112, dividend: 6.1 },
    { year: '2022', value: 118, dividend: 6.8 },
    { year: '2023', value: 125, dividend: 7.5 }
  ]

  return (
    <section className="py-20 bg-soft-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-thara-green rounded-xl flex items-center justify-center">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-thara-navy">Real Estate Investment Trusts</h2>
          </div>
          <p className="text-xl text-text-gray max-w-4xl mx-auto leading-relaxed">
            Access Oman's premier real estate market through our professionally managed REITs, 
            offering diversified exposure to commercial, residential, and industrial properties.
          </p>
        </motion.div>

        {/* REIT Performance Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-2xl p-8 shadow-lg mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-thara-navy mb-6">REIT Performance Highlights</h3>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-4 bg-soft-gray rounded-xl">
                  <TrendingUp className="w-8 h-8 text-thara-green mx-auto mb-2" />
                  <div className="text-2xl font-bold text-thara-green">12.5%</div>
                  <div className="text-sm text-gray-600">Annual Return (2023)</div>
                </div>
                <div className="text-center p-4 bg-soft-gray rounded-xl">
                  <DollarSign className="w-8 h-8 text-thara-gold mx-auto mb-2" />
                  <div className="text-2xl font-bold text-thara-gold">7.5%</div>
                  <div className="text-sm text-gray-600">Dividend Yield</div>
                </div>
                <div className="text-center p-4 bg-soft-gray rounded-xl">
                  <Building2 className="w-8 h-8 text-thara-navy mx-auto mb-2" />
                  <div className="text-2xl font-bold text-thara-navy">OMR 143M</div>
                  <div className="text-sm text-gray-600">Total Asset Value</div>
                </div>
                <div className="text-center p-4 bg-soft-gray rounded-xl">
                  <PieChart className="w-8 h-8 text-light-green mx-auto mb-2" />
                  <div className="text-2xl font-bold text-light-green">89%</div>
                  <div className="text-sm text-gray-600">Average Occupancy</div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-thara-green" />
                  <span className="text-text-gray">Professional property management</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-thara-gold" />
                  <span className="text-text-gray">Quarterly dividend distributions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-thara-navy" />
                  <span className="text-text-gray">Liquid, tradeable REIT units</span>
                </div>
              </div>
            </div>

            {/* Performance Chart */}
            <div>
              <h4 className="text-xl font-bold text-thara-navy mb-6">5-Year Performance Track Record</h4>
              <div className="space-y-4">
                {performance.map((year, index) => (
                  <motion.div
                    key={year.year}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center justify-between p-3 bg-soft-gray rounded-lg"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-thara-green bg-opacity-10 rounded-lg flex items-center justify-center">
                        <span className="font-bold text-thara-green">{year.year}</span>
                      </div>
                      <div>
                        <div className="font-semibold text-thara-navy">Unit Value: OMR {year.value}</div>
                        <div className="text-sm text-gray-600">Dividend: {year.dividend}%</div>
                      </div>
                    </div>
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-thara-green h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${(year.value / 130) * 100}%` }}
                      ></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Property Portfolio */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-thara-navy text-center mb-12">Featured Properties in Our REIT Portfolio</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {properties.map((property, index) => (
              <motion.div
                key={property.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                {/* Property Image Placeholder */}
                <div className="h-48 bg-gradient-to-r from-thara-navy to-dark-navy relative">
                  <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-thara-green text-white px-3 py-1 rounded-full text-sm font-medium">
                      {property.type}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-white bg-opacity-90 rounded-lg p-2">
                      <div className="text-lg font-bold text-thara-navy">{property.yield}</div>
                      <div className="text-xs text-gray-600">Annual Yield</div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h4 className="text-xl font-bold text-thara-navy mb-2">{property.name}</h4>
                  
                  <div className="flex items-center space-x-2 mb-4">
                    <MapPin className="w-4 h-4 text-thara-green" />
                    <span className="text-gray-600 text-sm">{property.location}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Property Value</div>
                      <div className="font-bold text-thara-gold">{property.value}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Occupancy Rate</div>
                      <div className="font-bold text-thara-green">{property.occupancy}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Investment Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-r from-thara-green to-light-green rounded-2xl p-8 lg:p-12 text-white"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Start Investing in Oman REITs Today</h3>
              <p className="text-xl text-green-100 leading-relaxed mb-6">
                Join hundreds of investors who trust Thara Global's REIT management expertise 
                to generate consistent income and long-term capital appreciation.
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold">✓</span>
                  </div>
                  <span>Minimum investment: OMR 1,000</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold">✓</span>
                  </div>
                  <span>Quarterly dividend distributions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold">✓</span>
                  </div>
                  <span>Professional property management included</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/contact?product=reits"
                  className="bg-white text-thara-green px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 text-center"
                >
                  Invest in REITs
                </a>
                <a
                  href="/resources/reit-prospectus.pdf"
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-thara-green transition-all duration-200 text-center"
                >
                  Download Prospectus
                </a>
              </div>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
              <h4 className="text-xl font-bold mb-4">REIT Investment Summary</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-green-100">Target Annual Return</span>
                  <span className="font-bold">10-15%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-green-100">Risk Level</span>
                  <span className="font-bold">Moderate</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-green-100">Investment Horizon</span>
                  <span className="font-bold">3-5 Years</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-green-100">Liquidity</span>
                  <span className="font-bold">High (Tradeable)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-green-100">Management Fee</span>
                  <span className="font-bold">1.5% p.a.</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default REITsSection


