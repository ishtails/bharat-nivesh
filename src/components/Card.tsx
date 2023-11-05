import React from "react";
import Image from "next/image";

type Props = {
  title: string;
  description: string;
  image: string;
};

const Card = ({ title, description, image }: Props) => {
  return (
    <div className="flex flex-col justify-center p-8 border-b hover:bg-pale-green/20 transition-all">
      <Image className="w-80 h-80" src={image} alt="Sunset in the mountains" />
      <div className="mt-5 text-lg font-bold sm:text-xl">{title}</div>
      <p className="mt-1 text-body text-2xl font-extralight">{description}</p>
    </div>
  );
};

export default Card;
