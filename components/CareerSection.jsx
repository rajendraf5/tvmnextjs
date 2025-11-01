// components/CareerSection.jsx

import Image from 'next/image';
import Link from 'next/link';

export default function CareerSection({ 
  title = "Careers", 
  description = "Become part of a thriving community of professionals dedicated to excellence and innovation", 
  buttonText = "Apply now", 
  buttonLink = "#", 
  imageSrc = "/assets/images/about-us-career.webp", 
  imageAlt = "Career Image" 
}) {
  return (
    <section className="default-bg ctaborder position-relative">
      <div className="container px-lg-4 pe-lg-0 pe-md-0 pe-xl-0 px-0">
        <div className="row g-0 mx-lg-0">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 text-white pt-5 pb-5 px-lg-0 px-4 text-lg-start text-center text-md-start">
            <h3 className="fw-bold pt-5">{title}</h3>
            <p className="pt-2 pb-4 pe-5">{description}</p>
            <div className="d-flex justify-content-lg-start justify-content-md-start justify-content-center align-items-center w-100 pb-5">
              <Link href={buttonLink} className="btn-outline-white position-relative rounded-3 text-uppercase">
                <div className="flip-animate" data-hover={buttonText}>{buttonText}</div>
              </Link>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 offset-lg-1 pe-lg-0 pb-lg-0 pb-0 imageposition">
            <div className="position-relative h-100 fullwidthinner">
              <Image 
                src={imageSrc} 
                alt={imageAlt} 
                width={800} 
                height={600} 
                className="gradient-border aspect-ratio-32-sm img-fluid fit-image pb-lg-0 pb-md-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}