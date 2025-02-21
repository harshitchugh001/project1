import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './components/Contact';
// import FooterNew from './components/FooterNew';

const App = () => {
  return (
    <div className="mx-auto font-Mons">
      <Router>
        <Routes>
          <Route path="/" element={<Contact />} />
          {/* Add more routes as needed */}
        </Routes>
        {/* <FooterNew /> */}
      </Router>
    </div>
  );
};

export default App;
