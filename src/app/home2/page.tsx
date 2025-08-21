import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import EnhancedHero from '@/components/home2/EnhancedHero'
import AnimatedStats from '@/components/home2/AnimatedStats'
import WhyOmanSection from '@/components/home2/WhyOmanSection'
import LeadershipSection from '@/components/home2/LeadershipSection'

export default function Home2() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-x-hidden">
      <Navigation />
      <EnhancedHero />
      <AnimatedStats />
      <WhyOmanSection />
      <LeadershipSection />
      <Footer />
    </div>
  )
}