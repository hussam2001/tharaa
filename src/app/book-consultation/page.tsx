import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import BookingForm from '@/components/booking/BookingForm'
import BookingHero from '@/components/booking/BookingHero'
import BookingBenefits from '@/components/booking/BookingBenefits'

export const metadata = {
  title: 'Book Investment Consultation | Thara Global Business LLC',
  description: 'Schedule a professional investment consultation with Thara Global\'s experts. Personalized advice for Shariah-compliant investments in Oman. Free consultation available.',
  keywords: 'book consultation, investment advice, Thara Global, Shariah compliant, financial planning, Oman investments',
}

export default function BookConsultationPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <BookingHero />
      <BookingForm />
      <BookingBenefits />
      <Footer />
    </main>
  )
}
