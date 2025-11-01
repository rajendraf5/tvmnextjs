
import ResponsiveCarousel from "@/components/ResponsiveCarousel";
import styles from "./page.module.css";
import Ourservices from "@/components/Ourservices";
import IndustriesServiced from "@/components/IndustriesServiced";
import SolutionsCarousel from "@/components/SolutionsCarousel";
import AboutSection from "@/components/AboutSection";
import OurProjects from "@/components/OurProjects";
export default function Home() {
   const imageList = [
    { src: "/assets/images/slider-1.webp", alt: "Slide 1" },
    { src: "/assets/images/slider-2.webp", alt: "Slide 2" },
    { src: "/assets/images/slider-3.webp", alt: "Slide 3" },
    { src: "/assets/images/slider-4.webp", alt: "Slide 4" },
  ];

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <ResponsiveCarousel images={imageList} />
        <SolutionsCarousel />
        <AboutSection />
        <Ourservices />
        <OurProjects />
        <IndustriesServiced />
      </main>
    </div>
  );
}
