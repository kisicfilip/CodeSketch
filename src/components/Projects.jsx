import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { Element } from "react-scroll";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const projectsData = [
    { name: "Elsus", tag: "Website" },
    // Add more projects with corresponding tags
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projectsData
      : projectsData.filter((project) => project.tag === activeFilter);

  const renderProjects = () => {
    return filteredProjects.map((project, index) => (
      <ProjectCard
        key={index}
        projectName={project.name}
        projectTag={project.tag}
      />
    ));
  };

  const handleFilterClick = (tag) => {
    setActiveFilter(tag);
  };

  return (
    <Element name="projectsSection">
      <div className="max-w-[1600px] mx-auto pt-[50px] project">
        <div className="flex items-baseline gap-10">
          <h2 className="font-ebrimaBold text-white text-4xl leading-tight tracking-[4.19px]">
            PROJECTS
          </h2>
          <div className="text-white font-ebrima text-base tracking-[1.9px] leading-[24px]">
            <span
              onClick={() => handleFilterClick("All")}
              className={`cursor-pointer ${
                activeFilter === "All" ? "font-ebrimaBold text-[#A984E5]" : ""
              }`}
            >
              All
            </span>
            <span
              onClick={() => handleFilterClick("Website")}
              className={`cursor-pointer mx-10 ${
                activeFilter === "Website"
                  ? "font-ebrimaBold text-[#A984E5]"
                  : ""
              }`}
            >
              Websites
            </span>
            <span
              onClick={() => handleFilterClick("WebApp")}
              className={`cursor-pointer ${
                activeFilter === "WebApp"
                  ? "font-ebrimaBold text-[#A984E5]"
                  : ""
              }`}
            >
              Web Applications
            </span>
          </div>
        </div>
        <div className="pt-[100px] flex gap-[64px] flex-wrap">
          {renderProjects()}
        </div>
      </div>
    </Element>
  );
};

export default Projects;
