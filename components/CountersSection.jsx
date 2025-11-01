'use client'; // if you're using app directory

import { useEffect } from 'react';
import { counterData } from '@/app/data/counter';
export default function CountersSection() {
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

  return (
    <section className="section-services pt-5 pb-5">
      <div className="container pt-5 pb-5 position-relative z-1">
        <div className="row">

          {counterData.map((counter, index) => (
            <div key={index} className="col-md-6 col-lg-4 mb-3 d-flex align-items-stretch">
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
  );
}
