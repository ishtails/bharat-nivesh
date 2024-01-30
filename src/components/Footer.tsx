import React from "react";
import Image from "next/image";
import logo from "../../public/assets/logo_3.svg";

const Footer = () => {
  return (
    <div className="bg-[#02190F] p-10 pb-2 text-[#CECECE]">
      <div className="flex flex-col-reverse mb-10 sm:flex-row sm:space-x-16 items-center justify-center">
        <div className="flex items-center justify-content-center ">
          <Image src={logo} alt="logo" />
        </div>
        <div className="text-center w-[40%]">
          <span className="font-bold">Address: </span>
          <p className="">
            Mission Billion Finserv Private Limited 1st Floor, Plot. No. 21,
            Sindhi Colony, Above City Decor, Opposite Gumanpura Flyover, Kota,
            Rajasthan-324006 Nearest Landmark: - Near DP Jewellers, Kota
          </p>
        </div>
        <div className="">
          <span className="font-bold mt-4 ">Contact Us: </span>
          <p>Call: - +91-8860100478</p>
          <p>Email: - care@niveshbharat.com</p>
          <span className="font-bold mt-4">Business Hours: </span>
          <p>Monday to Saturday: 10:00 AM to 08:00 PM</p>
          <p>Sunday: Closed </p>
        </div>
      </div>
      <hr className="text-[#FFFFFF]" />
      <div className="text-[#BBBBBB]">
        <p className="text-xl mt-2 text-center">
          Mission Billion Finserv Private Limited is an AMFI registered mutual
          fund distributor (ARN – 283361)
        </p>
        <p className="text-[14px] text-center">
          Mutual fund investments are subject to market risks. Please read all
          scheme related documents carefully before investing. Past performance
          is not an indicator of future returns.
        </p>
      </div>
    </div>
  );
};

export default Footer;
