// components/CTASection.jsx

import Image from 'next/image';
import Link from 'next/link';

export default function CTASection({
  title = "Innovate with precision and scale",
  buttonText = "Connect with us",
  buttonLink = "#",
  imageSrc = "/assets/images/contact.jpg",
  imageAlt = "Background image"
}) {
  return (
    <section className="bg-black">
      <div className="container pb-5">
        <div className="cta-section-banner rounded-3 pt-5 pb-5 position-relative overflow-hidden">
          <figure className="m-0">
            <Image
              src={imageSrc}
              alt={imageAlt}
              layout="fill"
              objectFit="cover"
              style={{transform:'none'}}
              className="lazy-loading img-fluid rounded-3"
            />
          </figure>
          <div className="position-relative z-1 mx-auto pt-5 pb-5 text-center text-white">
            <h2 className="fw-bold pb-3">{title}</h2>
            <Link href={buttonLink} className="btn-outline-white position-relative rounded-3 text-uppercase">
              <div className="flip-animate" data-hover={buttonText}>{buttonText}</div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}