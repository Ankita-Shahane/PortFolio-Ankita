import profile from "../assets/profile.jpeg"
function Home() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden text-white"
    >
      {/* Animated Gradient Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(-45deg, #970D1A, #4E204D, #970D1A, #4E204D)",
          backgroundSize: "400% 400%",
          animation: "gradientBG 5s ease infinite",
        }}
      ></div>

      {/* Inline keyframes */}
      <style>
        {`
          @keyframes gradientBG {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>

      {/* Glass Card */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center bg-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20">

          {/* TEXT */}
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Hello, I’m <span className="text-black">Ankita</span>
            </h1>

          <p className="mt-4 text-lg md:text-xl text-gray-200">
  Motivated Computer Science graduate with  
  <span className="text-white font-semibold">
    {" "}Java Full Stack Development and modern web technologies
  </span>
</p>



            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="px-6 py-3 rounded-full bg-white text-[#970D1A] font-semibold hover:scale-105 transition"
              >
                Explore Work
              </a>

              <a
                href="src/assets/FullStack_Java_Resume_Ankitas.pdf"
                download
                className="px-6 py-3 rounded-full border border-white font-semibold hover:bg-white hover:text-[#4E204D] transition"
              >
                Resume
              </a>
            </div>
          </div>

          {/* IMAGE */}
          <div className="flex justify-center">
            <div className="relative animate-bounce-slow">
              <img
                src={profile}
                alt="Ankita"
                className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl shadow-2xl"
              />

              {/* Image border */}
              <div className="absolute inset-0 rounded-2xl ring-2 ring-white/30"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Home;
