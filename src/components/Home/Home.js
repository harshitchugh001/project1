import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

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
  ];

  const services = [
    {
      imgSrc: 'assets/img/service/service-icon1.png',
      title: 'VALUATION SERVICES FOR COMPLIANCE REQUIREMENTS',
      description: 'Ensure your business meets regulatory requirements with our comprehensive valuation services. We specialize in valuations under the Companies Act 2013, SEBI Regulations, SARFAESI Act 2002, and financial reporting regulations.',
      link: '/services-details',
    },
    {
      imgSrc: 'assets/img/service/service-icon2.png',
      title: 'Independent Valuation Services',
      description: 'Support your financial and strategic decisions with our independent valuation services. We offer expert valuations for angel investment, venture capital, private equity, foreign direct investment, and franchise arrangements.',
      link: '/services-details',
    },
    {
      imgSrc: 'assets/img/service/service-icon3.png',
      title: 'OTHER CONSULTING SERVICES',
      description: 'Optimize project feasibility and asset management with our consulting services. We conduct techno-economic viability studies, independent engineer studies, and physical verification of assets.',
      link: '/services-details',
    },
  ];






  return (
    <div>
      <div>gif section</div>
      {/* //selected-section */}
      <div className="py-12 bg-gray-100 mt-8">
        <h2 className="text-3xl text-gray-700  font-bold text-center mb-8 mt-10 ">Selected Clients</h2>
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

      {/* //ourservices section */}
      <div className="bg-white py-12">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <span className="text-gray-700 font-semibold">___Services__</span>
            <h2 className="text-3xl text-gray-700 font-bold mt-2">
              We’re Flexible to <b>Provide You Best</b>
            </h2>
          </div>

          <div className="flex flex-wrap justify-between pt-12">
            {services.map((service, index) => (
              <div key={index} className="w-full lg:w-1/3 md:w-full px-4 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-md h-full">
                  <Link to={service.link}>
                    <img
                      src={service.imgSrc}
                      alt="Service Icon"
                      className="mb-4 mx-auto"
                    />
                  </Link>
                  <h3 className="text-xl text-gray-700 font-bold mb-3">
                    <Link to={service.link}>{service.title}</Link>
                  </h3>
                  <p className="text-gray-700">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
