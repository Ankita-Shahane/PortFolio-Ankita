import { useState, useEffect } from "react";

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <nav className="fixed w-full top-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow z-50 transition-colors duration-300">
    <div className="max-w-7xl mx-auto px-6 py-4 flex justify-center items-center relative"> {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium dark:text-white">
          <li><a href="#home" className="text-black text-xl md:text-2xl font-semibold">Home</a></li>
           <li><a href="#about" className="text-black text-xl md:text-2xl font-semibold">About</a></li>
           <li><a href="#skills" className="text-black text-xl md:text-2xl font-semibold">Skills</a></li>
            <li><a href="#projects" className="text-black text-xl md:text-2xl font-semibold">Projects</a></li>
          <li><a href="#contact" className="text-black text-xl md:text-2xl font-semibold">Contact</a></li>
         
        </ul>

        {/* Controls (centered on mobile) */}
        <div className="flex items-center gap-4 md:hidden absolute right-6">
          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-2 py-1 rounded bg-gray-200 dark:bg-gray-700 transition-colors"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          {/* Mobile Menu Button */}
          <button
            className="text-2xl dark:text-white relative z-50"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={`block transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-1" : ""}`}>☰</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white/90 dark:bg-gray-800/90 backdrop-blur-md px-6 pb-4 transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-60 mt-0" : "max-h-0 mt-0"
        } flex flex-col items-center`}
      >
        <a className="block py-2 hover:text-[#F5C16C] transition-colors" href="#home">Home</a>
        <a className="block py-2 hover:text-[#F5C16C] transition-colors" href="#about">About</a>
        <a className="block py-2 hover:text-[#F5C16C] transition-colors" href="#skills">Skills</a>
        <a className="block py-2 hover:text-[#F5C16C] transition-colors" href="#projects">Projects</a>
        <a className="block py-2 hover:text-[#F5C16C] transition-colors" href="#contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
