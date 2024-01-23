import React from "react";
import AboutImage1 from "../assets/about_img/about_image1.jpg";
import AboutImage2 from "../assets/about_img/about_image2.jpg";
import { Element } from "react-scroll";
import Reveal from "./Reveal";

const About = () => {
  return (
    <Element name="aboutSection">
      <div className="relative overflow-hidden text-justify pb-[50px] px-10">
        <div>
          <Reveal>
            <div className="max-w-[1600px] mx-auto pt-[40px]">
              <div className="flex">
                <div className="text-white text-base max-w-[700px] tracking-[1.9px] leading-[24px]">
                  <p className="pb-[50px]">
                    <h2 className="font-ebrimaBold text-white text-4xl leading-tight tracking-[4.19px] pb-10">
                      ABOUT US
                    </h2>
                    Experience the power of ReactJS and Java Spring Boot with
                    our expert team. We build scalable, high-performance web
                    applications that not only meet your current needs but also
                    lay the groundwork for future growth. Stay ahead of the
                    curve with our commitment to the latest industry trends.
                  </p>
                  <p>
                    At CodeSketch, we understand that the digital landscape is
                    constantly evolving, and staying ahead of the curve is
                    crucial. Whether you need a robust web application to power
                    your business or a captivating landing page to make a
                    lasting impression, we've got you covered.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
          <div className="absolute top-0 right-0">
            <div className="z-20 bg-gradient-to-r from-[#0F0F10] via-transparent to-transparent absolute w-full h-full"></div>
            <img src={AboutImage1} width="500px" alt="" className="z-10" />
          </div>
        </div>
        <div>
          <Reveal>
            <div className="max-w-[1600px] mx-auto pt-[80px]">
              <div className="flex flex-row-reverse">
                <div className="text-white text-base max-w-[700px] tracking-[1.9px] leading-[24px]">
                  <h2 className="font-ebrimaBold text-white text-4xl leading-tight tracking-[4.19px] pb-10 pt-[95px]">
                    WHAT WE DO?
                  </h2>
                  <span className="text-[#A985E4] text-2xl font-ebrimaBold">
                    01.
                  </span>
                  <p className="pb-[50px]">
                    Welcome to <span></span>CodeSketch, where innovation meets
                    excellence in the world of web applications and digital
                    solutions. With a passion for cutting-edge technologies, we
                    specialize in crafting dynamic web applications using
                    ReactJS and Java Spring Boot. Our expertise extends beyond
                    mere functionality to create seamless, intuitive, and
                    visually appealing user experiences.
                  </p>
                  <span className="text-[#667EC5] text-2xl font-ebrimaBold">
                    02.
                  </span>
                  <p>
                    First impressions matter. Our team specializes in creating
                    visually stunning and functional landing pages and websites.
                    Whether you're launching a product or establishing your
                    online presence, we have the expertise to bring your vision
                    to life. Join us in building digital experiences that leave
                    a lasting impact.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
          <div className="absolute top-[540px] left-0 ">
            <div className="z-20 bg-gradient-to-r from-transparent via-transparent to-[#0F0F10] absolute w-full h-full"></div>
            <img src={AboutImage2} width="500px" alt="" className="z-10" />
          </div>
        </div>
      </div>
    </Element>
  );
};

export default About;
