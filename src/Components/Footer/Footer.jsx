import React from 'react';
import { motion } from 'framer-motion';
import { FaLeaf, FaSeedling, FaRecycle, FaHeart, FaEnvelope, FaPhone, FaMapMarkerAlt, FaGlobe, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Logo from '../../assets/Logo.jpg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    'Our Products': [
      { name: 'Coir Pith', href: '#products' },
      { name: 'Coir Blocks', href: '#products' },
      { name: 'Natural Fiber', href: '#products' },
      { name: 'Eco Solutions', href: '#products' }
    ],
    'Company': [
      { name: 'About Us', href: '#about' },
      { name: 'Our Story', href: '#about' },
      { name: 'Gallery', href: '#gallery' },
      { name: 'Contact', href: '#contact' }
    ]
  };

  const socialLinks = [
    { icon: <FaFacebook />, href: '#', color: 'hover:text-blue-400' },
    { icon: <FaTwitter />, href: '#', color: 'hover:text-blue-300' },
    { icon: <FaInstagram />, href: '#', color: 'hover:text-pink-400' },
    { icon: <FaLinkedin />, href: '#', color: 'hover:text-blue-500' }
  ];

  return (
    <footer className="bg-gradient-to-br from-green-900 via-green-800 to-green-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-green-400"
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
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          >
            <FaLeaf className="w-4 h-4" />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <motion.img 
                src={Logo} 
                alt="Mythili Coirs Logo" 
                className="w-12 h-12 rounded-full object-cover"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              />
              <div>
                <h3 className="text-2xl font-bold text-green-200" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Mythili Coirs
                </h3>
                <div className="flex items-center gap-1 text-xs text-green-300">
                  <FaLeaf className="w-3 h-3" />
                  <span>Sustainable Future</span>
                </div>
              </div>
            </div>
            
            <p className="text-green-100 leading-relaxed">
              Crafting premium coir products with a commitment to sustainability and environmental responsibility since 2020.
            </p>

            <div className="flex items-center gap-2 text-green-200">
              <FaHeart className="text-red-400 animate-pulse" />
              <span className="text-sm">Made with love for nature</span>
            </div>
          </motion.div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h4 className="text-lg font-semibold text-green-200 mb-4 flex items-center gap-2">
                <FaSeedling className="text-green-400" />
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <motion.li 
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <a 
                      href={link.href} 
                      className="text-green-100 hover:text-green-300 transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 bg-green-400 rounded-full group-hover:w-2 transition-all duration-300"></span>
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h4 className="text-lg font-semibold text-green-200 mb-4 flex items-center gap-2">
              <FaGlobe className="text-green-400" />
              Get In Touch
            </h4>
            
            <div className="space-y-4">
              {[
                { icon: <FaMapMarkerAlt />, text: "Coimbatore, Tamil Nadu", color: "text-red-400" },
                { icon: <FaEnvelope />, text: "info@mythilicoirs.in", href: "mailto:info@mythilicoirs.in", color: "text-blue-400" },
                { icon: <FaPhone />, text: "+91 9585133442", href: "tel:+919585133442", color: "text-green-400" }
              ].map((contact, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center gap-3 group"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className={`${contact.color} group-hover:scale-110 transition-transform duration-300`}>
                    {contact.icon}
                  </span>
                  {contact.href ? (
                    <a href={contact.href} className="text-green-100 hover:text-green-300 transition-colors duration-300">
                      {contact.text}
                    </a>
                  ) : (
                    <span className="text-green-100">{contact.text}</span>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-4">
              <h5 className="text-green-200 mb-3 text-sm font-medium">Follow Us</h5>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className={`text-green-100 ${social.color} transition-colors duration-300 p-2 bg-green-800/30 rounded-full`}
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="h-px bg-gradient-to-r from-transparent via-green-400 to-transparent mb-8"
        />

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <div className="flex items-center gap-4 text-green-200 text-sm">
            <span>&copy; {currentYear} Mythili Coirs. All rights reserved.</span>
            <div className="flex items-center gap-2">
              <FaRecycle className="text-green-400 animate-spin" style={{ animationDuration: '3s' }} />
              <span>Eco-Certified</span>
            </div>
          </div>

          <div className="flex items-center gap-6 text-green-200 text-sm">
            <motion.a 
              href="#" 
              className="hover:text-green-300 transition-colors duration-300"
              whileHover={{ y: -2 }}
            >
              Privacy Policy
            </motion.a>
            <motion.a 
              href="#" 
              className="hover:text-green-300 transition-colors duration-300"
              whileHover={{ y: -2 }}
            >
              Terms of Service
            </motion.a>
            <motion.a 
              href="#" 
              className="hover:text-green-300 transition-colors duration-300"
              whileHover={{ y: -2 }}
            >
              Sustainability Report
            </motion.a>
          </div>
        </motion.div>

        {/* Eco Message */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-8 pt-8 border-t border-green-700/30"
        >
          <div className="inline-flex items-center gap-2 bg-green-800/30 px-6 py-3 rounded-full">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <FaLeaf className="text-green-400" />
            </motion.div>
            <span className="text-green-200 text-sm font-medium">
              Together, we're building a greener tomorrow
            </span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <FaHeart className="text-red-400" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
  
  export default Footer;
  
