import Image from "next/image";
import Link from "next/link";

const MyProjects = () => {
  const projects = [
    {
      id: 1,
      title: "CariSta",
      image: "/images/image1.png",
      description: "An innovative platform helping users discover and connect with talented artists and performers.",
      link: "https://your-project-link.com",
      tech: ["React", "Node.js", "MongoDB"],
    },
    {
      id: 2,
      title: "Kuliner Keputih Timur Tegal",
      image: "/images/image2.png",
      description: "A comprehensive food discovery platform showcasing the best culinary experiences in Keputih Timur Tegal.",
      link: "https://kuliner-keputih-timur.vercel.app/",
      tech: ["React", "Tailwind", "Firebase"],
    },
    {
      id: 3,
      title: "Ferrari Copy",
      image: "/images/image3.png",
      description: "A pixel-perfect recreation of Ferrari's website showcasing advanced CSS and responsive design techniques.",
      link: "https://github.com/TwicePie/ferrari-copy",
      tech: ["HTML5", "CSS3", "JavaScript", "Vue", "Laravel", "MySql"],
    },
    {
      id: 4,
      title: "Event Handler",
      image: "/images/image3.png",
      description: "A robust event management system helping organizers streamline their event planning process.",
      link: "https://github.com/TwicePie/ferrari-copy",
      tech: ["React", "Express", "MySQL"],
    },
    {
      id: 5,
      title: "Trip Mobile",
      image: "/images/image4.jpg",
      description: "A robust event management system helping organizers streamline their event planning process.",
      link: "https://github.com/Haeryz/Skibidi-skibidi-sigma",
      tech: ["Dart", "Flutter", "Firebase", "Get"],
    },
  ];

  return (
    <section id="projects" className="bg-base-200 py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-sm text-gray-600 max-w-xl mx-auto">
            Here are some of my featured projects that showcase my skills and passion for web development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="card bg-base-100 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <figure className="relative h-48 overflow-hidden group">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Link
                    href={project.link}
                    target="_blank"
                    className="btn btn-primary"
                  >
                    View Project
                  </Link>
                </div>
              </figure>

              <div className="card-body p-4">
                <h3 className="card-title text-lg mb-2">{project.title}</h3>
                <p className="text-xs text-gray-500 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 bg-base-200 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="card-actions justify-end">
                  <Link
                    href={project.link}
                    target="_blank"
                    className="btn btn-link text-primary hover:text-primary-focus no-underline text-sm"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyProjects;
