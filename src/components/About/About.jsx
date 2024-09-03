import React from 'react';
import Whyfuturity from './Whyfuturity'
import { CoherenceSvg, DiligenceSvg, InnovationSvg, IntegritySvg } from './AboutSvg';

const About = () => {
  return (
    <div className="  mt-28 container mx-auto p-6">
      {/* Who We Are Section */}
      <div className="mb-8">
        <h2 className="text-4xl font-semibold mb-8 animate-fadeIn text-center">Who We Are</h2>
        <p className="text-lg text-gray-700 animate-fadeIn">
          <strong>Futurity</strong> is a unified team of leading technocommercial experts dedicated to delivering
          simple solutions to complex issues within a seamless and time-bound framework. Operating under the aegis of
          <strong> IBBI (The Insolvency & Bankruptcy Board of India)</strong>, Futurity works as one integrated team,
          leveraging diverse domain expertise, scale, and a deep understanding to offer exceptional and tailored
          services to our clients.
        </p>
        <h3 className="text-3xl font-semibold mt-10 mb-4 animate-fadeIn text-center">Our Core Values</h3>
        <div>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-4">
            <div className='flex flex-col justify-center items-center'>
              <span className='w-48 h-48'>
                {IntegritySvg}
              </span>

              <span className='font-medium text-xl'>
                Integrity
              </span>

            </div>

            <div className='flex flex-col justify-center items-center'>
              <span className='w-48 h-48'>
                {InnovationSvg}
              </span>

              <span className='font-medium text-xl'>
                Innovation
              </span>

            </div>

            <div className='flex flex-col justify-center items-center'>
              <span className='w-48 h-48'>
                {CoherenceSvg}
              </span>

              <span className='font-medium text-xl'>
                Coherence
              </span>

            </div>

            <div className='flex flex-col justify-center items-center gap-y-4'>
              <span className='w-48 h-48'>
                {DiligenceSvg}
              </span>

              <span className='font-medium text-xl'>
                Diligence
              </span>

            </div>
          </div>
        </div>
      </div>

      <Whyfuturity></Whyfuturity>

      {/* Why Futurity Section */}
      {/* <div className="animate-slideUp">
        <h2 className="text-3xl font-bold mb-4">Why Futurity</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="py-3 px-6 text-left">Key Strengths</th>
                <th className="py-3 px-6 text-left">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-6">Sizeable Operations</td>
                <td className="py-3 px-6">An experienced and capable team managing large-scale operations.</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-6">Integrated Services</td>
                <td className="py-3 px-6">A full-fledged company offering comprehensive financial, technical, and advisory services.</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-6">One-Stop Shop</td>
                <td className="py-3 px-6">We meet all the financial and technical advisory needs of our clients.</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-6">Rapid Response</td>
                <td className="py-3 px-6">Quick turnaround times to address client needs efficiently.</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-6">Complex Assignments</td>
                <td className="py-3 px-6">The ability to complete challenging assignments swiftly.</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-6">Deep Domain Knowledge</td>
                <td className="py-3 px-6">Extensive knowledge across various sectors.</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-6">Research-Backed Expertise</td>
                <td className="py-3 px-6">Our team is backed by thorough research, ensuring informed decision-making.</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-6">Experienced Team</td>
                <td className="py-3 px-6">A team with unmatched exposure and expertise in domain-related services.</td>
              </tr>
              <tr>
                <td className="py-3 px-6">Cross-Border Experience</td>
                <td className="py-3 px-6">Proven track record in executing international advisory deals.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div> */}
    </div>
  );
};

export default About;
