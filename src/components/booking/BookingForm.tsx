'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, User, Mail, Phone, MessageCircle, Building, DollarSign, CheckCircle, Send, AlertCircle } from 'lucide-react'

const BookingForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    investmentAmount: '',
    consultationType: '',
    preferredDate: '',
    preferredTime: '',
    message: '',
    experience: '',
    goals: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  const consultationTypes = [
    'Portfolio Review & Analysis',
    'Investment Strategy Planning',
    'REIT Investment Consultation',
    'Shariah Compliance Review',
    'Risk Assessment & Management',
    'Market Opportunities Discussion',
    'General Investment Guidance'
  ]

  const timeSlots = [
    '9:00 AM - 10:00 AM',
    '10:00 AM - 11:00 AM',
    '11:00 AM - 12:00 PM',
    '2:00 PM - 3:00 PM',
    '3:00 PM - 4:00 PM',
    '4:00 PM - 5:00 PM'
  ]

  const investmentRanges = [
    'Under OMR 10,000',
    'OMR 10,000 - 50,000',
    'OMR 50,000 - 100,000',
    'OMR 100,000 - 500,000',
    'OMR 500,000 - 1,000,000',
    'Over OMR 1,000,000'
  ]

  const experienceLevels = [
    'New to investing',
    'Some experience (1-3 years)',
    'Experienced (3-10 years)',
    'Very experienced (10+ years)'
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      // In a real implementation, you would send this to your backend API
      // which would then forward to info@tharaglobal.com
      
      // For now, we'll simulate the submission
      const emailBody = `
        New Consultation Booking Request
        
        Client Information:
        - Name: ${formData.firstName} ${formData.lastName}
        - Email: ${formData.email}
        - Phone: ${formData.phone}
        - Company: ${formData.company || 'Not specified'}
        
        Consultation Details:
        - Type: ${formData.consultationType}
        - Preferred Date: ${formData.preferredDate}
        - Preferred Time: ${formData.preferredTime}
        - Investment Amount: ${formData.investmentAmount}
        - Experience Level: ${formData.experience}
        
        Investment Goals:
        ${formData.goals}
        
        Additional Message:
        ${formData.message}
        
        Submitted at: ${new Date().toLocaleString()}
      `

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      console.log('Form submission data:', formData)
      console.log('Email body that would be sent to info@tharaglobal.com:', emailBody)
      
      setIsSubmitted(true)
    } catch (err) {
      setError('Failed to submit consultation request. Please try again or contact us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <section className="py-20 lg:py-32 bg-soft-gray">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-12 shadow-xl"
          >
            <div className="w-20 h-20 bg-thara-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-thara-green" />
            </div>
            <h2 className="text-3xl font-bold text-thara-navy mb-4">Consultation Request Submitted!</h2>
            <p className="text-xl text-text-gray mb-8">
              Thank you for your interest in our investment consultation services. 
              We have received your request and will contact you within 24 hours to confirm your appointment.
            </p>
            <div className="bg-soft-gray rounded-2xl p-6 mb-8">
              <h3 className="text-lg font-semibold text-thara-navy mb-4">What Happens Next?</h3>
              <div className="space-y-3 text-left">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-thara-gold text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
                  <span className="text-text-gray">Our team reviews your consultation request and preferences</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-thara-gold text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
                  <span className="text-text-gray">We'll call or email you to confirm the appointment details</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-thara-gold text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</div>
                  <span className="text-text-gray">Receive a calendar invitation with meeting details</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => {
                  setIsSubmitted(false)
                  setFormData({
                    firstName: '', lastName: '', email: '', phone: '', company: '',
                    investmentAmount: '', consultationType: '', preferredDate: '', preferredTime: '',
                    message: '', experience: '', goals: ''
                  })
                }}
                className="bg-thara-navy text-white px-8 py-3 rounded-lg font-semibold hover:bg-thara-navy/90 transition-colors duration-300"
              >
                Book Another Consultation
              </button>
              <a 
                href="/contact" 
                className="border-2 border-thara-navy text-thara-navy px-8 py-3 rounded-lg font-semibold hover:bg-thara-navy hover:text-white transition-all duration-300"
              >
                Contact Us Directly
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 lg:py-32 bg-soft-gray">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-thara-navy mb-6"
          >
            Schedule Your Consultation
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-text-gray"
          >
            Fill out the form below and we'll contact you to confirm your appointment
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl"
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information */}
            <div>
              <h3 className="text-2xl font-bold text-thara-navy mb-6 flex items-center gap-3">
                <User className="w-6 h-6" />
                Personal Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-thara-navy font-semibold mb-2">First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-border-gray rounded-lg focus:outline-none focus:border-thara-navy transition-colors duration-300"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label className="block text-thara-navy font-semibold mb-2">Last Name *</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-border-gray rounded-lg focus:outline-none focus:border-thara-navy transition-colors duration-300"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <label className="block text-thara-navy font-semibold mb-2 flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-border-gray rounded-lg focus:outline-none focus:border-thara-navy transition-colors duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-thara-navy font-semibold mb-2 flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-border-gray rounded-lg focus:outline-none focus:border-thara-navy transition-colors duration-300"
                    placeholder="+968 XXXX XXXX"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-thara-navy font-semibold mb-2 flex items-center gap-2">
                  <Building className="w-4 h-4" />
                  Company/Organization (Optional)
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-border-gray rounded-lg focus:outline-none focus:border-thara-navy transition-colors duration-300"
                  placeholder="Your company name"
                />
              </div>
            </div>

            {/* Consultation Details */}
            <div>
              <h3 className="text-2xl font-bold text-thara-navy mb-6 flex items-center gap-3">
                <Calendar className="w-6 h-6" />
                Consultation Details
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-thara-navy font-semibold mb-2">Consultation Type *</label>
                  <select
                    name="consultationType"
                    value={formData.consultationType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-border-gray rounded-lg focus:outline-none focus:border-thara-navy transition-colors duration-300"
                  >
                    <option value="">Select consultation type</option>
                    {consultationTypes.map((type, index) => (
                      <option key={index} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-thara-navy font-semibold mb-2 flex items-center gap-2">
                    <DollarSign className="w-4 h-4" />
                    Investment Amount Range
                  </label>
                  <select
                    name="investmentAmount"
                    value={formData.investmentAmount}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border-gray rounded-lg focus:outline-none focus:border-thara-navy transition-colors duration-300"
                  >
                    <option value="">Select investment range</option>
                    {investmentRanges.map((range, index) => (
                      <option key={index} value={range}>{range}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <label className="block text-thara-navy font-semibold mb-2">Preferred Date *</label>
                  <input
                    type="date"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleInputChange}
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 border border-border-gray rounded-lg focus:outline-none focus:border-thara-navy transition-colors duration-300"
                  />
                </div>
                
                <div>
                  <label className="block text-thara-navy font-semibold mb-2 flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    Preferred Time *
                  </label>
                  <select
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-border-gray rounded-lg focus:outline-none focus:border-thara-navy transition-colors duration-300"
                  >
                    <option value="">Select preferred time</option>
                    {timeSlots.map((time, index) => (
                      <option key={index} value={time}>{time}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-thara-navy font-semibold mb-2">Investment Experience Level</label>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-border-gray rounded-lg focus:outline-none focus:border-thara-navy transition-colors duration-300"
                >
                  <option value="">Select your experience level</option>
                  {experienceLevels.map((level, index) => (
                    <option key={index} value={level}>{level}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Additional Information */}
            <div>
              <h3 className="text-2xl font-bold text-thara-navy mb-6 flex items-center gap-3">
                <MessageCircle className="w-6 h-6" />
                Additional Information
              </h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-thara-navy font-semibold mb-2">Investment Goals & Objectives</label>
                  <textarea
                    name="goals"
                    value={formData.goals}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-border-gray rounded-lg focus:outline-none focus:border-thara-navy transition-colors duration-300"
                    placeholder="Please describe your investment goals, risk tolerance, and what you hope to achieve..."
                  />
                </div>
                
                <div>
                  <label className="block text-thara-navy font-semibold mb-2">Additional Message or Questions</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-3 border border-border-gray rounded-lg focus:outline-none focus:border-thara-navy transition-colors duration-300"
                    placeholder="Any specific questions or topics you'd like to discuss during the consultation..."
                  />
                </div>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center gap-3">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                <span className="text-red-700">{error}</span>
              </div>
            )}

            {/* Submit Button */}
            <div className="text-center pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-thara-navy text-white px-12 py-4 rounded-lg font-semibold hover:bg-thara-navy/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-3 mx-auto"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Submitting Request...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Submit Consultation Request
                  </>
                )}
              </button>
              
              <p className="text-sm text-text-gray mt-4">
                Your information will be sent securely to our team at info@tharaglobal.com
              </p>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default BookingForm
