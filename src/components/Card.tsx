import React from "react";
import Image from "next/image";

type Props = {
  title: string;
  description: string;
  image: string;
};

const Card = ({ title, description, image }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image className="w-80 h-80" src={image} alt={`${title}`} />
      <div className="text-lg font-bold sm:text-xl">{title}</div>
      <p className="mt-1 text-body text-xl font-extralight text-center">{description}</p>
    </div>
  );
};

export default Card;