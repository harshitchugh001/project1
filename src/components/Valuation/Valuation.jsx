import React from "react";
import ValuationImg from "../../assets/valuation.png";
import Industries from "./Industries";

export default function Valuation() {
    const titleStyles = "text-2xl md:text-3xl font-bold text-blue-700 uppercase";
    const cardStyles = "border-2 border-blue-700 p-4 shadow-md text-blue-700 font-medium text-center";
    const sectionTitleStyles = "col-span-3 flex items-center mt-8";

    const sections = [
        {
            title: "VALUATIONS FOR TRANSACTIONS",
            items: [
                "Valuations for Mergers & Acquisitions, SWAP Computations",
                "Valuations in Corporate Restructurings (Demerger, Share buy backs, etc.)\nDebt Restructurings",
                "Fund NAV / AIF Valuations",
            ],
        },
        {
            title: "DISPUTES & LITIGATIONS",
            items: [
                "Claims / Damage Assessments",
                "Expert Witness Testimony\nLitigation / Arbitration Support",
                "Family Settlements / Dissenting Shareholder's Disputes",
            ],
        },
    ];

    return (
        <div className="mt-28">
            
            <div className="bg-white p-8">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-8">
            
                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">
                            Valuation Advisory
                        </h1>
                        <p className="text-gray-700 mb-4">
                            <span className="font-bold">Futurity Valuation Advisory LLP</span>{" "}
                            is a <span className="font-medium">Registered Valuer Entity</span>{" "}
                            (IBBI/RV-E/02/2024/208) registered with IBBI to carry out valuation
                            of all assets class namely:
                        </p>
                        <ul className="list-disc pl-6 mb-4 text-gray-700">
                            {["Securities or Financial Assets", "Land & Building", "Plant & Machinery"].map(
                                (item, index) => (
                                    <li key={index} className="mb-2">
                                        <span className="font-semibold text-blue-700">{item}</span>
                                    </li>
                                )
                            )}
                        </ul>
                        <p className="text-gray-700">
                            As a trusted partner operating under the regulatory oversight of
                            the <span className="font-medium">Insolvency & Bankruptcy Board of India (IBBI)</span>, Futurity brings together a diverse group of professionals
                            with deep expertise across multiple domains, including finance,
                            law, technology, and business strategy.
                        </p>
                    </div>

                    <div className="relative">
                        <div className="w-full rounded-lg overflow-hidden shadow-md">
                            <img
                                src={ValuationImg}
                                alt="Valuation Advisory"
                                className="w-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white py-8 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-center mb-8">
                        <div className="w-8 h-4 bg-blue-700 mr-3"></div>
                        <h1 className={titleStyles}>Financial Reporting & Compliance</h1>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            "Valuations under the Companies Act' 2013 \n Valuation under The Insolvency & Bankruptcy Code (IBC)",
                            "Valuations for FEMA, RBI for cross-border transactions compliance",
                            "Valuations under the Income Tax Act, Wealth Tax rules",
                            "Valuation of Financial Instruments, Securities, Derivatives, ESOP’s & Sweat Equity",
                            "Purchase Price Allocations (PPA) \n Impairment Testing (IND-AS, IFRS, US GAAP)",
                            "Valuations of REIT’s, INVIT’s",
                        ].map((text, index) => (
                            <div key={index} className={cardStyles}>
                                <p>{text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="bg-white py-8 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-3 gap-4 p-6">
                        {sections.map((section, index) => (
                            <React.Fragment key={index}>
                                <div className={sectionTitleStyles}>
                                    <div className="bg-blue-600 w-4 h-4 mr-2"></div>
                                    <h2 className="text-2xl font-bold text-blue-800">{section.title}</h2>
                                </div>

                                {/* Cards */}
                                {section.items.map((text, cardIndex) => (
                                    <div key={cardIndex} className={cardStyles}>
                                        <h3 className="text-lg font-semibold text-blue-700">{text}</h3>
                                    </div>
                                ))}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>

            <Industries/>
        </div>
    );
}
