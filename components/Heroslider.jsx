const Heroslider = () => {
    return(
    <>
    <section id="hero" className="hero section dark-background">
      <div className="info d-flex align-items-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-11 col-xl-11 col-lg-11 max-auto text-center">
              <h2 className="typewrite fw-bold"  data-period="2000" data-type='[ "IT Consulting, Services For Your, Business" ]'>
                <span className="wrap"></span>
              </h2>
              <p>We are leading technology solutions providing company all over the world.</p>
              <a href="#" className="btn-outline-white position-relative rounded-pill text-uppercase fw-medium">
                <div className="flip-animate" data-hover="Get Started">Get Started</div>
             </a>
            </div>
          </div>
        </div>
      </div>

      <div id="hero-carousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
            <div className="carousel-item active">
              <img src="assets/images/slider-1.webp" alt="" />
            </div>

            <div className="carousel-item">
              <img src="assets/images/slider-2.webp" alt="" />
            </div>

            <div className="carousel-item">
              <img src="assets/images/slider-3.webp" alt="" />
            </div>

            <div className="carousel-item">
              <img src="assets/images/slider-4.webp" alt="" />
            </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#hero-carousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"><i className="bi bi-chevron-left text-white"></i></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#hero-carousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"><i className="bi bi-chevron-right text-white"></i></span>
            <span className="visually-hidden">Next</span>
        </button>
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>
      </div>
    </section>
    </>
    )
}
export default Heroslider