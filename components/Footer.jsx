"use client";
import Link from "next/link";
import ScrollToTop from "./ScrollToTop";
import MarqueeServices from "./MarqueeServices";
const Footer = () =>{
    return(
        <>
       <footer>
  {/* <div className="service_pill_carousel">
    <div className="marquee-wrapper" id="marqueeWrapper">
      <div className="marquee-track" id="marqueeTrack">
        <ul className="service_pill_block">
          <li><i className="bi bi-check-lg service_pill"></i>Software Development</li>
          <li><i className="bi bi-check-lg service_pill"></i>E-Learning</li>
          <li><i className="bi bi-check-lg service_pill"></i>Digital Marketing</li>
          <li><i className="bi bi-check-lg service_pill"></i>Intelligent Automation</li>
          <li><i className="bi bi-check-lg service_pill"></i>Data Science and Data Tools</li>
          <li><i className="bi bi-check-lg service_pill"></i>Design and Content Studio</li>
        </ul>
      </div>
    </div>
  </div> */}
  <MarqueeServices />
   <div className="container">
     <div className="row pb-5 pt-5">
       <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-12">
        <div className="footer-links pt-lg-0 pt-5">
          <h4>Quick Links</h4>
          <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="#">Services</Link></li>
              <li><Link href="#">Blog</Link></li>
              <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>    
       </div>
       <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-12">
        <div className="footer-links pt-lg-0 pt-5">
          <h4>India</h4>
          <ul className="address-list">
            <li><i className="bi bi-geo-alt"></i>TVM Consulting Pvt Ltd, Plot No. 79, IT Park Bargi Hills Purva, Jabalpur</li>
            <li><a href="tel:+917613559121"><i className="bi bi-telephone"></i>+917613559121</a></li>
            <li><a href="mailto:info@tvm-llc.com"><i className="bi bi-envelope"></i>info@tvm-llc.com</a></li>
            <li><i className="bi bi-clock"></i>Opening Hour:10:00-18:00</li>
          </ul>
        </div>    
       </div>
      <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-12">
        <div className="footer-links pt-lg-0 pt-5">
          <h4>USA</h4>
          <ul className="address-list">
            <li><i className="bi bi-geo-alt"></i>23211 WRATHALL DR, ASHBURN,VA 20148</li>
            <li><a href="tel:+12022907708"><i className="bi bi-telephone"></i>+12022907708</a></li>
            <li><a href="mailto:info@tvm-llc.com"><i className="bi bi-envelope"></i>info@tvm-llc.com</a></li>
            <li><i className="bi bi-clock"></i>Opening Hour:10:00-18:00</li>
          </ul>
        </div>    
       </div>
        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-12">
        <div className="footer-links pt-lg-0 pt-5">
          <h4>United Kingdom</h4>
          <ul className="address-list">
            <li><i className="bi bi-geo-alt"></i>25C Mayfair Avenue llford Essex London United Kingdom IG1 3DJ</li>
            <li><a href="tel:+447766082034"><i className="bi bi-telephone"></i>+447766082034</a></li>
            <li><a href="mailto:info@tvm-llc.com"><i className="bi bi-envelope"></i>info@tvm-llc.com</a></li>
            <li><i className="bi bi-clock"></i>Opening Hour:10:00-18:00</li>
          </ul>
        </div>    
       </div>
     </div> 
   </div>
    <div className="footer-bottom pt-3 pb-3">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
              <p className="text-center text-lg-start text-white mb-0">© 2025 All Rights Reserved. TVM Consulting Pvt. Ltd</p>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 pt-1 pt-lg-0 d-flex justify-content-center justify-content-lg-end">
              <ul className="social-links d-flex justify-content-start">
                  <li><a href="#" target="_blank"><i className="bi bi-facebook"></i></a></li>
                  <li><a href="#" target="_blank"><i className="bi bi-twitter-x"></i></a></li>
                  <li><a href="#" target="_blank"><i className="bi bi-pinterest"></i></a></li>
                  <li><a href="#" target="_blank"><i className="bi bi-instagram"></i></a></li>
              </ul>
            </div>
          </div>
        </div>  
     </div> 
 </footer>
 <ScrollToTop />
  </>
    )
}
export default Footer