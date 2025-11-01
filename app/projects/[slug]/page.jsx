import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/app/data/projects";
// Pre-generate static params for all projects
export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default function ProjectDetail({ params }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  return (
    <>
    <section id="hero" className="hero">
        <div className="info d-flex align-items-center">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-10 col-xl-10 col-lg-10 text-center mx-auto">
                    <h2>{project.title}</h2>
                    <p> {project.category}</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="carousel">
            <div className="carousel-item active"><img src={project.img}  alt={project.title} /></div>
        </div>
    </section>
         
    <section className="bg-black text-white pt-5 pb-5">
      <div className="container">
        <div className="row">
          <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12">
            <img src={project.imgfirst} alt={project.title} className="img-fluid rounded-3 mt-3" />
            <h2 className="mb-3 mt-3">{project.heading}</h2>
            <p>{project.paragraph}</p>
            <p>{project.paragraph2}</p>
            <img src={project.imgsecond} alt={project.title} className="img-fluid rounded-3 mt-3" />
            {/* <h1 className="heading_text mb-3">{project.title}</h1>
            <div className="font-14 mb-3 text-uppercase text-secondary">
              {project.category}
            </div>

            <Image
              src={project.img}
              alt={project.title}
              width={900}
              height={500}
              className="img-fluid rounded mb-4"
            /> */}

            {/* <p className="lead">{project.description}</p> */}

            {/* <div className="pt-5">
              <Link
                href="/projects"
                className="btn-outline-white rounded-3 text-uppercase"
              >
                ← Back to All Projects
              </Link>
            </div> */}
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 mt-3">
            <div className="projectsticky">
                <div className="contact-box rounded-2 p-3 text-white mb-3">
                  <div className="d-flex align-items-stretch flex-column text-center w-100">
                    <div className="contact-box-body">
                      <div className="contact-icon mx-auto align-items-center">
                        <i className="bi bi-cloud-download"></i>
                      </div>
                    </div>
                    <div className="services-footer">
                      <h4>Brochures</h4>
                      <p>Cras enim urna, interdum nec por ttitor vitae, sollicitudin eu erosen. Praesent eget mollis nulla sollicitudin.</p>
                    </div>
                      <Link href="/about" className="btn-outline-white position-relative rounded-3 text-uppercase">
                        <div className="flip-animate" data-hover="Download Now">Download Now</div>
                      </Link>
                  </div>
                </div>

                <div className="contact-box rounded-2 p-3 text-white">
                  <div className="d-flex align-items-stretch flex-column text-center w-100">
                    <div className="contact-box-body">
                      <div className="contact-icon mx-auto align-items-center">
                        <i className="bi bi-telephone"></i>
                      </div>
                    </div>
                    <div className="services-footer">
                      <h4>Have Any Project? Call Us Today!</h4>
                      <p>(123) 222-8888</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
    <section className="bg-black text-white">
    {/* 🔹 Project Gallery */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="pt-5 container pb-5">
            <h3 className="heading_text mb-4">Project Gallery</h3>
            <div className="row g-4">
              {project.gallery.map((image, index) => (
                <div key={index} className="col-lg-4 col-md-6 col-12">
                  <div className="gallery-item position-relative overflow-hidden rounded">
                    <Image
                      src={image}
                      alt={`${project.title} image ${index + 1}`}
                      width={600}
                      height={400}
                      className="img-fluid gallery-image"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
     </section>    
   </> 
  );
}
