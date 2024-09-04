import React from 'react';
import Reckit from '../../assets/Clients/Reckit.svg'
import Bptp from '../../assets/Clients/Bptp.svg'
import LG from '../../assets/Clients/LG.svg'

const testimonials = [
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

export default function Testimonials() {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">Our Clients</h2>
        
        {testimonials.map((testimonial, index) => (
          <div 
            key={index} 
            className={`flex flex-col md:flex-row items-center mb-12 ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
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
    </section>
  );
}
