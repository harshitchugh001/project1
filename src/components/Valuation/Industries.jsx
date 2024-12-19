import React from "react";

const industries = [
    {
        title: "Infrastructure",
        svg: "your-infrastructure-svg-path.svg",
    },
    {
        title: "Oil & Gas",
        svg: "your-oil-gas-svg-path.svg",
    },
    {
        title: "Mines",
        svg: "your-mines-svg-path.svg",
    },
    {
        title: "Technology, IT, ITeS",
        svg: "your-technology-svg-path.svg",
    },
    {
        title: "Banks / FI's",
        svg: "your-banks-svg-path.svg",
    },
    {
        title: "Automotive",
        svg: "your-automotive-svg-path.svg",
    },
];

export default function Industries() {
    return (
        <div className="relative w-full overflow-hidden bg-white py-8">
            <div
                className="flex animate-scroll gap-12 items-center"
                style={{ animation: "scroll 20s linear infinite" }}
            >
                {industries.map((industry, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center text-center w-48"
                    >
                        <img
                            src={industry.svg}
                            alt={industry.title}
                            className="w-32 h-32 object-contain mb-4"
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
