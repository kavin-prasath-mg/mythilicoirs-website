import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Banner1JPG from "../../assets/banner1.jpg";
import Banner2JPG from "../../assets/banner2.jpg";
import Banner3JPG from "../../assets/banner3.jpg";
import { FaLeaf, FaSeedling, FaRecycle, FaGlobe, FaArrowDown } from "react-icons/fa";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [Banner1JPG, Banner2JPG, Banner3JPG];
  
  const heroContent = [
    {
      title: "PREMIUM COIR PRODUCTS",
      subtitle: "Crafting Sustainable Solutions since 2020",
      description: "100% Natural • Biodegradable • Eco-Friendly"
    },
    {
      title: "NATURE'S GIFT TO YOUR GARDEN",
      subtitle: "Pure Coir Products for Better Growth",
      description: "Organic • Sustainable • Chemical-Free"
    },
    {
      title: "SUSTAINABLE FUTURE STARTS HERE",
      subtitle: "Join the Green Revolution Today",
      description: "Renewable • Carbon Neutral • Earth Friendly"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Floating particles animation
  const FloatingParticle = ({ delay = 0, className = "" }) => (
    <motion.div
      className={`absolute w-2 h-2 bg-green-400 rounded-full opacity-60 ${className}`}
      animate={{
        y: [0, -20, 0],
        x: [0, 10, -10, 0],
        scale: [1, 1.2, 1],
        opacity: [0.6, 1, 0.6],
      }}
      transition={{
        duration: 4,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );

  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 w-full h-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 w-full h-full"
            >
              <img
                src={images[currentSlide]}
                alt={`Eco Slide ${currentSlide + 1}`}
                className="w-full h-full object-cover"
              />
              {/* Eco-friendly overlay */}
              <div className="absolute inset-0 eco-gradient-hero"></div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Floating Nature Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <FloatingParticle
              key={i}
              delay={i * 0.3}
              className={`top-${Math.random() * 80 + 10}% left-${Math.random() * 90 + 5}%`}
            />
          ))}
          
          {/* Floating leaves */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`leaf-${i}`}
              className="absolute text-green-300 opacity-30"
              style={{
                top: `${Math.random() * 80 + 10}%`,
                left: `${Math.random() * 90 + 5}%`,
              }}
              animate={{
                y: [0, -30, 0],
                rotate: [0, 360],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 6 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            >
              <FaLeaf className="w-6 h-6" />
            </motion.div>
          ))}
        </div>

        {/* Main Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4 z-10">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {/* Eco Badge */}
            <motion.div
              className="inline-flex items-center gap-2 bg-green-500/20 backdrop-blur-sm border border-green-400/30 rounded-full px-6 py-2 mb-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <FaRecycle className="text-green-400" />
              </motion.div>
              <span className="text-sm font-medium">100% Eco-Friendly Products</span>
            </motion.div>

            {/* Main Title */}
            <AnimatePresence mode="wait">
              <motion.h1
                key={currentSlide}
                className="text-4xl md:text-7xl font-bold mb-4"
                style={{ fontFamily: 'Playfair Display, serif' }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.8 }}
              >
                {heroContent[currentSlide].title}
              </motion.h1>
            </AnimatePresence>

            {/* Subtitle */}
            <AnimatePresence mode="wait">
              <motion.p
                key={`subtitle-${currentSlide}`}
                className="text-xl md:text-2xl mb-4 text-green-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {heroContent[currentSlide].subtitle}
              </motion.p>
            </AnimatePresence>

            {/* Description */}
            <AnimatePresence mode="wait">
              <motion.p
                key={`desc-${currentSlide}`}
                className="text-lg mb-8 text-green-200"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {heroContent[currentSlide].description}
              </motion.p>
            </AnimatePresence>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <motion.button
                className="primary-btn flex items-center gap-3 text-lg px-8 py-4"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.hash = '#products'}
              >
                <FaSeedling className="text-green-200" />
                Explore Products
              </motion.button>
              
              <motion.button
                className="glass-effect text-white font-medium text-lg px-8 py-4 hover:bg-white/20 transition-all duration-300 flex items-center gap-3"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.hash = '#about'}
              >
                <FaGlobe className="text-green-300" />
                Learn More
              </motion.button>
            </motion.div>

            {/* Eco Stats */}
            <motion.div
              className="flex flex-wrap justify-center gap-8 text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              {[
                { number: "100%", label: "Natural", icon: <FaLeaf /> },
                { number: "Zero", label: "Chemicals", icon: <FaRecycle /> },
                { number: "5+", label: "Years Experience", icon: <FaSeedling /> },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="glass-effect px-6 py-4 min-w-[120px]"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="text-green-400 text-2xl mb-2 flex justify-center"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  >
                    {stat.icon}
                  </motion.div>
                  <div className="text-2xl font-bold">{stat.number}</div>
                  <div className="text-sm text-green-200">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {images.map((_, index) => (
            <motion.button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-green-400 w-8' : 'bg-white/50'
              }`}
              onClick={() => setCurrentSlide(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white z-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <FaArrowDown className="w-6 h-6 text-green-300" />
        </motion.div>
      </div>
    </>
  );
};

export default Hero;
