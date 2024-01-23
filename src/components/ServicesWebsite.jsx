import React from "react";
import WebDevImg from "../assets/service_img/webdev_img.svg";

const ServicesWebsite = () => {
  const gradientStyle = {
    background: "linear-gradient(90deg, #4462FF, #9856FF)",
    WebkitBackgroundClip: "text",
    color: "transparent",
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="z-10">
          <img src={WebDevImg} width="70%" alt="" />
        </div>
        <div className="max-w-[600px]">
          <h2
            className="font-ebrimaBold text-white text-2xl leading-tight tracking-[4.19px] pb-[50px] "
            style={gradientStyle}
          >
            02. Website Development
          </h2>
          <div className="text-white text-base font-ebrima  tracking-[1.9px] leading-[24px] max-w-[600px] text-justify">
            <p>
              Elevate your online presence with CodeSketch. Our website
              development services are designed to make a lasting impact,
              featuring:
            </p>
            <ul className="list-disc pt-[30px] pb-[30px]">
              <li className="ml-[40px]">
                <span className="font-ebrimaBold">HTML:</span> We skillfully
                structure your web content, ensuring clarity and user-friendly
                navigation.
              </li>
              <li className="ml-[40px]">
                <span className="font-ebrimaBold">CSS:</span> Immerse your
                audience in visually appealing and responsive layouts, creating
                a seamless and captivating user experience.
              </li>
              <li className="ml-[40px]">
                <span className="font-ebrimaBold">JavaScript:</span> Add
                interactivity and dynamism to your website, engaging your
                audience with immersive functionalities.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesWebsite;
