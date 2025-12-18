function Skills() {
  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Java",
    "Spring Boot",
    "Hibernate",
    "JSP / Servlets",
    "MySQL",
    "Git",
    "GitHub",
    "VS Code",
  ];

  return (
    <section
      id="skills"
      className="relative py-32 px-6 overflow-hidden text-white"
    >
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #4E204D 0%, #14040b 50%, #970D1A 100%)",
        }}
      ></div>

      {/* Ambient Glows */}
      <div className="absolute top-40 -left-40 w-[28rem] h-[28rem] bg-[#970D1A]/35 blur-3xl rounded-full"></div>
      <div className="absolute bottom-20 -right-40 w-[28rem] h-[28rem] bg-[#4E204D]/35 blur-3xl rounded-full"></div>

      <div className="relative max-w-5xl mx-auto">
        {/* Heading */}
        <h2
          data-aos="fade-up"
          className="text-4xl md:text-5xl font-extrabold text-center mb-20"
        >
          Tech <span className="text-[#F5C16C]">Skills</span>
        </h2>

        {/* Timeline */}
        <div className="relative">

          {/* Center Line */}
          <div className="absolute left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-[#F5C16C] via-white/30 to-transparent"></div>

          {/* Skill Items */}
       <div className="flex flex-col" style={{ rowGap: '1%' }}>
  {skills.map((skill, index) => {
    const isLeft = index % 2 === 0;

    return (
      <div
        key={skill}
        data-aos={isLeft ? "fade-right" : "fade-left"}
        className={`relative flex ${
          isLeft
            ? "justify-start pr-10 md:pr-28"
            : "justify-end pl-10 md:pl-28"
        }`}
      >
        {/* Skill Box */}
        <div className="w-full md:w-[44%] group">
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-7 py-6 shadow-xl transition-all duration-300 hover:scale-[1.06] hover:border-[#F5C16C]">
            <h3 className="text-xl md:text-2xl font-semibold tracking-wide group-hover:text-[#F5C16C] transition">
              {skill}
            </h3>
          </div>
        </div>

        {/* Timeline Dot */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-4 h-4 rounded-full bg-[#F5C16C] shadow-[0_0_18px_#F5C16C]"></div>
        </div>
      </div>
    );
  })}
</div>


        </div>
      </div>
    </section>
  );
}

export default Skills;
