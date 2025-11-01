"use client";
import Image from 'next/image';
import data from "@/app/data/contactinfo"
import ContactForm from '@/components/ContactForm';
const Contact = () =>{
    const { hero, address } = data;
    return(
        <>
        
        <section id="hero" className="hero">
            <div className="info d-flex align-items-center">
                <div className="container">
                  <div className="row">
                      <div className="col-xxl-10 col-xl-10 col-lg-10 text-center mx-auto">
                        <h2>{hero.heading}</h2>
                        <p>{hero.text}</p>
                      </div>
                      <div className="text-center">
                        <a href="#contact" className="btn-scroll" title="Scroll Down"><i className="bi bi-chevron-down"></i></a></div>
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
         
    <section className="bg-black pt-5 pb-5" id="contact">
      <div className="container pt-5 pb-4">
        <div className="row">
           {address.map((item, index) => (
            <div
              key={index}
              className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-12 d-flex align-items-stretch mb-4"
            >
              <div className="contact-box rounded-2 p-3 text-white d-flex align-items-stretch w-100">
                <div className="d-flex flex-column text-center w-100">
                  <div className="contact-icon mx-auto mb-3">
                    <i className={`bi ${item.icon} fs-2`}></i>
                  </div>
                  <div className="services-footer">
                    <h4 className="fw-bold">{item.title}</h4>
                    <div className="mt-1">{item.value}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
<section className="map-section">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29342.427767208752!2d79.89053523476562!3d23.177371899999986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981b167f7ab3263%3A0x3e4066813b80c62b!2sTVM%20CONSULTING%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1759833606968!5m2!1sen!2sin" width="100%" height="450" style={{border: '0'}}  loading="lazy" ></iframe>
</section>
<ContactForm />
        </>
    )
}
export default Contact