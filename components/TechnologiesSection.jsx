
import technologies from '@/app/data/technologies';
export default function TechnologiesSection() {
  return (
    <section className="bg-black pt-5 pb-5">
      <div className="container pt-5">
        <div className="row gx-3 gy-3 d-flex justify-content-center align-items-center">
          <div className="col-12 text-white pb-3 pb-lg-4 position-relative z-1 text-center">
            <h2 className="heading_text">Technologies we work in</h2>
          </div>

          {technologies.map((tech, index) => (
            <div
              className="col-xxl-2 col-xl-2 col-lg-3 col-md-3 col-6 mb-1"
              key={index}
            >
              <div className="technologies-services">
                <div className="icon">
                  <img src={tech.icon} alt={`${tech.name} icon`} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
