import React, { useEffect, useState, useRef } from "react";
import { Leaf, Award, Users, Factory } from "lucide-react";

const About = () => {
  const [isInView, setIsInView] = useState(false);
  const [counters, setCounters] = useState({ years: 0, products: 0, clients: 0 });
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            animateCounters();
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

  const animateCounters = () => {
    const targets = { years: 5, products: 50, clients: 200 };
    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;

    Object.keys(targets).forEach(key => {
      let current = 0;
      const increment = targets[key] / steps;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= targets[key]) {
          current = targets[key];
          clearInterval(timer);
        }
        setCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
      }, stepTime);
    });
  };

  const features = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Eco-Friendly",
      description: "100% sustainable and biodegradable products"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Premium Quality",
      description: "Highest quality standards maintained"
    },
    {
      icon: <Factory className="w-8 h-8" />,
      title: "Modern Facilities",
      description: "5-acre state-of-the-art production facility"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Team",
      description: "Skilled professionals dedicated to excellence"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden"
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
            <span className="font-medium text-sm">About Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-emerald-600 relative">
              Mythili Coirs
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full"></div>
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Where tradition meets innovation to create a sustainable future
          </p>
        </div>

        {/* Main Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          
          {/* Left Column - Content */}
          <div className={`transform transition-all duration-1000 delay-300 ${
            isInView ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
          }`}>
            <div className="space-y-6">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                Our <span className="text-emerald-600">Heritage</span>
              </h3>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Welcome to Mythili Coirs, where tradition blends with innovation 
                to create premium coir products. Founded five years ago, we 
                specialize in producing high-quality coir pith and fiber, 
                sustainably sourced from coconut husks.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                With a focus on eco-friendly practices and advanced technology, 
                we provide reliable, sustainable solutions. Our modern facilities, 
                spanning five acres, ensure top-quality production while upholding 
                our commitment to the environment.
              </p>

              {/* Mission Statement */}
              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-xl border border-emerald-100">
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Award className="w-5 h-5 text-emerald-600" />
                  Our Mission
                </h4>
                <p className="text-gray-700 italic leading-relaxed">
                  "We are dedicated to building a greener future with every product we create, 
                  combining traditional craftsmanship with modern innovation."
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Company Logo & Stats */}
          <div className={`transform transition-all duration-1000 delay-500 ${
            isInView ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
          }`}>
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
              
              {/* Company Logo Display */}
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-8 mb-8 text-center">
                <div className="flex justify-center items-center mb-6">
                  <div className="relative">
                    {/* Replace with your actual logo */}
                    <div className="w-24 h-24  rounded-2xl flex items-center justify-center shadow-xl">
                      <img src ='public/Logo.png' alt="logo"></img>
                    </div>
                    <div className="absolute -top-2 -right-2 bg-amber-500 rounded-full p-2 border-4 border-white shadow-lg">
                      <Award className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Mythili Coirs</h4>
                <p className="text-gray-600">Established Manufacturing Excellence</p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl p-4 border border-emerald-100">
                  <div className="text-2xl lg:text-3xl font-bold text-emerald-600 mb-2">{counters.years}+</div>
                  <div className="text-xs lg:text-sm text-gray-600 font-medium">Years Excellence</div>
                </div>
                <div className="text-center bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 border border-blue-100">
                  <div className="text-2xl lg:text-3xl font-bold text-blue-600 mb-2">{counters.products}+</div>
                  <div className="text-xs lg:text-sm text-gray-600 font-medium">Products</div>
                </div>
                <div className="text-center bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-4 border border-amber-100">
                  <div className="text-2xl lg:text-3xl font-bold text-amber-600 mb-2">{counters.clients}+</div>
                  <div className="text-xs lg:text-sm text-gray-600 font-medium">Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transform transition-all duration-500 hover:scale-105 group ${
                isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${700 + index * 100}ms` }}
            >
              <div className="text-emerald-600 mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;