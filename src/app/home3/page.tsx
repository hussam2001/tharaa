import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Thara Global - Premium Investment Solutions | Home3',
  description: 'Experience luxury investment solutions with immersive visuals and cutting-edge technology. Discover Oman\'s premier investment opportunities.',
}

export default function Home3() {
  return (
    <div className="relative overflow-x-hidden bg-black min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="relative z-10 text-center px-6 lg:px-8 max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-6 py-3 mb-8">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <span className="text-white font-medium">Premium Investment Solutions</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl lg:text-8xl font-bold mb-8 leading-none">
            <span className="block text-white">Luxury</span>
            <span className="block bg-gradient-to-r from-gold-300 via-yellow-300 to-gold-400 bg-clip-text text-transparent">
              Investment
            </span>
            <span className="block text-white">Experience</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl lg:text-2xl text-gray-200 mb-12 max-w-2xl mx-auto leading-relaxed">
            Immerse yourself in Oman's most exclusive investment opportunities through cutting-edge technology and unparalleled market insights.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-gold-400 to-yellow-500 rounded-xl font-semibold text-black hover:scale-105 transition-transform duration-300">
              Explore Portfolio
            </button>
            
            <button className="px-8 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl font-semibold text-white hover:bg-white/20 transition-all duration-300">
              Watch Our Story
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-7xl font-bold mb-8">
              <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                Luxury Performance
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Our commitment to excellence is reflected in every metric, delivering unparalleled results for our discerning clientele.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: 'Premium Assets', value: '462', color: 'from-gold-400 to-yellow-500' },
              { label: 'Annual Returns', value: '7.25%', color: 'from-emerald-400 to-green-500' },
              { label: 'Portfolio Value', value: '156M OMR', color: 'from-blue-400 to-cyan-500' },
              { label: 'Elite Investors', value: '250+', color: 'from-purple-400 to-pink-500' }
            ].map((stat, index) => (
              <div key={index} className="p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 group">
                <div className={`text-4xl lg:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-4`}>
                  {stat.value}
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gray-100 transition-colors">
                  {stat.label}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Showcase */}
      <section className="py-32 bg-gradient-to-b from-black via-slate-900/50 to-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-7xl font-bold mb-8">
              <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                Exceptional Properties
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover our carefully curated portfolio of premium properties across Oman's most prestigious locations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Madinat Sandan',
                location: 'Muscat, Oman',
                value: '52M OMR',
                image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop'
              },
              {
                title: 'Al Mouj Marina',
                location: 'The Wave, Muscat',
                value: '38M OMR',
                image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop'
              },
              {
                title: 'Nizwa Heritage',
                location: 'Nizwa, Oman',
                value: '24M OMR',
                image: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=800&h=600&fit=crop'
              }
            ].map((property, index) => (
              <div key={index} className="group relative rounded-3xl overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105">
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  <div className="absolute top-4 right-4 bg-gold-500/90 backdrop-blur-sm text-black px-4 py-2 rounded-full font-bold">
                    {property.value}
                  </div>
                  
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {property.title}
                    </h3>
                    <p className="text-gray-300">
                      {property.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}