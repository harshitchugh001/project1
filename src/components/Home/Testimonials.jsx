import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    quote:
      "Futurity has been instrumental in our company's success. Their tailored solutions and exceptional service have helped us navigate complex challenges seamlessly.",
    name: 'John Doe',
    designation: 'CEO, ABC Corporation',
  },
  {
    quote:
      "Working with Futurity has been a game-changer for our business. Their expertise and insights have added incredible value to our operations.",
    name: 'Jane Smith',
    designation: 'Managing Director, XYZ Ltd.',
  },
  {
    quote:
      "The team at Futurity is knowledgeable, professional, and incredibly responsive. We are grateful for their strategic guidance and unwavering support.",
    name: 'Michael Johnson',
    designation: 'CFO, Tech Innovators Inc.',
  },
];

export default function Testimonials() {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-gray-800">What Our Clients Say</h2>
        {/* <p className="text-gray-600 mt-2">Hear from some of our valued clients.</p> */}
      </div>

      {/* Swiper Section */}
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        className="rounded-lg shadow-lg"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-lg p-8 text-center">
              <p className="text-gray-600 text-lg italic leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-blue-600">{testimonial.name}</h3>
                <p className="text-gray-500">{testimonial.designation}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
