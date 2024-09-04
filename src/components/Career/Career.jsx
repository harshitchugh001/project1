import React from 'react'
import Productimage from '../../assets/product.jpg';
import CoreValues from './CoreValues'
import OpenPositions from './OpenPosition';
import GreyButton from '../buttons/GreyButton';

export default function Career() {
    return (
        <div className="mt-28 px-4 md:px-0">
            {/* Upper Section */}
            <div className="flex flex-col md:flex-row items-center justify-between bg-gray-100 p-6 rounded-lg shadow-md">
                {/* Left Side Image */}
                <div className="md:w-2/5 w-full mb-6 md:mb-0 md:mr-6">
                    <h2 className="text-gray-800 text-center text-lg md:text-xl lg:text-2xl font-bold px-4">
                    Join the premier business
                    valuation team
                    </h2>
                    
                </div>
                
                <div className="md:w-3/5 w-full">
                    <img
                        src={Productimage}
                        alt="Our Services"
                        className="w-full h-auto rounded-lg shadow-lg"
                        style={{
                            maskImage: 'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%)',
                            WebkitMaskImage: 'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%)',
                        }}
                    />
                </div>
            </div>


            <CoreValues></CoreValues>

            <OpenPositions></OpenPositions>
        </div>
    )
}
