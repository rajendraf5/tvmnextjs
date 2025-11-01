'use client'; // if you're using app directory

import Image from "next/image";
import Link from "next/link";
import data from '@/app/data/digitalmarketingdata';
// import sdatacard from '@/app/data/datacard';
import { features, contactBoxes } from "@/app/data/datacard";
import TechnologiesSection from "@/components/TechnologiesSection";
import SoftwareCounter from '@/components/SoftwareCounter'
const DigitalMarketing = () =>{
  const { hero, herobottomtext, ctabanner, datapipe, } = data;
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
                <Image 
                src={herobottomtext.image} 
                width={1920}
                height={800} alt="" 
                className="img-fluid rounded-3" 
                loading="lazy" />
            </div>
             <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12 mt-4 text-white">
                 <h3 className="fw-bolder pb-1">{herobottomtext.heading1}</h3>
                  {herobottomtext.discription.map((item, index) => (
                      <p key={index}>{item}</p>
                  ))}
                 <Link href="/contact" className="btn-outline-white position-relative rounded-3 text-uppercase fw-medium">
                  <div className="flip-animate" data-hover="Contact Us">Contact Us</div>
                </Link>
            </div>
        </div>
    </div>
</section>

<section className="bg-black">
 <div className="container pb-5">
     <div className="cta-section-banner rounded-3 pt-5 pb-5 position-relative overflow-hidden">
         <figure className="m-0">
            <img src={ctabanner.image} alt="background image" className="lazy-loading img-fluid rounded-3" />
        </figure>
        <div className="position-relative z-1 mx-auto pt-5 pb-5 px-5 text-center">
            <h2 className="fw-bold pb-3">{ctabanner.heading}</h2>
            <p>{ctabanner.discription}</p>
        </div>
     </div>
 </div>       
</section> 

<SoftwareCounter />

<section className="bg-black pt-5">
        <div className="container pt-5 pb-5">
          <div className="row">
            <div className="col-lg-4 text-white pb-4 pb-lg-2">
              <div className="projectsticky">
                <h2 className="heading_text">Streamlined. Superpowered.</h2>
              </div>
            </div>

            <div className="col-lg-8">
              <div className="container-section-icons">
                <div className="row">
                  {features.map((item, index) => (
                    <div
                      key={index}
                      className="col-lg-6 col-md-12 mb-3"
                    >
                      <div className="services">
                        <Link href="#">
                          <h4 className="fw-bold service_title">{item.title}</h4>
                          <p>{item.description}</p>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    
      <section className="bg-black pb-5">
        <div className="container pt-2 pt-lg-5 pb-2 pb-lg-5">
          <div className="row">
            {contactBoxes.map((box, index) => (
              <div
                key={index}
                className="col-lg-4 col-md-12 d-flex align-items-stretch mb-4"
              >
                <div className="contact-box rounded-2 p-3 text-white d-flex align-items-stretch">
                  <div className="d-flex flex-column text-center w-100">
                    <div className="contact-box-body">
                      <div className="contact-icon mx-auto align-items-center">
                        <i className={`bi ${box.icon}`}></i>
                      </div>
                    </div>
                    <div className="services-footer">
                      <h4>{box.title}</h4>
                      <p>{box.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

<section className="default-bg ctaborder position-relative">
    <div className="container px-lg-4 pe-lg-0 pe-md-0 pe-xl-0 px-0">
      <div className="row g-0 mx-lg-0">
        <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 text-white pt-5 pb-5 px-lg-0 px-4 text-lg-start text-center text-md-start">
          <h2 className="fw-bold pt-2 pb-2">{datapipe.heading}</h2>
          <Image src={datapipe.image} width={1920} height={800} alt="" className="img-fluid rounded-3" />
        </div>
      </div>
    </div>
  </section>

  <TechnologiesSection />
        </>
    )
}
export default DigitalMarketing