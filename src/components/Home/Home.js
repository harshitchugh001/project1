import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link, useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';
import animationData from '../../assets/Animation - 1724827126639.json';
import Compliance from '../../assets/Compliance.png'
import Valuation from '../../assets/Valuation.png'
import Consulting from '../../assets/Consulting.png'
import zoom from '../../assets/zoom_logo.svg'
export default function Home() {
  const navigate = useNavigate();



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
    zoom,
    zoom,
    zoom,
    zoom,
    zoom,
  ];

  const services = [
    {
      imgSrc: Compliance,
      title: 'Compliance',
      description: 'Ensure your business meets regulatory requirements with our comprehensive valuation services. We specialize in valuations under the Companies Act 2013, SEBI Regulations, SARFAESI Act 2002, and financial reporting regulations.',
      link: '/services-details',
    },
    {
      imgSrc: Valuation,
      title: 'Valuation',
      description: 'Support your financial and strategic decisions with our independent valuation services. We offer expert valuations for angel investment, venture capital, private equity, foreign direct investment, and franchise arrangements.',
      link: '/services-details',
    },
    {
      imgSrc: Consulting,
      title: 'Consulting',
      description: 'Optimize project feasibility and asset management with our consulting services. We conduct techno-economic viability studies, independent engineer studies, and physical verification of assets.',
      link: '/services-details',
    },
  ];

  const handleClick = () => {
    navigate('/services');
  };







  return (
    <div className='mt-28'>
      <div className='flex flex-col justify-center text-center items-center'>
        {/* style={{ width: 600, height: 600 }} */}
        <div className="w-48 h-48 lg:w-96 lg:h-96">
          <Lottie animationData={animationData} loop={true} />
        </div>
        <button className='font-bold text-xl text-white hover:text-black px-3 py-3 bg-gray-700 hover:bg-gray-200 rounded-lg transform duration-500'>
          Let's Connect
        </button>
      </div>

      <div className="py-12 bg-gray-100 mt-8">
        <h2 className="text-3xl text-gray-700  font-bold text-center mb-8 mt-10 ">Selected Clients</h2>
        <div className="container mx-auto">
          <Slider {...settings}>
            {clients.map((client, index) => (
              <div key={index} className="p-4">
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <img
                    src={client}
                    alt="Client Logo"
                    className="w-32 h-32 mx-auto mb-4"
                  />

                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* //ourservices section */}
      <div className="bg-white">
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
                <div className="bg-white p-4 rounded-lg shadow-md h-full">
                  <Link to={service.link}>
                    <img
                      src={service.imgSrc}
                      alt="Service Icon"
                      className="mb-4 mx-auto h-32"
                    />
                  </Link>
                  <h3 className="text-base text-gray-950 text-center font-semibold mb-3">
                    <Link to={service.link}>{service.title}</Link>
                  </h3>

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <button
          onClick={handleClick}
          className="px-6 py-3 bg-gray-700 font-semibold text-white rounded-lg shadow-lg hover:bg-gray-600 transition duration-300"
        >
          Learn More
        </button>
      </div>
    </div>
  )
}
