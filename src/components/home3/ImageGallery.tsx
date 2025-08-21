'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { X, ArrowLeft, ArrowRight, Maximize2, MapPin, Calendar } from 'lucide-react'

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&h=800&fit=crop",
      title: "Luxury Waterfront Living",
      location: "Madinat Sandan, Muscat",
      date: "2024",
      category: "Residential",
      description: "Exquisite waterfront apartments with panoramic ocean views and world-class amenities."
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop",
      title: "Modern Business District",
      location: "Al Mouj, Muscat",
      date: "2023",
      category: "Commercial",
      description: "State-of-the-art office spaces designed for the future of business in Oman."
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1200&h=800&fit=crop",
      title: "Heritage Preservation",
      location: "Nizwa, Oman",
      date: "2023",
      category: "Cultural",
      description: "Carefully restored historical properties maintaining authentic Omani architecture."
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&h=800&fit=crop",
      title: "Sustainable Development",
      location: "Sohar, Oman",
      date: "2024",
      category: "Mixed-Use",
      description: "Eco-friendly mixed-use development setting new standards for sustainability."
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1565182999561-18d7dc61c393?w=1200&h=800&fit=crop",
      title: "Marina Excellence",
      location: "Sur, Oman",
      date: "2023",
      category: "Hospitality",
      description: "Luxury marina and resort complex offering unparalleled leisure experiences."
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&h=800&fit=crop",
      title: "Urban Innovation",
      location: "Salalah, Oman",
      date: "2024",
      category: "Residential",
      description: "Innovative residential towers incorporating smart home technology and green building practices."
    }
  ]

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1)
    }
  }

  return (
    <section className="relative py-32 bg-gradient-to-b from-black via-slate-900/50 to-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-6 py-3 mb-8">
            <Maximize2 className="w-5 h-5 text-blue-400" />
            <span className="text-white font-medium">Visual Journey</span>
          </div>
          
          <h2 className="text-5xl lg:text-7xl font-bold mb-8">
            <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              Gallery of Excellence
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio through stunning visuals that capture the essence of luxury and innovation in every project.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group relative cursor-pointer"
              onClick={() => setSelectedImage(index)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 group-hover:border-white/30 transition-all duration-500">
                <motion.img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  layoutId={`image-${image.id}`}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-blue-500/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                  {image.category}
                </div>
                
                {/* Expand Icon */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <Maximize2 className="w-5 h-5 text-white" />
                </div>
                
                {/* Content */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={hoveredIndex === index ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 left-0 right-0 p-6"
                >
                  <h3 className="text-xl font-bold text-white mb-2">
                    {image.title}
                  </h3>
                  <div className="flex items-center gap-4 text-gray-300 text-sm">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{image.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{image.date}</span>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Hover Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 z-60 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Arrows */}
            <button
              className="absolute left-6 z-60 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              onClick={(e) => {
                e.stopPropagation()
                prevImage()
              }}
            >
              <ArrowLeft className="w-6 h-6" />
            </button>

            <button
              className="absolute right-6 z-60 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              onClick={(e) => {
                e.stopPropagation()
                nextImage()
              }}
            >
              <ArrowRight className="w-6 h-6" />
            </button>

            {/* Image Container */}
            <div className="relative max-w-6xl max-h-[80vh] w-full" onClick={(e) => e.stopPropagation()}>
              <motion.img
                layoutId={`image-${galleryImages[selectedImage].id}`}
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].title}
                className="w-full h-full object-contain rounded-2xl"
              />
              
              {/* Image Info */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8 rounded-b-2xl"
              >
                <h3 className="text-3xl font-bold text-white mb-2">
                  {galleryImages[selectedImage].title}
                </h3>
                <div className="flex items-center gap-6 text-gray-300 mb-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    <span>{galleryImages[selectedImage].location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    <span>{galleryImages[selectedImage].date}</span>
                  </div>
                  <div className="bg-blue-500/20 px-3 py-1 rounded-full text-blue-300 text-sm">
                    {galleryImages[selectedImage].category}
                  </div>
                </div>
                <p className="text-gray-200 max-w-2xl">
                  {galleryImages[selectedImage].description}
                </p>
              </motion.div>
            </div>

            {/* Image Counter */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm">
              {selectedImage + 1} / {galleryImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default ImageGallery

