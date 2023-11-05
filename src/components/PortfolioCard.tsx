"use-client";
import React from "react";
import Image from "next/image";

type Props = {
  key: string;
  title: string;
  description: string;
  image: any;
};

const PortfolioCard = ({ title, description, image }: Props) => {
  return (
    <div className="bg-p_green-900 py-10 mt-8 md:px-10 flex flex-col md:flex-row md:justify-between md:divide-x-2 space-x-2 items-center w-[70%] flex-shrink-0 snap-center rounded-xl divide-y-2 divide-neutral-200 md:divide-y-0">
      <div className="md:pl-10 w-[75%] p-5 md:pt-0 text-white">
        <h3 className="text-5xl font-semibold">{title}</h3>
        <p className="mt-2 max-w-[75vw] md:max-w-full text-xl text-[#C0BDBD]">
          {description}
        </p>
      </div>
      <Image
        src={image}
        width={300}
        height={300}
        alt="PortfolioCard Image"
        className="object-cover aspect-square p-5"
      />
    </div>
  );
};

export default PortfolioCard;
