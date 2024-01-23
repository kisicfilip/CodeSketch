import React from "react";
import WebAppImg from "../assets/service_img/webapp_img.svg";

const ServicesWebApp = () => {
  const gradientStyle = {
    background: "linear-gradient(90deg, #4462FF, #9856FF)",
    WebkitBackgroundClip: "text",
    color: "transparent",
  };

  return (
    <div>
      <h2 className="font-ebrimaBold text-white text-4xl leading-tight tracking-[4.32px]">
        SERVICES
      </h2>
      <div className="flex flex-row-reverse justify-between items-center">
        <div className="z-10">
          <img src={WebAppImg} width="70%" alt="" />
        </div>
        <div className="max-w-[600px]">
          <h2
            className="font-ebrimaBold text-white text-2xl leading-tight tracking-[2.28px] pb-[50px] "
            style={gradientStyle}
          >
            01. Web Application Development
          </h2>
          <div className="text-white text-base font-ebrima  tracking-[1.9px] leading-[24px] max-w-[600px] text-justify">
            <p>
              Harness the full potential of cutting-edge technologies with our
              web application development services. Our expertise includes:
            </p>
            <ul className="list-disc pt-[30px] pb-[30px]">
              <li className="ml-[40px]">
                ReactJS for dynamic and responsive user interfaces.
              </li>
              <li className="ml-[40px]">
                Java Spring Boot for robust, scalable backend development.
              </li>
              <li className="ml-[40px]">
                MySQL for efficient and secure database management.
              </li>
            </ul>
            <p>
              Our commitment is to deliver web applications that not only meet
              but exceed your expectations, ensuring your digital presence is at
              the forefront of innovation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesWebApp;
