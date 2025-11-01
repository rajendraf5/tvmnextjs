import TechnologiesSection from "@/components/TechnologiesSection"
import Image from "next/image";
import data from '@/app/data/elearning'

export default function ELearningPage() {
  const { hero, sections } = data;

  return (
    <>
      {/* Hero Section */}
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

      {/* Dynamic Sections */}
      {sections.map((item, index) => (
        <section key={index} className="bg-black pb-2 pb-lg-5">
          <div className="container pt-5 pb-2 pb-lg-5">
            <div
              className={`row d-flex align-items-center ${
                item.reverse ? "flex-row-reverse" : ""
              }`}
            >
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12">
                <Image
                  src={item.image}
                  alt={item.heading1}
                  width={600}
                  height={400}
                  className="img-fluid rounded-3 w-100"
                />
              </div>

              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12 mt-4 text-white">
                <h3 className="fw-bolder pb-1">{item.heading1}</h3>
                <p>{item.text1}</p>
                {item.heading2 && <h3 className="fw-bolder pb-1">{item.heading2}</h3>}
                {item.text2 && <p>{item.text2}</p>}
                {item.text3 && <p>{item.text3}</p>}
              </div>
            </div>
          </div>
        </section>
      ))}
      <TechnologiesSection />
    </>
  );
}