import React from 'react';
import NewDelhiImg from '../../assets/NewDelhi.jpg';
import MumbaiImg from '../../assets/Mumbai.jpg';
import KolkataImg from '../../assets/Kolkata.jpg';
import GurgramImg from '../../assets/Gurugram.jpg';
import LudhianaImg from '../../assets/Ludhiana.jpg';
import ChandigarhImg from '../../assets/chandigarh.jpg';

export default function Find() {
    return (
        <div className='mt-28'>
            <div className="find-page">
                <div className="grid-container grid grid-rows-3 gap-4 p-4 mx-auto max-w-7xl">
                    {/* Row 1 */}
                    <div className="grid grid-cols-2 gap-4">
                        {/* New Delhi */}
                        <div className="location-box  rounded-lg relative">
                            <div className="image-container h-60 w-full">
                                <img
                                    src={NewDelhiImg}
                                    alt="New Delhi Office"
                                    className="w-full h-full object-cover rounded-lg"
                                />
                                <p className="sm:text-xs address-btn absolute top-4 left-1/2 md:left-1/3 lg:left-1/4 transform -translate-x-1/2 px-8 sm:px-6 py-1 sm:py-2 bg-white border rounded-lg shadow-md">
                                    <h2 className='text-base font-medium '>New Delhi</h2>
                                    <p className='text-[10px] sm:text-xs'>1st Floor, Surya Kiran Building,<br />K G Marg, Connaught Place,<br />New Delhi-110001.</p>
                                </p>
                            </div>
                        </div>
                        {/* Mumbai */}
                        <div className="location-box  rounded-lg relative">
                            <div className="image-container h-60 w-full">
                                <img
                                    src={MumbaiImg}
                                    alt="Mumbai Office"
                                    className="w-full h-full object-cover rounded-lg"
                                />
                                <p className="text-xs address-btn absolute top-4 left-1/2 md:left-1/3 lg:left-1/4 transform -translate-x-1/2 px-6 py-2 bg-white border rounded-lg shadow-md">
                                    <h2 className='text-base font-medium '>Mumbai</h2>
                                    <p>17, Building No. A8,<br />Parasnath Complex,<br />Thane - 421302.</p>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Row 2 */}
                    <div className="grid grid-cols-2 gap-4">
                        {/* Kolkata */}
                        <div className="location-box border rounded-lg relative">
                            <div className="image-container h-60 w-full">
                                <img
                                    src={KolkataImg}
                                    alt="Kolkata Office"
                                    className="w-full h-full object-cover rounded-lg"
                                />
                                <p className="text-xs address-btn absolute top-4 left-1/2 md:left-1/3 lg:left-1/4 transform -translate-x-1/2 px-6 py-2 bg-white border rounded-lg shadow-md">
                                    <h2 className='text-base font-medium '>Kolkata</h2>
                                    <p>7th Floor, Room No. 3,<br />224A AJC Bose Road,<br />Kolkata - 700017.</p>
                                </p>
                            </div>
                        </div>
                        {/* Gurugram */}
                        <div className="location-box  rounded-lg relative">
                            <div className="image-container h-60 w-full">
                                <img
                                    src={GurgramImg}
                                    alt="Gurugram Office"
                                    className="w-full h-full object-cover rounded-lg"
                                />
                                <p className="text-xs address-btn absolute top-4 left-1/2 md:left-1/3 lg:left-1/4 transform -translate-x-1/2 px-6 py-2 bg-white border rounded-lg shadow-md">
                                    <h2 className='text-base font-medium '>Gurugram</h2>
                                    <p>46, 1st Floor, Jacaranda Marg,<br />Gurugram, Haryana - 122022.</p>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Row 3 */}
                    <div className="grid grid-cols-2 gap-4">
                        {/* Ludhiana */}
                        <div className="location-box  rounded-lg relative">
                            <div className="image-container h-60 w-full">
                                <img
                                    src={LudhianaImg}
                                    alt="Ludhiana Office"
                                    className="w-full h-full object-cover rounded-lg"
                                />
                                <p className="text-xs address-btn absolute top-4 left-1/2 md:left-1/3 lg:left-1/4 transform -translate-x-1/2 px-6 py-2 bg-white border rounded-lg shadow-md">
                                    <h2 className='text-base font-medium'>Ludhiana</h2>
                                    <p>271, Maya Nagar, Civil Lines,<br />Ludhiana - 141001.</p>
                                </p>
                            </div>
                        </div>
                        {/* Chandigarh */}
                        <div className="location-box  rounded-lg relative">
                            <div className="image-container h-60 w-full">
                                <img
                                    src={ChandigarhImg}
                                    alt="Chandigarh Office"
                                    className="w-full h-full object-cover rounded-lg"
                                />
                                <p className="text-xs address-btn absolute top-4 left-1/2 md:left-1/3 lg:left-1/4 transform -translate-x-1/2 px-6 py-2 bg-white border rounded-lg shadow-md">
                                    <h2 className='text-base font-medium'>Chandigarh</h2>
                                    <p>1839, Sector 22-B, 01st Floor,<br />Chandigarh - 160022.</p>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
