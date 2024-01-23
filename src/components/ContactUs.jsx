import React from "react";
import Form from "./Form";
import MailImage from "../assets/contact_img/Mail.svg";
import { Element } from "react-scroll";
import Reveal from "./Reveal";

const ContactUs = () => {
  const circleStyle1 = {
    width: "600px",
    height: "600px",
    borderRadius: "784px",
    background: "rgba(169, 132, 229, 0.60)",
    filter: "blur(300px)",
    position: "absolute",
    top: "150px",
    right: "170px",
    overflow: "hidden",
    zIndex: 1,
  };

  return (
    <Element name="contactUsSection">
      <div className="bg-[#1B1529] relative overflow-hidden pb-[50px] px-10">
        <div style={circleStyle1}></div>
        <Reveal>
          <div className="max-w-[1600px] mx-auto pt-[50px]">
            <h2 className="font-ebrimaBold text-white text-4xl leading-tight tracking-[4.32px]">
              CONTACT US
            </h2>
            <div className="flex justify-between">
              <div className="w-full">
                <Form />
              </div>
              <img className="z-10" src={MailImage} width="40%" alt="" />
            </div>
          </div>
        </Reveal>
      </div>
    </Element>
  );
};

export default ContactUs;
