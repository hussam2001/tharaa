import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import PortfolioHero from '@/components/portfolio/PortfolioHero'

export const metadata = {
  title: 'Investment Portfolio & Performance - Thara Global | Track Record & Results',
  description: 'Explore Thara Global\'s investment portfolio performance, case studies, and client success stories. Proven track record with $300M+ AUM and consistent returns since 2018.',
  keywords: 'Thara Global portfolio, investment performance, case studies, track record, returns, investment results Oman',
}

export default function PortfolioPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <PortfolioHero />
      <Footer />
    </main>
  )
}
