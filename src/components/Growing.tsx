import React from 'react'
import mobile from "../../public/assets/mobile.svg";
import graph from "../../public/assets/graph.png";
import underline from "../../public/assets/underline.svg";
import Image from "next/image";
import DisclosureComponent from "./DisclosureFAQ";

type Props = {}

const Growing = (props: Props) => {
    return (
        <div className="w-full max-w-7xl mb-20 md:mb-0 md:h-[75vh] relative md:grid grid-cols-2 md:gap-20">
            <div className="mx-10 mt-5">
                <h1 className="text-4xl sm:text-5xl font-semibold">Growing Together</h1>
                <div className="w-[30vw] mt-4 mb-10">
                    <Image src={underline} alt="underline" className="w-auto h-auto" />
                </div>

                <DisclosureComponent title="Register and create your first support portal">
                    <p>It only takes 5 minutes. Set-up is smooth & simple, with fully customisable page design to reflect your brand lorem dummy.</p>
                </DisclosureComponent>

                <DisclosureComponent title="Manage your dashbaord easily">
                    <p>It only takes 5 minutes. Set-up is smooth & simple, with fully customisable page design to reflect your brand lorem dummy.</p>
                </DisclosureComponent>

                <DisclosureComponent title="Start Investing">
                    <p>It only takes 5 minutes. Set-up is smooth & simple, with fully customisable page design to reflect your brand lorem dummy.</p>
                </DisclosureComponent>
            </div>

            <div className="relative hidden md:block">
                <Image src={mobile} alt="Mobile" className="absolute z-10 top-[10vw] -left-10 w-[20vw] max-w-[200px]" />
                <Image src={graph} alt="Graph" className="absolute z-0 top-0 right-0 shadow-lg" />
            </div>
        </div>
    )
}

export default Growing