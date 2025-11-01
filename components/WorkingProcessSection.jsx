"use client";
import Link from "next/link";
const WorkingProcessSection = () => {
    const title = 'Working Process';
    const heading = 'Our Working Process - How We Work For Our Customers';
    const description = "At TVM-LLC &#8211; IT Consulting Services For Your Business we provide comprehensive IT solutions tailored to meet the unique needs of your business. Whether you're a startup seeking scalability or an enterprise looking to streamline operations, our expert team is here to deliver innovative, reliable, and cost-effective technology services.";
    const ctaText = 'View All';
    const ctaLink = '#'
    return(
        <>
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
                            <div className="carousel-item active">
                                <figure><img src="assets/images/main-staff.jpg" alt="" /></figure>
                                <div className="carousel-caption">
                                <div className="container-key-points">
                                        <div className="row">
                                            <div className="col">
                                                <h2>200+</h2>
                                                <p>account balances processed each day</p>
                                            </div>
                                        </div>
                                    </div>
                                    <h4 className="d-lg-none">Staff</h4>
                                    <a className="readmore text-uppercase fw-bold fw-bold" href="#">read more<i className="bi bi-chevron-right"></i></a>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <figure><img src="assets/images/main-project.jpg" alt="" /></figure>
                                <div className="carousel-caption">
                                    <section className="container-key-points">
                                        <div className="row">
                                            <div className="col">
                                                <h2>19</h2>
                                                <p>Murex specialists</p>
                                            </div>
                                        </div>
                                    </section>
                                    <h4 className="d-lg-none">Project</h4>
                                    <a className="readmore text-uppercase fw-bold fw-bold" href="#">read more<i className="bi bi-chevron-right"></i></a>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <figure><img src="assets/images/main-partners.jpg" alt="" /></figure>
                                <div className="carousel-caption">
                                    <section className="container-key-points">
                                        <div className="row">
                                            <div className="col">
                                                <h2>16</h2>
                                                <p>Murex specialists</p>
                                            </div>
                                        </div>
                                    </section>
                                    <h4 className="d-lg-none">Partners</h4>
                                    <a className="readmore text-uppercase fw-bold fw-bold" href="#">read more<i className="bi bi-chevron-right"></i></a>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <figure><img src="assets/images/main-client.jpg" alt="" /></figure>
                                <div className="carousel-caption">
                                    <section className="container-key-points">
                                        <div className="row">
                                            <div className="col">
                                                <h2>250</h2>
                                                <p>Murex specialists</p>
                                            </div>
                                        </div>
                                    </section>
                                    <h4 className="d-lg-none">Client</h4>
                                    <a className="readmore text-uppercase fw-bold fw-bold" href="#">read more<i className="bi bi-chevron-right"></i></a>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <figure><img src="assets/images/main-staff.jpg" alt="" /></figure>
                                <div className="carousel-caption">
                                    <section className="container-key-points">
                                        <div className="row">
                                            <div className="col">
                                                <h2>10</h2>
                                                <p>Staff</p>
                                            </div>
                                        </div>
                                    </section>
                                    <h4 className="d-lg-none">Serve Client</h4>
                                    <a className="readmore text-uppercase fw-bold fw-bold" href="#">read more<i className="bi bi-chevron-right"></i></a>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <figure><img src="assets/images/main-years.jpg" alt="" /></figure>
                                <div className="carousel-caption">
                                    <section className="container-key-points">
                                        <div className="row">
                                            <div className="col">
                                                <h2>12</h2>
                                                <p>Client</p>
                                            </div>
                                        </div>
                                    </section>
                                    <h4 className="d-lg-none">Years</h4>
                                    <a className="readmore text-uppercase fw-bold fw-bold" href="#">read more<i className="bi bi-chevron-right"></i></a>
                                </div>
                            </div>
                        </div>

                    <button className="carousel-control-prev" type="button" data-bs-target="#solutions_carousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"><i className="bi bi-chevron-left text-white"></i></span>
                        <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#solutions_carousel" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"><i className="bi bi-chevron-right text-white"></i></span>
                            <span className="visually-hidden">Next</span>
                        </button>

            
                        <div className="carousel-indicators">
                            <a data-bs-target="#solutions_carousel" data-bs-slide="prev" >&lsaquo;</a>
                            <a data-bs-target="#solutions_carousel" data-bs-slide-to="0" aria-current="true" className="active">Staff</a>
                            <a data-bs-target="#solutions_carousel" data-bs-slide-to="1">Project</a>
                            <a data-bs-target="#solutions_carousel" data-bs-slide-to="2" >Partners</a>
                            <a data-bs-target="#solutions_carousel" data-bs-slide-to="3">Client</a>
                            <a data-bs-target="#solutions_carousel" data-bs-slide-to="4">Serve Client</a>
                            <a data-bs-target="#solutions_carousel" data-bs-slide-to="5">Years</a>
                            <a data-bs-target="#solutions_carousel" data-bs-slide="next">&rsaquo;</a> 
                        </div>
                    </div>
                </div>
                <div className="text-center pt-3 pb-3">
                    <Link href={ctaLink} className="btn-outline-white position-relative rounded-3 text-uppercase">
                        <div className="flip-animate" data-hover={ctaText}>{ctaText}</div>
                    </Link>
                </div>    
            </div>
        </section>
        </>
    )
}
export default WorkingProcessSection
