import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const clients = [
    "Client 1",
    "Client 2",
    "Client 3",
    "Client 4",
    "Client 5",
  ]; // Replace with real client names later
  return (
    <div>
      <div>gif section</div>
      <div className="py-12 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">Selected Clients</h2>
      <div className="container mx-auto">
        <Slider {...settings}>
          {clients.map((client, index) => (
            <div key={index} className="p-4">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                {client}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
    </div>
  )
}
