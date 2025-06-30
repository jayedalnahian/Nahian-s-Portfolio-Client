import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";

const MyProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    AOS.init({ duration: 1000, offset: 120, once: false });
  }, []);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get("https://my-portfolio-website-server-seven.vercel.app/projects");
        setProjects(res.data);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch projects");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <section className="bg-[#EFE4D2] py-16 px-6 md:px-20 text-center text-[#254D70]">
        <h2 className="text-3xl md:text-4xl font-bold text-[#131D4F] mb-6">Projects</h2>
        <p>Loading...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="bg-[#EFE4D2] py-16 px-6 md:px-20 text-center text-red-600">
        <h2 className="text-3xl md:text-4xl font-bold text-[#131D4F] mb-6">Projects</h2>
        <p>{error}</p>
      </section>
    );
  }

  return (
    <section id="projects" className="bg-[#EFE4D2] py-16 px-6 md:px-20 text-[#254D70]">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#131D4F] mb-12">
        Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-10">
        {projects.map((project) => (
          <div
            key={project.id}
            data-aos="fade-up"
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 space-y-3">
              <h3 className="text-xl font-bold text-[#131D4F]">{project.name}</h3>
              <p className="text-sm">{project.description}</p>
              <Link
                to={`/adminPanel/project/${project._id}`}
                className="inline-block bg-[#954C2E] text-[#EFE4D2] px-4 py-2 rounded hover:bg-[#7c3b23] transition text-sm"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyProjects;
