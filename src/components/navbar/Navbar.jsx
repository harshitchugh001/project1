import React, { useState, useEffect } from 'react';
import logo from '../../assets/logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    // Scroll effect for navbar and backdrop
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 z-20 w-full h-20 border-b ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
                } transition-all`}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-full">
                {/* Logo */}
                <a href="/" className="flex items-center space-x-3">
                    <img src={logo} className="h-16 w-32 md:h-20 md:w-44" alt="Logo" />
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    <a
                        href="/"
                        className="text-gray-800 hover:font-semibold transition"
                    >
                        Home
                    </a>
                    <div className="relative">
                        <button
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                            className="flex items-center text-gray-800 hover:font-semibold transition"
                        >
                            What We Do
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
                                    strokeWidth="2"
                                    d={dropdownOpen ? 'M19 9l-7 7-7-7' : 'M9 5l7 7-7 7'}
                                />
                            </svg>
                        </button>
                        {dropdownOpen && (
                            <ul className="absolute top-10 left-0 w-56 bg-white shadow-lg rounded-lg border py-2">
                                <li>
                                    <a
                                        href="/valuation"
                                        className="block px-4 py-2 hover:bg-gray-100"
                                    >
                                        Valuation
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/risk-consulting"
                                        className="block px-4 py-2 hover:bg-gray-100"
                                    >
                                        Risk Consulting
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/disputes-litigation"
                                        className="block px-4 py-2 hover:bg-gray-100"
                                    >
                                        Disputes & Litigation
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/corporate-finance"
                                        className="block px-4 py-2 hover:bg-gray-100"
                                    >
                                        Corporate Finance
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/transaction-advisory"
                                        className="block px-4 py-2 hover:bg-gray-100"
                                    >
                                        Transaction Advisory
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/digital-transformation"
                                        className="block px-4 py-2 hover:bg-gray-100"
                                    >
                                        Digital Transformation
                                    </a>
                                </li>
                            </ul>
                        )}
                    </div>
                    <a
                        href="/who-we-are"
                        className="text-gray-800 hover:font-semibold transition"
                    >
                        Who We Are
                    </a>
                    <a
                        href="/where-to-find-us"
                        className="text-gray-800 hover:font-semibold transition"
                    >
                        Where to Find Us
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-gray-800 hover:bg-gray-100"
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
                            strokeWidth="2"
                            d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                        />
                    </svg>
                </button>

                {/* Mobile Dropdown */}
                {isOpen && (
                    <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden">
                        <ul className="flex flex-col space-y-1 py-4 px-6">

                            <li>
                                <a
                                    href="/"
                                    className="block text-gray-800 hover:font-semibold"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <button
                                    onClick={() => setDropdownOpen(!dropdownOpen)}
                                    className="flex justify-between items-center w-full text-gray-800 hover:font-semibold"
                                >
                                    What We Do
                                    <svg
                                        className="w-4 h-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d={
                                                dropdownOpen
                                                    ? 'M19 9l-7 7-7-7'
                                                    : 'M9 5l7 7-7 7'
                                            }
                                        />
                                    </svg>
                                </button>
                                {dropdownOpen && (
                                    <ul className="mt-2 pl-4 space-y-2">
                                        <li>
                                            <a
                                                href="/valuation"
                                                className="block text-gray-800 hover:underline"
                                            >
                                                Valuation
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="/risk-consulting"
                                                className="block text-gray-800 hover:underline"
                                            >
                                                Risk Consulting
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="/disputes-litigation"
                                                className="block text-gray-800 hover:underline"
                                            >
                                                Disputes & Litigation
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="/corporate-finance"
                                                className="block text-gray-800 hover:underline"
                                            >
                                                Corporate Finance
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="/transaction-advisory"
                                                className="block text-gray-800 hover:underline"
                                            >
                                                Transaction Advisory
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="/digital-transformation"
                                                className="block text-gray-800 hover:underline"
                                            >
                                                Digital Transformation
                                            </a>
                                        </li>
                                    </ul>
                                )}
                            </li>
                            <li>
                                <a
                                    href="/who-we-are"
                                    className="block text-gray-800 hover:font-semibold"
                                >
                                    Who We Are
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/where-to-find-us"
                                    className="block text-gray-800 hover:font-semibold"
                                >
                                    Where to Find Us
                                </a>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
