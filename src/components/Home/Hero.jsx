import React from 'react';
import Lottie from 'lottie-react';
import HeroPageAnimation from '../../assets/Animation - 1725615516390.json';
import GreyButton from '../buttons/GreyButton';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/contact');
    };

    return (
        <div className="flex flex-col items-center justify-center text-center px-4  md:py-16 bg-gray-50">
            {/* Lottie Animation */}
            <div className="">
                <div className="block md:hidden">
                    <Lottie
                        animationData={HeroPageAnimation}
                        loop={true}
                        style={{
                            width: 300,
                            height: 300,
                        }}
                    />
                </div>
                <div className="hidden md:block">
                    <Lottie
                        animationData={HeroPageAnimation}
                        loop={true}
                        style={{
                            width: 600,
                            height: 600,
                        }}
                    />
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-3xl">
                <p className="text-gray-800 text-lg md:text-xl font-medium mb-6 leading-relaxed">
                    Futurity is a cohesive team of financial, technical, and techno-commercial industry experts, united by 
                    a shared vision of delivering straightforward solutions to even the most complex business challenges.
                </p>

                {/* Call-to-Action Button */}
                <GreyButton Content={`Let's Connect`} onClick={handleClick} />
            </div>
        </div>
    );
};

export default Hero;
