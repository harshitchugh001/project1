import React from 'react'
import Hero from './Hero';
import Clients from './Clients';
// import Services from './Services.jsx';
// import Working from './Working';
import Mission from './Mission.jsx';
import Testimonials from './Testimonials.jsx';




const Home = () => {
    return (
        <div className='mt-28'>

            <Hero />
            <Mission/>
            <Clients />
            {/* <Services />
            <Working /> */}
            <Testimonials/>

        </div>
    )
}

export default Home
