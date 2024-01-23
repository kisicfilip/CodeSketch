import React from "react";

const Form = () => {
  return (
    <div>
      <form
        className="flex flex-col max-w-[450px] pt-[50px]"
        action=""
        method="post"
      >
        <label
          className="font-ebrima text-white text-xl leading-tight tracking-[2.4px] pb-4 "
          htmlFor="fullName"
        >
          Full Name
        </label>
        <input
          className="border-b-2 border-white  outline-none bg-transparent text-lg text-white pb-2"
          placeholder="Filip Kisic"
          type="text"
        />
        <label
          className="font-ebrima text-white text-xl leading-tight tracking-[2.4px] pt-10 pb-4 "
          htmlFor="email"
        >
          Enter your email address
        </label>
        <input
          className="border-b-2 border-white  outline-none bg-transparent text-lg text-white pb-2"
          placeholder="info@codesketch.hr"
          type="text"
        />
        <label
          className="font-ebrima text-white text-xl leading-tight tracking-[2.4px] pt-10 pb-4 "
          htmlFor="subject"
        >
          Subject
        </label>
        <input
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
          className="rounded-[5px] outline-none px-2 py-2"
          name="message"
          id="message"
          cols="30"
          rows="5"
        ></textarea>
        <button className="text-white font-ebrimaBold w-full h-[50px] bg-[#657EC5] rounded-[10px] shadow-lg mt-5">
          SEND MESSAGE
        </button>
      </form>
    </div>
  );
};

export default Form;
