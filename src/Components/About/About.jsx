import React, { useEffect, useState } from "react";
import aboutJPG from "../../assets/about.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true); // Trigger animation when in view
          } else {
            setIsInView(false); // Reset animation when out of view
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the element is in view
    );

    const element = document.querySelector(".about-section");
    if (element) {
      observer.observe(element); // Start observing the section
    }

    // Cleanup observer on component unmount
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <div id="about" className="min-h-[620px] flex justify-center items-center py-12 sm:py-0">
      <div className="container">
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 gap-8 about-section transition-all duration-1000 transform ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Image section */}
          <div className="flex justify-center items-center">
            <img
              src={aboutJPG}
              alt="About Image"
              className={`max-w-[400px] w-full mx-auto shadow-lg rounded-lg transition-all duration-1000 transform ${
                isInView ? "scale-100" : "scale-90"
              }`}
            />
          </div>

          {/* Text content section */}
          <div className="flex flex-col justify-center gap-6 sm:pl-12">
            <p
              data-aos="fade-up"
              className="uppercase text-3xl sm:text-4xl text-gray-600 font-semibold"
            >
              About
            </p>
            <h1
              data-aos="fade-up"
              className="text-4xl sm:text-5xl text-red-800 font-bold font-cursive"
            >
              Our Heritage
            </h1>
            <p
              data-aos="fade-up"
              className="text-xl sm:text-2xl text-gray-700 leading-relaxed"
            >
              Welcome to Mythili Coirs, where tradition blends with innovation
              to create premium coir products. Founded five years ago, we
              specialize in producing high-quality coir pith and fiber,
              sustainably sourced from coconut husks. With a focus on
              eco-friendly practices and advanced technology, we provide
              reliable, sustainable solutions. Our modern facilities, spanning
              five acres concrete, ensure top-quality production while upholding our
              commitment to the environment. We are dedicated to building a
              greener future with every product we create.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
