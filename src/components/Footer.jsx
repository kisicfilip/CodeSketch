import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
  const gradientStyle = {
    background: "linear-gradient(90deg, #A984E5, #617DC3)",
    WebkitBackgroundClip: "text",
    color: "transparent",
  };

  return (
    <div className="max-w-[1600px] mx-auto">
      <div className="flex justify-between items-center pt-10">
        <h2
          className="font-ebrimaBold text-white text-2xl leading-tight tracking-[2.88px]"
          style={gradientStyle}
        >
          &lt;CodeSketch&gt;
        </h2>
        <div className="font-ebrima text-white text-sm">
          <Link
            to="homeSection"
            smooth={true}
            duration={500}
            className="cursor-pointer mx-10"
          >
            Home
          </Link>
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
      <p className="text-white text-sm pt-5 text-justify pb-10">
        CodeSketch is your partner in turning ideas into digital realities. With
        a focus on web application development using technologies like ReactJS
        and Java Spring Boot, we create dynamic and scalable solutions that set
        your business apart. Our expertise extends to crafting visually stunning
        websites with HTML, CSS, and JavaScript, ensuring a strong online
        presence. At CodeSketch, innovation, quality, and client satisfaction
        are at the core of what we do. Let us transform your digital landscape
        with cutting-edge development and design.
      </p>
    </div>
  );
};

export default Footer;
