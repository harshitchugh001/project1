import React from 'react'
import TransactionImg from '../../assets/transaction.png'
import Equity from '../../assets/Equity.png'
import Merger from '../../assets/Merger.png'

export default function Transaction() {
    return (
        <div className='mt-28'>
            <div className="bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-6xl mx-auto px-4 py-12">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <div>
                                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                                    Transaction <span className="text-blue-600">Advisory</span>
                                </h1>
                                <div className="h-1 w-24 bg-blue-600 mb-6"></div>
                            </div>
                            <p className="text-gray-700 leading-relaxed">
                                Our diverse team of experienced investment banking professionals help 
                                clients strategise and execute business growth objectives through sourcing 
                                and completing inorganic growth / joint ventures opportunities, conducting 
                                due diligence and enhancing value through post deal integration.
                            </p>
                        </div>

                        <div className="relative">
                            <div className="relative rounded-lg overflow-hidden shadow-xl">
                                <div className="absolute inset-0 bg-blue-600 opacity-10"></div>
                                <img
                                    src={TransactionImg}
                                    alt="Transaction Advisory"
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
                        {/* M&A Advisory Section */}
                        <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 group">
                            <div className="relative mb-8 rounded-lg overflow-hidden">
                                <div className="absolute inset-0 bg-blue-600 opacity-10"></div>
                                <img 
                                    src={Merger} 
                                    alt="M&A Advisory" 
                                    className="w-full h-48 object-cover"
                                />
                            </div>
                            <div className="h-1 w-12 bg-blue-600 mb-6 group-hover:w-16 transition-all duration-300"></div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">M&A Advisory</h2>
                            <p className="text-gray-700 leading-relaxed">
                                We offer our clients buy-side and sell-side advisory for M&A transactions 
                                aligning stakeholder's objectives with our team's knowledge and experience 
                                in M&A's, Joint Ventures, or strategic partnerships across the globe.
                            </p>
                        </div>

                        {/* Private Equity Advisory Section */}
                        <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 group">
                            <div className="relative mb-8 rounded-lg overflow-hidden">
                                <div className="absolute inset-0 bg-blue-600 opacity-10"></div>
                                <img 
                                    src={Equity} 
                                    alt="Private Equity Advisory" 
                                    className="w-full h-48 object-cover"
                                />
                            </div>
                            <div className="h-1 w-12 bg-blue-600 mb-6 group-hover:w-16 transition-all duration-300"></div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Private Equity Advisory</h2>
                            <p className="text-gray-700 leading-relaxed">
                                With deep insights into the appropriate finance mix for various businesses, 
                                we provide well-researched advice to our clients to fulfill their growth 
                                objectives by preparing them for private equity or strategic investment 
                                options and then hand-holding them to the last mile of the transaction.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
