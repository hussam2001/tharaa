import Navigation from '@/components/Navigation'
import SimpleHero from '@/components/SimpleHero'
import WhoIsThara from '@/components/WhoIsThara'
import WhyThara from '@/components/WhyThara'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <SimpleHero />
      <WhoIsThara />
      <WhyThara />
      <Footer />
    </main>
  )
}
