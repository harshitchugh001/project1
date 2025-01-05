import React from "react";
import ValuationImg from "../../assets/valuation.png";
import Industries from "./Industries";

export default function Valuation() {
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
            <div className="bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-6xl mx-auto px-4 py-12">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <div>
                                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                                    Valuation <span className="text-blue-600">Advisory</span>
                                </h1>
                                <div className="h-1 w-24 bg-blue-600 mb-6"></div>
                            </div>
                            <p className="text-gray-700 leading-relaxed">
                                <span className="font-bold text-gray-900">Futurity Valuation Advisory LLP</span>{" "}
                                is a <span className="font-medium text-gray-900">Registered Valuer Entity</span>{" "}
                                (IBBI/RV-E/02/2024/208) registered with IBBI to carry out valuation
                                of all assets class namely:
                            </p>
                            <ul className="space-y-3">
                                {["Securities or Financial Assets", "Land & Building", "Plant & Machinery"].map(
                                    (item, index) => (
                                        <li key={index} className="flex items-center space-x-3">
                                            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                            <span className="text-gray-700">{item}</span>
                                        </li>
                                    )
                                )}
                            </ul>
                            <p className="text-gray-700 leading-relaxed">
                                As a trusted partner operating under the regulatory oversight of
                                the <span className="font-medium text-gray-900">Insolvency & Bankruptcy Board of India (IBBI)</span>, 
                                Futurity brings together a diverse group of professionals
                                with deep expertise across multiple domains, including finance,
                                law, technology, and business strategy.
                            </p>
                        </div>

                        <div className="relative">
                            <div className="relative rounded-lg overflow-hidden shadow-xl">
                                <div className="absolute inset-0 bg-blue-600 opacity-10"></div>
                                <img
                                    src={ValuationImg}
                                    alt="Valuation Advisory"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white py-16">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="mb-12">
                        <div className="flex items-center mb-6">
                            <div className="w-12 h-1 bg-blue-600 mr-4"></div>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                                Financial Reporting & Compliance
                            </h2>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            "Valuations under the Companies Act' 2013 \n Valuation under The Insolvency & Bankruptcy Code (IBC)",
                            "Valuations for FEMA, RBI for cross-border transactions compliance",
                            "Valuations under the Income Tax Act, Wealth Tax rules",
                            "Valuation of Financial Instruments, Securities, Derivatives, ESOP's & Sweat Equity",
                            "Purchase Price Allocations (PPA) \n Impairment Testing (IND-AS, IFRS, US GAAP)",
                            "Valuations of REIT's, INVIT's",
                        ].map((text, index) => (
                            <div key={index} 
                                className="p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300 group">
                                <div className="h-1 w-12 bg-blue-600 mb-4 group-hover:w-16 transition-all duration-300"></div>
                                <p className="text-gray-700 whitespace-pre-line">{text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="bg-gray-50 py-16">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {sections.map((section, index) => (
                            <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                                <h3 className="text-xl font-bold text-gray-900 mb-6">
                                    {section.title}
                                </h3>
                                <ul className="space-y-4">
                                    {section.items.map((item, itemIndex) => (
                                        <li key={itemIndex} className="flex items-start space-x-3">
                                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                                            <span className="text-gray-700 whitespace-pre-line">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Industries />
        </div>
    );
}
