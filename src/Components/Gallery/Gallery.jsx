import React from "react";
import img1 from "../../assets/images/img1.jpg";
import img2 from "../../assets/images/img2.jpg";
import img3 from "../../assets/images/img3.jpg";
import img4 from "../../assets/images/img4.jpg";
import img5 from "../../assets/images/img5.jpg";
import img6 from "../../assets/images/img6.jpg";
import img7 from "../../assets/images/img7.png";
import img8 from "../../assets/images/img8.png";

const Gallery = () => {
  const images = [
    img1,img2,img3,img4,img5,img6,img7,img8
  ];

  return (
    <div id="gallery" className="container mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Gallery
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((image, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <img
              src={image}
              alt={`Gallery item ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
