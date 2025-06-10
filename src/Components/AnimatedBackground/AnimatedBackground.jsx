import React from 'react';
import { motion } from 'framer-motion';
import { FaLeaf, FaSeedling, FaRecycle } from 'react-icons/fa';

const AnimatedBackground = ({ children, variant = 'default' }) => {
  const variants = {
    default: {
      particles: 15,
      colors: ['text-green-400', 'text-green-300', 'text-emerald-300'],
      icons: [<FaLeaf key="leaf" />, <FaSeedling key="seedling" />, <FaRecycle key="recycle" />]
    },
    dense: {
      particles: 25,
      colors: ['text-green-500', 'text-green-400', 'text-emerald-400'],
      icons: [<FaLeaf key="leaf" />, <FaSeedling key="seedling" />]
    },
    minimal: {
      particles: 8,
      colors: ['text-green-200', 'text-green-100'],
      icons: [<FaLeaf key="leaf" />]
    }
  };

  const config = variants[variant];

  return (
    <div className="relative">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        {[...Array(config.particles)].map((_, i) => {
          const Icon = config.icons[i % config.icons.length];
          const colorClass = config.colors[i % config.colors.length];
          
          return (
            <motion.div
              key={i}
              className={`absolute ${colorClass}`}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, Math.random() > 0.5 ? 15 : -15, 0],
                rotate: [0, 180, 360],
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 8 + Math.random() * 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 5,
              }}
            >
              <div className="w-4 h-4 md:w-6 md:h-6">
                {Icon}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Floating gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute rounded-full blur-xl opacity-20"
            style={{
              width: `${100 + Math.random() * 200}px`,
              height: `${100 + Math.random() * 200}px`,
              background: `linear-gradient(45deg, rgb(34 197 94), rgb(16 185 129))`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, 30, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 12 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default AnimatedBackground;
