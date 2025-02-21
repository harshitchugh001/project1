import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './components/Contact';
import Products from './components/Products';
import ProductDescription from './components/ProductDescription'

// import FooterNew from './components/FooterNew';

const App = () => {
  return (
    <div className="mx-auto font-Mons">
      <Router>
        <Routes>
          <Route path="/" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product-description" element={<ProductDescription/>} />
          {/* Add more routes as needed */}
        </Routes>
        {/* <FooterNew /> */}
      </Router>
    </div>
  );
};

export default App;
