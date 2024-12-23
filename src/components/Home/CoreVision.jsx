import React from 'react';
import './CoreVisionMission.css'; 
import Core from "../../assets/core.png"

const CoreVisionMission = () => {
  return (
    <div className="py-10 px-6 lg:px-20">
      {/* Heading Section */}
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8 fade-in">
        Core Vision and Mission
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="flex justify-center slide-in-left">
          <img
            src={Core}
            alt="Vision Illustration"
            className="rounded-lg shadow-lg h-64" /* Adjusted height */
          />
        </div>

        <div className="text-gray-700 space-y-6 slide-in-right">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">Vision</h2>
            <p className="mt-2">To empower families, MSMEs, and startups in Tier 2 and Tier 3 cities with financial literacy, skill development, mentorship, and legal compliance.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900">Mission</h2>
            <ul className="mt-2 list-disc list-inside space-y-2">
              <li>Help families plan financially to secure their children’s education and future skill development.</li>
              <li>Provide MSMEs and startups with simplified solutions for compliance, financial planning, and mentorship.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreVisionMission;