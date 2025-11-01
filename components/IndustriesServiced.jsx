
import { industriesData } from '@/app/data/industries';
const IndustriesServiced = () => {
  const heading = "Industries Serviced";
  return (
    <section className="industries">
      <div className="container pt-5 pb-5">
        <div className="row">
          <div className="col-12 text-white pb-3 pb-lg-4 position-relative z-1 text-center">
            <h2 className="heading_text">{heading}</h2>
          </div>

          {industriesData.map((industry, index) => (
            <div
              key={index}
              className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 mb-3"
            >
              <a
                href={industry.link}
                className="hero-stats position-relative overflow-hidden"
              >
                <div className="industries-item">
                  <div className="feature-icon">
                    <i className={`bi ${industry.icon}`}></i>
                  </div>
                  <div className="industries-content">
                    <h4 className="mb-0 fw-bold">{industry.title}</h4>
                  </div>
                </div>
                <div className="arrow-link">
                  <i className="bi bi-arrow-right"></i>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesServiced;
