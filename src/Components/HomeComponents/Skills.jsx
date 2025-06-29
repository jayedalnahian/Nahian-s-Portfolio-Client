import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiFirebase,
  SiVercel,
} from "react-icons/si";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [<FaReact />, <SiTailwindcss />, <FaHtml5 />, <FaCss3Alt />],
      labels: ["React", "Tailwind CSS", "HTML5", "CSS3"],
    },
    {
      title: "Backend",
      skills: [<FaNodeJs />, <SiExpress />, <SiMongodb />],
      labels: ["Node.js", "Express.js", "MongoDB"],
    },
    {
      title: "Tools",
      skills: [<FaGitAlt />, <SiFirebase />, <SiVercel />],
      labels: ["Git", "Firebase", "Vercel"],
    },
  ];

  return (
    <section
      id="skills"
      className="bg-[#EFE4D2] py-16 px-6 md:px-20 text-[#254D70]"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#131D4F] mb-12">
          Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          {skillCategories.map((category, index) => (
            <motion.div
              whileHover={{ scale: 1.1 }}
              key={index}
              className="bg-white shadow-lg rounded-xl p-6 text-center"
            >
              <h3 className="text-xl font-semibold mb-4 text-[#954C2E]">
                {category.title}
              </h3>
              <div className="flex justify-center flex-wrap gap-6 text-4xl text-[#254D70] mb-4">
                {category.skills.map((icon, idx) => (
                  <div key={idx}>{icon}</div>
                ))}
              </div>
              <div className="flex justify-center flex-wrap gap-2 text-sm font-medium">
                {category.labels.map((label, idx) => (
                  <span
                    key={idx}
                    className="bg-[#954C2E] text-[#EFE4D2] px-3 py-1 rounded-full"
                  >
                    {label}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
