import React from "react";
import ServicesWebApp from "./ServicesWebApp";
import ServicesWebsite from "./ServicesWebsite";
import { Element } from "react-scroll";
import Reveal from "./Reveal";

const Services = () => {
  const circleStyle1 = {
    width: "500px",
    height: "500px",
    borderRadius: "784px",
    background: "rgba(169, 132, 229, 0.50)",
    filter: "blur(200px)",
    position: "absolute",
    top: "100px",
    right: "300px",
    overflow: "hidden",
    zIndex: 1,
  };

  const circleStyle2 = {
    width: "500px",
    height: "500px",
    borderRadius: "784px",
    background: "rgba(169, 132, 229, 0.50)",
    filter: "blur(200px)",
    position: "absolute",
    bottom: "-50px",
    left: "120px",
    zIndex: 1,
  };

  return (
    <Element name="servicesSection">
      <div className="bg-[#1B1529] relative overflow-hidden px-10">
        <div>
          <div style={circleStyle1}></div>
          <div style={circleStyle2}></div>
        </div>
        <div className="max-w-[1600px] mx-auto pt-[50px] pb-[50px]">
          <Reveal>
            <ServicesWebApp />
          </Reveal>

          <div className="pt-[50px]">
            <Reveal>
              <ServicesWebsite />
            </Reveal>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Services;
