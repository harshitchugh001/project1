import { FaSearch, FaClipboardList, FaChartLine } from 'react-icons/fa';
export default function OurApproachSection() {
    return (
        <section className="mb-12 bg-blue-50 py-16">
            <h2 className="text-xl md:text-2xl lg:text-4xl font-extrabold text-center text-gray-800 mb-12">Our Approach</h2>
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                    {/* Arrows */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full flex flex-col justify-between pointer-events-none z-0">
                        <div className="h-1 w-10 bg-gray-300 mx-auto rounded"></div>
                        <div className="h-10 w-10 bg-gray-300 mx-auto rounded-full"></div>
                        <div className="h-1 w-10 bg-gray-300 mx-auto rounded"></div>
                    </div>

                    {/* Understanding */}
                    <div className="flex flex-col items-center bg-white p-6 md:p-10 rounded-lg shadow-lg transform transition-transform hover:scale-105 relative z-10">
                        <FaSearch className="text-blue-500 text-4xl mb-4" /> {/* Icon for Understanding */}
                        <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-4 text-center">Understanding</h3>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm md:text-base">
                            <li>Understanding the objective of the engagement.</li>
                            <li>Understanding the underlying asset/business.</li>
                            <li>Understand underlying compliance requirements and regulations.</li>
                        </ul>
                    </div>

                    {/* Appropriate Information */}
                    <div className="flex flex-col items-center bg-white p-6 md:p-10 rounded-lg shadow-lg transform transition-transform hover:scale-105 relative z-10">
                        <FaClipboardList className="text-green-500 text-4xl mb-4" /> {/* Icon for Information Gathering */}
                        <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-4 text-center">Appropriate Information</h3>
                        <ul className=" list-disc list-inside text-gray-700 space-y-2 text-sm md:text-base">
                            <li>Obtain client-specific information.</li>
                            <li>Obtain external information.</li>
                            <li>In-house industry research reports.</li>
                            <li>Through corporate databases.</li>
                        </ul>
                    </div>

                    {/* Analysis & Discussions */}
                    <div className="flex flex-col items-center bg-white p-6 md:p-10 rounded-lg shadow-lg transform transition-transform hover:scale-105 relative z-10">
                        <FaChartLine className="text-red-500 text-4xl mb-4" /> {/* Icon for Analysis & Discussions */}
                        <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-4 text-center">Analysis & Discussions</h3>
                        <ul className=" list-disc list-inside text-gray-700 space-y-2 text-sm md:text-base">
                            <li>Review information.</li>
                            <li>Benchmarking.</li>
                            <li>FIT analysis.</li>
                            <li>Strategic discussions with the client.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
