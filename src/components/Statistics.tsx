import React from "react";
import Image from "next/image";
import stats1 from "../../public/assets/stats_1.svg";
import stats2 from "../../public/assets/stats_2.svg";
import stats3 from "../../public/assets/stats_3.svg";

const Statistics = () => {
  return (
    <div className="max-w-6xl items-center justify-center">
      <div className="flex flex-col sm:flex-row gap-10 p-10 justify-between">
        <div className="flex flex-col items-center justify-content-center">
          <Image src={stats3} alt="investor" />
          <span className="pt-2 font-bold text-[25px]">1000+</span>
          <p>Trusted Clients</p>
        </div>
        <div className="flex flex-col items-center justify-content-center">
          <Image src={stats1} alt="AUM" />
          <span className="pt-2 font-bold text-[25px]">Rs. 30Cr+</span>
          <p>Assets Under Management (AUM)</p>
        </div>
        <div className="flex flex-col items-center justify-content-center">
          <Image src={stats2} alt="Experience" />
          <span className="pt-2 font-bold text-[25px]">10+ Years</span>
          <p>Total Experience</p>
        </div>
      </div>

      <p className="px-8 pb-8 text-center">
        Our boutique investment firm crafts unique portfolios to fit each
      client&apos;s needs, risk appetite, time horizon, and goals. With us, your
        investment strategy will be as one-of-a-kind as you are.
      </p>
    </div>
  );
};

export default Statistics;
