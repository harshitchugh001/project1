import React from 'react';
import Whyfuturity from './Whyfuturity'
import { CoherenceSvg, DiligenceSvg, InnovationSvg, IntegritySvg } from './AboutSvg';

const About = () => {
  return (
    <div className="  mt-28 container mx-auto p-6">
      {/* Who We Are Section */}
      <div className="mb-8">
        <h2 className="text-2xl md:text-4xl font-semibold mb-8 animate-fadeIn text-center">Who We Are</h2>
        <p className="text-lg text-gray-700 animate-fadeIn">
          <strong>Futurity</strong> is a unified team of leading technocommercial experts dedicated to delivering
          simple solutions to complex issues within a seamless and time-bound framework. Operating under the aegis of
          <strong> IBBI (The Insolvency & Bankruptcy Board of India)</strong>, Futurity works as one integrated team,
          leveraging diverse domain expertise, scale, and a deep understanding to offer exceptional and tailored
          services to our clients.
        </p>
        <h3 className="text-xl md:text-3xl font-semibold mt-10 mb-4 animate-fadeIn text-center">Our Core Values</h3>
        <div>
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-4">
            <div className='flex flex-col justify-center items-center'>
              <span className='w-28 h-28 md:w-48 md:h-48'>
                {IntegritySvg}
              </span>

              <span className='font-medium text-base md:text-xl'>
                Integrity
              </span>

            </div>

            <div className='flex flex-col justify-center items-center'>
              <span className='w-28 h-28 md:w-48 md:h-48'>
                {InnovationSvg}
              </span>

              <span className='font-medium text-base md:text-xl'>
                Innovation
              </span>

            </div>

            <div className='flex flex-col justify-center items-center'>
              <span className='w-28 h-28 md:w-48 md:h-48'>
                {CoherenceSvg}
              </span>

              <span className='font-medium text-base md:text-xl'>
                Coherence
              </span>

            </div>

            <div className='flex flex-col justify-center items-center gap-y-4'>
              <span className='w-28 h-28 md:w-48 md:h-48'>
                {DiligenceSvg}
              </span>

              <span className='font-medium text-base md:text-xl'>
                Diligence
              </span>

            </div>
          </div>
        </div>
      </div>

      <Whyfuturity></Whyfuturity>
    </div>
  );
};

export default About;
