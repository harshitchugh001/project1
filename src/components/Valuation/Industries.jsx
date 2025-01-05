import React from "react";
import Infrastructure from '../../assets/Industries/Infrastructure.jpg'
import OilAndGas from '../../assets/Industries/OilAndGas.jpg'
import Mines from '../../assets/Industries/Mines.jpg'
import Technology from '../../assets/Industries/Technology.jpg'
import Automotive from  '../../assets/Industries/Automotive.jpg'
import Banks from '../../assets/Industries/Banks.jpg'
const industries = [
    {
        title: "Infrastructure",
        svg: Infrastructure
    },
    {
        title: "Oil & Gas",
        svg: OilAndGas,
    },
    {
        title: "Mines",
        svg: Mines,
    },
    {
        title: "Technology, IT, ITeS",
        svg: Technology,
    },
    {
        title: "Banks / FI's",
        svg: Banks,
    },
    {
        title: "Automotive",
        svg: Automotive,
    },
];

export default function Industries() {
    return (
        <div className="relative w-full overflow-hidden bg-white py-8">
            <div
                className="flex animate-scroll gap-12 items-center"
                style={{ animation: "scroll 35s linear infinite" }}
            >
                {industries.map((industry, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center text-center w-48 "
                    >
                        <img
                            src={industry.svg}
                            alt={industry.title}
                            className="w-32 h-32 object-contain mb-4 "
                        />
                        <p className="text-blue-700 font-medium">{industry.title}</p>
                    </div>
                ))}
            </div>
            <style jsx="true">{`
                @keyframes scroll {
                    from {
                        transform: translateX(100%);
                    }
                    to {
                        transform: translateX(-100%);
                    }
                }
            `}</style>
        </div>
    );
}
