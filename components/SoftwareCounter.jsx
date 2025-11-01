'use client';
import { useEffect } from 'react';
import { softwarecounterData } from "@/app/data/counter"
const SoftwareCounter = () =>{
         useEffect(() => {
        // Load the PureCounter script dynamically
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/@srexi/purecounterjs/dist/purecounter_vanilla.js';
        script.async = true;
        script.onload = () => {
          new PureCounter(); // Initializes the counter
        };
        document.body.appendChild(script);
    
        return () => {
          document.body.removeChild(script); // Clean up script on unmount
        };
      }, []);
    return(
        <>
        <section className="section-services pt-5 ">
    <div className="container pt-5 pb-2 pb-lg-5 position-relative z-1">
        <div className="row">
            {softwarecounterData.map((counter, index) => (
                        <div key={index} className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-12 mb-3 d-flex align-items-stretch">
                            <div className="counter">
                            <h3>
                                <span
                                data-purecounter-start="0"
                                data-purecounter-end={counter.end}
                                data-purecounter-duration="1"
                                className="purecounter"
                                ></span>
                                {counter.suffix || ''}
                            </h3>
                            <p>{counter.label}</p>
                            </div>
                        </div>
                        ))}
           
           
        </div>
    </div>
</section>
        </>
    )
}

export default SoftwareCounter