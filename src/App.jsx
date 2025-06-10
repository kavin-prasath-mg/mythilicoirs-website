import React, { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import AOS from 'aos';
import 'aos/dist/aos.css';
import LoadingScreen from "./Components/LoadingScreen/LoadingScreen";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Products from "./Components/Products/Products";
import Features from "./Components/Features/Features";
import Gallery from "./Components/Gallery/Gallery";
import Contact from "./Components/Contact/Contact"
import Footer from "./Components/Footer/Footer";
import ImpactStatistics from "./Components/ImpactStatistics/ImpactStatistics";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    });

    // Simulate loading time for better UX
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return(
    <>
      <AnimatePresence>
        <LoadingScreen isLoading={isLoading} />
      </AnimatePresence>
      
      {!isLoading && (
        <main className="overflow-x-hidden">
          <Navbar /> 
          <Hero />
          <About />
          <ImpactStatistics />
          <Products />
          <Features />
          <Gallery />
          <Contact />
          <Footer />
          <ScrollToTop />
        </main>
      )}
    </>
  );
};
export default App;
