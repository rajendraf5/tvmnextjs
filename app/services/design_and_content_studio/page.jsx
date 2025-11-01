'use client';
import Image from "next/image";
import data from '@/app/data/designstudiodata';
import TechnologiesSection from "@/components/TechnologiesSection"
import { ServicesIndustriesData } from '@/app/data/industries';
const DesignAndContentStudio = () =>{
    const heading = "Industries";
    const { hero, herobottom, ctsbanner } = data;
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
                <img src="../assets/images/about-square-10.webp" alt="" className="img-fluid rounded-3" loading="lazy" />
            </div>
             <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12 mt-4 text-white">
                <h2 className="fw-bolder pb-3">{herobottom.heading1}</h2>
                <p>{herobottom.text1}</p>
                <h2 className="fw-bolder pb-3">{herobottom.heading2}</h2>
                <h4 className="fw-bolder">{herobottom.subheading}</h4>
                <p>{herobottom.text2}</p>
                <h4 className="fw-bolder pt-2">{herobottom.subheading2}</h4>
                <p>{herobottom.text3}</p>
            </div>
        </div>
    </div>
</section>

<section className="default-bg ctaborder position-relative">
    <div className="container px-lg-4 pe-lg-0 pe-md-0 pe-xl-0 px-0">
      <div className="row g-0 mx-lg-0">
        <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5 col-sm-12 text-white pt-2 pt-lg-5 pb-5 px-lg-0 px-4 text-lg-start text-center text-md-start">
          <h2 className="fw-bold pt-5 pb-2">{ctsbanner.heading}</h2>  
            {ctsbanner.ctatext.map((item, index) => (
                <p key={index}>{item}</p>
            ))}
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-12 pe-lg-0 pb-lg-0 pb-0 imageposition">
          <div className="position-relative h-100 fullwidthinner">
              <img src={ctsbanner.image} alt="author-img" className="gradient-border aspect-ratio-32-sm img-fluid fit-image pb-lg-0 pb-md-0" />
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
export default DesignAndContentStudio