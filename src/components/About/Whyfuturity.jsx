import React from 'react';
import { FaBuilding, FaCogs, FaShoppingCart, FaBolt, FaPuzzlePiece, FaLightbulb, FaSearch, FaUsers, FaGlobe } from 'react-icons/fa';
import './WhyFuturity.css'; // Import the custom CSS file

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
    {
        icon: <FaSearch />,
        title: 'Research-Backed Expertise',
        details: 'Our team is backed by thorough research, ensuring informed decision-making.',
    },
    {
        icon: <FaUsers />,
        title: 'Experienced Team',
        details: 'A team with unmatched exposure and expertise in domain-related services.',
    },
    {
        icon: <FaGlobe />,
        title: 'Cross-Border Experience',
        details: 'Proven track record in executing international advisory deals.',
    },
];

export default function WhyFuturity() {
    return (
        <section className=" py-12">
            <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">Why Futurity</h2>
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {strengths.map((strength, index) => (
                    <div
                        key={index}
                        className={`relative w-full h-64 ${index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'}`}>
                        <div className="card">
                            <div className="front bg-gray-300 text-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center justify-center">
                                <div className="text-4xl mb-4">{strength.icon}</div>
                                <h3 className="text-xl font-semibold mb-2 text-center">{strength.title}</h3>
                                <p className="text-center">{strength.details}</p>
                            </div>
                            <div className="back bg-gray-800 text-gray-300 p-6 rounded-lg shadow-lg flex flex-col items-center justify-center">
                                <h3 className="text-xl font-semibold mb-2">More Info</h3>
                                <p className="text-center">Additional information about {strength.title}.</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
