import React, { useEffect } from 'react';
import Product from '../product/Product';
import Slider from '../slider/Slider';
import HeroSection from '../welcomeSection/HeroSection';

function Home() {
  const url = window.location.href; 

  useEffect(() => {
    const scrollToProducts = () => {
      if (url.includes("#products")) {
        window.scrollTo({
          top: 1400,
          behavior: "smooth",
        });
        return;
      }
    };
    scrollToProducts();
  }, [url]);

  return (
    <>
      <HeroSection />
      <Slider/>
      <Product />
    </>
  );
}

export default Home;
