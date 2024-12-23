import React from "react";
import Envesty from "../../assets/logo.png";
import "./Footer.css"; // Include custom styles for animations and hover effects

export default function Footer() {
    return (
        <footer className="bg-gray-50">
            {/* Main Section */}
            <div className="max-w-7xl mx-auto px-6 sm:px-8 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-gray-800">
                {/* Brand Section */}
                <div className="space-y-4" data-aos="fade-up" data-aos-duration="1000">
                    <img
                        src={Envesty}
                        alt="Envesty Logo"
                        className="w-24 sm:w-32"
                    />
                    <p className="font-bold text-xl">ENVESTY</p>
                    <p className="text-gray-600">
                        Simplifying business solutions for a better tomorrow.
                    </p>
                </div>

                {/* Contact Section */}
                <div className="space-y-4" data-aos="fade-up" data-aos-duration="1200">
                    <h3 className="font-bold text-lg">Get In Touch</h3>
                    <p>Noida, Uttar Pradesh 201310</p>
                    <p>
                        <strong>For Consultation:</strong>
                        <br />
                        - 1234567890
                        <br />
                        - 1234567890
                    </p>
                    <p>
                        <strong>Talk with Expert:</strong>
                        <br />
                        - 1234567890
                    </p>
                </div>

                {/* Additional Info */}
                <div className="space-y-4" data-aos="fade-up" data-aos-duration="1400">
                    <h3 className="font-bold text-lg">Contact Info</h3>
                    <p>
                        Email:{" "}
                        <a
                            href="mailto:support@envesty.in"
                            className="text-blue-500 hover:underline"
                        >
                            support@envesty.in
                        </a>
                    </p>
                    <p>Monday – Friday</p>
                    <p>9:00 AM – 6:00 PM</p>
                    <div className="flex space-x-4">
                        <a
                            href="#"
                            className="text-gray-500 hover:text-blue-600 transition-transform transform hover:scale-110"
                        >
                            <i className="fab fa-linkedin fa-lg"></i>
                        </a>
                        <a
                            href="#"
                            className="text-gray-500 hover:text-red-600 transition-transform transform hover:scale-110"
                        >
                            <i className="fab fa-youtube fa-lg"></i>
                        </a>
                        <a
                            href="#"
                            className="text-gray-500 hover:text-pink-600 transition-transform transform hover:scale-110"
                        >
                            <i className="fab fa-instagram fa-lg"></i>
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="space-y-4" data-aos="fade-up" data-aos-duration="1600">
                    <h3 className="font-bold text-lg">Pages</h3>
                    <ul className="space-y-2">
                        {["Home", "About Us", "Services",   "Contact Us"].map(
                            (page, index) => (
                                <li
                                    key={index}
                                    className="hover:text-blue-500 transition-transform transform hover:translate-x-1"
                                >
                                    <a href="#">{page}</a>
                                </li>
                            )
                        )}
                    </ul>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="bg-gray-100 py-4">
                <div className="max-w-7xl mx-auto px-6 text-center text-gray-600 text-sm">
                    <p>
                        Designed by{" "}
                        <a href="#" className="text-blue-500 hover:underline">
                            Team Envesty
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
