import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import CoverSection from './components/CoverSection';
import ZgradaElegant from './components/ZgradaElegant';
import Galerija from './components/Galerija';
import Apartmani from './components/Apartmani';
import DetaljiStana from './components/DetaljiStana';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <CoverSection />
              <ZgradaElegant />
              <Galerija />
            </>
          } />
          <Route path="/stanovi" element={<Apartmani />} />
          <Route path="/:id" element={<DetaljiStana />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
