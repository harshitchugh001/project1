import React from 'react'
import Slider from "react-slick";
import zoom from '../../assets/zoom_logo.svg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Clients = () => {
    const clients = [
        zoom,
        zoom,
        zoom,
        zoom,
        zoom,
    ];

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


    return (
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
    )
}

export default Clients
