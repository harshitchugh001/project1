import React, { useState } from "react";
import axios from "axios";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    lookingFor: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    companyName: "",
    message: "",
  });

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");
  
    try {
      const response = await axios.post(
        "https://iflex.frappe.cloud/api/resource/Lead",
        {
          lead_name: formData.firstName + " " + formData.lastName,
          first_name: formData.firstName,
          last_name: formData.lastName,
          mobile_no: formData.phoneNumber,
          email_id: formData.email,
          company_name: formData.companyName,
          custom_product_description: formData.message,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": "token 2563dd6485dcaa9:5b54330ec138938",
          },
        }
      );
      console.log("✅ Lead Created:", response.data);
      setSuccessMessage("Your enquiry has been submitted successfully!");
    } catch (error) {
      console.error("❌ Error Creating Lead:", error.response?.data || error.message);
      setErrorMessage("Failed to submit the enquiry. Please try again.");
    }
    setLoading(false);
  };
  
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
          <a href="#" className="hover:text-gray-300" onClick={() => navigate("/products") }>Products</a>
          <a href="#" className="hover:text-gray-300">About Us</a>
          <a href="#" className="hover:text-gray-300 border-b-2 border-white">Contact Us</a>
        </div>
        <button className="bg-white text-blue-900 px-4 py-2 rounded-md" onClick={() => navigate("/") }>Make an Enquiry</button>
        <button 
    className="bg-white text-blue-900 py-2 rounded-md"
    onClick={() => window.location.href = "https://iflex.frappe.cloud/"}
>
    Login
</button>

      </nav>

      {/* Contact Section */}
      <div className="flex flex-col md:flex-row p-8 md:p-16 gap-8">
        <div className="md:w-1/2">
          <h2 className="text-xl font-bold mb-4">Contact Us</h2>
          <h1 className="text-3xl font-bold mb-4">Products engineered for the future of Australia.</h1>
          <p className="mb-2">info@iflex.net.au</p>
          <p className="mb-2">1800 043 539</p>
          <p>PO Box 3034, Bankstown Square NSW 2200</p>
        </div>

        <div className="md:w-1/2 bg-gray-100 p-6 rounded-md shadow-md">
          <h2 className="text-2xl font-bold mb-4">How can we help?</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="lookingFor"
              placeholder="I am looking for.."
              className="w-full p-2 border rounded-md"
              value={formData.lookingFor}
              onChange={handleChange}
              required
            />
            <div className="flex space-x-2">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className="w-1/2 p-2 border rounded-md"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="w-1/2 p-2 border rounded-md"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <input
              type="text"
              name="phoneNumber"
              placeholder="Phone Number"
              className="w-full p-2 border rounded-md"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full p-2 border rounded-md"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="companyName"
              placeholder="Company Name"
              className="w-full p-2 border rounded-md"
              value={formData.companyName}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Tell us how we can help you"
              className="w-full p-2 border rounded-md"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button
              type="submit"
              className="bg-blue-900 text-white w-full py-2 rounded-md"
              disabled={loading}
              
            >
              {loading ? "Submitting..." : "Submit Enquiry"}
            </button>

            {successMessage && <p className="text-green-600 mt-2">{successMessage}</p>}
            {errorMessage && <p className="text-red-600 mt-2">{errorMessage}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
