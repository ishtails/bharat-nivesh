"use client";
import React from "react";
import Image from "next/image";
import underline from "../../public/assets/underline.svg";
import team from "../../public/assets/team.svg";


const OurTeam = () => {
  return (
    <div className="pt-6 flex flex-col items-center justify-center">
      <h1 className="font-semibold text-center text-5xl ">Our Team</h1>
      <div className="w-full mt-2 mb-10 flex justify-center">
        <Image src={underline} alt="underline" className="w-[300px]" />
      </div>
      <div className="lg:flex">
        <div className="rounded-2xl bg-p_darkgreen max-w-8xl text-white p-4 m-10">
          <div className="p-4 flex flex-col items-center justify-center">
            <Image src={team} alt="team" className="rounded-[50%] pb-4"/>
            <h1 className="font-bold">Pulkit Jain</h1>
            <p>Founder & CIO</p>
          </div>
        </div>
        <div className="rounded-2xl bg-p_darkgreen max-w-8xl text-white p-4 m-10">
          <div className="p-4 flex flex-col items-center justify-center">
            <Image src={team} alt="team" className="rounded-[50%] pb-4"/>
            <h1 className="font-bold">Pulkit Jain</h1>
            <p>Founder & CIO</p>
          </div>
        </div>
        <div className="rounded-2xl bg-p_darkgreen max-w-8xl text-white p-4 m-10">
          <div className="p-4 flex flex-col items-center justify-center">
            <Image src={team} alt="team" className="rounded-[50%] pb-4"/>
            <h1 className="font-bold">Pulkit Jain</h1>
            <p>Founder & CIO</p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default OurTeam;
