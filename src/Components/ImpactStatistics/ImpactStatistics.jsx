import React, { useEffect, useState, useRef } from "react";
import { Package, Leaf, Truck, ShoppingCart, TrendingUp } from "lucide-react";

const ImpactStatistics = () => {
  const [counts, setCounts] = useState({
    fiberBales: 0,
    coirPith: 0,
    huskProcessed: 0,
    ordersCompleted: 0,
  });
  
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef(null);

  const targetNumbers = {
    fiberBales: 12500,
    coirPith: 8750,
    huskProcessed: 25000,
    ordersCompleted: 1250,
  };

  const startCounting = (finalValue, key) => {
    let startValue = 0;
    const duration = 2500;
    const increment = finalValue / (duration / 16);
    
    const counter = setInterval(() => {
      startValue += increment;
      if (startValue >= finalValue) {
        startValue = finalValue;
        clearInterval(counter);
      }
      
      setCounts(prev => ({
        ...prev,
        [key]: Math.floor(startValue)
      }));
    }, 16);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          Object.keys(targetNumbers).forEach(key => {
            startCounting(targetNumbers[key], key);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const formatNumber = (num) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(num >= 10000 ? 0 : 1) + 'K';
    }
    return num.toLocaleString();
  };

  const stats = [
    {
      id: 'fiberBales',
      label: 'Fiber Bales Produced',
      value: counts.fiberBales,
      unit: 'kg',
      icon: Package,
      gradient: 'from-blue-500 to-blue-600',
      bgGradient: 'from-blue-50 to-blue-100',
      iconBg: 'bg-blue-500'
    },
    {
      id: 'coirPith',
      label: 'Coir Pith Processed',
      value: counts.coirPith,
      unit: 'kg',
      icon: Leaf,
      gradient: 'from-emerald-500 to-emerald-600',
      bgGradient: 'from-emerald-50 to-emerald-100',
      iconBg: 'bg-emerald-500'
    },
    {
      id: 'huskProcessed',
      label: 'Coconut Husk Utilized',
      value: counts.huskProcessed,
      unit: 'units',
      icon: Truck,
      gradient: 'from-amber-500 to-orange-500',
      bgGradient: 'from-amber-50 to-orange-100',
      iconBg: 'bg-amber-500'
    },
    {
      id: 'ordersCompleted',
      label: 'Orders Delivered',
      value: counts.ordersCompleted,
      unit: '',
      icon: ShoppingCart,
      gradient: 'from-purple-500 to-purple-600',
      bgGradient: 'from-purple-50 to-purple-100',
      iconBg: 'bg-purple-500'
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 rounded-full px-4 py-2 mb-6">
            <TrendingUp className="w-4 h-4" />
            <span className="font-medium text-sm">Our Impact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Impact in <span className="text-emerald-600 relative">
              Numbers
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full"></div>
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Sustainable coir production that makes a difference in communities and environment worldwide
          </p>
        </div>

        {/* Stats Grid */}
        <div ref={statsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            
            return (
              <div
                key={stat.id}
                className={`group relative bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-2xl border border-gray-100 hover:border-gray-200 transition-all duration-500 transform hover:scale-105 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ 
                  animationDelay: `${index * 150}ms`,
                  transitionDelay: `${index * 150}ms`
                }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-3 lg:p-4 rounded-xl ${stat.iconBg} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-6 w-6 lg:h-8 lg:w-8 text-white" />
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                  
                  {/* Numbers */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-baseline space-x-2">
                      <span className={`text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300 inline-block`}>
                        {formatNumber(stat.value)}
                      </span>
                      {stat.unit && (
                        <span className="text-sm lg:text-base text-gray-500 font-medium">
                          {stat.unit}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  {/* Label */}
                  <p className="text-sm lg:text-base text-gray-700 font-semibold leading-tight group-hover:text-gray-800 transition-colors duration-300">
                    {stat.label}
                  </p>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <Icon className="w-8 h-8 lg:w-12 lg:h-12 text-gray-400" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Achievement Banner */}
        {/* <div className={`mt-16 bg-gradient-to-r from-emerald-600 via-emerald-700 to-teal-600 rounded-2xl p-8 lg:p-12 text-white shadow-2xl relative overflow-hidden ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`} style={{ transitionDelay: '800ms' }}> */}
          {/* Background Pattern */}
          {/* <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-teal-300 rounded-full blur-2xl"></div>
          </div> */}
          
          {/* <div className="relative z-10 text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white/20 backdrop-blur-sm rounded-full">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Serving 500+ Satisfied Customers 
            </h3>
            <p className="text-lg lg:text-xl text-emerald-100 max-w-2xl mx-auto">
              Our commitment to quality and sustainability has earned the trust of customers worldwide
            </p>
          </div> */}
        {/* </div> */}
      </div>
    </section>
  );
};

export default ImpactStatistics;