"use client";
import servicesData from "./servicesData";
const Ourservices = () => {
  const heading = "Our services";
  const heading_sub_title = "We Are Offering All Kinds of IT Solutions Services";

  return (
    <section className="section-services pt-5">
      <div className="container pt-5 pb-5">
        <div className="row">
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 text-white pb-4 pb-lg-2">
            <div className="projectsticky">
              <h2 className="heading_text">{heading}</h2>
              <p>{heading_sub_title}</p>
            </div>
          </div>
          <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12">
            <div className="container-section-icons">
              <div className="row">
                {servicesData.map((card, index) => (
                  <div key={index} className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12 mb-3">
                    <div className="services">
                      <a href="#">
                        <div className="service_icon">
                          <img src={card.image} alt={card.service_heading} />
                        </div>
                        <h4 className="fw-bold service_title">{card.service_heading}</h4>
                        <p>{card.discription}</p>
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
};

export default Ourservices;
