import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaLeaf, FaRecycle, FaSeedling, FaGlobe, FaTruck, FaAward, FaHeart, FaTree } from "react-icons/fa";

const ImpactStatistics = () => {
  const [statistics, setStatistics] = useState({
    fiberBaleDispatched: 0,
    coirPithQuantity: 0,
    huskConsumed: 0,
    ordersDispatched: 0,
  });

  // Mock data for demonstration - replace with actual API call
  const mockStatistics = {
    fiberBaleDispatched: 25000,
    coirPithQuantity: 50000,
    huskConsumed: 100000,
    ordersDispatched: 2500,
  };

  const fetchStatistics = async () => {
    try {
      // Simulating API call - replace with actual endpoint
      // const response = await fetch("http://localhost:5000/statistics");
      // const data = await response.json();
      
      // Using mock data for now
      setTimeout(() => {
        setStatistics(mockStatistics);
      }, 500);
    } catch (error) {
      console.error("Error fetching statistics:", error);
      // Fallback to mock data
      setStatistics(mockStatistics);
    }
  };

  useEffect(() => {
    fetchStatistics();
  }, []);

  const statsData = [
    {
      value: statistics.fiberBaleDispatched,
      label: "Fiber Bales Dispatched",
      unit: "kg",
      icon: <FaLeaf />,
      color: "green",
      gradient: "from-green-400 to-green-600",
      description: "Premium quality fiber delivered"
    },
    {
      value: statistics.coirPithQuantity,
      label: "Coir Pith Produced",
      unit: "kg",
      icon: <FaSeedling />,
      color: "emerald",
      gradient: "from-emerald-400 to-emerald-600",
      description: "Sustainable soil enhancement"
    },
    {
      value: statistics.huskConsumed,
      label: "Coconut Husks Processed",
      unit: "units",
      icon: <FaRecycle />,
      color: "teal",
      gradient: "from-teal-400 to-teal-600",
      description: "Waste turned into value"
    },
    {
      value: statistics.ordersDispatched,
      label: "Happy Customers Served",
      unit: "",
      icon: <FaHeart />,
      color: "rose",
      gradient: "from-rose-400 to-rose-600",
      description: "Trust and satisfaction delivered"
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: { scale: 1, rotate: 0 },
  };

  const numberVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  // Animated counter
  const AnimatedCounter = ({ target, duration = 2000 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (target === 0) return;
      
      const increment = target / (duration / 50);
      const timer = setInterval(() => {
        setCount(prev => {
          if (prev + increment >= target) {
            clearInterval(timer);
            return target;
          }
          return prev + increment;
        });
      }, 50);

      return () => clearInterval(timer);
    }, [target, duration]);

    return Math.floor(count).toLocaleString();
  };

  return (
    <section className="py-20 relative overflow-hidden eco-gradient">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-green-600"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              rotate: [0, 360],
              scale: [1, 1.4, 1],
            }}
            transition={{
              duration: 12 + Math.random() * 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 8,
            }}
          >
            <FaTree className="w-12 h-12" />
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
            <FaGlobe />
            Our Environmental Impact
          </span>
          <h2 className="section-title mb-6">Making a Difference</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Every number tells a story of sustainability, innovation, and our commitment to a greener planet.
          </p>
        </motion.div>

        {/* Statistics Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
        >
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              className="relative group"
              variants={cardVariants}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Card */}
              <div className="eco-card p-8 text-center h-full relative overflow-hidden">
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
                
                {/* Icon */}
                <motion.div
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${stat.gradient} text-white rounded-2xl mb-6 relative z-10`}
                  variants={iconVariants}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.1, rotate: 10 }}
                >
                  <span className="text-2xl">{stat.icon}</span>
                </motion.div>

                {/* Number */}
                <motion.div
                  className={`text-4xl lg:text-5xl font-bold text-${stat.color}-600 mb-2 relative z-10`}
                  variants={numberVariants}
                  transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                >
                  <AnimatedCounter target={stat.value} />
                  {stat.unit && <span className="text-2xl text-gray-500 ml-1">{stat.unit}</span>}
                </motion.div>

                {/* Label */}
                <h3 className="text-lg font-semibold text-gray-800 mb-2 relative z-10">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 relative z-10">
                  {stat.description}
                </p>

                {/* Hover effect */}
                <motion.div
                  className="absolute inset-0 border-2 border-transparent group-hover:border-green-200 rounded-2xl transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Impact Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-green-800 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Environmental Benefits
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our sustainable practices contribute to a healthier planet through renewable resource utilization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaTree />,
                title: "Carbon Neutral",
                description: "100% renewable coconut waste",
                metric: "Zero Emissions"
              },
              {
                icon: <FaRecycle />,
                title: "Waste Reduction",
                description: "Converting waste to valuable products",
                metric: "95% Efficiency"
              },
              {
                icon: <FaGlobe />,
                title: "Biodegradable",
                description: "All products naturally decompose",
                metric: "100% Natural"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              >
                <motion.div
                  className="inline-flex items-center justify-center w-20 h-20 bg-green-100 text-green-600 rounded-full mb-4 group-hover:bg-green-200 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <span className="text-3xl">{benefit.icon}</span>
                </motion.div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">{benefit.title}</h4>
                <p className="text-gray-600 mb-2">{benefit.description}</p>
                <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  {benefit.metric}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactStatistics;
