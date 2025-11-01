import { ourvalueData } from "@/app/data/ourvalue"
const Ourvalue = () => {
    const ourheading = "Our Values";
    const ourdiscription = "We Are Offering All Kinds of IT Solutions Services"
    return(
        <>
            <section className="bg-black">
                <div className="container pb-5">
                    <div className="row">
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 text-white pb-4 pb-lg-2">
                            <div className="projectsticky">
                                <h2 className="heading_text">{ourheading}</h2>
                                <p>{ourdiscription}</p>
                            </div>    
                        </div>
                        <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12">
                            <div className="container-section-icons">
                                <div className="row">
                                    {ourvalueData.map((ourvalue, index) =>(
                                            <div key={index} className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12 mb-3">
                                                <div className="services">
                                                    <a href={ourvalue.link}>          
                                                    <h4 className="fw-bold service_title">{ourvalue.heading}</h4>
                                                    <p>{ourvalue.discription}</p>
                                                    </a>   
                                                </div>
                                            </div>
                                        ))
                                    }
                                 

                                </div>
                            </div>    
                        </div>
                    </div>
                </div>
            </section> 
        </>
    )
}
export default Ourvalue