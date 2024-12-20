import React from "react";
import RiskImg from '../../assets/RiskImg.png'

const RiskConsulting = () => {

    const services = [
        {
            title: "Sarbanes-Oxley",
            description:
                "Our experienced and well-researched team backed by our access to Global resources and expertise help our clients in SOX and Committee of Sponsoring Organization (COSO) compliance.",
        },
        {
            title: "Internal Audits",
            description:
                "Leveraging leading practices we deliver robust internal audit services through efficient methods assisted by technology, business insights, skilled resources to meet the evolving needs of the business environment.",
        },
        {
            title: "Policies & Procedures",
            description:
                "Our people coming from varied background and domain expertise, bring together their pragmatic approach to develop a robust framework (SOPs) for our clients which are efficient, sustainable, and growth-oriented.",
        },
        {
            title: "Risk Management",
            description:
                "We assist our clients develop a self-adaptable risk management framework to diligently navigate the continuously evolving complex business environment to ensure readiness for tomorrow’s challenges.",
        },
        {
            title: "Investigations & Forensics",
            description:
                "We provide both preventive and reactive forensic services through our qualified and experienced professionals. Our financial, technical, legal, and commercial experts use their knowledge and experience of accounting, auditing, litigations, case studies, innovative capabilities assisted by technology and industry-specific experts to deliver accurate and reliable investigations results.",
        },
    ];
    return (
        <div className="mt-28 max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center bg-white py-10 px-6 lg:px-20">
                <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Risk <span className="text-orange-500">Consulting</span></h2>
                    <p className="text-gray-600 leading-relaxed">
                        Backed by a team of experienced professionals, our risk consulting services meet the needs of all types and sizes of clients and industries - from small startups to large firms and business conglomerates focused on delivering lasting changes with measurable growth.
                    </p>
                </div>

                <div className="lg:w-1/2 flex justify-center">
                    <img
                        src={RiskImg}
                        alt="Risk Consulting Illustration"
                        className="rounded-lg shadow-lg w-full max-w-md lg:max-w-full"
                    />
                </div>
            </div>

            <div className=" py-10 px-6 lg:px-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="border border-orange-400 rounded-lg p-6 shadow-md bg-white"
                        >
                            <h3 className="text-xl font-bold text-gray-800 mb-4">{service.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RiskConsulting;
