import React from "react";
import "./Home.css"; 
import CoreVision from "./CoreVision"
import CoreVisionMission from "./CoreVision";

export default function Home() {
    return (
        <div className="max-w-6xl mx-auto mt-24 py-4 px-6">
            <div className="flex flex-col md:flex-row items-center justify-between bg-white  md:space-y-0">
                {/* Left Section */}
                <div className="left-section max-w-lg text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        <span className="text-blue-500">Empowering Your</span> Financial
                        <br />
                        Future and Growth
                    </h1>
                    <p className="mt-6 text-lg text-gray-600">
                    At Envesty Solutions Pvt. Ltd., we are dedicated to helping families, MSMEs, and startups unlock their full potential through financial literacy, skill development, and expert mentorship. Whether you are planning for your child's education, navigating your business's compliance, or seeking to grow your skills, we provide the tools and guidance you need to succeed.
                    </p>
                    <div className="mt-8 flex justify-center md:justify-start space-x-4">
                        <button className="bg-purple-800 text-white px-6 py-3 rounded-lg shadow-md hover:bg-purple-700 transition">
                            Explore
                        </button>
                        <button className="bg-white border border-gray-300 text-gray-800 px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 transition">
                            Learn more
                        </button>
                    </div>
                </div>

                {/* Right Section */}
                <div className="right-section md:mt-4">
                    <img
                        src={`/img/developer.svg`}
                        alt="Developer Illustration"
                        className="w-72 md:w-96 mx-auto"
                    />
                </div>
            </div>


            <div>
                <CoreVisionMission/>
            </div>
        </div>
    );
}
