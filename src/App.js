import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import CoverSection from './components/CoverSection';
import ZgradaElegant from './components/ZgradaElegant';
import Galerija from './components/Galerija';
import Apartmani from './components/Apartmani';
import DetaljiStana from './components/DetaljiStana';
import ONama from './components/ONama';
import OObjekat from './components/OObjekat';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <ScrollToTop />
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
          <Route path="/o-nama" element={<ONama />} />
          <Route path="/o-objektu" element={<OObjekat />} />
          <Route path="/stanovi" element={<Apartmani />} />
          <Route path="/:id" element={<DetaljiStana />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
