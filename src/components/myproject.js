// components/MyProjects.js
import Image from "next/image";
import Link from "next/link";

const MyProjects = () => {
  return (
    <section id="projects" className="bg-base-200 py-20" data-aos="fade-left">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6 text-center">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Example Project */}
          <div className="card bg-base-100 shadow-xl" data-aos="zoom-in">
            <figure className="px-6 pt-6">
              <Image
                src="/images/image1.png"
                alt="Project 1"
                width={400}
                height={250}
                className="rounded-xl"
              />
            </figure>
            <div className="card-body px-6 pb-6">
              <h3 className="card-title">CariSta</h3>
              <p>[Short description of the project.]</p>
              <div className="card-actions justify-end">
                <Link
                  href="https://your-project-link.com"
                  target="_blank"
                  className="btn btn-link text-primary"
                >
                  View Project
                </Link>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl" data-aos="zoom-in">
            <figure className="px-6 pt-6">
              <Image
                src="/images/image2.png"
                alt="Project 2"
                width={400}
                height={250}
                className="rounded-xl"
              />
            </figure>
            <div className="card-body px-6 pb-6">
              <h3 className="card-title">Kuliner Keputih Timur Tegal</h3>
              <p>[Short description of the project.]</p>
              <div className="card-actions justify-end">
                <Link
                  href="https://kuliner-keputih-timur.vercel.app/"
                  target="_blank"
                  className="btn btn-link text-primary"
                >
                  View Project
                </Link>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl" data-aos="zoom-in">
            <figure className="px-6 pt-6">
              <Image
                src="/project1.jpg"
                alt="Project 3"
                width={400}
                height={250}
                className="rounded-xl"
              />
            </figure>
            <div className="card-body px-6 pb-6">
              <h3 className="card-title">Project Title</h3>
              <p>[Short description of the project.]</p>
              <div className="card-actions justify-end">
                <Link
                  href="https://your-project-link.com"
                  target="_blank"
                  className="btn btn-link text-primary"
                >
                  View Project
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyProjects;