import React from "react";
import "../index.css";
import { Link, animateScroll as scroll } from "react-scroll";
import { Element } from "react-scroll";

const NavBar = () => {
  const gradientStyle = {
    background: "linear-gradient(90deg, #A984E5, #617DC3)",
    WebkitBackgroundClip: "text",
    color: "transparent",
  };
  return (
    <Element name="homeSection">
      <div className="flex justify-between px-[180px] pt-[20px] text-xl font-ebrima text-white nav">
        <h2
          className="font-ebrimaBold text-white text-2xl leading-tight tracking-[2.88px] pb-[50px] "
          style={gradientStyle}
        >
          &lt;CodeSketch&gt;
        </h2>
        <div>
          <Link
            to="aboutSection"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            About us
          </Link>
          <Link
            to="projectsSection"
            smooth={true}
            duration={500}
            className="cursor-pointer mx-10"
          >
            Projects
          </Link>
          <Link
            to="servicesSection"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            Services
          </Link>
          <Link
            to="faqSection"
            smooth={true}
            duration={500}
            className="cursor-pointer mx-10"
          >
            FAQ
          </Link>
          <Link
            to="contactUsSection"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </Element>
  );
};

export default NavBar;
