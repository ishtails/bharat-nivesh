'use client'
import React, { useState } from 'react'
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

type Props = {};
ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: ['Invested', 'Return'],
    datasets: [
        {
            label: 'Percentage',
            data: [60, 40],
            backgroundColor: [
                '#FF9933',
                '#0EA362',
            ],
            borderColor: [
                '#FF9933',
                '#0EA362',
            ],
            borderWidth: 1,
        },
    ],
};


const SIP = (props: Props) => {
    const [investmentType, setInvestmentType] = useState('SIP');

    return (
        <div className="rounded-xl bg-p_darkgreen max-w-5xl text-white m-10">
            <h1 className="font-semibold text-2xl text-center pt-8 mb-10">SIP Calculator</h1>
            <div className="flex flex-col lg:gap-16 lg:flex-row justify-between items-center px-16 pb-10">
                <div className="lg:pl-5">
                    <div className="flex sm:text-xl justify-between gap-12">
                        <div className="flex gap-2">
                            <input
                                type="radio"
                                id="sip"
                                name="investmentType"
                                value="SIP"
                                checked={investmentType === 'SIP'}
                                className="cursor-pointer accent-p_orange"
                                onChange={() => setInvestmentType('SIP')}
                            />
                            <label htmlFor="sip" className="cursor-pointer">SIP Investment</label>
                        </div>
                        <div className="flex gap-2 cursor-pointer">
                            <input
                                type="radio"
                                id="lumpsum"
                                name="investmentType"
                                value="Lumpsum"
                                checked={investmentType === 'Lumpsum'}
                                onChange={() => setInvestmentType('Lumpsum')}
                                className="cursor-pointer accent-p_orange"
                            />
                            <label htmlFor="lumpsum" className="cursor-pointer">Lumpsum</label>
                        </div>
                    </div>

                    <div className="mt-8 text-zinc-400 flex flex-col gap-8 w-[50vw] max-w-[500px]">
                        <div className="flex flex-col">
                            <span className="flex justify-between pb-2">
                                <p>Monthly SIP Amount</p>
                                <p className="px-2 py-1 bg-zinc-400 text-black rounded-lg">Rs. 5000</p>
                            </span>
                            <Slider />
                        </div>
                        <div className="flex flex-col">
                            <span className="flex justify-between pb-2">
                                <p>Monthly SIP Amount</p>
                                <p className="px-2 py-1 bg-zinc-400 text-black rounded-lg">Rs. 5000</p>
                            </span>
                            <Slider />
                        </div>
                        <div className="flex flex-col">
                            <span className="flex justify-between pb-2">
                                <p>Monthly SIP Amount</p>
                                <p className="px-2 py-1 bg-zinc-400 text-black rounded-lg">Rs. 5000</p>
                            </span>
                            <Slider />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col mt-8 lg:mt-0 items-center">
                    <Doughnut data={data} />
                    <div className="flex flex-col mt-4 justify-center">
                        <p>Total Return: <span className="text-lg text-p_orange">Rs. 999999</span></p>
                        <p>Invested Amount: Rs. 999999</p>
                        <p>Total Wealth: Rs. 999999</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SIP