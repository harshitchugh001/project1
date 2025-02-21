import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ProductList = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    // Fetch items from Frappe API
    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await axios.get("https://iflex.frappe.cloud/api/resource/Item", {
                    params: {
                        fields: JSON.stringify(["name", "description", "image","disabled"]),
                        filters: JSON.stringify([["disabled", "=", 0]])
                    },
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json",
                        "Authorization": "token 2563dd6485dcaa9:5b54330ec138938",
                    },
                });

                console.log("✅ Items Fetched:", response.data);
                setProducts(response.data.data);
            } catch (err) {
                console.error("❌ Error Fetching Items:", err.response?.data || err.message);
                setError("Failed to fetch items. Please try again.");
            } finally {
                setLoading(false);
            }
        };

        fetchItems();
    }, []);

    return (
        <div className="bg-white w-full">
            {/* Header Section */}
            <div className="bg-orange-600 text-white text-sm py-2 flex flex-col md:flex-row justify-between px-4 md:px-16 items-center">
                <div className="flex items-center space-x-4 mb-2 md:mb-0">
                    <span>📞 1800 043 539</span>
                    <span>✉️ info@iflex.net.au</span>
                </div>
                <div className="flex space-x-3">
                    <FaFacebookF className="cursor-pointer hover:text-gray-300" />
                    <FaInstagram className="cursor-pointer hover:text-gray-300" />
                    <FaLinkedinIn className="cursor-pointer hover:text-gray-300" />
                    <FaTiktok className="cursor-pointer hover:text-gray-300" />
                </div>
            </div>

            {/* Navbar */}
            <nav className="bg-blue-900 text-white py-4 px-4 md:px-16 flex flex-col md:flex-row justify-between items-center">
                <h1 className="text-2xl font-bold">IFLEX.</h1>
                <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 mt-3 md:mt-0">
                    <a href="#" className="hover:text-gray-300">Products</a>
                    <a href="#" className="hover:text-gray-300">About Us</a>
                    <a href="#" className="hover:text-gray-300 border-b-2 border-white" onClick={() => navigate("/")}>Contact Us</a>
                </div>
                <button className="bg-white text-blue-900 px-4 py-2 rounded-md mt-3 md:mt-0" onClick={() => navigate("/")}>
                    Make an Enquiry
                </button>
                <button 
    className="bg-white text-blue-900 py-2 rounded-md"
    onClick={() => window.location.href = "https://iflex.frappe.cloud/"}
>
    Login
</button>

            </nav>

            {/* Heading */}
            <h2 className="text-4xl font-bold text-center text-blue-900 my-8">
                OUR FLEXI RANGE
            </h2>

            {/* Show loading or error message */}
            {loading && <p className="text-center text-gray-500">Loading items...</p>}
            {error && <p className="text-center text-red-500">{error}</p>}

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 md:px-16 pb-8">
                {products.length > 0 ? (
                    products.map((product) => (
                        <div key={product.name} className="shadow-lg rounded-lg overflow-hidden cursor-pointer" onClick={() => navigate("/product-description")}>
                            <img src={product.image ? `https://iflex.frappe.cloud${product.image}` : "https://via.placeholder.com/300"}
                                alt={product.name}
                                className="w-full h-60 object-cover"
                            />
                            <div className="p-4 bg-white text-center">
                                <h3 className="text-lg font-semibold">{product.name}</h3>
                                <p className="text-gray-600 text-sm">{product.description || "No description available."}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    !loading && <p className="text-center text-gray-600">No products available.</p>
                )}
            </div>

        </div>
    );
};

export default ProductList;
