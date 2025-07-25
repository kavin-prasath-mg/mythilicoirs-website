import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import Banner1JPG from "../../assets/banner1.jpg";
import Banner2JPG from "../../assets/banner2.jpg";
import Banner3JPG from "../../assets/banner3.jpg";

const bannerImages = [Banner1JPG, Banner2JPG, Banner3JPG];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + bannerImages.length) % bannerImages.length);
  };

  return (
    <>
      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        .animation-delay-300 {
          animation-delay: 0.3s;
          opacity: 0;
        }
        .animation-delay-600 {
          animation-delay: 0.6s;
          opacity: 0;
        }
        .animation-delay-900 {
          animation-delay: 0.9s;
          opacity: 0;
        }
        .animation-delay-1200 {
          animation-delay: 1.2s;
          opacity: 0;
        }
      `}</style>
      
      <section className="relative w-full h-screen overflow-hidden" id="hero">
        {/* Background Slider */}
        <div className="absolute inset-0">
          {bannerImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                index === currentSlide
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-105'
              }`}
            >
              <img
                src={image}
                alt={`Mythili Coirs Banner ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-emerald-900/50"></div>
            </div>
          ))}
        </div>

        {/* Floating Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-10 w-32 h-32 bg-emerald-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-teal-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-white/5 rounded-full blur-2xl animate-pulse delay-2000"></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4 sm:px-6 lg:px-8 pt-20">
          <div className={`max-w-4xl mx-auto transform transition-all duration-1000 delay-500 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            
            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              <span className="block mb-2 animate-fade-in-up">PREMIUM</span>
              <span className="block bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-300 bg-clip-text text-transparent animate-fade-in-up animation-delay-300">
                COIR PRODUCTS
              </span>
            </h1>

            {/* Simple Subtitle */}
            <p className="text-xl sm:text-2xl text-gray-200 font-light mb-12 animate-fade-in-up animation-delay-600">
              Sustainable solutions for modern agriculture
            </p>

            {/* Single CTA Button */}
            <div className="animate-fade-in-up animation-delay-900">
              <button 
                onClick={() => document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' })}
                className="group bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-4 rounded-lg font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3 mx-auto"
              >
                Explore Products
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 lg:left-8 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 lg:p-4 rounded-full transition-all duration-300 hover:scale-110 z-20 group"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6 group-hover:-translate-x-0.5 transition-transform duration-200" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 lg:right-8 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 lg:p-4 rounded-full transition-all duration-300 hover:scale-110 z-20 group"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6 group-hover:translate-x-0.5 transition-transform duration-200" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 lg:bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {bannerImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-white scale-125 shadow-lg'
                  : 'bg-white/50 hover:bg-white/75 hover:scale-110'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Hero;