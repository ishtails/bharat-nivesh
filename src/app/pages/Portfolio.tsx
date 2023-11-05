"use client";
import PortfolioCard from "@/components/PortfolioCard";
import React, { useRef, useState } from "react";
import Navigate from "@/components/Navigate";
import Image from "next/image";
import underline from "../../assets/underline.svg";
import longterm_port from "../../assets/gallery_longterm.svg";
import { portfolios } from "../../data/db";

const Portfolio = () => {
  const [currPortfolio, setCurrPortfolio] = useState("");

  return (
    //Portfolios
    <div className="flex flex-col items-center h-full pb-4 mx-10 mt-24 xl:mx-auto relative">
      <div className="flex flex-col items-center justify-center mb-10">
        <h1 className="text-center text-5xl font-semibold">
          Get a portfolio that’s invested in you.
        </h1>
        <p className="text-center text-xl w-[70%]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna.
        </p>
        <Image src={underline} alt="" className="absolute left-[38%] top-28" />
      </div>

      <div className="flex flex-col items-center justify-content-center">
        {portfolios.map((portfolio) => (
          <div
            key={portfolio.key}
            className=""
            onMouseEnter={() => {
              setCurrPortfolio(portfolio.title);
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
    </div>
  );
};

export default Portfolio;
