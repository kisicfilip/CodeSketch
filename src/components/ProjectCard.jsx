import React, { useState } from "react";
import ElsusLogo from "../assets/project_img/elsus-footer-logo.png";

const ProjectCard = ({ projectName, projectTag }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative ${isHovered ? "hovered" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-[352px] h-[279px] bg-gradient-to-br from-[#A984E5] to-[#3061AB] rounded-[15px] shadow flex justify-center items-center">
        <img src={ElsusLogo} width="80%" alt="" />
        {isHovered && (
          <div className="flex-col absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[rgba(26,26,26,0.7)] to-[rgba(56,56,56,0.3)] rounded-[15px] text-white font-bold text-3xl tracking-[2.88px] leading-[36px] uppercase">
            {projectName}
            <div className="text-sm font-ebrima">{projectTag}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
