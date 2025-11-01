"use client";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from "next/image";
import SearchBox from "./SearchBox";
const Header = () => {
   const websiteContent = [
    { title: 'Home Page', content: 'Welcome to our awesome website!' },
    { title: 'About Us', content: 'We build modern web applications.' },
    { title: 'Contact', content: 'Reach us anytime through our contact form.' },
  ];
   const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  useEffect(()=>{
    const handleScroll = () => {
      if(window.scrollY > 0){
        setIsScrolled(true);
      }
      else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll',  handleScroll);
    return () =>{
      window.removeEventListener('scroll', handleScroll);
    };
  },[]);
  return (
    <div className="fixed-top">
     <header id="headerfixed" className={`header  ${isScrolled? 'bg-black shadow py-0':''}`}>
      <nav className="navbar navbar-expand-lg navbar-dark px-0 py-2">
          <div className="container">
            <Link className="navbar-brand" href="/">
            <Image
              src={"/assets/images/logo.webp"}
              width={177}
              height={40}
              alt="logo"
            />
              {/* <img src="assets/images/logo.webp" alt="" /> */}
            </Link>
            <button className="navbar-toggler first-button border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <div className="animated-icon1"><span></span><span></span><span></span></div>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav mx-lg-auto navmenu">
                   <li className="nav-item"><Link className={`nav-link ${pathname === "/" ? "active" : ""}`} href="/">Home</Link></li>
                   <li className="nav-item"><Link className={`nav-link ${pathname === "/about" ? " active" : ""}`} href="/about">About</Link></li>
                   
                   <li className="nav-item dropdown">
                    <Link className={`nav-link dropdown-toggle ${pathname === "/services" ? " active" : ""}`} href="/services" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Services
                    </Link>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                      <li><Link className={`dropdown-item ${pathname === "/services/softwaredevelopment" ? "active" : ""}`} href="/services/softwaredevelopment">Software Development</Link></li>
                      <li><Link className="dropdown-item" href="/services/E-Learning">E-Learning</Link></li>
                      <li><Link className="dropdown-item" href="/services/digital_marketing">Digital Marketing</Link></li>
                      <li><Link className="dropdown-item" href="/services/Intelligent_automation">Intelligent Automation</Link></li>
                      <li><Link className="dropdown-item" href="/services/data_science">Data Science and Data Tools</Link></li>
                      <li><Link className="dropdown-item" href="/services/design_and_content_studio">Design and Content Studio</Link></li>
                    </ul>
                  </li>
                  <li className="nav-item"><Link className={`nav-link ${pathname === "/blogs" ? "active" : ""}`} href="/blogs">Blog</Link></li>
                  <li className="nav-item"><Link className={`nav-link ${pathname === "/contact" ? "active" : ""}`} href="/contact">Contact</Link></li>
                </ul>
                <div className="d-flex align-items-lg-center mt-2 mt-lg-0">
                  <SearchBox data={websiteContent} />
                 
                </div>
            </div>
          </div>
        </nav>
    </header>
  </div> 
  )
}
export default Header;