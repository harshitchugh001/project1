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


import { Clock, Handshake, Target } from 'lucide-react'
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
                <div className=" p-6 rounded-lg  text-center">
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
          <div className="text-center my-8 gap-y-4 flex flex-col ">
            <span className="text-gray-700 text-2xl font-semibold">___Services__</span>
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
                  <p>{service.description}</p>

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <button
          onClick={handleClick}
          className="font-bold text-xl text-white hover:text-black px-3 py-3 bg-gray-700 hover:bg-gray-200 rounded-lg transform duration-500"
        >
          Learn More
        </button>
      </div>


      {/* //working process */}
      <section className="flex flex-col items-center py-12 px-4 container mx-auto">

        <h2 className="text-3xl font-bold mb-2 text-center">Working Process</h2>

        <div className="w-24 h-1 bg-gray-400 mb-8"></div>


        <div className="text-center mb-8">
          <p className="text-lg text-gray-600 mb-2  ">Our experienced team understands that each client has a distinct set of needs. We are dedicated to refining and implementing the most effective strategies for conducting valuations, assessing risk, and identifying business opportunities, all with the goal of helping our clients achieve success.</p>
          {/* <p className="text-lg text-gray-600">Second line of text</p> */}
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl w-full">
          <div className="p-6 text-center flex flex-col items-center">
            <div className="mb-4">
              {/* Replace with your icon component or an image */}
              <Clock size={60} color='gray' />
            </div>
            <h3 className="text-lg font-semibold mb-2">Timely</h3>
            <p className="text-gray-600">
              Futurity goes the extra mile to meet any tight timelines or deadlines set by our clients.
            </p>

          </div>

          <div className="p-6 text-center flex flex-col items-center">
            <div className="mb-4">
              {/* Replace with your icon component or an image */}
              <Handshake size={60} color='gray' />
            </div>
            <h3 className="text-lg font-semibold mb-2">Communication</h3>
            <p className="text-gray-600">
              Futurity prides itself in keeping its clients informed throughout the valuation process.
            </p>

          </div>
          <div className="p-6 text-center flex flex-col items-center">
            <div className="mb-4">
              <Target size={60} color='gray'/>
            </div>
            <h3 className="text-lg font-semibold mb-2">Accuracy</h3>
            <p className="text-gray-600">
              Futurity multi-tiered review system ensures pinpoint accuracy for its deliverables.
            </p>

          </div>

        </div>
      </section>
    </div>
  )
}
