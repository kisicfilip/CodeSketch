import React, { useState } from "react";
import "../index.css";

const Form = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Email sent successfully!");
      } else {
        alert("Error sending email. Please try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div>
      <form
        className="flex flex-col max-w-[450px] pt-[50px]"
        onSubmit={handleSubmit}
      >
        <label
          className="font-ebrima text-white text-xl leading-tight tracking-[2.4px] pb-4"
          htmlFor="fullName"
        >
          Full Name
        </label>
        <input
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          className="border-b-2 border-white  outline-none bg-transparent text-lg text-white pb-2"
          placeholder="Filip Kisic"
          type="text"
        />

        <label
          className="font-ebrima text-white text-xl leading-tight tracking-[2.4px] pt-10 pb-4"
          htmlFor="email"
        >
          Enter your email address
        </label>
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="border-b-2 border-white  outline-none bg-transparent text-lg text-white pb-2"
          placeholder="info@codesketch.hr"
          type="text"
        />

        <label
          className="font-ebrima text-white text-xl leading-tight tracking-[2.4px] pt-10 pb-4"
          htmlFor="subject"
        >
          Subject
        </label>
        <input
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="border-b-2 border-white  outline-none bg-transparent text-lg text-white pb-2"
          placeholder="Website"
          type="text"
        />

        <label
          className="font-ebrima text-white text-xl leading-tight tracking-[2.4px] pt-10 pb-4"
          htmlFor="message"
        >
          Message
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="rounded-[5px] outline-none px-2 py-2"
          id="message"
          cols="30"
          rows="5"
        ></textarea>

        <button
          type="submit"
          className="text-white font-ebrimaBold w-full h-[50px] bg-[#657EC5] rounded-[10px] shadow-lg mt-5 form_btn"
        >
          SEND MESSAGE
        </button>
      </form>
    </div>
  );
};

export default Form;
