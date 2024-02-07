import React from "react";
import Image from "next/image";
import stats1 from "../../public/assets/stats_1.svg";
import stats2 from "../../public/assets/stats_2.svg";
import stats3 from "../../public/assets/stats_3.svg";
import underline from "../../public/assets/underline.svg";

const Statistics = () => {
  return (
    <div className="max-w-6xl items-center justify-center">
      <h1 className="text-center text-5xl relative font-semibold">About Us</h1>
      <div className="w-full mt-2 mb-10 flex justify-center">
        <Image src={underline} alt="underline" className="w-auto h-auto" />
      </div>
      <div className="flex flex-col sm:flex-row gap-10 p-10 justify-between">
        <div className="flex flex-col bg-p_green-300 items-center justify-center p-10 rounded-xl">
          <Image src={stats3} alt="investor" />
          <span className="pt-2 font-bold text-[25px]">1000+</span>
          <p className="">Trusted Clients</p>
        </div>
        <div className="flex flex-col bg-p_green-300 items-center justify-center p-10 rounded-xl">
          <Image src={stats1} alt="AUM" />
          <span className="pt-2 font-bold text-[25px]">Rs. 30Cr+</span>
          <p>Assets Under Management (AUM)</p>
        </div>
        <div className="flex flex-col bg-p_green-300 items-center justify-center p-10 rounded-xl">
          <Image src={stats2} alt="Experience" />
          <span className="pt-2 font-bold text-[25px]">10+ Years</span>
          <p>Total Experience</p>
        </div>
      </div>

      <p className="px-8 pb-8 font-semibold text-center">
        Our boutique investment firm crafts unique portfolios to fit each
        client&apos;s needs, risk appetite, time horizon, and goals. With us,
        your investment strategy will be as one-of-a-kind as you are.
      </p>
    </div>
  );
};

export default Statistics;
