import Image from 'next/image';
import Link from 'next/link';
import CareerSection from '@/components/CareerSection';
import CountersSection from '@/components/CountersSection';
import IndustriesServiced from '@/components/IndustriesServiced';
import Ourvalue from '@/components/Ourvalue';
import data from '@/app/data/aboutdata';
import React from 'react';
const About = () =>{
   const { hero, herobottom, ctabanner } = data;
  return(
    <>
      <section id="hero" className="hero">
        <div className="info d-flex align-items-center">
          <div className="container">
            <div className="row">
              <div className="col-xxl-10 col-xl-10 col-lg-10 text-center mx-auto">
                <h2>{hero.title}</h2>
                <p>{hero.abouttext}</p>
              </div>
              <div className="text-center">
                  <a href="#about" className="btn-scroll" title="Scroll Down"><i className="bi bi-chevron-down"></i></a></div>
            </div>
          </div>
        </div>
        <div className="carousel">
          <div className="carousel-item active">
            <Image
              src={hero.image}
              alt={hero.title}
              width={1920}
              height={800}
              className="w-100"
              priority
            />
          </div>
        </div>
      </section>
     <section className="bg-black pt-5 pb-5" id="about">
          <div className="container pt-5">
              <div className="row d-flex align-items-center">
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12">
                    <Image
                      src={herobottom.image}
                      alt={herobottom.title}
                      width={1920}
                      height={800}
                      className="img-fluid rounded-3"
                      priority
                    />
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12 mt-4 text-white">
                      <h3 className="fw-bolder pb-3">{herobottom.heading}</h3>
                      {herobottom.discription.map((item, index) => (
                        <p key={index}>{item}</p>
                      ))}
                  </div>
              </div>
          </div>
       </section> 
      <div><CountersSection /></div>
      <Ourvalue />
      <CareerSection />
      <IndustriesServiced />
          <section className="bg-black">
            <div className="container pb-5">
              <div className="cta-section-banner rounded-3 pt-5 pb-5">
                  <figure>
                    <Image
                      src={ctabanner.image}
                      alt={ctabanner.title}
                      width={1920}
                      height={800}
                      className="lazy-loading img-fluid rounded-3"
                      priority
                    />
                  </figure>
                  <div className="position-relative z-1 mx-auto pt-5 pb-5 text-center">
                      <h2 className="fw-bold pb-3">{ctabanner.heading}</h2>
                      <Link href="/contact" className="btn-outline-white position-relative rounded-3 text-uppercase">
                          <div className="flip-animate" data-hover="Connect with us">Connect with us</div>
                      </Link>
                  </div>
              </div>
            </div>       
          </section>
    </>
  )
}

export default About