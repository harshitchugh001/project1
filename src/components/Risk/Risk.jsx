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
                "We assist our clients develop a self-adaptable risk management framework to diligently navigate the continuously evolving complex business environment to ensure readiness for tomorrow's challenges.",
        },
        {
            title: "Investigations & Forensics",
            description:
                "We provide both preventive and reactive forensic services through our qualified and experienced professionals. Our financial, technical, legal, and commercial experts use their knowledge and experience of accounting, auditing, litigations, case studies, innovative capabilities assisted by technology and industry-specific experts to deliver accurate and reliable investigations results.",
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
                                    Risk <span className="text-blue-600">Consulting</span>
                                </h1>
                                <div className="h-1 w-24 bg-blue-600 mb-6"></div>
                            </div>
                            <p className="text-gray-700 leading-relaxed">
                                Backed by a team of experienced professionals, our risk consulting services 
                                meet the needs of all types and sizes of clients and industries - from small 
                                startups to large firms and business conglomerates focused on delivering 
                                lasting changes with measurable growth.
                            </p>
                        </div>

                        <div className="relative">
                            <div className="relative rounded-lg overflow-hidden shadow-xl">
                                <div className="absolute inset-0 bg-blue-600 opacity-10"></div>
                                <img
                                    src={RiskImg}
                                    alt="Risk Consulting Illustration"
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
                                Our Services
                            </h2>
                        </div>
                        <p className="text-gray-700 max-w-3xl">
                            We provide comprehensive risk consulting services to help organizations 
                            identify, assess, and mitigate various types of risks.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-lg border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 group"
                            >
                                <div className="h-1 w-12 bg-blue-600 mb-4 group-hover:w-16 transition-all duration-300"></div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                                <p className="text-gray-700 leading-relaxed">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RiskConsulting;
