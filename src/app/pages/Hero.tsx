import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <div
      id="hero"
      className="text-center h-full max-w-5xl px-4 mx-10 sm:mt-14 xl:mx-auto"
    >
      <h1 className="text-5xl font-bold font-lexend align-center xl:text-7xl">
        <p>
          Customized financial plans to match your goals and{" "}
          <span className="text-p_green-500">risk tolerance.</span>
        </p>
      </h1>
      <p className="text-xl text-body py-5">
        Ready to build your dream portfolio with us? Let’s unveil your perfect
        investment strategy.
      </p>
      <button className="items-center">
        <p className="font-medium px-10 py-5 text-white transition rounded-md cursor-pointer bg-p_green-500 hover:bg-p_green-900">
          Get Started!
        </p>
      </button>
    </div>
  );
};

export default Hero;
