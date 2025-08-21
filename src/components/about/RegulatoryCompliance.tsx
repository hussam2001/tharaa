'use client'

import { motion } from 'framer-motion'
import { Shield, FileText, CheckCircle, Download, ExternalLink, Scale, Eye, Lock } from 'lucide-react'

const RegulatoryCompliance = () => {
  const licenses = [
    {
      authority: 'Capital Market Authority (CMA)',
      license: 'Investment Company License',
      number: 'TG-2018-001',
      issued: '2018',
      status: 'Active',
      description: 'Authorized to conduct investment activities including portfolio management, investment advisory, and fund management services.'
    },
    {
      authority: 'Ministry of Commerce & Industry',
      license: 'Commercial Registration',
      number: 'CR-1234567',
      issued: '2018',
      status: 'Active',
      description: 'Official business registration for conducting investment and financial services in the Sultanate of Oman.'
    }
  ]

  const compliance = [
    {
      icon: Shield,
      title: 'Anti-Money Laundering (AML)',
      description: 'Comprehensive AML policies and procedures in compliance with Omani and international standards.',
      status: 'Fully Compliant'
    },
    {
      icon: Eye,
      title: 'Know Your Customer (KYC)',
      description: 'Rigorous client identification and verification processes to ensure regulatory compliance.',
      status: 'Fully Compliant'
    },
    {
      icon: Scale,
      title: 'Corporate Governance',
      description: 'Best-in-class governance framework with independent oversight and transparency.',
      status: 'Fully Compliant'
    },
    {
      icon: Lock,
      title: 'Data Protection',
      description: 'GDPR-compliant data protection measures ensuring client privacy and security.',
      status: 'Fully Compliant'
    },
    {
      icon: FileText,
      title: 'Financial Reporting',
      description: 'Audited financial statements and regular regulatory reporting to CMA.',
      status: 'Fully Compliant'
    },
    {
      icon: CheckCircle,
      title: 'Investment Guidelines',
      description: 'Strict adherence to investment limits, risk management, and portfolio guidelines.',
      status: 'Fully Compliant'
    }
  ]

  const documents = [
    {
      title: 'CMA Investment License',
      type: 'License',
      size: '2.1 MB',
      format: 'PDF'
    },
    {
      title: 'Audited Financial Statements 2023',
      type: 'Financial Report',
      size: '3.8 MB',
      format: 'PDF'
    },
    {
      title: 'Corporate Governance Framework',
      type: 'Policy Document',
      size: '1.5 MB',
      format: 'PDF'
    },
    {
      title: 'Risk Management Policy',
      type: 'Policy Document',
      size: '2.3 MB',
      format: 'PDF'
    },
    {
      title: 'Anti-Money Laundering Policy',
      type: 'Compliance',
      size: '1.8 MB',
      format: 'PDF'
    },
    {
      title: 'Data Protection & Privacy Policy',
      type: 'Privacy',
      size: '1.2 MB',
      format: 'PDF'
    }
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
          <h2 className="text-4xl font-bold text-thara-navy mb-6">Regulatory Compliance</h2>
          <p className="text-xl text-text-gray max-w-4xl mx-auto leading-relaxed">
            Thara Global maintains the highest standards of regulatory compliance, transparency, 
            and corporate governance. Our commitment to excellence in compliance protects our 
            investors and ensures sustainable business operations.
          </p>
        </motion.div>

        {/* Licensing Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-thara-navy text-center mb-12">Official Licenses & Registrations</h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {licenses.map((license, index) => (
              <motion.div
                key={license.authority}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-thara-green"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-thara-green bg-opacity-10 rounded-lg flex items-center justify-center">
                      <Shield className="w-6 h-6 text-thara-green" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-thara-navy">{license.authority}</h4>
                      <p className="text-thara-green font-medium">{license.license}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      {license.status}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <div className="text-sm text-gray-500 uppercase tracking-wide">License Number</div>
                    <div className="text-lg font-semibold text-thara-navy">{license.number}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 uppercase tracking-wide">Year Issued</div>
                    <div className="text-lg font-semibold text-thara-navy">{license.issued}</div>
                  </div>
                </div>

                <p className="text-text-gray leading-relaxed">{license.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Compliance Framework */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-thara-navy text-center mb-12">Compliance Framework</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {compliance.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-thara-green bg-opacity-10 rounded-lg flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-thara-green" />
                  </div>
                  <div className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                    {item.status}
                  </div>
                </div>
                
                <h4 className="text-lg font-bold text-thara-navy mb-3">{item.title}</h4>
                <p className="text-text-gray text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Regulatory Documents */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-thara-navy text-center mb-12">Regulatory Documents</h3>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {documents.map((doc, index) => (
                <motion.div
                  key={doc.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="border border-gray-200 rounded-lg p-4 hover:border-thara-green transition-colors duration-200 cursor-pointer group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <FileText className="w-8 h-8 text-thara-green group-hover:text-light-green transition-colors duration-200" />
                    <Download className="w-4 h-4 text-gray-400 group-hover:text-thara-green transition-colors duration-200" />
                  </div>
                  
                  <h4 className="font-semibold text-thara-navy mb-1 group-hover:text-thara-green transition-colors duration-200">
                    {doc.title}
                  </h4>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                    <span>{doc.type}</span>
                    <span>{doc.format}</span>
                  </div>
                  
                  <div className="text-xs text-gray-400">{doc.size}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Regulatory Oversight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="bg-gradient-to-r from-thara-navy to-dark-navy rounded-2xl p-8 lg:p-12 text-white">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-6">Regulatory Oversight & External Links</h3>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our operations are subject to regular oversight by Omani regulatory authorities. 
                We maintain transparent communication with all regulatory bodies.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="bg-white bg-opacity-10 rounded-xl p-6 hover:bg-opacity-20 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <Shield className="w-8 h-8 text-thara-green" />
                  <ExternalLink className="w-4 h-4 text-gray-300" />
                </div>
                <h4 className="text-lg font-bold mb-2">Capital Market Authority</h4>
                <p className="text-gray-300 text-sm mb-3">
                  Primary regulator overseeing our investment activities and compliance.
                </p>
                <a href="https://cma.gov.om" className="text-thara-gold hover:text-light-gold text-sm font-medium">
                  Visit CMA Website
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="bg-white bg-opacity-10 rounded-xl p-6 hover:bg-opacity-20 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <Scale className="w-8 h-8 text-thara-gold" />
                  <ExternalLink className="w-4 h-4 text-gray-300" />
                </div>
                <h4 className="text-lg font-bold mb-2">Central Bank of Oman</h4>
                <p className="text-gray-300 text-sm mb-3">
                  Financial system oversight and monetary policy guidance.
                </p>
                <a href="https://cbo.gov.om" className="text-thara-gold hover:text-light-gold text-sm font-medium">
                  Visit CBO Website
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                className="bg-white bg-opacity-10 rounded-xl p-6 hover:bg-opacity-20 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <FileText className="w-8 h-8 text-white" />
                  <ExternalLink className="w-4 h-4 text-gray-300" />
                </div>
                <h4 className="text-lg font-bold mb-2">Ministry of Commerce</h4>
                <p className="text-gray-300 text-sm mb-3">
                  Business registration and commercial licensing authority.
                </p>
                <a href="https://moci.gov.om" className="text-thara-gold hover:text-light-gold text-sm font-medium">
                  Visit MOCI Website
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Contact Compliance Team */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-thara-navy mb-4">Compliance Inquiries</h3>
            <p className="text-text-gray mb-6 max-w-2xl mx-auto">
              For questions about our regulatory compliance, licensing, or to request additional 
              documentation, please contact our Compliance Team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="mailto:compliance@tharaglobal.com"
                className="bg-thara-green text-white px-6 py-3 rounded-lg font-semibold hover:bg-light-green transition-colors duration-200"
              >
                Contact Compliance Team
              </a>
              <a
                href="/legal/compliance"
                className="border-2 border-thara-navy text-thara-navy px-6 py-3 rounded-lg font-semibold hover:bg-thara-navy hover:text-white transition-all duration-200"
              >
                View All Legal Documents
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default RegulatoryCompliance


