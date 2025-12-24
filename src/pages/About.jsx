import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { CTA } from "../components";
import { experiences, skills } from "../constants";
import profile from "../assets/images/profile.png";

import "react-vertical-timeline-component/style.min.css";

const About = () => {
  return (
    <section className="max-container">
      
      {/* HERO SECTION */}
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <h1 className="head-text mb-6">
            Hello, I'm{" "}
            <span className="blue-gradient_text font-semibold">
              Shriya
            </span>{" "}
            👋
          </h1>

          <p className="text-slate-500 max-w-2xl leading-relaxed">
            Software Engineering undergraduate at VIT Chennai with strong
            interests in Software Development and Data Analytics. I enjoy
            building scalable applications, working with data, and
            continuously expanding my skill set through real-world projects
            and internships.
          </p>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="flex justify-center lg:justify-end">
          <div className="about-image-wrapper">
            <div className="about-image-glass">
              <img
                src={profile}
                alt="Shriya Mohanty"
                className="about-image"
              />
            </div>
          </div>
        </div>
      </div>

      {/* SKILLS */}
      <div className="py-16">
        <h3 className="subhead-text mb-12">My Skills</h3>

        <div className="flex flex-wrap gap-14">
          {skills.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center gap-3">
              <div className="block-container w-28 h-28">
                <div className="btn-front">
                  <img
                    src={skill.imageUrl}
                    alt={skill.name}
                    className="w-16 h-16 object-contain"
                  />
                </div>
              </div>
              <p className="text-sm font-medium text-slate-700">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* EXPERIENCE */}
      <div className="py-20">
        <h3 className="subhead-text mb-6">Work Experience</h3>

        <VerticalTimeline>
          {experiences.map((experience) => (
            <VerticalTimelineElement
              key={experience.company_name}
              date={experience.date}
              iconStyle={{ background: experience.iconBg }}
              icon={
                <div className="flex justify-center items-center w-full h-full">
                  <img
                    src={experience.icon}
                    alt={experience.company_name}
                    className="w-[60%] h-[60%] object-contain"
                  />
                </div>
              }
            >
              <h3 className="text-xl font-poppins font-semibold">
                {experience.title}
              </h3>

              <p className="font-medium mt-1">
                {experience.company_name}
              </p>

              <ul className="my-5 list-disc ml-5 space-y-2">
                {experience.points.map((point, index) => (
                  <li key={index} className="text-sm leading-relaxed">
                    {point}
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>

      <CTA />
    </section>
  );
};

export default About;
