"use client";
import { useEffect, useRef } from "react";
import Typewriter from "./Typewriter";

export default function DynamicCarousel({ images }) {
  const carouselRef = useRef(null);

  useEffect(() => {
    const { Carousel } = require("bootstrap");
    if (carouselRef.current) {
      Carousel.getOrCreateInstance(carouselRef.current);
    }
  }, []);

  const toggleCarousel = (action) => {
    const { Carousel } = require("bootstrap");
    const carousel = Carousel.getOrCreateInstance(carouselRef.current);
    action === "next" ? carousel.next() : carousel.prev();
  };

  return (
    <section id="hero" className="hero section dark-background">
      <div className="info d-flex align-items-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-12 col-xl-12 col-lg-12 max-auto text-center">
              <Typewriter />
              <p>We are leading technology solutions providing company all over the world.</p>
              <a href="/about" className="btn-outline-white position-relative rounded-pill text-uppercase fw-medium">
                <div className="flip-animate" data-hover="Get Started">Get Started</div>
             </a>
            </div>
          </div>
        </div>
      </div>
        <div
          id="dynamicCarousel"
          className="carousel slide"
          data-bs-touch="true"
          data-bs-ride="carousel" 
          data-bs-interval="5000"
          ref={carouselRef}
        >
         
            {images.map((img, index) => (
              <div
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                key={index}
              >
                <img src={img.src} className="d-block w-100" alt={img.alt || `Slide ${index + 1}`} />
              </div>
            ))}
        

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#dynamicCarousel" 
            data-bs-slide="prev"
            onClick={() => toggleCarousel("prev")}
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"><i className="bi bi-chevron-left text-white"></i></span>
            <span className="visually-hidden">Previous</span>
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#dynamicCarousel" 
            data-bs-slide="next"
            onClick={() => toggleCarousel("next")}
          >
            <span className="carousel-control-next-icon" aria-hidden="true"><i className="bi bi-chevron-right text-white"></i></span>
            <span className="visually-hidden">Next</span>
          </button>

          <div className="carousel-indicators">
            {images.map((_, index) => (
              <button
                key={index}
                type="button"
                data-bs-target="#dynamicCarousel"
                data-bs-slide-to={index}
                className={index === 0 ? "active" : ""}
                aria-current={index === 0}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
  </section>      
  );
}
