function About() {
  return (
    <section
      id="about"
      className="relative py-24 px-6 overflow-hidden text-white"
    >
      {/* Gradient Background (MATCH HOME) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #4E204D 0%, #1a0612 50%, #970D1A 100%)",
        }}
      ></div>

      {/* Soft Glow Accents */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#970D1A]/40 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 -left-32 w-96 h-96 bg-[#4E204D]/40 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div data-aos="fade-right">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            About <span className="text-[#F5C16C]">Me</span>
          </h2>

          <p className="text-gray-200 text-lg leading-relaxed mb-6">
            I am <span className="text-white font-semibold">Ankita Shahane</span>, 
            a Computer Science graduate with a strong foundation in Java Full Stack
            Development. I enjoy transforming complex ideas into elegant,
            user-friendly digital experiences.
          </p>

          <p className="text-gray-200 text-lg leading-relaxed">
            Through hands-on projects and industry internship experience, I’ve
            worked with
            <span className="text-white font-semibold">
              {" "}React, Spring Boot, Hibernate, and MySQL
            </span>
            , focusing on performance, clean architecture, and usability.
          </p>
        </div>

        {/* RIGHT CARDS */}
        <div data-aos="fade-left" className="space-y-6">

          {/* Education */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-lg hover:scale-[1.02] transition">
            <h3 className="text-xl font-bold mb-2 text-[#F5C16C]">🎓 Education</h3>
            <p className="text-gray-200">
              B.Sc. Computer Science (CGPA 8.01) <br />
              Modern College, Pune
            </p>
          </div>

          {/* Experience */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-lg hover:scale-[1.02] transition">
            <h3 className="text-xl font-bold mb-2 text-[#F5C16C]">💼 Experience</h3>
            <p className="text-gray-200">
              Web & Mobile App Developer Intern <br />
              Atruebrand Innovation Solutions Pvt. Ltd.
            </p>
          </div>

          {/* Strengths */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-lg hover:scale-[1.02] transition">
            <h3 className="text-xl font-bold mb-2 text-[#F5C16C]">⚙️ Core Strengths</h3>
            <p className="text-gray-200">
              Problem Solving • Clean Code • Team Collaboration <br />
              Quick Learner • Real-world Application Building
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
