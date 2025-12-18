import { FaGithub } from "react-icons/fa"; // npm install react-icons

function Projects() {
  const projects = [
    {
      title: "Home Service Management System",
      desc: "A complete service booking platform where users can find services, book appointments, and manage requests through a clean and scalable architecture.",
      tech: "React • Spring Boot • MySQL",
      github: "https://github.com/yourusername/home-service-management",
      projectLink: "#", // Optional live demo link
    },
    {
      title: "Healthcare Application",
      desc: "A mobile-first healthcare solution connecting doctors and patients with appointment booking and profile management.",
      tech: "HTML,CSS • JavaScript • Servlet,JSP • JDBC",
      github: "https://github.com/yourusername/healthcare-app",
      projectLink: "#",
    },
    {
      title: "Personal Portfolio",
      desc: "A custom-designed portfolio focused on storytelling, clean UI, and smooth interactions to present my work professionally.",
      tech: "React • Tailwind CSS",
      github: "https://github.com/yourusername/personal-portfolio",
      projectLink: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="relative py-32 px-6 text-white overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #14040b 0%, #4E204D 50%, #970D1A 100%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        {/* Title */}
        <h2
          data-aos="fade-up"
          className="text-4xl md:text-5xl font-extrabold mb-24"
        >
          My <span className="text-[#F5C16C]">Projects</span>
        </h2>

        {/* Project Sections */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="grid md:grid-cols-2 gap-6 items-center"
            >
              {/* Left Number */}
              <div
                data-aos="fade-right"
                className="text-7xl md:text-8xl font-bold text-white/10"
              >
                0{index + 1}
              </div>

              {/* Right Content */}
              <div data-aos="fade-left">
                <h3 className="text-3xl md:text-4xl font-bold mb-2">
                  {project.title}
                </h3>

                {/* Animated Divider */}
                <div className="w-16 h-[2px] bg-[#F5C16C] mb-6"></div>

                <p className="text-gray-200 text-lg leading-relaxed mb-4">
                  {project.desc}
                </p>

                <p className="text-[#F5C16C] font-semibold tracking-wide mb-4">
                  {project.tech}
                </p>

                {/* Links with Icons */}
                <div className="flex space-x-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#F5C16C] hover:text-white text-2xl"
                      title="GitHub Repository"
                    >
                      <FaGithub />
                    </a>
                  )}
                  {project.projectLink && project.projectLink !== "#" && (
                    <a
                      href={project.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#F5C16C] hover:underline font-semibold"
                    >
                      Live Project
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
