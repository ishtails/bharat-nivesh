"use client";
import PortfolioCard from "@/components/PortfolioCard";
import React, { useRef, useState } from "react";
import Navigate from "@/components/Navigate";
import Image from "next/image";
import underline from "../../../public/assets/underline.svg";
import { portfolios } from "../../data/db";

function Portfolio() {
  const portfoliosRef = useRef<HTMLDivElement>(null);

  return (
    //Portfolios
    <div className="flex flex-col items-center h-full pb-4 mx-10 mt-24 xl:mx-auto">
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
        className="max-w-[95vw] flex overflow-x-scroll space-x-10 scrollbar-hide mb-10 scroll-smooth px-24 snap-x snap-mandatory"
      >
        {portfolios.map((portfolio) => (
          <PortfolioCard
            title={portfolio.title}
            description={portfolio.desc}
            image={portfolio.image}
          />
        ))}
      </div>

      <Navigate scrollRef={portfoliosRef} scrollBy={400} />
    </div>
  );
}

export default Portfolio;
