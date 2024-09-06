import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ContactAnimate from '../../assets/ContactAnimate.json';
import Lottie from 'lottie-react';
import { Dot } from 'lucide-react';

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
};

const Contact = () => {
    const query = useQuery();
    const serviceFromQuery = query.get('service');
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        companyName: '',
        service: '',
        message: '',
        referral: ''
    });

    const navigate = useNavigate();

    useEffect(() => {
        if (serviceFromQuery) {
            setFormData(prevState => ({
                ...prevState,
                service: decodeURIComponent(serviceFromQuery.replace(/-/g, ' '))
            }));
        }
    }, [serviceFromQuery]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data submitted:', formData);
    };

    return (
        <div className="mt-28 px-4 md:px-0 mb-10">
            <section className="container mx-auto px-6 py-12">
                <div className="flex justify-center">
                    <h2 className="text-3xl text-gray-700 font-bold mb-4">Contact Us</h2>
                </div>

                {/* Align the animation and the form side by side */}
                <div className="flex flex-col lg:flex-row justify-between items-start">
                    {/* Animation Container */}
                    <div className="lg:w-1/2 mb-8 lg:mb-0 flex flex-col justify-start">
                        <div className="hidden md:block">
                            <Lottie
                                animationData={ContactAnimate}
                                loop={true}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    maxWidth: '1200px', // Control the width of the animation
                                    maxHeight: '1200px', // Control the height of the animation
                                }}
                            />
                        </div>

                    </div>

                    {/* Contact Form Container */}
                    <div className="lg:w-1/2">
                        <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="fullName" className="block text-gray-700">Full Name</label>
                                    <input
                                        type="text"
                                        id="fullName"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        className="mt-2 block w-full p-3 border border-gray-300 rounded-lg"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-gray-700">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="mt-2 block w-full p-3 border border-gray-300 rounded-lg"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-gray-700">Phone</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="mt-2 block w-full p-3 border border-gray-300 rounded-lg"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="companyName" className="block text-gray-700">Company Name</label>
                                    <input
                                        type="text"
                                        id="companyName"
                                        name="companyName"
                                        value={formData.companyName}
                                        onChange={handleChange}
                                        className="mt-2 block w-full p-3 border border-gray-300 rounded-lg"
                                        required
                                    />
                                </div>
                                <div className="md:col-span-2">
                                    <label htmlFor="referral" className="block text-gray-700">How did you hear about us?</label>
                                    <input
                                        type="text"
                                        id="referral"
                                        name="referral"
                                        value={formData.referral}
                                        onChange={handleChange}
                                        className="mt-2 block w-full p-3 border border-gray-300 rounded-lg"
                                    />
                                </div>
                                <div className="md:col-span-2">
                                    <label htmlFor="service" className="block text-gray-700">Select a Service</label>
                                    <select
                                        id="service"
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        className="mt-2 block w-full p-3 border border-gray-300 rounded-lg"
                                        required
                                    >
                                        <option value="">
                                            {formData.service ? (
                                                <div>{formData.service}</div>
                                            ) : (
                                                <div>-- Select a Service --</div>
                                            )}
                                        </option>
                                        <option value="Liquidation (IBC)">Liquidation (IBC)</option>
                                        <option value="Inward & Outward Transfers">Inward & Outward Transfers</option>
                                        <option value="Fairness Opinions">Fairness Opinions</option>
                                        <option value="IND-AS Compliances">IND-AS Compliances</option>
                                        <option value="Purchase Price Allocations">Purchase Price Allocations</option>
                                        <option value="Impairment Testing">Impairment Testing</option>

                                        {/* Disputes */}
                                        <option value="Expert Witness Testimony">Expert Witness Testimony</option>
                                        <option value="Family Settlements">Family Settlements</option>
                                        <option value="Litigation Support">Litigation Support</option>
                                        <option value="Dissenting Shareholder's">Dissenting Shareholder's</option>
                                        <option value="Claims-Damage assessments">Claims-Damage assessments</option>

                                        {/* Transactions */}
                                        <option value="Mergers & Acquisitions">Mergers & Acquisitions</option>
                                        <option value="Corporate Restructurings">Corporate Restructurings</option>
                                        <option value="Fund NAV Computations">Fund NAV Computations</option>
                                        <option value="ESOP-Sweat Equity Valuations">ESOP-Sweat Equity Valuations</option>
                                        <option value="Debt Restructurings">Debt Restructurings</option>

                                        {/* Instruments - Assets */}
                                        <option value="Shares">Shares</option>
                                        <option value="Debt Products-Derivatives">Debt Products-Derivatives</option>
                                        <option value="Disputes - Arbitrations">Disputes - Arbitrations</option>
                                        <option value="Property, Plant & Equipment">Property, Plant & Equipment</option>
                                        <option value="Intangible Assets (Goodwill, Customer relations, Brands)">Intangible Assets (Goodwill, Customer relations, Brands)</option>
                                        <option value="Claims">Claims</option>
                                        <option value="Losses - Financial Evaluations">Losses - Financial Evaluations</option>
                                        <option value="Distress Deals">Distress Deals</option>
                                        <option value="Others">Others</option>
                                    </select>
                                </div>
                                <div className="md:col-span-2">
                                    <label htmlFor="message" className="block text-gray-700">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="mt-2 block w-full p-3 border border-gray-300 rounded-lg"
                                        rows="5"
                                        required
                                    ></textarea>
                                </div>
                            </div>
                            <div className="mt-8 flex justify-center">
                                <button
                                    type="submit"
                                    className="font-bold text-xl text-white hover:text-black px-3 py-3 bg-gray-700 hover:bg-gray-200 rounded-lg transform duration-500"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>


            </section>


            <p className="text-gray-700 text-xs md:text-base font-medium text-center">
                <span className='font-bold'>Note:</span> For any inquiries about Futurity and the services we provide, please fill out the form above. We will respond shortly.
            </p>

        </div>
    );
};

export default Contact;
