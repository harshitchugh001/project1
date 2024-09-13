import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-600 text-white py-10 ">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Column 1 - Company Name and Address */}
          <div className="footer-column">
            <h2 className="text-3xl font-bold mb-4">Futurity</h2>
            <p> E-12, 2nd Floor, Naraina<br />Vihar, New Delhi 110028</p>
          </div>

          {/* Column 2 - Navigation Links */}
          <div className="footer-column">
            <ul className="font-semibold space-y-2">
              <li><a href="/services" className="hover:underline">Services</a></li>
              <li><a href="/about" className="hover:underline">About Us</a></li>
              <li><a href="/team" className="hover:underline">Team</a></li>
              <li><a href="/career" className="hover:underline">Careers</a></li>
              <li><a href="/client" className="hover:underline">Clients</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          {/* Column 3 - Contact Info */}
          <div className="footer-column">
            <p className="font-semibold">Contact Information</p>
            <p className="mt-4">Email: <a href="mailto:info@futurity.co.in" className="underline">info@futurity.co.in</a></p>
            <p>Phone: +91-9811284282</p>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="footer-bottom mt-8 border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="social-icons flex space-x-4">
            <a href="/" className="hover:underline">Twitter</a>
            <a href="/" className="hover:underline">LinkedIn</a>
          </div>
          <p className="text-sm mt-4 md:mt-0">© Futurity 2024. All Rights Reserved.</p>
          <div className="footer-links mt-4 md:mt-0 flex space-x-4">
            <a href="/" className="hover:underline">Privacy Policy</a>
            <a href="/" className="hover:underline">Terms of Service</a>
            <a href="/" className="hover:underline">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
