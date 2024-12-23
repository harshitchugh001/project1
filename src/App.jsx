import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './components/Home/Home';

import FooterNew from './components/Footer/FooterNew';



const App = () => {
  return (
    <div className='mx-auto font-Mons'>
      <Router>
        <Navbar />
        <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        </div>
        <FooterNew />
      </Router>
    </div>
  )
}

export default App
