import React from 'react';

export default function Mission() {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
      {/* Title Section */}
      <div className="text-left mb-8">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
          <span className="text-black">Our</span> <span className="text-blue-600">Mission</span> <br /> and Vision
        </h2>
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-start justify-between gap-8">
        {/* Left Content */}
        <div className="w-full md:w-1/2 text-gray-700 text-lg leading-relaxed">
          <p>
            At Futurity, we strive not only to meet expectations but to exceed them, delivering exceptional, tailored
            services that empower our clients to overcome obstacles, capitalize on opportunities, and thrive in today’s
            competitive business environment.
          </p>
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 space-y-8">
          {/* Mission Block */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-800 rounded-md transform rotate-45"></div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-blue-600 mb-2">Mission</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Deliver robust and effective solutions to complex corporate issues in a seamless and timebound
                framework.
              </p>
            </div>
          </div>

          {/* Vision Block */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-800 rounded-md transform rotate-45"></div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-blue-600 mb-2">Vision</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                To always be a trusted partner in our Client growth. <br />
                <em className="font-semibold italic">Help them Grow,</em> <br />
                <em className="font-semibold italic">Grow with them.</em>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
