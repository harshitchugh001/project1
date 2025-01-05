import React from "react";
import DisputeImg from '../../assets/DisputeImg.png'

const DisputesAndLitigations = () => {
    const engagements = [
        {
            title: 'LG India',
            description: `Represented and assisted LG India in Financial Evaluation of the Claim and Expert Witness Testimony in a major Arbitration proceedings.`,
        },
        {
            title: 'John Energy Limited',
            description: `Represented John Energy Limited in a major Arbitration with Oil India Limited for damages related to Blow out of a Oil Rig in Assam.`,
        },
        {
            title: 'Paramount Coaching',
            description: `Represented and assisted Paramount Coaching in Financial Evaluation of the Claim and Expert Witness Testimony in Hon'ble High Court related to a major Family Dispute.`,
        },
        {
            title: 'Reckitt Benckiser',
            description: `Represented and assisted Reckitt Benckiser India and their legal counsels in a matter of dissenting shareholder's related to capital reduction in Hon'ble High Court of Delhi.`,
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
                                    Disputes & <span className="text-blue-600">Litigations</span>
                                </h1>
                                <div className="h-1 w-24 bg-blue-600 mb-6"></div>
                            </div>
                            <div className="space-y-4">
                                <p className="text-gray-700 leading-relaxed">
                                    Our financial, technical, and legal experts provide expert services 
                                    in litigations and arbitrations (domestic and international).
                                </p>
                                <p className="text-gray-700 leading-relaxed">
                                    Working with our clients on all stages from potential claims evaluations 
                                    to testifying, we collaborate at each stage to deliver output which will 
                                    stand the test of time.
                                </p>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="relative rounded-lg overflow-hidden shadow-xl">
                                <div className="absolute inset-0 bg-blue-600 opacity-10"></div>
                                <img
                                    src={DisputeImg}
                                    alt="Disputes and Litigations"
                                    className="w-full h-full object-cover rounded-lg"
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
                                Representative Engagements
                            </h2>
                        </div>
                        <p className="text-gray-700 max-w-3xl">
                            We have successfully represented and assisted various prestigious clients 
                            in complex dispute resolution matters.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {engagements.map((engagement, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-lg border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 group"
                            >
                                <div className="h-1 w-12 bg-blue-600 mb-4 group-hover:w-16 transition-all duration-300"></div>
                                <h3 className="text-lg font-bold text-gray-900 mb-3">{engagement.title}</h3>
                                <p className="text-gray-700 text-sm leading-relaxed">{engagement.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DisputesAndLitigations;
