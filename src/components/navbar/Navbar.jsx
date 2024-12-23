import React, { useState } from "react";
import logo from "../../assets/logo.png";
import ServicesDropdown from './ServicesDropdown';

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
                {/* Logo */}
                <a href="/" className="flex items-center">
                    <img
                        src={logo}
                        alt="Logo"
                        className="h-9 w-auto sm:h-9 md:h-9"
                    />
                </a>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center space-x-8">
                    <a href="/" className="text-gray-800 hover:text-blue-600 font-medium">
                        Home
                    </a>
                    <div className="">
                        <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="flex items-center text-gray-800 hover:text-blue-600 font-medium"
                        >
                            Services
                            <svg
                                className="w-4 h-4 ml-1"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d={isDropdownOpen ? "M19 9l-7 7-7-7" : "M9 5l7 7-7 7"}
                                />
                            </svg>
                        </button>
                        {isDropdownOpen && (
                            <ServicesDropdown />
                        )}
                    </div>
                    <a href="/partners" className="text-gray-800 hover:text-blue-600 font-medium">
                        Partners
                    </a>
                    <a href="/featured" className="text-gray-800 hover:text-blue-600 font-medium">
                        Featured
                    </a>
                    <a href="/contact-us" className="text-gray-800 hover:text-blue-600 font-medium">
                        Contact Us
                    </a>
                </div>

                {/* Helpline for Desktop */}
                <div className="hidden md:flex">
                    <a
                        href="tel:+916358054005"
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition"
                    >
                        Helpline No +91 6358054005
                    </a>
                </div>

                {/* Hamburger Menu Button for Mobile */}
                <button
                    className="md:hidden text-gray-800"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <svg
                        className="w-6 h-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                        />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white shadow-lg border-t">
                    <ul className="flex flex-col items-start p-4 space-y-2">
                        <li>
                            <a href="/" className="text-gray-800 hover:text-blue-600 font-medium">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="/services" className="text-gray-800 hover:text-blue-600 font-medium">
                                Services
                            </a>
                        </li>
                        <li>
                            <a href="/partners" className="text-gray-800 hover:text-blue-600 font-medium">
                                Partners
                            </a>
                        </li>
                        <li>
                            <a href="/featured" className="text-gray-800 hover:text-blue-600 font-medium">
                                Featured
                            </a>
                        </li>
                        <li>
                            <a href="/contact-us" className="text-gray-800 hover:text-blue-600 font-medium">
                                Contact Us
                            </a>
                        </li>
                        <li>
                            <a
                                href="tel:+916358054005"
                                className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition w-full text-center"
                            >
                                Helpline No +91 6358054005
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
