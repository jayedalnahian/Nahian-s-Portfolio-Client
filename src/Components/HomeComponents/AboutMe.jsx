import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="bg-white md:min-h-screen px-6 md:px-20 py-16 flex flex-col md:flex-row items-center gap-12"
    >
      {/* Profile Image */}
      <motion.div
        whileHover={{ scale: 1.3 }}
        className="flex-1 flex justify-center"
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <img
          src="https://i.ibb.co/4ZLt5bhW/IMG-20250625-020833-min.jpg"
          alt="Jayed Al Nahian"
          className="w-72 h-72 object-cover rounded-xl border-4 border-[#954C2E] shadow-lg"
        />
      </motion.div>

      {/* About Text */}
      <motion.div
        className="flex-1 text-center md:text-left space-y-5"
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#131D4F]">
          About Me
        </h2>
        <p className="text-[#254D70] leading-relaxed text-lg">
          I'm <strong>Jayed Al Nahian</strong>, a passionate Full Stack
          Developer with a love for building efficient and visually engaging web
          applications. My journey started with curiosity about how websites
          work, and that led me to mastering the MERN stack.
        </p>
        <p className="text-[#254D70] leading-relaxed text-lg">
          I enjoy solving real-world problems and turning ideas into reality
          using clean code and powerful tools. I’m particularly drawn to
          frontend design and user experience.
        </p>
        <p className="text-[#254D70] leading-relaxed text-lg">
          Outside of programming, I love traveling, playing video games, and
          exploring new tech. I believe in continuous learning and always push
          myself to improve.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutMe;
