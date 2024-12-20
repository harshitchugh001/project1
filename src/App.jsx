import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Services from './components/services/Service';
import FooterNew from './components/Footer/FooterNew';
import Product from './components/Product/Product';
import Team from './components/team/Team';
import Contact from './components/Contact/Contact';
import Career from './components/Career/Career';
import Client from './components/Client/Client';
import Find from './components/Find/FInd';
import Valuation from './components/Valuation/Valuation'
import Risk from './components/Risk/Risk.jsx';
import Disputes from './components/Disputes/Disputes'
import Corporate from './components/Corporate/Corporate'
import Transaction from './components/Transaction/Transaction'


const App = () => {
  return (
    <div className='mx-auto font-Mons'>
      <Router>
        <Navbar />
        <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/where-to-find-us" element={<Find />} />
          <Route path="/who-we-are" element={<Team />} />
          <Route path="/client" element={<Client />} />
          <Route path="/career" element={<Career/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/valuation' element={<Valuation/>}/>
          <Route path='/risk-consulting' element={<Risk/>}/>
          <Route path='/disputes-litigation' element={<Disputes/>}/>
          <Route path='/corporate-finance' element={<Corporate/>}/>
          <Route path='/transaction-advisory' element={<Transaction/>}/>
        </Routes>
        </div>
        <FooterNew />
      </Router>
    </div>
  )
}

export default App
