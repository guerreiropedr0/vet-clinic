import React from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';

const appStyle = {
  paddingBottom: '81px',
};

function App() {
  return (
    <div style={appStyle}>
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
