import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"; // npm install react-icons
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! Thank you.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="relative py-20 px-6 bg-gradient-to-b from-[#14040b] via-[#4E204D] to-[#970D1A] text-white"
    >
      <div className="max-w-2xl mx-auto text-center">
        {/* Title */}
        <h2
          data-aos="fade-up"
          className="text-4xl md:text-5xl font-extrabold mb-6"
        >
          Get in <span className="text-[#F5C16C]">Touch</span>
        </h2>
        <p
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-gray-300 mb-12"
        >
          I’m always open to discussing new projects or opportunities. Drop me a message!
        </p>

        {/* Contact Form */}
        <form
          data-aos="fade-up"
          className="bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg space-y-6"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 rounded-md bg-white/20 text-white placeholder-gray-300 focus:ring-2 focus:ring-[#F5C16C] outline-none transition"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 rounded-md bg-white/20 text-white placeholder-gray-300 focus:ring-2 focus:ring-[#F5C16C] outline-none transition"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="5"
            required
            className="w-full px-4 py-3 rounded-md bg-white/20 text-white placeholder-gray-300 focus:ring-2 focus:ring-[#F5C16C] outline-none transition resize-none"
          />
          <button
            type="submit"
            className="w-full bg-[#F5C16C] text-[#14040b] font-bold py-3 rounded-md hover:bg-yellow-400 transition"
          >
            Send Message
          </button>
        </form>

        {/* Email and Social Icons below the form */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="mt-10 space-y-4 text-center"
        >
          <p className="text-lg">
            Email:{" "}
            <a
              href="mailto:ankita@email.com"
              className="text-[#F5C16C] hover:underline"
            >
              ankita@email.com
            </a>
          </p>
          <div className="flex justify-center space-x-6 text-3xl">
            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F5C16C] hover:text-white transition-transform transform hover:scale-50"
              title="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0A66C2] hover:text-white transition-transform transform hover:scale-50"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1DA1F2] hover:text-white transition-transform transform hover:scale-50"
              title="Twitter"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
