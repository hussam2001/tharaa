'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Building2, TrendingUp, Shield, DollarSign, MapPin, Calculator, Users, Award, ChevronDown, ChevronUp } from 'lucide-react'

export default function REITsPage() {
  const [activeTab, setActiveTab] = useState('why-invest')
  const [investment, setInvestment] = useState(10000)
  const [years, setYears] = useState(5)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  // Investment Calculator Logic
  const annualYield = 0.0725 // 7.25%
  const totalReturn = investment * Math.pow(1 + annualYield, years)
  const totalEarnings = totalReturn - investment
  const annualDividend = investment * annualYield

  const whyInvestReasons = [
    {
      icon: DollarSign,
      title: 'Affordability',
      description: 'REITs investments cost less than traditional real estate investments, making premium properties accessible to all investors.',
      color: 'text-thara-gold'
    },
    {
      icon: TrendingUp,
      title: 'Liquidity',
      description: 'Easily exchange REITs on the stock exchange for immediate liquidity - unlike traditional real estate properties.',
      color: 'text-thara-green'
    },
    {
      icon: Award,
      title: 'Great Dividend Yield',
      description: 'Excellent dividends similar to rental income from property ownership, with favorable regulatory benefits.',
      color: 'text-blue-600'
    },
    {
      icon: Shield,
      title: 'Diversification',
      description: 'Invest across different property types and sectors with lower risk than putting all money in one property.',
      color: 'text-purple-600'
    },
    {
      icon: Users,
      title: 'Professional Management',
      description: 'Skip the hassle of property management - experienced professionals handle everything for you.',
      color: 'text-orange-600'
    },
    {
      icon: Building2,
      title: 'Regulatory Protection',
      description: 'Governed by strict regulations ensuring transparency, accountability, and investor protection.',
      color: 'text-red-600'
    }
  ]

  const portfolioProperties = [
    { name: 'Madinat Sandan Complex', location: 'Muscat', value: '52M OMR', yield: '8.2%', type: 'Mixed-Use' },
    { name: 'Al Khuwair Tower', location: 'Muscat', value: '32M OMR', yield: '7.8%', type: 'Residential' },
    { name: 'Sohar Industrial Park', location: 'Sohar', value: '28M OMR', yield: '9.1%', type: 'Industrial' },
    { name: 'Salalah Resort', location: 'Salalah', value: '25M OMR', yield: '6.8%', type: 'Hospitality' },
    { name: 'Nizwa Heritage District', location: 'Nizwa', value: '19M OMR', yield: '7.5%', type: 'Commercial' }
  ]

  const performanceMetrics = [
    { year: '2019', value: 100, dividend: 5.2 },
    { year: '2020', value: 98, dividend: 4.8 },
    { year: '2021', value: 112, dividend: 6.1 },
    { year: '2022', value: 118, dividend: 6.8 },
    { year: '2023', value: 125, dividend: 7.25 }
  ]

  const faqs = [
    {
      question: 'What is the minimum investment amount for REITs?',
      answer: 'The minimum investment in Aman REIT is OMR 1,000, making it accessible to a wide range of investors.'
    },
    {
      question: 'How often are dividends paid?',
      answer: 'Dividends are distributed quarterly, with our current annual yield of 7.25% paid out in regular installments.'
    },
    {
      question: 'Are REITs Shariah compliant?',
      answer: 'Yes, Aman REIT is 100% Shariah compliant, certified by our dedicated Shariah board of internationally recognized scholars.'
    },
    {
      question: 'Can I sell my REIT units anytime?',
      answer: 'Yes, REIT units can be traded on the Muscat Securities Market, providing liquidity unlike direct real estate investments.'
    },
    {
      question: 'What are the tax benefits?',
      answer: 'REITs are exempted from income tax when they distribute 90% or more of taxable income to unit-holders, resulting in higher dividends.'
    },
    {
      question: 'How are properties managed?',
      answer: 'All properties are professionally managed by our experienced team, handling maintenance, leasing, and optimization for maximum returns.'
    }
  ]

  const investmentSteps = [
    { step: '1', title: 'Open Trading Account', description: 'Open account with licensed broker or through our platform' },
    { step: '2', title: 'Complete KYC', description: 'Identity verification and risk assessment' },
    { step: '3', title: 'Fund Account', description: 'Transfer minimum OMR 1,000 to your trading account' },
    { step: '4', title: 'Purchase Units', description: 'Buy REIT units through Muscat Securities Market' },
    { step: '5', title: 'Receive Dividends', description: 'Get quarterly dividend payments and performance reports' }
  ]

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-thara-navy via-thara-navy/95 to-thara-navy/90 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-thara-gold/20 text-thara-gold rounded-full px-4 py-2 text-sm font-semibold mb-6">
                <Award className="w-4 h-4" />
                Oman's First Shariah-Compliant REIT
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Real Estate
                <span className="block text-thara-gold">Investment Trusts</span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Invest in professionally managed, income-generating real estate with the liquidity 
                of stock market trading and stability of property ownership.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-thara-gold mb-2">7.25%</div>
                  <div className="text-sm text-gray-300">Annual Yield</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-thara-green mb-2">462</div>
                  <div className="text-sm text-gray-300">Properties</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">156M</div>
                  <div className="text-sm text-gray-300">OMR Portfolio</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">100%</div>
                  <div className="text-sm text-gray-300">Shariah Compliant</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setActiveTab('calculator')}
                  className="bg-thara-gold text-black px-8 py-4 rounded-lg font-semibold hover:bg-gold-400 transition-colors duration-300"
                >
                  Calculate Returns
                </button>
                <button 
                  onClick={() => setActiveTab('how-to-invest')}
                  className="bg-white/10 border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300"
                >
                  How to Invest
                </button>
              </div>
            </div>

            {/* Performance Chart */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">5-Year Performance</h3>
              <div className="space-y-4">
                {performanceMetrics.map((metric, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-gray-300">{metric.year}</span>
                    <div className="flex items-center gap-4 flex-1 mx-4">
                      <div className="flex-1 bg-white/10 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-thara-gold to-thara-green h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${metric.value}%` }}
                        ></div>
                      </div>
                      <span className="text-white font-medium">{metric.dividend}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

                {/* Navigation Tabs */}
      <section className="py-8 bg-soft-gray">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {[
              { key: 'why-invest', label: 'Why Invest' },
              { key: 'examples', label: 'Success Examples' },
              { key: 'calculator', label: 'Investment Calculator' },
              { key: 'portfolio', label: 'Property Portfolio' },
              { key: 'performance', label: 'Performance' },
              { key: 'how-to-invest', label: 'How to Invest' },
              { key: 'faq', label: 'FAQ' }
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === tab.key
                    ? 'bg-thara-navy text-white'
                    : 'bg-white text-thara-navy hover:bg-thara-navy/10'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Dynamic Content Based on Active Tab */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          {/* Why Invest Tab */}
          {activeTab === 'why-invest' && (
            <div>
              <h2 className="text-4xl font-bold text-thara-navy mb-12 text-center">Why Invest In REITs?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {whyInvestReasons.map((reason, index) => (
                  <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className={`w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6`}>
                      <reason.icon className={`w-8 h-8 ${reason.color}`} />
                    </div>
                    <h3 className="text-xl font-bold text-thara-navy mb-4">{reason.title}</h3>
                    <p className="text-text-gray leading-relaxed">{reason.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Success Examples Tab */}
          {activeTab === 'examples' && (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-thara-navy mb-6">Examples of Successful REITs</h2>
                <p className="text-xl text-text-gray max-w-4xl mx-auto leading-relaxed">
                  Learn from notable global REITs that illustrate the diversity and potential of REIT investments across different sectors and markets.
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                {/* Global Success Examples */}
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-thara-navy mb-6">Global REIT Leaders</h3>
                  <div className="space-y-6">
                    <div className="border-l-4 border-thara-gold pl-6">
                      <h4 className="text-lg font-bold text-thara-navy mb-2">Prologis, Inc. (PLD)</h4>
                      <p className="text-text-gray mb-3">A leading industrial REIT focusing on logistics facilities and distribution centers, benefiting from the rise of e-commerce.</p>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="font-semibold">Sector:</span> Industrial/Logistics
                        </div>
                        <div>
                          <span className="font-semibold">Market:</span> Global
                        </div>
                      </div>
                    </div>
                    
                    <div className="border-l-4 border-thara-green pl-6">
                      <h4 className="text-lg font-bold text-thara-navy mb-2">American Tower Corporation (AMT)</h4>
                      <p className="text-text-gray mb-3">Specializes in communication infrastructure, including cell towers, capitalizing on the growing demand for mobile data.</p>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="font-semibold">Sector:</span> Infrastructure
                        </div>
                        <div>
                          <span className="font-semibold">Market:</span> Global Communications
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Oman's Success Story */}
                <div className="bg-gradient-to-br from-thara-navy to-blue-600 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-6">Oman's REIT Pioneer</h3>
                  <div className="border-l-4 border-thara-gold pl-6">
                    <h4 className="text-lg font-bold mb-2">Aman REIT - First in Oman</h4>
                    <p className="text-gray-200 mb-4">
                      Successfully launched and managed as Oman's first Shariah-compliant real estate investment trust, 
                      setting the standard for the industry.
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                      <div>
                        <div className="text-thara-gold font-semibold">Portfolio Value</div>
                        <div className="text-gray-300">156M OMR</div>
                      </div>
                      <div>
                        <div className="text-thara-gold font-semibold">Annual Yield</div>
                        <div className="text-gray-300">7.25%</div>
                      </div>
                      <div>
                        <div className="text-thara-gold font-semibold">Properties</div>
                        <div className="text-gray-300">462 Assets</div>
                      </div>
                      <div>
                        <div className="text-thara-gold font-semibold">Compliance</div>
                        <div className="text-gray-300">100% Shariah</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* REIT Types Explanation */}
              <div className="bg-soft-gray rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-thara-navy mb-6 text-center">Types of REITs</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-thara-gold/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Building2 className="w-8 h-8 text-thara-gold" />
                    </div>
                    <h4 className="text-lg font-bold text-thara-navy mb-3">Equity REITs</h4>
                    <p className="text-text-gray text-sm">Own and operate income-generating real estate properties. Most common type, including our Aman REIT.</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-thara-green/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <DollarSign className="w-8 h-8 text-thara-green" />
                    </div>
                    <h4 className="text-lg font-bold text-thara-navy mb-3">Mortgage REITs</h4>
                    <p className="text-text-gray text-sm">Provide financing for income-producing real estate by purchasing or originating mortgages and mortgage-backed securities.</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="w-8 h-8 text-blue-600" />
                    </div>
                    <h4 className="text-lg font-bold text-thara-navy mb-3">Hybrid REITs</h4>
                    <p className="text-text-gray text-sm">Combine strategies of both equity and mortgage REITs, owning properties and providing financing.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Investment Calculator Tab */}
          {activeTab === 'calculator' && (
            <div>
              <h2 className="text-4xl font-bold text-thara-navy mb-12 text-center">Investment Calculator</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="bg-soft-gray rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-thara-navy mb-6">Calculate Your Returns</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-thara-navy font-semibold mb-2">Investment Amount (OMR)</label>
                      <input
                        type="number"
                        value={investment}
                        onChange={(e) => setInvestment(Number(e.target.value))}
                        className="w-full px-4 py-3 border border-border-gray rounded-lg focus:outline-none focus:border-thara-navy"
                        min="1000"
                        step="1000"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-thara-navy font-semibold mb-2">Investment Period (Years)</label>
                      <input
                        type="range"
                        min="1"
                        max="20"
                        value={years}
                        onChange={(e) => setYears(Number(e.target.value))}
                        className="w-full"
                      />
                      <div className="text-center text-thara-navy font-medium">{years} years</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-thara-navy mb-6">Projected Returns</h3>
                  
                  <div className="space-y-6">
                    <div className="flex justify-between items-center p-4 bg-soft-gray rounded-lg">
                      <span className="text-text-gray">Initial Investment</span>
                      <span className="text-2xl font-bold text-thara-navy">OMR {investment.toLocaleString()}</span>
                    </div>
                    
                    <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                      <span className="text-text-gray">Annual Dividend</span>
                      <span className="text-2xl font-bold text-thara-green">OMR {annualDividend.toLocaleString()}</span>
                    </div>
                    
                    <div className="flex justify-between items-center p-4 bg-gold-50 rounded-lg">
                      <span className="text-text-gray">Total Value After {years} Years</span>
                      <span className="text-2xl font-bold text-thara-gold">OMR {totalReturn.toLocaleString()}</span>
                    </div>
                    
                    <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                      <span className="text-text-gray">Total Earnings</span>
                      <span className="text-2xl font-bold text-blue-600">OMR {totalEarnings.toLocaleString()}</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-thara-navy rounded-lg text-white text-center">
                    <div className="text-sm">Effective Annual Return</div>
                    <div className="text-3xl font-bold">7.25%</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Property Portfolio Tab */}
          {activeTab === 'portfolio' && (
            <div>
              <h2 className="text-4xl font-bold text-thara-navy mb-12 text-center">Property Portfolio Map</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {portfolioProperties.map((property, index) => (
                  <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="h-48 bg-gradient-to-br from-thara-navy to-blue-600 relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <MapPin className="w-16 h-16 text-white/50" />
                      </div>
                      <div className="absolute top-4 right-4 bg-thara-gold text-black px-3 py-1 rounded-full font-bold text-sm">
                        {property.yield}
                      </div>
                      <div className="absolute top-4 left-4 bg-white/20 text-white px-3 py-1 rounded-full text-sm">
                        {property.type}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-thara-navy mb-2">{property.name}</h3>
                      <p className="text-text-gray mb-4">{property.location}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-2xl font-bold text-thara-gold">{property.value}</span>
                        <span className="text-thara-green font-semibold">{property.yield} yield</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Performance Tab */}
          {activeTab === 'performance' && (
            <div>
              <h2 className="text-4xl font-bold text-thara-navy mb-12 text-center">Performance Metrics</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-thara-navy mb-6">5-Year Track Record</h3>
                  <div className="space-y-4">
                    {performanceMetrics.map((metric, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-soft-gray rounded-lg">
                        <span className="font-semibold text-thara-navy">{metric.year}</span>
                        <div className="flex items-center gap-4">
                          <div className="text-thara-green font-bold">{metric.dividend}% Dividend</div>
                          <div className="text-blue-600 font-bold">{metric.value} Index</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-thara-navy to-blue-600 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-6">Key Achievements</h3>
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-thara-gold mb-2">25%</div>
                      <div className="text-gray-300">5-Year Total Return</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-thara-green mb-2">94%</div>
                      <div className="text-gray-300">Average Occupancy</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-yellow-400 mb-2">100%</div>
                      <div className="text-gray-300">Shariah Compliance</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* How to Invest Tab */}
          {activeTab === 'how-to-invest' && (
            <div>
              <h2 className="text-4xl font-bold text-thara-navy mb-12 text-center">How to Invest in REITs</h2>
              
              {/* Enhanced Investment Process */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-16">
                {[
                  { 
                    step: '1', 
                    title: 'Research & Evaluate', 
                    description: 'Understand different types of REITs (equity, mortgage, hybrid) and their respective sectors',
                    details: ['Study REIT fundamentals', 'Analyze market sectors', 'Review historical performance']
                  },
                  { 
                    step: '2', 
                    title: 'Assess Performance', 
                    description: 'Review historical performance, dividend yields, and management quality',
                    details: ['Check dividend history', 'Evaluate management team', 'Analyze financial metrics']
                  },
                  { 
                    step: '3', 
                    title: 'Risk Assessment', 
                    description: 'Determine how REITs fit into your overall investment strategy and risk profile',
                    details: ['Define risk tolerance', 'Set investment objectives', 'Consider time horizon']
                  },
                  { 
                    step: '4', 
                    title: 'Choose Platform', 
                    description: 'Invest through brokerage accounts, mutual funds, or ETFs that focus on REITs',
                    details: ['Open brokerage account', 'Compare investment options', 'Review fees and costs']
                  },
                  { 
                    step: '5', 
                    title: 'Monitor & Manage', 
                    description: 'Track performance and receive regular dividends while adjusting strategy as needed',
                    details: ['Monitor performance', 'Receive dividends', 'Rebalance portfolio']
                  }
                ].map((step, index) => (
                  <div key={index} className="relative">
                    <div className="bg-white rounded-2xl p-6 shadow-lg text-center h-full">
                      <div className="w-12 h-12 bg-thara-navy text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                        {step.step}
                      </div>
                      <h3 className="text-lg font-bold text-thara-navy mb-3">{step.title}</h3>
                      <p className="text-text-gray text-sm mb-4">{step.description}</p>
                      <ul className="text-xs text-text-gray space-y-1">
                        {step.details.map((detail, idx) => (
                          <li key={idx} className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-thara-gold rounded-full"></div>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {index < 4 && (
                      <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                        <div className="w-6 h-0.5 bg-thara-gold"></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Investment Platforms */}
              <div className="bg-soft-gray rounded-2xl p-8 mb-12">
                <h3 className="text-2xl font-bold text-thara-navy mb-6 text-center">Investment Platform Options</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-xl p-6 text-center">
                    <div className="w-16 h-16 bg-thara-navy/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Building2 className="w-8 h-8 text-thara-navy" />
                    </div>
                    <h4 className="text-lg font-bold text-thara-navy mb-3">Direct Investment</h4>
                    <p className="text-text-gray text-sm">Purchase individual REIT shares through brokerage accounts for direct ownership and control.</p>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 text-center">
                    <div className="w-16 h-16 bg-thara-green/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-thara-green" />
                    </div>
                    <h4 className="text-lg font-bold text-thara-navy mb-3">REIT Mutual Funds</h4>
                    <p className="text-text-gray text-sm">Invest in diversified portfolios of REITs managed by professional fund managers.</p>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 text-center">
                    <div className="w-16 h-16 bg-thara-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="w-8 h-8 text-thara-gold" />
                    </div>
                    <h4 className="text-lg font-bold text-thara-navy mb-3">REIT ETFs</h4>
                    <p className="text-text-gray text-sm">Exchange-traded funds offering low-cost, diversified exposure to REIT markets.</p>
                  </div>
                </div>
              </div>

              {/* Risk Considerations */}
              <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
                <h3 className="text-2xl font-bold text-thara-navy mb-6">Investment Considerations & Risk Assessment</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-thara-navy mb-4">Key Benefits</h4>
                    <ul className="space-y-3">
                      {[
                        'High dividend yields (typically 3-6%)',
                        'Professional property management',
                        'Diversification across property types',
                        'Liquidity through stock exchange trading',
                        'Lower entry costs than direct real estate'
                      ].map((benefit, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-thara-green rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-text-gray">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-thara-navy mb-4">Risk Factors</h4>
                    <ul className="space-y-3">
                      {[
                        'Interest rate sensitivity affecting valuations',
                        'Real estate market cyclical fluctuations',
                        'Property-specific risks and vacancies',
                        'Management quality impact on performance',
                        'Tax implications and regulatory changes'
                      ].map((risk, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-text-gray">{risk}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-thara-navy rounded-2xl p-8 text-white max-w-4xl mx-auto">
                  <h3 className="text-2xl font-bold mb-4">Ready to Start Your REIT Investment Journey?</h3>
                  <p className="text-gray-300 mb-6">
                    Minimum investment: OMR 1,000 | Expected annual yield: 7.25% | Quarterly dividends | 100% Shariah Compliant
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-thara-gold text-black px-8 py-3 rounded-lg font-semibold hover:bg-gold-400 transition-colors duration-300">
                      Schedule Investment Consultation
                    </button>
                    <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-300">
                      Download Investment Guide
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* FAQ Tab */}
          {activeTab === 'faq' && (
            <div>
              <h2 className="text-4xl font-bold text-thara-navy mb-12 text-center">Frequently Asked Questions</h2>
              <div className="max-w-4xl mx-auto">
                {faqs.map((faq, index) => (
                  <div key={index} className="mb-4">
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full bg-white rounded-lg p-6 shadow-lg text-left hover:shadow-xl transition-all duration-300 flex justify-between items-center"
                    >
                      <span className="text-lg font-semibold text-thara-navy">{faq.question}</span>
                      {openFaq === index ? (
                        <ChevronUp className="w-5 h-5 text-thara-navy" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-thara-navy" />
                      )}
                    </button>
                    {openFaq === index && (
                      <div className="bg-soft-gray rounded-b-lg p-6 -mt-2">
                        <p className="text-text-gray leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}