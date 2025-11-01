"use client";
import TechnologiesSection from "@/components/TechnologiesSection";
import Image from "next/image";
import data from '@/app/data/softwaredevelopmentData';
// import { softwarecounterData } from '@/app/data/counter'
import SoftwareCounter from '@/components/SoftwareCounter'
const SoftwareDevelopment = () =>{
    const { hero, herobottom, processdata, qualitydata  } = data;
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
        <section className="bg-black pb-2 pb-lg-5">
            <div className="container pt-5 pb-2 pb-lg-5">
                <div className="row d-flex align-items-center">
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12">
                        <img src={herobottom.image} alt="" className="img-fluid rounded-3" loading="lazy" />
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12 mt-4 text-white">
                        <h3 className="fw-bolder pb-1">{herobottom.heading1}</h3>
                        <p>{herobottom.text1}</p>
                        <h3 className="fw-bolder pb-1 pt-3">{herobottom.heading2}</h3>
                        <p>{herobottom.text2}</p>
                    </div>
                </div>
            </div>
        </section> 
    <SoftwareCounter />

<section className="bg-black pb-5">
    <div className="container pt-2 pt-lg-5 pb-2 pb-lg-5">
        <div className="row d-flex align-items-center">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12">
                <Image  src={processdata.image} 
                    width={1920}
                    height={800} alt="" className="img-fluid rounded-3" loading="lazy" />
            </div>
             <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12 mt-4 text-white">
                <h3 className="fw-bolder pb-3">{processdata.heading}</h3>
                {processdata.discription.map((item, index) => (
                    <p key={index}>{item}</p>
                ))}
            </div>
        </div>
    </div>
</section> 

<section className="default-bg ctaborder position-relative overflow-hidden">
    <div className="container px-lg-4 pe-lg-0 pe-md-0 pe-xl-0 px-0">
      <div className="row g-0 mx-lg-0">
        <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5 col-sm-12 text-white pt-5 pb-5 px-lg-0 px-4 text-lg-start text-center text-md-start">
          <h2 className="fw-bold pt-5 pb-2">{qualitydata.heading}</h2>
           {qualitydata.discription.map((item, index) => (
                <p key={index}>{item}</p>
            ))}
          <h4 className="fw-bold">{qualitydata.heading2}</h4>
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-12 pe-lg-0 pb-lg-0 pb-0 imageposition">
          <div className="position-relative h-100 fullwidthinner">
              <Image 
                    src={qualitydata.image}
                    alt={hero.title}
                    width={1920}
                    height={800} 
                    className="gradient-border aspect-ratio-32-sm img-fluid fit-image pb-lg-0 pb-md-0" />
          </div>
          </div>
      </div>
    </div>
  </section>

  <TechnologiesSection />
        </>
    )
}
export default SoftwareDevelopment