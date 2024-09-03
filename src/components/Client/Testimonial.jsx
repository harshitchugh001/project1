import React from 'react';

const testimonials = [
  {
    logo: 'https://via.placeholder.com/100', // Replace with your client's logo URL
    text: '“I’ve worked with Scalar on multiple valuation engagements and each time they exceeded my expectations. Their team is very responsive, thorough, and informative. I appreciated all of their hard work, their exceptional service has been invaluable.”',
    client: 'John Doe, CEO of Company A',
  },
  {
    logo: 'https://via.placeholder.com/100', // Replace with your client's logo URL
    text: '“I’ve worked with Scalar on multiple valuation engagements and each time they exceeded my expectations. Their team is very responsive, thorough, and informative. I appreciated all of their hard work, their exceptional service has been invaluable.”',
    client: 'Jane Smith, CFO of Company B',
  },
  {
    logo: 'https://via.placeholder.com/100', // Replace with your client's logo URL
    text: '“I’ve worked with Scalar on multiple valuation engagements and each time they exceeded my expectations. Their team is very responsive, thorough, and informative. I appreciated all of their hard work, their exceptional service has been invaluable.”',
    client: 'Bob Johnson, COO of Company C',
  },
];

export default function Testimonials() {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">What Our Clients Say</h2>
        
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
              <p className="mt-4 text-right font-bold text-gray-800">{testimonial.client}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
