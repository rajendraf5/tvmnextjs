'use client';
import { useEffect } from 'react';
import Image from 'next/image';
import TechnologiesSection from "@/components/TechnologiesSection"
import data from '@/app/data/Intelligentautomationdata';
import { ServicesIndustriesData } from '@/app/data/industries'
const IntelligentAutomation = () =>{
    const heading = "Industries";
    const { hero, herobottom, ctabanner, getstarted, serviceslist, stats} = data;
     useEffect(() => {
        // Load the PureCounter script dynamically
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/@srexi/purecounterjs/dist/purecounter_vanilla.js';
        script.async = true;
        script.onload = () => {
          new PureCounter(); // Initializes the counter
        };
        document.body.appendChild(script);
    
        return () => {
          document.body.removeChild(script); // Clean up script on unmount
        };
      }, []);
    return(
        <>
            <section id="hero" className="hero hero-h-innerpage">
                <div className="info d-flex align-items-center">
                    <div className="container">
                    <div className="row">
                        <div className="col-xxl-12 col-xl-12 col-lg-12 text-center mx-auto">
                        <h2>{hero.title}</h2>
                        </div>
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
            <section className="bg-black pb-2 pb-lg-5 pt-5">
                <div className="container pt-5 pb-2 pb-lg-5">
                    <div className="row d-flex align-items-center">
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12">
                            <img src={herobottom.image} alt="" className="img-fluid rounded-3" loading="lazy" />
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12 mt-4 text-white">
                            <h3 className="fw-bolder pb-1">{herobottom.heading}</h3>
                            <p>{herobottom.text}</p>
                            <h4 className="fw-bolder pb-1 pt-3">{herobottom.subheading}</h4>
                            <ul>
                                {herobottom.features.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                                </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-black">
                <div className="container pb-5">
                    <div className="cta-section-banner rounded-3 pt-5 pb-5">
                        <figure>
                            <img src={ctabanner.image} alt="background image" className="lazy-loading img-fluid rounded-3" />
                        </figure>
                        <div className="position-relative z-1 mx-auto px-5 text-center">
                        <div className="contact-icon mx-auto align-items-center"><i className={ctabanner.icon}></i></div>
                            <h2 className="fw-bold">{ctabanner.heading}</h2>
                            <h4 className="fw-bold">{ctabanner.text}</h4>
                        </div>
                    </div>
                </div>       
            </section>
            
            <section className="section-services pt-5">
      <div className="container pt-5 pb-2 pb-lg-5 position-relative z-1">
        <div className="row">
          {stats.map((item, index) => (
            <div
              key={index}
              className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-12 mb-3 d-flex align-items-stretch"
            >
              <div className="counter text-white">
                <h3>
                  <span
                    data-purecounter-start={item.start}
                    data-purecounter-end={item.end}
                    data-purecounter-duration="1"
                    className="purecounter"
                  ></span>
                  {item.suffix}
                </h3>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

            <section className="bg-black pt-5">
                <div className="container pt-5 pb-5">
                     <div className="row">
                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 text-white pb-4 pb-lg-2">
                                <div className="projectsticky">
                                    <h2 className="heading_text">Services</h2>
                                </div>    
                            </div>
                                <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12">
                                    <div className="container-section-icons">
                                        <div className="row">
                                    {serviceslist.map((service, index) => (
                                    <div key={index} className="col-12 mb-3">
                                        <div className="services text-white">
                                        <h4 className="fw-bold service_title">{service.title}</h4>
                                        <ul>
                                            {service.items.map((item, i) => (
                                            <li key={i}>{item}</li>
                                            ))}
                                        </ul>
                                        </div>
                                    </div>
                                    ))}
                                </div>
                            </div>    
                        </div>
                    </div>
                </div>
            </section> 

            <section className="default-bg ctaborder position-relative overflow-hidden">
                <div className="container px-lg-4 pe-lg-0 pe-md-0 pe-xl-0 px-0">
                    <div className="row g-0 mx-lg-0">
                        <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5 col-sm-12 text-white pt-5 pb-5 px-lg-0 px-4 text-lg-start text-center text-md-start">
                        <h2 className="fw-bold pt-5 pb-2">{getstarted.heading}</h2>
                            {getstarted.discription.map((item, index) => (
                                <p key={index}>{item}</p>
                            ))}
                        <ul>
                            {getstarted.features.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-12 pe-lg-0 pb-lg-0 pb-0 imageposition">
                            <div className="position-relative h-100 fullwidthinner">
                                <img src={getstarted.image} alt="author-img" className="gradient-border aspect-ratio-32-sm img-fluid fit-image pb-lg-0 pb-md-0" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="industries pt-0 pt-lg-5">
                <div className="container pt-5 pb-0 pb-lg-5">
                    <div className="row">
                        <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 text-white pb-3 pb-lg-4 position-relative z-1 text-center">
                            <h2 className="heading_text">{heading}</h2>  
                        </div>
                        {ServicesIndustriesData.map((industry, index) => (
                            <div key={index} className='col-xxl-6 col-xl-6 col-lg-6 col-md-12 mb-3'>
                                <a href={industry.link} className="hero-stats position-relative overflow-hidden">
                                    <div className="industries-item">
                                        <div className="feature-icon"><i className={`bi ${industry.icon}`}></i></div>
                                        <div className="industries-content">
                                            <h4 className="mb-0 fw-bold">{industry.title}</h4>
                                        </div>
                                    </div>
                                    <div className="arrow-link"><i className="bi bi-arrow-right"></i></div>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <TechnologiesSection />
        </>
    )
}
export default IntelligentAutomation