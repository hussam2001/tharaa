'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin, Shield, ExternalLink, Linkedin, Twitter, Facebook } from 'lucide-react'

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Investment Solutions', href: '/investments' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Market Insights', href: '/insights' },
    { name: 'Contact', href: '/contact' }
  ]

  const investmentLinks = [
    { name: 'REITs', href: '/investments/reits' },
    { name: 'Public-Private Partnerships', href: '/investments/ppp' },
    { name: 'Structured Products', href: '/investments/structured' },
    { name: 'Sustainable Investments', href: '/investments/sustainable' }
  ]



  return (
    <footer className="bg-thara-navy text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Information */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-thara-green rounded-lg flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                >
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                  <path d="M12 8l4 4h-8l4-4z" fill="#f59e0b" />
                </svg>
              </div>
              <div className="text-xl font-bold">
                Thara <span className="text-thara-gold">Global</span>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Pioneering sustainable investment solutions in Oman. Licensed by CMA 
              with 50+ years of combined experience driving Vision 2040.
            </p>

            {/* Regulatory Badge */}
            <div className="bg-white bg-opacity-10 rounded-lg p-4 mb-6">
              <div className="flex items-center space-x-3">
                <Shield className="w-6 h-6 text-thara-green" />
                <div>
                  <div className="font-semibold text-sm">Licensed by CMA</div>
                  <div className="text-xs text-gray-400">Capital Market Authority</div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-white bg-opacity-10 rounded-lg flex items-center justify-center hover:bg-thara-green transition-colors duration-200"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white bg-opacity-10 rounded-lg flex items-center justify-center hover:bg-thara-green transition-colors duration-200"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white bg-opacity-10 rounded-lg flex items-center justify-center hover:bg-thara-green transition-colors duration-200"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-thara-green transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Investment Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Investment Solutions</h3>
            <ul className="space-y-3">
              {investmentLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-thara-green transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Information</h3>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-thara-green mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <div className="font-medium">Head Office</div>
                  <div className="text-sm">
                    Bawsher-23 July Road<br />
                    Next to Mohammed Al Ameen Mosque<br />
                    Muscat, Sultanate of Oman
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-thara-green" />
                <div className="text-gray-300">
                  <div className="font-medium">+968 24597819</div>
                  <div className="text-sm">+968 24625819</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-thara-green" />
                <div className="text-gray-300">
                  <div className="font-medium">info@tharaglobal.com</div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="mt-6 p-4 bg-white bg-opacity-5 rounded-lg">
              <div className="font-medium text-sm mb-2">Working Hours</div>
              <div className="text-xs text-gray-400">
                Sunday - Thursday: 8:00 - 17:00<br />
                Friday - Saturday: Closed
              </div>
            </div>
          </div>
        </div>
      </div>





      {/* Bottom Bar */}
      <div className="border-t border-white border-opacity-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2024 Thara Investment LLC. All rights reserved. Licensed by the Capital Market Authority of Oman.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>CMA License: TG-2018-001</span>
              <span>•</span>
              <span>Established 2018</span>
              <span>•</span>
              <span>Vision 2040 Aligned</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
