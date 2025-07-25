import React, { useEffect, useState, useRef } from "react";
import { Leaf, Recycle, Lightbulb, Factory } from "lucide-react";

const Sustainability = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentRef = sectionRef.current;
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

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const sustainabilityEfforts = [
    {
      icon: Leaf,
      title: "Eco-Friendly Materials",
      description: "We exclusively use natural, renewable, and biodegradable materials, ensuring our products have minimal environmental impact from sourcing to disposal. Our commitment starts at the root."
    },
    {
      icon: Recycle,
      title: "Sustainable Processes",
      description: "Our manufacturing processes are meticulously designed to conserve resources, minimize waste, and operate with high energy efficiency. We continually innovate for greener production methods."
    },
    {
      icon: Lightbulb,
      title: "Reducing Carbon Footprint",
      description: "By optimizing energy consumption, investing in renewable energy sources, and reducing emissions, we are actively working towards a significantly lower carbon footprint for a healthier planet."
    },
    {
      icon: Factory,
      title: "Responsible Manufacturing",
      description: "Beyond just materials, we ensure ethical labor practices, fair wages, and safe working conditions across our supply chain, fostering a positive impact on both people and planet."
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-16 lg:py-24 relative overflow-hidden"
      id="sustainability"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-300 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 rounded-full px-4 py-2 mb-6">
            <Recycle className="w-4 h-4" />
            <span className="font-medium text-sm">Our Commitment</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-emerald-600 relative">
              Sustainability
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full"></div>
            </span> Efforts
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            At Mythili Coirs, we are deeply committed to protecting the environment and ensuring sustainable practices throughout all our operations. Our mission is to create a greener planet for future generations.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {sustainabilityEfforts.map((effort, index) => {
            const Icon = effort.icon;
            return (
              <div 
                key={index} 
                className={`group bg-white shadow-lg hover:shadow-2xl rounded-2xl p-6 lg:p-8 transform transition-all duration-500 hover:scale-105 border border-gray-100 ${
                  isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${500 + index * 150}ms` }}
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-emerald-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-emerald-200 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-emerald-600 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {effort.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {effort.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className={`text-center transform transition-all duration-1000 delay-1000 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="bg-gradient-to-r from-emerald-600 to-green-700 rounded-3xl p-8 lg:p-12 text-white shadow-2xl">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Join Us in Making a Difference
            </h3>
            <p className="text-lg lg:text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
              Together, we can create a sustainable world. Support our efforts by choosing eco-friendly products and practices.
            </p>
            <button
              onClick={() => {
                const element = document.querySelector('#products');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="bg-white text-emerald-600 px-8 py-4 rounded-full shadow-lg hover:bg-gray-50 transform hover:scale-105 transition-all duration-300 font-bold text-lg"
            >
              Explore Our Products
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;