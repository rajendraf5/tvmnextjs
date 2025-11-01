
import { projects } from "@/app/data/projects";
import ProjectCard from "./ProjectCard";
import Link from "next/link";

export default function OurProjects() {
  const visibleProjects = projects.slice(0, 3); // Show only first 3

  return (
    <section className="bg-black pb-5" id="projects">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center text-white pb-5">
            <h2 className="heading_text">Our Projects</h2>
          </div>
        </div>

        <div className="row">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="text-center pt-4">
          <Link
            href="/projects"
            className="btn-outline-white rounded-3 text-uppercase position-relative"
          >
            <div className="flip-animate" data-hover="View All">
              View All
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
