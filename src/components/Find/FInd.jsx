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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* New Delhi */}
                        <div className="location-box rounded-lg relative group">
                            <div className="image-container h-60 w-full">
                                <img
                                    src={NewDelhiImg}
                                    alt="New Delhi Office"
                                    className="w-full h-full object-cover rounded-lg brightness-90"
                                />
                                <div className="address-btn absolute top-4 left-4 md:left-4 lg:left-4 px-4 py-3 bg-gradient-to-r from-white/95 via-white/90 to-white/95 backdrop-blur-sm border rounded-lg shadow-lg max-w-[80%] transition-all duration-300 hover:shadow-xl hover:from-white/98 hover:to-white/98">
                                    <h2 className='text-base md:text-lg font-semibold mb-1 text-gray-800'>New Delhi</h2>
                                    <p className='text-[11px] md:text-xs leading-relaxed text-gray-600'>1st Floor, Surya Kiran Building,<br />K G Marg, Connaught Place,<br />New Delhi-110001.</p>
                                </div>
                            </div>
                        </div>
                        {/* Mumbai */}
                        <div className="location-box rounded-lg relative group">
                            <div className="image-container h-60 w-full">
                                <img
                                    src={MumbaiImg}
                                    alt="Mumbai Office"
                                    className="w-full h-full object-cover rounded-lg brightness-90"
                                />
                                <div className="address-btn absolute top-4 left-4 md:left-4 lg:left-4 px-4 py-3 bg-gradient-to-r from-white/95 via-white/90 to-white/95 backdrop-blur-sm border rounded-lg shadow-lg max-w-[80%] transition-all duration-300 hover:shadow-xl hover:from-white/98 hover:to-white/98">
                                    <h2 className='text-base md:text-lg font-semibold mb-1 text-gray-800'>Mumbai</h2>
                                    <p className='text-[11px] md:text-xs leading-relaxed text-gray-600'>17, Building No. A8,<br />Parasnath Complex,<br />Thane - 421302.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Row 2 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Kolkata */}
                        <div className="location-box rounded-lg relative group">
                            <div className="image-container h-60 w-full">
                                <img
                                    src={KolkataImg}
                                    alt="Kolkata Office"
                                    className="w-full h-full object-cover rounded-lg brightness-90"
                                />
                                <div className="address-btn absolute top-4 left-4 md:left-4 lg:left-4 px-4 py-3 bg-gradient-to-r from-white/95 via-white/90 to-white/95 backdrop-blur-sm border rounded-lg shadow-lg max-w-[80%] transition-all duration-300 hover:shadow-xl hover:from-white/98 hover:to-white/98">
                                    <h2 className='text-base md:text-lg font-semibold mb-1 text-gray-800'>Kolkata</h2>
                                    <p className='text-[11px] md:text-xs leading-relaxed text-gray-600'>7th Floor, Room No. 3,<br />224A AJC Bose Road,<br />Kolkata - 700017.</p>
                                </div>
                            </div>
                        </div>
                        {/* Gurugram */}
                        <div className="location-box rounded-lg relative group">
                            <div className="image-container h-60 w-full">
                                <img
                                    src={GurgramImg}
                                    alt="Gurugram Office"
                                    className="w-full h-full object-cover rounded-lg brightness-90"
                                />
                                <div className="address-btn absolute top-4 left-4 md:left-4 lg:left-4 px-4 py-3 bg-gradient-to-r from-white/95 via-white/90 to-white/95 backdrop-blur-sm border rounded-lg shadow-lg max-w-[80%] transition-all duration-300 hover:shadow-xl hover:from-white/98 hover:to-white/98">
                                    <h2 className='text-base md:text-lg font-semibold mb-1 text-gray-800'>Gurugram</h2>
                                    <p className='text-[11px] md:text-xs leading-relaxed text-gray-600'>46, 1st Floor, Jacaranda Marg,<br />Gurugram, Haryana - 122022.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Row 3 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Ludhiana */}
                        <div className="location-box rounded-lg relative group">
                            <div className="image-container h-60 w-full">
                                <img
                                    src={LudhianaImg}
                                    alt="Ludhiana Office"
                                    className="w-full h-full object-cover rounded-lg brightness-90"
                                />
                                <div className="address-btn absolute top-4 left-4 md:left-4 lg:left-4 px-4 py-3 bg-gradient-to-r from-white/95 via-white/90 to-white/95 backdrop-blur-sm border rounded-lg shadow-lg max-w-[80%] transition-all duration-300 hover:shadow-xl hover:from-white/98 hover:to-white/98">
                                    <h2 className='text-base md:text-lg font-semibold mb-1 text-gray-800'>Ludhiana</h2>
                                    <p className='text-[11px] md:text-xs leading-relaxed text-gray-600'>271, Maya Nagar, Civil Lines,<br />Ludhiana - 141001.</p>
                                </div>
                            </div>
                        </div>
                        {/* Chandigarh */}
                        <div className="location-box rounded-lg relative group">
                            <div className="image-container h-60 w-full">
                                <img
                                    src={ChandigarhImg}
                                    alt="Chandigarh Office"
                                    className="w-full h-full object-cover rounded-lg brightness-90"
                                />
                                <div className="address-btn absolute top-4 left-4 md:left-4 lg:left-4 px-4 py-3 bg-gradient-to-r from-white/95 via-white/90 to-white/95 backdrop-blur-sm border rounded-lg shadow-lg max-w-[80%] transition-all duration-300 hover:shadow-xl hover:from-white/98 hover:to-white/98">
                                    <h2 className='text-base md:text-lg font-semibold mb-1 text-gray-800'>Chandigarh</h2>
                                    <p className='text-[11px] md:text-xs leading-relaxed text-gray-600'>1839, Sector 22-B, 01st Floor,<br />Chandigarh - 160022.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
