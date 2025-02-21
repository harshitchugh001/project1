import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const WPCDecorFlexiBoards = () => {
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
                    <a href="#" className="hover:text-gray-300">Products</a>
                    <a href="#" className="hover:text-gray-300">About Us</a>
                    <a href="#" className="hover:text-gray-300">Insights & News</a>
                    <a href="#" className="hover:text-gray-300 border-b-2 border-white">Contact Us</a>
                </div>
                <button className="bg-white text-blue-900 px-4 py-2 rounded-md" onClick={() => navigate("/")}>Make an Enquiry</button>
                <button 
    className="bg-white text-blue-900 py-2 rounded-md"
    onClick={() => window.location.href = "https://iflex.frappe.cloud/"}
>
    Login
</button>

            </nav>

            {/* Banner */}
            <div className="relative bg-cover bg-center h-64 flex items-center justify-center text-white text-4xl font-bold">
                WPC Decor Flexi Boards
            </div>

            {/* Product Overview Button */}
            <div className="flex justify-center mt-4">
                <button className="bg-blue-900 text-white px-6 py-3 text-lg font-semibold rounded-md">Product Overview</button>
            </div>

            {/* Content Section */}
            <div className="container mx-auto p-6">
                <h2 className="text-2xl font-bold bg-blue-900 text-white inline-block px-4 py-2">WPC Decor Flexi Boards</h2>
                <p className="mt-4 text-gray-700">
                    Our WPC Decorative Sheets revolutionise interior design by offering a perfect blend of aesthetics and functionality. These visually stunning panels enhance the ambiance of any space, from homes and offices to retail stores, hotels, and restaurants.
                </p>
                <ul className="mt-4 space-y-2">
                    <li className="flex items-center"><span className="mr-2">✔</span> Ideal for residential, commercial, and industrial applications.</li>
                    <li className="flex items-center"><span className="mr-2">✔</span> Made from Wood-Plastic Composite (WPC) with a durable PVC layer.</li>
                </ul>
            </div>

            {/* Image Section */}
            <div className="flex justify-center mt-6">
                <img src="https://iflex.net.au/wp-content/uploads/2024/11/Screen-Shot-2024-11-22-at-9.24.09-pm.png" alt="WPC Decor" className="rounded-md shadow-lg" />
            </div>

            {/* Decorative Properties */}
            <div className="container mx-auto p-6 mt-6">
                <h2 className="text-xl font-bold bg-blue-900 text-white inline-block px-4 py-2">WPC Decorative Properties</h2>
                <ul className="mt-4 space-y-2">
                    <li className="flex items-center"><span className="mr-2">✔</span> High strength</li>
                    <li className="flex items-center"><span className="mr-2">✔</span> Fire resistant</li>
                    <li className="flex items-center"><span className="mr-2">✔</span> Pet friendly</li>
                    <li className="flex items-center"><span className="mr-2">✔</span> No deformation</li>
                </ul>
            </div>
        </div>
    );
};

export default WPCDecorFlexiBoards;
