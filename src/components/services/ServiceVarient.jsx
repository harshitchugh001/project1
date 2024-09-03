import { motion } from 'framer-motion';
import { ServicesData } from '../content/services';

const serviceVariants = {
    hidden: { opacity: 0, y: 50 }, // Start below the screen
    visible: (index) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: index * 0.2, // Stagger animation for each service
            duration: 0.8,
            ease: 'easeOut'
        }
    })
};

export default function ServicesSection() {
    return (
        <div className='mt-10'>
            <h2 className="text-center text-2xl font-bold text-gray-700 mb-6">Futurity specializes in the following areas</h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-16 px-4 md:px-0 lg:px-4 container mx-auto">

                {ServicesData.map((service, index) => (
                    <motion.div
                        key={index}
                        className="flex flex-col justify-center items-center text-center md:-space-y-3 bg-gray-100 p-2 rounded-lg shadow-md"
                        variants={serviceVariants}
                        custom={index}
                        initial="hidden"
                        animate="visible"
                        whileHover={{ scale: 1.05, boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)" }}
                    >
                        <span className='text-gray-700 hover:text-gray-500 transition duration-150 cursor-pointer w-16 md:w-28'>
                            {service.image}
                        </span>
                        <h3 className="text-center text-xs md:text-base font-medium text-gray-800">{service.name}</h3>
                    </motion.div>
                ))}

            </div>
        </div>
    );
}
