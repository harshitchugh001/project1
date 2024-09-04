import React from 'react';
import Reckit from '../../assets/Clients/Reckit.svg'
import Bptp from '../../assets/Clients/Bptp.svg'
import LG from '../../assets/Clients/LG.svg'
import TechMahindra from '../../assets/Clients/TechMahindra.svg'
import Jindal from '../../assets/Clients/JindalSteels.png'
import BhartiDefence from '../../assets/Clients/Defence.png'
import RelxGro from '../../assets/Clients/RelxGrp.png'
import SterlingWilson from '../../assets/Clients/SterlingWilson.svg'
import HCL from '../../assets/Clients/HeclTech.svg'
const MajorDispute = [
  {
    logo: Reckit,
    text: `Expert appointed by Reckitt in dissenting shareholder's case`,
    client: 'John Doe, CEO of Company A',
  },
  {
    logo: Bptp,
    text: 'Expert in arbitration between BPTP Limited and Citi Bank',
    client: 'Jane Smith, CFO of Company B',
  },
  {
    logo: LG,
    text: '“Expert Witness for domestic arbitration with one of their largest vendor”',
    client: 'Bob Johnson, COO of Company C',
  },
];

const MajorInsolvency = [
  TechMahindra,
  RelxGro,
  BhartiDefence,
  Jindal,
  SterlingWilson,
  HCL
]


export default function Testimonials() {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">Our Clients</h2>

        <div>
          <h1 className='text-2xl text-gray-700 italic text-center underline font-medium mt-24 mb-8'>Major Clients</h1>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 md:gap-y-10 lg:gap-y-16 place-items-center'>
            {
              MajorInsolvency.map((client, index) => (
                <div key={index} className='flex justify-center'>
                  <img src={client} alt="Client" className='w-48 h-16' />
                </div>
              ))
            }
          </div>
        </div>
        <div>
          <h1 className='text-2xl text-gray-700 italic text-center underline font-medium mt-32 mb-8'>Major Dispute Valuations</h1>
          {MajorDispute.map((testimonial, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
            >
              {/* Logo */}
              <div className="w-full md:w-1/3 flex justify-center mb-4 md:mb-0">
                <img src={testimonial.logo} alt={`Logo of ${testimonial.client}`} className="h-24 w-24 md:h-32 md:w-32 object-contain" />
              </div>

              {/* Testimonial Text */}
              <div className="w-full md:w-2/3 bg-white p-6 rounded-lg shadow-lg">
                <p className="text-lg italic text-gray-600">"{testimonial.text}"</p>
                {/* <p className="mt-4 text-right font-bold text-gray-800">{testimonial.client}</p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
