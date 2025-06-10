import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PRODUCT1 from "../../assets/product1.jpg";
import PRODUCT2 from "../../assets/product2.png";
import PRODUCT3 from "../../assets/product3.jpg";
import img7 from "../../assets/images/img7.png";
import { FaLeaf, FaSeedling, FaRecycle, FaTimes, FaWater, FaHeart, FaGlobe, FaAward } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Premium Coir Pith",
    shortDescription: "High-quality coir pith, perfect for soil conditioning.",
    detailedDescription: "Retains moisture efficiently, ideal for horticulture and agriculture. Our premium coir pith is 100% natural and sustainably sourced.",
    image: PRODUCT1,
    category: "Soil Enhancement",
    features: ["100% Natural", "High Water Retention", "pH Neutral", "Long Lasting"],
    icon: <FaSeedling />,
    color: "green"
  },
  {
    id: 2,
    name: "Eco Coir Blocks",
    shortDescription: "Sustainable and eco-friendly coir blocks.",
    detailedDescription: "Great for reducing water usage in plantations. These compressed blocks expand to 7x their size when hydrated.",
    image: PRODUCT2,
    category: "Compressed Products",
    features: ["Compact Storage", "Easy Transport", "Quick Expansion", "Water Efficient"],
    icon: <FaRecycle />,
    color: "blue"
  },
  {
    id: 3,
    name: "Natural Fibre Pale",
    shortDescription: "Organic mulch for garden care.",
    detailedDescription: "Provides weed control and enriches soil quality. Perfect for organic gardening and landscaping projects.",
    image: PRODUCT3,
    category: "Mulch & Fiber",
    features: ["Weed Control", "Soil Enrichment", "Organic", "Biodegradable"],
    icon: <FaLeaf />,
    color: "emerald"
  },
  {
    id: 4,
    name: "Compact Coir Bricks",
    shortDescription: "Compact and lightweight for easy storage.",
    detailedDescription: "Expands quickly when hydrated, suitable for all crops. Professional grade quality for commercial use.",
    image: img7,
    category: "Professional Grade",
    features: ["Lightweight", "Quick Expansion", "All Crop Suitable", "Professional Grade"],
    icon: <FaGlobe />,
    color: "teal"
  },
];

const ProductGrid = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [filter, setFilter] = useState("All");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Prevent body scroll when modal is open
    if (selectedProduct) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProduct]);

  const categories = ["All", ...new Set(products.map(product => product.category))];
  const filteredProducts = filter === "All" ? products : products.filter(product => product.category === filter);

  const handleClose = () => {
    setSelectedProduct(null);
  };

  const handleFilterChange = (newFilter) => {
    setIsLoading(true);
    setTimeout(() => {
      setFilter(newFilter);
      setIsLoading(false);
    }, 300);
  };

  return (
    <section id="products" className="py-20 bg-gradient-to-b from-green-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-green-500"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 10 + Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          >
            <FaLeaf className="w-6 h-6" />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-6 py-2 rounded-full text-sm font-medium mb-4">
            <FaSeedling />
            Our Product Range
          </span>
          <h2 className="section-title mb-6">Premium Eco Products</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our carefully crafted range of sustainable coir products, designed to nurture your plants 
            while protecting our planet.
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

        {/* Products Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          layout
        >
          <AnimatePresence>
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="eco-card group cursor-pointer overflow-hidden"
                onClick={() => setSelectedProduct(product)}
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                {/* Product Image */}
                <div className="relative overflow-hidden">
                  <motion.img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />
                  
                  {/* Overlay on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredProduct === product.id ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="text-white"
                      initial={{ y: 20 }}
                      animate={{ y: hoveredProduct === product.id ? 0 : 20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`text-${product.color}-400`}>{product.icon}</span>
                        <span className="text-sm font-medium">{product.category}</span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {product.features.slice(0, 2).map((feature, i) => (
                          <span key={i} className="text-xs bg-white/20 px-2 py-1 rounded-full">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Eco badge */}
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                    <FaLeaf className="w-3 h-3" />
                    Eco
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`text-2xl text-${product.color}-600`}>{product.icon}</span>
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-green-600 transition-colors">
                      {product.name}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 mb-4 line-clamp-2">{product.shortDescription}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-green-600 font-medium">{product.category}</span>
                    <motion.button
                      className="text-green-600 hover:text-green-800 font-medium text-sm flex items-center gap-1"
                      whileHover={{ x: 5 }}
                    >
                      Learn More →
                    </motion.button>
                  </div>
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
            <FaHeart />
            Get Custom Quote
          </motion.button>
        </motion.div>
      </div>

      {/* Enhanced Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-50 p-4"
            onClick={handleClose}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="relative">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-64 md:h-80 object-cover rounded-t-3xl"
                />
                <motion.button
                  onClick={handleClose}
                  className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-800 w-10 h-10 rounded-full flex items-center justify-center shadow-lg"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaTimes />
                </motion.button>
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="text-sm font-medium text-gray-800">{selectedProduct.category}</span>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <span className={`text-3xl text-${selectedProduct.color}-600`}>
                    {selectedProduct.icon}
                  </span>
                  <h3 className="text-3xl font-bold text-gray-800">
                    {selectedProduct.name}
                  </h3>
                </div>

                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  {selectedProduct.detailedDescription}
                </p>

                {/* Features Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  {selectedProduct.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="text-center p-4 bg-green-50 rounded-xl"
                    >
                      <div className="text-green-600 text-lg mb-2">
                        {index === 0 && <FaLeaf />}
                        {index === 1 && <FaWater />}
                        {index === 2 && <FaRecycle />}
                        {index === 3 && <FaAward />}
                      </div>
                      <span className="text-sm font-medium text-gray-700">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.button
                    className="primary-btn flex-1 flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      handleClose();
                      window.location.hash = '#contact';
                    }}
                  >
                    <FaHeart />
                    Request Quote
                  </motion.button>
                  <motion.button
                    className="glass-effect border border-green-200 text-green-700 font-medium px-6 py-3 rounded-full hover:bg-green-50 transition-colors flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaGlobe />
                    Learn More
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProductGrid;
