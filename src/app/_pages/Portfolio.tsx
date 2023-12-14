"use client";
import PortfolioCard from "@/components/PortfolioCard";
import React, { useRef, useState } from "react";
import Navigate from "@/components/Navigate";
import Image from "next/image";
import underline from "../../../public/assets/underline.svg";
import { portfolios } from "../../data/db";

function Portfolio() {
  const portfoliosRef = useRef<HTMLDivElement>(null);
  const [currPortfolio, setCurrPortfolio] = useState<number>(0);

  return (
    //Portfolios
    <div className="flex flex-col items-center h-full pb-4 mx-10 mt-24 xl:mx-auto relative">
      <div className="flex flex-col items-center justify-center mb-10">
        <h1 className="text-center text-5xl font-semibold">
          Get a portfolio that’s invested in you.
        </h1>
        <p className="text-center text-xl mt-2 w-[50vw]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna.
        </p>
        <div className="w-full mt-2 mb-10 flex justify-center">
          <Image src={underline} alt="underline" className="w-auto h-auto" />
        </div>
      </div>

      <div
        ref={portfoliosRef}
        className="max-w-[95vw] flex overflow-hidden space-x-80 mb-10"
        style={{
          width: "100%",
          overflowX: "auto",
          scrollBehavior: "smooth",
          scrollSnapType: "x mandatory",
        }}
      >
        {portfolios.map((portfolio, index) => (
          <div
            key={portfolio.key}
            className="w-full"
            onMouseEnter={() => {
              setCurrPortfolio(index);
            }}
          >
            <PortfolioCard
              title={portfolio.title}
              description={portfolio.desc}
              image={portfolio.image}
            />
          </div>
        ))}
      </div>
      <Navigate scrollRef={portfoliosRef} scrollBy={400} />
    </div>
  );
}

export default Portfolio;
