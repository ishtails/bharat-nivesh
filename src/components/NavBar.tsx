"use-client";
import React from "react";
import MobileMenu from "./MobileMenu";
import logo2 from "../../public/assets/nav-logo.svg";
import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="z-0 flex text-[0.7rem] lg:text-[1rem] items-center justify-between max-w-6xl py-5 mx-10 xl:mx-auto ">
      <div>
        <Image src={logo2} alt="logo"/>
      </div>

      <div className="items-center hidden space-x-8 font-medium md:flex lg:space-x-14 text-black">
        <Link href="about">
          <p className="transition cursor-pointer hover:text-primary">About</p>
        </Link>
        <Link href="SIPCalculator">
          <p className="transition cursor-pointer hover:text-primary">
            SIP Calculator
          </p>
        </Link>
        <Link href="portfolio">
          <p className="transition cursor-pointer hover:text-primary">
            Portfolio
          </p>
        </Link>
        <Link href="footer">
          <p className="transition cursor-pointer hover:text-primary">
            Contact
          </p>
        </Link>
      </div>
      <div>
        <Link href="">
          <p className="font-medium px-10 py-4 text-white transition rounded-[80px] cursor-pointer bg-p_green-500 hover:bg-p_green-900">
            Connect with us
          </p>
        </Link>
      </div>

      <div className="relative md:hidden z-50">
        <MobileMenu />
      </div>
    </div>
  );
};

export default NavBar;
