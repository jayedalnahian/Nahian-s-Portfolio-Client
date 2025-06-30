import { Link, useParams } from "react-router";
import { GrUpdate } from "react-icons/gr";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await axios.get(`https://my-portfolio-website-server-seven.vercel.app/projects/${id}`);
        setProject(res.data);
        setError(null);
      } catch (err) {
        console.error("Error fetching project:", err);
        setError("Failed to load project. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#EFE4D2]">
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-[#254D70] border-t-transparent"></div>
          <p className="mt-4 text-lg text-[#254D70]">
            Loading project details...
          </p>
        </div>
      </div>
    );

  if (error)
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#EFE4D2]">
        <div className="text-center max-w-md p-6 bg-white/50 rounded-xl shadow-sm">
          <p className="text-lg text-red-500 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-[#254D70] text-[#EFE4D2] px-4 py-2 rounded hover:bg-[#1a3a59] transition"
          >
            Retry
          </button>
        </div>
      </div>
    );

  if (!project)
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#EFE4D2]">
        <div className="text-center max-w-md p-6 bg-white/50 rounded-xl shadow-sm">
          <p className="text-lg text-red-500">Project not found!</p>
          <a
            href="/projects"
            className="inline-block mt-4 bg-[#254D70] text-[#EFE4D2] px-4 py-2 rounded hover:bg-[#1a3a59] transition"
          >
            Back to Projects
          </a>
        </div>
      </div>
    );

  return (
    <motion.section
      className="min-h-screen px-4 md:px-10 lg:px-20 py-16 bg-[#EFE4D2] text-[#254D70]"
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.div
          className="mb-12 text-center"
          variants={fadeInUp}
          custom={0}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#131D4F] mb-3">
            {project.name}
          </h2>
          <div className="w-20 h-1 bg-[#954C2E] mx-auto"></div>
        </motion.div>

        {/* Image and Info Block */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start mb-16">
          <motion.div variants={fadeInUp} custom={1}>
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-auto rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
            {project.additionalImages?.length > 0 && (
              <div className="mt-4 grid grid-cols-3 gap-2">
                {project.additionalImages.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`${project.name} screenshot ${i + 1}`}
                    className="rounded-md cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => window.open(img, "_blank")}
                  />
                ))}
              </div>
            )}
          </motion.div>

          <motion.div className="space-y-6" variants={fadeInUp} custom={2}>
            <div className="prose max-w-none">
              <p className="text-lg leading-relaxed text-[#254D70]">
                {project.description}
              </p>
            </div>

            <div className="bg-white/50 p-5 rounded-lg shadow-sm">
              <h3 className="font-semibold text-[#131D4F] mb-3 text-xl">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-[#254D70] text-[#EFE4D2] px-3 py-1.5 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mt-2">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 bg-[#954C2E] text-[#EFE4D2] px-5 py-2.5 rounded-lg hover:bg-[#7c3b23] transition hover:shadow-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                  />
                </svg>
                Live Site
              </a>
              <a
                href={project.clientRepo}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 bg-[#254D70] text-[#EFE4D2] px-5 py-2.5 rounded-lg hover:bg-[#1a3a59] transition hover:shadow-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                Client Code
              </a>
              {project.serverRepo && (
                <a
                  href={project.serverRepo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 bg-[#254D70] text-[#EFE4D2] px-5 py-2.5 rounded-lg hover:bg-[#1a3a59] transition hover:shadow-md"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Server Code
                </a>
              )}
            </div>
          </motion.div>
        </div>

        {/* Content Sections */}
        <div className="space-y-12">
          {/* Features */}
          {project.features?.length > 0 && (
            <motion.div
              className="bg-white/50 p-6 md:p-8 rounded-xl shadow-sm"
              variants={fadeInUp}
              custom={3}
            >
              <h3 className="text-2xl font-semibold text-[#131D4F] mb-4 pb-2 border-b border-[#254D70]/20">
                Key Features
              </h3>
              <ul className="grid md:grid-cols-2 gap-4">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0">
                      <svg
                        className="h-5 w-5 text-[#954C2E]"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-[#254D70]">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* Challenges */}
          {project.challenges && (
            <motion.div
              className="bg-white/50 p-6 md:p-8 rounded-xl shadow-sm"
              variants={fadeInUp}
              custom={4}
            >
              <h3 className="text-2xl font-semibold text-[#131D4F] mb-4 pb-2 border-b border-[#254D70]/20">
                Challenges & Solutions
              </h3>
              <div className="prose max-w-none text-[#254D70]">
                {project.challenges}
              </div>
            </motion.div>
          )}

          {/* Future Plans */}
          {project.futurePlans && (
            <motion.div
              className="bg-white/50 p-6 md:p-8 rounded-xl shadow-sm"
              variants={fadeInUp}
              custom={5}
            >
              <h3 className="text-2xl font-semibold text-[#131D4F] mb-4 pb-2 border-b border-[#254D70]/20">
                Future Enhancements
              </h3>
              <div className="prose max-w-none text-[#254D70]">
                {project.futurePlans}
              </div>
            </motion.div>
          )}
        </div>

        <div className="flex justify-center items-center mx-auto gap-5">
          {/* Back button */}
          <motion.div
            className="mt-16 text-center"
            variants={fadeInUp}
            custom={6}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-[#254D70] text-[#EFE4D2] px-6 py-3 rounded-lg hover:bg-[#1a3a59] transition hover:shadow-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
              Back to Home
            </Link>
          </motion.div>

          
        </div>
      </div>
    </motion.section>
  );
};

export default ProjectDetails;
