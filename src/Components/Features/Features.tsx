import React from "react";

const Sustainability = () => {
  return (
    <section className="bg-green-50 py-12 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-green-800 text-center mb-8">
          Our Sustainability Efforts
        </h1>

        <p className="text-lg text-gray-700 mb-8 text-center">
          At Coir Company, we are committed to protecting the environment and ensuring sustainable practices in all aspects of our operations. Our mission is to create a greener planet for future generations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Eco-Friendly Materials */}
          <div className="bg-white shadow-lg rounded-lg p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">
              Eco-Friendly Materials
            </h2>
            <p className="text-gray-600">
              We use natural, renewable, and biodegradable materials in our products, ensuring minimal impact on the environment. By sourcing responsibly, we contribute to sustainable ecosystems.
            </p>
          </div>

          {/* Sustainable Processes */}
          <div className="bg-white shadow-lg rounded-lg p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">
              Sustainable Processes
            </h2>
            <p className="text-gray-600">
              Our manufacturing processes are designed to conserve resources and reduce waste. We continuously innovate to find eco-friendly solutions for production and packaging.
            </p>
          </div>

          {/* Reducing Carbon Footprint */}
          <div className="bg-white shadow-lg rounded-lg p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">
              Reducing Carbon Footprint
            </h2>
            <p className="text-gray-600">
              By optimizing energy use, investing in renewable energy, and minimizing emissions, we are actively reducing our carbon footprint and promoting a sustainable future.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <h3 className="text-3xl font-semibold text-green-800 mb-4">
            Join Us in Making a Difference
          </h3>
          <p className="text-gray-700 mb-6">
            Together, we can create a sustainable world. Support our efforts by choosing eco-friendly products and practices.
          </p>
          {/* <a
            href="/products"
            className="bg-green-600 text-white px-6 py-3 rounded-md shadow hover:bg-green-700 transition duration-300"
          >
            Explore Our Products
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default Sustainability;
