import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import AboutHero from '@/components/about/AboutHero'
import VisionMission from '@/components/about/VisionMission'
import Leadership from '@/components/about/Leadership'

export const metadata = {
  title: 'About Thara Global - Leading Investment Company in Oman | CMA Licensed',
  description: 'Learn about Thara Global\'s journey since 2018, our leadership team with 50+ years experience, and our commitment to driving Oman\'s Vision 2040 through strategic investments.',
  keywords: 'Thara Global about, investment company Oman, CMA licensed, Vision 2040, leadership team, company history',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <AboutHero />
      <VisionMission />
      <Leadership />
      <Footer />
    </main>
  )
}
