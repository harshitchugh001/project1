import React from 'react';

export default function Find() {
    return (
        <div className='mt-28'>
            <div className="find-page bg-gray-50 text-gray-900">
                <header className="text-center py-6 bg-blue-600 text-white">
                    <h1 className="text-3xl font-bold">Where to Find Us</h1>
                </header>
                <div className="container mx-auto px-6 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h2 className="text-2xl font-semibold mb-4 text-blue-700">New Delhi</h2>
                            <p>1st Floor, Surya Kiran Building,<br />K G Marg, Connaught Place,<br />New Delhi-110001.</p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold mb-4 text-blue-700">Mumbai</h2>
                            <p>17, Building No. A8,<br />Parasnath Complex,<br />Thane - 421302.</p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold mb-4 text-blue-700">Kolkata</h2>
                            <p>7th Floor, Room No. 3,<br />224A AJC Bose Road,<br />Kolkata - 700017.</p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold mb-4 text-blue-700">Gurugram</h2>
                            <p>46, 1st Floor, Jacaranda Marg,<br />Gurugram, Haryana - 122022.</p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold mb-4 text-blue-700">Ludhiana</h2>
                            <p>271, Maya Nagar, Civil Lines,<br />Ludhiana - 141001.</p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold mb-4 text-blue-700">Chandigarh</h2>
                            <p>1839, Sector 22-B, 01st Floor,<br />Chandigarh - 160022.</p>
                        </div>
                    </div>
                </div>
                {/* <footer className="bg-gray-200 py-4">
                    <div className="text-center">
                        <p className="text-sm text-gray-600">© 2024 Your Company Name. All Rights Reserved.</p>
                    </div>
                </footer> */}
            </div>
        </div>
    );
}
