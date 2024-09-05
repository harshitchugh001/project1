import React from 'react';
import { motion } from 'framer-motion';
import VarunSharma from '../../assets/Team/VarunSharma.png'
import SumitSharma from '../../assets/Team/SumitSharma.png'
import BrahmpalBhardwaj from '../../assets/Team/BrahmpalBhardwaj.png'
import DeepanshuTyagi from '../../assets/Team/DeepanshuTyagi.png'
import VarunSharma2 from '../../assets/Team/VarunSharma2.png'
import MLSareen from '../../assets/Team/MLSareen.png'
import VaibhavJain from '../../assets/Team/VaibhavJain.png'
import Conference from '../../assets/Team/Conference.jpg'
// import Image from '../../assets/image.png'

const experts = [
    {
        name: "Varun Sharma",
        image: VarunSharma,
        title: "Founder & Partner – Futurity Valuation Advisory LLP.",
        roles: [
            "Partner & National Leader - K G Somani & Co LLP.",
            "Sr Advisory (Infra) – Mazars Advisory LLP.",
            "Registered Valuer (Securities & Financial Assets) - IBBI"
        ],
        description: "Varun Sharma is a distinguished Chartered Accountant with over 16 years in valuation and financial consulting. He has conducted and supervised over 250 valuation engagements for mid-sized and large corporates, including both domestic and international clients."
    },
    {
        name: "Brahmpal Bhardwaj",
        image: BrahmpalBhardwaj,
        title: "Partner – Futurity Valuation Advisory LLP.",
        roles: [
            "Associate Member – Institute of Valuers.",
            "Registered Valuer (Plant & Machinery) - IBBI"
        ],
        description: "Brahmpal is a Master of Technology in Industrial and Production Engineering and Chartered Engineer in Mechanical Engineering. He has over 40 years of experience working in large corporates, specializing in technical studies related to business processes and transactions."
    },
    {
        name: "Varun Sharma",
        image: VarunSharma2,
        title: "Partner – Futurity Valuation Advisory LLP.",
        roles: [
            "Registered Valuer – Wealth Tax.",
            "Fellow Member – Institute of Valuers.",
            "Registered Valuer (Plant & Machinery) – IBBI (Land & Building) - IBBI"
        ],
        description: "Varun is a specialist Chartered Engineer with over 15 years of experience in technical studies, viability assessments, asset valuation, and related technical opinions."
    },
    {
        name: "M L Sareen",
        image: MLSareen,
        title: "Sr. Advisor – Futurity Valuation Advisory LLP.",
        roles: [
            "Ex-Deputy Chief – Housing & Urban Development Corporation.",
            "Associate Member – Institute of Valuers.",
            "Registered Valuer – Income Tax."
        ],
        description: "Mr. Sareen is a leading consultant with over 45 years of experience in infrastructure and real estate. He has been engaged by large business houses and government departments to provide technical opinions and inspect tangible assets."
    },
    {
        name: "Sumit Sharma",
        image: SumitSharma,
        title: "Head (Automotive), Vice-President – Futurity Valuation Advisory LLP.",
        roles: [
            "Previous Engagements: Associate Director – PwC, Audit Head – Sona Koyo."
        ],
        description: "Sumit has over 12 years of professional experience in governance, risk, and compliance, managing large risk, compliance, and controls-related engagements across sectors. He is also an automobile enthusiast with a proven record of managing projects from concept to completion."
    },
    {
        name: "Deepanshu Tyagi",
        image: DeepanshuTyagi,
        title: "Asst Vice President – Futurity Valuation Advisory LLP.",
        roles: [
            "Associate Member – Institute of Valuers.",
            "Chartered Engineer"
        ],
        description: "Deepanshu has over 8 years of experience in technical studies, viability assessments, and asset valuations. As a Chartered Engineer, he ensures that his engineering solutions are both innovative and compliant with industry regulations."
    },
    {
        name: "Vaibhav Jain",
        image: VaibhavJain,
        title: "Sr. Manager – Futurity Valuation Advisory LLP.",
        roles: [
            "Chartered Accountant"
        ],
        description: "Vaibhav is an expert in valuations with a broad spectrum of experience in equity valuation, impairment analysis, option valuation, financial modeling, and mergers & acquisitions. His audit capabilities extend to SOX compliance and statutory audit engagements."
    }
];

const Team = () => {
    return (
        <section className="py-12 bg-gray-100">
            {/* Here BackGround Image */}
            <div className="relative hidden md:block rounded-lg">
                <img
                    src={Conference} // Replace with your image path
                    alt="Team background"
                    className="w-full h-[600px] object-cover rounded-lg" // Adjust height as needed
                />

                {/* Transparent mask */}
                <div className="absolute h-[600px] inset-0 bg-black opacity-50"></div>

                {/* Centered heading */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-white text-4xl md:text-6xl font-bold opacity-70">Our Administration</h1>
                </div>
            </div>
            <div className="container mx-auto px-6">
                <h2 className="block md:hidden text-4xl font-extrabold text-center text-gray-900 mb-10 mt-24">Our Administration</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center md:mt-16">
                    {experts.map((expert, index) => (
                        <motion.div
                            key={index}
                            className={`bg-white p-6 rounded-lg shadow-lg h-fit md:min-h-[550px] ${index === experts.length - 1 ? 'md:col-span-2 lg:col-span-1 lg:col-start-2' : ''}`}
                            whileHover={{ scale: 1.05 }}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <img
                                src={expert.image}
                                alt={expert.name}
                                className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
                            />
                            <h3 className="md:text-xl text-lg font-semibold text-gray-700 mb-2 text-center">{expert.name}</h3>
                            <p className="text-gray-600 mb-6 text-xs md:text-base text-center ">{expert.title}</p>
                            <div >
                                <ul className="text-gray-600 mb-4 text-xs md:text-base ">
                                    {expert.roles.map((role, i) => (
                                        <li key={i} className="list-disc list-inside">{role}</li>
                                    ))}
                                </ul>
                                <p className="text-gray-600 text-xs md:text-base">{expert.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Team;