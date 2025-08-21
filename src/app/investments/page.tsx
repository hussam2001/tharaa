import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import InvestmentHero from '@/components/investments/InvestmentHero'
import InvestmentOverview from '@/components/investments/InvestmentOverview'
import REITsSection from '@/components/investments/REITsSection'

export const metadata = {
  title: 'Investment Solutions - Thara Global | REITs, PPP, Sustainable Investments',
  description: 'Discover Thara Global\'s comprehensive investment solutions including REITs, Public-Private Partnerships, structured products, and sustainable investments. CMA licensed with proven track record.',
  keywords: 'investment solutions Oman, REIT investment, public private partnerships, structured products, sustainable investing, CMA licensed',
}

export default function InvestmentsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <InvestmentHero />
      <InvestmentOverview />
      <REITsSection />
      <Footer />
    </main>
  )
}
