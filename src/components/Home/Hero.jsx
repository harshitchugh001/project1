import React from 'react'
import Lottie from 'lottie-react';
// import animationData from '../../assets/Animation - 1724827126639.json';
// import Test from '../../assets/Test.json'
import HeroPageAnimation from '../../assets/HeroPageAnimation.json'
import GreyButton from '../buttons/GreyButton';
import { useNavigate } from 'react-router-dom';
const Hero = () => {

    const navigate = useNavigate();
    function OnClick() {
        navigate('/contact');
    }
    return (
        <div className='flex flex-col justify-center text-center items-center h-[400px] md:h-[850px]'>
            <div className="block md:hidden">
                <Lottie animationData={HeroPageAnimation} loop={true} style={{
                    width: 400,
                    height: 400,
                }} />
            </div>
            <div className="hidden md:block">
                <Lottie animationData={HeroPageAnimation} loop={true} style={{
                    width: 800,
                    height: 800,

                }} />
            </div>
            <GreyButton Content={`Let's Connect`} onClick={OnClick} />
        </div>
    )
}

export default Hero
