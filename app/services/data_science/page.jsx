
import Image from "next/image";
import TechnologiesSection from "@/components/TechnologiesSection";
import data from '@/app/data/datasciencedata';
const DataScience = () =>{
    const { hero, herobottom, ctabanner, stickyimage, servicesdata } = data;
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
        
    <section className="bg-black pt-5">
    <div className="container pt-5">
        <div className="cta-section-banner ctaborder rounded-3 pt-5 pb-5">
            <figure>
                <img src={ctabanner.image} alt="background image" className="lazy-loading img-fluid rounded-3" />
            </figure>
            <div className="position-relative z-1 mx-auto px-5 pt-5 pb-5 text-center">
                <h2 className="fw-bold">{ctabanner.heading}</h2>
                <p>{ctabanner.text}</p>
            </div>
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
                 {herobottom.discription.map((item, index) => (
                    <p key={index}>{item}</p>
                ))}
                 
            </div>
        </div>
    </div>
</section>

<section className="section-services">
    <div className="container pt-5 pb-5">
        <div className="row">
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 text-white pb-4 pb-lg-2">
                <div className="projectsticky">
                    <img src={stickyimage.image} className="img-fluid rounded-3 w-100" />
                </div>    
            </div>
            <div className="col-xxl-7 col-xl-7 col-lg-7 offset-lg-1 col-md-12">
                <div className="container-section-icons">
                    <div className="row">
                         {servicesdata.map((service, index) => (
                        <div
                            key={index}
                            className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12 mb-3">
                            <div className="services text-white">
                            <h4 className="fw-bold service_title">{service.title}</h4>
                            {service.description && <p>{service.description}</p>}
                            {service.discription2 && <p>{service.discription2}</p>}
                            {service.extra && <p>{service.extra}</p>}
                            </div>
                        </div>
                        ))}
                    </div>
                </div>    
            </div>
        </div>
    </div>
</section> 
<TechnologiesSection />
        </>
    )
}
export default DataScience