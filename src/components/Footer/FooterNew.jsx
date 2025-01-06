import React from 'react';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import logo from '../../assets/logo.png';

const FooterNew = () => {
  return (
    <footer className="bg-white py-10 border-t border-gray-200">
      <div className="container mx-auto px-4 lg:px-12">
        {/* Grid Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-gray-800">

          {/* Column 1 - Logo */}
          <div>
            <div className="mb-4">
              <img src={logo} className="h-16 w-32 md:h-20 md:w-44" alt="Logo" />
            </div>

            <h2 className="text-lg font-semibold mb-1"> Address</h2>
            <p className="text-sm text-gray-600">
              E-12, 2nd Floor, Naraina<br />
              Vihar, New Delhi 110028
            </p>
          </div>

          {/* Column 2 - About Us */}
          <div>
            <h4 className="text-black font-bold mb-4">About Us</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-blue-600">Home</a></li>
              <li><a href="/who-we-are" className="hover:text-blue-600">Team</a></li>
              <li><a href="/contact" className="hover:text-blue-600">Contact us</a></li>
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div>
            <h4 className="text-black font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-blue-600">Valuations</a></li>
              <li><a href="/" className="hover:text-blue-600">Risk Consulting</a></li>
              <li><a href="/" className="hover:text-blue-600">Disputes & Litigation</a></li>
              <li><a href="/" className="hover:text-blue-600">Corporate Finance</a></li>
              <li><a href="/" className="hover:text-blue-600">Transaction Advisory</a></li>
            </ul>
          </div>

          {/* Column 4 - Follow Us */}
          <div>
            <h4 className="text-black font-bold mb-4">Follow Us</h4>
            <div className="flex space-x-4 mt-2">
              <a href="/" className="w-8 h-8 bg-blue-600 text-white flex items-center justify-center rounded-md hover:bg-blue-800">
                <FaFacebook />
              </a>
              <a href="/" className="w-8 h-8 bg-blue-600 text-white flex items-center justify-center rounded-md hover:bg-blue-800">
                <FaLinkedin />
              </a>
            </div>
            <div className="mt-6">
              <h4 className="text-black font-bold">Contact US</h4>
              <p className="mt-1">Email: <a href="mailto:info@futurity.co.in" className="underline">info@futurity.co.in</a></p>
              <p>Phone: +91-9811284282</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterNew;
