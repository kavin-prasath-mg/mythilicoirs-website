import React, { useState, useEffect, useRef } from "react";
import { X, Star, Leaf, ArrowRight } from "lucide-react";
import PRODUCT1 from "../../assets/product1.jpg";
import PRODUCT2 from "../../assets/product2.png";
import PRODUCT3 from "../../assets/product3.jpg";

const products = [
  {
    id: 1,
    name: "Premium Coir Pith",
    description: "High-quality coir pith for soil conditioning and water retention.",
    image: PRODUCT1,
    rating: 4.8
  },
  {
    id: 2,
    name: "Eco Coir Blocks",
    description: "Sustainable compressed coir blocks that expand 8x when hydrated.",
    image: PRODUCT2,
    rating: 4.9
  },
  {
    id: 3,
    name: "Natural Fibre Bale",
    description: "Organic mulch solution for superior garden care.",
    image: PRODUCT3,
    rating: 4.7
  }
];

const ProductGrid = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="products" 
      className="py-16 lg:py-24 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 rounded-full px-4 py-2 mb-6">
            <Leaf className="w-4 h-4" />
            <span className="font-medium text-sm">Our Products</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Premium <span className="text-emerald-600 relative">
              Coir Products
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full"></div>
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our range of sustainable, high-quality coir products designed for modern agriculture and gardening
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 mb-16">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transform transition-all duration-500 hover:scale-105 overflow-hidden border border-gray-100 hover:border-gray-200 ${
                isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${500 + index * 200}ms` }}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-56 lg:h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Rating */}
                {/* <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-2 flex items-center gap-1 shadow-md">
                  <Star className="w-4 h-4 text-amber-400 fill-current" />
                  <span className="text-sm font-semibold text-gray-800">{product.rating}</span>
                </div> */}
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8">
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors duration-300">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>
                
                {/* Action Button */}
                <button 
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full bg-emerald-600 text-white py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 group/btn"
                >
                  Get Quote
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        {/* <div className={`text-center transform transition-all duration-1000 delay-700 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}> */}
          {/* <div className="bg-gradient-to-r from-emerald-600 via-emerald-700 to-teal-600 rounded-2xl p-8 lg:p-12 text-white shadow-2xl relative overflow-hidden"> */}
            {/* Background Pattern */}
            {/* <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-teal-300 rounded-full blur-2xl"></div>
            </div> */}
            
            {/* <div className="relative z-10">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">Need Custom Solutions?</h3>
              <p className="text-lg lg:text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
                We provide tailored coir products to meet your specific requirements and agricultural needs
              </p>
              <button 
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-emerald-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center gap-2 mx-auto"
              >
                Contact Our Experts
                <ArrowRight className="w-5 h-5" />
              </button>
            </div> */}
          {/* </div> */}
        {/* </div> */}
      </div>
    </section>
  );
};

export default ProductGrid;