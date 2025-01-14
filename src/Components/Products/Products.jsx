import React, { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import PRODUCT1 from "../../assets/product1.jpg";
import PRODUCT2 from "../../assets/product2.png";
import PRODUCT3 from "../../assets/product3.jpg";
import img7 from "../../assets/images/img7.png";

const products = [
  {
    id: 1,
    name: "Premium Coir Pith",
    shortDescription: "High-quality coir pith, perfect for soil conditioning.",
    detailedDescription:
      "Retains moisture efficiently, ideal for horticulture and agriculture.",
    image: PRODUCT1,
  },
  {
    id: 2,
    name: "Eco Coir Blocks",
    shortDescription: "Sustainable and eco-friendly coir blocks.",
    detailedDescription: "Great for reducing water usage in plantations.",
    image: PRODUCT2,
  },
  {
    id: 3,
    name: "Natural Fibre Pale",
    shortDescription: "Organic mulch for garden care.",
    detailedDescription: "Provides weed control and enriches soil quality.",
    image: PRODUCT3,
  },
  {
    id: 4,
    name: "Compact Coir Bricks",
    shortDescription: "Compact and lightweight for easy storage.",
    detailedDescription:
      "Expands quickly when hydrated, suitable for all crops.",
    image: img7,
  },
];

const ProductGrid = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-out",
      delay: 100,
    });
  }, []);

  const handleClose = () => {
    setSelectedProduct(null); // Close modal
  };

  return (
    <div id="products" className="container mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            data-aos="fade-up"
            onClick={() => setSelectedProduct(product)}
            className="bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-xl cursor-pointer transform transition-all duration-300 hover:scale-105 hover:bg-gray-200"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-md mb-4 transform transition-transform duration-300 hover:scale-110"
            />
            <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
            <p className="text-gray-600 mt-2">{product.shortDescription}</p>
          </div>
        ))}
      </div>

      {/* Pop-Up Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={handleClose}
        >
          <div
            onClick={(e) => e.stopPropagation()} // Prevent modal close on content click
            className="bg-white p-6 rounded-lg shadow-lg transform transition-all duration-500 animate-slide-in"
          >
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              &times;
            </button>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-full h-64 object-cover rounded-md mb-4"
            />
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              {selectedProduct.name}
            </h3>
            <p className="text-gray-600 mb-4">{selectedProduct.shortDescription}</p>
            <p className="text-sm text-gray-500 italic">
              {selectedProduct.detailedDescription}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;
