import React from "react";
import {
  FaLocationArrow,
  FaEnvelope,
  FaPhone,
  FaClock,
  FaGlobe,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact bg-[#faf4f5]">
      <h2 className="title">Contact</h2>

      <div className="containe flex lg:flex-row lg:gap-50 lg:items-center flex-col-reverse gap-5 sm:gap-10">
        <ul className="list-none flex flex-col gap-3 sm:gap-5">
          <li className="flex items-center gap-3">
            <FaLocationArrow className="text-[#555555]" />
            <p className="text-[14px] sm:text-[16px] lg:text-[18px] text-black">
              xxxx Tunisie, Gabes cite El Amel 4
            </p>
          </li>
          <li className="flex items-center gap-3">
            <FaEnvelope className="text-[#555555]" />
            <p className="text-[14px] sm:text-[16px] lg:text-[18px] text-black">
              infos@coffeeshopweb.com
            </p>
          </li>
          <li className="flex items-center gap-3">
            <FaPhone className="text-[#555555]" />
            <p className="text-[14px] sm:text-[16px] lg:text-[18px] text-black">
              + (123) 12-345-678
            </p>
          </li>
          <li className="flex items-center gap-3">
            <FaClock className="text-[#555555]" />
            <p className="text-[14px] sm:text-[16px] lg:text-[18px] text-black">
              Monday - Friday: 9:00 AM - 5:00 PM
            </p>
          </li>
          <li className="flex items-center gap-3">
            <FaClock className="text-[#555555]" />
            <p className="text-[14px] sm:text-[16px] lg:text-[18px] text-black">
              Saturday: 10:00 AM - 1:00 PM
            </p>
          </li>
          <li className="flex items-center gap-3">
            <FaGlobe className="text-[#555555]" />
            <p className="text-[14px] sm:text-[16px] lg:text-[18px] text-black">
              www.gognet1.com
            </p>
          </li>
        </ul>

        <form className="lg:max-w-[50%]" onSubmit={(e) => e.preventDefaultr()}>
          <input
            type="text"
            className="w-full h-[40px] sm:h-[50px] border-1 border-solid border-[#ccc] text-[#252525] bg-white rounded-lg outline-none focus:border-[#f3961c] placeholder:text-[#3b141c] placeholder:opacity-50 placeholder:text-[13px] placeholder:sm:text-[15px]"
            placeholder="Your name"
            onChange={(e) => (e.target.value = e.target.value.toUpperCase())}
            required
          />
          <input
            type="email"
            className="w-full h-[40px] sm:h-[50px] border-1 border-solid border-[#ccc] text-[#252525] bg-white rounded-lg outline-none focus:border-[#f3961c] placeholder:text-[#3b141c] placeholder:opacity-50 placeholder:text-[13px] placeholder:sm:text-[15px]"
            placeholder="Your email"
            onChange={(e) => (e.target.value = e.target.value.toUpperCase())}
            required
          />
          <textarea
            className="w-full h-[50px] sm:h-[70px] resize-y border-1 border-solid border-[#ccc] text-[#252525] bg-white rounded-lg outline-none focus:border-[#f3961c] placeholder:text-[#3b141c] placeholder:opacity-50 placeholder:text-[13px] placeholder:sm:text-[15px]"
            placeholder="Your chat"
            onChange={(e) => (e.target.value = e.target.value.toUpperCase())}
            required
          ></textarea>
          <button
            type="submit"
            className="transition-all text-white border-1 hover:bg-transparent hover:text-[#3b141c] border-[#3b141c] bg-[#3b141c] rounded-2xl"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
