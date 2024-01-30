'use client'
import Image from "next/image"
import { BsLinkedin } from "react-icons/bs"
import { BiLogoInstagramAlt } from "react-icons/bi"
import Link from "next/link"

type Props = {
    name: string,
    designation: string,
    imageURL: any,
    linkedin?: string,
    instagram?: string
}

const TeamCard = ({ name, designation, imageURL, linkedin, instagram }: Props) => {
    return (
        <div className="text-white snap-center w-[80vw] max-w-[450px] pr-10 flex-shrink-0 bg-p_darkgreen flex gap-8 items-center flex-col rounded-lg p-10">
            <Image className="rounded-lg" width={250} height={250} src={imageURL} alt={name} />
            <div className="flex flex-col items-center">
                <p className="mb-5 text-justify">An ambitious go-getter, a self-motivated individual. Innovating & solving real life problems is what excites him. With this strong desire and passion for investing, he started managing investment portfolios for friends, relatives, and some clients early in his life. With more than a decade of experience in Investing and Portfolio Management, he has founded Nivesh Bharat.</p>
                <h3 className="text-lg font-bold sm:text-xl">{name}</h3>
                <p className="text-body">{designation}</p>
                <div className="flex justify-center space-x-4">
                    {instagram && (
                        <Link href={instagram} aria-label="Checkout Instagram" target="_blank" className="mt-4">
                            <BiLogoInstagramAlt className="w-[32px] h-10 text-primary" />
                        </Link>
                    )}
                    {linkedin && (
                        <Link href={linkedin} aria-label="Checkout Linkedin" target="_blank">
                            <BsLinkedin className="w-[24px] h-10 text-primary" />
                        </Link>
                    )}
                </div>
            </div>
        </div>
    )
}

export default TeamCard