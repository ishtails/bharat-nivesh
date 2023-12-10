import React from "react";
import Image from "next/image";
import leader_image from "../../../public/assets/leader_image.svg";
import leader_bg from "../../../public/assets/leader_bg.svg";

const Leader = () => {
  return (
    <div>
      <Image
        src={leader_bg}
        className="absolute"
      />
      <div className="flex flex-row space-x-20 items-center justify-center relative text-white top-20">
        <Image src={leader_image} alt="" />
        <div className="py-32 w-[43%]">
          <p className="text-5xl pb-8">
            Deski combines excellent live chat, ticketing and automation that
            allow us to provide quality.
          </p>
          <p className="text-[33px]">Pulkit Jain</p>
          <p className="font-bold text-[33px]">Founder & CIO</p>
        </div>
      </div>
    </div>
  );
};

export default Leader;
