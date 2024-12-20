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
        <div className=" max-w-6xl mx-auto mt-28">
            <div className=" flex flex-col lg:flex-row items-center px-6 lg:px-20">
                <div className="lg:w-1/2 mb-8 lg:mb-0">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Disputes & Litigations</h2>
                    <div className="h-1 w-16 bg-orange-400 mb-6"></div>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        Our financial, technical, and legal experts provide expert services in litigations and arbitrations (domestic and international).
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                        Working with our clients on all stages from potential claims evaluations to testifying, we collaborate at each stage to deliver output which will stand the test of time.
                    </p>
                </div>

                <div className="lg:w-1/2">
                    <div className="relative">
                        <img
                            src={DisputeImg}
                            alt="Disputes and Litigations"
                            className="rounded-full shadow-md object-cover"
                        />
                    </div>
                </div>
            </div>


            <div className=" p-6">
                <h2 className="text-2xl font-bold text-center mb-6">Representative Engagements</h2>
                <div className="grid md:grid-cols-4 gap-6">
                    {engagements.map((engagement, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-md rounded-lg p-4 border-t-4 border-indigo-600"
                        >
                            <h3 className="text-lg font-semibold mb-2 text-indigo-700">{engagement.title}</h3>
                            <p className="text-gray-700 text-sm leading-relaxed">{engagement.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DisputesAndLitigations;
