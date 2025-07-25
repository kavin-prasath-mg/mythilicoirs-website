import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NavLinks = [
  { id: 1, title: "Home", link: "#hero" },
  { id: 2, title: "About", link: "#about" },
  { id: 3, title: "Products", link: "#products" },
  { id: 4, title: "Gallery", link: "#gallery" },
  { id: 5, title: "Contact", link: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = NavLinks.map(link => link.link.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (link) => {
    setIsOpen(false);
    const element = document.querySelector(link);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-lg py-3' 
          : 'bg-white/95 backdrop-blur-md py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            {/* Logo */}
            <div 
              className="flex items-center gap-3 cursor-pointer" 
              onClick={() => handleNavClick('#hero')}
            >
              {/* Replace this with your actual logo image */}
              <img 
                src="public/Logo.jpg" 
                alt="Mythili Coirs Logo" 
                className="w-10 h-10 sm:w-12 sm:h-12 object-contain rounded-full"
              />
              <div>
                <h1 className="text-xl lg:text-2xl font-bold text-gray-900">
                  Mythili Coirs
                </h1>
                <p className="text-xs lg:text-sm font-medium text-emerald-600">
                  Natural Solutions
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {NavLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.link)}
                  className={`text-sm font-medium transition-colors duration-300 hover:text-emerald-600 ${
                    activeSection === link.link.substring(1)
                      ? 'text-emerald-600' 
                      : 'text-gray-700'
                  }`}
                >
                  {link.title}
                </button>
              ))}
            </div>

            {/* CTA Button - Desktop */}
            <div className="hidden lg:block">
              <button 
                onClick={() => handleNavClick('#contact')}
                className="bg-emerald-600 text-white px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-emerald-700 transition-colors duration-300"
              >
                Get Quote
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-emerald-600 transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className="bg-white border-t border-gray-100 shadow-lg mx-4 mt-4 rounded-xl">
            <div className="py-2">
              {NavLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.link)}
                  className={`w-full text-left px-6 py-4 font-medium transition-colors duration-200 ${
                    activeSection === link.link.substring(1) 
                      ? 'text-emerald-600 bg-emerald-50' 
                      : 'text-gray-700 hover:text-emerald-600 hover:bg-gray-50'
                  }`}
                >
                  {link.title}
                </button>
              ))}
              
              {/* Mobile CTA */}
              <div className="px-6 py-4">
                <button 
                  onClick={() => handleNavClick('#contact')}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg font-semibold transition-colors duration-200"
                >
                  Get Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;