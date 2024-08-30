import React, { useState } from 'react';
import logo from '../../assets/logo.png';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white fixed w-full z-20 top-0 left-0 border-b shadow-sm">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                {/* Logo */}
                <a href="/" className="flex items-center space-x-3">
                    <img src={logo} className="h-20" alt="Logo" />
                </a>
                
                {/* Hamburger Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                    aria-controls="navbar-sticky"
                    aria-expanded={isOpen ? "true" : "false"}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d={isOpen ? "M2 2l12 12M2 14L14 2" : "M1 1h15M1 7h15M1 13h15"}
                        />
                    </svg>
                </button>

                {/* Navbar Items */}
                <div
                    className={`${
                        isOpen ? "block" : "hidden"
                    } w-full md:flex md:w-auto md:order-1`}
                    id="navbar-sticky"
                >
                    <ul className="flex flex-col md:flex-row p-4 md:p-0 mt-4 md:mt-0 space-y-2 md:space-y-0 md:space-x-8 font-bold text-gray-500 bg-gray-50 md:bg-white rounded-lg md:border-0">
                        <li>
                            <a href="/services" className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-black hover:underline">
                            Services
                            </a>
                        </li>
                        <li>
                            <a href="/" className="block py-2 px-3 rounded  md:hover:bg-transparent hover:text-black hover:underline">
                                Product
                            </a>
                        </li>
                        <li>
                            <a href="/" className="block py-2 px-3 rounded  md:hover:bg-transparent hover:text-black hover:underline">
                                About Us
                            </a>
                        </li>
                        <li>
                            <a href="/" className="block py-2 px-3 rounded  md:hover:bg-transparent hover:text-black hover:underline">
                                Team
                            </a>
                        </li>
                        <li>
                            <a href="/" className="block py-2 px-3 rounded  md:hover:bg-transparent hover:text-black hover:underline">
                                Clients 
                            </a>
                        </li>
                        <li>
                            <a href="/" className="block py-2 px-3 rounded  md:hover:bg-transparent hover:text-black hover:underline">
                                Careers
                            </a>
                        </li>
                        <li>
                            <a href="/" className="block py-2 px-3 rounded md:hover:bg-transparent hover:text-black hover:underline" >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>

                <div></div>
            </div>
        </nav>
    );
}
