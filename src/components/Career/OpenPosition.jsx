import React from 'react';

export default function OpenPositions() {
  return (
    <section className="mt-12 bg-gray-800 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center text-white mb-8">Open Positions</h2>
        <form className="bg-gray-900 p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
          {/* Wrapper for Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name Input */}
            <div className="mb-6 md:mb-0">
              <label htmlFor="name" className="block text-white text-sm font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
                required
              />
            </div>
            
            {/* Email Input */}
            <div className="mb-6 md:mb-0">
              <label htmlFor="email" className="block text-white text-sm font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Email"
                required
              />
            </div>
          </div>
          
          {/* Resume Link Input */}
          <div className="mt-6">
            <label htmlFor="resume" className="block text-white text-sm font-bold mb-2">
              Resume Link
            </label>
            <input
              type="url"
              id="resume"
              name="resume"
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Link to Your Resume"
              required
            />
          </div>
          
          {/* Submit Button */}
          <div className="text-center mt-8">
            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-500 text-white rounded-lg font-bold hover:bg-blue-600 transition-colors duration-300">
              Apply Now
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
