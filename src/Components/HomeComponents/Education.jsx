import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const educationData = [
  {
    degree: "Diploma in Computer Engineering",
    institute: "Global Institute of Science and Technology, Dinajpur",
    duration: "2023 – 2027 (Expected)",
    description:
      "Currently in 3rd semester out of 8 semesters. Studying Computer Engineering with a focus on Web Development, Python, Networking, and System Analysis. Actively building personal and academic projects to strengthen real-world development skills.",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="bg-white py-16 px-6 md:px-20 text-[#254D70]"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#131D4F] mb-12">
        <FaGraduationCap className="inline-block mr-2" />
        Education
      </h2>

      <div className="relative border-l-4 border-[#954C2E] pl-6 space-y-12">
        {educationData.map((item, index) => (
          <motion.div
            key={index}
            className="relative bg-[#EFE4D2] p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[1.25rem] top-5 w-5 h-5 bg-[#954C2E] rounded-full border-4 border-white shadow-md"></div>

            <h3 className="text-xl font-semibold text-[#131D4F]">
              {item.degree}
            </h3>
            <p className="text-md font-medium">{item.institute}</p>
            <p className="text-sm italic text-[#954C2E] mb-2">
              {item.duration}
            </p>
            <p className="text-sm">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
