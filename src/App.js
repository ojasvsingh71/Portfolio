import React, {  useRef, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import * as THREE from 'three';

function App() {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js';
    script.async = true;

    script.onload = () => {
      if (!vantaEffect.current && window.VANTA && window.VANTA.NET) {
        vantaEffect.current = window.VANTA.NET({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0xfff5,
          backgroundColor: 0x000000,
          points: 20.0,
          maxDistance: 10.0,
          spacing: 20.0
        });
      }
    };

    document.body.appendChild(script);

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
      }
    };
  }, []);

  return (
    <div ref={vantaRef} >
      <Navbar />
      <main className="pt-20">
        <section id="home"><Hero /></section>
      </main>
    </div>
  );
}

export default App;
