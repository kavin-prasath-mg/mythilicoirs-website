import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../../assets/Logo.jpg";
import { FaBars, FaTimes, FaLeaf, FaSeedling } from "react-icons/fa";

const NavLinks = [
  { id: 1, title: "Home", link: "#", icon: <FaSeedling /> },
  { id: 2, title: "About", link: "#about", icon: <FaLeaf /> },
  { id: 3, title: "Products", link: "#products", icon: <FaSeedling /> },
  { id: 4, title: "Gallery", link: "#gallery", icon: <FaLeaf /> },
  { id: 5, title: "Contact", link: "#contact", icon: <FaSeedling /> },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-green-100' 
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo section */}
          <motion.div 
            className="flex items-center gap-3 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="relative"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <img src={Logo} alt="logo" className="w-12 h-12 rounded-full object-cover shadow-lg" />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
            </motion.div>
            <div>
              <span className={`text-2xl font-bold transition-colors duration-300 ${
                scrolled ? 'text-green-800' : 'text-white'
              }`} style={{ fontFamily: 'Playfair Display, serif' }}>
                Mythili Coirs
              </span>
              <div className="flex items-center gap-1 text-xs text-green-600">
                <FaLeaf className="w-3 h-3" />
                <span>Eco-Friendly</span>
              </div>
            </div>
          </motion.div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {NavLinks.map((link, index) => (
              <motion.a
                key={link.id}
                href={link.link}
                className={`nav-link flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 hover:bg-green-50 ${
                  scrolled ? 'text-gray-700 hover:text-green-600' : 'text-white hover:text-green-200'
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  className="text-green-500"
                  whileHover={{ rotate: 15, scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                >
                  {link.icon}
                </motion.span>
                {link.title}
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div 
            className="hidden lg:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.button 
              className="primary-btn flex items-center gap-2 eco-pulse"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.hash = '#contact'}
            >
              <FaLeaf className="w-4 h-4" />
              Get Eco Quote
            </motion.button>
          </motion.div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <motion.button 
              onClick={handleOpen}
              className={`p-2 rounded-full transition-colors duration-300 ${
                scrolled ? 'text-gray-700 hover:bg-green-50' : 'text-white hover:bg-white/10'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                animate={{ rotate: open ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {open ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white/95 backdrop-blur-md border-t border-green-100"
            >
              <div className="container mx-auto px-4 py-6">
                <motion.ul className="space-y-4">
                  {NavLinks.map((link, index) => (
                    <motion.li
                      key={link.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <motion.a
                        href={link.link}
                        className="flex items-center gap-3 p-4 rounded-xl text-gray-700 hover:bg-green-50 hover:text-green-600 transition-all duration-300"
                        onClick={() => setOpen(false)}
                        whileHover={{ x: 10 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <motion.span
                          className="text-green-500 text-lg"
                          whileHover={{ rotate: 15, scale: 1.2 }}
                        >
                          {link.icon}
                        </motion.span>
                        <span className="text-lg font-medium">{link.title}</span>
                      </motion.a>
                    </motion.li>
                  ))}
                </motion.ul>
                
                <motion.div 
                  className="mt-6 pt-6 border-t border-green-100"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                >
                  <motion.button 
                    className="primary-btn w-full flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setOpen(false);
                      window.location.hash = '#contact';
                    }}
                  >
                    <FaLeaf className="w-4 h-4" />
                    Get Eco Quote
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating nature elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-green-300 opacity-20"
              style={{
                left: `${20 + i * 30}%`,
                top: `${10 + i * 20}%`,
              }}
              animate={{
                y: [0, -10, 0],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <FaLeaf className="w-4 h-4" />
            </motion.div>
          ))}
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
