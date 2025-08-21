'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'REITs', href: '/reits' },
    { name: 'Investing in Oman', href: '/investments' },
    { name: 'Contact', href: '/contact' }
  ]

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
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
              <div className="text-xl font-bold text-thara-navy">
                Thara <span className="text-thara-gold">Global</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-text-gray hover:text-thara-green px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/book-consultation"
              className="bg-thara-gold text-black px-6 py-2 rounded-md text-sm font-medium hover:bg-gold-400 transition-colors duration-200"
            >
              Book Consultation
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-text-gray hover:text-thara-green p-2"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-border-gray">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="text-text-gray hover:text-thara-green block px-3 py-2 text-base font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>

                </div>
              ))}
              <div className="pt-4 pb-2">
                <Link
                  href="/book-consultation"
                  className="bg-thara-gold text-black block px-3 py-2 rounded-md text-base font-medium text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Book Consultation
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
