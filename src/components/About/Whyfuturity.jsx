import React from 'react';
import { FaBuilding, FaCogs, FaShoppingCart, FaBolt, FaPuzzlePiece, FaLightbulb, FaSearch, FaUsers, FaGlobe } from 'react-icons/fa';
import './WhyFuturity.css';
import pdfImage from '../../assets/aboutpdf.png';

const strengths = [
    {
        icon: <FaBuilding />,
        title: 'Sizeable Operations',
        details: 'An experienced and capable team managing large-scale operations.',
    },
    {
        icon: <FaCogs />,
        title: 'Integrated Services',
        details: 'A full-fledged company offering comprehensive financial, technical, and advisory services.',
    },
    {
        icon: <FaShoppingCart />,
        title: 'One-Stop Shop',
        details: 'We meet all the financial and technical advisory needs of our clients.',
    },
    {
        icon: <FaBolt />,
        title: 'Rapid Response',
        details: 'Quick turnaround times to address client needs efficiently.',
    },
    {
        icon: <FaPuzzlePiece />,
        title: 'Complex Assignments',
        details: 'The ability to complete challenging assignments swiftly.',
    },
    {
        icon: <FaLightbulb />,
        title: 'Deep Domain Knowledge',
        details: 'Extensive knowledge across various sectors.',
    },
    // {
    //     icon: <FaSearch />,
    //     title: 'Research-Backed Expertise',
    //     details: 'Our team is backed by thorough research, ensuring informed decision-making.',
    // },
    // {
    //     icon: <FaUsers />,
    //     title: 'Experienced Team',
    //     details: 'A team with unmatched exposure and expertise in domain-related services.',
    // },
    // {
    //     icon: <FaGlobe />,
    //     title: 'Cross-Border Experience',
    //     details: 'Proven track record in executing international advisory deals.',
    // },
];

export default function WhyFuturity() {
    return (
        <section className="py-12 flex flex-col lg:flex-row items-center justify-center">
            <div className="px-4">
                <h2 className="text-xl md:text-2xl lg:text-4xl font-extrabold text-center text-gray-800 mb-12">Why Futurity?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {strengths.map((strength, index) => (
                        <div
                            key={index}
                            className={`relative w-full h-64 cursor-pointer ${index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'}`}>
                            <div className="front bg-blue-100 p-6 rounded-lg shadow-lg flex flex-col items-center justify-center transform transition-transform hover:scale-105 hover:shadow-2xl hover:-translate-y-2 animate-fade-in animation-delay-1000 relative">
                                <div className="text-4xl mb-4">{strength.icon}</div>
                                <h3 className="text-lg md:text-xl text-black-900 font-semibold mb-2 text-center">{strength.title}</h3>
                                <p className="text-sm md:text-base text-center">{strength.details}</p>
                                <div className="absolute inset-0 bg-blue-50 rounded-lg opacity-30"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* <div className="lg:w-1/3 flex justify-center mt-8 lg:mt-0">
                <img src={pdfImage} alt="PDF Download" className="w-full h-auto max-w-sm rounded-lg shadow-lg hover:shadow-2xl transition-transform hover:scale-105" />
            </div> */}
        </section>
    );
}
