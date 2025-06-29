import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const HeroSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 120,
      once: false,
      easing: "ease-in-out-quad",
    });
  }, []);

  return (
    <section
      id="home"
      className="bg-[#EFE4D2] text-[#254D70] min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-16"
    >
      {/* Left Content */}
      <div
        data-aos="fade-top"
        className="flex-1 space-y-6 text-center md:text-left"
      >
        <h1
          className="text-4xl md:text-5xl font-bold text-[#131D4F]"
          
        >
          Hi, I'm Jayed Al Nahian
        </h1>

        <h2
          className="text-2xl font-semibold text-[#254D70]"
          
          data-aos-delay="300"
        >
          Full Stack Developer
        </h2>

        <p className="max-w-xl mx-auto md:mx-0" data-aos="fade-up" data-aos-delay="500">
          I build modern, responsive, and user-friendly web applications using
          the MERN stack. Passionate about coding and continuous learning.
        </p>

        {/* Buttons & Socials */}
        <div
          className="flex flex-col md:flex-row justify-center md:justify-start gap-4 mt-4"
          data-aos="fade-up"
          data-aos-delay="700"
        >
          <a
            href="/your-resume.pdf"
            download
            className="bg-[#954C2E] text-[#EFE4D2] px-6 py-2 rounded-lg font-medium hover:bg-[#7c3b23] transition shadow-md"
          >
            Download Resume
          </a>

          {/* Social Icons */}
          <div className="flex items-center gap-4 text-2xl mt-2 md:mt-0">
            <a
              href="https://github.com/jayedalnahian"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#954C2E]"
              data-aos="zoom-in"
              data-aos-delay="800"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/jayed-al-nahian-83b369317/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#954C2E]"
              data-aos="zoom-in"
              data-aos-delay="900"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.facebook.com/nahianlatsgo/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#954C2E]"
              data-aos="zoom-in"
              data-aos-delay="1000"
            >
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div
        data-aos="fade-left"
        className="flex-1 mb-10 md:mb-0 flex justify-center"
      >
        <img
          src="https://i.ibb.co/4ZLt5bhW/IMG-20250625-020833-min.jpg"
          alt="Nahian"
          className="w-64 h-64 rounded-full object-cover border-4 border-[#131D4F] shadow-lg"
          data-aos="zoom-in"
          data-aos-delay="200"
        />
      </div>
    </section>
  );
};

export default HeroSection;
