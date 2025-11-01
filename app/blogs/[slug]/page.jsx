
import Image from "next/image";
import { notFound } from "next/navigation";
import { blogs } from "@/app/data/blogs";
// Pre-generate static params for all projects
// export async function generateStaticParams() {
//   return blogs.map((p) => ({ slug: p.slug }));
// }

export default function BlogDetail({ params }) {
  const blogitem = blogs.find((p) => p.slug === params.slug);
  if (!blogitem) notFound();
  return (
    <>
      <section id="hero" className="hero hero-h-innerpage">
        <div className="info d-flex align-items-center">
          <div className="container">
            <div className="row">
              <div className="col-xxl-12 col-xl-12 col-lg-12 text-center">
                <h2>{blogitem.title}</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel">
              <div className="carousel-item active"><img src={blogitem.img}  alt={blogitem.title} /></div>
        </div>
      </section>
         
    <section className="bg-black text-white pt-5 pb-5">
      <div className="container">
        <div className="row">
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 mt-3">
            <div className="projectsticky">
                <aside className="table-of-contents ctaborder">
                <h3 className="pb-2">Table of Contents</h3>
                  <ul>
                    <li><a href="#introduction">Brand Identity</a></li>
                    <li><a href="#skeuomorphism">The Skeuomorphic Era</a></li>
                    <li><a href="#flat-design">Flat Design Revolution</a></li>
                    <li><a href="#material-design">Material Design</a></li>
                    <li><a href="#neumorphism">Rise of Neumorphism</a></li>
                    <li><a href="#future">Future Trends</a></li>
                  </ul>
              </aside>
            </div>
          </div>
          <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12">
            {/* <img src={blogitem.imgfirst} alt={blogitem.title} className="img-fluid rounded-3 mt-3" />
            <h2 className="mb-3 mt-3">{blogitem.heading}</h2>
            <p>{blogitem.paragraph}</p>
            <p>{blogitem.paragraph2}</p>
            <img src={blogitem.imgsecond} alt={blogitem.title} className="img-fluid rounded-3 mt-3" /> */}
            {/* Render structured content */}
     <div className="blog-content text-white mt-3">     
      {blogitem.content.map((block, index) => {
        switch (block.type) {
              case 'firstimage':
              return (
               
                  <Image
                    key={index}
                    src={block.src}
                    alt={block.alt}
                    width={800}
                    height={400}
                    className="rounded img-fluid"
                  />
  
              );
          case "auther":
            return (
               
              <div className="author-info pt-3 mb-3"  key={index}>
                
                <div className="author-details">
                  <Image
                        src={block.image}
                        alt={block.name}
                        width={60}
                        height={60}
                        className="author-img"
                      />
                  <div className="info">
                    <h4>{block.name}</h4>
                    <span className="role">{block.role}</span>
                  </div>
                </div>
                <div className="post-meta">
                  <span className="date"><i className="bi bi-calendar3"></i> {block.date}</span>
                  <span className="divider"> • </span>
                  <span className="comments"><i className="bi bi-chat-text"></i> {block.comments} Comments</span>
                </div>
              </div>
             
               
            );

          case 'title':
            return <h2 key={index} className="text-2xl font-semibold mt-6">{block.text}</h2>;
          case 'subtitle':
            return <h3 key={index} className="text-xl font-medium mt-4">{block.text}</h3>;
          case 'paragraph':
            return <p key={index} className="my-2">{block.text}</p>;
          case 'list':
            return (
              <ul key={index}>
                {block.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            );
          case 'image':
            return (
              <Image
                key={index}
                src={block.src}
                alt={block.alt}
                width={800}
                height={400}
                className="rounded img-fluid"
              />
            );
          case 'quote':
            return (
              <div key={index} className="ctaborder highlight-quote rounded-3 w-100">
                <blockquote>
                  <p>"{block.text}"</p>
                  <cite className="block mt-1">— {block.author}</cite>
                </blockquote>
              </div>  
            );
          default:
            return null;
        }
      })}
      </div>  
          </div>
          
          </div>
      </div>
    </section>
    <section className="bg-black text-white">
    {/* 🔹 Project Gallery */}
        {blogitem.gallery && project.gallery.length > 0 && (
          <div className="pt-5 container pb-5">
            <h3 className="heading_text mb-4">Project Gallery</h3>
            <div className="row g-4">
              {blogitem.gallery.map((image, index) => (
                <div key={index} className="col-lg-4 col-md-6 col-12">
                  <div className="gallery-item position-relative overflow-hidden rounded">
                    <Image
                      src={image}
                      alt={`${blogitem.title} image ${index + 1}`}
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
