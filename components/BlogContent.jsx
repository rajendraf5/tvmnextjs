import Image from "next/image";
import Link from "next/link";

export default function BlogContent({ project }) {
  return (
    <div className="col-lg-4 col-md-6 col-12 d-flex align-items-stretch pb-4">
      <Link href={`/blogs/${project.slug}`} className="blog-items flexcard w-100 blogcontent rounded">
        <div className="blogitems-img">
          <div className="pimg">
            <Image
              src={project.img}
              alt={project.title}
              width={600}
              height={400}
              className="img-fluid rounded"
            />
          </div>
        </div>
          <div className="d-flex pb-2 gap-2">
            <div className="font-14 text-uppercase">{project.category}</div>
          </div>

          <div className="flexcard-body">
            <h4>{project.title}</h4>
          </div>

          <div className="d-flex justify-content-start align-items-center pt-3">
            <div className="readmore text-uppercase fw-bold">
              Read More <i className="bi bi-chevron-right"></i>
            </div>
          </div>
        
      </Link>
    </div>
  );
}
