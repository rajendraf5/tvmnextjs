"use client";
import Image from "next/image";
import { servicesData } from "@/app/data/servicesData";
export default function ServicesSection() {
  return (
    <section className="section-services pt-5">
      <div className="container pt-5 pb-5">
        <div className="row">
          {/* Left Side */}
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 text-white pb-4 pb-lg-2">
            <div className="projectsticky">
              <h2 className="heading_text">Our Services</h2>
              <p>We Are Offering All Kinds of IT Solutions Services</p>
            </div>
          </div>

          {/* Right Side */}
          <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12">
            <div className="container-section-icons">
              <div className="row">
                {servicesData.map((service) => (
                  <div
                    key={service.id}
                    className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12 mb-3"
                  >
                    <div className="services">
                      <a href={service.link}>
                        <div className="service_icon">
                          <Image
                            src={service.image}
                            alt={service.title}
                            width={80}
                            height={80}
                            className="img-fluid"
                          />
                        </div>
                        <h4 className="fw-bold service_title">{service.title}</h4>
                        <p>{service.description}</p>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
