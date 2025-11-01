'use client'; // Only if you're using the App Router

import React, { useEffect, useRef } from 'react';
// import styles from './MarqueeServices.module.css';

const services = [
  "Software Development",
  "E-Learning",
  "Digital Marketing",
  "Intelligent Automation",
  "Data Science and Data Tools",
  "Design and Content Studio"
];

const MarqueeServices = () => {
  const trackRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    const wrapper = wrapperRef.current;

    if (!track || !wrapper) return;

    // Clone content once
    const firstChild = track.children[0];
    const clone = firstChild.cloneNode(true);
    track.appendChild(clone);

    let position = 0;
    const speed = 1; // px per frame

    let animationFrame;

    const animate = () => {
      position -= speed;
      const maxScroll = track.scrollWidth / 2;
      if (Math.abs(position) >= maxScroll) {
        position = 0;
      }
      track.style.transform = `translateX(${position}px)`;
      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationFrame); // cleanup
  }, []);

  return (
    <div className="service_pill_carousel">
  <div className="marquee-wrapper">
    <div className="marquee-track css-marquee">
      <ul className="service_pill_block">
        {services.map((service, index) => (
          <li key={`main-${index}`}>
            <i className="bi bi-check-lg service_pill"></i> {service}
          </li>
        ))}
      </ul>
      <ul className="service_pill_block">
        {services.map((service, index) => (
          <li key={`clone-${index}`}>
            <i className="bi bi-check-lg service_pill"></i> {service}
          </li>
        ))}
      </ul>
    </div>
  </div>
</div>
  );
};

export default MarqueeServices;
