import React from 'react';
import Whyfuturity from './Whyfuturity'
import { CoherenceSvg, DiligenceSvg, InnovationSvg, IntegritySvg } from './AboutSvg';
import WhoAreWe from '../../assets/WhoAreWe.jpg'
import OurApproachSection from '../Product/OurApproach';
const About = () => {
  return (
    <div className="  mt-28 container mx-auto p-6">
      <div className="relative hidden md:block">
        <img
          src={WhoAreWe} // Replace with your image path
          alt="Team background"
          className="w-full h-[600px] object-cover" // Adjust height as needed
        />

        {/* Transparent mask */}
        <div className="absolute h-[600px] inset-0 bg-black opacity-50"></div>

        {/* Centered heading */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold opacity-70">Welcome to futurity group</h1>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="block md:hidden text-2xl md:text-4xl font-semibold mb-8 animate-fadeIn text-center">Who We Are</h2>
        <p className="text-xs md:text-base text-gray-700 animate-fadeIn my-16 text-center">
          <strong>Futurity</strong> is a unified team of leading technocommercial experts dedicated to delivering
          simple solutions to complex issues within a seamless and time-bound framework. Operating under the aegis of
          <strong> IBBI (The Insolvency & Bankruptcy Board of India)</strong>, Futurity works as one integrated team,
          leveraging diverse domain expertise, scale, and a deep understanding to offer exceptional and tailored
          services to our clients.
        </p>
        <h3 className="text-xl md:text-3xl font-semibold mt-10 mb-4 animate-fadeIn text-center">Our Core Values</h3>
        <div>
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-8">
            <div className='flex flex-col justify-center items-center gap-y-4'>
              <span className='w-12 h-12 md:w-20 md:h-20'>
                {IntegritySvg}
              </span>

              <span className='font-medium text-base md:text-lg'>
                Integrity
              </span>

            </div>

            <div className='flex flex-col justify-center items-center gap-y-4'>
              <span className='w-12 h-12 md:w-20 md:h-20'>
                {InnovationSvg}
              </span>

              <span className='font-medium text-base md:text-lg '>
                Innovation
              </span>

            </div>

            <div className='flex flex-col justify-center items-center gap-y-4'>
              <span className='w-12 h-12 md:w-20 md:h-20'>
                {CoherenceSvg}
              </span>

              <span className='font-medium text-base md:text-lg '>
                Coherence
              </span>

            </div>

            <div className='flex flex-col justify-center items-center gap-y-4'>
              <span className='w-12 h-12 md:w-20 md:h-20'>
                {DiligenceSvg}
              </span>

              <span className='font-medium text-base md:text-lg'>
                Diligence
              </span>

            </div>
          </div>
        </div>
      </div>

      <OurApproachSection></OurApproachSection>

      <section className="mb-12 py-12">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-10">Valuation Methods</h2>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Method 1 */}
            <div className="relative flex flex-col items-center bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl hover:-translate-y-2 animate-fade-in animation-delay-200">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Book Value</h3>
              <p className="text-gray-600 text-center">Considered where there is no significant movement in the actual value of assets.</p>
              <div className="absolute inset-0 bg-blue-50 rounded-lg opacity-30"></div>
            </div>

            {/* Method 2 */}
            <div className="relative flex flex-col items-center bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl hover:-translate-y-2 animate-fade-in animation-delay-400">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Realizable Value</h3>
              <p className="text-gray-600 text-center">Used when the valuation is carried out on an ordinary or distress sale basis.</p>
              <div className="absolute inset-0 bg-blue-50 rounded-lg opacity-30"></div>
            </div>

            {/* Method 3 */}
            <div className="relative flex flex-col items-center bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl hover:-translate-y-2 animate-fade-in animation-delay-600">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Replacement Value</h3>
              <p className="text-gray-600 text-center">Estimates the fair value of assets on a going concern basis.</p>
              <div className="absolute inset-0 bg-blue-50 rounded-lg opacity-30"></div>
            </div>

            {/* Method 4 */}
            <div className="relative flex flex-col items-center bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl hover:-translate-y-2 animate-fade-in animation-delay-800">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Discounted Cash Flow Method</h3>
              <p className="text-gray-600 text-center">Projects expected after-tax free cash flows and discounts them to determine the value.</p>
              <div className="absolute inset-0 bg-blue-50 rounded-lg opacity-30"></div>
            </div>

            {/* Method 5 */}
            <div className="relative flex flex-col items-center bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl hover:-translate-y-2 animate-fade-in animation-delay-1000">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Earning Capitalization Method</h3>
              <p className="text-gray-600 text-center">Looks at earning potential based on historical and current financial information.</p>
              <div className="absolute inset-0 bg-blue-50 rounded-lg opacity-30"></div>
            </div>

            {/* Method 6 */}
            <div className="relative flex flex-col items-center bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl hover:-translate-y-2 animate-fade-in animation-delay-1200">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Comparable Company Multiples</h3>
              <p className="text-gray-600 text-center">Compares operational metrics and valuation multiples of listed peer companies.</p>
              <div className="absolute inset-0 bg-blue-50 rounded-lg opacity-30"></div>
            </div>

            {/* Method 7 */}
            <div className="relative flex flex-col items-center bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl hover:-translate-y-2 animate-fade-in animation-delay-1400 lg:col-start-2">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Recent Transactions Method</h3>
              <p className="text-gray-600 text-center">Estimates the value based on recent transactions involving the subject company.</p>
              <div className="absolute inset-0 bg-blue-50 rounded-lg opacity-30"></div>
            </div>
          </div>
        </div>
      </section>

      <Whyfuturity></Whyfuturity>
    </div>
  );
};

export default About;
