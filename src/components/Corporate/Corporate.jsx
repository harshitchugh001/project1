import React from 'react';
import IpoImg from '../../assets/IpoImg.png'

const AdvisoryComponent = () => {
    const ipoServices = [
        "IPO Readiness & Planning",
        "Pre-IPO preparatory assistance",
        "Valuation estimate",
        "Intermediary appointment support",
        "Public relations and marketing strategy",
        "Assisting prospectus drafting & documentation",
        "Issue management",
        "Preparation of post-IPO financial reporting",
        "Assistance in other areas - corporate governance, internal audits"
    ];

    const debtServices = [
        "Debt Structuring evaluation and industry benchmarking",
        "Exploring various debt instruments as per market / industry",
        "Credit rating assistance",
        "Assistance in project reports, debt requests / applications",
        "Presentations to lenders / financial institutions",
        "Documentation closure",
        "Management project monitoring"
    ];

    return (
        <div className='mt-28'>
            <div className="bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-6xl mx-auto px-4 py-12">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <div>
                                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                                    Corporate <span className="text-blue-600">Finance</span>
                                </h1>
                                <div className="h-1 w-24 bg-blue-600 mb-6"></div>
                            </div>
                            <p className="text-gray-700 leading-relaxed">
                                Our market and industry experts assisted by leaders from respective domains 
                                such as accounting, auditing, consulting, legal, and commercial help our 
                                clients build up opportunities for continuous business growth and sustenance.
                            </p>
                        </div>

                        <div className="relative">
                            <div className="relative rounded-lg overflow-hidden shadow-xl">
                                <div className="absolute inset-0 bg-blue-600 opacity-10"></div>
                                <img
                                    src={IpoImg}
                                    alt="Corporate Finance"
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white py-16">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* IPO Advisory Section */}
                        <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 group">
                            <div className="h-1 w-12 bg-blue-600 mb-6 group-hover:w-16 transition-all duration-300"></div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">IPO Advisory</h2>
                            <h3 className="text-lg text-gray-600 mb-6">Going Public</h3>
                            <ul className="space-y-3">
                                {ipoServices.map((service, index) => (
                                    <li key={index} className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                                        <span className="text-gray-700">{service}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Corporate Debt Section */}
                        <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 group">
                            <div className="h-1 w-12 bg-blue-600 mb-6 group-hover:w-16 transition-all duration-300"></div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">Corporate Debt</h2>
                            <h3 className="text-lg text-gray-600 mb-6">Structuring & Advisory</h3>
                            <ul className="space-y-3">
                                {debtServices.map((service, index) => (
                                    <li key={index} className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                                        <span className="text-gray-700">{service}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Case Study Section */}
                    <div className="mt-12">
                        <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 shadow-md">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-1 bg-blue-600 mr-4"></div>
                                <h2 className="text-2xl font-bold text-gray-900">Case Study</h2>
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-xl font-bold text-gray-900">
                                    Wise Travel India Private Limited "WTI CABS"
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    Our team advised WTI Cabs in their endeavour to go public.
                                </p>
                                <blockquote className="bg-white p-6 rounded-lg border-l-4 border-blue-600 italic text-gray-700">
                                    "Ajay Yadav and Karan Chadha assisted in smoothly handling the nuances of the going public complexities." 
                                    <span className="font-semibold block mt-2">- Ashok Vashisth</span>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdvisoryComponent;
