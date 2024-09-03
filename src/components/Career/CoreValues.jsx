import React from 'react';
import { FaBriefcase, FaHandshake, FaStar } from 'react-icons/fa';

export default function CoreValues() {
  return (
    <section className="py-12 bg-gray-100">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">Our Core Values</h2>
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Work Hard, Play Hard */}
        <div className="flex flex-col items-center p-6 bg-white text-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <FaBriefcase className="text-5xl mb-4 text-blue-500" />
          <h3 className="text-2xl font-semibold mb-4">Work Hard, Play Hard</h3>
          <p className="text-center">Futurity has a results-driven culture that puts our client’s needs first, while promoting team activities outside the office to engender greater camaraderie and job satisfaction.</p>
        </div>
        
        {/* Honesty & Integrity */}
        <div className="flex flex-col items-center p-6 bg-white text-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <FaHandshake className="text-5xl mb-4 text-green-500" />
          <h3 className="text-2xl font-semibold mb-4">Honesty & Integrity</h3>
          <p className="text-center">Futurity adheres to former Senator Alan K. Simpson’s statement: “If you have integrity, nothing else matters. If you don’t have integrity, nothing else matters.”</p>
        </div>
        
        {/* Dependability & Responsiveness */}
        <div className="flex flex-col items-center p-6 bg-white text-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <FaStar className="text-5xl mb-4 text-yellow-500" />
          <h3 className="text-2xl font-semibold mb-4">Dependability & Responsiveness</h3>
          <p className="text-center">Futurity is a client service business. We’re focused on being timely, responsive, knowledgeable, and reliable for all our client’s valuation needs.</p>
        </div>

        {/* Go Above & Beyond */}
        {/* <div className="flex flex-col items-center p-6 bg-white text-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <FaStar className="text-5xl mb-4 text-red-500" />
          <h3 className="text-2xl font-semibold mb-4">Go Above & Beyond</h3>
          <p className="text-center">Scalar invokes a culture that pushes its people to be their best. We foster a culture that emphasizes improvement in both our quantitative and interpersonal skills.</p>
        </div> */}
      </div>
    </section>
  );
}
