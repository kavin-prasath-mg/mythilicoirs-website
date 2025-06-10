import React, { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import img1 from "../../assets/images/img1.jpg";
import img2 from "../../assets/images/img2.jpg";
import img3 from "../../assets/images/img3.jpg";
import img4 from "../../assets/images/img4.jpg";
import img5 from "../../assets/images/img5.jpg";
import img6 from "../../assets/images/img6.jpg";
import img7 from "../../assets/images/img7.png";
import img8 from "../../assets/images/img8.png";
import { FaTimes, FaChevronLeft, FaChevronRight, FaLeaf, FaExpand, FaImages, FaPlay, FaSearch } from "react-icons/fa";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filter, setFilter] = useState("All");
  const [isLoading, setIsLoading] = useState(false);
  const [hoveredImage, setHoveredImage] = useState(null);

  const images = [
    { src: img1, category: "Production", title: "Coir Processing", description: "Advanced coir processing facility with eco-friendly methods" },
    { src: img2, category: "Products", title: "Premium Coir Pith", description: "High-quality coir pith blocks for sustainable gardening" },
    { src: img3, category: "Facility", title: "Manufacturing Unit", description: "State-of-the-art manufacturing with modern technology" },
    { src: img4, category: "Products", title: "Coir Blocks", description: "Compressed coir blocks ready for worldwide dispatch" },
    { src: img5, category: "Production", title: "Quality Control", description: "Ensuring premium quality standards at every step" },
    { src: img6, category: "Facility", title: "Storage Area", description: "Organized storage and efficient dispatch center" },
    { src: img7, category: "Products", title: "Natural Fiber", description: "100% natural coir fiber products for various applications" },
    { src: img8, category: "Production", title: "Eco Processing", description: "Sustainable production methods protecting the environment" },
  ];

  const categories = ["All", ...new Set(images.map(img => img.category))];
  const filteredImages = filter === "All" ? images : images.filter(img => img.category === filter);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!selectedImage) return;
      
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedImage, currentIndex]);

  const openLightbox = useCallback((index) => {
    setCurrentIndex(index);
    setSelectedImage(filteredImages[index]);
    document.body.style.overflow = 'hidden';
  }, [filteredImages]);

  const closeLightbox = useCallback(() => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  }, []);

  const nextImage = useCallback(() => {
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(filteredImages[nextIndex]);
  }, [currentIndex, filteredImages]);

  const prevImage = useCallback(() => {
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(filteredImages[prevIndex]);
  }, [currentIndex, filteredImages]);

  const handleFilterChange = (newFilter) => {
    setIsLoading(true);
    setTimeout(() => {
      setFilter(newFilter);
      setIsLoading(false);
    }, 300);
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-white to-green-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-green-500"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -25, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          >
            <FaLeaf className="w-8 h-8" />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-6 py-2 rounded-full text-sm font-medium mb-4">
            <FaImages />
            Visual Journey
          </span>
          <h2 className="section-title mb-6">Our Eco Gallery</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our sustainable manufacturing process, premium products, and eco-friendly facilities 
            through this curated collection of images.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                filter === category
                  ? 'bg-green-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-green-50 shadow-md'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          layout
        >
          <AnimatePresence>
            {filteredImages.map((image, index) => (
              <motion.div
                key={`${filter}-${index}`}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl cursor-pointer"
                onClick={() => openLightbox(index)}
                whileHover={{ y: -8 }}
              >
                {/* Image */}
                <div className="relative aspect-square overflow-hidden">
                  <motion.img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />
                  
                  {/* Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileHover={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                      >
                        <span className="inline-block bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium mb-2">
                          {image.category}
                        </span>
                        <h3 className="text-white font-bold text-lg mb-1">{image.title}</h3>
                        <p className="text-green-100 text-sm">{image.description}</p>
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Expand Icon */}
                  <motion.div
                    className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-800 w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaExpand className="w-4 h-4" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <motion.button
            className="primary-btn text-lg px-8 py-4 flex items-center gap-3 mx-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.hash = '#contact'}
          >
            <FaLeaf />
            Visit Our Facility
          </motion.button>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <motion.button
              onClick={closeLightbox}
              className="absolute top-6 right-6 bg-white/10 hover:bg-white/20 text-white w-12 h-12 rounded-full flex items-center justify-center z-10"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaTimes className="w-5 h-5" />
            </motion.button>

            {/* Navigation Buttons */}
            <motion.button
              onClick={prevImage}
              className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white w-12 h-12 rounded-full flex items-center justify-center z-10"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaChevronLeft className="w-5 h-5" />
            </motion.button>

            <motion.button
              onClick={nextImage}
              className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white w-12 h-12 rounded-full flex items-center justify-center z-10"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaChevronRight className="w-5 h-5" />
            </motion.button>

            {/* Image Container */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl max-h-[80vh] mx-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-full object-contain rounded-lg"
              />
              
              {/* Image Info */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg"
              >
                <span className="inline-block bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium mb-2">
                  {selectedImage.category}
                </span>
                <h3 className="text-white text-2xl font-bold mb-2">{selectedImage.title}</h3>
                <p className="text-green-100">{selectedImage.description}</p>
              </motion.div>
            </motion.div>

            {/* Image Counter */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm">
              {currentIndex + 1} / {filteredImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
