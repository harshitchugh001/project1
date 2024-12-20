import React from 'react'
import TransactionImg from '../../assets/transaction.png'
import Equity from '../../assets/Equity.png'
import Merger from '../../assets/Merger.png'

export default function Transaction() {
    return (
        <div className='mt-28'>
            <div className='max-w-6xl mx-auto'>
                <div className=" p-6 flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2">
                        <h2 className="text-2xl font-bold text-gray-800">
                            Transaction <span className="text-gray-600">Advisory</span>
                        </h2>
                        <div className="h-1 w-16 bg-orange-400 mt-2 mb-4"></div>
                        <p className="text-gray-700 leading-relaxed">
                            Our diverse team of experienced investment banking professionals help clients strategise and execute business growth objectives through sourcing and completing inorganic growth / joint ventures opportunities, conducting due diligence and enhancing value through post deal integration.
                        </p>
                    </div>
                    <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
                        <img
                            src={TransactionImg}
                            alt="Transaction Advisory"
                            className="rounded-full w-80 h-80 object-cover"
                        />
                    </div>
                </div>


                <div className="container mx-auto p-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                        {/* M&A Advisory Section */}
                        <div className="flex flex-col lg:flex-row items-center bg-gray-100 p-6 rounded-lg shadow-md">
                            <div className="text-center lg:text-left lg:w-1/2">
                                <h2 className="text-2xl font-bold mb-4">M&A Advisory</h2>
                                <p className="text-gray-700 mb-4">
                                    We offer our clients buy-side and sell-side advisory for M&A transactions aligning stakeholder’s objectives with our team’s knowledge and experience in M&A’s, Joint Ventures, or strategic partnerships across the globe.
                                </p>
                            </div>
                            <div className="lg:w-1/2">
                                <img src={Merger} alt="M&A Advisory" className="rounded-lg max-h-64 object-cover mx-auto" />
                            </div>
                        </div>

                        {/* Private Equity Advisory Section */}
                        <div className="flex flex-col lg:flex-row items-center bg-gray-100 p-6 rounded-lg shadow-md">
                            <div className="text-center lg:text-left lg:w-1/2">
                                <h2 className="text-2xl font-bold mb-4">Private Equity Advisory</h2>
                                <p className="text-gray-700 mb-4">
                                    With deep insights into the appropriate finance mix for various businesses, we provide well-researched advice to our clients to fulfill their growth objectives by preparing them for private equity or strategic investment options and then hand-holding them to the last mile of the transaction.
                                </p>
                            </div>
                            <div className="lg:w-1/2">
                                <img src={Equity} alt="Private Equity Advisory" className="rounded-lg max-h-64 object-cover mx-auto" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
