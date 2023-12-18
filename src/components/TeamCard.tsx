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
        <div className="text-white snap-center w-[100%] max-w-[300px] flex-shrink-0 bg-p_darkgreen flex flex-col items-center rounded-lg">
            <Image className="rounded-t-lg p-4" width={500} height={500} src={imageURL} alt={name} />
            <h3 className="text-lg font-bold sm:text-xl">{name}</h3>
            <p className="mb-4 text-body text-center">{designation}</p>
            <div className="flex justify-center -mt-2 mb-3 space-x-4">
                {instagram && (
                    <Link href={instagram} aria-label="Checkout Instagram" target="_blank">
                        <BiLogoInstagramAlt className="-ml-1 w-[32px] h-10 text-primary" />
                    </Link>
                )}
                {linkedin && (
                    <Link href={linkedin} aria-label="Checkout Linkedin" target="_blank">
                        <BsLinkedin className="w-[24px] h-10 text-primary" />
                    </Link>
                )}
            </div>
        </div>
    )
}

export default TeamCard