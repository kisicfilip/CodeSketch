import HeroLogo from "../assets/hero_img/Hero_logo.png";
import { Link } from "react-scroll";
import "../index.css";
import { Element } from "react-scroll";

const Hero = () => {
  return (
    <div>
      <div className="flex justify-center items-center max-w-[1600px] mx-auto py-[100px]">
        <div className=" relative">
          <img src={HeroLogo} alt="" className="hero_logo_img" />
        </div>
        <div className="flex flex-col flex-1">
          <div className="text-white leading-tight tracking-wider font-ebrimaBold text-7xl flex flex-col">
            <span>
              Design in <span className="text-[#A984E5]">SKETCH</span>
            </span>
            <span className="indent-[100px]">
              Develop in <span className="text-[#617DC3]">CODE</span>
            </span>
          </div>
          <div className="text-white leading-tight tracking-wide mt-10">
            <Link
              to="contactUsSection"
              smooth={true}
              duration={500}
              className="font-ebrimaBold px-[30px] py-[10px] bg-[#657EC5] rounded-[10px] shadow-lg mr-10 cursor-pointer contact-us-btn "
            >
              CONTACT US
            </Link>
            <Link
              to="servicesSection"
              smooth={true}
              duration={500}
              className="font-ebrima border-solid border-2 border-[#A984E5] rounded-[10px] px-[30px] py-[10px] cursor-pointer our-services-btn shadow-lg"
            >
              OUR SERVICES
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
