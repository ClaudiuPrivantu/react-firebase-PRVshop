import React from 'react';
//import '../App.css';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <h1>PRV SHOP</h1>
      <p>if you can't stop thinking about it... BUY IT</p>
      <video src='videos/video.mp4' autoPlay loop muted></video>
    </div>
  );
}

export default HeroSection;
