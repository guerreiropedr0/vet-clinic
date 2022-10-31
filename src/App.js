import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Vets from './pages/Vets';
import Vet from './pages/Vet';
import VetForm from './components/VetForm';
import Owners from './pages/Owners';
import Owner from './pages/Owner';
import OwnerForm from './components/OwnerForm';

const appStyle = { paddingBottom: '80px' };

function App() {
  return (
    <BrowserRouter>
      <div style={appStyle}>
        <Navbar />
        <Footer />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/vets" element={<Vets />} />
          <Route path="/vets/:id" element={<Vet />} />
          <Route path="/vets/new" element={<VetForm />} />

          <Route path="/owners" element={<Owners />} />
          <Route path="/owners/:id" element={<Owner />} />
          <Route path="/owners/new" element={<OwnerForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
