import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ContactHero from '@/components/contact/ContactHero'
import ContactMap from '@/components/contact/ContactMap'
import ContactCTA from '@/components/contact/ContactCTA'

export const metadata = {
  title: 'Contact Thara Global Business LLC - Investment Consultation | Muscat, Oman',
  description: 'Contact Thara Global Business LLC for professional investment consultation. Visit our Muscat office or call +968 7688 0161. CMA licensed investment services.',
  keywords: 'contact Thara Global, investment consultation Oman, Muscat office, CMA licensed, Shariah compliant',
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <ContactHero />
      <ContactMap />
      <ContactCTA />
      <Footer />
    </main>
  )
}