import React from "react";
import { BiChevronDown } from "react-icons/bi";

const Introduction = () => {
  return (
    <section
      id="introduction"
      className="bg-black w-full flex xl:flex-row flex-col-reverse justify-center gap-10 items-center padding-x"
    >
      <div>
        <h1 className="text-[#F05733] text-5xl font-bold mb-2">Introduction</h1>
        <p>
          We've all been in the mud once, and now we've decided to fight it out.
          Pay tribute to those pioneers of WEB3 and the warriors who dedicated
          their love to the blockchain. Save the lucky ones alive, join us to
          save the future! Our mission is to empower everyone to share wealth
          and succeed.
        </p>
        <span className="text-gray-400">read more...</span>
        <div className="mt-3 w-[138px] h-[36px] flex items-center bg-[#F05733] px-3 py-2 md:px-4 md:py-2 rounded-3xl text-sm md:text-base">
        <p>Documents</p>
        <BiChevronDown />
      </div>
      </div>
      
      <div>
        <img src="/assets/section2_img.png" alt="section2 image" />
      </div>
    </section>
  );
};

export default Introduction;
