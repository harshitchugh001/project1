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
            className="rounded-lg shadow-lg h-64"
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

      {/* Target Audience Section */}
      <div className=" py-12 px-6 lg:px-20 rounded-lg mt-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Target Audience</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 border-t-4 border-blue-400">
            <h3 className="text-xl font-semibold text-blue-600">Families</h3>
            <p className="mt-4 text-gray-600">Focus on financial literacy, long-term planning, and guidance for children’s skill acquisition.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 border-t-4 border-green-400">
            <h3 className="text-xl font-semibold text-green-600">Startups and MSMEs</h3>
            <p className="mt-4 text-gray-600">Support in legal compliance, financial advisory, and mentorship to help them grow.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 border-t-4 border-yellow-400">
            <h3 className="text-xl font-semibold text-yellow-600">Young Entrepreneurs</h3>
            <p className="mt-4 text-gray-600">Specifically target Gen-Z innovators with mentorship and business advisory.</p>
          </div>
        </div>
      </div>

      {/* Key Offerings Section */}
      <div className=" py-12 px-6 lg:px-20 rounded-lg mt-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Key Offerings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 border-t-4 border-purple-400">
            <h3 className="text-xl font-semibold text-purple-600">Financial Literacy and Advisory</h3>
            <ul className="mt-4 list-disc list-inside space-y-2 text-gray-600">
              <li>Teach families smart investment strategies.</li>
              <li>Help MSMEs and startups with tax-saving strategies.</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 border-t-4 border-pink-400">
            <h3 className="text-xl font-semibold text-pink-600">Skill Development</h3>
            <ul className="mt-4 list-disc list-inside space-y-2 text-gray-600">
              <li>Guide individuals on trending skills like AI and digital marketing.</li>
              <li>Partner with ed-tech platforms for courses.</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 border-t-4 border-red-400">
            <h3 className="text-xl font-semibold text-red-600">Legal Compliance Services</h3>
            <ul className="mt-4 list-disc list-inside space-y-2 text-gray-600">
              <li>Assist MSMEs and startups with registration and compliance.</li>
              <li>Help families with estate planning and legal matters.</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 border-t-4 border-indigo-400">
            <h3 className="text-xl font-semibold text-indigo-600">Mentorship Services</h3>
            <ul className="mt-4 list-disc list-inside space-y-2 text-gray-600">
              <li>Offer mentorship programs for parents and children.</li>
              <li>Pair startups and young entrepreneurs with seasoned advisors.</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 border-t-4 border-teal-400">
            <h3 className="text-xl font-semibold text-teal-600">Community Building</h3>
            <ul className="mt-4 list-disc list-inside space-y-2 text-gray-600">
              <li>Create a collaborative ecosystem for resource sharing.</li>
              <li>Offer a platform for networking and peer learning.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreVisionMission;
