import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Vets from './pages/Vets';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Footer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vets" element={<Vets />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
