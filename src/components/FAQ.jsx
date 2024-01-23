import React from "react";
import FAQQuestion from "./FAQQuestion";
import { Element } from "react-scroll";

const FAQ = () => {
  return (
    <Element name="faqSection">
      <div className="max-w-[1600px] mx-auto pt-[50px]">
        <div className="px-10">
          <h2 className="font-ebrimaBold text-white text-4xl leading-tight tracking-[4.32px] pb-10">
            FAQ
          </h2>
          <div>
            <FAQQuestion
              questionTitle="01. Can you explain the website development process?"
              questionAnswer="Experience the power of ReactJS and Java Spring Boot with our expert team. We build scalable, high-performance web applications that not only meet your current needs but also lay the groundwork for future growth. Stay ahead of the curve with our commitment to the latest industry trends."
            />
            <FAQQuestion
              questionTitle="02. How long does it take to develop a web application?"
              questionAnswer="Certainly! Our website development process involves structuring content with HTML, designing layouts with CSS for visual appeal, and incorporating interactive features using JavaScript. We collaborate closely with clients to understand their vision and deliver a customized online presence."
            />
            <FAQQuestion
              questionTitle="03. What sets your web applications apart from others?"
              questionAnswer="The development timeline varies based on the complexity of the project. We work efficiently to deliver high-quality solutions, and timelines are established in consultation with our clients."
            />
            <FAQQuestion
              questionTitle="04. Do you offer maintenance and support services?"
              questionAnswer="Our web applications stand out due to their dynamic interfaces, robust backend powered by Java Spring Boot, and efficient data management with MySQL. We prioritize innovation, scalability, and a user-centric approach in our development process."
            />
            <FAQQuestion
              questionTitle="05. How can I get started with your services?"
              questionAnswer="Yes, we provide ongoing maintenance and support to ensure your web applications and websites remain secure, up-to-date, and optimized for performance. Our team is readily available to address any concerns or implement enhancements."
            />
          </div>
        </div>
      </div>
    </Element>
  );
};

export default FAQ;
