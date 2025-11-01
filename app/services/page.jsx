const Services = () => {
    const imageSrc = "assets/images/slider-3.webp";
     const heading = "Services";
    const discription = "Thanks for your interest in Luxoft. Please select one of the options below"
    return(
        <>
         <section id="hero" className="hero">
            <div className="info d-flex align-items-center">
                <div className="container">
                <div className="row">
                    <div className="col-xxl-10 col-xl-10 col-lg-10 text-center mx-auto">
                    <h2>{heading}</h2>
                    <p>{discription}</p>
                    </div>
                    <div className="text-center">
                        <a href="#contact" className="btn-scroll" title="Scroll Down"><i className="bi bi-chevron-down"></i></a></div>
                    </div>
                </div>
            </div>
             <div className="carousel">
              <div className="carousel-item active"><img src={imageSrc} alt="" /></div>
        </div>
        </section>    
        </>
    )
}
export default Services