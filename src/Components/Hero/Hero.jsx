import React from "react";
import Banner1JPG from "../../assets/banner1.jpg";
import Banner2JPG from "../../assets/banner2.jpg";
import Banner3JPG from "../../assets/banner3.jpg";
import ProductGrid from "../Products/Products";

const Hero = () => {
  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
        {/* Image Slider */}
        <div className="absolute inset-0 w-full h-full">
          <div className="flex animate-slider">
            <div className="flex-shrink-0 w-full h-full">
              <img
                src={Banner1JPG}
                alt="Slide 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-shrink-0 w-full h-full">
              <img
                src={Banner2JPG}
                alt="Slide 2"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-shrink-0 w-full h-full">
              <img
                src={Banner3JPG}
                alt="Slide 3"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Text Section */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4 bg-black bg-opacity-50">
          <h1 className="text-4xl md:text-6xl font-bold">PREMIUM COIR PRODUCTS</h1>
          <p className="mt-4 text-lg md:text-xl">
            Crafting Sustainables with Solutions since 2020.
          </p>
          <button className="mt-6 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium text-lg rounded "  onClick={() => window.location.hash = '#products'}>
            Explore Products
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
