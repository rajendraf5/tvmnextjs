"use client"
import Image from 'next/image';
import Link from 'next/link'
import data from '@/app/data/homeaboutdata';
import { usePathname } from 'next/navigation';
const AboutSection = () =>{
   const pathname = usePathname();
   const { herobottom } = data;
    return(
        <>
        <section className="bg-black pt-5 pb-5">
          <div className="container">
              <div className="row">
                  <div className="col-lg-8 col-xxl-8 col-xxl-8 mx-auto text-center text-white pb-3 pb-lg-5">
                      <h2 className="heading_text text-white">{herobottom.topheading}</h2>
                  </div>
              </div>  
             
              <div className="row d-flex align-items-center">
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12">
                    <Image
                        src={herobottom.image}
                        alt={herobottom.title}
                        width={1920}
                        height={800}
                        className="img-fluid rounded-3"
                        priority
                    />
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12 mt-4 text-white">
                      <h3 className="fw-bolder pb-3">{herobottom.heading}</h3>
                      {herobottom.discription.map((item, index) => (
                        <p key={index}>{item}</p>
                      ))}
                       {pathname === '/' && (
                        <Link href="/about" className="btn-outline-white position-relative rounded-3 text-uppercase mt-3">
                        <div className="flip-animate" data-hover="Read More">Read More</div>
                      </Link>
                     )}
                      
                  </div>
              </div>
           
          </div>
       </section> 
        </>
    )
}
export default AboutSection