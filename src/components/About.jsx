import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function About() {
    const navigate = useNavigate();
    return (

        <div className="bg-white w-full">
            {/* Header Section */}
            <div className="bg-orange-600 text-white text-sm py-2 flex justify-between px-4 md:px-16 items-center">
                <div className="flex items-center space-x-4">
                    <span>1800 043 539</span>
                    <span>info@iflex.net.au</span>
                </div>
                <div className="flex space-x-3">
                    <FaFacebookF className="text-white cursor-pointer hover:text-gray-300" />
                    <FaInstagram className="text-white cursor-pointer hover:text-gray-300" />
                    <FaLinkedinIn className="text-white cursor-pointer hover:text-gray-300" />
                    <FaTiktok className="text-white cursor-pointer hover:text-gray-300" />
                </div>
            </div>

            {/* Navbar */}
            <nav className="bg-blue-900 text-white py-4 px-4 md:px-16 flex justify-between items-center">
                <h1 className="text-2xl font-bold">IFLEX.</h1>
                <div className="hidden md:flex space-x-6">
                    <a href="#" className="hover:text-gray-300" onClick={() => navigate("/products")}>Products</a>
                    <a href="#" className="hover:text-gray-300" onClick={() => navigate("/about")}>About Us</a>
                    <a href="#" className="hover:text-gray-300"onClick={() => navigate("/")} >Contact Us</a>
                </div>
                <button className="bg-white text-blue-900 px-4 py-2 rounded-md" onClick={() => navigate("/")}>Make an Enquiry</button>
                <button
                    className="bg-white text-blue-900 py-2 rounded-md"
                    onClick={() => window.location.href = "https://iflex.frappe.cloud/"}
                >
                    Login
                </button>

            </nav>
            <div className="px-8 py-12 md:flex md:items-center">
                {/* Left Content */}
                <div className="md:w-2/3 space-y-4">
                    <h2 className="text-2xl font-semibold italic">
                        Our Journey to Innovation and Sustainability.
                    </h2>
                    <p className="text-gray-700">
                        We’re driven by a passion for transforming spaces into works of art...
                        <br />
                        <br />
                        From the outset, we recognised the potential to make a significant impact...
                        <br />
                        <br />
                        As we expand our reach beyond Australian shores, our products continue to set benchmarks...
                    </p>
                </div>

                {/* Right Side Image */}
                <div className="md:w-1/3 flex justify-center mt-6 md:mt-0">
                    <h1 className="text-6xl font-bold text-blue-900">
                        IFLEX<span className="text-orange-500">.</span>
                    </h1>
                </div>
            </div>
        </div>
    )
}
