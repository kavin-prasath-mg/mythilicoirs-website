import React from 'react';
import { Leaf, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300 rounded-full blur-3xl"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center justify-center md:justify-start gap-3 group">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    <Leaf className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-emerald-500 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Mythili Coirs
                </h3>
              </div>
              
              <p className="text-gray-300 text-base lg:text-lg leading-relaxed max-w-md mx-auto md:mx-0 text-center md:text-left">
                Pioneering sustainable coir solutions with innovation and excellence. 
                Committed to environmental stewardship and premium quality products 
                that meet global standards.
              </p>

              {/* Future Social Media Section - Currently Commented */}
              {/* 
              <div className="flex justify-center md:justify-start space-x-4">
                <a href="#" className="group p-3 bg-gray-800 rounded-full hover:bg-emerald-600 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-emerald-600/25">
                  <Facebook className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                </a>
                <a href="#" className="group p-3 bg-gray-800 rounded-full hover:bg-emerald-600 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-emerald-600/25">
                  <Twitter className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                </a>
                <a href="#" className="group p-3 bg-gray-800 rounded-full hover:bg-emerald-600 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-emerald-600/25">
                  <Instagram className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                </a>
                <a href="#" className="group p-3 bg-gray-800 rounded-full hover:bg-emerald-600 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-emerald-600/25">
                  <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                </a>
              </div>
              */}
            </div>

            {/* Quick Links */}
            <div className="text-center md:text-left">
              <h4 className="font-bold text-xl text-white mb-6 relative">
                Quick Links
                <div className="absolute -bottom-2 left-1/2 md:left-0 transform -translate-x-1/2 md:translate-x-0 w-12 h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full"></div>
              </h4>
              <ul className="space-y-4">
                {[
                  { name: 'Home', href: '#hero' },
                  { name: 'About Us', href: '#about' },
                  { name: 'Products', href: '#products' },
                  { name: 'Gallery', href: '#gallery' },
                  { name: 'Contact Us', href: '#contact' }
                ].map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="text-gray-300 hover:text-emerald-400 transition-all duration-300 text-sm lg:text-base hover:translate-x-1 inline-block transform group"
                    >
                      <span className="relative">
                        {link.name}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="text-center md:text-left">
              <h4 className="font-bold text-xl text-white mb-6 relative">
                Contact Info
                <div className="absolute -bottom-2 left-1/2 md:left-0 transform -translate-x-1/2 md:translate-x-0 w-12 h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full"></div>
              </h4>
              <div className="space-y-5">
                <div className="group flex flex-col sm:flex-row items-center md:items-start gap-3">
                  <div className="flex-shrink-0 p-2 bg-gray-800 rounded-lg group-hover:bg-emerald-600 transition-colors duration-300">
                    <Mail className="w-5 h-5 text-emerald-400 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="text-center md:text-left">
                    <p className="text-gray-400 text-sm font-medium mb-1">Email</p>
                    <a 
                      href="mailto:kavinprasath.govindasamy15@gmail.com"
                      className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 text-sm break-all"
                    >
                      kavinprasath.govindasamy15@gmail.com
                    </a>
                  </div>
                </div>

                <div className="group flex flex-col sm:flex-row items-center md:items-start gap-3">
                  <div className="flex-shrink-0 p-2 bg-gray-800 rounded-lg group-hover:bg-emerald-600 transition-colors duration-300">
                    <Phone className="w-5 h-5 text-emerald-400 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="text-center md:text-left">
                    <p className="text-gray-400 text-sm font-medium mb-1">Phone</p>
                    <a 
                      href="tel:+1234567890"
                      className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 text-sm"
                    >
                      +1 234 567 890
                    </a>
                  </div>
                </div>

                <div className="group flex flex-col sm:flex-row items-center md:items-start gap-3">
                  <div className="flex-shrink-0 p-2 bg-gray-800 rounded-lg group-hover:bg-emerald-600 transition-colors duration-300">
                    <MapPin className="w-5 h-5 text-emerald-400 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="text-center md:text-left">
                    <p className="text-gray-400 text-sm font-medium mb-1">Location</p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Coimbatore, Tamil Nadu, India
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="mt-16 pt-8 border-t border-gray-700">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-sm text-gray-400 text-center md:text-left">
                &copy; {new Date().getFullYear()} Mythili Coirs. All rights reserved. 
                <span className="block md:inline md:ml-2 mt-1 md:mt-0">
                  Crafted with sustainability in mind.
                </span>
              </p>

              {/* Back to Top Button */}
              {/* <button
                onClick={scrollToTop}
                className="group flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-emerald-600 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-emerald-600/25"
              >
                <span className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300">
                  Back to Top
                </span>
                <ArrowUp className="w-4 h-4 text-gray-300 group-hover:text-white transition-all duration-300 group-hover:-translate-y-1" />
              </button> */}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600"></div>
    </footer>
  );
};

export default Footer;