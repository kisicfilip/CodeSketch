import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Services from "./components/Services";
import FAQ from "./components/FAQ";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Reveal from "./components/Reveal";
import ScrollToTopButton from "./components/ScrollToTopButton";

function App() {
  const circleStyle1 = {
    width: "784px",
    height: "784px",
    borderRadius: "784px",
    background: "rgba(169, 132, 229, 0.50)",
    filter: "blur(482.29998779296875px)",
    position: "absolute",
    top: "calc(-392px)",
    right: "calc(-392px)",
    overflow: "hidden",
  };

  const circleStyle2 = {
    width: "784px",
    height: "784px",
    borderRadius: "784px",
    background: "rgba(90, 102, 184, 0.50)",
    filter: "blur(482.29998779296875px)",
    position: "absolute",
    bottom: "calc(-392px)",
    left: "calc(-392px)",
  };

  return (
    <div className="overflow-x-hidden">
      <ScrollToTopButton />
      <div className="relative overflow-hidden">
        <div>
          <div style={circleStyle1}></div>
          <div style={circleStyle2}></div>
        </div>
        <NavBar />
        <Reveal>
          <Hero />
        </Reveal>
      </div>
      <About />

      <div className="relative overflow-hidden  pb-[190px] px-10">
        <div>
          <div style={circleStyle1}></div>
          <div style={circleStyle2}></div>
        </div>
        <Reveal>
          <Projects />
        </Reveal>
      </div>
      <Services />
      <Reveal>
        <FAQ />
      </Reveal>
      <ContactUs />
      <div className="px-10">
        <Footer />
      </div>
    </div>
  );
}

export default App;
