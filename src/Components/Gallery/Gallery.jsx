import { useState, useEffect, useRef } from "react";
import { X, ZoomIn, ChevronLeft, ChevronRight, Camera } from "lucide-react";
import img1 from "../../assets/images/img1.jpg";
import img2 from "../../assets/images/img2.jpg";
import img3 from "../../assets/images/img3.jpg";
import img4 from "../../assets/images/img4.jpg";
import img5 from "../../assets/images/img5.jpg";
import img6 from "../../assets/images/img6.jpg";
import img7 from "../../assets/images/img7.png";
import img8 from "../../assets/images/img8.png";

const galleryImages = [
  {
    id: 1,
    src: img1,
    alt: "Coir Processing Facility",
    title: "Modern Processing Unit"
  },
  {
    id: 2,
    src: img2,
    alt: "Coir Products Display",
    title: "Premium Coir Products"
  },
  {
    id: 3,
    src: img3,
    alt: "Sustainable Farming",
    title: "Eco-Friendly Practices"
  },
  {
    id: 4,
    src: img4,
    alt: "Quality Testing",
    title: "Quality Assurance Lab"
  },
  {
    id: 5,
    src: img5,
    alt: "Team at Work",
    title: "Expert Team"
  },
  {
    id: 6,
    src: img6,
    alt: "Packaging Unit",
    title: "Packaging Department"
  },
  {
    id: 7,
    src: img7,
    alt: "Raw Materials",
    title: "Raw Coir Materials"
  },
  {
    id: 8,
    src: img8,
    alt: "Final Products",
    title: "Ready to Ship"
  }
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isInView, setIsInView] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageLoadStates, setImageLoadStates] = useState({});
  const sectionRef = useRef(null);

  // Intersection Observer Effect
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

  // Navigation functions
  const openLightbox = (image) => {
    setSelectedImage(image);
    setCurrentImageIndex(galleryImages.findIndex(img => img.id === image.id));
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % galleryImages.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(galleryImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(galleryImages[prevIndex]);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!selectedImage) return;
      
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowRight') {
        nextImage();
      } else if (e.key === 'ArrowLeft') {
        prevImage();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedImage, currentImageIndex]);

  // Cleanup body overflow on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleImageLoad = (imageId) => {
    setImageLoadStates(prev => ({ ...prev, [imageId]: true }));
  };

  const handleImageError = (imageId) => {
    setImageLoadStates(prev => ({ ...prev, [imageId]: 'error' }));
  };

  return (
    <>
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scale-in {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
      `}</style>
      
      <section 
        ref={sectionRef}
        className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden" 
        id="gallery"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className={`text-center mb-16 transform transition-all duration-1000 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 rounded-full px-4 py-2 mb-6">
              <Camera className="w-4 h-4" />
              <span className="font-medium text-sm">Our Gallery</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Behind the <span className="text-emerald-600 relative">
                Scenes
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full"></div>
              </span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Take a visual journey through our facilities, processes, and the passion that drives our sustainable coir production
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                className={`group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl cursor-pointer transform transition-all duration-500 hover:scale-105 ${
                  isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${500 + index * 100}ms` }}
                onClick={() => openLightbox(image)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openLightbox(image);
                  }
                }}
                aria-label={`View ${image.title} in lightbox`}
              >
                <div className="aspect-square relative overflow-hidden">
                  {!imageLoadStates[image.id] && imageLoadStates[image.id] !== 'error' && (
                    <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                      <div className="w-8 h-8 border-4 border-emerald-200 border-t-emerald-600 rounded-full animate-spin"></div>
                    </div>
                  )}
                  
                  {imageLoadStates[image.id] === 'error' ? (
                    <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                      <div className="text-gray-500 text-center">
                        <div className="text-2xl mb-2">📷</div>
                        <div className="text-sm">Image not found</div>
                      </div>
                    </div>
                  ) : (
                    <img
                      src={image.src}
                      alt={image.alt}
                      className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${
                        imageLoadStates[image.id] ? 'opacity-100' : 'opacity-0'
                      }`}
                      onLoad={() => handleImageLoad(image.id)}
                      onError={() => handleImageError(image.id)}
                    />
                  )}
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-semibold text-lg mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        {image.title}
                      </h3>
                    </div>
                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 transform scale-0 group-hover:scale-100 transition-transform duration-500 delay-200">
                      <ZoomIn className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                closeLightbox();
              }
            }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="lightbox-title"
          >
            <div className="relative max-w-6xl max-h-full w-full">
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
                aria-label="Close lightbox"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Navigation Buttons */}
              {galleryImages.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}

              {/* Image */}
              <div className="flex items-center justify-center h-full">
                <div className="max-w-full max-h-full">
                  <img
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    className="max-w-full max-h-[80vh] object-contain rounded-xl shadow-2xl animate-scale-in"
                  />
                </div>
              </div>

              {/* Image Info */}
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mx-auto max-w-md">
                  <h3 id="lightbox-title" className="text-white font-semibold text-lg mb-2">
                    {selectedImage.title}
                  </h3>
                  <div className="text-xs text-gray-300">
                    {currentImageIndex + 1} of {galleryImages.length}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Gallery;