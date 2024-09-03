import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Services from './components/services/Service';
import Product from './components/Product/Product';
import Team from './components/team/Team';
import Contact from './components/Contact/Contact';
import Career from './components/Career/Career';
import Client from './components/Client/Client'


const App = () => {
  return (
    <div className='mx-auto font-Mons'>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/product" element={<Product />} />
          <Route path="/team" element={<Team />} />
          <Route path="/client" element={<Client />} />
          <Route path="/career" element={<Career/>} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  )
}

export default App