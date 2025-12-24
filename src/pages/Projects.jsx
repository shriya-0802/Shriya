import { Link } from "react-router-dom";
import { CTA } from "../components";
import { projects } from "../constants";
import { arrow } from "../assets/icons";

const Projects = () => {
  return (
    <section className="max-container pt-28">
      <h1 className="head-text mb-4">
        My{" "}
        <span className="blue-gradient_text font-semibold">
          Projects
        </span>
      </h1>

      <p className="text-slate-500 leading-relaxed max-w-3xl">
        I've embarked on numerous projects throughout these 4 years, but these are
        the ones I hold closest to my heart. Many of them are open-source, so feel
        free to explore the codebase and contribute ideas.
      </p>

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-20 my-20">
        {projects.map((project) => (
          <div key={project.name} className="project-card">
            {/* ICON */}
            <div className="project-icon-wrapper">
              <img
                src={project.iconUrl}
                alt={project.name}
                className="project-icon"
              />
            </div>

            {/* CONTENT */}
            <h4 className="text-2xl font-poppins font-semibold mt-4">
              {project.name}
            </h4>

            <p className="mt-3 text-slate-600 leading-relaxed">
              {project.description}
            </p>

            <div className="mt-5 flex items-center gap-2 font-poppins">
              <Link
                to={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-600 hover:underline"
              >
                Live Link
              </Link>
              <img src={arrow} alt="arrow" className="w-4 h-4" />
            </div>
          </div>
        ))}
      </div>

      <hr className="border-slate-200" />
      <CTA />
    </section>
  );
};

export default Projects;
