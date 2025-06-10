import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import aboutJPG from "../../assets/about.jpg";
import { FaLeaf, FaRecycle, FaGlobe, FaSeedling, FaHeart, FaAward, FaPlay } from "react-icons/fa";

const About = () => {
  const [isInView, setIsInView] = useState(false);
  const [playingVideo, setPlayingVideo] = useState(false);
  const ref = useRef(null);
  const isInViewFramer = useInView(ref, { once: true, threshold: 0.3 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    const element = document.querySelector(".about-section");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const ecoFeatures = [
    { icon: <FaLeaf />, title: "100% Natural", description: "Pure coconut coir products" },
    { icon: <FaRecycle />, title: "Sustainable", description: "Eco-friendly production" },
    { icon: <FaGlobe />, title: "Global Impact", description: "Contributing to green earth" },
    { icon: <FaSeedling />, title: "Growth Focused", description: "Enhancing plant growth" },
  ];

  const stats = [
    { number: "5+", label: "Years Experience", icon: <FaAward /> },
    { number: "5", label: "Acres Facility", icon: <FaGlobe /> },
    { number: "100%", label: "Eco-Friendly", icon: <FaLeaf /> },
    { number: "∞", label: "Love for Nature", icon: <FaHeart /> },
  ];

  return (
    <section id="about" className="min-h-screen py-20 eco-gradient relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-green-600"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 360],
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-6 py-2 rounded-full text-sm font-medium mb-4">
            <FaLeaf />
            About Our Story
          </span>
          <h2 className="section-title">Our Eco Heritage</h2>
        </motion.div>

        <div className="about-section">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Image section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative group">
                <motion.div
                  className="absolute -inset-4 bg-gradient-to-r from-green-400 to-green-600 rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                  animate={{ 
                    rotate: [0, 1, -1, 0],
                    scale: [1, 1.02, 1] 
                  }}
                  transition={{ 
                    duration: 6, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                />
                <img
                  src={aboutJPG}
                  alt="About Mythili Coirs - Sustainable Coir Products"
                  className="relative w-full rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
                />
                <motion.div
                  className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-lg"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">5+</div>
                    <div className="text-sm text-gray-600">Years of Excellence</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Content section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-3xl lg:text-4xl font-bold text-green-800 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Crafting a Sustainable Future
                </h3>
                <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                  <p>
                    Welcome to <strong className="text-green-700">Mythili Coirs</strong>, where tradition blends with innovation 
                    to create premium coir products. Founded five years ago, we specialize in producing high-quality 
                    coir pith and fiber, sustainably sourced from coconut husks.
                  </p>
                  <p>
                    With a focus on eco-friendly practices and advanced technology, we provide reliable, sustainable 
                    solutions. Our modern facilities, spanning five acres, ensure top-quality production while upholding 
                    our commitment to the environment.
                  </p>
                  <p className="text-green-700 font-medium">
                    We are dedicated to building a greener future with every product we create.
                  </p>
                </div>
              </div>

              {/* Eco Features Grid */}
              <div className="grid grid-cols-2 gap-4">
                {ecoFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="eco-card p-4 text-center group hover:shadow-xl"
                    whileHover={{ y: -5 }}
                  >
                    <motion.div
                      className="text-3xl text-green-600 mb-3 flex justify-center"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      {feature.icon}
                    </motion.div>
                    <h4 className="font-semibold text-green-800 mb-1">{feature.title}</h4>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </motion.div>
                ))}
              </div>

              <motion.button
                className="primary-btn flex items-center gap-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.hash = '#contact'}
              >
                <FaSeedling />
                Connect With Us
              </motion.button>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="glass-effect p-6 text-center group hover:bg-white/20"
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
              >
                <motion.div
                  className="text-4xl text-green-600 mb-3 flex justify-center"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0] 
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    delay: index * 0.5 
                  }}
                >
                  {stat.icon}
                </motion.div>
                <div className="text-3xl font-bold text-green-800 mb-2">{stat.number}</div>
                <div className="text-sm text-green-700 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
