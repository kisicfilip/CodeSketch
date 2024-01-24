import React from "react";
import { Link } from "react-scroll";
import "../index.css";

const NavBarLinks = () => {
  return (
    <div className="w-full">
      {/* Desktop Navigation */}
      <div className="hidden lg:flex lg:space-x-10">
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
          className="cursor-pointer"
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
          className="cursor-pointer"
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

      <div className="lg:hidden">
        <ul className="flex flex-col justify-center items-center gap-5 text-white font-ebrima navMob">
          <li className="w-fit">
            <Link
              to="aboutSection"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              About us
            </Link>
          </li>
          <li className="w-fit">
            <Link
              to="projectsSection"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              Projects
            </Link>
          </li>
          <li className="w-fit">
            <Link
              to="servicesSection"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              Services
            </Link>
          </li>
          <li className="w-fit">
            <Link
              to="faqSection"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              FAQ
            </Link>
          </li>
          <li className="w-fit">
            <Link
              to="contactUsSection"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBarLinks;
