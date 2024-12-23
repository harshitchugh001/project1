import React from "react";

const ServicesDropdown = () => {
    return (
        <div className="relative">
            {/* Dropdown Container */}
            <div className="absolute left-0 top-12 bg-white border rounded-lg shadow-lg w-full z-50">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-8 py-6">
                    {/* Aarambh */}
                    <div>
                        <h3 className="font-bold text-lg text-gray-700 mb-3">AARAMBH</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li>Private Limited Company</li>
                            <li>Public Limited Company</li>
                            <li>Limited Liability Partnership</li>
                            <li>Partnership Firm Registration (ROF)</li>
                            <li>Section 8 Company</li>
                            <li>12A and 80G Registration</li>
                            <li>Non-Profit Company Registration</li>
                            <li>Nidhi Company Registration</li>
                        </ul>
                    </div>

                    {/* Kavach */}
                    <div>
                        <h3 className="font-bold text-lg text-gray-700 mb-3">KAVACH</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li>Shram Suvidha Registration</li>
                            <li>Trademark Registration</li>
                        </ul>
                    </div>

                    {/* Pramanit */}
                    <div>
                        <h3 className="font-bold text-lg text-gray-700 mb-3">PRAMANIT</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li>Startup India Certificate</li>
                            <li>GeM Certificate</li>
                            <li>Tax Exemption Certificate</li>
                            <li>ZED Certificate</li>
                            <li>ISO Certificate</li>
                            <li>GST Registration & Certificate</li>
                            <li>FSSAI Certificate</li>
                            <li>IEC Certificate</li>
                            <li>NSIC Certification</li>
                            <li>Udyog Aadhaar (MSME)</li>
                        </ul>
                    </div>

                    {/* Nidhi */}
                    <div>
                        <h3 className="font-bold text-lg text-gray-700 mb-3">NIDHI</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li>Government Grants and Funding</li>
                            <li>Central Govt. - CGTMSE</li>
                            <li>Venture Capital</li>
                            <li>Seed Money</li>
                        </ul>
                    </div>

                    {/* Vikas */}
                    <div>
                        <h3 className="font-bold text-lg text-gray-700 mb-3">VIKAS</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li>Project Financing</li>
                            <li>Machinery Loan</li>
                            <li>Green Field Loan</li>
                            <li>Working Capital (CGTMSE Loan)</li>
                            <li>Business Loan</li>
                            <li>Line of Credit</li>
                            <li>MSME Loan</li>
                            <li>PMEGP Loan</li>
                            <li>MUDRA Loan</li>
                            <li>SME IPO</li>
                        </ul>
                    </div>

                    {/* Vistar */}
                    <div>
                        <h3 className="font-bold text-lg text-gray-700 mb-3">VISTAR</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li>Logo</li>
                            <li>Digital Marketing</li>
                            <li>Website</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesDropdown;
