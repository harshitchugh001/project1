import React from 'react';
import IpoImg from '../../assets/IpoImg.png'

const AdvisoryComponent = () => {
    return (
        <div className='mt-28'>
            <div className="max-w-6xl mx-auto p-6 space-y-12">
                {/* Corporate Finance Section */}
                <div className="flex flex-col md:flex-row items-center md:items-start">
                    <div className="md:w-1/2 space-y-4">
                        <h2 className="text-2xl font-bold text-indigo-800">Corporate</h2>
                        <h3 className="text-xl font-semibold text-gray-600">Finance</h3>
                        <p className="text-gray-700 leading-relaxed">
                            Our market and industry experts assisted by leaders from respective domains such as accounting, auditing,
                            consulting, legal, and commercial help our clients build up opportunities for continuous business growth and sustenance.
                        </p>
                    </div>
                    <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
                        <img
                            src={IpoImg} // Replace with actual image path
                            alt="Corporate Finance"
                            className="rounded-full w-3/4 md:w-1/2"
                        />
                    </div>
                </div>

                {/* IPO Advisory and Corporate Debt Section */}
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white shadow-md rounded-lg p-6 border-t-4 border-indigo-600">
                        <h3 className="text-xl font-bold text-indigo-800">IPO Advisory</h3>
                        <h4 className="text-lg font-semibold text-gray-600">Going Public</h4>
                        <ul className="list-disc pl-5 text-gray-700 space-y-2">
                            <li>IPO Readiness & Planning.</li>
                            <li>Pre-IPO preparatory assistance.</li>
                            <li>Valuation estimate.</li>
                            <li>Intermediary appointment support.</li>
                            <li>Public relations and marketing strategy.</li>
                            <li>Assisting prospectus drafting & documentation.</li>
                            <li>Issue management.</li>
                            <li>Preparation of post-IPO financial reporting.</li>
                            <li>Assistance in other areas - corporate governance, internal audits.</li>
                        </ul>
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-6 border-t-4 border-indigo-600">
                        <h3 className="text-xl font-bold text-indigo-800">Corporate Debt</h3>
                        <h4 className="text-lg font-semibold text-gray-600">Structuring & Advisory</h4>
                        <ul className="list-disc pl-5 text-gray-700 space-y-2">
                            <li>Debt Structuring evaluation and industry benchmarking.</li>
                            <li>Exploring various debt instruments as per market / industry.</li>
                            <li>Credit rating assistance.</li>
                            <li>Assistance in project reports, debt requests / applications.</li>
                            <li>Presentations to lenders / financial institutions.</li>
                            <li>Documentation closure.</li>
                            <li>Management project monitoring.</li>
                        </ul>
                    </div>
                </div>

                {/* WTI Cabs Section */}
                <div className="bg-white shadow-md rounded-lg p-6 border-t-4 border-orange-500 space-y-4">
                    <h3 className="text-xl font-bold text-indigo-800">Wise Travel India Private Limited “WTI CABS”</h3>
                    <p className="text-gray-700 leading-relaxed">
                        Our team advised WTI Cabs in their endeavour to go public.
                    </p>
                    <div className="bg-gray-100 p-4 rounded-md">
                        <p className="text-gray-700 italic">
                            "Ajay Yadav and Karan Chadha assisted in smoothly handling the nuances of the going public complexities." -
                            <span className="font-semibold"> Ashok Vashisth</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdvisoryComponent;
