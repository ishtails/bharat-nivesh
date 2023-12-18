import React from "react";
import Image from "next/image";
import logo from "../../public/assets/logo_3.svg";

const Footer = () => {
  return (
    <div className="bg-[#02190F] p-10 pb-2 text-[#CECECE]">
      <div className="flex flex-col-reverse mb-10 sm:flex-row sm:space-x-16 items-center justify-center">
        <div className="sm:px-8 sm:max-w-[40%] mt-5 sm:mt-0 flex flex-col items-center">
          <span className="font-bold">Address: </span>
          <p>
            Nivesh Bharat Finserv Private Limited (Under approval) 1st Floor,
            Plot no. 21, Sindhi Colony, Above City Décor, Opposite Gumanpura
            Flyover, Kota, Rajasthan-324006
          </p>
          <span className="font-bold mt-4">Contact Us: </span>
          <p>Call: - +91-8860100478</p>
          <p>Email: - care@niveshbharat.com</p>
        </div>
        <div className="flex flex-col items-center justify-content-center">
          <Image src={logo} alt="logo" />
        </div>
      </div>
      <hr className="text-[#FFFFFF]" />
      <div className="text-[#BBBBBB]">
        <p className="text-[10px] mt-2 text-center">
          Nivesh Bharat Finserv Private Limited is an AMFI registered advisor of
          Mutual Funds (ARN-000000) Mutual Fund investments are subject to
          market risks. Please read all scheme related documents carefully
          before investing. Past performance is not an indicator of future
          returns.
        </p>
      </div>
    </div>
  );
};

export default Footer;
