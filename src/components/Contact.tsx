"use client";
import React from "react";
import Image from "next/image";
import underline from "../../public/assets/underline.svg";
import contact from "../../public/assets/contact.svg";
import gradientO from "../../public/assets/orange-gradient.svg";
import gradientG from "../../public/assets/green-gradient.svg";

const Contact = () => {
  return (
    <div className="pt-6 flex flex-col items-center justify-center">
      <h1 className="font-semibold text-center text-5xl ">Contact Us</h1>
      <div className="w-full mt-2 mb-10 flex justify-center">
        <Image src={underline} alt="underline" className="w-[300px]" />
      </div>
      <div className="rounded-xl bg-p_darkgreen max-w-8xl text-white p-4 m-10">
        <div className="px-12 lg:grid grid-cols-2 gap-16">
          <div className="flex flex-col items-left justify-center">
            <div className="py-2">
              <label htmlFor="" className="text-[15px]">
                Name
              </label>
              <input className="rounded-sm h-auto border-[#8D8D8D] border-[0.5px] bg-[#343333] text-[13px] p-2 w-full" />
            </div>
            <div className="py-2">
              <label htmlFor="" className="text-[15px]">
                Email
              </label>
              <input className="rounded-sm h-auto border-[#8D8D8D] border-[0.5px] bg-[#343333] text-[13px] p-2 w-full " />
            </div>
            <div className="py-2">
              <label htmlFor="" className="text-[15px]">
                Message
              </label>
              <input className="rounded-sm h-24 border-[#8D8D8D] border-[0.5px] bg-[#343333] text-[13px] p-2 w-full " />
            </div>
            <button className="items-center py-10 w-[300px]">
              <p className="font-medium px-8 py-4 text-white transition rounded-md cursor-pointer bg-p_green-500 hover:bg-p_green-800">
                Send Message
              </p>
            </button>
          </div>
          <div>
            <Image src={gradientO} className="absolute left-[500px] top-48" />
            <div className="relative rounded-2xl bg-[#02190F] border-[#8D8D8D] border-[0.5px] text-white py-4 m-10 items-right">
              <Image
                src={contact}
                alt="contact"
                className="w-auto h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
