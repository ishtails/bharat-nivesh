import React from "react";
import Image from "next/image";
import leader_image from "../../../public/assets/leader_image.svg";
import leader_bg from "../../../public/assets/leader_bg.svg";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from "next/link";


const Leader = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0">
        <Image
          src={leader_bg}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="relative items-center p-10 gap-10 flex z-10">
        <Image
          src={leader_image}
          alt="Background Image"
          width={400}
          height={400}
          className="p-10 hidden md:block"
        />

        <div className="text-white">
          <h1 className="text-2xl mb-4">Deski combines excellent
            live chat, ticketing and automation that allow us to provide quality.</h1>
          <p>Pulkit Jain</p>
          <p>Founder & CIO</p>
          <div className="flex gap-2 mt-4">
            <Link href={"https://www.instagram.com/"} target="_blank">
              <FaInstagram className="text-2xl" />
            </Link>
            <Link href={"https://www.instagram.com/"} target="_blank">
              <FaLinkedin className="text-2xl" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leader;
