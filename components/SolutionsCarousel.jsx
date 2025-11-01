// components/SolutionsCarousel.js
'use client';

import solutionsData from '@/app/data/solutionsData';
import Image from 'next/image';

export default function SolutionsCarousel() {
    const title = 'Working Process';
    const heading = 'Our Working Process - How We Work For Our Customers';
    const description = "At TVM-LLC &#8211; IT Consulting Services For Your Business we provide comprehensive IT solutions tailored to meet the unique needs of your business. Whether you're a startup seeking scalability or an enterprise looking to streamline operations, our expert team is here to deliver innovative, reliable, and cost-effective technology services.";
    const ctaText = 'View All';
    const ctaLink = '#'
  return (
     <section className="bg-black pt-5 pb-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-xxl-8 col-xxl-8 mx-auto text-center text-white pb-3">
                        <h5>{title}</h5>
                        <h2 className="heading_text">{heading}</h2>
                        <p>{description}</p>
                    </div>
                </div>
                <div className="solutions">
                <div id="solutions_carousel" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                    {solutionsData.map((item, index) => (
                        <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                        <figure>
                            <Image src={item.image} alt={item.label} width={1200} height={600} />
                        </figure>
                        <div className="carousel-caption">
                            <div className="container-key-points">
                            <div className="row">
                                <div className="col">
                                <h2>{item.h2}</h2>
                                <p>{item.p}</p>
                                </div>
                            </div>
                            </div>
                            <h4 className="d-lg-none">{item.label}</h4>
                            <a className="readmore text-uppercase fw-bold" href="/about">
                            read more<i className="bi bi-chevron-right"></i>
                            </a>
                        </div>
                        </div>
                    ))}
                    </div>

                    {/* Prev/Next Controls */}
                    <button className="carousel-control-prev" type="button" data-bs-target="#solutions_carousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"><i className="bi bi-chevron-left text-white"></i></span>
                    <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#solutions_carousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"><i className="bi bi-chevron-right text-white"></i></span>
                    <span className="visually-hidden">Next</span>
                    </button>

                    {/* Indicators */}
                    <div className="carousel-indicators">
                    <a data-bs-target="#solutions_carousel" data-bs-slide="prev">&lsaquo;</a>
                    {solutionsData.map((item, index) => (
                        <a
                        key={index}
                        data-bs-target="#solutions_carousel"
                        data-bs-slide-to={index}
                        className={index === 0 ? 'active' : ''}
                        aria-current={index === 0 ? 'true' : undefined}
                        >
                        {item.label}
                        </a>
                    ))}
                    <a data-bs-target="#solutions_carousel" data-bs-slide="next">&rsaquo;</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}