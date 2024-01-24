import { useState } from "react";
import { Element } from "react-scroll";
import NavBarLinks from "./NavBarLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "../index.css";

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const gradientStyle = {
    background: "linear-gradient(90deg, #A984E5, #617DC3)",
    WebkitBackgroundClip: "text",
    color: "transparent",
  };

  return (
    <Element name="homeSection">
      <div className="relative">
        <div className="w-full flex flex-col justify-between py-4 text-xl font-ebrima text-white nav">
          <div className="flex justify-between px-6 md:px-12 lg:px-24 items-center">
            <h2
              className="font-ebrimaBold text-2xl lg:text-3xl leading-tight tracking-wide z-10"
              style={gradientStyle}
            >
              &lt;CodeSketch&gt;
            </h2>
            <button className="z-50 lg:hidden" onClick={toggleMobileMenu}>
              <FontAwesomeIcon icon={mobileMenuOpen ? faTimes : faBars} />
            </button>
            <div className="hidden lg:block">
              <NavBarLinks />
            </div>
          </div>
        </div>
        <div
          className={`mobileMenu lg:hidden bg-[#101010] absolute w-full top-0 z-10 ${
            mobileMenuOpen ? "open" : "closed"
          }`}
        >
          <div className={`py-10 ${mobileMenuOpen ? "open" : "closed"}`}>
            <NavBarLinks />
          </div>
        </div>
      </div>
    </Element>
  );
};

export default NavBar;
