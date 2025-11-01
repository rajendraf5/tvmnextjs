import { projects, topprojects } from "../data/projects";
import ProjectCard from "@/components/ProjectCard";
import Image from "next/image";
export default function ProjectsPage() {
  const { hero } = topprojects;
  return (
    <>
      <section id="hero" className="hero hero-h-innerpage">
        <div className="info d-flex align-items-center">
          <div className="container">
            <div className="row">
              <div className="col-xxl-12 col-xl-12 col-lg-12 text-center">
                <h2>{hero.title}</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel">
            <div className="carousel-item active">
               <Image
                  src={hero.image}
                  alt={hero.title}
                  width={1920}
                  height={800}
                  className="w-100"
                  priority
                />
            </div>
        </div>
      </section>
        <section className="bg-black text-white pt-5 pb-5">
          <div className="container">
            <div className="row">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>
    </>    
  );
}
