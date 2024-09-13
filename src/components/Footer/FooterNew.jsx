import React from 'react';
import {Mail,Phone,MapPin} from 'lucide-react'
import { FaXTwitter } from "react-icons/fa6";


const FooterNew = () => {
  return (
    <footer className="bg-gray-600 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {/* Column 1 - Company */}
          <div className="footer-col text-xs md:text-sm">
            <h4 className="text-black font-bold mb-4 text-base">Company</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-white">About Us</a></li>
              <li><a href="/team" className="hover:text-white">Our Team</a></li>
              <li><a href="/contact" className="hover:text-white">Contact Us</a></li>
              <li><a href="/career" className="hover:text-white">Careers</a></li>
            </ul>
          </div>

          {/* Column 2 - Network */}
          <div className="footer-col text-xs md:text-sm">
            <h4 className="text-black font-bold mb-4 text-base">Our Work</h4>
            <ul className="space-y-2">
              <li><a href="/services" className="hover:text-white">Services</a></li>
              <li><a href="/client" className="hover:text-white">Clients</a></li>
            </ul>
          </div>
          {/* Column 3 - Our Work */}
          <div className="footer-col text-xs md:text-sm">
            <h4 className="text-black font-bold mb-4 text-base">Contact Us</h4>
            <ul className="space-y-2 block md:hidden">
              <li className='flex items-center gap-2'><Mail size={13}/> info@futurity.co.in</li>
              <li className='flex items-center gap-2'><Phone size={13}/>+91-9811284282</li>
              <li className='flex items-center gap-2'><MapPin  size={13}/> <p> E-12, 2nd Floor, Naraina<br />Vihar, New Delhi 110028</p>  </li>
              
            </ul>
            <ul className="space-y-2 hidden md:block">
              <li className='flex items-center gap-2'><Mail size={20}/> info@futurity.co.in</li>
              <li className='flex items-center gap-2'><Phone size={20}/>+91-9811284282</li>
              <li className='flex items-center gap-2 text-sm'><MapPin size={20}/><p> E-12, 2nd Floor, Naraina<br />Vihar, New Delhi 110028</p></li>
            </ul>
          </div> 

          {/* Column 4 - Follow Us */}
          <div className="footer-col text-xs md:text-sm">
            <h4 className="text-black font-bold mb-4 text-base">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-blue-600 text-white rounded-full hover:bg-white hover:text-blue-600">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-black text-white rounded-full hover:bg-white hover:text-black">
                <FaXTwitter />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom mt-8 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">© Futurity 2024. All Rights Reserved.</p>
          <div className="footer-links mt-4 md:mt-0 flex space-x-4 text-xs md:text-base">
            <a href="/" className="hover:text-white">Privacy Policy</a>
            <a href="/" className="hover:text-white">Terms of Service</a>
            <a href="/" className="hover:text-white">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterNew;
