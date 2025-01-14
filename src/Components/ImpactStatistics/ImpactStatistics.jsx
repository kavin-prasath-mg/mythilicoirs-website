import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ImpactStatistics = () => {
  const [statistics, setStatistics] = useState({
    fiberBaleDispatched: 0,
    coirPithQuantity: 0,
    huskConsumed: 0,
    ordersDispatched: 0,
  });

  const fetchStatistics = async () => {
    try {
      const response = await fetch("http://localhost:5000/statistics"); // Replace with your API endpoint
      const data = await response.json();
      setStatistics(data);
    } catch (error) {
      console.error("Error fetching statistics:", error);
    }
  };

  useEffect(() => {
    fetchStatistics();
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Impact Statistics
        </h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.2 }}
        >
          {/* Statistics Cards */}
          <motion.div
            className="bg-white shadow-md rounded-md p-6"
            variants={cardVariants}
            transition={{ duration: 0.5 }}
          >
            <div className="text-4xl font-bold text-blue-500 mb-2">
              {statistics.fiberBaleDispatched}
            </div>
            <p className="text-gray-700">Fiber Bale Dispatched (kg)</p>
          </motion.div>

          <motion.div
            className="bg-white shadow-md rounded-md p-6"
            variants={cardVariants}
            transition={{ duration: 0.5 }}
          >
            <div className="text-4xl font-bold text-green-500 mb-2">
              {statistics.coirPithQuantity}
            </div>
            <p className="text-gray-700">Coir Pith Quantity (kg)</p>
          </motion.div>

          <motion.div
            className="bg-white shadow-md rounded-md p-6"
            variants={cardVariants}
            transition={{ duration: 0.5 }}
          >
            <div className="text-4xl font-bold text-orange-500 mb-2">
              {statistics.huskConsumed}
            </div>
            <p className="text-gray-700">Husk Consumed (units)</p>
          </motion.div>

          <motion.div
            className="bg-white shadow-md rounded-md p-6"
            variants={cardVariants}
            transition={{ duration: 0.5 }}
          >
            <div className="text-4xl font-bold text-red-500 mb-2">
              {statistics.ordersDispatched}
            </div>
            <p className="text-gray-700">Orders Dispatched</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactStatistics;
