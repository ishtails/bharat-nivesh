import React from "react";
import Image from "next/image";
import stats1 from "../../public/assets/stats_1.svg";
import stats2 from "../../public/assets/stats_2.svg";
import stats3 from "../../public/assets/stats_3.svg";

const Statistics = () => {
  return (
    <div className="bg-p_green-500 flex p-10 justify-between">
      <p className="max-w-[25%]">
        Our boutique investment firm crafts unique portfolios to fit each
        client's needs, risk appetite, time horizon, and goals. With us, your
        investment strategy will be as one-of-a-kind as you are.
      </p>
      <div className="flex flex-col items-center justify-content-center">
        <Image src={stats1} />
        <span>250</span>
        <p>No. of Investors</p>
      </div>
      <div className="flex flex-col items-center justify-content-center">
        <Image src={stats2} />
        <span>Rs. 30Cr+</span>
        <p>Assets Under Management (AUM)</p>
      </div>
      <div className="flex flex-col items-center justify-content-center">
        <Image src={stats3} />
        <span>10+ Years</span>
        <p>Total Experience</p>
      </div>
    </div>
  );
};

export default Statistics;
